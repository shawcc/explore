# Pinterest Discovery Design Research

## Scope

Pinterest searches reviewed on 2026-09-15:

- [SaaS marketplace web design](https://www.pinterest.com/search/pins/?q=saas%20marketplace%20web%20design)
- [Resource hub website design](https://www.pinterest.com/search/pins/?q=resource%20hub%20website%20design)
- [Content hub web design](https://www.pinterest.com/search/pins/?q=content%20hub%20web%20design)
- [SaaS changelog web design](https://www.pinterest.com/search/pins/?q=saas%20changelog%20web%20design)

Pinterest results are inspiration references rather than usability evidence. Many results are marketing concepts or portfolio shots, so this review keeps only patterns compatible with an in-product discovery page.

## Three recurring directions

### 1. Product marketing page

These pages use a large hero, oversized product mockups, short value statements, and alternating feature sections. They feel polished because one image dominates each viewport and every section has a clear focal point.

This direction is not a direct fit for Discover: it requires campaign-level copy and imagery, adds ongoing editorial work, and can make an in-product page feel like an external landing page.

### 2. Editorial resource hub

These pages combine one featured story with a small set of supporting cards, then switch rhythm by topic or content type. Images are treated as covers with stable aspect ratios, not as small decoration inside identical cards.

This is the closest fit for Discover because prompts, releases, courses, and customer stories are content with different reading weights.

### 3. Functional marketplace

These pages prioritize search, categories, recognizable icons, and dense inventory cards. Their polish comes from consistent product thumbnails and strict metadata structure rather than large editorial composition.

This direction fits the AI applications, plugins, and templates tabs, but not the Discover home page.

## Consistent visual signals

| Signal | What appeared repeatedly | Implication for Discover |
| --- | --- | --- |
| One dominant item | One large visual or story receives 40-60% of the content width | Keep one featured prompt, release, or practice item instead of equal cards |
| Image discipline | A section uses one stable crop, frame, and background treatment | Give product screenshots a shared visual stage |
| Strong type contrast | Display titles are clearly separated from metadata and body copy | Increase hierarchy without increasing the number of labels |
| Section rhythm | Full-width color or material bands separate topics | Use section surfaces instead of more borders and nested cards |
| Limited palette | One brand accent plus one or two support colors | Avoid rotating colors that do not encode meaning |
| Mixed density | Featured content is spacious; supporting content is compact | Do not make every card the same height or visual weight |
| Visible browsing path | Topics, categories, or "view all" controls remain obvious | Preserve progressive disclosure and direct catalog access |

## What still separates the current page from the references

1. The prompt section remains text-heavy. Its featured item has hierarchy, but not yet a distinctive visual identity comparable to the image-led anchors in strong resource hubs.
2. Product screenshots are authentic but vary in composition and scale. A shared frame and crop system would make them feel commissioned as one set.
3. The page uses the same system typeface everywhere. This is appropriate inside the product, but the editorial sections need stronger size and weight contrast to feel authored.
4. Secondary cards still rely on bordered containers. The best references use more open layouts and reserve framed surfaces for items that are truly interactive.
5. The current restrained blue-gray palette is credible but quiet. A second controlled support color could differentiate editorial content from product inventory without returning to arbitrary multicolor cards.

## Recommended direction

Use an editorial resource-hub shell inside the existing product navigation:

- no campaign hero and no constantly refreshed editorial banner;
- one stable visual anchor per section;
- one featured item plus a compact supporting list;
- consistent image frames and aspect ratios;
- blue as the interaction color, with one restrained support color for editorial content;
- fewer visible card borders, relying more on spacing, bands, and typography.

This keeps maintenance low while moving the page beyond a polished component library into a recognizable content experience.
