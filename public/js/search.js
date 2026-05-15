const results = document.getElementById('results');

async function searchProducts() {
  const searchTerm = document.getElementById('searchInput').value;

  const response = await fetch('/api/search');
  const products = await response.json();

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  results.innerHTML = '';

  filtered.forEach(product => {
    results.innerHTML += `
      <div class="card">
        <img src="${product.thumbnail}"style="width: 100%; height: 200px; object-fit: cover;">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>

        <a href="/product?id=${product.id}">
          <button>View Product</button>
        </a>
      </div>
    `;
  });
}