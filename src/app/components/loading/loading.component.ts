import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sol-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {
  @Input() loading = false;

  constructor() { }

  ngOnInit() {
  }
}
