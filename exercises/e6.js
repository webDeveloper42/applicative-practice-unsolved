import { data } from "../data/data";

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data, year) {
  // Your code goes here...
  // let result = [];
  // const asteroid = data.asteroids;
  // for(let i = 0; i < asteroid.length; i++){
  //   const asteroidName = asteroid[i].name;
  //   const asteroidYear = asteroid[i].discoveryYear;
  //   if(asteroidYear > year){
  //     result.push(asteroidName);
  //   }
  // }
  // return result;
  let asteroids = data.asteroids;
  let filteredAsteroids = asteroids.map(asteroid => {
    if(asteroid.discoveryYear > year){
      return asteroid.name;
    }else{
      return null;
    }
  })
  let result = filteredAsteroids.filter(asteroidName => asteroidName !== null);
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
