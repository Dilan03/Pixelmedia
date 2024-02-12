import React from "react";
import PropTypes from 'prop-types';

Button.propTypes = {
   onClick: PropTypes.func,
   title: PropTypes.string
};

export default function Button(props) {
   return (
      <button className="" onClick={props.onClick}>
         {props.title}
      </button>
   );
}