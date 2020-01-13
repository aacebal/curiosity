import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Camera } from 'src/app/models/rover';

@Component({
  selector: 'sol-options-selection',
  templateUrl: './options-selection.component.html'
})
export class OptionsSelectionComponent implements OnInit {
  @Input() sol: number;
  @Input() cameraValues: Camera[];
  @Output() solChange = new EventEmitter<number>();
  @Output() emitCamerasSelected = new EventEmitter<Camera>();
  @Output() emitAllCamerasSelected = new EventEmitter<void>();
  @Output() emitClearCameras = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  cameraSelected(camera) {
    this.emitCamerasSelected.emit(camera)
  }

  onChange(sol) {
    this.solChange.emit(sol)
  }

  onSelectAllCameras() {
    this.emitAllCamerasSelected.emit();
  }

  clearCameras() {
    this.emitClearCameras.emit();
  }

}
