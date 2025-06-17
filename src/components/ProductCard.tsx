import React from 'react';
import { Plus, Check, Star, Cpu, HardDrive, Monitor, Battery, Weight, Zap } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onToggleCompare: (product: Product) => void;
  canAddMore: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isSelected,
  onToggleCompare,
  canAddMore
}) => {
  const handleToggleCompare = () => {
    if (isSelected || canAddMore) {
      onToggleCompare(product);
    }
  };

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'processor': return <Cpu className="feature-icon" />;
      case 'ram': return <Zap className="feature-icon" />;
      case 'storage': return <HardDrive className="feature-icon" />;
      case 'display': return <Monitor className="feature-icon" />;
      case 'battery': return <Battery className="feature-icon" />;
      case 'weight': return <Weight className="feature-icon" />;
      default: return null;
    }
  };

  return (
    <div className="card product-card h-100">
      <div className="position-relative">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top product-image"
        />
        <span className="position-absolute top-0 end-0 m-3 badge bg-light text-dark">
          {product.category}
        </span>
      </div>
      
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h5 className="card-title fw-bold mb-1">{product.name}</h5>
            <h6 className="card-subtitle text-muted">{product.brand}</h6>
          </div>
          <div className="d-flex align-items-center">
            <Star size={16} className="text-warning me-1" fill="currentColor" />
            <small className="fw-medium">{product.rating}</small>
          </div>
        </div>
        
        <div className="h3 text-primary fw-bold mb-3">
          ${product.price.toLocaleString()}
        </div>
        
        <div className="mb-4 flex-grow-1">
          {Object.entries(product.features).map(([key, value]) => (
            <div key={key} className="d-flex align-items-center mb-2 small">
              <div className="me-2">
                {getFeatureIcon(key)}
              </div>
              <span className="text-muted text-capitalize me-2">{key}:</span>
              <span className="fw-medium text-dark">{value}</span>
            </div>
          ))}
        </div>
        
        <button
          onClick={handleToggleCompare}
          disabled={!isSelected && !canAddMore}
          className={`btn w-100 d-flex align-items-center justify-content-center btn-compare ${
            isSelected
              ? 'btn-success'
              : canAddMore
              ? 'btn-primary'
              : 'btn-secondary'
          }`}
        >
          {isSelected ? (
            <>
              <Check size={20} className="me-2" />
              Added to Compare
            </>
          ) : (
            <>
              <Plus size={20} className="me-2" />
              Add to Compare
            </>
          )}
        </button>
      </div>
    </div>
  );
};