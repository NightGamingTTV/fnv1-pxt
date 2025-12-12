#include "pxt.h"
#include "MicroBit.h"
using namespace pxt;

namespace sec {
    /**
     * FNV-1a Hash implementation in C++
     */
    //%
    uint32_t _FNV1aHash(String data) {
        const char *data_ptr = data->utf8Data;
        int len = data->getLength();
        uint32_t hash = 2166136261u;
        
        for (int i = 0; i < len; i++) {
            hash ^= (uint8_t)data_ptr[i];
            hash *= 16777619u;
        }
        
        return hash;
    }
    
    /**
     * System information implementation
     * Returns a buffer with serial number and board type
     */
    //%
 
    Buffer _sysInfo() {
        // Get device serial number (32-bit)
        uint32_t serial = microbit_serial_number();
        
        // Create a 5-byte buffer
        Buffer buf = mkBuffer(NULL, 5);
        
        // Write serial number (4 bytes, little-endian)
        buf->data[0] = serial & 0xFF;
        buf->data[1] = (serial >> 8) & 0xFF;
        buf->data[2] = (serial >> 16) & 0xFF;
        buf->data[3] = (serial >> 24) & 0xFF;
    
        uint8_t boardType = 0x12; // default V2
        #if MICROBIT_CODAL
            MicroBitVersion v = uBit.power.getVersion();
            switch (v.board) {
                case 0x9903:
                case 0x9904: boardType = 0x11; break; // V1
                case 0x9905:
                case 0x9906: boardType = 0x12; break; // V2
                default: boardType = 0x10; break;      // VX / unknown
            }
        #endif

        buf->data[4] = boardType;
        
        return buf;
    }
}