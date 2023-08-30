import React, { useState } from "react";
import SingleProduct from "../components/SingleProduct";
import { Wrap, WrapItem } from "@chakra-ui/react";

const Products = () => {
  const api =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
  const [fetchedData, setFetchedData] = useState([]);

  async function fetchData() {
    let res = await fetch(api);
    let res1 = await res.json();
    console.log(res1.data, "data");
    setFetchedData(res1.data);
  }
  fetchData();
  return (
    <div>
      <h1>Products</h1>
      <Wrap>
        {fetchedData.map((el) => {
          return (
            <WrapItem>
              <SingleProduct {...el} />
            </WrapItem>
          );
        })}
      </Wrap>
    </div>
  );
};

export default Products;
