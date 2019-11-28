/* Define which result of function is possible */
function combineItems(a: number, b: number): number;
function combineItems(a: string, b: string): string;
function combineItems(a: string | number, b: string | number) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}