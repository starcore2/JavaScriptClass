
let currentDateAndTime = Date()

console.log("It is now " + currentDateAndTime)


let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log("The total is " + theTotal)


function total(...theNumbers) {
	let sum = 0
	for (let aNumber in theNumbers) {
		sum += aNumber * 1//While looking in the debugger, I noticed the value had a "0" and not just a flat number leading me to suspect that it's converted to a string instead of staying a int.
	}
	return sum
}
