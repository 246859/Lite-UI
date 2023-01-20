<template>
  <AuthFormCard>
    <template v-slot:form>
      <el-form
          label-position="top"
          label-width="100px"
          :model="registerUser"
          :rules="registerRules"
          ref="ruleFormRef"
      >

        <el-form-item :label="AuthLang.label.mail" prop="mail">
          <el-input clearable size="large" :placeholder="AuthLang.rules.mailValidate" v-model="registerUser.mail"/>
        </el-form-item>

        <el-form-item :label="AuthLang.label.nickname" prop="nickname">
          <el-input clearable size="large" :placeholder="AuthLang.rules.nicknameValidate" v-model="registerUser.nickname"/>
        </el-form-item>

        <el-form-item :label="AuthLang.label.password" prop="password">
          <el-input clearable show-password size="large" :placeholder="AuthLang.rules.passwordValidate" v-model="registerUser.password"/>
        </el-form-item>

        <el-form-item :label="AuthLang.label.rePassword" prop="confirmPassword">
          <el-input clearable show-password size="large" :placeholder="AuthLang.rules.passwordReInput" v-model="registerUser.confirmPassword"/>
        </el-form-item>

        <el-form-item :label="AuthLang.label.code" prop="authCode">
          <auth-code/>
        </el-form-item>

      </el-form>
    </template>
    <template v-slot:footer>
      <div>
        <el-button
            round
            type="primary" @click="registerSubmit(ruleFormRef)">注册
        </el-button>
      </div>
      <div>
        <el-button
            round
            type="success" @click="$router.push({name:'login'})">返回
        </el-button>
      </div>

    </template>
  </AuthFormCard>
</template>

<script lang="ts">
import AuthFormCard from "@/components/auth/AuthFormCard.vue";
import {RegisterUser} from "@/entity/auth/AuthEntity";
import {reactive, ref} from "vue";
import {registerRules} from "@/entity/auth/AuthRules";
import AuthCode from "@/components/auth/AuthCode.vue";
import {FormInstance} from "element-plus";
import {AuthStore} from "@/store/AuthStore";
import {Message} from "@/utils/Message";
import {MailStore} from "@/store/MailStore";
import {storeToRefs} from "pinia";
import {AuthLang} from "@/lang/auth/AuthLang";
import {CommonLang} from "@/lang/Common";

export default {
  name: "RegisterPage",
  components: {AuthCode, AuthFormCard},
  setup() {

    const authStore = AuthStore();
    const mailStore = MailStore();
    const {authCode} = storeToRefs(mailStore);
    const ruleFormRef = ref<FormInstance>();

    const registerUser: RegisterUser = reactive({
      mail: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      authCode: authCode
    });

    registerRules.confirmPassword = [
      {
        required: true, message: AuthLang.rules.passwordReInput, trigger: "blur"
      },
      {
        required: true, validator: (rule, value, callback) => {
          value === registerUser.password ? callback() : callback(new Error(AuthLang.rules.unSamePassword));
        },
        trigger: "blur"
      }
    ];


    const registerSubmit = async (formEl: FormInstance | undefined) => {
      formEl?.validate(isValid => {
        if (isValid) {
          authStore.register(registerUser).then(res => {
            Message.success(AuthLang.ok.register);
          }).catch(err => {
            Message.error(CommonLang.fail.netFail);
          });
        }
      });
    };


    return {
      registerUser,
      registerRules,
      ruleFormRef,
      registerSubmit,
      AuthLang
    };
  },
};
</script>

<style>
</style>