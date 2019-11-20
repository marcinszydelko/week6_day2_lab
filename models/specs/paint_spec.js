const assert = require('assert')
const PaintCan = require('../paint.js')

describe('PaintCan', function () {

  let paint_can;
  let paint_can2;

  beforeEach(function ()  {
    paint_can = new PaintCan(10);
    paint_can2 = new PaintCan(0);

  });

  it('have a number of litres of paint', function () {
    const actual = paint_can.litres;
    assert.strictEqual(actual, 10);
  });

  it('shoulf be able to check if its empty - false', function () {
    const actual = paint_can.is_empty();
    assert.strictEqual(actual, false);
  });

  it('shoulf be able to check if its empty - true', function () {
    const actual = paint_can2.is_empty();
    assert.strictEqual(actual, true);
  });


})
