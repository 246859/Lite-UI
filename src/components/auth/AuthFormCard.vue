<template>
  <div class="form-container-card">

    <div class="form-content-box">
      <!--卡片头部-->
      <div class="form-header-box">
        <logo/>
      </div>
      <!--表单部分-->
      <div class="form-content-card">
        <slot name="form"></slot>
        <!--表单卡片底部-->
        <div class="form-footer-card big-button">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/style/common/button.css";
import Logo from "@/components/common/Logo";

export default {
  name: "AuthFormCard",
  components: {Logo}
};
</script>

<style scoped>

.form-content-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 50px;
  width: 300px;
}

.form-header-box {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

/*表单卡片容器*/
.form-container-card {
  display: flex;
  flex-wrap: wrap;
  background: rgb(254, 254, 254);
  width: 400px;
  height: auto;
  padding: 30px 20px;
  border-radius: 50px;
  box-shadow: 3px 4px 30px grey;
}

/*解决一下输入框抖动*/
.form-content-card {
  width: 100%;
}

/*表单底部*/
.form-footer-card {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

:deep(.el-form-item__label) {
  font-size: 15px;
  font-weight: bold;
}

:deep(.el-button) {
  padding: 25px 130px !important;
  margin: 5px 0;
}

</style>