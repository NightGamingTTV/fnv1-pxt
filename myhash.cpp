#include "pxt.h"

using namespace pxt;

namespace sec {

//%
int FNV1aHash(String s) {
    if (s == NULL) return 0;

    uint32_t hash = 2166136261U;
    int len = GET_STRING_LENGTH(s);

    for (int i = 0; i < len; i++) {
        hash ^= (uint8_t)GET_STRING_CHAR(s, i);
        hash *= 16777619U;
    }

    return (int)hash;
}

}