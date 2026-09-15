# Discovery Editorial V2

## Version baseline

- Previous production baseline: `07c4380`
- Redesign branch: `feat-discover-editorial-v2`
- Scope: `/discover` home only. AI applications, plugins, templates, detail pages, and source data remain unchanged.

## Observed problem

The previous home page rendered all 13 official prompts at equal visual weight before product updates and practice content. Desktop and 390px mobile screenshots showed that users had to scan a long, repetitive card wall before reaching any other discovery content.

The issue was structural rather than decorative:

- no distinction between recommended content and complete inventory;
- three individually styled modules read as separate demos;
- four rotating card colors created variety without communicating meaning;
- mobile amplified the repetition because every prompt occupied a full row.

## Evidence used

1. [Notion Marketplace](https://www.notion.com/templates) presents a small editorial selection before category and full-inventory browsing.
2. [Slack Marketplace](https://slack.com/marketplace) leads with editor-selected apps, then exposes category shelves and "view all" routes.
3. [Linear Changelog](https://linear.app/changelog) uses time as the organizing model, giving the current release priority before supporting details.
4. [Nielsen Norman Group: Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/) recommends showing a few important options first and revealing the larger specialized set on request.

These references support an information-architecture decision, not visual imitation.

## Design decisions

| Decision | Reason |
| --- | --- |
| Show one featured prompt and three quick prompts | Establishes priority within two seconds while keeping representative scenarios visible. |
| Reveal the remaining prompts through a labeled control | Preserves all 13 official templates without imposing the inventory on every visitor. |
| Use one blue accent plus neutrals | Color now indicates product identity and interaction instead of arbitrary card rotation. |
| Keep one current release plus a recent timeline | Matches the temporal nature of product updates and avoids another equal-card grid. |
| Show one primary practice item plus three secondary items | Creates an editorial reading order while preserving course, customer, and practice coverage. |
| Disable the first-visit upgrade popover by default | The overlay obscured the page heading and no longer represents a new migration state. |

## Acceptance checks

- Default home renders 4 prompt cards, not 13.
- "View all" reveals all 13 official prompts and can collapse them again.
- Search still returns every matching prompt.
- Product, practice, catalog, and detail source data are unchanged.
- No horizontal overflow at 1440px and 390px.
- Production build completes successfully.
- Keyboard focus and accessible labels remain available for icon actions and disclosure controls.

## Polish pass

The follow-up pass preserves the information architecture and improves finish quality without changing content:

- full-width section bands separate prompts, updates, and practices through material rather than extra navigation;
- one neutral surface system, one border system, and one shadow scale replace default-looking containers;
- featured content receives stronger image framing and type hierarchy while secondary content remains compact;
- mobile prompt cards reflow vertically instead of compressing two columns into the narrow content area;
- focus rings, reduced-motion behavior, and larger mobile disclosure targets complete the interaction states.

## High-fidelity editorial cover

The Pinterest research identified consistent imagery as the remaining gap between a polished workspace and a recognizable content experience. The high-fidelity pass therefore:

- turns the featured prompt into an official AI Assistant cover using a verified product asset;
- keeps the scenario and prompt excerpt directly actionable beneath the cover;
- converts three supporting prompts into one continuous editorial list instead of separate floating cards;
- removes nested card surfaces and uses typography plus divider rules for structure;
- preserves all 13 prompts through disclosure and keeps the existing product update and practice data unchanged.
