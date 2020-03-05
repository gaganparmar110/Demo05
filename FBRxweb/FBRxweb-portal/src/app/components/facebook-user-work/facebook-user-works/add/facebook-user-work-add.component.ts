import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { FacebookUserWork } from '@app/models';
import { AbstractFacebookUserWork } from '../domain/abstract-facebook-user-work';

@Component({
    selector: "app-facebook-user-work-add",
    templateUrl: './facebook-user-work-add.component.html'
})
export class FacebookUserWorkAddComponent extends AbstractFacebookUserWork implements OnInit, OnDestroy {
    facebookUserWork: FacebookUserWork;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.facebookUserWork = new FacebookUserWork();
        this.facebookUserWorkFormGroup = this.formBuilder.formGroup(this.facebookUserWork) as IFormGroup<FacebookUserWork>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
