export class Task {
    details:string;
    isDone:boolean;
    id:number;
    category:string;
    constructor(details:string,isDone:boolean,id:number,category:string){
        this.details=details;
        this.isDone=isDone;
        this.id=id;
        this.category=category;
    }
}
