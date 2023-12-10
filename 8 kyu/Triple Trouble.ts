// -----------------------------------------------------------
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the 
// inputs and grouping them next to each other. Do this for every letter, see example below!
// 
// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
// 
// Note: You can expect all of the inputs to be the same length.
// -----------------------------------------------------------

export function tripleTrouble(one: string, two: string, three: string): string {
	let answer: string = "";
	for (let i = 0; i < one.length; i++){
		answer += one[i] + two[i] + three[i];
	}
	return answer;
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