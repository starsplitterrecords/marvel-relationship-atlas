# Editorial style for Marvel Relationship Atlas

## What readers should feel
A thoughtful comics feature, not a database export or a technical research report. Tell the story of what makes the relationship distinctive: respect without trust, concern that looks like opposition, intimacy that creates risk, authority without affection, rivalry alongside mutual understanding.

## Voice
- Write **about people**, not records. Lead with a sharp human observation or consequential story, then explain the relationship in ordinary language.
- Use short, vivid but restrained editorial prose. A good portrait is 100–220 words; an hourly update is about 120–250 words.
- Let contradictions sit beside each other. Friendship, admiration, resentment and dependence can coexist.
- Natural headlines: “The friend who can tell Matt he's wrong,” rather than “Trust Dimension: 4 of 5.”
- Ground examples in specific comics and publication eras. Don’t assert continuity across decades unless the evidence supports it.
- State uncertainty naturally: “the scene suggests,” “it isn't clear whether,” “that doesn't necessarily mean.” Avoid confident invention of unspoken thoughts.
- Distinguish antagonism, moral opposition, coercion and authority. Neither shared enemies nor team membership establish friendship or respect.
- Avoid repeating the same formula for every relationship. The defining emotional stakes should shape the presentation.

## Keep away from the reader-facing surface
Don't lead with "nodes," "edges," "claims," "schema," "confidence score," "source IDs," "ontology," "delta," "normalized entity," or "verified assertions." These belong in the internal research tools, not the main website or chat summaries.

Don't turn every portrait into a stacked checklist or numerical ratings; the app can offer a quiet "Comics behind this story" expansion.

## Research under the surface
The canonical datasets must remain structured, sourced and reviewable. Keep formal research notes, precise source links, revision history, and validator counts *in the repository*. This distinction is critical: readable prose is built **from** the evidence; it does not replace it.

## Hourly update template (as a natural paragraph, not a status dashboard)
**Headline:** the most interesting social insight from today's new additions.
**Two to three short paragraphs:** tell the reader how these people are connected, where power and emotion diverge, and why a particular incident changes the picture. Link to relevant comic issues or Marvel official summaries.
**One unobtrusive ending:** what new territory was added, with exact count of newly added characters/relationships and link to the real GitHub commit. If no new data was committed, say that plainly. This accountability is required, but it should never overwhelm the writing.

## Continuous publication
The mobile landing page uses `data/editorial_profiles.json` and `data/relationship_pilot.json` at runtime. Add new reader-facing portraits to the editorial JSON, and issue-backed events and directional typed assessments to the research JSON. Never populate the public page with raw claim listings. Preserve the research-source caveat: summaries and editorial guides are not identical to full original comics reading.
