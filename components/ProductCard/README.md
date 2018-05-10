| attr            | type   | desc                                   |
| --------------- | ------ | -------------------------------------- |
| product         | object | product json object as returned by api |
| ...More to come |        |                                        |

<sub>
Notes: Only the product attribute is working, more to attributes to come. You can pass a product object via the product attribute and the card will build itself. You can also pass overriding values via attributes
</sub>

<br><br><br>

```jsx
{
  window.prodObj = {
    title: "this is coming from a var!!!",
    shortDescription: "this is a short description",
    rating: 4,
    price: 34.999,
    imageUrl:
      "https://www.screenaustralia.gov.au/sacms/media/samedialibrary/screenguide/titles/tid33797-mountain/tid33797-web/tid33797-mountain-001-hero.jpg"
  };
}

<ProductCard product={prodObj} />;
```
