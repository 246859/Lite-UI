<template>
  <!--这里必须定义一个Form，不然value永远都是undefine（玄学问题）-->
  <div class="auth-code">
    <el-input style="width: 55%" clearable size="large" :placeholder="AuthLang.rules.codeInput" v-model="authCode"/>
    <el-button text bg type="primary">发送验证码</el-button>
  </div>
</template>

<script lang="ts">

import {MailStore} from "@/store/MailStore";
import {storeToRefs} from "pinia";
import {AuthLang} from "@/lang/auth/AuthLang";

export default {
  name: "AuthCode",
  setup() {

    const mailStore = MailStore();
    const {authCode} = storeToRefs(mailStore);
    return {
      authCode,
      AuthLang
    };
  }
};
</script>

<style scoped>
.auth-code {
  display: flex;
  justify-content: space-between;
}

.auth-code :deep(.el-button>span) {
  font-size: 14px;
}

.auth-code :deep(.el-button) {
  padding: 20px 10px !important;
  margin: 0 !important;
}
</style>