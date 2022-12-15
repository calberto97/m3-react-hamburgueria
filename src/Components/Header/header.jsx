import React from "react";
import StyledHeader from "./style";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";

const Header = ({
  setInputValue,
  filteredProducts,
  showProducts,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    showProducts();
  };

  return (
    <StyledHeader>
      <div className="container">
        <h2>
          Burguer<small> Kenzie</small>
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              maxLength="20"
              required
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="button-green-small">
              <FaSearch />
            </button>
          </form>
          <span>
            <small>
              <p>0</p>
              <FaShoppingCart />
            </small>
            <IoIosExit />
          </span>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
