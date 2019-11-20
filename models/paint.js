const PaintCan = function (litres) {
  this.litres = litres;
};

PaintCan.prototype.is_empty = function () {
  if (this.litres > 0){
    return false;
  }else{
    return true;
  }
};


module.exports = PaintCan;
