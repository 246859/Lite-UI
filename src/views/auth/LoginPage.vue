<template>
  <AuthFormCard>
    <template v-slot:form>
      <el-form
          label-position="top"
          label-width="100px"
          :model="loginForm"
          :rules="loginRules"
          ref="ruleFormRef"
      >

        <el-form-item :label="AuthLang.label.mail" prop="username">
          <el-input clearable size="large" :placeholder="AuthLang.rules.mailInput" v-model="loginForm.username"/>
        </el-form-item>

        <el-form-item :label="AuthLang.label.password" prop="password">
          <el-input show-password size="large" :placeholder="AuthLang.rules.passwordInput" v-model="loginForm.password"/>
        </el-form-item>

      </el-form>

    </template>
    <template v-slot:footer>
      <div>
        <el-button
            round
            type="primary"
            @click="loginSubmit(ruleFormRef)"
        >登陆
        </el-button>
      </div>
      <div>
        <el-button
            round
            type="success"
            @click="$router.push({name:'register'})"
        >注册
        </el-button>
      </div>
      <div>
        <el-button type="success" text round class="forget-password" @click="$router.push({name:'changePassword'})">
          忘记密码
        </el-button>
      </div>
    </template>

  </AuthFormCard>
</template>

<script lang="ts">
import {reactive, ref} from "vue";
import AuthFormCard from "@/components/auth/AuthFormCard.vue";
import {AuthStore} from "@/store/AuthStore";
import {Message} from "@/utils/Message";
import {FormInstance} from "element-plus";
import {LoginUser} from "@/entity/auth/AuthEntity";
import {passwordLoginRules} from "@/entity/auth/AuthRules";
import {AuthLang} from "@/lang/auth/AuthLang";
import {Common, CommonLang} from "@/lang/Common";

export default {
  name: "LoginPage",
  components: {
    AuthFormCard,
  },
  setup() {
    const authStore = AuthStore();
    const ruleFormRef = ref<FormInstance>();

    let loginForm: LoginUser = reactive({
      username: "",
      password: "",
    });

    let loginRules = passwordLoginRules;

    const loginSubmit = async (formEl: FormInstance | undefined) => {

      await formEl?.validate((isValid, invalidFields) => {
        if (isValid) {
          authStore.login(loginForm).then(res => {
            if (res) {
              Message.success(AuthLang.ok.login);
            }
          }).catch(err => {
            Message.error(CommonLang.fail.netFail + err);
          });
        }
      });
    };


    return {
      loginForm,
      loginRules,
      loginSubmit,
      ruleFormRef,
      AuthLang
    };
  }
};
</script>

<style scoped>
.forget-password {
  padding: 15px !important;
}
</style>