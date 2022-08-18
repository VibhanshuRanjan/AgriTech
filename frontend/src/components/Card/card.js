import Cards from 'react-bootstrap/Card';
import style from './card.module.scss'

function Card(props) {
  let mystyle = {
    "margin-bottom": "2em",
    "height":"5em",
    
  };
  if(props.num=="t1")mystyle.filter="hue-rotate(230deg) saturate(1.6)";
  if(props.num=="t2")mystyle.filter="hue-rotate(230deg) saturate(1.6)";
  if(props.num=="t3")mystyle.filter="hue-rotate(230deg) saturate(1.6)";
  if(props.num=="t4")mystyle.filter=" hue-rotate(259deg) saturate(18)";
  if(props.num=="t5")mystyle.filter="hue-rotate(231deg) saturate(4.6)";
  return (
    <Cards className={style.card}>
      <Cards.Body>
        
        <Cards.Img src={props.img} style={mystyle}/>
        
        <Cards.Title className={style.title}>{props.name}</Cards.Title>
        <Cards.Subtitle className="mb-3 text-muted">{props.sector}</Cards.Subtitle>
        <Cards.Link href={props.Applink} className={style.link}>Cards Link</Cards.Link>
      </Cards.Body>
    </Cards>
  );
}

export default Card;