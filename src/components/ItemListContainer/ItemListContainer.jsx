import style from"./item.css";
export default function ItemListContainer({message}) {
  return (
    <>
        <div className="mensaje">{message}</div>
        <div className="logo-item"><img  src="/img/wolf-logo.png" alt="logo-item" /></div>
    </>
  )
}
