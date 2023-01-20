const {defineConfig} = require("@vue/cli-service");
// webpack.config.js
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const {ElementPlusResolver} = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
    pages:{
        index:{
            entry: 'src/main.ts',
            title:"水果小站"
        }
    }

});
