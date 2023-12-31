// -----------------------------------------------------------
// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. 
// The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.
// 
// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that 
// have at least one red face.
// 
// Examples:
// If we cut the cube 2 times, the function should return 26
// If we cut the cube 4 times, the function should return 98
// -----------------------------------------------------------

export function countSquares(cuts: number): number {
	return cuts === 0 ? 1 : cuts**2 * 6 + 2;
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