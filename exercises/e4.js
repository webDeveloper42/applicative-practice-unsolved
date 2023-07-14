import { data } from "../data/data";

// SPACE DATA EXERCISE 4
// Return an array of Planets' names with gravity less than 10
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithLowGravity(data) {
  // Your code goes here...
  // let result = [];
  // const planets = data.planets;
  // for(let i = 0; i < planets.length; i++){
  //   const planetName = planets[i].name;
  //   const planetGravity= planets[i].gravity;
  //   if(planetGravity < 10){
  //     result.push(planetName);
  //   }
  // }
  // return result;
  let planets = data.planets;
  let filteredGravity = planets.map(planet=>{
    if (planet.gravity <= 10){
      return planet.name;
    }else {
      return null;
    }
  })
  let result = filteredGravity.filter(planetName => planetName !== null);
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
