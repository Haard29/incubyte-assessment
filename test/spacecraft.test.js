const Spacecraft = require('../spacecraft.js');

describe('Spacecraft', () => {
  let chandrayan;

  beforeEach(() => {
    chandrayan = new Spacecraft();
  });

  test('Initial position and direction', () => {
    expect(chandrayan.getPos()).toEqual([0, 0, 0]);
    expect(chandrayan.getDirection()).toBe('N');
  });

  test('Move forward', () => {
    chandrayan.move(1);
    expect(chandrayan.getPos()).toEqual([0, 1, 0]);

    chandrayan.turn('r');
    chandrayan.move(1);
    expect(chandrayan.getPos()).toEqual([1, 1, 0]);

    chandrayan.turn('d');
    chandrayan.move(1);
    expect(chandrayan.getPos()).toEqual([1, 1, -1]);
  });

  test('Move backward', () => {
    chandrayan.move(-1);
    expect(chandrayan.getPos()).toEqual([0, -1, 0]);

    chandrayan.turn('l');
    chandrayan.move(-1);
    expect(chandrayan.getPos()).toEqual([1, -1, 0]);

  });

  test('Turn spacecraft', () => {
    chandrayan.turn('r');
    expect(chandrayan.getDirection()).toBe('E');

    chandrayan.turn('u');
    expect(chandrayan.getDirection()).toBe('U');

    chandrayan.turn('l');
    expect(chandrayan.getDirection()).toBe('W');

    chandrayan.turn('d');
    expect(chandrayan.getDirection()).toBe('D');
  });
});
