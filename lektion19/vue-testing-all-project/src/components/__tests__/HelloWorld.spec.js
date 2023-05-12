import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import HelloWorld from "../HelloWorld.vue"

describe("HelloWorld", () => {
    it("renders properly", () => {
        const text = "Hello eller"
        const wrapper = mount(HelloWorld, { props: { msg: text } })
        const h1 = wrapper.find("h1")
        expect(h1.text()).to.equal(text)
    })
})
