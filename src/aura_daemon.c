#include <stdio.h>
#include "aura_abstraction.h"

int main() {
    aura_log("AURA Daemon starting...");

    const char* phase = "inhale";
    
    while (1) {
        aura_log(phase);

        // Toggle breathing phase
        phase = (phase[0] == 'i') ? "exhale" : "inhale";

        aura_sleep_ms(4000); // 4 seconds per phase
    }

    return 0;
}
