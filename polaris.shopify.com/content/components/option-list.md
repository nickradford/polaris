---
name: Option list
category: Lists and tables
keywords:
  - option list
  - choices
  - decision
  - list
  - list of tags
  - list of collections
  - collections lists
  - collection lists
  - list selection
examples:
  - fileName: option-list-simple.tsx
    title: Simple option list
    description: >-
      Use for a group of similar selectable items when only one should be
      selectable at once.
  - fileName: option-list-multiple.tsx
    title: Multiple option list
    description: >-
      Use when you have a group of similar selectable items and more than one
      item can be selected at once.
  - fileName: option-list-with-sections.tsx
    title: Option list with sections
    description: Use sections when you have multiple groups of similar selectable items.
  - fileName: option-list-in-a-popover.tsx
    title: Option list in a popover
    description: Use when a set of selections won’t fit in the available screen space.
---

# Option list

The option list component lets you create a list of grouped items that
merchants can pick from. This can include single selection or multiple selection
of options. Option list usually appears in a popover, and sometimes in a modal
or a sidebar. Option lists are styled differently than
[choice lists](https://polaris.shopify.com/components/forms/choice-list) and should not be used within a form, but as a standalone menu.

---

## Best practices

The option list component should:

- Be placed on its own inside a container. Usually the container behaves like a
  menu, as it does with [popover](https://polaris.shopify.com/components/overlays/popover). Don’t
  place other components within the same container.
- Not be used when a [select component](https://polaris.shopify.com/components/forms/select) will do.

---

## Content guidelines

### Option lists

Each item in an option list should be clear and descriptive.

<!-- usagelist -->

#### Do

- Traffic referrer source

#### Don’t

- Source

<!-- end -->

---

## Related components

- To render a list of actions,
  [use the action list component](https://polaris.shopify.com/components/actions/action-list)
- To create a list of grouped radio buttons or checkboxes,
  [use the choice list component](https://polaris.shopify.com/components/forms/choice-list)
- For a basic version of option list as a single choice menu,
  [use the select component](https://polaris.shopify.com/components/forms/select)

---

## Accessibility

<!-- content-for: android -->

See Material Design and development documentation about accessibility for Android:

- [Accessible design on Android](https://material.io/design/usability/accessibility.html)
- [Accessible development on Android](https://developer.android.com/guide/topics/ui/accessibility/)

<!-- /content-for -->

<!-- content-for: ios -->

See Apple’s Human Interface Guidelines and API documentation about accessibility for iOS:

- [Accessible design on iOS](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessibility/)
- [Accessible development on iOS](https://developer.apple.com/accessibility/ios/)

<!-- /content-for -->

<!-- content-for: web -->

Items in an option list are organized as list items (`<li>`) in an unordered list (`<ul>`) and are conveyed as a group of related elements to assistive technology users.

Controls in simple option lists are [buttons](https://polaris.shopify.com/components/actions/button), and controls in multiple option lists are [checkboxes](https://polaris.shopify.com/components/forms/checkbox).

If you customize the option list, you can provide ARIA roles that fit the context. These roles must be valid according to the [W3C ARIA specification](https://www.w3.org/TR/wai-aria-1.1/) to be conveyed correctly to screen reader users.

- The `role` prop adds an ARIA role to the option list wrapper
- The `optionRole` prop adds an ARIA role to the option list items

<!-- /content-for -->
