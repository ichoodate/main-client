import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropdown-select',
  templateUrl: './dropdown-select.component.html'
})
export class DropdownSelectComponent {

  @Input('items') private items: string[];

  private selected: string;

  public click(item: string) {

    this.selected = item;
  }

  public getItems()
  {
    return this.items;
  }

}
