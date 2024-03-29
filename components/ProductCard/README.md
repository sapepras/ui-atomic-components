### Note

You can pass a product object via the product attribute and the card will build itself. You can also pass overriding values via attributes

<br/>

### Attributes

| attr | type                 | default | desc    |                                                                                                                |
|------|----------------------|---------|---------|----------------------------------------------------------------------------------------------------------------|
| [x]  | cardType             | string  | default | Determines multiplier for responsive design: default, carousel, collection, grid, gridNarrow                   |
| [x]  | title                | string  |         | title text of card                                                                                             |
| [x]  | titleMaxCC           | integer | 25      | Any characters passing MaxCC will be truncated and replaced with an ellipses ...                               |
| [x]  | description          | string  |         | text describing item                                                                                           |
| [x]  | descriptionMaxCC     | integer | 40      | Any characters passing MaxCC will be truncated and replaced with an ellipses ...                               |
| [x]  | image                | string  |         | url pointing to image to be rendered in top of card                                                            |
| [x]  | imageAltText         | string  |         | Specifies an alternate text for the image.                                                                     |
| [x]  | imageWide            | boolean | false   | stretches the image to take up maximum header room, no padding                                                 |
| [x]  | imageSmall           | boolean | false   | adds extra padding around the image                                                                            |
| [x]  | rating               | float   |         | number of stars to show as colored for rating view                                                             |
| [ ]  | badge                | string  |         | Exact implementation being determined                                                                          |
| [x]  | overrideCardHeightPx | float   |         | Expected value in pixels. When screen is 1200px card height will be overrideCardHeightPx and scale accordingly |
| [x]  | overrideCardWidthPx  | float   |         | Expected value in pixels. When screen is 1200px card width will be overrideCardWidthPx and scale accordingly   |
| [x]  | priceObject          | object  |         | Exact implementation being determined                                                                          |
| [x]  | product              | object  |         | product json object as returned by api - details in below table                                                |

<br/>

### product schema

| product properties      | Maps to attr                         | type                     | desc                                   |                                                                   |
|-------------------------|--------------------------------------|--------------------------|----------------------------------------|-------------------------------------------------------------------|
| product                 |                                      | object                   | product json object as returned by api |                                                                   |
| [x]                     | product.manufacturer                 | title                    | string                                 | text describing item                                              |
| [x]                     | product.name                         | description              | string                                 | text describing item                                              |
| [x]                     | product.imageURL                     | image                    | string                                 | url pointing to image to be rendered in top of card               |
| [x]                     | product.imageAltDescription          | imageAltText             | string                                 | Specifies an alternate text for the image.                        |
| [ ]                     | product.bvRating                     | rating                   | string                                 | Partially implemented.                                            |
| [ ]                     | product.adBug                        | badge                    | array of string                        | Partially implemented.                                            |
| [x]                     | product.promoMessage                 | priceObject.promoMessage | string                                 |                                                                   |
| [x]                     | product.priceRange                   | priceObject.priceRange   | string                                 |                                                                   |
| product.defaultSkuPrice |                                      | object                   |                                        |                                                                   |
| [x]                     | product.defaultSkuPrice.priceMessage | priceObject.priceMessage | string                                 | contains misclaneious text data for a variety of price variations |
| [x]                     | product.defaultSkuPrice.salePrice    | priceObject.salePrice    | string                                 |                                                                   |
| [x]                     | product.defaultSkuPrice.listPrice    | priceObject.listPrice    | string                                 |                                                                   |

<br/>

### priceObject schema

| priceObject properties | type                     | default val | desc | price variations used in |     |
|------------------------|--------------------------|-------------|------|--------------------------|-----|
| [x]                    | priceObject              | object      |      |                          |     |
| [x]                    | priceObject.promoMessage | string      |      |                          |     |
| [x]                    | priceObject.priceRange   | string      |      |                          |     |
| [x]                    | priceObject.priceMessage | string      |      |                          |     |
| [x]                    | priceObject.salePrice    | string      |      |                          |     |
| [x]                    | priceObject.listPrice    | string      |      |                          |     |

<br/>

### adBug values

| potential string values | desc              |                         |
|-------------------------|-------------------|-------------------------|
| [x]                     | Standard          | default price variation |
| [x]                     | Clearance         |                         |
| [x]                     | ClearanceRange    |                         |
| [x]                     | InCartPlusCompare |                         |
| [x]                     | WasNow            |                         |
| [x]                     | PriceDrop         |                         |
| [x]                     | HotDeal           |                         |
| [x]                     | Range             |                         |
| [x]                     | CallFor           |                         |

### priceMessage keys

| potential string values | Variation                | Message                 |                           |
|-------------------------|--------------------------|-------------------------|---------------------------|
| [x]                     | Regular                  | default price variation |                           |
| [ ]                     | Clearance                |                         |                           |
| [ ]                     | ClearanceRange           |                         |                           |
| [x]                     | priceInCart              | InCartPlusCompare       |                           |
| [ ]                     | wasNowPrice              | WasNow                  |                           |
| [ ]                     | PriceDrop                |                         |                           |
| [ ]                     | HotDeal                  |                         |                           |
| [ ]                     | Range                    |                         |                           |
| [x]                     | specialPrice             | CallFr                  |                           |
| [x]                     | clearanceStylesAvailable |                         | Clearnce Styles Available |

### price variation logic

| PriceType | priceMessage key  | conditional rquirements |                                                                                                                                      |
|-----------|-------------------|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| [ ]       | clearance         |                         | (adBugKeys.length > 0 && messageContains(adBugKeys.join(","), AdBugTypes.clearance) && isStandard(priceObject))                      |
| [ ]       | clearanceRange    |                         | (adBugKeys.length > 0 && messageContains(adBugKeys.join(","), AdBugTypes.clearance) && isRange(priceObject))                         |
| [ ]       | inCartPlusCompare | priceInCart             | (!isEmpty(priceTypeKeys) && messageContains(priceTypeKeys, PriceTypes.inCartPlusCompare) && !isEmptyPrice(listPrice))                |
| [ ]       | callFor           | specialPrice            | (!isEmpty(priceTypeKeys) && messageContains(priceTypeKeys, PriceTypes.callFor))                                                      |
| [ ]       | drop              |                         | (adBugKeys.length > 0 && messageContains(adBugKeys.join(","), AdBugTypes.pricedrop) && isWasNow(priceObject))                        |
| [ ]       | hotDeal           |                         | (adBugKeys.length > 0 && messageContains(adBugKeys.join(","), AdBugTypes.hotDeal) && isWasNow(priceObject))                          |
| [ ]       | wasNow            | wasNowPrice             | (isEmpty(priceMessage) && !isEmptyPrice(listPrice) && !isEmptyPrice(salePrice) && priceToFloat(salePrice) < priceToFloat(listPrice)) |
| [ ]       | range             |                         | !isEmptyPrice(priceRange)                                                                                                            |
| [ ]       | standard          |                         | (!isEmptyPrice(salePrice) OR !isEmptyPrice(listPrice))                                                                               |

<br><br><br>

##### Todo

* Modify Responsive Behavior for 3 different view types: ShopCollection, ProductGrid, ProductCarousel
* colorCount - needs initial implementation and review

##### Needs to be reviewed, documented, or modified

* price variations
* badge

* auid
* adBug
* proptypes
* unit testing

<br><br><br>

```jsx
{
  window.someProd = {
    name:
      "Sed ut perspiciatis unde omnis este natus error sit volupt accusantiu laudantium cusantiu",
    id: "10001",
    parentCategoryId: "10001",
    manufacturer: "Wenzel",
    colorCount: 2,
    title: "Shoes",
    itemId: "partNumber",
    imageAltDescription: "TEST ALT IMAGE",
    seoURL: "http://www.google.com",
    adBug: [],
    defaultSkuPrice: {
      priceMessage: "standard messaging",
      listPrice: "$ 99.99"
    }
  };

  window.callFor = {
    ...window.someProd,
    colorCount: "3",
    manufacturer: "CallFor",
    adBug: [],
    colorCount: "3",
    defaultSkuPrice: {
      priceMessage: "Call for Pricing"
    }
  };

  window.clearance = {
    ...window.someProd,
    manufacturer: "Clearance",
    adBug: ["Clearance"],
    colorCount: "2",
    defaultSkuPrice: {
      salePrice: "$ 10",
      listPrice: "$ 23"
    }
  };

  window.clearanceRange = {
    ...window.someProd,
    manufacturer: "New Balance",
    adBug: ["clearance"],
    colorCount: "4",
    defaultSkuPrice: {
      priceMessage: "some clearance range messaging"
    },
    priceRange: "$ 9.99 -$ 99.99"
  };

  window.priceDrop = {
    ...window.someProd,
    manufacturer: "PriceDrop",
    adBug: ["Price Drop"],
    colorCount: "1",
    defaultSkuPrice: {
      salePrice: "$ 22.5",
      listPrice: "$ 23",
      savings: "20%",
    }
  };

  window.hotDeal = {
    ...window.someProd,
    manufacturer: "HotDeal",
    adBug: ["Hot Deal"],
    defaultSkuPrice: {
      salePrice: "$ 22.5",
      listPrice: "$ 23",
      savings: "10%"
    }
  };

  window.inCartPlusCompare = {
    ...window.someProd,
    manufacturer: "InCartPlusCompare",
    adBug: [],
    defaultSkuPrice: {
      priceMessage: "Our Price in cart",
      listPrice: "40"
    }
  };

  window.range = {
    ...window.someProd,
    manufacturer: "Range",
    adBug: [],
    defaultSkuPrice: {
      priceMessage: "some range messaging"
    },
    priceRange: "$ 14.98-$ 99.5"
  };

  window.wasNow = {
    ...window.someProd,
    manufacturer: "WasNow",
    adBug: [],
    defaultSkuPrice: {
      salePrice: "$ 22.5",
      listPrice: "$ 23",
      savings: "30%",
      priceMessage: "wasNowPrice"
    }
  };

  window.soloSalePrice = {
    ...window.someProd,
    ...(ProductCard.failedOneJson || {})
  };

  window.failedClearance = {
    ...window.someProd,
    ...(ProductCard.failedTwoJson || {})
  };

  window.failedColorCount = {
    ...window.someProd,
    ...(ProductCard.failedThreeJson || {})
  };

  window.forceCardType = "hold240";
}

<div style={{ display: "flex", flexWrap: "wrap" }}>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard      
      imageSmall
      enableQuickView
      product={window.someProd}
      rating={5}
      price={"12.99"}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.callFor}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.clearance}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.clearanceRange}
      rating={4}
      price={"12.99"}
      imageURL="//assets.academy.com/mgen/51/10353151.jpg"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.priceDrop}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.hotDeal}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.inCartPlusCompare}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.range}
      rating={4}
      price={"12.99"}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.wasNow}
      rating={4}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.soloSalePrice}
      rating={4}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.failedClearance}
      rating={4}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
  <div style={{ flex: "1 1 auto", margin: "10px" }}>
    <ProductCard
      horizontalMobile
      imageSmall
      enableQuickView
      product={window.failedColorCount}
      rating={4}
      ctaLink="http://www.google.com"
      cardType={window.forceCardType}
    />
  </div>
</div>;
```
