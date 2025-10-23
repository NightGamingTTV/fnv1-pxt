/**
 * Custom Hash Functions
 */
//% weight=100 color=#0fbc11 icon="\uf02a" // Define the block category
namespace HashFunctions {

    /**
     * Calculates a custom hash value for a given string (FBV1).
     * @param data The string to hash, eg: "microbit"
     */
    //% block="hash string $data"
    //% data.shadow="text"
    export function calculateHash(data: string): number {

        // Call the C++ shim function that was declared in shims.d.ts
        // Note: The generated shims.d.ts uses `custom::FBV1_C`
        // We call it here using the namespace and function name declared in the shim.
        return custom.FBV1_C(data);
    }
}