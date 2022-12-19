import React, { useContext, useState } from "react";
import StyledHeader from "./style";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { ProductContext } from "../../Context/ProductContext";
import { CartContext } from "../../Context/CartContext";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Cart from "../Cart";

const Header = () => {
  const {
    navigate,
    setSearchText,
    setInputValue,
    inputValue,
    showProducts,
  } = useContext(ProductContext);

  const { currentSale, setCurrentSale, setOpenModal, openModal } =
    useContext(CartContext);
  const [showHeader, setShowHeader] = useState(true);

  const handleSubmit = (event: any) => {
    if (!showHeader) {
      setShowHeader(!showHeader);
    }
    setSearchText(inputValue);
    event.preventDefault();
    showProducts();
  };

  const handleExit = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxWidth: "95%",
    maxHeight: "95%",
    boxShadow: 24,
    outline: 0,
  };

  return (
    <StyledHeader>
      <div className="container">
        {showHeader ? (
          <>
            <h2>
              Burguer<small> Kenzie</small>
            </h2>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Digitar Pesquisa"
                  maxLength={20}
                  required
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="button-green-small">
                  <FaSearch />
                </button>
              </form>
              <span>
                <FaSearch
                  onClick={() => setShowHeader(!showHeader)}
                />
                <small onClick={() => setOpenModal(!openModal)}>
                  <p>{currentSale ? currentSale.length : 0}</p>
                  <FaShoppingCart />
                </small>
                <BiExit onClick={handleExit} />
              </span>
            </div>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="show">
              <input
                type="text"
                placeholder="Digitar Pesquisa"
                maxLength={20}
                required
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className="button-green-small">
                <FaSearch />
              </button>
            </form>
          </>
        )}
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </Box>
      </Modal>
    </StyledHeader>
  );
};

export default Header;
