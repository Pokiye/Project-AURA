#include <windows.h>
#include <stdio.h>
#include "aura_abstraction.h"

void* aura_alloc(size_t size) {
    return VirtualAlloc(NULL, size, MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
}

void aura_free(void* ptr) {
    if (ptr) {
        VirtualFree(ptr, 0, MEM_RELEASE);
    }
}

void aura_log(const char* message) {
    printf("[AURA] %s\n", message);
}
