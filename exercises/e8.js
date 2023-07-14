import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  // let result = [];
  // const planet = data.planets;
  // for(let i = 0; i < planet.length; i++){
  //   const planetName = planet[i].name;
  //   const planetMoon = planet[i].moons;
  //   if(planetMoon && Array.isArray(planetMoon)){
  //     for(let x = 0; x < planetMoon.length; x++){
  //       if(planetMoon[x] === moonName){
  //         result.push(planetName);
  //       }
  //     }
  //   }
  // }
  // return result;
  let planets = data.planets;
  
  let result = planets
    .filter(planet => planet.moons && planet.moons.includes(moonName))
    .map(planet => planet.name);
    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }  
    
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
