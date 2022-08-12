// import React, { useContext } from "react";
// import { Button, Badge } from "react-bootstrap";
// import { MovieContext } from "../store/MovieContext";

// const Navbar = () => {
//   // const [movies, setMovies] = useContext(MovieContext);
//   // console.log(movies);
//   return (
//     <nav>
//       <div className="">
//         <Button variant="success">My Movie Application</Button>
//         Number of Movies
//         <Badge bg="danger" variant="light">
//           {movies.lenght}
//         </Badge>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs';
import { FiHelpCircle } from 'react-icons/fi';
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { BiSearch } from 'react-icons/bi';
 

const Navbar = () => {
 
  return (

    <nav className="nav-wrapper">
     
      <Link to="/account" className="Menu">
          Account
      </Link>{" "}
         
      <Link to="/help" className="Menu">
    <div><FiHelpCircle/>   Help</div> 
          </Link>{" "}
          
          <Link to="/cart" className="Menu">
     <div><BsCart4/>  Cart</div> 
        </Link>{" "}

      
       
  <InputGroup className="mb-3">
        <Button className="sbutton" variant="outline-secondary" id="button-addon1">
          <div><BiSearch/></div>
        </Button>
        
        <Form.Control className="mb"
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="search products, stores and categories"
        />
       
      </InputGroup>


    </nav>

  
  );
};

export default Navbar;
