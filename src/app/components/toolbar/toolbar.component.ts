import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sol-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  @Input() launched: string;
  @Input() landed: string;
  @Input() maxSol: number;

  constructor() { }

  ngOnInit() {
  }

}
