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

  it('should have a genre',function(){
    assert.strictEqual('Electronic',record.genre)
  })

  it('should have a price',function(){
    assert.strictEqual(12,record.price)
  })

  it('should be able to return its details as a string',function(){
    assert.strictEqual("'StrangeLove' by Depeche Mode. Genre: Electronic. Price: 12. ",record.allDeets())
  })
})