import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'src/app/models/select-item';

@Component({
  selector: 'sol-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {
  open = false;

  @Input() label: string;
  @Input() values: SelectItem[];
  @Output() emitSelection = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  openCloseDropdown() {
    this.open = !this.open;
  }

  closeDropdown() {
    this.open = false;
  }

  onSelectItem(item: SelectItem) {
    item.checked = !item.checked;
    this.emitSelection.emit(item.value);
  }

  getValuesSelected() {
    return this.values.filter(item => item.checked).length;
  }

}
