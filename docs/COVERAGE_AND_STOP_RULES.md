# Breadth-first editorial coverage and stopping rules

**Purpose:** Prevent the project from becoming an excellent book about one handful of characters while ignoring the rest of Earth-616. This governs the hourly automated research as well as manual expansion.

## The risk we can actually see

At project initialization, the broad atlas lists 260 characters and 54 organizations; the relationship pilot covers only 11 people and 10 distinct interpersonal pairs. **Every one of the 55 directed assessments involves Matt Murdock.** This is a deliberate pilot but an unacceptable long-term distribution. Counts in the broad atlas are not interchangeable with deep interpersonal coverage.

## Maintain two maps

1. **What exists in the fiction:** A broad list of characters and communities, including heroes, villains, mutants, espionage, government, cosmic, mystic, family, and supporting cast. The broad atlas is a useful candidate index, not an authoritative exhaustive census of Marvel.
2. **What this project can actually explain:** People with sourced, meaningful *person-to-person* relations. Do not count a team membership or comic co-appearance as a social relationship. Record the sector of covered people through `data/identity_crosswalk.json`, and also log which distinct story worlds the research has visited.

The coverage audit script in `scripts/coverage_audit.py` computes traceable statistics from committed data. Its percentages indicate coverage **within the project's current 260-character roster**, not percentage of Marvel's entire publishing history.

## Editorial research map

These are research priorities, not mutually exclusive character categories:

- **Mutants and their families:** X-Men, the Brotherhood, Hellfire Club, New Mutants, generations of teachers and rivals.
- **Avengers and civic power:** founding generation, later leaders, personal fractures, government accountability, successors.
- **Fantastic Four and their wider family:** kinship, partnerships, mentors, rivals, and the people who orbit them.
- **Street-level New York:** beyond Daredevil, including Spider-Man's own social world, Luke Cage, Iron Fist, Jessica Jones, criminal networks.
- **Criminal and villainous networks:** coercion, protection, debt, patronage, betrayal, and actual friendships.
- **Espionage, science and institutions:** S.H.I.E.L.D., A.I.M., HYDRA, scientists, agents and unofficial influence.
- **Mystic and supernatural:** training, obligations, rivalries, worship, bargains, control, and kinship.
- **Cosmic and interstellar politics:** family, empires, diplomacy, succession, cross-species alliances.
- **Nations and monarchies:** Wakanda, Latveria, Atlantis, Attilan and individuals whose personal ties influence affairs of state.
- **Younger heroes and legacies:** inherited identities, mentorship, sibling-like ties, intergenerational tensions.
- **Supporting cast and civilians:** friendships, caregiving, journalism, legal relationships, romance, family, and consequences of heroic secrecy.
- **Cross-community bridges:** individuals and relationships joining two or more of the above worlds.

**Candidate relationships** suggested by this map are questions to investigate, never automatically sourced facts.

## Decisions for each hourly research run

1. **Choose the gap first.** Read the latest GitHub state, last eight successful research logs, the breadth audit, and the open-question queue. Pick an underexplored community before searching.
2. **Rotation rule.** No more than two consecutive runs centered on the same research community. In the next eight successful runs, prioritize non-Daredevil ties. Daredevil may appear incidentally in a new community but must not remain the hub.
3. **Strive for breadth that matters.** Prefer adding independently sourced person-to-person relationships connecting distinct people, families, and social groups to simply adding more assertions about the same pair. Record all valid evidence, but never manufacture breadth.
4. **Discovery limit.** After two substantially overlapping source trails for a relationship without a new verifiable conclusion, mark it unresolved, preserve the links and move to the next candidate. Do not burn a whole hourly run on one retcon or identity dispute.
5. **Issue-level escalation.** If accuracy requires primary panels unavailable through lawful means, record the limit, classify the assertion as tentative or leave it out, and continue. No imagined dialogue or private thoughts.
6. **Deduplicate before counting.** A new dimension about a known pair is not a newly covered character or a distinct new pair. Co-appearances and memberships are not counted as personal relationships.
7. **Change the reader-facing experience.** Publish a short, human-written portrait or update about the most interesting *new* social discovery in the hourly run, as supported by evidence.
8. **Commit or disclose failure.** Validate schema, save canonical JSON and research log to GitHub, then report the commit. If there is no actual changed dataset, say so plainly and name the obstacle.

## Rolling checkpoints, not vanity goals

**After every run:** record research community, newly covered people, new distinct pairs, new meaningful sourced assessments, source citations and actual committed paths. Highlight whether any new connection crosses communities.

**After every eight successful runs:** report the number of research communities newly visited, distribution of newly covered people across broad sectors, new independent relationship pairs, and which characters remain overrepresented. Explicitly identify the largest untouched major community and prioritize it next. Ask: *What major Marvel story world would a reader expect to find that is still missing?*

**Saturation alert:** If the same focal person dominates additions repeatedly, or two consecutive runs produce only new interpretations about already-known pairs, force a breadth-focused run elsewhere before deepening the existing work. For planning purposes, keep a single anchor below roughly one-third of newly added connections across a rolling eight-run window; exceptions need a documented reason, not an inflated count.

**Escalation:** A source dispute, duplicate identity, contradictory chronology, or dense retcon becomes an issue in `research_backlog` or an `updates/` log. It does not monopolize the expansion.

## Priority when several gaps compete

First, address major empty story worlds. Second, favor personal connections that reveal a different kind of social dynamic (authority, protection, friendship, betrayal, mentorship, fear, love, coercion, obligation). Third, prefer character-to-character bridges between otherwise disconnected communities. Fourth, favor storylines with usable official sources. Only then revisit deeper nuance in well-covered relationships.

## Reader experience versus internal accountability

The site and hourly chat findings should read as editorial prose about **people**. Keep terms like schema, IDs and scorecards out of that narrative. The internal research ledger must nevertheless expose exact verified totals and full source links for auditing.
