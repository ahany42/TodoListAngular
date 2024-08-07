export class Task {
    details:string;
    isDone:boolean;
    id:number;
    constructor(details:string,isDone:boolean,id:number){
        this.details=details;
        this.isDone=isDone;
        this.id=id;
    }
}
