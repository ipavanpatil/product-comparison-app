import React from 'react';
import { BarChart3, X } from 'lucide-react';
import { Product } from '../types/Product';

interface ComparisonToggleProps {
  selectedProducts: Product[];
  onShowComparison: () => void;
  onRemoveProduct: (productId: string) => void;
}

export const ComparisonToggle: React.FC<ComparisonToggleProps> = ({
  selectedProducts,
  onShowComparison,
  onRemoveProduct
}) => {
  if (selectedProducts.length === 0) return null;

  return (
    <div className="comparison-toggle">
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="card-title mb-0 fw-semibold">Compare Selected</h6>
            <span className="badge bg-secondary">
              {selectedProducts.length}/3
            </span>
          </div>
          
          <div className="mb-3">
            {selectedProducts.map(product => (
              <div key={product.id} className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-2">
                <div className="d-flex align-items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded me-2"
                    style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                  />
                  <span className="small fw-medium text-truncate">
                    {product.name}
                  </span>
                </div>
                <button
                  onClick={() => onRemoveProduct(product.id)}
                  className="btn btn-sm btn-outline-secondary p-1"
                  style={{ width: '24px', height: '24px' }}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
          
          <button
            onClick={onShowComparison}
            disabled={selectedProducts.length < 2}
            className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
          >
            <BarChart3 size={20} className="me-2" />
            Compare Products
          </button>
        </div>
      </div>
    </div>
  );
};