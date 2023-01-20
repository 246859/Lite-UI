import {defineStore, StateTree, StoreDefinition} from "pinia";

export const MailStore: StoreDefinition = defineStore("mailStore", {
    state: () => {
        return {
            authCode: ""
        };
    },
    actions: {
        sendAuthMail(mail: string): Promise<boolean> {
            //TODO 这里实现发送邮箱的API
            return Promise.resolve(true);
        }
    },
    getters: {
        getAuthCode: (state: StateTree) => state.authCode
    }
});