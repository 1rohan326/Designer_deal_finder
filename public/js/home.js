const featuredProducts = document.getElementById('featuredProducts');

async function loadProducts() {
  const response = await fetch('/api/search');
  const products = await response.json();

  featuredProducts.innerHTML = '';

  products.slice(0, 6).forEach(product => {
    featuredProducts.innerHTML += `
      <div class="card">
        <img src="${product.thumbnail}"style="width: 100%; height: 200px; object-fit: cover;">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <p>${product.category}</p>

        <button onclick="saveFavorite('${product.title}', ${product.price}, '${product.image}')">
          Save Deal
        </button>
      </div>
    `;
  });
}

async function saveFavorite(name, price, image) {
  await fetch('/api/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product_name: name,
      price,
      image,
      link: '#'
    })
  });

  alert('Saved to favorites');
}

function goSearch() {
  window.location.href = '/search';
}

loadProducts();