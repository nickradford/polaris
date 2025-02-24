---
name: Pagination
category: Navigation
platforms:
  - android
  - ios
  - web
keywords:
  - lists
  - detail
  - page
  - label
  - pager
  - previous
  - next
  - navigation between pages
  - page arrows
  - list navigation
  - list arrows
  - list pagination
  - list pages
  - previous next buttons
  - previous buttons
  - next buttons
  - ios
  - android
examples:
  - fileName: pagination-default.tsx
    title: Default pagination
    description: Use for pagination at the bottom of lists.
  - fileName: pagination-with-keyboard-navigation.tsx
    title: Pagination with keyboard navigation
    description: Attach standard keyboard shortcuts to important pagination controls.
  - fileName: pagination-with-label.tsx
    title: Pagination with label
    description: >-
      Add a label between navigation buttons to provide more context of the
      content being viewed by the user.
  - fileName: pagination-infinite-scroll.tsx
    title: Infinite scroll
    description: >-
      Use for lists longer than 25 items. In mobile apps it’s natural to scroll
      to the bottom of the screen to load more items.
---

# Pagination

Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling.

---

## Best practices

On all platforms, pagination should:

- Only be used for lists with more than 25 items

Web pagination should:

- Be placed at the bottom of a long list that has been split up into pages
- Pagination should navigate to the previous and next set of items in the paged list
- Hint when merchants are at the first or the last page by disabling the corresponding button

iOS and Android pagination should:

- Start loading items when merchants are close to the bottom, roughly 5 items from the end
- Show [a spinner](https://polaris.shopify.com/components/feedback-indicators/spinner) below the list to indicate that items have been requested

---

## Related components

- To see how pagination is used on a page, see the [page component](https://polaris.shopify.com/components/structure/page)
- To add primary and secondary calls to action at the bottom of a page, see the [page actions component](https://polaris.shopify.com/components/structure/page-actions)
- The [resource list component](https://polaris.shopify.com/components/lists-and-tables/resource-list) is often combined with pagination to handle long lists of resources such as orders or customers
- To create stand-alone navigational links or calls to action, use the [button component](https://polaris.shopify.com/components/actions/button)
- To embed actions or pathways to more information within a sentence, use the [link component](https://polaris.shopify.com/components/navigation/link)
