import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'src/app/models/select-item';

@Component({
  selector: 'sol-options-selection',
  templateUrl: './options-selection.component.html'
})
export class OptionsSelectionComponent implements OnInit {
  @Input() cameraValues: SelectItem;

  constructor() { }

  ngOnInit() {
  }

}
