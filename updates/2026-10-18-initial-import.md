# Initial import — 2026-10-18

This commit series initializes GitHub as the authoritative repository for the existing Earth-616 Relationship Atlas project. **No new comic research was conducted during this import; these are previously assembled datasets.**

## Imported data
- `data/earth616_broad_atlas.json` — 260 character nodes, 54 organization nodes, 596 historical network edges, 74 reference entries (v0.4).
- `data/relationship_pilot.json` — 11 people, 19 relationship dimensions, 55 directional typed claims, 38 observations, 34 source records (v0.6).

**Counts above belong to different schemas and must not be added together.** The broad historical graph is a coverage baseline with affinities/rosters, not an evidentially verified social graph.

## Imported interfaces
- `atlas.html` preserves original broad mobile explorer.
- `index.html` preserves v0.6 mobile relationship explorer.
- `manifest.webmanifest`, `icon.svg`, `service-worker.js` are hosting support files.

## Quality
Verified both GitHub JSON datasets parse; no duplicate canonical IDs or dangling person, event, dimension, source or edge references found in the initial import. Added `scripts/validate_data.py` and an automated GitHub workflow.

## Current limitations
- HTML embeds data snapshots. Updating canonical JSON alone will not update the UI until the pages are rebuilt.
- Source evidence is largely Marvel editorial/issue descriptions, not panel-level primary-text validation.
- XLSX research workbooks from the earlier local build are not in GitHub; canonical data is the committed JSON.
- GitHub Pages has not been enabled or tested on iPhone Safari by this import.

## Next run
Research new clusters breadth-first; commit actual sourced deltas to canonical JSON and append a new update note.
