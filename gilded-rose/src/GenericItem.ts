class GenericItem {
   public quality: number

   constructor(public name: string, public sellIn: number, quality: number) {
      this.quality = quality > 50 ? 50 : quality
   }

   public toString(): string {
      return this.name + ', ' + this.sellIn + ', ' + this.quality
   }

   public update() {
      this.sellIn = this.sellIn - 1
      this.quality = this.sellIn < 0 ? this.quality - 2 : this.quality - 1
      this.quality = this.quality < 0 ? 0 : this.quality
   }
}

export default GenericItem
