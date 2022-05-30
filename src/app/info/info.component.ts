import { Component, OnInit } from '@angular/core';
import { images, Image } from '../ImageIndex';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  images:Image[]=images;
  constructor() { }

  ngOnInit(): void {
  }

}
