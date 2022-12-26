import c from './Card.module.css';

interface Props {
  children: React.ReactNode;
}

function Card(props: Props) {
  return (
    <div className={c.Card} >
      {props.children}
    </div>
  );
}

export default Card;
