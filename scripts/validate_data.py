#!/usr/bin/env python3
"""Validate Marvel Relationship Atlas canonical data. Run from any cwd."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
def read(name):
    return json.loads((ROOT / "data" / name).read_text(encoding="utf-8"))

pilot = read("relationship_pilot.json")
broad = read("earth616_broad_atlas.json")
errors = []

def id_set(items, name):
    ids = [row.get("id") for row in items]
    if len(ids) != len(set(ids)):
        errors.append(f"Duplicate ID in {name}")
    if any(not x for x in ids):
        errors.append(f"Missing ID in {name}")
    return set(ids)

people = id_set(pilot["people"], "pilot people")
dims = id_set(pilot["dimensions"], "pilot dimensions")
sources = id_set(pilot["sources"], "pilot sources")
events = id_set(pilot["events"], "pilot events")
id_set(pilot["claims"], "pilot claims")
node_ids = id_set(broad["nodes"], "broad nodes")
broad_source_ids = id_set(broad["sources"], "broad sources")
id_set(broad["edges"], "broad edges")

for row in pilot["events"]:
    for key in ("a", "b"):
        if row.get(key) not in people:
            errors.append(f"Event {row['id']} unknown person: {key}")
    if row.get("source_id") not in sources:
        errors.append(f"Event {row['id']} unknown source")
for row in pilot["claims"]:
    if row.get("from_id") not in people or row.get("to_id") not in people:
        errors.append(f"Claim {row['id']} unknown person")
    if row.get("dimension") not in dims:
        errors.append(f"Claim {row['id']} unknown dimension")
    for eid in row.get("event_ids", []):
        if eid not in events:
            errors.append(f"Claim {row['id']} unknown event {eid}")
for row in broad["edges"]:
    for key in ("source", "target"):
        if row.get(key) not in node_ids:
            errors.append(f"Broad edge {row['id']} unknown {key}")
    if row.get("source_id") and row["source_id"] not in broad_source_ids:
        errors.append(f"Broad edge {row['id']} unknown source id")

print(f"Pilot: {len(people)} people; {len(pilot['claims'])} directional claims; "
      f"{len(events)} observations; {len(sources)} sources")
print(f"Broad: {len(broad['nodes'])} nodes; {len(broad['edges'])} edges; "
      f"{len(broad_source_ids)} sources")
if errors:
    for error in errors:
        print("ERROR:", error)
    raise SystemExit(1)
print("PASS: no duplicate IDs or broken cross-references")
