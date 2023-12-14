// -----------------------------------------------------------
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// 
// the string should start with a 1.
// 
// a string with size 6 should return :'101010'.
// 
// with size 4 should return : '1010'.
// 
// with size 12 should return : '101010101010'.
// 
// The size will always be positive and will only use whole numbers.
// -----------------------------------------------------------

export const stringy = (n: number): string => {
	let stringy: string = "";
	for (let i: number = 1; i <= n; i++){
		stringy += i % 2;
	}
	return stringy;
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
// (https://github.com/HungryVovka/Codewars-TypeScript/blob/main/LICENSE)
// 
// You should have received a copy of the GNU General Public License v3.0
// along with this code. If not, see http://www.gnu.org/licenses/
// -----------------------------------------------------------