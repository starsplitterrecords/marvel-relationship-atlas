# Hourly ChatGPT research runbook — GitHub connector

This is the procedure for the scheduled research task. The success criterion is **new interpersonal research committed to GitHub**, not a status message, TODO list, research lead, or prose-only edit.

## Start quickly
1. Use `functions.exec` and the connected `mcp__GitHub__fetch_file` tool (exact normalized name exposed on `tools`). The repository is `starsplitterrecords/marvel-relationship-atlas`, default branch `main`.
2. Fetch `data/relationship_pilot.json`, `data/identity_crosswalk.json`, and `data/earth616_broad_atlas.json` as needed, **including the current blob SHA of any file to be updated**. Avoid using web page scraping to edit GitHub.
3. Prefer one underrepresented social community per hour, away from Daredevil. At most two adjacent runs in the same community. Gather official Marvel source URLs and descriptive issue evidence.

## Make the durable change before writing a report
4. Extend `data/relationship_pilot.json` with **new people, source URLs, observations, and directional social connections**. Aim for 5–12 genuinely new people and 8–15 independently meaningful interpersonal pairs; these are aspirations, not minimum quotas. Shared team membership and co-appearance never count as interpersonal connection.
5. Validate all identity, event and source references, unique IDs, and issue chronology. Preserve prior records. Use a deterministic or checked new ID scheme so existing IDs are never overwritten.
6. Use `mcp__GitHub__update_file` with `{repository_full_name, path, sha:current_blob_sha, content:complete_updated_json, message}`. This is the critical **write** operation; merely calling `fetch_file` or producing text is not progress. The output `commit_sha` establishes that the update was committed.
7. Only **after** the canonical data commit, update crosswalk mappings when identities match safely, add new editorials to `data/editorial_profiles.json`, and create a short `updates/` change log. The mobile app fetches JSON from GitHub Pages. If editing the large canonical JSON cannot be completed, a new validated incremental JSON file under `data/research_batches/` can be committed as a documented fallback; explicitly report that it has not yet been merged.
8. Check the latest GitHub Actions validation run if possible. If validation fails, repair it before declaring the update successful.

## Don't get blocked indefinitely
- If access asks for new connector authentication or `update_file` returns a conflict, **refetch the latest SHA once and reconcile**. Never retry stale SHA blindly.
- If a named relationship yields no verifiable findings after two substantially overlapping source trails, capture the unresolved question and switch to a different pair.
- If GitHub write still fails, do not claim a successful run. Report the precise error and give a source-linked, machine-readable additive patch where possible.
- If automation's tools do not include a GitHub write action, say exactly that. A list of research leads without a persisted dataset change does not satisfy the task.

## In chat after every run
Write a short comics editorial about the people and what makes their relationships unusual. Include a few official source links, avoid technical jargon, and end with **one** unobtrusive accountability sentence: net new distinct people, net new interpersonal pairs, net new directional assessments, and link to the real commit. If zero were added, say zero; never substitute merely researched or planned records.

## Why these rules exist
The first scheduled run (2026-10-18) committed `updates/2026-10-18-editorial-research-followups.md` with leads, **but zero new interpersonal relationships**. A later corrective manual run successfully committed new real relationship records. Future runs must use the latter as the model.
