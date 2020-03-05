import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractChatMeessage } from '../domain/abstract-chat-meessage';
import { ChatMessageBase } from "@app/database-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-chat-meessage-list",
    templateUrl:'./chat-meessage-list.component.html'
})
export class ChatMeessageListComponent extends AbstractChatMeessage implements OnInit, OnDestroy {
    chatMeessages: List<ChatMessageBase>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<ChatMessageBase>) => {
            this.chatMeessages = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
