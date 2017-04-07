var assert=require('assert')
var Record = require('../record.js')
var Shop = require('../shop.js')

describe('Record Store',function(){

  var strangelove
  var karmaChameleon
  var theJubilee
  var theSingingCricket

  beforeEach(function(){

    strangeLove = new Record('StrangeLove','Depeche Mode','Electronic',12)
    karmaChameleon = new Record('Karma Chameleon','Culture Club','Pop',5)
    theJubilee = new Record('The Jubilee','Mary Chapin Carpenter','Folk',10)

    theSingingCricket = new Shop('The Singing Cricket','Bridge of Allan')
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
})