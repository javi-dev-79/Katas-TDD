import Item from './Item'
class GildedRose {
   constructor(private items: Item[]) {}

   updateQuality(): void {
      this.items.forEach(item => item.update())
   }
}

export default GildedRose
