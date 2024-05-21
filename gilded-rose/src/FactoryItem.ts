import AgedBrieItem from './AgedBrieItem'
import BackstagePassesItem from './BackstagePassesItem'
import ConjuredItem from './ConjuredItem'
import GenericItem from './GenericItem'
import Item from './Item'
import SulfurasItem from './SulfurasItem'
import ItemName from './ItemName'

class FactoryItem {
   public static build(name: string, sellIn: number, quality: number): Item {
      switch (name) {
         case ItemName.AgedBrie:
            return new AgedBrieItem(name, sellIn, quality)
         case ItemName.Sulfuras:
            return new SulfurasItem(name, sellIn, quality)
         case ItemName.BackstagePasses:
            return new BackstagePassesItem(name, sellIn, quality)
         case ItemName.Conjured:
            return new ConjuredItem(name, sellIn, quality)
         default:
            return new GenericItem(name, sellIn, quality)
      }
   }
}

export default FactoryItem
