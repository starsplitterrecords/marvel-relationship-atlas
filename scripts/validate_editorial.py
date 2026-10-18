#!/usr/bin/env python3
"""Validate public prose references and identity mappings without requiring external packages."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
def load(path):
    return json.loads((root/path).read_text(encoding="utf-8"))
pilot=load("data/relationship_pilot.json")
editorial=load("data/editorial_profiles.json")
broad=load("data/earth616_broad_atlas.json")
crosswalk=load("data/identity_crosswalk.json")
people={p["id"] for p in pilot["people"]}
events={e["id"] for e in pilot["events"]}
sources={s["id"] for s in pilot["sources"]}
characters={n["id"] for n in broad["nodes"] if n.get("kind")=="character"}
errors=[]
seen=set()
for record in editorial.get("world_stories",[]):
    if record["id"] in seen: errors.append("Duplicate editorial story "+record["id"])
    seen.add(record["id"])
    for id in record.get("focus_ids",[]):
        if id not in people: errors.append("Unknown focus person "+id)
    for id in record.get("event_ids",[]):
        if id not in events: errors.append("Unknown event "+id)
    if not record.get("headline") or not record.get("paragraphs"):
        errors.append("Story missing prose: "+record["id"])
mapped_people=set()
mapped_characters=set()
for mapping in crosswalk["mappings"]:
    person=mapping["person_id"]; char=mapping["node_id"]
    if person not in people or char not in characters: errors.append("Unknown crosswalk identity: "+person+" => "+char)
    if person in mapped_people or char in mapped_characters: errors.append("Duplicate crosswalk identity: "+person+" => "+char)
    mapped_people.add(person); mapped_characters.add(char)
for row in pilot["events"]:
    if row["source_id"] not in sources: errors.append("Unknown event source: "+row["id"])
for entry in ["app.js","style.css","index.html"]:
    if not (root/entry).is_file(): errors.append("Missing web asset: "+entry)
if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print("PASS: {} editorial stories, {} interpersonal claims, {} known identity mappings".format(
    len(editorial.get("world_stories",[])),len(pilot["claims"]),len(mapped_people)))
