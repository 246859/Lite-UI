import {defineStore} from "pinia";
import {ChangePassword, LoginUser, RegisterUser} from "@/entity/auth/AuthEntity";

export const AuthStore = defineStore("authStore", {
    actions: {
        login(form: LoginUser): Promise<boolean> {
            //TODO 这里处理登陆逻辑
            return Promise.resolve(true);
        },
        register(form: RegisterUser): Promise<boolean> {
            //TODO 这里处理注册的逻辑
            return Promise.resolve(true);
        },
        changePassword(form: ChangePassword): Promise<boolean> {
            //TODO 这里处理修改密码的逻辑
            return Promise.resolve(true);
        }
    }
});