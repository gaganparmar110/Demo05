import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FacebookUserWork } from '@app/models';

export class AbstractFacebookUserWork extends RxHttp {
    facebookUserWorkFormGroup: IFormGroup<FacebookUserWork>
}
