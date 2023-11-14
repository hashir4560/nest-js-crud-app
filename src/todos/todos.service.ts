import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import {  DeepPartial, Repository } from "typeorm";
import { CreateTodo } from "./create-todo.dto";



@Injectable()
export class TodosService{

    constructor(@InjectRepository(Todo) private readonly todoRepository:Repository<Todo>,){}
    async create(dto:CreateTodo){
        const todo=this.todoRepository.create(dto as DeepPartial<Todo>);

        return await this.todoRepository.save(todo)
}

        findMany(){
            return this.todoRepository.find()
}

         async update(id:number,dto:CreateTodo   ){
            const todo= await this.todoRepository.findOne({where:{id}})
            //check that records exists 
            
            Object.assign(todo,dto)
             return await this.todoRepository.save(todo);
        }
}