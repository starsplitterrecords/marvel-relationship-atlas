# Research protocol

## Data hierarchy
1. **Identity:** Stable Earth-616 person ID (not equivalent to an alias or mantle).
2. **Observation:** Source-linked account of actions or statements in an identified story.
3. **Directional typed claim:** Source person → target person; dimension, scope, assessment and supporting event(s).
4. **Interpretation:** Clearly labeled inference, never substituted for directly established canon.
5. **History:** Preserve past states and their issue/era qualifiers rather than overwriting with a timeless status.

## Dimensions
Emotional: affection, friendship, romance.
Trust/respect: trust, competence respect, moral respect.
Power: influence, formal authority, coercion, dependence.
Social: professional ties, mentorship, family.
Ideological: agreement or disagreement.
Behavioral: cooperation, conflict, cohesion, protection, betrayal.

Dimensions can coexist or conflict. Trust, respect, fear and affection are not automatically reciprocal. One act of cooperation does not imply loyalty; rivalry does not prove hatred. A shared comic appearance or team is NOT a person-to-person psychological relationship.

## Minimum research standard
- Use official Marvel comics issue synopses and editorial histories when available; maintain exact source URLs.
- Label publisher summaries `publisher_secondary`; reserve `panel_verified` for directly inspected comics.
- Include issue/period scope and record what was *observed* separately from interpretation.
- Include direct claim source via event IDs and the event's `source_id`. Resolve all references.
- Maintain explicit uncertainty, conflicting interpretations and continuity questions.
- Do not conflate release date and diegetic time, alternate universes, aliases, clones or repeated mantles.
- Do not infer today's roster from a historical membership.

## Hourly expansion protocol
1. Read the latest GitHub `main` dataset and totals.
2. Select a *different* Earth-616 cluster when practical; prioritize breadth over repeated depth.
3. Gather verifiable stories, identities and typed interpersonal ties.
4. Deduplicate IDs and genuinely equivalent assertions.
5. Add sources + observations + claims; do not add unsupported links to meet quotas.
6. Validate JSON and references, inspect counts and run the script in `scripts/`.
7. Commit actual changed files with an informative commit message and report commit SHA.
8. Report additions, cumulative totals, 3–5 substantive sourced discoveries, open questions and blockers.
9. If committing is impossible, return validated additive records and say exactly what failed.

Pilot and broad roster datasets are **separate layers**, not comparable evidence tiers.
