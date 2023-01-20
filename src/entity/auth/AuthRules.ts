import {FormRules} from "element-plus";
import {reactive} from "vue";
import Regx from "@/utils/Regx";
import {AuthLang} from "@/lang/auth/AuthLang";

/**
 * 登陆表单验证规则
 */
const passwordLoginRules: FormRules = reactive({
    username: [
        {required: true, pattern: Regx.mail, message: AuthLang.rules.mailValidate, trigger: "blur"}
    ],
    password: [
        {required: true, message: AuthLang.rules.passwordInput, trigger: "blur"}
    ],
});

const authCodeLoginRules: FormRules = reactive({
    username: [
        {required: true, pattern: Regx.mail, message: AuthLang.rules.mailValidate, trigger: "blur"}
    ],
    authCode: [
        {required: true, message: AuthLang.rules.codeInput, trigger: "blur"}
    ],
});

/**
 * 注册表单验证规则
 */
const registerRules: FormRules = reactive({
    mail: [
        {
            required: true,
            pattern: Regx.mail,
            message: AuthLang.rules.mailValidate,
            trigger: "blur"
        },
    ],
    nickname: [
        {required: true, min: 3, max: 15, message: AuthLang.rules.nicknameValidate, trigger: "blur"}
    ],
    password: [
        {required: true, min: 3, max: 12, message: AuthLang.rules.passwordValidate, trigger: "blur"}
    ],
    confirmPassword: [
        {required: true, validator: undefined, trigger: "blur"}
    ],
    authCode: [
        {required: true, message: AuthLang.rules.codeInput, trigger: "blur"}
    ],
});


/**
 * 修改密码表单校验规则
 */
const changePasswordRules: FormRules = reactive({
    mail: [
        {
            required: true,
            pattern: Regx.mail,
            message: AuthLang.rules.mailValidate,
            trigger: "blur"
        }
    ],
    newPassword: [
        {required: true, min: 3, max: 12, message: AuthLang.rules.passwordValidate, trigger: "blur"}
    ],
    authCode: [
        {required: true, message: AuthLang.rules.codeInput, trigger: "blur"}
    ],
});

export {
    passwordLoginRules,
    authCodeLoginRules,
    registerRules,
    changePasswordRules
};