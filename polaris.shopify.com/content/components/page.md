---
name: Page
category: Structure
platforms:
  - android
  - ios
  - web
keywords:
  - page
  - breadcrumbs
  - view
  - title
  - titlebar
  - breadcrumbs
  - pagination
  - page with all header elements
  - page without primary action in header
  - page without pagination
  - full-width page
  - narrow-width page
  - page with action groups
  - outer wrapper
  - page actions
  - page layouts
  - android
  - ios
examples:
  - fileName: page-with-all-header-elements.tsx
    title: Page with all header elements
    description: >-
      Use for detail pages, which should have pagination and breadcrumbs, and
      also often have several actions.Use for detail pages, which should have
      breadcrumbs, and also often have several actions.Use for building any page
      on Android.undefinedUse for detail pages, which should have breadcrumbs,
      and also often have several actions.Use for building any page on
      iOS.undefined
  - fileName: page-with-custom-primary-action.tsx
    title: Page with custom primary action
    description: Use to create a custom primary action.
  - fileName: page-without-primary-action-in-header.tsx
    title: Page without primary action in header
    description: >-
      Use when a primary action functions better as part of the page content
      instead of in the page header.
  - fileName: page-with-destructive-secondary-action.tsx
    title: Page with destructive secondary action
    description: Used to visually indicate that the secondary page action is destructive.
  - fileName: page-with-custom-secondary-action.tsx
    title: Page with custom secondary action
    description: Use to create a custom secondary action.
  - fileName: page-with-subtitle.tsx
    title: Page with subtitle
    description: Use when the page title benefits from secondary content.
  - fileName: page-with-external-link.tsx
    title: Page with external link
    description: >-
      Use when a secondary action links to another website. Actions marked
      external open in a new browser tab.
  - fileName: page-without-pagination.tsx
    title: Page without pagination
    description: >-
      Use when the page doesn’t represent a list of objects or a detail view for
      an object.
  - fileName: page-full-width.tsx
    title: Full-width page
    description: >-
      Use for layouts that benefit from more screen width, such as wide tables
      or lists.
  - fileName: page-narrow-width.tsx
    title: Narrow width page
    description: >-
      Use a narrow width layout if the page supports a single unified task. When
      merchants must review the entire page contents to complete their goal,
      this layout helps focus their attention in a single path from top to
      bottom.
  - fileName: page-with-action-groups.tsx
    title: Page with action groups
    description: >-
      Use action groups for sets of actions that relate to one another,
      particularly when there are too many to display as secondary actions. Note
      that these groups will be further rolled up into a single action for
      smaller displays so that actions do not wrap or overflow the page bounds.
  - fileName: page-with-content-after-title-title-metadata.tsx
    title: Page with content after title (title metadata)
    description: >-
      Title metadata appears immediately after the page’s title. Use it to
      communicate brief, important and non-interactive status information about
      an entire page.
  - fileName: page-with-divider.tsx
    title: Page with divider
    description: >-
      Use when the page needs visual separation between the page header and the
      content.
---

# Page

Use to build the outer wrapper of a page, including the page title and associated actions.

---

## Best practices

The page component should:

- Always provide a title for the page header.
- Always provide breadcrumbs when a page has a parent page.
- Be organized around a primary activity. If that primary activity is a single action, provide it as a primary button in the page header.
- Provide other page-level actions as secondary actions in the page header.
- When the page represents an object of a certain type, provide pagination links to the previous and next object of the same type.

---

## Content guidelines

### Title

Titles should:

- Describe the page in as few words as possible.
- Be the name of the object type (pluralized) when the page is a list of objects. For a list of orders, the page title should be “Orders”.
- Not be truncated.

### App icon

App icons should:

- Provide their app icon
- Only be provided for pages that are part of a Shopify app

### Breadcrumbs

The content of each breadcrumb link should be the title of the page to which it links.

### Page header actions

Page header action labels should be:

- Clear and predictable: merchants should be able to anticipate what will
  happen when they click a page action. Never deceive merchants by mislabeling an action.

- Action-led: they should always lead with a strong verb that encourages
  action. To provide enough context to merchants, use the {verb}+{noun} format.

<!-- usagelist -->

#### Do

- Create order
- View in Postmates

#### Don’t

- Create
- Postmates deliveries

<!-- end -->

- Short: for secondary actions, when the noun represents the same object as the page itself, a verb alone may be used. If there is ambiguity (such as with the verb “Cancel”), always use the {verb}+{noun} format.

  In the context of the orders list page:

<!-- usagelist -->

#### Do

- Import
- Export

#### Don’t

- Import orders
- Export orders

<!-- end -->

- Scannable: avoid unnecessary words and articles such as the, an, or a.

<!-- usageblock -->

#### Do

Add menu item

#### Don’t

Add a menu item

<!-- end -->

---

## Related components

- To lay out the content within a page, use the [layout component](https://polaris.shopify.com/components/structure/layout)
- To add pagination within the context of a list or other page content, use the [pagination component](https://polaris.shopify.com/components/navigation/pagination)
- To add primary and secondary calls to action at the bottom of a page, see the [page actions component](https://polaris.shopify.com/components/structure/page-actions)
