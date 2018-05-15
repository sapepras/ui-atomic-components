| attr             | type         | desc                                                                            |
| ---------------- | ------------ | ------------------------------------------------------------------------------- |
| imageWide        | boolean      | stretches the image to take up maximum header room, no padding                  |
| imageSmall       | boolean      | adds extra padding around the image                                             |
| imageUrl         | string       | url pointing to image to be rendered in top of card                             |
| title            | string       | title text of card                                                              |
| header           | string       | alt text to be displayed on image hover                                         |
| shortDescription | string       | text describing item                                                            |
| longDescription  | string       | text describing item (is only used if shortDescription is null or empty string) |
| rating           | number (0-5) | number of stars to show as colored for rating view                              |
| price            | string       | price to be shown at bottom of card                                             |
| product          | object       | product json object as returned by api - details in below table                 |

| product properties       | type   | desc                                                                            |
| ------------------------ | ------ | ------------------------------------------------------------------------------- |
| product                  | object | product json object as returned by api                                          |
| product.title            | string | title text of card                                                              |
| product.imageUrl         | string | url pointing to image to be rendered in top of card                             |
| product.shortDescription | string | text describing item                                                            |
| product.longDescription  | string | text describing item (is only used if shortDescription is null or empty string) |

<sub>
Notes: You can pass a product object via the product attribute and the card will build itself. You can also pass overriding values via attributes
</sub>

<br><br><br>

```jsx
{
  window.someProd = {
    name: "Shoes",
    id: "10001",
    parentCategoryId: "10001",
    shortDescription: "this is a short description",
    longDescription:
      "this is a long description this is a long description this is a long description this is a long description this is a long description ",
    sellable: "true",
    manufacturer: "Nike",
    productVariant: "Regular",
    productSpecification: "TEST PRODUCT SPEC",
    promotionalMessage: "Free shipping product",
    metaKeywords: "TEST,TEST1",
    metaDescription: "Meta desription",
    title: "Shoes",
    defaultSku: "SKU001",
    isSingleSkuProduct: "false",
    itemId: "partNumber",
    seoName: "seo-name",
    imageURL:
      "https://www.screenaustralia.gov.au/sacms/media/samedialibrary/screenguide/titles/tid33797-mountain/tid33797-web/tid33797-mountain-001-hero.jpg",
    imageAltDescription: "TEST ALT IMAGE",
    storeId: "10051",
    priceRange: "$5 to $10",
    priceAdFeature: "Clearance",
    skus: [
      {
        sku: "sku1001",
        itemId: "ItemId",
        priceAdFeature: "clearance",
        listPrice: "100.00",
        salePrice: "120.00",
        image_URL: "10001",
        attributes: [
          {
            key: "color",
            value: "RED"
          }
        ]
      }
    ]
  };
}

<div style={{}}>
  <ProductCard product={window.someProd} rating={4} price={"39.99"} />
</div>;
```
