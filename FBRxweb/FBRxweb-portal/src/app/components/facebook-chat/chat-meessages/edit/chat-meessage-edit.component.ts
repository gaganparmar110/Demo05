import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractChatMeessage } from '../domain/abstract-chat-meessage';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { ChatMessageBase } from '@app/database-models';

@Component({
    selector: "app-chat-meessage-edit",
    templateUrl: './chat-meessage-edit.component.html'
})
export class ChatMeessageEditComponent extends AbstractChatMeessage implements OnInit, OnDestroy {
    chatMeessage: ChatMessageBase;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.chatMeessageFormGroup = this.formBuilder.formGroup(ChatMessageBase,t) as IFormGroup<ChatMessageBase>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
