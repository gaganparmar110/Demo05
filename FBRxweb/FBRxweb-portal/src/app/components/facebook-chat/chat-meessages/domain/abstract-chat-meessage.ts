import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { ChatMessageBase } from '@app/database-models';

export class AbstractChatMeessage extends RxHttp {
    chatMeessageFormGroup: IFormGroup<ChatMessageBase>
}
