fetch('http://localhost:8000/api/products/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Products:', data);
    // You can now render them into your DOM
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const item = document.createElement('li');
      item.textContent = `${product.name} - ₹${product.price}`;
      productList.appendChild(item);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });