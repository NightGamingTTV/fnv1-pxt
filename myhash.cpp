#include "pxt.h" // Required for the pxt environment

using namespace pxt;

// Note: In C++, integer types are crucial. 'uint32_t' ensures a 32-bit unsigned integer.
// The String object in MakeCode maps to the 'String' type in the C++ backend.

namespace custom {
    /**
     * Calculates a custom hash value for a given string (FBV1).
     * @param data The string to hash.
     */
    //%
    uint32_t FBV1_C(String data) {
        // PXT's String is null-terminated, so we can treat it like a standard C string
        const char *data_ptr = data->get.utf8;
        int len = data->length; // Length of the string

        // Variable declarations
        uint32_t hash2 = 2166136261;
        
        for (int j = 0; j < len; j++) {
            // Get the character value (assuming 8-bit characters, which is typical for char)
            uint8_t b_val = (uint8_t)data_ptr[j];
            
            // FNV-1a-like logic: XOR with octet, then multiply
            // The multiplication and overflow handling are crucial in C/C++
            hash2 = (hash2 ^ b_val) * 16777619; 
            // The overflow behavior on the micro:bit's 32-bit architecture often
            // handles the & 0xffffffff implicitly, but for safety, you'd rely on
            // the fixed-size 'uint32_t'.
        }
        
        return hash2;
    }
}