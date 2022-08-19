import React from 'react'
import style from "./footer.module.scss"

const Footer = () => {
  return (
      <div className={style.footer}>
          <section className={style.section} >
            <ul className={style.ul}>
                <li className={style.list_title}>Help</li>
                <li className={style.list}>Help Center</li>
                <li className={style.list}>Help Forum</li>
                <li className={style.list}>Video Tutorials</li>
            </ul>
            <ul className={style.ul}>
                <li className={style.list_title}>Community</li>
                <li className={style.list}>Blog Techie</li>
                <li className={style.list}>Medium Buzz</li>
            </ul >

            <ul className={style.ul}>
                <li className={style.list_title}>Developers</li>
                <li className={style.list}>Developer Forum</li>
                <li className={style.list}>Krishi Api</li>
            </ul>
        </section>

        <hr className={style.hr}/>

        <section className={style.section}>
            <ul className={style.ul2}>
                <li className={style.list }>Terms of Service</li>
                <div className = {style.vertical}></div>
                <li className={style.list}>Privacy</li>
                <div className = {style.vertical}></div>
                <li className={style.list}>Policy</li>
                <div className = {style.vertical}></div>
                <li className={style.list}>About Us</li>
                <div className = {style.vertical}></div>
                <li className={style.list}>Contact Us</li>
            </ul>
            
        </section>

        <div className={style.copyright}> &copy;   2022  Krishi Mitra</div>
        
      </div>
    

    

  )
}

export default Footer