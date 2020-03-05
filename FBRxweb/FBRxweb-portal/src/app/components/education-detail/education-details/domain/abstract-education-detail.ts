import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { EducationDetail } from '@app/models';

export class AbstractEducationDetail extends RxHttp {
    educationDetailFormGroup: IFormGroup<EducationDetail>
}
