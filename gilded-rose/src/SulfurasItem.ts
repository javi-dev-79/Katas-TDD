import Item from "./Item"

class SulfurasItem extends Item {
    public quality: number

    constructor(public name: string, public sellIn: number, quality: number) {
        super(name, sellIn, quality)
        this.quality = 80
     }

    public update() {
        
    }
}
export default SulfurasItem