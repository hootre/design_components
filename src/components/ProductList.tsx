import { Box, TextField } from "@mui/material";
import { useRef } from "react";
import usePersistedState from "../hooks/usePersistedState";

import { Product } from "../types/Product";

export default function ProductList() {
  const textFieldRef = useRef<HTMLInputElement>(null);
  const [list, setList] = usePersistedState<Product[]>("productList", []);

  const addNewProduct = () => {
    const textFieldValue = textFieldRef.current!.value;
    const newProduct: Product = { name: textFieldValue };
    const newList = [...list, newProduct];
    setList(newList);
  };

  const deleteProduct = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const updateProduct = (newProduct: Product, index: number) => {
    const newList = [...list];
    newList[index] = newProduct;
    setList(newList);
  };
  return (
    <Box component="main" minHeight="80vh">
      <TextField
        inputRef={textFieldRef}
        label="Product name"
        variant="standard"
      />
      <button onClick={addNewProduct}>Add a new product</button>
      {list.map((e: Product, index: number) => (
        <div>
          <span>{e.name}</span>
          <button
            onClick={() => {
              const prompt = window.prompt("Set a new name");
              updateProduct({ name: prompt ?? "" }, index);
            }}
          >
            Update
          </button>
          <button onClick={() => deleteProduct(index)}>Delete</button>
        </div>
      ))}
    </Box>
  );
}
