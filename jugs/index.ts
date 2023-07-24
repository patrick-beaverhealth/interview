// Problem: Measuring Jugs

// You are given two jugs, with volumes x and y liters respectively.
// The jugs are unmarked and have an irregular shape, so you can't
// eyeball any measurements by filling a jug halfway.

// You have an infinite water source and a drain, so you can fill and 
// empty the jugs whenever you want. But when you do so, you must 
// fill until the jug is full or empty until the jug is empty. 

// Your task, in general, is to measure out exactly n liters.

// ----------------------

// Problem 1: The jugs have size 3 and 5 liters. You need to measure
// exactly 4 liters. How do you do it?

function P1() {
  const x = 3;
  const y = 5;
  const n = 4;

  const HOW_TO_MEASURE_EXACTLY_FOUR_LITERS = `
    How do you do it?
  `;

  return HOW_TO_MEASURE_EXACTLY_FOUR_LITERS;
}

// Problem 2: The size of the jugs and the target volume are all 
// variables, with the only guarantee being that the target volume
// is not larger than the volume of the larger jug. 
// Implement a function that returns *whether* it is possible
// to measure the desired volume using the given jugs.

function P2(x: number, y: number, n: number): boolean {
  if ((n > x) && (n > y)) return false;
  
  // Placeholder
  if (((x == 3 && y == 5) || (x == 5 && y == 3)) && n == 4) {
    return true;
  }
  return false;
}

// Problem 3: Like P2, but return a string describing how to measure
// the desired volume.

function P3(x: number, y: number, n: number): string {
  // Placeholder
  return `Impossible to measure ${n} liters using jugs of size ${x} and ${y} liters.`;
}

// Problem 4: The water has been replaced by amn  valuable liquid, so 
// you can't pour it between jugs or down the drain. The drain has been 
// replaced witha giant vat, which you need to fill to a volume n,
// which is greater than the volume of either jug. 
// Implement a  function that returns whether it is possible to measure 
// exactly n liters.

function P4(x: number, y: number, n: number): boolean {
  // Placeholder
  return false;
}