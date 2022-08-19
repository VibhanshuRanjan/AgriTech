/* eslint-disable no-unused-vars */
import Navbar from '../../components/Navbar/navbar';
import CCard from '../../components/CCard/ccard';
import style from './contactUs.module.scss';
import logo1 from '../../utils/image/pradhanimg.jpg';
import logo2 from '../../utils/image/vibhanshuimg.jpg';
import cover2 from '../../utils/image/vibcover.jpg';
import cover1 from '../../utils/image/pradhancover.jpg';
import logo5 from '../../utils/image/life.svg';


import { useEffect } from 'react'
function ContactUs() {

    return <div> 
        < Navbar />
        <div className={style.bg}>
            {/* <h1 className={style.heading}> Krishi Mitra </h1> */}
            <div className={style.desc}>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
            </div>
            <div className={style.row}>
                <CCard college="IIT Kharagpur" logo={logo1} cover={cover1} name="Pradhan Saini" fb="pradhansaini17" twitter="Pradhan__Saini" insta="pradhan__saini" linkedIn="pradhan-saini-15b01716b" email="pradhansaini2018@gmail.com"/>
            
                <CCard  college="IIT Kharagpur" logo={logo2} cover={cover2} name="Vibhanshu Ranjan" fb="vibhanshu.ranjan.3517" twitter="imVibhanshu15" insta="vib_ranjan" linkedIn="vibhanshu-ranjan-2668451b0" email="vibhu11iitkgp@gmail.com"/>
            
                {/* <CCard  college="IIT Kharagpur" img={logo3} name="Plant Disease" fb="pradhansaini17" twitter="Pradhan__Saini" insta="pradhan__saini" linkedIn="pradhan-saini-15b01716b" email="pradhansaini2018@gmail.com"/> */}
            </div>
            {/* <div className={style.row}>
                <CCard num="t4" img={logo4} name="Stroke Prediction" sector="Health" Applink="/stroke-prediction"/>
            
                <CCard num="t5" img={logo5} name="Life Expectancy" sector="Health" Applink="/life-expectancy"/>
            
            </div> */}
        </div>
    </div>;
}


export default ContactUs;