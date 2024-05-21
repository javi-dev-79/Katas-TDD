import Item from "./Item"

class AgedBrieItem extends Item {
    public update() {
        this.sellIn = this.sellIn - 1
        if (this.sellIn < 0) {
            this.quality = this.quality < 50 ? this.quality + 2 : this.quality
        } else {
            this.quality = this.quality < 50 ? this.quality + 1 : this.quality
        }
    }
}

export default AgedBrieItem