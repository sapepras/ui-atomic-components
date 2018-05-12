import PropTypes from "prop-types";
import React from "react";
import * as css from "./css";

import Rating from "../Rating";
import Price from "../Price";

const Card = props => {
  // document.getElementsByClassName("rsg--sidebar-4")[0].style.cssText = "display: none! important";
  // document.getElementsByClassName("rsg--hasSidebar-2")[0].style.cssText = "padding-left: 0";

  const { image, title, heading, description, rating, price } = props; // eslint-disable-line
  return (
    <div className={css.card}>
      <div className={css.header}>
        {!!image && <img src={image} alt={heading} className={css.image} />}
      </div>
      <div className={css.body}>
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <div className={css.description}>{description}</div>
          {!!rating && (
            <div className={css.contentFooter}>
              <Rating value={rating} />
            </div>
          )}
        </div>
      </div>
      <div className={css.footer}>
        <div className={css.contentPaddingLR}>
          <div className={css.divider} />
          <div className={css.price}>{!!price && <Price price={price} />}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  price: PropTypes.string
};

export default Card;
