var animals = [
{name: "rich", species: "dog"},
{name: "chone", species: "cat"},
{name: "john", species: "cat"}
]

var cats = [];

function findDog() {
	for (i = 0; i < animals.length; i++){
		if (animals[i].species == "cat"){
			cats.push(animals[i])
		}
	}
}

console.log(cats);

findDog();

