//% weight=100 color=#d10000 icon="\uf02d" block="Custom Hash"
declare namespace sec {
    //% block="FNV-1a Hash of %data"
    //% data.defl="text"
    //% shim=sec::FNV1aHash
    function FNV1aHash(data: string): number;
}