// Define a new category for your blocks
//% weight=100 color=#d10000 icon="\uf02d" block="WiredOS Util"
namespace sec {
    export enum Board {
        VX = 0x10,
        V1 = 0x11,
        V2 = 0x12
    }

    /**
     * Returns a 5 byte buffer containing system information.
     */
    //% block="system information"
    //% shim=sec::_sysInfo
    export function sysInfo(): Buffer {
        const MASK_32_BITS = 0xFFFFFFFF;
        let boardBuffer = Buffer.create(1);

        // Try to get hardware version dynamically
        let boardType = Board.V2; // default
        // Note: control.hardwareVersion() might not exist in all MakeCode versions
        // You may need to use a different method to detect board version

        boardBuffer.setNumber(NumberFormat.UInt8LE, 0, boardType);

        let serialBuffer = Buffer.create(4);
        let deviceSerial = control.deviceSerialNumber();
        let serial32Bit = deviceSerial & MASK_32_BITS;

        serialBuffer.setNumber(NumberFormat.UInt32LE, 0, serial32Bit);

        // Create combined buffer (serial + board)
        let sysinfo = Buffer.create(5);
        sysinfo.write(0, serialBuffer);
        sysinfo.write(4, boardBuffer);

        return sysinfo;
    }

    /**
     * Calculates a custom FNV-1a style hash of a string.
     * @param data The string to hash, eg: "microbit"
     */
    //% block="FNV-1a Hash of %data"
    //% data.defl="text"
    //% shim=sec::_FNV1aHash
    export function FNV1aHash(data: string): number {
        // This is the TypeScript fallback implementation
        // It will be overridden by the C++ implementation if available
        let hash2 = 2166136261;

        for (let j = 0; j < data.length; j++) {
            let charCode = data.charCodeAt(j);
            hash2 ^= charCode;
            hash2 = Math.imul(hash2, 16777619) >>> 0;
        }

        return hash2;
    }
}