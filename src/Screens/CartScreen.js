import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Image,
  Form,
} from "react-bootstrap";
import Message from "../Components/Message";
import { addToCart } from "../Actions/cartActions";

function CartScreen({ match, location, history }) {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log("cart: ", cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <>
      <Row>
        <Col md={4}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message variant="info">
              Your Cart is empty <Link to="/">Go back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} />
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={8}></Col>
      </Row>
    </>
  );
}

export default CartScreen;
