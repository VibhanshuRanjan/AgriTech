import style from './plantDisease.module.scss'
import { useState } from "react";
import axios from 'axios';
import logo from '../../utils/image/plant.svg'
import Navbar from "../../components/Navbar/navbar.js"
import { BASE_API_URL } from '../../utils/constansts';

function CropRecommendation() {

    const [nitrogenContent, setNitrogenContent] = useState();
    const [phosphorusContent,setPhosphorusContent]= useState();
    const [pottasium, setPottasium]= useState();
    const [temperature, setTemperature] = useState();
    const [humidity,setHumidity]= useState();
    const [pH, setPh]= useState();
    const [rainfall, setRainfall] = useState();
    const [prediction, setPrediction] = useState("Papaya ");
    const [flag,setFlag] = useState(false);


    function handleSubmit(e){
        e.preventDefault();
        // console.log(email, password);
        const obj = [
            `${nitrogenContent}`,
            `${phosphorusContent}`,
            `${pottasium}`,
            `${temperature}`,
            `${humidity}`,
            `${pH}`,
            rainfall 
        ]
        console.log(obj)
        let s="http://localhost:8000/api/crop-recommendation"
        axios.post(s, obj)
          
          .then(res => {
                console.log(res.data)
                setPrediction(res.data)
                setFlag(true)
            })
          .catch(err => {
            
          });
    }

    function handleChange(e){
        if (e.target.name === "NitrogenContent") setNitrogenContent(e.target.value);
        if (e.target.name==="PhosphorusContent") setPhosphorusContent(e.target.value);
        if (e.target.name === "Pottasium") setPottasium(e.target.value);
        if (e.target.name==="Temperature") setTemperature(e.target.value);
        if (e.target.name === "Humidity") setHumidity(e.target.value);
        if (e.target.name==="pH") setPh(e.target.value);
        if (e.target.name === "Rainfall") setRainfall(e.target.value);
    }

  return (
    <div className={style.fullpage}>
    <Navbar />
    <form onSubmit={handleSubmit} className={style.box}>
              <div className={style.left}>
                  <img className={style.img} src={logo} alt="img" />
                  {/* <img className={style.leftimag} src={logo} alt="BigCo Inc. logo"/> */}
                  <div className={style.heading}>
                        Crop Recommendation
                  </div>
                  <div className={style.info}>
                        Please enter correct details to get the favorable crop
                  </div>
              </div>

              <div className={style.right}>
                {flag?(
                  <>
                  
                <div className={style.result}>
                  <div className={style.result_heading}>
                    Recommended Crop:
                  </div>
                  {prediction}
                </div>
                <div className={style.btn_back}>
                <button type="button" className={style.custom_button} onClick={()=>setFlag(false)}>Back</button>
                </div>
                </>)
                  :
                (<>
                <table className={style.table}>
                    <tr className={style.row}>
                    <input className={style.forinput} type="number" name="NitrogenContent" id="NitrogenContent" placeholder="Nitrogen Content eg. 50" required="true" onChange={handleChange} />
                    </tr>

                    
                    <tr className={style.row}>
                    <input className={style.forinput} type="number" name="PhosphorusContent" id="PhosphorusContent" placeholder="Phosphorus Content eg. 50" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Pottasium" id="Pottasium" placeholder="Pottasium(K) eg. 40" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Temperature" id="Temperature" placeholder="Temperature eg. 25" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Humidity" id="Humidity" placeholder="Humidity Level eg. 65" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="pH" id="pH" placeholder="pH value eg. 7" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Rainfall" id="Rainfall" placeholder="Rainfall eg. 100" required="true" onChange={handleChange} />
                    </tr> 

                </table>
                <div className={style.btn_block}>
                <button type="submit" className={style.custom_button}>Predict</button>
              </div>
              </>
              )}

            
            
              </div>

              
          </form>
          </div>
    
  );
}

export default CropRecommendation;