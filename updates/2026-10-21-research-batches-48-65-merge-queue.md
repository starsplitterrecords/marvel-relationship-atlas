# Research batches awaiting canonical merge — 2026-10-21

The 18 research batches COS48 through SA65 were preserved as individual JSON files under `data/research_batches/` following the user's explicit manual-commit request. These commits preserve the research **but do not merge it into** `data/relationship_pilot.json`. The canonical file must not be bulk-appended without identity, pair, evidence and schema reconciliation.

## Batches
COS48, AV49, CR50, LAT51, INH52, XF53, SW54, DB55, COS56, MYS57, AF58, SER59, INH60, CIV61, MOR62, COS63, SW64, SA65.

## Raw proposed record counts
203 person records, 286 event records and 365 directed claim records across 18 batches. These are **not net-new canonical counts**.

## Cross-batch identity collisions requiring reconciliation
- Henry Peter Gyrich: AV49 / CIV61
- James Rhodes: AV49 / CIV61
- Eon: COS48 / COS56
- Auran, Frank McGee, Treste, Irelle, Reader, Capo, Dante Pertuz, Gabriela Pertuz and Lash: INH52 / INH60
- Jerry Sledge, Carl Creel, Eden Fesi, Gateway, Sebastian Druid, Alexander Aaron, Ares, Tomi Shishido and John Garrett: SW54 / SW64
- Valerie Cooper: CIV61 / XF53

The above 21 repeated normalized-name entries mean that raw proposed-person counts are inflated. Additional alias collisions, duplicated pairs and continuity disagreements may exist. In particular, SW54/SW64 and INH52/INH60 substantially overlap. Compare against the current canonical dataset and previously unmerged batches before choosing authoritative IDs.

## Evidence limits
The research batches mix official Marvel editorial material, publisher synopses, and independent issue recaps. Most original comic panels have not been reviewed. Keep publisher-secondary assertions provisional, preserve temporal scope and directionality, and exclude mere co-appearances from relationship claims. Some batches contain schema variations and must be normalized before import.

## Manual merge status
- Research JSON committed to GitHub: 18 files
- Canonical people/events/claims added by these commits: **0**
- Identity, chronology, pair and application-import validation: **pending**
