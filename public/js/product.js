const productDetails = document.getElementById('productDetails');

async function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const response = await fetch(`/api/product/${id}`);
  const product = await response.json();

  productDetails.innerHTML = `
    <img src="${product.thumbnail}"style="width: 100%; height: 200px; object-fit: cover;"/>

    <div>
      <h1>${product.title}</h1>

      <p>${product.description}</p>

      <h2>$${product.price}</h2>

      <p>${product.category}</p>

      <a href="#" target="_blank">
        <button>Buy Now</button>
      </a>
    </div>
  `;
}

loadProduct();