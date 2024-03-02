import React from "react";
//import "../Sass/HomeComponent.scss";
import PostStatus from "./common/Posts";
import PropTypes from 'prop-types';

HomeComponent.propTypes = {
   currentUser: PropTypes.object,
};

export default function HomeComponent({ currentUser }) {
   return (
      <div className="home-component">
         <PostStatus currentUser={currentUser} />
      </div>
   );
}