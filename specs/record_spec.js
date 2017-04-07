var assert = require('assert')
var Record = require('../record.js')

describe('Record',function(){

  var record

  beforeEach(function(){
    record = new Record('StrangeLove','Depeche Mode','Electronic',12)
  })

  it('should have a title',function(){
    assert.strictEqual('StrangeLove',record.title)
  })

  it('should have an artist',function(){
    assert.strictEqual('Depeche Mode',record.artist)
  })
})