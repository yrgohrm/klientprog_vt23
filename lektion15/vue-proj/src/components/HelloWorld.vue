<template>
    <div @click="changeMessage">
        <CoolButton />{{ message }}
    </div>
</template>

<script>
import CoolButton from './CoolButton.vue';

export default {
    components: {
        CoolButton,
    },
    data() {
        return {
            message: "Hello, world!"
        }
    },
    methods: {
        changeMessage() {
            this.message = this.message.split("").reverse().join("")
        }
    },
}
</script>

<style scoped>
div {
    background-color: hotpink;
}
</style>