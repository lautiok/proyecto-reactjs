import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div className="row d-flex align-items-stretch mt-2">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <Item {...product} />
        </div>
      ))}
    </div>
  );
};