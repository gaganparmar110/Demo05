import {UserPostBase} from '../database-models/user-post-base';
import {FacebookUserBase} from '../database-models/facebook-user-base';
import {PostShareBase} from '../database-models/post-share-base';
import {PostLikeBase} from '../database-models/post-like-base';
import {PostCommentBase} from '../database-models/post-comment-base';
//Generated Imports
export class UserPost extends UserPostBase 
{




//#region Generated Reference Properties
//#region facebookUser Prop
facebookUser : FacebookUserBase;
//#endregion facebookUser Prop
//#region postShares Prop
postShares : PostShareBase[];
//#endregion postShares Prop
//#region postLikes Prop
postLikes : PostLikeBase[];
//#endregion postLikes Prop
//#region postComments Prop
postComments : PostCommentBase[];
//#endregion postComments Prop

//#endregion Generated Reference Properties

}