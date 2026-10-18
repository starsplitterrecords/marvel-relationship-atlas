# Marvel Relationship Atlas

**A mobile-first, evidence-backed social atlas of Marvel Comics Earth-616.**

The goal is to map *what kind* of relationships characters have — trust, friendship, respect, power, authority, romance, coercion, family, professional ties, ideology, loyalty, conflict and influence — not merely who co-appears or joins the same team.

## Apps and data

- [Mobile relationship explorer](index.html) — v0.6: comparative, directional relationship evidence.
- [Broad Earth-616 explorer](atlas.html) — v0.4: historical characters, organizations and affiliations.
- [Relationship research JSON](data/relationship_pilot.json) — **11 people, 19 dimensions, 55 directional claims, 38 event observations and 34 publisher sources**.
- [Broad network JSON](data/earth616_broad_atlas.json) — **314 nodes** (260 characters and 54 organizations), **596 connections** and **74 sources**.
- [Research standards](docs/RESEARCH_PROTOCOL.md) and [roadmap](docs/ROADMAP.md).

**Important:** Broad-graph affiliations are **not** 596 verified interpersonal relationships. Both versions are retained separately until the research model can merge them without losing evidentiary distinctions.

## Research methodology

A substantive connection records **who → whom**, the relationship dimension, evidence and time scope. An observed fictional event is separate from the assessment of trust, motive, respect or affection it might support. Each claim retains provenance, epistemic status, and review status. Missing evidence means **unknown**, not absent.

Publisher synopses are not original comics panels: the v0.6 pilot is source-linked but **not panel-verified**. Never present speculative motivations or current affiliations as canon on that basis.

## Automated hourly research

**GitHub main is the canonical store.** Each run should load the latest JSON, prioritize breadth across different character clusters, add only sourced distinct identities and typed interpersonal edges, validate uniqueness/references, and commit actual deltas to GitHub. Report precise net changes and a commit link. Never claim progress without a verified update.

The app presently embeds data snapshots in HTML. Editing the JSON **does not yet automatically refresh the embedded browser dataset**; rebuilding the app is a separate task.

## Mobile publishing

The repo is ready for GitHub Pages but Pages may need enabling in repository **Settings → Pages → Deploy from branch → main / root**. Then open the HTTPS URL in iPhone Safari and select **Share → Add to Home Screen**. A real iPhone installation has not yet been tested.

Unofficial fan project. Not affiliated with or endorsed by Marvel.
