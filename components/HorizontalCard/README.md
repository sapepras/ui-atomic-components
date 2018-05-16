| attr         | type         | desc                                                           |
| ------------ | ------------ | -------------------------------------------------------------- |
| title        | string       | title text of card                                             |
| description  | string       | text describing item                                           |
| image        | string       | url pointing to image to be rendered in top of card            |
| imageAltText | string       | alt text to be displayed on image hover                        |
| rating       | number (0-5) | number of stars to show as colored for rating view             |
| price        | string       | price to be shown at bottom of card                            |

```jsx
<div style={{}}>
  <HorizontalCard
    title="some card"
    description="this describes the item."
    image="https://www.screenaustralia.gov.au/sacms/media/samedialibrary/screenguide/titles/tid33797-mountain/tid33797-web/tid33797-mountain-001-hero.jpg"
    imageAltText="alt image txt"
    rating={4}
    price="79.99"
    badge="new"
  />
</div>
```
