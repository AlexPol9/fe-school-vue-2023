Vue.use({
    install(Vue, options) {
        Vue.prototype.$message = (text) => {
            alert(text || options.defaultText)
        }
    }
}, { defaultText: '55555'})