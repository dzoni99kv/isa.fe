import React, { useEffect, useState } from "react";
import api from "../api/api";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await api.get("cart/1/items"); // Assuming cartId = 1
                setCartItems(response.data);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    return (
        <div>
            <h1>Cart Items</h1>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.productName} - {item.quantity} pcs
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items in the cart.</p>
            )}
        </div>
    );
};

export default Cart;
