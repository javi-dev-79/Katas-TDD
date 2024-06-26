class Item {
   public quality: number

   constructor(public name: string, public sellIn: number, quality: number) {
      this.quality = quality > 50 ? 50 : quality
   }

   public toString(): string {
      return this.name + ', ' + this.sellIn + ', ' + this.quality
   }

   public update() {}
}

export default Item
