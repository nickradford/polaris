---
name: Tag
category: Forms
platforms:
  - android
  - ios
  - web
keywords:
  - indicator
  - label
  - label objects
  - organize objects
  - categorize objects
  - categories
  - keywords
examples:
  - fileName: tag-default.tsx
    title: Default tag
    description: Use to signify the attributes of an object.
  - fileName: tag-removable.tsx
    title: Removable tag
    description: Use to allow merchants to remove attributes from an object.
  - fileName: tag-clickable.tsx
    title: Clickable tag
    description: Use to allow merchants to add attributes to an object.
  - fileName: tag-with-link.tsx
    title: Tag with link
    description: >-
      Use to allow merchants to navigate to a resource. For example a customer
      segment or a smart collection
  - fileName: tag-with-custom-content.tsx
    title: Tag with custom content
    description: >-
      Use when a tag needs to be visually distinguished from others, like when
      it's added automatically.
  - fileName: tag-removable-with-link.tsx
    title: Removable tag with link
    description: >-
      A removable attribute to an object that allows merchants to navigate to a
      resource.
---

# Tag

Tags represent a set of interactive, merchant-supplied keywords that help label, organize, and categorize objects. Tags can be added or removed from an object by merchants.

---

## Best practices

Tags should:

- Be presented close to or within the input control that allows merchants to add and remove tags

---

## Related components

- To show the status of an object, [use the badge component](https://polaris.shopify.com/components/images-and-icons/badge)
- To add and remove tags, [use the text field component](https://polaris.shopify.com/components/forms/text-field)

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

### Labeling

The button to remove a tag is automatically given a label using `aria-label` so that screen reader users can distinguish which tag will be removed.

### Keyboard support

The control to remove a tag is implemented as a button with standard keyboard support.

- Give buttons keyboard focus with the <kbd>tab</kbd> key (or <kbd>shift</kbd> + <kbd>tab</kbd> when tabbing backwards)
- To activate a button, press the <kbd>enter</kbd>/<kbd>return</kbd> or <kbd>space</kbd> key

When a merchant uses the button to remove a tag, it is important to make sure that keyboard focus is managed. Moving focus to the next element in the page is recommended.

<!-- /content-for -->
