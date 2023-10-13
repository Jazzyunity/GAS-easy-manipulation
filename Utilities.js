/**
 *
 * @param {string} cell -  The cell address in A1 notation
 * @returns {object} The row number and column number of the cell (0-based)
 *
 * @example
 *
 *   fromA1Notation("A2") returns {row: 1, column: 3}
 *
 */

const fromA1Notation = (cell) => {
    const [, columnName, row] = cell.toUpperCase().match(/([A-Z]+)([0-9]+)/);
    const characters = 'Z'.charCodeAt() - 'A'.charCodeAt() + 1;

    let column = 0;
    columnName.split('').forEach((char) => {
        column *= characters;
        column += char.charCodeAt() - 'A'.charCodeAt() + 1;
    });

    return { row, column };
};

/**
 *
 * @param {number} row - The row number of the cell reference. Row 1 is row number 0.
 * @param {number} column - The column number of the cell reference. A is column number 0.
 * @returns {string} Returns a cell reference as a string using A1 Notation
 *
 * @example
 *
 *   getA1Notation(2, 4) returns "E3"
 *   getA1Notation(2, 4) returns "E3"
 *
 */
const getA1Notation = (row, column) => {
    const a1Notation = [`${row + 1}`];
    const totalAlphabets = 'Z'.charCodeAt() - 'A'.charCodeAt() + 1;
    let block = column;
    while (block >= 0) {
        a1Notation.unshift(String.fromCharCode((block % totalAlphabets) + 'A'.charCodeAt()));
        block = Math.floor(block / totalAlphabets) - 1;
    }
    return a1Notation.join('');
};