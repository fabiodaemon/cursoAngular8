import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public items = ['item1', 'item2', 'item3', 'item4'];
  public tarefa = "";

  addTarefa(){
    this.items.push(this.tarefa);
  }

  removeTarefa(item){
    this.items.splice(this.items.indexOf(item), 1);
  }

}
