---
name: Contextual save bar
category: Forms
keywords:
  - form
  - forms
  - action
  - actions
  - save
  - cancel
  - logo
examples:
  - fileName: contextual-save-bar-default.tsx
    title: Default contextual save bar
    description: >-
      Use the save action to provide an opportunity to save changes. Use the
      discard action to allow merchants the option to discard their changes. Use the message to provide helpful context on the nature of those changes.
  - fileName: contextual-save-bar-during-creation.tsx
    title: Contextual save bar during creation
    description: >-
      Use the save action to provide an opportunity to save a newly-created
      resource. Use the discard action to allow merchants the option to discard a new resource. Use the message to provide helpful context on the nature of the new resource.
  - fileName: contextual-save-bar-with-flush-contents.tsx
    title: Contextual save bar with flush contents
    description: >-
      Use the alignContentFlush flag when you want to omit the logo from the
      contextual save bar and repurpose that space to extend the message contents fully to the left side
      of the container.
  - fileName: contextual-save-bar-full-width.tsx
    title: Contextual save bar full width
    description: >-
      Use the fullWidth flag when you want to remove the default max-width set on the contextual save bar.
---

# Contextual Save Bar

The contextual save bar tells merchants their options once they have made changes to a form on the page. This component is also shown while creating a new object like a product or customer. Merchants can use this component to save or discard their work.

---

## Required components

The contextual save bar component must be wrapped in the [frame](https://polaris.shopify.com/components/structure/frame) component.

---

## Best practices

The contextual save bar component should:

- Become visible when a form on the page has unsaved changes
- Be used to save or discard in-progress changes
- Provide brief and helpful context on the nature of in-progress changes
- Save all changes on the page. Avoid scenarios where multiple forms on a single page can be edited at the same time. If specific sections of a page need to be independently editable, use an Edit button to launch a [modal dialog](https://polaris.shopify.com/components/overlays/modal) for each section where changes can be made and saved.

---

## Content guidelines

Messages in the contextual save bar component should be informative, clear, and concise. They should follow the {adjective}+{noun} pattern. Don’t use full sentences.

The standard message content is

- “Unsaved changes” when editing existing content
- “Unsaved {resource name}” when creating a new object

<!-- usagelist -->

#### Do

- Unsaved changes
- Unsaved product

#### Don’t

- You have unsaved changes
- Red and white striped shirt not yet saved

<!-- end -->

Actions in the contextual save bar component should consist of a strong verb that encourages action. They should not include a noun.

<!-- usagelist -->

#### Do

- Save
- Discard

#### Don’t

- Save changes
- Discard changes

<!-- end -->

---

## Related components

- To wrap your entire application, [use the frame component](https://polaris.shopify.com/components/structure/frame)
- To build the outer wrapper of a page, including page title and associated actions, [use the page component](https://polaris.shopify.com/components/structure/page)
- To wrap form elements and handle the submission of a form, [use the form component](https://polaris.shopify.com/components/forms/form)
