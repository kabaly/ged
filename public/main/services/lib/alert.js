class Alert {
    flash(type, show, message, timeout = 3000) {
        this.type = type
        this.show = show
        this.message = message
        return { type, show, message, timeout }
    }
    validateRequestData(data) {
        for(let key in data) {
            if(data[key] == '' || data[key] == null) {
                return false
            }
        }
        return true
    }
}

Vue.component('alert-component', {
    template: `
    <div :class="alert.type" role="alert" v-if="alert.show"
    >
        {{ alert.message }}
    </div>  
    `,
    props: {
        alert: {
            type: Object,
            default() {
                return {
                    type: '',
                    show: false,
                    message: 'test'
                }
            }
        },
    },
    watch: {
        alert: {
            handler(value) {
                if(value.type === 'success') {
                    setTimeout(() => {
                        this.alert.show = false
                    }, value.timeout)
                    this.alert.type = 'alert alert-success'
                    this.alert.show = value.show
                    this.alert.message = value.message
                }else {
                    setTimeout(() => {
                        this.alert.show = false
                    }, value.timeout)
                    this.alert.type = 'alert alert-danger'
                    this.alert.show = value.show
                    this.alert.message = value.message
                }
               
            }
        }
    }
})