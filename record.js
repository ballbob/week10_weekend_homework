var Record = function(title,artist,genre,price){
  this.title = title
  this.artist = artist
  this.genre = genre
  this.price = price
}

Record.prototype = {

  allDeets: function(){
    return "'" + this.title + "' by " + this.artist + ". Genre: " + this.genre + ". Price: " + this.price + ". "
  },
}

module.exports = Record