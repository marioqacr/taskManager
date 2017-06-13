export class TaskModel{
    constructor(
        public id:number,
        public name:string,
        public description:string,
        public dateTask:string,
        public priority:string,
        public createdAt:string,
        public updatedAt:string
    ){}
}