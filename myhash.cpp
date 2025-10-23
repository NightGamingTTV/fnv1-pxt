#include "pxt.h"

using namespace pxt;

namespace sec {

//%
int FNV1aHash(StringData *data) {
    if (data == NULL) return 0;
    
    uint32_t hash = 2166136261U;
    int len = data->len;
    
    for (int i = 0; i < len; i++) {
        hash ^= (uint8_t)data->data[i];
        hash *= 16777619U;
    }
    
    return (int)hash;
}

}