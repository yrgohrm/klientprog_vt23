<template>
    <main>
        <h1>Rolig sida</h1>
        <p>{{ joke }}</p>
        <input type="button" value="new" @click="updateJoke">
    </main>
</template>

<script>
import { apa } from '../utils/joker.js'

export default {
    data() {
        return {
            joke: "kul skämt",
        }
    },
    methods: {
        updateJoke() {
            this.joke = apa()
        }
    }
}
</script>
