/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;

  const yearCount = asteroids.reduce((acc, asteroid) => {
    const year = asteroid.discoveryYear;
    if (acc.hasOwnProperty(year)) {
      acc[year]++;
    } else {
      acc[year] = 1;
    }
    return acc;
  }, {});

  const years = Object.keys(yearCount);
  const maxYear = years.reduce((maxYear, year) => {
    if (yearCount[year] > yearCount[maxYear]) {
      return year;
    } else {
      return maxYear;
    }
  });

  return parseInt(maxYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
