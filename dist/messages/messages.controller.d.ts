import { CreateMessageDTO } from './dtos/create-message.dto';
export declare class MessagesController {
    getAllMessages(): {
        id: number;
        message: string;
    }[];
    createMessage(body: CreateMessageDTO): void;
    getMessageByID(id: string): void;
}
