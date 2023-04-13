import CalculatorInput from "./CalculatorInput.js"

const app = {
    components: {
        CalculatorInput
    }
}

const vueApp = Vue.createApp(app)
vueApp.mount("#app")
