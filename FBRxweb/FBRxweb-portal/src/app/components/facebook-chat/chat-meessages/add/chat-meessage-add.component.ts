import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { ChatMessageBase } from '@app/database-models';
import { AbstractChatMeessage } from '../domain/abstract-chat-meessage';

@Component({
    selector: "app-chat-meessage-add",
    templateUrl: './chat-meessage-add.component.html'
})
export class ChatMeessageAddComponent extends AbstractChatMeessage implements OnInit, OnDestroy {
    chatMeessage: ChatMessageBase;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.chatMeessage = new ChatMessageBase();
        this.chatMeessageFormGroup = this.formBuilder.formGroup(this.chatMeessage) as IFormGroup<ChatMessageBase>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
