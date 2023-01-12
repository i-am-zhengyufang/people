const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                data: `
                @import "~assets/css/variable.scss";
                @import "~assets/css/mixin.scss";
                `
            },
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'))
    }
};
