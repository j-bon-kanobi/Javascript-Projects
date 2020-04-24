function minToSec(min) {
    return min * 60;
}

// console.log(minToSec(6));
function AgeToSec(age) {
    return age * 360 * 24 * 60 * 60;
}

// console.log(AgeToSec(25));


function getFirstItem(SomeArray) {
    return SomeArray[0];
}

Movies = ["Banana","GodFather","ShawShank","Pickle"];
// console.log(getFirstItem(Movies));

function badOrGoodMovie(Movie_rating) {
    if (Movie_rating >= 7) {
        return console.log("Movie is good")
    }
    else
        return console.log("Movie is bad")
}

// console.log(badOrGoodMovie(7));
// console.log(badOrGoodMovie(2));

function isEmptyString(some_string) {
    if (some_string == "") {
        return true;
    }
    else {
        return false;
    }
}
let sstring = "";
// console.log(isEmptyString(sstring));

// find minimum
var nums1 = [5,2,9,7,8,3];
function findmin(nums) {
    let minimum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minimum) {
            minimum = nums[i];
        }
    }
    return minimum
}
// console.log(findmin(nums1));

// console.log(getFirstItem(Movies));
//find maximum
var nums2 = [5,2,9,7,8,3];
function findmaxhelper(numbers,start) {
    let maximum = numbers[start];
    for (let i = start; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
            max_location = i;
        }
    }
    return {max_number: maximum, max_index: max_location};
}
// console.log(findmaxhelper);


var rating2 = [5,2,9,7,8,3,10,23];
function sortRatin(rating) {
    for (let j = 0; j < rating.length - 1; j++) {

        max = findmaxhelper(rating,j)
        max_num = max['max_number'];
        max_location = max['max_index'];
        console.log(max_num, max_location)
        rating[max_location] = rating[j];
        rating[j] = max_num;
        
    }
    return rating

}
// console.log(sortRatin([5,2,9,7,8,3,10,23]));
// var ratings = [5,2,9,7,8,3,10,23];
// console.log(ratings[23], ratings[7]);
// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },

]
console.log(Object.keys(movies).length)
console.log(Object.keys(movies.rank))