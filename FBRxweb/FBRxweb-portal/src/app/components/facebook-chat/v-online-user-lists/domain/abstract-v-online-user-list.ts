import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vAllOnlineUserListBase } from '@app/database-models';

export class AbstractvOnlineUserList extends RxHttp {
    vOnlineUserListFormGroup: IFormGroup<vAllOnlineUserListBase>
}
