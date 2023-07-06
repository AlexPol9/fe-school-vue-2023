export default {
    inserted(el, bindings, vnode) {
        console.log('inserted')

        if (el) {
            el.focus()
        }
    },
    update(el, bindings, vnode) {
        console.log('update')
        console.log(`value: ${bindings.value} oldValue: ${bindings.oldValue}`)
    }
}