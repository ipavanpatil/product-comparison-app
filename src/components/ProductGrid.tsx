import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types/Product';

interface ProductGridProps {
  products: Product[];
  selectedProducts: Product[];
  onToggleCompare: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedProducts,
  onToggleCompare
}) => {
  const canAddMore = selectedProducts.length < 3;
  
  return (
    <div className="row g-4">
      {products.map((product, index) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3 product-grid-item">
          <ProductCard
            product={product}
            isSelected={selectedProducts.some(p => p.id === product.id)}
            onToggleCompare={onToggleCompare}
            canAddMore={canAddMore}
          />
        </div>
      ))}
    </div>
  );
};