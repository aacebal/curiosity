import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Camera } from 'src/app/models/rover';

@Component({
  selector: 'sol-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {
  @Input() item: Camera;
  @Output() emitSelectedItem = new EventEmitter<Camera>();

  constructor() { }

  ngOnInit() {
  }

  onItemSelect() {
    this.emitSelectedItem.emit(this.item);
  }

}
