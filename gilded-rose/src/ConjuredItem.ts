import Item from "./Item"

class ConjuredItem extends Item {
    public update() {
        this.sellIn = this.sellIn - 1
        this.quality = this.quality - 2
    }
}
export default ConjuredItem