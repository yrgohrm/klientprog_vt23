import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment(incr) {
    if (typeof incr === "number")
      this.count += incr
    else 
      throw new Error("ajaj")
  }
})
