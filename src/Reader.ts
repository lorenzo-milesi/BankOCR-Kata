import table from "./Data/Numbers";

export default class Reader {
    static readNumber(element: string): string {
        return table.indexOf(element).toString();
    }

    /*
     * Here we will take every 3x3 `matrix` in the entry and parse it into a number.
     * Since each number is represented in a 3x3 characters block.
     */
    static readEntry(entry: string) {
        if (entry.length !== 81) {
            throw new Error('Entry must be 3*27 long');
        }

        let result = '';

        let reference: number[] = [0, 1, 2, 27, 28, 29, 54, 55, 56];
        /*
         * Here `i` represents the current 3x3 matrix we are working to parse.
         * So for each number we should have :
         *
         * i = 0    . i = 1    . i = 2    ...
         * 0  1  2  . 3  4  5  . 6  7  8  ...
         * 27 28 29 . 30 31 32 . 33 34 35 ...
         * 54 55 56 . 57 58 59 . 60 61 62 ...
         *
         * So for i = 0, we shall concatenate [0, 1, 2] with [27, 28, 29] and with [54, 55, 56].
         * That is to say : [3i, 3i+1, 3i+2] with [3i+27, 3i+28, 3i+29] and with [3i+54, 3i+55, 3i+56].
         */
        for (let i = 0 ; i < 9 ; i++) {
            let element: string = '';
            reference.forEach(value => {
                element += entry[3 * i + value];
            })
            result += this.readNumber(element);
        }

        return result;
    }
}