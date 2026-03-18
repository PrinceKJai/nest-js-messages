export declare class MessagesController {
    getAllMessages(): {
        id: number;
        message: string;
    }[];
    createMessage(body: any): void;
    getMessageByID(id: string): void;
}
