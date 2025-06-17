import React from "react";
import {
  X,
  Trash2,
  Cpu,
  HardDrive,
  Monitor,
  Battery,
  Weight,
  Zap,
} from "lucide-react";
import { Product } from "../types/Product";

interface ComparisonPanelProps {
  products: Product[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  onClose: () => void;
}

export const ComparisonPanel: React.FC<ComparisonPanelProps> = ({
  products,
  onRemoveProduct,
  onClearAll,
  // onClose,
}) => {
  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "processor":
        return <Cpu size={16} />;
      case "ram":
        return <Zap size={16} />;
      case "storage":
        return <HardDrive size={16} />;
      case "display":
        return <Monitor size={16} />;
      case "battery":
        return <Battery size={16} />;
      case "weight":
        return <Weight size={16} />;
      default:
        return null;
    }
  };

  const getFeatureComparison = (feature: string, values: string[]) => {
    // Simple comparison logic - highlights the "best" value
    if (feature === "price") {
      const minPrice = Math.min(
        ...values.map((v) => parseFloat(v.replace(/[^0-9.]/g, "")))
      );
      return values.map(
        (v) => parseFloat(v.replace(/[^0-9.]/g, "")) === minPrice
      );
    }
    if (feature === "ram" || feature === "storage") {
      const maxValue = Math.max(
        ...values.map((v) => parseFloat(v.replace(/[^0-9.]/g, "")))
      );
      return values.map(
        (v) => parseFloat(v.replace(/[^0-9.]/g, "")) === maxValue
      );
    }
    if (feature === "battery") {
      const maxBattery = Math.max(
        ...values.map((v) => parseFloat(v.replace(/[^0-9.]/g, "")))
      );
      return values.map(
        (v) => parseFloat(v.replace(/[^0-9.]/g, "")) === maxBattery
      );
    }
    if (feature === "weight") {
      const minWeight = Math.min(
        ...values.map((v) => parseFloat(v.replace(/[^0-9.]/g, "")))
      );
      return values.map(
        (v) => parseFloat(v.replace(/[^0-9.]/g, "")) === minWeight
      );
    }
    return values.map(() => false);
  };

  return (
    <div className="comparison-panel">
      <div className="comparison-content">
        <div className="d-flex justify-content-end align-items-center py-3 border-bottom">
          <div className="d-flex align-items-center gap-2">
            <button onClick={onClearAll} className="btn btn-outline-danger">
              <Trash2 size={16} className="me-2" />
              Clear All
            </button>
            {/* <button
              onClick={onClose}
              className="btn btn-outline-secondary"
            >
              <X size={20} />
            </button> */}
          </div>
        </div>

        <div
          className="table-responsive"
          style={{ maxHeight: "70vh", overflowY: "auto" }}
        >
          <table className="table table-hover mb-0">
            <thead className="table-light sticky-top">
              <tr>
                <th
                  className="fw-semibold text-muted"
                  style={{ width: "150px" }}
                >
                  Feature
                </th>
                {products.map((product) => (
                  <th
                    key={product.id}
                    className="text-center"
                    style={{ minWidth: "250px" }}
                  >
                    <div className="position-relative">
                      <button
                        onClick={() => onRemoveProduct(product.id)}
                        className="btn btn-sm btn-outline-danger position-absolute top-0 end-0"
                        style={{ transform: "translate(50%, -50%)" }}
                      >
                        <X size={12} />
                      </button>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="comparison-product-image rounded mb-2 mx-auto d-block"
                      />
                      <h6 className="fw-bold mb-1">{product.name}</h6>
                      <small className="text-muted">{product.brand}</small>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-semibold">Price</td>
                {products.map((product, index) => {
                  const prices = products.map((p) => p.price.toString());
                  const isHighlighted = getFeatureComparison("price", prices)[
                    index
                  ];
                  return (
                    <td
                      key={product.id}
                      className={`text-center fw-bold h5 ${
                        isHighlighted ? "highlight-best" : "text-primary"
                      }`}
                    >
                      ${product.price.toLocaleString()}
                    </td>
                  );
                })}
              </tr>
              {Object.keys(products[0].features).map((feature) => {
                const values = products.map(
                  (p) => p.features[feature as keyof typeof p.features]
                );
                const highlights = getFeatureComparison(feature, values);

                return (
                  <tr key={feature}>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="text-muted me-2">
                          {getFeatureIcon(feature)}
                        </span>
                        <span className="fw-medium text-capitalize">
                          {feature}
                        </span>
                      </div>
                    </td>
                    {products.map((product, index) => (
                      <td
                        key={product.id}
                        className={`text-center fw-medium ${
                          highlights[index] ? "highlight-best" : ""
                        }`}
                      >
                        {
                          product.features[
                            feature as keyof typeof product.features
                          ]
                        }
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
