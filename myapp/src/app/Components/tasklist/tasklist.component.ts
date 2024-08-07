import { Component } from '@angular/core';
import {Task} from 'src/app/ViewModels/task';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  taskId=-1;
  tasks: Task[] = [
    new Task('Task 1', false,this.IdGenrator()),
    new Task('Task 2', false,this.IdGenrator()),
    new Task('Task 3', false,this.IdGenrator())
  ];
  ToggleTask(id:number){
    this.tasks[id].isDone=!this.tasks[id].isDone;
}
IdGenrator():number{

return ++this.taskId;
}
AddTask(taskDetails:string){
  if(taskDetails===""){
    alert("Fill Task Feild");
  }
  else{
  this.tasks[this.tasks.length]=new Task(taskDetails, false,this.IdGenrator());
  }
}
DeleteTask(id:number){
  this.tasks = this.tasks.filter(task => task.id != id);
}
}
