// Define the namespace and block appearance, just like the pure TypeScript method
// Use the 'shim=custom::FBV1_C' directive to map the TypeScript call to your C++ function.

/**
 * Custom Hash Functions
 */
//% weight=100 color=#0fbc11 icon="\uf02a"
namespace HashFunctions {
    /**
     * Calculates a custom hash value for a given string.
     * @param data The string to hash, eg: "microbit"
     */
    //% block="hash string $data"
    //% data.shadow="text"
    //% shim=custom::FBV1_C // <-- THIS IS THE KEY: Maps to the C++ function
    export function FBV1(data: string): number {
        // This is the TypeScript *signature* and is generally empty
        // as the compiler skips it and calls the C++ shim instead.
        return 0;
    }
}