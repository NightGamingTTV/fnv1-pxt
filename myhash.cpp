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
        
        // Write board type (1 byte)
        // You'll need to implement actual board detection here
        // For micro:bit V2, you might check certain pins or features
        buf->data[4] = 0x12; // V2 by default
        
        return buf;
    }
}