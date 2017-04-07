var Shop = function(name,city,balance){
  this.name = name
  this.city = city
  this.discs = []
  this.balance = balance
}

Shop.prototype = {
  add: function(record){
    this.discs.push(record)
  },

  remove: function(discToRemove){
    this.discs.forEach(function(record){
      if (record.name === discToRemove.name){
        var recordIndex = this.discs.indexOf(record)
        this.discs.splice(recordIndex,1)
      }
    }.bind(this))
  },

  printNameAndCity: function(){
    return "The shop's name is '" + this.name + "' in " + this.city + "."
  },

  printInventory: function(){
    var inventoryString = ""
    if (this.discs[0] === undefined){
      return "There are no discs."
    }else{
      this.discs.forEach(function(record){
        inventoryString += "Disc: " + record.allDeets() + " |||"
      })
      return inventoryString
    }
  },

  sell: function(recordToSell){
    this.discs.forEach(function(record){
      if (record.name === recordToSell.name){
        this.balance += recordToSell.price
      }
    }.bind(this))
    this.remove(recordToSell)
  },

  inventoryValue: function(){
    invVal = 0
    this.discs.forEach(function(record){
      invVal += record.price
    })
    return "Inventory value: " +invVal + "."
  },

  finances: function(){
    return "Shop balance: " + this.balance + ". " + this.inventoryValue()
  }
}

module.exports = Shop