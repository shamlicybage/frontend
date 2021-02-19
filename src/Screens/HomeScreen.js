import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../Components/Product";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Actions/productActions";
function HomeScreen() {
  // Fire actions
  const dispatch = useDispatch();
  // Let us select certain part of the state in redux store
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} sl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
