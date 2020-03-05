import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vAllOnlineUserListBase } from '@app/database-models';
import { AbstractvOnlineUserList } from '../domain/abstract-v-online-user-list';

@Component({
    selector: "app-v-online-user-list-add",
    templateUrl: './v-online-user-list-add.component.html'
})
export class vOnlineUserListAddComponent extends AbstractvOnlineUserList implements OnInit, OnDestroy {
    vOnlineUserList: vAllOnlineUserListBase;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vOnlineUserList = new vAllOnlineUserListBase();
        this.vOnlineUserListFormGroup = this.formBuilder.formGroup(this.vOnlineUserList) as IFormGroup<vAllOnlineUserListBase>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
