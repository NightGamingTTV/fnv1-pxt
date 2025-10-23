#include "pxt.h"

using namespace pxt;

// FBV1 hash (exact translation of the JS version)
uint32_t fbv1Hash(const uString &s)
{
    uint32_t hash = 2166136261U;
    int len = s->length();

    for (int j = 0; j < len; ++j) {
        uint8_t b_val = (uint8_t)s->data[j];
        hash ^= b_val;
        hash = (hash * 16777619U) & 0xFFFFFFFFU;
    }
    return hash;
}