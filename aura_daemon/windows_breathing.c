#include <stdio.h>
#include "aura_abstraction.h"

static Phase current_phase = INHALE;

void toggle_breathing_phase() {
    current_phase = (current_phase == INHALE) ? EXHALE : INHALE;
    printf("Current phase: %s\n", current_phase == INHALE ? "INHALE" : "EXHALE");
}

Phase get_current_phase() {
    return current_phase;
}
