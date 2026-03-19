import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService) {}

    @Get()
    getAllMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessageByID(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);
        if(!message) {
            throw new NotFoundException("Message not found")
        }
        return message;
    }
}
