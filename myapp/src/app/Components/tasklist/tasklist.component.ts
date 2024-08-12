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
  taskObject: { [category: string]: Task[] } = {};
  searchResults:Task[]=this.tasks;
  taskId=this.tasks.length-1;
  isCategorized=false;
  ToggleSwitch(event:Event){
  this.isCategorized=!this.isCategorized;
  }
  ToggleTask(id:number){
    for(let task of this.tasks){
      if(task.id===id){
        task.isDone=!task.isDone;
      }
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
      this.taskObject={};
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


AddTask(taskInputElement:HTMLInputElement,categoryInputElement:HTMLInputElement,SearchInput:HTMLInputElement){
  const taskDetails = taskInputElement.value.trim();
  const taskCategory = categoryInputElement.value.trim();
  if(taskDetails===""){
    alert("Please Fill Task Title Field");
  }
  else{
    
    
      console.log(this.taskObject);
      this.tasks[this.tasks.length]=new Task(taskDetails, false,this.IdGenrator(),taskCategory);
      this.SearchResults(SearchInput);
      taskInputElement.value='';
      categoryInputElement.value='';
      if (!this.taskObject[taskCategory]) {
        this.taskObject[taskCategory] = [];
        this.taskObject[taskCategory].push(this.tasks[this.tasks.length-1]);
      }
      else{
        this.taskObject[taskCategory].push(this.tasks[this.tasks.length-1]);
      }
      const filterElement = document.getElementById('Filter') as HTMLSelectElement;
      filterElement.value = this.FilterResult;
      filterElement.dispatchEvent(new Event('change'));
    console.log("categories" +this.GetCategories());

}

}
DeleteTask(id:number,SearchInput:HTMLInputElement){
  const deletedTask=this.tasks.find(task=>task.id==id);
  this.tasks = this.tasks.filter(task => task.id != id);
  this.SearchResults(SearchInput);
  const filterElement = document.getElementById('Filter') as HTMLSelectElement;
  filterElement.value = this.FilterResult;
  filterElement.dispatchEvent(new Event('change'));
    if(deletedTask){
      this.taskObject[deletedTask.category]=this.taskObject[deletedTask.category].filter(task=>task.id!==deletedTask.id);
      if (this.taskObject[deletedTask.category].length === 0) {
        delete this.taskObject[deletedTask.category];
    }
  }

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
GetCategories() {
  return Object.entries(this.taskObject);
}
}
