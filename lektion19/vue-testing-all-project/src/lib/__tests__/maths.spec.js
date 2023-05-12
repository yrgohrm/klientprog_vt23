import { describe, it, expect } from "vitest"

import { maximum, minimum } from "../maths"

describe("maximum from maths", () => {
    it("tests maximum with regular input", () => {
        const res = maximum([1, 2, 3])
        expect(res).to.equal(3)
    })

    it("tests maximum with bad input", () => {
        const res = maximum([])
        expect(res).to.be.undefined
    })

    it("tests maximum with bad character input", () => {
        const res = maximum(["a", "b", "c"])
        expect(res).to.be.NaN
    })
})

describe("minimum from maths", () => {
    it("tests minimum with regular input", () => {
        const res = minimum([1, 2, 3])
        expect(res).to.equal(1)
    })

    it("tests minimum with bad input", () => {
        const res = minimum([])
        expect(res).to.be.undefined
    })

    it("tests minimum with bad character input", () => {
        const res = minimum(["a", "b", "c"])
        expect(res).to.be.NaN
    })
})
