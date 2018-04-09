
// creating an array of objects
var animals = [
{name: "rich", species: "dog"},
{name: "chone", species: "cat"},
{name: "john", species: "cat"}
]

// making an empty array for temporary 
var cats = [];

// creating a function to loop through the animals array
function findDog() {
	for (i = 0; i < animals.length; i++){
		if (animals[i].species == "cat"){
			cats.push(animals[i])
		}
	}
}

console.log(cats);

findDog();

