# Research repair — 2026-10-18

## Why this run exists
The first hourly automation did not deliver a dataset update. It committed only follow-up leads (`updates/2026-10-18-editorial-research-followups.md`), leaving the relationship dataset at 11 people, 10 distinct interpersonal pairs, 55 directional assessments, 38 story events, and 34 sources. Research notes alone are *not* a successful run.

## This run: substantive new coverage
We moved deliberately beyond Matt Murdock into three distinct Earth-616 communities: mutant family/ideology, Fantastic Four family/friendship/authority, and the Scarlet Witch–Vision relationship.

| Field | Prior canonical | After this expansion | Actual addition |
|---|---:|---:|---:|
| People in relationship database | 11 | 37 | **+26** |
| Distinct researched pairs | 10 | 41 | **+31** |
| Directional relationship assessments | 55 | 124 | **+69** |
| Sourced event observations | 38 | 76 | **+38** |
| Marvel source records | 34 | 46 | **+12** |
| Reader-facing cross-universe essays | 0 | 6 | **+6** |

The 260-character broader atlas remains a distinct historical affiliation catalogue; it was *not* expanded in this run, and its 596 edges do *not* mean 596 vetted interpersonal relationships.

## Representative findings and official Marvel references

- **Rogue–Mystique–Destiny:** Mystique and Destiny raised Rogue, but Mystique also used her powers in the Brotherhood; Marvel describes Rogue as closer to Destiny. Sources: https://www.marvel.com/characters/rogue/in-comics and https://www.marvel.com/articles/comics/x-men-destiny-mystique-best-moments-romance-list
- **Xavier–Magneto:** Their philosophical estrangement followed actual friendship and a shared intervention to rescue Gabrielle Haller. Source: https://www.marvel.com/teams-and-groups/x-men/in-comics
- **Johnny Storm–Ben Grimm:** The Human Torch's official biography explicitly describes Ben as his closest friend, despite their feuds and pranks. Sources: https://www.marvel.com/characters/human-torch-johnny-storm/in-comics/ and https://www.marvel.com/comics/collection/122807/fantastic_four_fanfare_trade_paperback
- **Sue–Reed:** Marvel describes Reed's early patriarchal authority and Sue's later insistence on a more equitable role; a marriage does not equal consent to power. Source: https://www.marvel.com/teams-and-groups/fantastic-four/in-comics
- **Vision–Wanda:** Marvel's reading guide traces initial romantic hesitation, later emotional support, marriage, and post-reconstruction memory loss. Source: https://www.marvel.com/comics/guides/2030/love-story-of-scarlet-witch-and-vision

## Research limits
This round uses Marvel-published synopses and official character/team histories. The original comic panels were not independently reviewed. Some observations are editorial history rather than specific issues; their publication years remain `null` instead of invented dates. Relationship interpretations are kept separate from direct descriptions.

Several historical details, including Mystique's parenthood retcons, Wanda and Vision's twins, and exact chronology of mutant family events require later primary-issue review. Avoid retroactively rewriting current emotional status from older story arcs.

## Changed paths
- `data/relationship_pilot.json` — canonical new people, events, directional relationships and sources.
- `data/identity_crosswalk.json` — stable matches to the earlier broad character catalogue.
- `data/editorial_profiles.json` — six human-facing essays on new communities.
- `app.js` — new story collection available on the public mobile page.
- `scripts/validate_editorial.py` and `.github/workflows/validate.yml` — safeguard editorial references and JavaScript syntax.

**Commits for substantive data:**
- Mutant relationships: https://github.com/starsplitterrecords/marvel-relationship-atlas/commit/9ca69c21b1e2e3c49549bf77465fdc22edd2f295
- Fantastic Four / Wanda-Vision: https://github.com/starsplitterrecords/marvel-relationship-atlas/commit/3c3970439d1473f5e38991475bbed1877d74288c

## Next underexplored communities
1. Cosmic political/family structures: Shi'ar, Kree, Skrull, Guardians and Nova.
2. Espionage and institutional loyalty: Nick Fury, Black Widow, S.H.I.E.L.D., HYDRA.
3. Young Avengers and legacy family ties, when Marvel issue evidence is strong.

No run should treat the creation of a planning note or the addition of a team membership as a successful interpersonal research update.
