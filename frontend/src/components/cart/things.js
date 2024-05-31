// const things = [
//     {
//         id:1,
//         cover: "https://m.media-amazon.com/images/I/71gr8VU851L._SX466_.jpg",
//         pName: "Dumbble | 11lb",
//         pPrice: "$15",
//     },
//     {
//         id:2,
//         cover: "https://m.media-amazon.com/images/I/41G+x53vAPL._SY300_SX300_.jpg",
//         pName: "Dumbble | 22.05lb",
//         pPrice: "$19",
//     },
//     {
//         id:3,
//         cover: "https://m.media-amazon.com/images/I/51XygOKkUVL._SX425_.jpg",
//         pName: "Dumbble | 33.07lb",
//         pPrice: "$23",
//     },
//     {
//         id:4,
//         cover: "https://m.media-amazon.com/images/I/71gr8VU851L._SX466_.jpg",
//         pName: "Barbell rod with plates | 44.10lb",
//         pPrice: "$85",
//     },
//     {
//         id:5,
//         cover: "https://m.media-amazon.com/images/I/71ZafjLQTlL._SX425_.jpg",
//         pName: "Barbell rod and accessaries | 66.14lb",
//         pPrice: "$200",
//     },
// ]

const userId = 1; // Replace with actual userId as required

async function fetchCartDetails(userId) {
  const response = await fetch(`http://localhost:8080/cart/view/${userId}`);
  const productIds = await response.text();
  return productIds.split(",");
}

async function fetchProductDetails(productId) {
  const response = await fetch(
    `http://localhost:8080/products/get/${productId}`
  );
  const product = await response.json();
  return {
    id: product.productId,
    cover: product.imageUrl,
    pName: product.productName,
    pPrice: `$${product.price}`,
  };
}

async function fetchAllProducts(userId) {
  const productIds = await fetchCartDetails(userId);
  const productPromises = productIds.map((id) => fetchProductDetails(id));
  const products = await Promise.all(productPromises);
  return products;
}

let things = [];

(async () => {
  things = await fetchAllProducts(userId);
  // If you need to do something with the `things` array after fetching, you can do it here
  console.log(things);
})();

export default things;
