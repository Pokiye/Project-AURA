#ifndef AURA_ABSTRACTION_H
#define AURA_ABSTRACTION_H

typedef enum { INHALE, EXHALE } Phase;

void toggle_breathing_phase();
Phase get_current_phase();

#endif
