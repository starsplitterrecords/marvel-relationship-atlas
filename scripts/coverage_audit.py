#!/usr/bin/env python3
"""Honest breadth audit of historical catalogue vs verified interpersonal pilot.

Usage: python scripts/coverage_audit.py
Counts are only within current project catalogue, NOT percentage of all Marvel.
"""
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
def read(name):
    return json.loads((ROOT / "data" / name).read_text(encoding="utf-8"))

broad = read("earth616_broad_atlas.json")
pilot = read("relationship_pilot.json")
cross = read("identity_crosswalk.json")
characters = {n["id"]: n for n in broad["nodes"] if n.get("kind") == "character"}
people = {p["id"]: p for p in pilot["people"]}
mappings = cross["mappings"]
linked = {x["person_id"]: x["node_id"] for x in mappings}
assert len(linked) == len(mappings), "Repeated pilot person mapping"
assert len(set(linked.values())) == len(linked), "Multiple pilot people mapped to one broad identity"
assert all(pid in people for pid in linked), "Crosswalk points to missing pilot person"
assert all(nid in characters for nid in linked.values()), "Crosswalk points to missing broad character"
assert all(c["from_id"] in people and c["to_id"] in people for c in pilot["claims"]), "Bad claim identity"

active_ids = {x for c in pilot["claims"] for x in (c["from_id"], c["to_id"])}
pairs = {tuple(sorted((c["from_id"], c["to_id"]))) for c in pilot["claims"] if c["from_id"] != c["to_id"]}
counts = Counter(n.get("sector", "unclassified") for n in characters.values())
covered = Counter(characters[linked[p]].get("sector", "unclassified") for p in active_ids if p in linked)
unmapped = sorted(active_ids - linked.keys())
degrees = Counter()
for a,b in pairs:
    degrees[a] += 1
    degrees[b] += 1
claims_per_person = Counter()
for claim in pilot["claims"]:
    claims_per_person[claim["from_id"]] += 1
    claims_per_person[claim["to_id"]] += 1

print("EARTH-616 RELATIONSHIP ATLAS — CURRENT CATALOGUE COVERAGE")
print("Broad catalogue: {} characters; {} organizations (not a complete Marvel census)".format(
    len(characters), sum(n.get("kind") == "organization" for n in broad["nodes"])))
print("People in sourced interpersonal claims: {} ({} mapped to broad catalogue)".format(
    len(active_ids), len(active_ids - set(unmapped))))
print("Distinct interpersonal pairs: {}".format(len(pairs)))
print("Directional dimension assessments: {}".format(len(pilot["claims"])))
print("Covered character share of current catalogue: {:.1f}% (NOT % of all Marvel)".format(
    100 * len({linked[p] for p in active_ids if p in linked}) / len(characters)))
print()
print("Sector                         Broad people   In interpersonal research")
for sector in sorted(counts):
    print("{:<30} {:>6} {:>18}".format(sector, counts[sector], covered[sector]))
print()
if unmapped:
    print("UNMAPPED PILOT PEOPLE:", ", ".join(unmapped))
print("Relationship-pair degree (unique partners), most concentrated first:")
for pid, partner_count in degrees.most_common(12):
    print("  {:<20} {:>3} partners, {:>3} directed assessments".format(
        people[pid].get("alias", pid), partner_count, claims_per_person[pid]))
if degrees:
    top, degree = degrees.most_common(1)[0]
    print("Largest hub: {} participates in {:.0f}% of researched distinct pairs".format(
        people[top].get("alias", top), 100 * degree / len(pairs)))
    if len(pairs) >= 5 and degree / len(pairs) > .50:
        print("COVERAGE ALERT: one focal person dominates; prioritize independent relationships elsewhere.")
if not pairs:
    print("COVERAGE ALERT: no meaningful interpersonal pairs yet")
