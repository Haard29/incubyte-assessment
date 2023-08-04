import SpaceCraft from "../spacecraft.js"

describe('Spacecraft', () => {
  let chandrayan;

  beforeEach(() => {
    chandrayan = new SpaceCraft();
  });

  test('Initial position and direction', () => {
    expect(chandrayan.getPos()).toEqual([0, 0, 0]);
    expect(chandrayan.getDirection()).toBe('N');
  });

  test('Move forward', () => {
    chandrayan.move(2);
    expect(chandrayan.getPos()).toEqual([0, 2, 0]);

    chandrayan.turn('r');
    chandrayan.move(3);
    expect(chandrayan.getPos()).toEqual([3, 2, 0]);

    chandrayan.turn('d');
    chandrayan.move(5);
    expect(chandrayan.getPos()).toEqual([3, 2, -5]);
  });

  test('Move backward', () => {
    chandrayan.move(-3);
    expect(chandrayan.getPos()).toEqual([0, -3, 0]);

    chandrayan.turn('l');
    chandrayan.move(-4);
    expect(chandrayan.getPos()).toEqual([-4, -3, 0]);

    chandrayan.turn('d');
    chandrayan.move(-1);
    expect(chandrayan.getPos()).toEqual([-4, -3, 1]);
  });

  test('Turn spacecraft', () => {
    chandrayan.turn('r');
    expect(chandrayan.getDirection()).toBe('E');

    chandrayan.turn('u');
    expect(chandrayan.getDirection()).toBe('U');

    chandrayan.turn('l');
    expect(chandrayan.getDirection()).toBe('N');

    chandrayan.turn('d');
    expect(chandrayan.getDirection()).toBe('D');
  });
});
