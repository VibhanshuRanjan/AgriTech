import style from './ccard.module.scss'

function CCard(props) {
  let ccard = {
    // "margin-bottom": "2em",
    // "height":"5em",
    "width":"23em",
    "margin-top": "4em",
    "margin-right":"2em",
    "margin-left":"2em",
    "box-shadow": "1px 2px 6px rgba(98, 98, 98, 1)",
    "background-image":`url(${props.cover})`,
    "background-size": "23em 10em",
    "background-repeat": "no-repeat"

  };
  // if(props.num=="t1")mystyle.filter="hue-rotate(230deg) saturate(1.6)";
  // if(props.num=="t2")mystyle.filter="hue-rotate(230deg) saturate(1.6)";
  // if(props.num=="t3")mystyle.filter="hue-rotate(230deg) saturate(1.6)";
  // if(props.num=="t4")mystyle.filter=" hue-rotate(259deg) saturate(18)";
  // if(props.num=="t5")mystyle.filter="hue-rotate(231deg) saturate(4.6)";
  return (
    <div style={ccard} >
      {/* <img className={style.cover} src={props.cover}/> */}
      <img className={style.logo} src={props.logo}/>
      <div className={style.name}>
          {props.name}
      </div>
      <div className={style.college}>
          {props.college}
      </div>
      <div className={style.email}>
          {props.email}
      </div>
      <div className={style.cardFooter}>
      <a
          target="_blank"
          class=" btn-link btn-floating btn-lg text-blue ml-5 "
          href={`https://www.facebook.com/${props.fb}`}
          role="button"
          data-mdb-ripple-color="dark"
          className={style.anchor}><i class="fab fa-facebook-f"></i
         ></a>
         <a
         target="_blank"
           class=" btn-link btn-floating btn-lg text-blue ml-4 "
           href={`https://twitter.com/${props.twitter}`}
           role="button"
           data-mdb-ripple-color="dark"
           className={style.anchor}><i class="fab fa-twitter"></i
         ></a>
   
         <a
         target="_blank"
           class="btn btn-link btn-floating btn-lg text-danger ml-4 "
           href={`https://www.instagram.com/${props.insta}/`}
           role="button"
           data-mdb-ripple-color="dark"
           style={{color:"red"}}
           className={style.anchor}><i class="fab fa-instagram"></i
         ></a>
   
         <a
         target="_blank"
           class=" btn-link btn-floating btn-lg text-blue ml-4"
           href={`https://www.linkedin.com/in/${props.linkedIn}`}
           role="button"
           data-mdb-ripple-color="dark"
           className={style.anchor}><i class="fab fa-linkedin"></i
         ></a>
      </div>
      
      
      </div>
  );
}

export default CCard;