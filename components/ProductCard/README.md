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
    manufacturer: "Under Armour",
    title: "Shoes",
    itemId: "partNumber",
    imageAltDescription: "TEST ALT IMAGE",
    adbug: ["Standard"],
    defaultSkuPrice: {
      priceMessage: "standard messaging",
      listPrice: "$ 23"
    }
  };

  window.callFor = {
    ...window.someProd,
    manufacturer: "CallFor",
    adbug: ["CallFor"],
    defaultSkuPrice: {
      priceMessage: "(800)876-1492"
    }
  };

  window.clearance = {
    ...window.someProd,
    manufacturer: "Clearance",
    adbug: ["Clearance"],
    defaultSkuPrice: {
      salePrice: "$ 10",
      listPrice: "$ 23",
      priceMessage: "some clearance messaging"
    }
  };

  window.clearanceRange = {
    ...window.someProd,
    manufacturer: "ClearanceRange",
    adbug: ["ClearanceRange"],
    defaultSkuPrice: {
      minPriceRange: "$ 14.98",
      maxPriceRange: "$ 22.5",
      priceMessage: "some clearance range messaging",
      priceRange: "$ 14.98-$ 22.5"
    }
  };

  window.priceDrop = {
    ...window.someProd,
    manufacturer: "PriceDrop",
    adbug: ["PriceDrop"],
    defaultSkuPrice: {
      priceMessage: "pdrop msg",
      salePrice: "$ 22.5",
      listPrice: "$ 23"
    }
  };

  window.hotDeal = {
    ...window.someProd,
    manufacturer: "HotDeal",
    adbug: ["HotDeal"],
    defaultSkuPrice: {
      priceMessage: "hdeal msg",
      salePrice: "$ 22.5",
      listPrice: "$ 23"
    }
  };

  window.inCartPlusCompare = {
    ...window.someProd,
    manufacturer: "InCartPlusCompare",
    adbug: ["InCartPlusCompare"],
    defaultSkuPrice: {
      priceMessage: "compare at $xx.xx"
    }
  };

  window.range = {
    ...window.someProd,
    manufacturer: "Range",
    adbug: ["Range"],
    defaultSkuPrice: {
      minPriceRange: "$ 14.98",
      maxPriceRange: "$ 22.5",
      priceMessage: "some range messaging",
      priceRange: "$ 14.98-$ 22.5"
    }
  };

  window.wasNow = {
    ...window.someProd,
    manufacturer: "WasNow",
    adbug: ["WasNow"],
    defaultSkuPrice: {
      priceMessage: "wnow msg",
      salePrice: "$ 22.5",
      listPrice: "$ 23"
    }
  };
}

<div style={{ display: "flex", flexWrap: "wrap" }}>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      product={window.someProd}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
      overrideCardHeightPx={750}
      titleMaxCC={7}
      descriptionMaxCC={7}
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
      product={window.inCartPlusCompare}
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
