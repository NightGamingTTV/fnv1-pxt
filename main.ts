// Define a new category for your blocks
//% weight=100 color=#d10000 icon="\uf02d" block="WiredOS Util"
namespace sec {
    serial.writeLine("test")
    serial.writeBuffer(sec.sysInfo())
    enum board {
        V2 = 0x12,
        V1 = 0x11,
        VX = 0x10
    };
    
    /**
 * Returns a 5 byte buffer containing system information.
 */
    //% block="system information"
    //% data.defl="text"
    //% shim=system::sysinfo
    export function sysInfo(): Buffer {
        // buffer structure
        // 4 byte | 1 byte
        // serial | board
        const MASK_32_BITS = 0xFFFFFFFF;
        let boardBuffer = Buffer.create(1)
        boardBuffer.setNumber(NumberFormat.Int8LE, 0, board.V2)
        let serialBuffer = Buffer.create(4);
        let deviceSerial = control.deviceSerialNumber()
        let serial32Bit = deviceSerial & MASK_32_BITS
        let sysinfo = null
        serialBuffer.setNumber(NumberFormat.Int32LE, 0, serial32Bit);
        if (boardBuffer.length + serialBuffer.length <= 5) {
          sysinfo = serialBuffer.concat(boardBuffer)
          } 
        else {
            // if it is above 5 bytes there must have been a critical bug.
            control.panic(0xFF5)
        }
        return sysinfo; 
        /**
        * todo use control.hardwareVersion instead of
        * hardcoded board value
        */
    }
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
