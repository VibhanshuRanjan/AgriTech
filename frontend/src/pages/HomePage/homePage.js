/* eslint-disable no-unused-vars */
import Navbar from '../../components/Navbar/navbar';
import Card from '../../components/Card/card';
import style from './homePage.module.scss';
import logo1 from '../../utils/image/crimg.svg';
import logo2 from '../../utils/image/ferti.svg';
import logo3 from '../../utils/image/plant.svg';
import logo4 from '../../utils/image/stroke.svg';
import logo5 from '../../utils/image/life.svg';


import { useEffect } from 'react'
function HomePage() {

    return <div> 
        < Navbar />
        <div className={style.bg}>
            <h1 className={style.heading}> Krishi Mitra </h1>
            <div className={style.desc}>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
            </div>
            <div className={style.row}>
                <Card num="t1" img={logo1} name="Crop Recommendation" sector="Agriculture" Applink="/crop-recommendation"/>
            
                <Card num="t2" img={logo2} name="Fertilizer Recommendation" sector="Agriculture" Applink="/fertilizer-recommendation"/>
            
                <Card num="t3" img={logo3} name="Plant Disease" sector="Agriculture" Applink="/plant-disease"/>
            </div>
            <div className={style.row}>
                <Card num="t4" img={logo4} name="Stroke Prediction" sector="Health" Applink="/stroke-prediction"/>
            
                <Card num="t5" img={logo5} name="Life Expectancy" sector="Health" Applink="/life-expectancy"/>
            
            </div>
        </div>
    </div>;
}


export default HomePage;