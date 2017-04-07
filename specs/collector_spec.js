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

    theSingingCricket = new Shop('The Singing Cricket','Bridge of Allan',100)
  })

  it('should have a name',function(){
    assert.strictEqual('Jimmy',jimmy.name)
  })
})