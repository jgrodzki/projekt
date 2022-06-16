import { Component, OnInit } from '@angular/core';
import { images, Image } from '../ImageIndex';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:Image[]=images;
  constructor() { }

  ngOnInit(): void {
  }

}
