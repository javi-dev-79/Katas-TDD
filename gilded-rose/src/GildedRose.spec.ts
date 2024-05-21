import 'jest'
import GildedRose from './GildedRose'
import FactoryItem from './FactoryItem'
import ItemName from './ItemName'

describe('GildedRose', () => {
   describe('Item', () => {
      it('quality degrades', () => {
         const item = FactoryItem.build('foo', 5, 5)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(4)
      })

      it('sellIn degrades', () => {
         const item = FactoryItem.build('foo', 5, 5)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.sellIn).toBe(4)
      })

      it('quality degrades twice when sellIn is passed', () => {
         const item = FactoryItem.build('foo', 0, 5)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(3)
      })

      it('quality is never negative', () => {
         const item = FactoryItem.build('foo', 5, 0)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(0)
      })

      it('quality is never more than 50', () => {
         const item = FactoryItem.build('foo', 5, 60)

         expect(item.quality).toBe(50)
      })
   })

   describe(ItemName.AgedBrie, () => {
      it('quality upgrades', () => {
         const item = FactoryItem.build(ItemName.AgedBrie, 5, 5)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(6)
      })

      it('quality increases twice when sellIn is passed', () => {
         const item = FactoryItem.build(ItemName.AgedBrie, 0, 5)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(7)
      })

      it('quality never goes more than 50', () => {
         const item = FactoryItem.build(ItemName.AgedBrie, 5, 50)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(50)
      })
   })

   describe(ItemName.Sulfuras, () => {
      it('never has to be sold', () => {
         const item = FactoryItem.build(ItemName.Sulfuras, 5, 5)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.sellIn).toBe(5)
      })

      it('never decreases in quality', () => {
         const item = FactoryItem.build(ItemName.Sulfuras, 5, 80)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(80)
      })

      it('quality is always 80', () => {
        const item = FactoryItem.build(ItemName.Sulfuras, 5, 5)
        const app = new GildedRose([item])

        app.updateQuality()

        expect(item.quality).toBe(80)
     })
   })

   describe(ItemName.BackstagePasses, () => {
      it('increases in quality as sellIn value approaches', () => {
         const item = FactoryItem.build(
            ItemName.BackstagePasses,
            11,
            5
         )
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(6)
      })

      it('quality increases by 2 when there are 10 days or less', () => {
         const item = FactoryItem.build(
            ItemName.BackstagePasses,
            10,
            5
         )
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(7)
      })

      it('quality increases by 3 when there are 5 days or less', () => {
         const item = FactoryItem.build(
            ItemName.BackstagePasses,
            5,
            5
         )
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(8)
      })

      it('quality drops to 0 after the concert', () => {
         const item = FactoryItem.build(
            ItemName.BackstagePasses,
            0,
            5
         )
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(0)
      })
   })

   describe(ItemName.Conjured, () => {
      it('degrades in quality twice as fast as normal items', () => {
         const item = FactoryItem.build(ItemName.Conjured, 5, 5)
         const app = new GildedRose([item])

         app.updateQuality()

         expect(item.quality).toBe(3)
      })
   })
})
