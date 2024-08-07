import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
storeInfo:StoreData;
isImgShown:boolean=true;
constructor(){
  this.storeInfo=new StoreData("Test Store","https://picsum.photos/50/50",["New Cairo","Nasr City"]);
}
toggleImg(){
  this.isImgShown=!this.isImgShown;
}

}
