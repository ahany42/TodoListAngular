export class StoreData {
    name:string;
    imgURL:string;
    branches:string[];
    constructor(name:string,imgURL:string,branches:string[]){
        this.name=name;
        this.imgURL=imgURL;
        this.branches=branches;
    }
}
