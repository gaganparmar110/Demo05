import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { EducationDetailBase } from '@app/database-models';
import { AbstractEducationDetail } from '../domain/abstract-education-detail';
import { FormGroup } from '@angular/forms';

@Component({
    selector: "app-education-detail-add",
    templateUrl: './education-detail-add.component.html'
})
export class EducationDetailAddComponent extends AbstractEducationDetail implements OnInit, OnDestroy {
    educationDetail: EducationDetailBase;
    subscription: Subscription;
   // educationDetailFormGroup:FormGroup;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.educationDetail = new EducationDetailBase();
       // this.educationDetailFormGroup = this.formBuilder.formGroup(this.educationDetail) as IFormGroup<EducationDetailBase>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
