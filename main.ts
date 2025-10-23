//% color="#AA278D" weight=100 icon="f0c2"
namespace fbv1 {

    /**
     * FBV1 hash (C++ implementation)
     */
    //% block="FBV1 hash of $data"
    //% data.shadow="text"
    export function FBV1(data: string): number {
        return fbv1Hash(data);
    }

    // ---- C++ shim (THIS LINE WAS BROKEN) ----
    //% shim=fbv1::fbv1Hash
    function fbv1Hash(s: any): number {
        return 0;   // placeholder – real code is in C++
    }
}