import React, { useState, useEffect } from 'react';
import api from '../api';

const ProductForm = ({ productToEdit, onSave }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        qty_stock: 0,
        price: '',
        added_date: '',
    });

    useEffect(() => {
        if (productToEdit) {
            setProduct({
                ...productToEdit,
                added_date: new Date(productToEdit.added_date).toISOString().split('T')[0],
            });
        }
    }, [productToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productToEdit) {
            api.put(`products/${product.id}/`, product)
                .then((response) => {
                    alert('Produto atualizado com sucesso!');
                    onSave();
                })
                .catch((error) => {
                    console.error('Erro ao atualizar produto:', error);
                });
        } else {
            api.post('products/', product)
                .then((response) => {
                    alert('Produto adicionado com sucesso!');
                    onSave();
                })
                .catch((error) => {
                    console.error('Erro ao adicionar produto:', error);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                {productToEdit ? 'Editar Produto' : 'Adicionar Produto'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-gray-700 font-medium">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Ex: Livro de React"
                        required
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="description" className="text-gray-700 font-medium">Descrição</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        rows="3"
                        className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Adicione uma descrição"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="qty_stock" className="text-gray-700 font-medium">Quantidade</label>
                    <input
                        type="number"
                        id="qty_stock"
                        name="qty_stock"
                        value={product.qty_stock}
                        onChange={handleChange}
                        className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Ex: 10"
                        required
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="price" className="text-gray-700 font-medium">Preço</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Ex: 50.00"
                        required
                    />
                </div>

                <div className="flex flex-col space-y-2 md:col-span-2">
                    <label htmlFor="added_date" className="text-gray-700 font-medium">Data de Adição</label>
                    <input
                        type="date"
                        id="added_date"
                        name="added_date"
                        value={product.added_date}
                        onChange={handleChange}
                        className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-between">
                <button
                    type="button"
                    onClick={() => onSave()}
                    className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                    {productToEdit ? 'Salvar Alterações' : 'Adicionar Produto'}
                </button>
            </div>
        </form>
    );
};

export default ProductForm;
