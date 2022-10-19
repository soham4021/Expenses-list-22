import "./Card.css";

const Card = (props) => {
  // This is going to be a custom component defined by us, so that we can use it as a html element to wrap around certain things, those things can be then visible by defining props.children inside the div returned by this card. But to make the classes defined inside those children make an effect with their styles, we have to manually set those classes inside the className of the div returned by this card, see below

  const classes = "card " + props.className;
  //props.className will contain those classes that are used inside the children wrapped inside the Card element and 'card' class has some style common to expenses and expense-item classes so that duplicate code is not written a lot
  //#40

  return <div className={classes}>{props.children}</div>;
};

export default Card;
