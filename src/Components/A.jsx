import { useContext, useState } from "react";
import { Name } from "../Context";
import { Button, Container } from "react-bootstrap";

const A = () => {
  const { state, cart, setCart, search } = useContext(Name);

  const addItem = (item, quantity = 1) => {
    // Check if the item is already in the cart
    const itemInCart = cart.find(cartItem => cartItem.item.id === item.id);

    if (!itemInCart) {
      setCart([...cart, { item, quantity }]);
    }
  };


  function Remove(id) {
    const discarded = cart.filter((items) => items.item.id !== id)
    setCart(discarded)
  }
  const [filButton, setFilButton] = useState("all")

  const filteredList = state
    .filter((it) => filButton === "all" || it.category === filButton) //filter buttons
    .filter((it) => it.title.toLowerCase().includes(search.toLowerCase())); //search bar


  console.log(state)
  return (
    <>
      <Container >
        <h3 className="text-center fw-bold my-3 text-primary">Our best collections</h3>
        <nav className="text-center py-3 bg-light shadow-sm">
  <Button 
    className="m-1 border border-2 rounded-pill px-4 py-2" 
    variant="outline-dark" 
    onClick={() => setFilButton("all")} 
    style={{
      transition: "background-color 0.3s ease, color 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#343a40";
      e.target.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#343a40";
    }}
  >
    All
  </Button>

  <Button 
    className="m-1 border border-2 rounded-pill px-4 py-2" 
    variant="outline-dark" 
    onClick={() => setFilButton("men's clothing")} 
    style={{
      transition: "background-color 0.3s ease, color 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#343a40";
      e.target.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#343a40";
    }}
  >
    Men
  </Button>

  <Button 
    className="m-1 border border-2 rounded-pill px-4 py-2" 
    variant="outline-dark" 
    onClick={() => setFilButton("women's clothing")} 
    style={{
      transition: "background-color 0.3s ease, color 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#343a40";
      e.target.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#343a40";
    }}
  >
    Women
  </Button>

  <Button 
    className="m-1 border border-2 rounded-pill px-4 py-2" 
    variant="outline-dark" 
    onClick={() => setFilButton("electronics")} 
    style={{
      transition: "background-color 0.3s ease, color 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#343a40";
      e.target.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#343a40";
    }}
  >
    Electronics
  </Button>

  <Button 
    className="m-1 border border-2 rounded-pill px-4 py-2" 
    variant="outline-dark" 
    onClick={() => setFilButton("jewelery")} 
    style={{
      transition: "background-color 0.3s ease, color 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#343a40";
      e.target.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#343a40";
    }}
  >
    Jewelry
  </Button>
</nav>

        <div
          className="m-5 d-flex flex-wrap justify-content-around"
          style={{
            gap: "20px",backgroundColor: "#f7f9fc", borderRadius: "10px solid"
          }}
        >
          {filteredList.map((items) => {
            const itemInCart = cart.find(cartItem => cartItem.item.id === items.id);
            return (
              <div
                key={items.id}
                className="box bg-white d-flex flex-column align-items-center p-3 border rounded-3 shadow-sm my-2 text-center"
                style={{
                  height: "max-content",
                  width: "300px",
                  transition: "transform 0.3s, box-shadow 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                }}
              >
                <h5 className="text-primary fw-bold mb-2"style={{
            fontWeight: "bold", 
            color: "#333" 
          }}>
                  {items.title.length > 20 ? items.title.substring(0, 20) + "..." : items.title}
                </h5>
                <small className="text-muted mb-3" style={{
            color: "#888", 
            fontStyle: "italic"
          }}>
                  {items.description.length > 30 ? items.description.substring(0, 30) + "..." : items.description}
                </small>
                <img
                  className="my-3"
                  src={items.image}
                  alt="product"
                  height="150px"
                  width="100px"
                  style={{
                    objectFit: "contain",
                    borderRadius: "10px",
                    border: "1px solid #eee",
            backgroundColor: "#f0f0f0" 
                  }}
                />
                <div className="my-3 w-100 d-flex justify-content-between align-items-center">
                  <p className="mx-2 text-success fw-bold">
                    {"$" + items.price}
                  </p>
                  {itemInCart ? (
                    <Button
                      variant="outline-danger"
                      className="px-3 py-1"
                      onClick={() => Remove(items.id)}
                    >
                      Remove
                    </Button>
                  ) : (
                    <Button
                      variant="outline-success"
                      className="px-3 py-1"
                      onClick={() => addItem(items, 1)}
                    >
                      Add Cart
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  )
}
export default A;