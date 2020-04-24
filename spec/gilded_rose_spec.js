var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  it("should decrease quality and sellIn by 1", function() {
    let cheese = new Item("Cheese", 2, 2)
    let gildedRose = new Shop([ cheese ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
    expect(items[0].sellIn).toEqual(1);
  });
  it("should increase quality if Aged Brie but decrease sellIn", function() {
    let cheese = new Item("Cheese", 2, 2)
    let aged_brie = new Item("Aged Brie", 2, 2)
    let shop = new Shop([ cheese, aged_brie ]);
    let items_new= shop.updateQuality();
    expect(items_new[1].quality).toEqual(3);
    expect(items_new[1].sellIn).toEqual(1);
  });

});
