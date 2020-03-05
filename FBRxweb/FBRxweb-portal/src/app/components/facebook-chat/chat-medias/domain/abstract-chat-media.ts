import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { ChatMedia } from '@app/models';

export class AbstractChatMedia extends RxHttp {
    chatMediaFormGroup: IFormGroup<ChatMedia>
}
