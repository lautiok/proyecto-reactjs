import WolfWidget from "../IcoWidget/WolfWidget";
import "./item.css";
export default function ItemListContainer({message}) {
  return (
    <>
        <div className="mensaje">{message}</div>
        <div className="ww-item"><WolfWidget /></div>
        
    </>
  )
}
