import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import { useRef } from "react";
import Login from "./components/Login";
import Tablex from "./components/Table";
import { ChakraProvider, Table } from "@chakra-ui/react";
import Register from "./components/Register";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLogged, setisLogged] = useState(false);
  const [isRegistered, setisRegistered] = useState(true);
  // const goRegisterBtn=useRef()


// Register

const [name, setName] = useState("")
const [surname, setSurname] = useState("")
const [pass, seyPass] = useState("")
const [email, setEmail] = useState("")

  useEffect(() => {
    axios("https://6549a154e182221f8d51b8a0.mockapi.io/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    axios("https://6549a154e182221f8d51b8a0.mockapi.io/products").then(
      (res) => {
        // console.log(res.data);
        setProducts(res.data);
      }
    );
  }, []);

  return (
    <ChakraProvider>
      <>
        <Login
          users={users}
          setUsers={setUsers}
          isLogged={isLogged}
          setisLogged={setisLogged}
          setisRegistered={setisRegistered}
          isRegistered={isRegistered}
          // goRegisterBtn={goRegisterBtn}
        />
        <Register
          isLogged={isLogged}
          setisLogged={setisLogged}
          users={users}
          setUsers={setUsers}
          setisRegistered={setisRegistered}
          isRegistered={isRegistered}
          // name={name}
          // setName={setName}
          // surname={surname}
          // email={email}
          // pass={pass}
        />
        
        <Tablex
          products={products}
          setProducts={setProducts}
          users={users}
          setUsers={setUsers}
          isLogged={isLogged}
          setisLogged={setisLogged}
          setisRegistered={setisRegistered}
          isRegistered={isRegistered}
        />
      </>
    </ChakraProvider>
  );
}

export default App;
