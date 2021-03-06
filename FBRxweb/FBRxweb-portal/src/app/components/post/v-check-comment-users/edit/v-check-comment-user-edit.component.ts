import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvCheckCommentUser } from '../domain/abstract-v-check-comment-user';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vCheckCommentUser } from '@app/models';

@Component({
    selector: "app-v-check-comment-user-edit",
    templateUrl: './v-check-comment-user-edit.component.html'
})
export class vCheckCommentUserEditComponent extends AbstractvCheckCommentUser implements OnInit, OnDestroy {
    vCheckCommentUser: vCheckCommentUser;
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
            this.vCheckCommentUserFormGroup = this.formBuilder.formGroup(vCheckCommentUser,t) as IFormGroup<vCheckCommentUser>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
