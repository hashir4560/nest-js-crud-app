import { Body, Controller, Post } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodo } from "./create-todo.dto";

@Controller('todos')
export class TodosController{
    constructor(private readonly todosService:TodosService){}
    
    @Post()
    create(@Body() dto:CreateTodo){
        return this.todosService.create(dto)
    }

}