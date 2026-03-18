import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
    createMessage(@Body() body: any) {
        console.log("body", body);
    }

    @Get('/:id')
    getMessageByID(@Param('id') id: string) {
        console.log("id", id)
    }
}
