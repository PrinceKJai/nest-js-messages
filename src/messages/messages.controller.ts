import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messageService: MessagesService) {}

    @Get()
    getAllMessages() {
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        return this.messageService.create(body.content);
    }

    @Get('/:id')
    getMessageByID(@Param('id') id: string) {
        return this.messageService.findOne(id);
    }
}
