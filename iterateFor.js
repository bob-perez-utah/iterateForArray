var numbers = [1,2,3,4,5,6,7,8,9,10];

var colors = ["red", "green", "blue", "orange"];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log("This number in the array is divisble by 3 : " + numbers[i]);
    }

}