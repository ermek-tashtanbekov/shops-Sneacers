import classes from './Card.module.scss'
const Card = ({title,price, imgUrl }) =>{
    return(
      <div className={classes.Card} className="d-flex  justify-center cards">
<div className={classes.card}>
      <div className="favorite">
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imgUrl}  alt="card"/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
 
      </div>
  
    )
}
export default Card