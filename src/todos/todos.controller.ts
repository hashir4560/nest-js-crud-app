import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodo } from "./create-todo.dto";

@Controller('todos')
export class TodosController{
    constructor(private readonly todosService:TodosService){}
    
    @Post()
    create(@Body() dto:CreateTodo){
        return this.todosService.create(dto)
    }
    @Get()
    findMany(){
        return this.todosService.findMany()
        
    }

    @Put( ":id")
    
        update(@Param("id") id:number,@Body()dto:   CreateTodo){

            return this.todosService.update(id,dto)
        }
       

}