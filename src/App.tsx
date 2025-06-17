import React, { useState, useMemo } from "react";
import { Laptop, ShoppingCart } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ProductGrid } from "./components/ProductGrid";
import { ComparisonPanel } from "./components/ComparisonPanel";
import { ComparisonToggle } from "./components/ComparisonToggle";
import { SearchBar } from "./components/SearchBar";
import { products } from "./data/products";
import { Product } from "./types/Product";
import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {
  const [selectedProducts, setSelectedProducts] = useLocalStorage<Product[]>(
    "selectedProducts",
    []
  );
  const [showComparison, setShowComparison] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    return uniqueCategories.sort();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleToggleCompare = (product: Product) => {
    setSelectedProducts((prev) => {
      const isSelected = prev.some((p) => p.id === product.id);
      if (isSelected) {
        return prev.filter((p) => p.id !== product.id);
      } else if (prev.length < 3) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearAll = () => {
    setSelectedProducts([]);
    setShowComparison(false);
  };

  const handleShowComparison = () => {
    if (selectedProducts.length >= 2) {
      setShowComparison(true);
    }
  };

  return (
    <div className="min-vh-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-primary pt-5" id="home">
        <div className="container-fluid">
          <div className="row align-items-center py-4">
            <div className="col-12 col-lg-8 mx-auto text-center">
              <div className="hero-content fade-in">
                <h1 className="display-4 fw-bold mb-3">
                  Compare Premium Laptops
                </h1>
                <p className="lead mb-4">
                  Select up to 3 laptops to compare their specifications side by
                  side and make the perfect choice for your needs
                </p>
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <ShoppingCart size={20} className="me-2" />
                  <span className="fw-medium">
                    {selectedProducts.length} laptop
                    {selectedProducts.length !== 1 ? "s" : ""} selected for
                    comparison
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container-fluid py-5" id="browse">
        <div className="row">
          <div className="col-12">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />

            {filteredProducts.length === 0 ? (
              <div className="text-center py-5">
                <div className="mx-auto fade-in" style={{ maxWidth: "400px" }}>
                  <Laptop size={64} className="mb-3" />
                  <h3 className="h5 fw-semibold mb-2">
                    No laptops found
                  </h3>
                  <p className="text-muted">
                    Try adjusting your search terms or filters to find the
                    perfect laptop
                  </p>
                </div>
              </div>
            ) : (
              <ProductGrid
                products={filteredProducts}
                selectedProducts={selectedProducts}
                onToggleCompare={handleToggleCompare}
              />
            )}
          </div>
        </div>
      </main>

      {/* Comparison Toggle */}
      <ComparisonToggle
        selectedProducts={selectedProducts}
        onShowComparison={handleShowComparison}
        onRemoveProduct={handleRemoveProduct}
      />

      {/* Comparison Modal */}
      {showComparison && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ background: "rgba(0,0,0,0.5)" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title mb-0 fw-bold">Product Comparison</h4>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowComparison(false)}
                />
              </div>
              <div className="modal-body">
                <ComparisonPanel
                  products={selectedProducts}
                  onRemoveProduct={handleRemoveProduct}
                  onClearAll={handleClearAll}
                  onClose={() => setShowComparison(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
}

export default App;
