// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id?: number;
    userAccount?: string;
    userName?: string;
    avatar?: string;
    gender?: number;
    phone?: string;
    email?: string;
    userStatus?: number;
    isDelete?: number;
    userRole?: number;
  };

  type LoginResult = {
    id?: number;
    userAccount?: string;
    userName?: string;
    avatar?: string;
    gender?: number;
    phone?: string;
    email?: string;
    userStatus?: number;
    isDelete?: number;
    userRole?: number;
  };

  type RegisterResult = {
    id?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type ResponseBase<T> = {
    code?: number;
    message?: string;
    description?: string;
    data?: T;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  /** 注册参数 */
  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    inviteCode?: string;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
