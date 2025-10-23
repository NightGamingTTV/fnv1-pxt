/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf02a" // Example: weight, color, icon (FontAwesome)
namespace HashFunctions {
    /**
     * Calculates a custom hash value for a given string.
     * @param data The string to hash, eg: "microbit"
     */
    //% block="hash string $data"
    //% data.shadow="text"
    export function FBV1(data: string): number {
        // Ensure variables are declared with `let` or `const` for proper TypeScript
        let b_val: number;

        let hash2 = 2166136261;
        let j = 0;

        // MakeCode does not natively support `while` loops in the block-generated code
        // for custom blocks easily, but it works in the TypeScript. 
        // A for-loop is often preferred or use the string's length directly.
        // Also, the constant multiplication should use the bitwise OR for 32-bit integer operations on micro:bit: `| 0`
        while (j <= data.length - 1) {
            b_val = data.charCodeAt(j);
            // Re-implementing FNV-1a like logic with proper bitwise OR for 32-bit int
            hash2 = ((hash2 ^ b_val) * 16777619) | 0; // Use XOR then multiply for FNV-1a
            j += 1;
        }
        return hash2;
    }
}