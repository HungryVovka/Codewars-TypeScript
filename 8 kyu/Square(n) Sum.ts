// -----------------------------------------------------------
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// 
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// -----------------------------------------------------------

export function squareSum(numbers: number[]): number {
	let sums: number = 0;
	for (let i: number = 0; i < numbers.length; i++){
		let num: number = numbers[i] * numbers[i];
		sums = sums + num;
	}
	return sums;
}

// -----------------------------------------------------------
// License
// Tasks are the property of Codewars (https://www.codewars.com/) 
// and users of this resource.
// 
// All solution code in this repository 
// is the personal property of Vladimir Rukavishnikov
// (vladimirrukavishnikovmail@gmail.com).
// 
// Copyright (C) 2023 Vladimir Rukavishnikov
// 
// This file is part of the HungryVovka/Codewars-TypeScript
// (https://github.com/HungryVovka/Codewars-TypeScript)
// 
// License is GNU General Public License v3.0
// -----------------------------------------------------------