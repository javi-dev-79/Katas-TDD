import 'jest'
import GildedRose from "./GildedRose"
import Item from "./Item"

describe('GildedRose', () => {
    it('Fix me', () => {
        const items = [
            new Item("foo", 0, 0)
        ]
        const app = new GildedRose(items)

        app.updateQuality()

        expect(false).toBe(true)
    })
})