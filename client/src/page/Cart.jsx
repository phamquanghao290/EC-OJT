import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import p1 from "../../public/images/Rectangle 734.png";
import deletecon from "../../public/images/deletecon.png";
import { Input } from "antd";

function Cart() {
    return (
        <div>
            <div className="container">
                <h1 className="title">Cart</h1>
                <p>
                    Please fill in the fields below and click place order to
                    complete your purchase!
                </p>
                <p>Already register ?</p>{" "}
                <Link to="/login"> Please login here</Link>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th className="one">PRODUCT DETAILS</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SHIPPING</th>
                            <th>SUBTOTAL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="image">
                                <img src={p1} alt="" />
                                <div>
                                    <p>Product Name</p>
                                    <p>Size: S</p>
                                    <p>Color: Black</p>
                                </div>
                            </td>
                            <td>$19.99</td>
                            <td>1</td>
                            <td>Free</td>
                            <td>$19.99</td>
                            <td>
                                <img src={deletecon} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td className="image">
                                <img src={p1} alt="" />
                                <div>
                                    <p>Product Name</p>
                                    <p>Size: S</p>
                                    <p>Color: Black</p>
                                </div>
                            </td>
                            <td>$19.99</td>
                            <td>1</td>
                            <td>Free</td>
                            <td>$19.99</td>
                            <td>
                                <img src={deletecon} alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="total">
                <div>
                    <h2>Discount Codes</h2>
                    <p>Enter your coupon code if you have one.</p><br />
                    <Input placeholder="Coupon code" />
                </div>
            </div>
        </div>
    );
}

export default Cart;
