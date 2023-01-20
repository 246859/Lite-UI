import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import {createPinia} from "pinia";
import 'element-plus/dist/index.css';

/**
 * 创建Vue应用
 */
createApp(App)//APP组件
    .use(router)//路由
    .use(createPinia())//状态管理
    .mount("#app");//挂载app
