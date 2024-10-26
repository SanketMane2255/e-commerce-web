import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Name } from "../Context";
import { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const { cart, setCart } = useContext(Name);
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  console.log(cart)
  function Remove(id) {
    const discarded = cart.filter((items) => items.item.id !== id)
    setCart(discarded)
  }

  useEffect(() => {
    const newTotalAmount = cart.reduce((acc, { item, quantity }) => acc + item.price * quantity, 0);
    setTotalAmount(newTotalAmount.toFixed(2));

    const charge = newTotalAmount < 500 ? 100 : 0;
    setDeliveryCharge(charge.toFixed(2));
  }, [cart])

  const increseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.item.id === id) {
        item.quantity++;
      }
      return item;
    })
    setCart([...updatedCart])
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.item.id === id && item.quantity > 1) {
        item.quantity--;
      }
      return item;
    })
    setCart([...updatedCart])
  }


  if (cart.length === 0) {
    return (

      <div className=" border border-2 bg-info rounded-4 mx-auto p-5 text-center m-5" style={{ height: "max-content", width: "max-content" }}>
        <h1 className="m-5 fw-bold text-white">Bag is Empty</h1>
        <p className="display-4 hi" >😥</p>
        <Link to="/"><Button className="m-5" variant="dark">Shop Now</Button></Link>
      </div>
    )
  }


  return (
    <>
      <div className="row align-items-center justify-content-center" style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
        <div className="d-flex flex-column  border border-2 rounded border-dark col col-lg-5 col-sm-12 col-xs-12 col-12 ">
          <h3 className="fw-bold text-primary ">My Cart</h3>
          {

            cart.map(({ item, quantity }) => {
              return (
                <div
                  key={item.id}
                  className="d-flex flex-row justify-content-between align-items-center border rounded p-3 shadow-sm mb-3"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <img
                    className="col-lg-4 col-sm-4 col-xs-4 col-4 rounded border"
                    src={item.image}
                    alt="image"
                    height="120px"
                    width="120px"
                    style={{ objectFit: "cover", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                  />

                  <div className="d-flex flex-column justify-content-between col-lg-5 col-sm-5 col-xs-5 col-5">
                    <h5 className="mb-2 text-primary" style={{ fontWeight: "400",fontSize:"17px" }}>{item.title}</h5>

                    <div className="d-flex align-items-center">
                      <p
                        className="m-2 fw-bold fs-4 text-center border px-3 rounded-circle text-white"
                        style={{ cursor: 'pointer', backgroundColor: "#28a745" }}
                        onClick={() => { increseQuantity(item.id) }}
                      >
                        +
                      </p>
                      <p className="m-0 fs-5" style={{ width: "30px", textAlign: "center" }}>{quantity}</p>
                      <p
                        className="m-2 fw-bold fs-4 text-center border px-3 rounded-circle text-white"
                        style={{ cursor: 'pointer', backgroundColor: "#dc3545" }}
                        onClick={() => { decreaseQuantity(item.id) }}
                      >
                        -
                      </p>
                      <p className="mx-3 fs-5 text-success mt-1">{"$" + item.price}</p>
                    </div>
                  </div>

                  <RxCross2
                    className="fs-3 col-lg-1 text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => { Remove(item.id) }}
                  />
                </div>

              )
            })}
        </div>
        <div
          className="p-5 col-lg-5 col-sm-12 border border-2 rounded m-2"
          style={{
            backgroundColor: "#f8f9fa",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderColor: "#343a40"
          }}
        >
          <h2 className="fw-bold text-primary mb-4">Summary</h2>
          <p style={{fontSize:"18px"}}><b>Items: </b>{cart.length}</p>
          <p style={{fontSize:"18px"}}><b>Total Amount: </b>{"$" + totalAmount}</p>
          <p style={{fontSize:"18px"}}><b>Delivery Charge: </b>{"$" + deliveryCharge}</p>
          <h4 className=" text-success mt-4"><b>Grand Total: </b>{"$" + (parseFloat(totalAmount) + parseFloat(deliveryCharge)).toFixed(2)}</h4>
          <Button
            className="w-100 mt-4"
            variant="success"
            style={{
              padding: "10px 0",
              fontSize: "1.2rem",
              fontWeight: "600",
              backgroundColor: "#28a745",
              borderColor: "#28a745"
            }}
          >
            Check Out
          </Button>
        </div>

      </div>
    </>
  )


}
export default Cart;