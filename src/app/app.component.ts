import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  
  items = [
    {description:"kahvaltı",action:"no"},
    {description:"sinema",action:"no"},
    {description:"ders çalışma",action:"no"},
    {description:"piknik",action:"no"}
  ];
}
