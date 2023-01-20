/**
 * 登录用户抽象接口
 */
import {Ref} from "vue";

interface LoginUser extends AuthMail {

    /**
     * 用户名
     */
    username: string;

    /**
     * 密码
     */
    password?: string | Ref;
}

interface AuthMail {

    /**
     * 用户邮箱
     */
    mail?: string;
    /**
     * 邮箱验证
     */
    code?: string;
}

/**
 * 注册用户抽象接口
 */
interface RegisterUser extends AuthMail {

    /**
     * 昵称
     */
    nickname: string;

    /**
     * 密码
     */
    password: string;

    /**
     * 确认密码
     */
    confirmPassword: string;

}

/**
 * 修改密码抽象接口
 */
interface ChangePassword extends AuthMail {


    /**
     * 新密码
     */
    newPassword: string;
}

export {
    LoginUser,
    AuthMail,
    RegisterUser,
    ChangePassword,
};