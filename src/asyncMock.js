const products = [
  { id: "1", name: "remera clasic hombre", img: "../public/Products-img/remera-clasic-hombre.webp", gender: "masculino", price: 2000, category: "remera", description: "remera clasica para hombre", stock: 10 },
  { id: "2", name: "remera oversize hombre", img: "../public/Products-img/remera-over-hombre.webp", gender: "masculino", price: 4000, category: "remera", description: "remera oversize para hombre", stock: 20 },
  { id: "3", name: "Pantalon claro hombre", img: "../public/Products-img/pantalon-mom-hombre-claro.webp", gender: "masculino", price: 6000, category: "pantalon", description: "pantalon claro hombre", stock: 30 },
  { id: "4", name: "pantalon negro hombre", img: "../public/Products-img/pantalon-mom-hombre.webp", gender: "masculino", price: 6000, category: "pantalon", description: "pantalon negro hombre", stock: 20 },
  { id: "5", name: "remera clasic mujer", img: "../public/Products-img/remera-clasic-mujer.webp", gender: "femenino", price: 8000, category: "remera", description: "remera clasic mujer", stock: 40 },
  { id: "6", name: "remera clara mujer", img: "../public/Products-img/remera-clara-mujer.webp", gender: "femenino", price: 8000, category: "remera", description: "remera clara mujer", stock: 40 },
  { id: "7", name: "pantalon clasic mujer", img: "../public/Products-img/pantalon-clasic-mujer.webp", gender: "femenino", price: 10000, category: "pantalon", description: "pantalon clasic mujer", stock: 20 },
  { id: "8", name: "pantalon mom mujer", img: "../public/Products-img/pantalon-mom-mujer.webp", gender: "femenino", price: 10000, category: "pantalon", description: "pantalon mom para mujer", stock: 20 },
];

export const getProducts = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        resolve(products);
      } else {
        reject(new Error("No hay productos disponibles"));
      }
    },);
  });
};

export const getProduct = async (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);
    setTimeout(() => {
      if (!product) {
        reject(new Error(`Producto con ID ${id} no encontrado`));
      } else {
        resolve(product);
      }
    }, 2000);
  });
};
