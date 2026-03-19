import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    getAllMessages() {
        return [
            {id: 1, message: "Hello"},
            {id: 2, message: "World"}
        ]
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        console.log("body", body);
    }

    @Get('/:id')
    getMessageByID(@Param('id') id: string) {
        console.log("id", id)
    }
}
