import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  // Your code goes here...
  // let result = [];
  // const planet = data.planets;
  // for(let i = 0; i < planet.length; i++){
  //   const planetName = planet[i].name;
  //   const planetMassValue = planet[i].mass.massValue;
  //   if(planetMassValue >= number){
  //     result.push(planetName);
  //   }
  // }
  // return result;
  let planets = data.planets;
  let filteredMassValue = planets.map(planet =>{
    if(planet.mass.massValue >= number){
      return planet.name;
    }else{
      return null;
    }
  })
  let result = filteredMassValue.filter(planetName => planetName !== null);
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
