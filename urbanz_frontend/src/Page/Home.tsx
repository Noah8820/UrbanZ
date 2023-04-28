import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { product } from "../Components/Products";
import DataService from "../Service/DataService";


export default function Home(): JSX.Element {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    DataService().getData().then((data: product[]) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
    <p>hallo</p>
    </>
  );
}


