export default{
    plugins: {
        autoprefixer: {}, // 自动添加 CSS 浏览器前缀
        'postcss-pxtorem': {
            rootValue: 37.5, // 1rem 的大小（设计稿宽度 / 10）
            propList: ['*'], // 需要转换的属性，`*` 表示全部转换
            unitPrecision: 5, // rem的小数点位数
            selectorBlackList: ['.ignore'], // 不转换的类名
            minPixelValue: 2, // 小于或等于 2px 不转换
            mediaQuery: false, // 是否转换媒体查询中的 px
        },
    },
};