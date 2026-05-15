const dealsContainer = document.getElementById('dealsContainer');

async function loadDeals() {

  const response = await fetch('/api/search');

  const products = await response.json();

  products.sort((a, b) => a.price - b.price);

  dealsContainer.innerHTML = '';

  products.slice(0, 6).forEach(product => {

    dealsContainer.innerHTML += `
      <div class="card">

        <img src="${product.thumbnail}"style="width: 100%; height: 200px; object-fit: cover;" />

        <h3>${product.title}</h3>

        <p>$${product.price}</p>

        <div class="deal-badge">
          Great Deal
        </div>

      </div>
    `;
  });

  createChart(products);
}

function createChart(products) {

  const ctx = document
    .getElementById('dealChart')
    .getContext('2d');

  new Chart(ctx, {
    type: 'bar',

    data: {
      labels: products.slice(0,5).map(p => p.title),

      datasets: [{
        label: 'Price',

        data: products.slice(0,5).map(p => p.price)
      }]
    }
  });
}

loadDeals();