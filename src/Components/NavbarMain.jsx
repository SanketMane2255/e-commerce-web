import { Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import Logo2 from './logo2.png'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Name } from "../Context";
import { useContext } from "react";


const NavbarMain = () => {
  const { cart } = useContext(Name)
  const { search, setSearch } = useContext(Name)



  return (
    <>
     <Navbar expand="lg" className="bg-dark text-white p-3 shadow-sm" style={{ margin: "0 auto" }}>
  <NavbarBrand className="mx-auto" style={{ width: "100px" }}>
    <Link to="/">
      <img
        src={Logo2}
        alt="Logo"
        height="80px"
        width="80px"
        style={{ borderRadius: "50%", boxShadow: "0 4px 8px rgba(255,255,255,0.3)" }}
      />
    </Link>
  </NavbarBrand>

  <Nav className="w-100 d-flex justify-content-between align-items-center">
    {/* Centered Search Bar */}
    <NavLink className="w-50 d-none d-lg-block d-xs-none d-sm-block">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <input
          className="px-4 py-2 border border-primary rounded-pill w-100"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for More..."
          style={{ boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
        />
        <FaSearch
          style={{
            position: "relative",
            left: "-40px",
            color: "black",
            fontSize: "25px",
            cursor: "pointer",
          }}
        />
      </div>
    </NavLink>

    {/* Shopping Cart Icon on the Right */}
    <NavLink className="ml-auto">
      <Link
        to="cart"
        style={{ textDecoration: "none", fontSize: "20px", color: "white", position: "relative" }}
      >
        <FaShoppingCart style={{ fontSize: "40px", color: "white" }} />
        {cart.length > 0 && (
          <sup>
            <div
              className="badge bg-danger rounded-circle"
              style={{
                height: "20px",
                width: "20px",
                textAlign: "center",
                lineHeight: "20px",
                position: "absolute",
                top: "5px",
                right: "-10px"
              }}
            >
              {cart.length}
            </div>
          </sup>
        )}
      </Link>
    </NavLink>
  </Nav>
</Navbar>


    </>
  )
}
export default NavbarMain;