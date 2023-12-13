// -----------------------------------------------------------
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your 
// function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, 
// see the sample tests.
// 
// For example (Input -> Output):
// 
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
// -----------------------------------------------------------

export const summation = (num: number) => {
	return num * (num + 1) / 2;
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