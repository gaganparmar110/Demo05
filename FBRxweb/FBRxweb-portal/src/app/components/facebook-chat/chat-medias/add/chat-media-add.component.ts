import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { ChatMedia } from '@app/models';
import { AbstractChatMedia } from '../domain/abstract-chat-media';

@Component({
    selector: "app-chat-media-add",
    templateUrl: './chat-media-add.component.html'
})
export class ChatMediaAddComponent extends AbstractChatMedia implements OnInit, OnDestroy {
    chatMedia: ChatMedia;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.chatMedia = new ChatMedia();
        this.chatMediaFormGroup = this.formBuilder.formGroup(this.chatMedia) as IFormGroup<ChatMedia>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
