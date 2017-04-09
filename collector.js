var Collector = function(name, money){
  this.name = name
  this.money = money
  this.library = []
}

Collector.prototype = {
  add: function(record){
    this.library.push(record)
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

  buy: function(shop,record){

    console.log(shop.balance)
    console.log(shop.printInventory())
    
    this.add(record)
    this.money -= record.price
    shop.sell(record)
    
    console.log(shop.balance)
    console.log(shop.printInventory())
  }
}

module.exports = Collector