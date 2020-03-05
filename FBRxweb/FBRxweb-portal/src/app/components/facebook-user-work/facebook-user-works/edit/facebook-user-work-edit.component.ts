import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFacebookUserWork } from '../domain/abstract-facebook-user-work';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { FacebookUserWork } from '@app/models';

@Component({
    selector: "app-facebook-user-work-edit",
    templateUrl: './facebook-user-work-edit.component.html'
})
export class FacebookUserWorkEditComponent extends AbstractFacebookUserWork implements OnInit, OnDestroy {
    facebookUserWork: FacebookUserWork;
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
            this.facebookUserWorkFormGroup = this.formBuilder.formGroup(FacebookUserWork,t) as IFormGroup<FacebookUserWork>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
