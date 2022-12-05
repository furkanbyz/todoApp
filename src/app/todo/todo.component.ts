import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  displayAll : boolean = true;

  constructor() { }
  ngOnInit() {
  }

  

  name: string = "Furkan";
  model = new Model();

  getName() {
    return this.model.name;
  }

  getItems() {
    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter(item => item.action === false);
  }

  addItem(value : string){
    if(value !=""){
      this.model.items.push({description:value , action:false});
    }
    else{
      alert("bilgi giriniz")
    }
    
  }



  // name değeri string, items değeri any olarak tanımlandı

  // üç farklı item tanımlama yöntemi ancak benzer işlem model.ts içinde yapıldı
  // items: any[] = [
  //   "item1",
  //   "item2",
  //   "item3",
  //   "item4"
  // ]

  // items2: TodoItem[] = [
  //   { description: "kahvaltı", action: "yes" },
  //   { description: "spor", action: "no" },
  //   { description: "alışveriş", action: "yes" },
  // ]

  // items3: TodoItem[] = [
  //   new TodoItem("kahvaltı","yes"),
  //   new TodoItem("spor","no"),
  //   new TodoItem("alışveriş","yes")

  // ];

}
