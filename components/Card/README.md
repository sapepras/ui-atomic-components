| attr        | type         | desc                                                           |
| ----------- | ------------ | -------------------------------------------------------------- |
| imageWide   | boolean      | stretches the image to take up maximum header room, no padding |
| image       | string       | url pointing to image to be rendered in top of card            |
| title       | string       | title text of card                                             |
| header      | string       | alt text to be displayed on image hover                        |
| description | string       | text describing item                                           |
| rating      | number (0-5) | number of stars to show as colored for rating view             |
| price       | string       | price to be shown at bottom of card                            |

```jsx
<Card
  title="some card"
  header="alt image txt"
  description="this describes the item."
  rating={4}
  price="79.99"
  image="https://www.screenaustralia.gov.au/sacms/media/samedialibrary/screenguide/titles/tid33797-mountain/tid33797-web/tid33797-mountain-001-hero.jpg"
/>
```
