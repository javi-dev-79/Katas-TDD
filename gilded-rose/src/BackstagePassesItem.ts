import Item from "./Item"


class BackstagePassesItem extends Item {
    public update() {
        this.sellIn = this.sellIn - 1
        if (this.sellIn >= 10) {
            this.quality = this.quality + 1
        } else if (this.sellIn >= 5) {
            this.quality = this.quality + 2
        } else if (this.sellIn >= 0) {
            this.quality = this.quality + 3
        } else {
            this.quality = 0
        }
    }
}
export default BackstagePassesItem