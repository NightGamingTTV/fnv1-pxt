//% weight=100 color=#d10000 icon="\uf02d" block="Custom Hash"
namespace sec {
    /**
     * Calculates a custom FNV-1a hash of a string.
     * @param data The string to hash
     */
    //% block="FNV-1a Hash of %data"
    //% data.defl="text"
    //% shim=sec::FNV1aHash
    export function FNV1aHash(data: string): number {
        // shim will replace this, so body can be empty
        return 0;
    }
}
