import React from 'react'
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useRef } from 'react';


function Add({products,setProducts,users,setUsers}) {

  const name = useRef("");
  const category = useRef("");
  const price = useRef("");

  return (
    <>
    <h1>Add product</h1>
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input id={"name"} ref={name} type="text" />

      <FormLabel>Category</FormLabel>
      <Input id={"category"} ref={category} type="text" />

      <FormLabel>Price</FormLabel>
      <Input id={"price"} ref={price} type="text" />

      <Button
        colorScheme="yellow"
        onClick={(e) => {
          // console.log(users);
          // console.log(name.current.value);

          let newProduct = {
            name: name.current.value,
            category: category.current.value,
            price: price.current.value,
          };

          axios
            .post(
              "https://6549a154e182221f8d51b8a0.mockapi.io/products",
              newProduct
            )
            .then((res) => {
            //   console.log(res.data);
              setProducts([...products, res.data]);
              name.current.value=""
              category.current.value=""
              price.current.value=""
            });
        }}
      >
        Post
      </Button>
    </FormControl>
  </>
  )
}

export default Add