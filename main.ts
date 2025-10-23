// Define a new category for your blocks
//% weight=100 color=#d10000 icon="\uf02d" block="WiredOS Util"
namespace sec {


    /**
     * Calculates a custom FNV-1a style hash of a string.
     * @param data The string to hash, eg: "microbit"
     */
    //% block="FNV-1a Hash of %data"
    //% data.defl="text"
    //% shim=myhash::FNV1aHash
    export function FNV1aHash(data: string): number {
        // Your existing logic with a few adjustments for MakeCode's environment
        let hash2 = 2166136261;
        let j = 0;
        let charCode: number;


        // Use 'for' loop for cleaner iteration in MakeCode
        for (j = 0; j < data.length; j++) {
            charCode = data.charCodeAt(j);
            hash2 ^= charCode;
            // The & 0xffffffff part is often unnecessary in MakeCode's TypeScript
            // but is good practice for consistent 32-bit output.
            hash2 = (hash2 * 16777619) >>> 0;
        }


        return hash2;
    }
}
