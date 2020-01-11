import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'src/app/models/select-item';

@Component({
  selector: 'sol-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {
  @Input() item: SelectItem;
  @Output() emitSelectedItem = new EventEmitter<SelectItem>();

  constructor() { }

  ngOnInit() {
  }

  onItemSelect() {
    this.emitSelectedItem.emit(this.item);
  }

}
