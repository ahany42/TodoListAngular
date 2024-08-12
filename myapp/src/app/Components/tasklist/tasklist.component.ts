import { Component } from '@angular/core';
import {Task} from 'src/app/ViewModels/task';
import { TaskPlaceholderComponent } from '../task-placeholder/task-placeholder.component';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  tasks: Task[] = [
    
  ];
  searchResults:Task[]=this.tasks;
  taskId=this.tasks.length-1;
  ToggleTask(id:number){
    for(let task of this.tasks){
      if(task.id===id)
        task.isDone=!task.isDone;
    }
  const filterElement = document.getElementById('Filter') as HTMLSelectElement;
  filterElement.value = this.FilterResult;
  filterElement.dispatchEvent(new Event('change'));
}
IdGenrator():number{

return Date.now();
}
DeleteAllTasks(searchInput:HTMLInputElement){
  const confirmation=confirm("Are You Sure You Want To Delete All Tasks?");
  if(confirmation){
    this.tasks=[];
    this.searchResults=[];
    searchInput.value="";
  }
}
FilterResult:string="All";
SearchResults(inputElement?:HTMLInputElement,event?:Event){
  if(inputElement){
    if(inputElement.value.length===0 )
      this.searchResults=this.tasks;
    else if(inputElement.value===" "){
      inputElement.value="";
    }
    else{
      this.searchResults=this.tasks.filter(task=>task.details.toLowerCase().includes(inputElement.value.toLocaleLowerCase()));
    }
  }
  else{
    this.searchResults=this.tasks;
  }
  if(event){

    const selectedElement = event.target as HTMLSelectElement;
    this.FilterResult=selectedElement.value;
  }
    if(this.FilterResult==="Completed"){
      this.searchResults=this.searchResults.filter(el=>(el.isDone));
    }
    else if(this.FilterResult==="To-Do"){
      this.searchResults=this.searchResults.filter(el=>(!el.isDone));
    }
    else{
      this.searchResults=this.searchResults;
    }
  
}

AddTask(inputElement:HTMLInputElement,SearchInput:HTMLInputElement){
  const taskDetails = inputElement.value.trim();
  if(taskDetails===""){
    alert("Fill Task Field");
  }
  else{
  this.tasks[this.tasks.length]=new Task(taskDetails, false,this.IdGenrator());
  this.SearchResults(SearchInput);
  inputElement.value=' ';
  const filterElement = document.getElementById('Filter') as HTMLSelectElement;
  filterElement.value = this.FilterResult;
  filterElement.dispatchEvent(new Event('change'));


}

}
DeleteTask(id:number,SearchInput:HTMLInputElement){
  this.tasks = this.tasks.filter(task => task.id != id);
  this.SearchResults(SearchInput);
  const filterElement = document.getElementById('Filter') as HTMLSelectElement;
  filterElement.value = this.FilterResult;
  filterElement.dispatchEvent(new Event('change'));
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
