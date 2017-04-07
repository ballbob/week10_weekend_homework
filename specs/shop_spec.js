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

})