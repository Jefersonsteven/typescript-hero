// arrays
const hardSkills: (string | number)[] = [];
const softSkills: Array<string | number> = [];

hardSkills.push(1)
hardSkills.push('JavaScript')
softSkills.push(1)
softSkills.push('leadership')

// tuples
type CellValue = 'X' | 'O' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
]
