// -----------------------------------------------------------
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// 
// Example(Input --> Output)
// 
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// 
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// 
// Note: String will have at least one element; words will always be separated by a space.
// -----------------------------------------------------------

export function addLength(str: string): string[] {
	return str.split(" ").map((i) => `${i} ${i.length}`);
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