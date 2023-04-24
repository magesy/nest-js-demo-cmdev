import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    
    constructor(private todoService:TodoService){}

    @Get()
    getodo(){
        return this.todoService.getTodos()
    }

    @Post()// http body
    postodo(@Body('title') title:string, @Body('subtitle') subtitle:string){
        this.todoService.addTodo(title,subtitle)
        return `post is success title : ${title}`
    }

    @Delete('/:id')
    deletetodoByid(@Param("id") id:string){
        console.log(`id : ${id}`)
        return this.todoService.removeTodoById(id)
    }
}
