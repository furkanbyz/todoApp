import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // name değeri string, items değeri any olarak tanımlandı
  name: string = "Furkan";
  items: any[] = [
    "item1",
    "item2",
    "item3",
    "item4"
  ]
  items2 = [
    { description: "kahvaltı", action: "yes" },
    { description: "spor", action: "no" },
    { description: "alışveriş", action: "yes" },
  ]
  getName() {
    return this.name;
  }

}
