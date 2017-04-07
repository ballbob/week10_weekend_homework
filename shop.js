var Shop = function(name,city){
  this.name = name
  this.city = city
  this.discs = []
}

Shop.prototype = {
  add: function(record){
    this.discs.push(record)
  }
}

module.exports = Shop