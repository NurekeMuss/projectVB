const categories = {};
  
  // Render products by category
  const productList = Object.keys(categories).map((category) => (
    <div key={category}>
        <header className="cart-header">
            <div className="cart-header__title">{category}</div>
        </header>
        {categories[category].map((product) => (
            <Product
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
                increase={increase}
                decrease={decrease}
                changeValue={changeValue}
            />
        ))}
    </div>
));

// Organize products by category
cart.forEach((product) => {
    if (!categories[product.category]) {
        categories[product.category] = [];
    }
    categories[product.category].push(product);
});