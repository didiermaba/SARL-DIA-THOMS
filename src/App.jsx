import { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "./components/Navigation.jsx";
import Box from '@mui/material/Box';
import Header from "./components/header.jsx";
import Courousel from "./components/Courousel.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
      <Box sx={{ color: 'warning.main' }}>
        <h1>Bienvenue !</h1>
        </Box>
        <Courousel />
        <Header />

        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
