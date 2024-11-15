import React, { useState, useEffect } from 'react';
import api from '../api';
import ProductItem from './ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        api.get('products/')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Erro ao carregar produtos:', error);
            });
    };

    return (
        <div className="container mx-auto p-6">
            <header className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold text-gray-800">Produtos</h1>
                <button
                    onClick={fetchProducts}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-md"
                >
                    Atualizar Lista
                </button>
            </header>
            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} onUpdate={fetchProducts} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-lg">Nenhum produto encontrado.</p>
            )}
        </div>
    );
};

export default ProductList;
