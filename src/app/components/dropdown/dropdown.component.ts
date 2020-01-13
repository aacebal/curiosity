import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Camera } from 'src/app/models/rover';

@Component({
  selector: 'sol-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {
  open = false;

  @Input() label: string;
  @Input() values: Camera[];
  @Output() emitSelection = new EventEmitter<Camera>();
  @Output() emitAllItemsSelected = new EventEmitter<void>();
  @Output() emitClearAllItems = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  openCloseDropdown() {
    this.open = !this.open;
  }

  closeDropdown() {
    this.open = false;
  }

  onSelectItem(item: Camera) {
    item.checked = !item.checked;
    this.emitSelection.emit(item);
  }

  onSelectAllItems() {
    this.values.forEach(value => value.checked = true);
    this.emitAllItemsSelected.emit();
  }

  clearAllItems() {
    this.values.forEach(value => value.checked = false);
    this.emitClearAllItems.emit();
  }

  getValuesSelected() {
    return this.values && this.values.filter(item => item.checked).length || 0;
  }

}
