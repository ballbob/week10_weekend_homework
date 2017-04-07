var assert=require('assert')
var Record = require('../record.js')
var Shop = require('../shop.js')
var Collector = require('../collector.js')

describe('Collector',function(){

  beforeEach(function(){

    jimmy = new Collector('Jimmy',30)

    strangeLove = new Record('StrangeLove','Depeche Mode','Electronic',12)
    personalJesus = new Record('Personal Jesus', 'Depeche Mode', 'Electronic', 12)
    karmaChameleon = new Record('Karma Chameleon','Culture Club','Pop',5)
    theJubilee = new Record('The Jubilee','Mary Chapin Carpenter','Folk',10)
    istanbul = new Record('Istanbul (Not Constantinople', 'They Might be Giants','Nerd',12)

    theSingingCricket = new Shop('The Singing Cricket','Bridge of Allan',100)

    theSingingCricket.add(strangeLove)
    theSingingCricket.add(personalJesus)
    theSingingCricket.add(karmaChameleon)
    theSingingCricket.add(theJubilee)
  })

  it('should have a name',function(){
    assert.strictEqual('Jimmy',jimmy.name)
  })

  it('should start with an empty library',function(){
    assert.strictEqual(undefined,jimmy.library[0])
  })

  it('should begin with specified money',function(){
    assert.strictEqual(30,jimmy.money)
  })

  it('should be able to add a record',function(){
    jimmy.add(istanbul)

    assert.strictEqual(istanbul,jimmy.library[0])
  })

  it('should be able to remove a record',function(){
    jimmy.add(istanbul)
    jimmy.remove(istanbul)

    assert.strictEqual(undefined,jimmy.library[0])
  })
})