var Shop = function(name,city){
  this.name = name
  this.city = city
  this.discs = []
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
  }
}

module.exports = Shop