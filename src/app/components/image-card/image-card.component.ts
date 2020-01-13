import { Component, OnInit, Input } from '@angular/core';
import { PhotoItem } from 'src/app/models/photo-item';

@Component({
  selector: 'sol-image-card',
  templateUrl: './image-card.component.html'
})
export class ImageCardComponent implements OnInit {
  @Input() card: PhotoItem;

  constructor() { }

  ngOnInit() {
  }

}
