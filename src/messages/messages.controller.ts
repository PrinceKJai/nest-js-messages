import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    getAllMessages() {
        return [
            {id: 1, message: "Hello"},
            {id: 2, message: "World"}
        ]
    }
}
