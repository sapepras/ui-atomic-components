```jsx
<PriceDetails listPrice="12.29" salePrice="5.99" priceMessage=""/>
<hr/>
<PriceDetails listPrice="12.29"/>
<hr/>
<PriceDetails listPrice="12.29" salePrice="5.99" savings="21%" priceMessage="wasNowPrice" />
<hr/>
<PriceDetails priceRange="13.50-45.99"/>
<hr/>
<PriceDetails priceRange="13.50-45.99" adBugKeys={['clearance']}/>
<hr/>
<PriceDetails listPrice="22.35" priceTypeKeys={'priceincart'}/>
<hr/>
<PriceDetails priceTypeKeys={'specialprice'}/>
```
##For EndPoint: /api/productinfo?productIds={p1,p2,p3}
<PriceDetails productSchema="productInfo" product={productItem} />