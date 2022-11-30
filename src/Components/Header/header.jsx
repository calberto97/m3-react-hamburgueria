import React from "react";
import StyledHeader from "./style";

const Header = ({
  setInputValue,
  filteredProducts,
  showProducts
}) => {


  const handleSubmit = (event) => {
    event.preventDefault();
    showProducts();
  }

  return (
    <StyledHeader>
      <div className="container">
        <h2>
          Burguer<small> Kenzie</small>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            maxLength='20'
            required
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="button-green-small">Pesquisar</button>
        </form>
      </div>
    </StyledHeader>
  );
};

export default Header;
