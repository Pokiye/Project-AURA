#ifndef AURA_ABSTRACTION_H
#define AURA_ABSTRACTION_H

#include <stddef.h>

// Memory abstraction
void* aura_alloc(size_t size);
void aura_free(void* ptr);

// Sleep / timer abstraction
void aura_sleep_ms(int milliseconds);

// Logging
void aura_log(const char* message);

#endif
