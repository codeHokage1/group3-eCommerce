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
import { Link } from "react-router-dom";

const Navbar = () => {
 
  return (
    <nav>
      <div className="nav-wrapper">

      </div>
      <div>
       
      </div>
      <Link to="/account" className="Menu">
          Account
      </Link>{" "}
         
      <Link to="/help" className="Menu">
       Help
          </Link>{" "}
          
          <Link to="/cart" className="Menu">
       Cart
      </Link>{" "}
    </nav>
  );
};

export default Navbar;
