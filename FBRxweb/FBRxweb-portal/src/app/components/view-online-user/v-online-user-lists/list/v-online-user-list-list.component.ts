import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvOnlineUserList } from '../domain/abstract-v-online-user-list';
import { vAllOnlineUserListBase } from "@app/database-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-online-user-list-list",
    templateUrl:'./v-online-user-list-list.component.html'
})
export class vOnlineUserListListComponent extends AbstractvOnlineUserList implements OnInit, OnDestroy {
    vOnlineUserLists: List<vAllOnlineUserListBase>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vAllOnlineUserListBase>) => {
            this.vOnlineUserLists = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
