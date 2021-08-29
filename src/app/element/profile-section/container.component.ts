import {
  Compiler,
  Component,
  ComponentFactory,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import * as _ from 'lodash';
import { concat, forkJoin, from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProfileSectionEditComponent } from 'src/app/element/profile-section/edit.component';
import { ProfileSectionShowComponent } from 'src/app/element/profile-section/show.component';

export type Mode = 'show' | 'edit';
export type ProfileSectionComponent =
  | ProfileSectionEditComponent
  | ProfileSectionShowComponent;
@Component({
  selector: 'profile-section-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ProfileSectionContainerComponent implements OnInit {
  @Input()
  public label: string = '';
  @Input()
  public data: Object = {};
  @Input()
  public profileType: string = '';
  @ViewChild('container', { read: ViewContainerRef, static: false })
  private container: ViewContainerRef | undefined;
  public shared: Object = {};
  private compiler: Compiler;
  public component: ProfileSectionComponent | undefined;
  private mode: Mode = 'show';
  private loading = false;
  private isSetUp: { [k in Mode]: boolean } = { show: false, edit: false };

  public constructor(compiler: Compiler) {
    this.compiler = compiler;
  }

  public ngOnInit() {
    this.shared = this.data;
    this.show();
  }

  public confirm(): void {
    this.loading = true;
    forkJoin(
      concat(
        (<ProfileSectionEditComponent>this.component).submit$(),
        this.init$('show')
      )
    ).subscribe(() => {
      this.mode = 'show';
      this.loading = false;
    });
  }

  public show(): void {
    this.loading = true;
    this.init$('show').subscribe(() => {
      this.mode = 'show';
      this.loading = false;
    });
  }

  public edit(): void {
    this.loading = true;
    this.init$('edit').subscribe(() => {
      this.mode = 'edit';
      this.loading = false;
    });
  }

  public getLabel(): string {
    return this.label;
  }

  public isEditMode(): boolean {
    return this.mode == 'edit';
  }

  public isEditable(): boolean {
    return this.profileType != undefined;
  }

  public isLoading(): boolean {
    return this.loading;
  }

  public getForm() {
    return (this.component as ProfileSectionEditComponent).form;
  }

  protected getComponent(): ProfileSectionComponent {
    return this.component as ProfileSectionComponent;
  }

  protected getContainer(): ViewContainerRef {
    return this.container as ViewContainerRef;
  }

  private getModuleInfo(label: string) {
    const studlyLabel = _.upperFirst(_.camelCase(label));

    return {
      showMdlPath: './show/' + label + '.module',
      showMdlName: 'ProfileSectionShow' + studlyLabel + 'Module',
      showCmpPath: './show/' + label + '.component',
      showCmpName: 'ProfileSectionShow' + studlyLabel + 'Component',
      editMdlPath: './edit/' + label + '.module',
      editMdlName: 'ProfileSectionEdit' + studlyLabel + 'Module',
      editCmpPath: './edit/' + label + '.component',
      editCmpName: 'ProfileSectionEdit' + studlyLabel + 'Component',
    };
  }

  private init$(mode: Mode): Observable<any> {
    const info = this.getModuleInfo(this.label);
    const cmpName = mode == 'edit' ? info.editCmpName : info.showCmpName;
    const cmpPath = mode == 'edit' ? info.editCmpPath : info.showCmpPath;
    const mdlPath = mode == 'edit' ? info.editMdlPath : info.showMdlPath;
    const mdlName = mode == 'edit' ? info.editMdlName : info.showMdlName;
    const mdlCons = require(`${mdlPath}\.ts`)[mdlName];
    const cmpCons = require(`${cmpPath}\.ts`)[cmpName];

    return of([true]).pipe(
      switchMap(() => {
        const setUp$ = cmpCons.setUp$(this.shared);
        const observs = [
          from(this.compiler.compileModuleAndAllComponentsAsync(mdlCons)),
        ];

        if (this.isSetUp[mode] == false) {
          setUp$ ? observs.push(setUp$) : null;
          this.isSetUp[mode] = true;
        }

        return forkJoin(...observs);
      }),
      map(([promise]) => {
        this.getContainer().clear();

        const cmpFactories = promise.componentFactories;
        const cmpFactory = <ComponentFactory<any>>(
          _.find(cmpFactories, ['componentType.name', cmpName])
        );

        this.component =
          this.getContainer().createComponent(cmpFactory).instance;
        this.getComponent().shared = this.shared;

        if (mode == 'edit') {
          (<ProfileSectionEditComponent>this.component).profileType =
            this.profileType;
        }
      })
    );
  }
}
