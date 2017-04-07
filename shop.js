var Shop = function(name,city){
  this.name = name
  this.city = city
  this.discs = []
}

Shop.prototype = {
  add: function(record){
    this.discs.push(record)
  },

  remove: function(record){
    this.discs.forEach(function(disc){
      if (disc === record){
        this.discs.remove(disc)
      }else{
        return
      }
    })
  }
}

module.exports = Shop