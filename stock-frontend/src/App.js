import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  const [productToEdit, setProductToEdit] = useState(null);

  const handleSave = () => {
    setProductToEdit(null);
  };

  return (
    <div>
      <ProductForm productToEdit={productToEdit} onSave={handleSave} />
      <ProductList />
    </div>
  );
};

export default App;
