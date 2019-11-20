const Decorator = function() {
  this.paint_stock = []
}

Decorator.prototype.add_paint = function (paint_can) {
  this.paint_stock.push(paint_can);
};

Decorator.prototype.litres_of_paint_in_stock = function () {
  let result = 0;
  for (paint of this.paint_stock) {
    result += paint.litres;
  }
  return result;
};

Decorator.prototype.able_to_paint = function (room) {
  let paint_in_stock = this.litres_of_paint_in_stock();
  if(paint_in_stock > room.area){
      return true;
    }else {
      return false;
    }
};

Decorator.prototype.paint_room = function (room) {
  let area_to_paint = room.area;
  if (this.able_to_paint(room) === true ){
    room.painted = true;

    for (var i = this.paint_stock.length - 1; i >= 0; --i) {
      if (area_to_paint > this.paint_stock[i].litres){        
        area_to_paint -= this.paint_stock[i].litres; // removes painted area
        this.paint_stock.splice(i, 1); // removes last can in paint_stock
      }
      else{
        this.paint_stock[i].litres -= area_to_paint; // if unpainted area is smaller than the paint can remove amount of paint equal to square meters left to paint
        break;
      }
    }

  }
};




module.exports = Decorator;
