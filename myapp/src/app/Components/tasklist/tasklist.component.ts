import { Component } from '@angular/core';
import {Task} from 'src/app/ViewModels/task';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  tasks: Task[] = [
    
  ];
  taskId=this.tasks.length-1;
  ToggleTask(id:number){
    for(let task of this.tasks){
      if(task.id===id)
        task.isDone=!task.isDone;
    }
}
IdGenrator():number{

return ++this.taskId;
}
AddTask(inputElement:HTMLInputElement){
  const taskDetails = inputElement.value.trim();
  if(taskDetails===""){
    alert("Fill Task Field");
  }
  else{
  this.tasks[this.tasks.length]=new Task(taskDetails, false,this.IdGenrator());
  inputElement.value=' ';
}

}
DeleteTask(id:number){
  this.tasks = this.tasks.filter(task => task.id != id);
}
GetTaskCount():number{
  return this.tasks.length;
}
GetDoneTaskCount():number{
  let doneCount=0;
for(let task of this.tasks){
  if(task.isDone){
    doneCount++;
  }
}
return doneCount;
}
}
