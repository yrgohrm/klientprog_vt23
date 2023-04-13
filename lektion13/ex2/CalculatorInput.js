
export default {
    name: "CalculatorInput",
    data() {
        return {
            firstValue: 0,
            secondValue: 0,
            // sum: null,
        }
    },
    computed: {
        sum() {
            return this.firstValue + this.secondValue
        }
    },
    // methods: {
    //     add() {
    //         this.sum = Number(this.firstValue) + Number(this.secondValue)
    //     }
    // },
    template: `<div>
                    <input type="number" v-model="firstValue">
                    <input type="number" v-model="secondValue">
                    <!-- <input type="button" value="add" @click="add"> -->
                    <span v-show="sum !== null">{{ sum }}</span>
                </div>`
}
