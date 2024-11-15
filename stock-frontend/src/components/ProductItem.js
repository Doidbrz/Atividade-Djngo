import React, { useState } from 'react';
import api from '../api';

const ProductItem = ({ product, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);

    const [updatedProduct, setUpdatedProduct] = useState({
        name: product.name,
        description: product.description,
        qty_stock: product.qty_stock,
        price: product.price,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        api.put(`products/${product.id}/`, updatedProduct)
            .then((response) => {
                alert('Produto atualizado com sucesso!');
                setIsEditing(false);
                onUpdate();
            })
            .catch((error) => {
                console.error('Erro ao atualizar produto:', error);
            });
    };

    const handleDelete = () => {
        api.delete(`products/${product.id}/`)
            .then(() => {
                alert('Produto excluído com sucesso!');
                onUpdate();
            })
            .catch((error) => {
                console.error('Erro ao excluir produto:', error);
            });
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            {isEditing ? (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Editando Produto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={updatedProduct.name}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Nome do produto"
                        />
                        <input
                            type="text"
                            name="description"
                            value={updatedProduct.description}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Descrição do produto"
                        />
                        <input
                            type="number"
                            name="qty_stock"
                            value={updatedProduct.qty_stock}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Quantidade"
                        />
                        <input
                            type="number"
                            name="price"
                            value={updatedProduct.price}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Preço"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Salvar
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-700">
                            <strong>Quantidade:</strong> {product.qty_stock}
                        </span>
                        <span className="text-lg font-semibold text-blue-500">
                            R$ {product.price}
                        </span>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={handleEdit}
                            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
                        >
                            Editar
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductItem;
