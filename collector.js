var Collector = function(name, money){
  this.name = name
  this.money = money
  this.library = []
}

Collector.prototype = {
  add: function(record){
    this.library.push(record)
    this.money -= record.price
  },

  remove: function(recordToRemove){
    this.library.forEach(function(record){
      if (record.name === recordToRemove.name){
        var recordIndex = this.library.indexOf(record)
        this.library.splice(recordIndex,1)
        return this.library
      }
    }.bind(this))
  },

  sell: function(shop,recordToRemove){
    this.library.forEach(function(record){
      if (record.name === recordToRemove.name){
        this.money += recordToRemove.price
        shop.balance -= recordToRemove.price
        shop.add(recordToRemove)
        this.remove(recordToRemove)
      }
    }.bind(this))
  },

  libraryValue: function(){
    value = 0
    this.library.forEach(function(record){
      value += record.price
    })
    return value
  },

  genreValue: function(genre){
    value = 0
    this.library.forEach(function(record){
      if(record.genre === genre){
        value += record.price
      }
    })
    return value
  },

  mostValuableRecord: function(){
    this.library.sort(function(a,b){
      aPrice = a.price
      bPrice = b.price 
      if(aPrice > bPrice){
        return -1
      }
      if(aPrice < bPrice){
        return 1
      }
      return 0
    })
    return this.library[0]
  }

}

module.exports = Collector