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
  }

}

module.exports = Collector