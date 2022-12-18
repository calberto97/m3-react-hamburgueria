import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavigateFunction, useNavigate } from "react-router-dom";
import API from "../../Services/api";

interface iChildren {
  children: React.ReactNode;
}

interface iExport {
  filteredProducts: iProduct[];
  setFilteredProducts: React.Dispatch<
    React.SetStateAction<iProduct[]>
  >;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  showProducts: () => void;
  products: iProduct[];
  notify: (text: string) => string;
  navigate: NavigateFunction;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const ProductContext = createContext({} as iExport);

export const ProductProvider = ({ children }: iChildren) => {
  const [products, setProducts] = useState<iProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<iProduct[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const notify = (text: string) =>
    toast(text, {
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    });

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      API.get('products', {
        headers: {
        authorization: `Bearer ${token}`
        }
      }).then(response => {
        setProducts(response.data)
      }).catch(error => {
        console.error(error)
        navigate('login')
        window.localStorage.clear();
      })
    } else {
      navigate('/login')
      window.localStorage.clear();
    }
    
  }, []);

  const showProducts = () => {
    let filtered = products.filter((product) =>
      product.name.toUpperCase().includes(inputValue.toUpperCase())
    );

    if (!filtered.length) {
      filtered = products.filter((product) =>
        product.category
          .toUpperCase()
          .includes(inputValue.toUpperCase())
      );
      if (filtered.length) {
        setFilteredProducts(filtered);
      } else {
        notify("A pesquisa não encontrou resultados ❌");
        setFilteredProducts([]);
      }
    } else {
      setFilteredProducts(filtered);
    }
  };

  return (
    <ProductContext.Provider value={{filteredProducts, setFilteredProducts, inputValue, setInputValue, showProducts, products, notify, navigate, searchText, setSearchText}}>
      {children}
    </ProductContext.Provider>
  );
};
