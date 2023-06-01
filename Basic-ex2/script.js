let favoriteFoods = ["steak", "lasagna", "hamburger", "pizza"];

const getRandomArrayIndex = Math.floor(Math.random()*4);

function randomFood(){
    console.log(getRandomArrayIndex);
    console.log(favoriteFoods[getRandomArrayIndex]);
}

randomFood();