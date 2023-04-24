import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { product } from "./Products";
import DataService from "../Service/DataService";

export default function DataList() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    DataService().getData()
      .then((data : product[]) => setProducts(data));
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <div>test</div>
        {products?.map((product) => (
          <>
          <div key={product.id}>{product.name}, {product.price}</div>
          <img src={product.image} alt="" />
          </>
        ))}
      </Grid>
    </Grid>
  );
}
