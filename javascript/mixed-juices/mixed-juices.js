// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  };
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limesCut = 0;

  for (let i = 0; i < limes.length && wedgesCut < wedgesNeeded; i++) {
    if (limes[i] === "small") {
      wedgesCut += 6;
    } else if (limes[i] === "medium") {
      wedgesCut += 8;
    } else if (limes[i] === "large") {
      wedgesCut += 10;
    }
    limesCut++;

    if (wedgesCut >= wedgesNeeded) { // Stop cutting once we have enough wedges
      break;
    }
  }

  // If no wedges are needed, we don't cut any limes
  if (wedgesNeeded === 0) {
    return 0;
  }

  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

let timeTaken = 0;
const copyArr = [...orders];

let i = 0;
do {
  let timePerOrder = timeToMixJuice(copyArr[i]);
  timeTaken += timePerOrder;
  i++;
} while (i < copyArr.length && timeTaken < timeLeft);

return copyArr.slice(i); // Return remaining orders
}