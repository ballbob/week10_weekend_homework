var assert=require('assert')
var Record = require('../record.js')
var Shop = require('../shop.js')

describe('Record Store',function(){

  var strangeLove
  var karmaChameleon
  var theJubilee
  var theSingingCricket

  beforeEach(function(){

    strangeLove = new Record('StrangeLove','Depeche Mode','Electronic',12)
    karmaChameleon = new Record('Karma Chameleon','Culture Club','Pop',5)
    theJubilee = new Record('The Jubilee','Mary Chapin Carpenter','Folk',10)

    theSingingCricket = new Shop('The Singing Cricket','Bridge of Allan',100)
  })

  it('should have a name',function(){
    assert.strictEqual('The Singing Cricket',theSingingCricket.name)
  })

  it('should have a city',function(){
    assert.strictEqual('Bridge of Allan',theSingingCricket.city)
  })

  it('should start with an empty inventory',function(){
    assert.strictEqual(undefined,theSingingCricket.discs[0])
  })

  it('should be able to add to the inventory',function(){
    theSingingCricket.add(theJubilee)
    assert.strictEqual(theJubilee,theSingingCricket.discs[0])

    })

  it('should be able to remove a record from the inventory',function(){
    
    theSingingCricket.add(theJubilee)
    theSingingCricket.remove(theJubilee)
    
    assert.strictEqual(undefined,theSingingCricket.discs[0])
  })

  it('should have a balance',function(){
    assert.strictEqual(100,theSingingCricket.balance)
  })

  it('should be able to print its name and location',function(){
    assert.strictEqual("The shop's name is 'The Singing Cricket' in Bridge of Allan.",theSingingCricket.printNameAndCity())
  })

  it('should be able to print its inventory as a string with 0 discs',function(){
    assert.strictEqual("There are no discs.",theSingingCricket.printInventory())
  })

  it('should be able to print its inventory as a string with one disc',function(){
    theSingingCricket.add(theJubilee)
    assert.strictEqual("Disc: 'The Jubilee' by Mary Chapin Carpenter. Genre: Folk. Price: 10. |||",theSingingCricket.printInventory())
  })

  it('should be able to print its inventory as a string with multiple items in the inventory',function(){
    
    theSingingCricket.add(karmaChameleon)
    theSingingCricket.add(theJubilee)
    theSingingCricket.add(strangeLove)

    assert.strictEqual("Disc: 'Karma Chameleon' by Culture Club. Genre: Pop. Price: 5. |||Disc: 'The Jubilee' by Mary Chapin Carpenter. Genre: Folk. Price: 10. |||Disc: 'StrangeLove' by Depeche Mode. Genre: Electronic. Price: 12. |||",theSingingCricket.printInventory())
  })

  it('should be able to sell a record',function(){
    theSingingCricket.add(strangeLove)
    theSingingCricket.sell(strangeLove)

    assert.strictEqual(112,theSingingCricket.balance)
  })

  it('should be able to display the value of the inventory with no items',function(){
    assert.strictEqual("Inventory value: 0.",theSingingCricket.inventoryValue())

  })

  it('should be able to display the value of the inventory with multiple items',function(){
    
    theSingingCricket.add(karmaChameleon)
    theSingingCricket.add(theJubilee)
    theSingingCricket.add(strangeLove)

    assert.strictEqual("Inventory value: 27.",theSingingCricket.inventoryValue())
  })

  it('should be able to display its finances',function(){
    theSingingCricket.add(karmaChameleon)
    theSingingCricket.add(theJubilee)
    theSingingCricket.add(strangeLove)

    assert.strictEqual("Shop balance: 100. Inventory value: 27.",theSingingCricket.finances())
  })

})