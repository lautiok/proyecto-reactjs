import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

const products = [
  { name: "Remera Clásica para Caballero", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fremera-clasic-hombre.webp?alt=media&token=c5540b20-fbc1-42e2-baf9-3cec3ec44bae", gender: "masculino", price: 2000, category: "remera", description: "Camisa clásica de alta calidad para hombre", stock: 10 },
  { name: "Pantalón Claro de Vestir para Hombre", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fpantalon-mom-hombre-claro.webp?alt=media&token=415ca6eb-023a-46ae-85dd-8c364ca35a70", gender: "masculino", price: 6000, category: "pantalon", description: "Pantalón claro elegante para hombre", stock: 30 },
  { name: "Remera Oversize de Diseñador para Hombre", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fremera-over-hombre.webp?alt=media&token=532a3c48-7b4b-489f-8b2e-4089f54d7f11", gender: "masculino", price: 4000, category: "remera", description: "Camisa oversize de última moda para hombre", stock: 20 },
  { name: "Pantalón Negro de Estilo Ejecutivo para Hombre", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fpantalon-mom-hombre.webp?alt=media&token=a92d9c3e-f893-4455-bc7f-07ddf616565f", gender: "masculino", price: 6000, category: "pantalon", description: "Pantalón negro de alta gama para hombre", stock: 20 },
  { name: "Blusa Clásica Exclusiva para Mujer", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fremera-clasic-mujer.webp?alt=media&token=8a8d2faa-1a85-4be0-a9e6-2b35b2c3743d", gender: "femenino", price: 8000, category: "remera", description: "Blusa clásica de diseño exclusivo para mujer", stock: 40 },
  { name: "Pantalón Clásico de Alta Costura para Mujer", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fpantalon-clasic-mujer.webp?alt=media&token=a6f1d025-0595-4e5a-a9f0-696153ff28ef", gender: "femenino", price: 10000, category: "pantalon", description: "Pantalón clásico de alta costura para mujer", stock: 20 },
  { name: "Blusa Clara de Elegancia Femenina", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fremera-clara-mujer.webp?alt=media&token=e08710cb-2807-4f6d-ba30-ec44a873ed1b", gender: "femenino", price: 8000, category: "remera", description: "Blusa clara con estilo para mujer", stock: 40 },
  { name: "Pantalón Mom para Mujer con Elegancia Moderna", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fpantalon-mom-mujer.webp?alt=media&token=2ff24b19-5a8d-4c3c-b523-04a16393de4a", gender: "femenino", price: 10000, category: "pantalon", description: "Pantalón Mom con diseño moderno para mujer", stock: 20 },
  { name: "Pantalon Hombre gabardina", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fpantalon-gabardina-hombre.webp?alt=media&token=df93d313-def8-427d-85f5-c15d43f1d192", gender: "masculino", price: 7000, category: "pantalon", description: "Pantalón de garbardina para hombre", stock: 10 },
  { name: "Joggin Mujer Rosa", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fjoggin-mujer.webp?alt=media&token=d8511b19-424a-46de-ab5e-99c5dcdfb104", gender: "femenino", price: 8000, category: "pantalon", description: "Pantalón con diseño moderno rosa para mujer", stock: 20 },
  { name: "Camisa hombre", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fcamisa-hombre.webp?alt=media&token=d5e883a4-4163-41e8-8d12-862834746d22", gender: "masculino", price: 30000, category: "camisa", description: "camiza para hombre", stock: 20 },
  { name: "Buzo Oversize Canguro Che Chaval", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fbuzo-oversize-hombre.webp?alt=media&token=9cffd12b-951b-4012-a08b-6021e2d3922e", gender: "masculino", price: 20000, category: "Buzo", description: "Buzo oversize de alta calidad para hombre", stock: 20 },
  { name: "Buzo Washed con Estilo Vanguardista para Mujer", img: "https://firebasestorage.googleapis.com/v0/b/coder-projects.appspot.com/o/products%2Fbuzo-oversize-mujer.webp?alt=media&token=1dbd40ae-356a-4724-bb1b-c2c65c5f396c", gender: "Femenino", price: 29000, category: "Buzo", description: "Buzo oversize con diseño vanguardista para mujer", stock: 10 },
];


export const AddDb = () => {
  products.forEach((product) => {
    if (isValidProduct(product)) {
      addDoc(collection(db, "products"), product);
    }
  });
};

function isValidProduct(product) {
  const requiredFields = ['name', 'img', 'gender', 'price', 'category', 'stock'];
  return requiredFields.every(field => product.hasOwnProperty(field) && product[field]);
}