import React, { useEffect, useState } from "react";
import api from "../api/api";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/product/get-list");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default Product;
