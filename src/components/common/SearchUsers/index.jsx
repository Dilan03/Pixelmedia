import React from "react";
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from "react-icons/ai";
//import "./index.scss";
SearchUsers.propTypes = {
   setIsSearch: PropTypes.any,
   setSearchInput: PropTypes.any,
};

export default function SearchUsers({ setIsSearch, setSearchInput }) {
   return (
      <div className="search-users">
         <input
            placeholder="Search Users.."
            onChange={(event) => setSearchInput(event.target.value)}
         />

         <AiOutlineCloseCircle
            className="close-icon"
            size={20}
            onClick={() => {
               setIsSearch(false);
               setSearchInput("");
            }}
         />
      </div>
   );
}