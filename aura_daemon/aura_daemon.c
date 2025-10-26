
#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include "aura_abstraction.h"

int main() {
    printf("🧘 AURA Daemon started...\n");

    while(1) {
        // Simulate inhale/exhale phases
        toggle_breathing_phase();
        Sleep(4000); // 4 seconds
    }

    return 0;
}
