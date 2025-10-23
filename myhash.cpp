#include "pxt.h"
using namespace pxt;

namespace sec {

int FNV1aHash(String data) {
    uint32_t hash = 2166136261;
    int len = data->length();
    for (int i = 0; i < len; i++) {
        hash ^= data->charCodeAt(i);
        hash *= 16777619;
    }
    return hash;
}

} // namespace sec
