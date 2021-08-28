import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'index-content',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexContentComponent {
  public constructor(route: ActivatedRoute) {}
}
