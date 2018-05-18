| attr         | type         | desc                                                            |
| ------------ | ------------ | --------------------------------------------------------------- |
| title        | string       | title text of card                                              |
| description  | string       | text describing item                                            |
| imageURL     | string       | url pointing to image to be rendered in top of card             |
| imageAltText | string       | Specifies an alternate text for the image.                      |
| imageWide    | boolean      | stretches the image to take up maximum header room, no padding  |
| imageSmall   | boolean      | adds extra padding around the image                             |
| rating       | number (0-5) | number of stars to show as colored for rating view              |
| price        | string       | price to be shown at bottom of card                             |
| badge        | string       | Exact implementation being determined                           |
| product      | object       | product json object as returned by api - details in below table |

<hr/>

| product properties          | Maps to attr | type   | desc                                                |
| --------------------------- | ------------ | ------ | --------------------------------------------------- |
| product                     |              | object | product json object as returned by api              |
| product.manufacturer        | title        | string | text describing item                                |
| product.name                | description  | string | text describing item                                |
| product.imageURL            | imageURL     | string | url pointing to image to be rendered in top of card |
| product.imageAltDescription | imageAltText | string | Specifies an alternate text for the image.          |

<sub>
Notes: You can pass a product object via the product attribute and the card will build itself. You can also pass overriding values via attributes
</sub>

<br><br><br>

```jsx
{
  window.someProd = {
    name:
      "this is a long description this is a long description this is a long description this is a long description this is a long description",
    id: "10001",
    parentCategoryId: "10001",
    manufacturer: "Nike",
    title: "Shoes",
    itemId: "partNumber",
    imageAltDescription: "TEST ALT IMAGE",
    adbug: ["Standard"],
    defaultSkuPrice: {
      minPriceRange: "$ 14.98",
      maxPriceRange: "$ 22.5",
      priceMessage: "$14.98-$22.5",
      salePrice: "$ 22.5",
      listPrice: "$ 23",
      priceRange: "$ 14.98-$ 22.5"
    },
  };

  window.callFor = {
    ...window.someProd,
    manufacturer: "CallFor",
    adbug: ["CallFor"],
  }

  window.clearance = {
    ...window.someProd,
    manufacturer: "Clearance",
    adbug: ["Clearance"],
  }

  window.clearanceRange = {
    ...window.someProd,
    manufacturer: "ClearanceRange",
    adbug: ["ClearanceRange"],
  }

  window.priceDrop = {
    ...window.someProd,
    manufacturer: "PriceDrop",
    adbug: ["PriceDrop"],
  }

  window.hotDeal = {
    ...window.someProd,
    manufacturer: "HotDeal",
    adbug: ["HotDeal"],
  }

  window.isInCartPlusCompare = {
    ...window.someProd,
    manufacturer: "IsInCartPlusCompare",
    adbug: ["IsInCartPlusCompare"],
  }

  window.range = {
    ...window.someProd,
    manufacturer: "Range",
    adbug: ["Range"],
  }

  window.wasNow = {
    ...window.someProd,
    manufacturer: "WasNow",
    adbug: ["WasNow"],
  }
}

<div style={{ display: "flex" , flexWrap: "wrap"}}>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.someProd}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.callFor}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.clearance}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.clearanceRange}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.priceDrop}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.hotDeal}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.isInCartPlusCompare}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.range}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.wasNow}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
    />
  </div>
</div>;
```
