#include <stdio.h>
#include "aura_abstraction.h"

// Simple in-memory simulation
#define MEMORY_SIZE 1024
static int memory[MEMORY_SIZE];

int read_system_value(int address) {
    if(address < 0 || address >= MEMORY_SIZE) return -1;
    return memory[address];
}

void write_system_value(int address, int value) {
    if(address < 0 || address >= MEMORY_SIZE) return;
    memory[address] = value;
}
