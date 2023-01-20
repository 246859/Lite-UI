<template>
  <div class="logo-box">
    <img class="logo" src="../../assets/img/logo.svg" alt="logo">
    <h3>水果小站</h3>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped>
.logo-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  user-select: none;
  align-items: center;
}

.logo {
  width: 50px;
  height: 50px;
}

h3 {
  font-size: 25px;
  margin: 0 5px;
}
</style>