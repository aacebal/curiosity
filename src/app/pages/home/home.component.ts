import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'src/app/models/select-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  launchedValue: string = '2011-11-26';
  landedValue: string = '2012-08-06'
  maxSol: number = 2540;
  cameraValues: SelectItem[] = [
    { name: 'Front Hazard Avoidance Camera', value: 'fhac', checked: false },
    { name: 'Navigation Camera', value: 'nc', checked: false },
    { name: 'Mast Camera', value: 'mc', checked: false },
  ]

  constructor() { }

  ngOnInit() {
  }

}
