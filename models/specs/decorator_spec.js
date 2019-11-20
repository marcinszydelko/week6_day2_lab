const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function() {
  let decorator;
  let paint_can1;
  let paint_can2;
  let room1;
  let room2;

  beforeEach(function () {
    decorator = new Decorator();
    paint_can1 = new PaintCan(5);
    paint_can2 = new PaintCan(15);
    room1 = new Room(25);
    room2 = new Room(10);
    room3 = new Room(16);
  });

  it('should start with empty paint stock', function() {
    const actual = decorator.paint_stock;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add can of paint to stock', function () {
    decorator.add_paint(paint_can1);
    const actual = decorator.paint_stock.length;
    assert.deepStrictEqual(actual, 1);
  });

  it('should be acle to calculate total litres of paint in stock', function() {
    decorator.add_paint(paint_can1);
    decorator.add_paint(paint_can2);
    const actual = decorator.litres_of_paint_in_stock();
    assert.strictEqual(actual, 20)
  });

  it('be able to calculate whether it has enough paint to paint a room - true', function () {
    decorator.add_paint(paint_can1);
    decorator.add_paint(paint_can2);
    actual = decorator.able_to_paint(room2);
    assert.strictEqual(actual, true);
  });

  it('be able to calculate whether it has enough paint to paint a room - false', function () {
    decorator.add_paint(paint_can1);
    decorator.add_paint(paint_can2);
    actual = decorator.able_to_paint(room1);
    assert.strictEqual(actual, false);
  });


  it('be able to paint room if has enough paint in stock - true', function () {
    decorator.add_paint(paint_can1);
    decorator.add_paint(paint_can2);
    decorator.paint_room(room2);
    actual = room2.painted;
    assert.strictEqual(actual, true);
  });

  it('be able to paint room if has enough paint in stock - false', function () {
    decorator.add_paint(paint_can1);
    decorator.add_paint(paint_can2);
    decorator.paint_room(room1);
    actual = room1.painted;
    assert.strictEqual(actual, false);
  });

  it('should be able to remove empty paint cans from stock', function () {
    decorator.add_paint(paint_can1);
    decorator.add_paint(paint_can2);
    decorator.paint_room(room3);
    actual = decorator.paint_stock;
    stock = [paint_can1];
    assert.deepStrictEqual(actual, stock);

  });

  it('should be able to decrease amount of paint in stock when painting a room', function () {
    decorator.add_paint(paint_can1);
    decorator.add_paint(paint_can2);
    decorator.paint_room(room3);
    actual = paint_can1.litres;
    assert.strictEqual(actual, 4);
  });



});
