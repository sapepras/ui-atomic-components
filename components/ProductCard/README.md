### Attributes

|     | attr                 | type    | default | desc                                                                                                           |
| --- | -------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| [x] | title                | string  |         | title text of card                                                                                             |
| [x] | titleMaxCC           | integer | 25      | Any characters passing MaxCC will be truncated and replaced with an ellipses ...                               |
| [x] | description          | string  |         | text describing item                                                                                           |
| [x] | descriptionMaxCC     | integer | 40      | Any characters passing MaxCC will be truncated and replaced with an ellipses ...                               |
| [x] | image                | string  |         | url pointing to image to be rendered in top of card                                                            |
| [x] | imageAltText         | string  |         | Specifies an alternate text for the image.                                                                     |
| [x] | imageWide            | boolean | false   | stretches the image to take up maximum header room, no padding                                                 |
| [x] | imageSmall           | boolean | false   | adds extra padding around the image                                                                            |
| [x] | rating               | float   |         | number of stars to show as colored for rating view                                                             |
| [ ] | badge                | string  |         | Exact implementation being determined                                                                          |
| [x] | overrideCardHeightPx | float   |         | Expected value in pixels. When screen is 1200px card height will be overrideCardHeightPx and scale accordingly |
| [x] | priceObject          | object  |         | Exact implementation being determined                                                                          |
| [x] | product              | object  |         | product json object as returned by api - details in below table                                                |

<br/>

### product schema

|     | product properties          | Maps to attr | type   | desc                                                |
| --- | --------------------------- | ------------ | ------ | --------------------------------------------------- |
| [x] | product                     |              | object | product json object as returned by api              |
| [x] | product.manufacturer        | title        | string | text describing item                                |
| [x] | product.name                | description  | string | text describing item                                |
| [x] | product.imageURL            | image        | string | url pointing to image to be rendered in top of card |
| [x] | product.imageAltDescription | imageAltText | string | Specifies an alternate text for the image.          |

<br/>

### priceObject schema

|     | priceObject properties    | type   | default val | desc | price variations used in |
| --- | ------------------------- | ------ | ----------- | ---- | ------------------------ |
| [x] | priceObject               | object |             |      |                          |
| [x] | priceObject.minPriceRange | string |             |      |                          |
| [x] | priceObject.maxPriceRange | string |             |      |                          |
| [x] | priceObject.priceMessage  | string |             |      |                          |
| [x] | priceObject.salePrice     | string |             |      |                          |
| [x] | priceObject.listPrice     | string |             |      |                          |
| [x] | priceObject.priceRange    | string |             |      |                          |

<sub>
Notes: You can pass a product object via the product attribute and the card will build itself. You can also pass overriding values via attributes
</sub>

Vertical Card Props
priceObject,
badge,
auid,

Horizontal Card Props
priceObject,
badge,
auid,
hideOnDesktop

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
