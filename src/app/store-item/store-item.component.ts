import { Component, OnInit, Input } from '@angular/core';
import { StoreItem } from "../StoreItem";

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {

  @Input() item!:StoreItem;
  constructor() { }

  ngOnInit(): void {
  }

}
