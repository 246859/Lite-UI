<template>
  <AuthFormCard>
    <template v-slot:form>
      <el-form
          label-position="top"
          label-width="100px"
          :model="cpdForm"
          :rules="changePasswordRules"
          ref="ruleFormRef"
      >

        <el-form-item :label="AuthLang.label.mail" prop="mail">
          <el-input size="large" clearable :placeholder="AuthLang.rules.mailInput" v-model="cpdForm.mail"/>
        </el-form-item>

        <el-form-item :label="AuthLang.label.newPassword" prop="newPassword">
          <el-input size="large" show-password clearable :placeholder="AuthLang.rules.passwordReInput" v-model="cpdForm.newPassword"/>
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
            type="primary" @click="changeSubmit(ruleFormRef)">确认
        </el-button>
      </div>
      <div>
        <el-button
            round
            type="success"
            @click="$router.push({name:'login'})">
          返回
        </el-button>
      </div>
    </template>
  </AuthFormCard>
</template>

<script lang="ts">
import AuthFormCard from "@/components/auth/AuthFormCard.vue";
import {changePasswordRules} from "@/entity/auth/AuthRules";
import {ChangePassword} from "@/entity/auth/AuthEntity";
import AuthCode from "@/components/auth/AuthCode.vue";
import {reactive, ref} from "vue";
import {FormInstance} from "element-plus";
import {AuthStore} from "@/store/AuthStore";
import {Message} from "@/utils/Message";
import {MailStore} from "@/store/MailStore";
import {storeToRefs} from "pinia";
import {AuthLang} from "@/lang/auth/AuthLang";
import {Common, CommonLang} from "@/lang/Common";

export default {
  name: "ChangePassword",
  components: {AuthFormCard, AuthCode},
  setup() {
    const authStore = AuthStore();
    const mailStore = MailStore();
    const {authCode} = storeToRefs(mailStore);
    const cpdForm: ChangePassword = reactive({
      mail: "",
      newPassword: "",
      authCode: authCode
    });
    const ruleFormRef = ref<FormInstance>();

    const changeSubmit = async (formEl: FormInstance | undefined) => {
      formEl?.validate(isValid => {
        if (isValid) {
          authStore.changePassword(cpdForm).then(res => {
            Message.success(AuthLang.ok.changePswd);
          }).catch(err => {
            Message.error(CommonLang.fail.netFail);
          });
        }
      });
    };
    return {
      changePasswordRules,
      cpdForm,
      ruleFormRef,
      changeSubmit,
      AuthLang

    };
  }
};
</script>

<style scoped>
</style>