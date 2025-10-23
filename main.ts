//% weight=100 color=#d10000 icon="\uf02d" block="Custom Hash"
namespace sec {
    /**
     * Calculates a custom FNV-1a hash of a string.
     * @param data The string to hash
     */
    //% block="FNV-1a hash of %data"
    //% data.defl="hello"
    //% shim=sec::FNV1aHash
    export function FNV1aHash(data: string): number {
        return 0;
    }
}