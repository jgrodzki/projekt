import { Component, OnInit } from '@angular/core';
import { StoreItem } from "../StoreItem"
import { ITEMS } from "../temp"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items:StoreItem[]=ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
