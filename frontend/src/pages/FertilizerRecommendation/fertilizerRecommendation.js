import style from './fertilizerRecommendation.module.scss'
import { useState } from "react";
import axios from 'axios';
import logo from '../../utils/image/ferti.svg'
import Navbar from "../../components/Navbar/navbar.js"
import { BASE_API_URL } from '../../utils/constansts';

function StrokePrediction() {

    const [temperature, setTemperature] = useState();
    const [humidity,setHumidity]= useState();
    const [moisture, setMoisture]= useState();
    const [nitrogen, setNitrogen] = useState();
    const [phosphorus,setPhosphorus]= useState();
    const [soilType, setSoilType]= useState();
    const [cropType, setCropType] = useState();
    const [prediction, setPrediction] = useState("Papaya ");
    const [flag,setFlag] = useState(false);


    function handleSubmit(e){
        e.preventDefault();
        // console.log(email, password);
        const obj = [
            `${temperature}`,
            `${humidity}`,
            `${moisture}`,
            `${nitrogen}`,
            `${phosphorus}`,
            `${soilType}`,
            `${cropType}` 
        ]
        console.log(obj)
        let s="http://localhost:8000/api/fertilizer-recommendation"
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
        if (e.target.name === "Temperature") setTemperature(e.target.value);
        if (e.target.name==="Humidity") setHumidity(e.target.value);
        if (e.target.name === "Moisture") setMoisture(e.target.value);
        if (e.target.name==="Nitrogen") setNitrogen(e.target.value);
        if (e.target.name === "Phosphorus") setPhosphorus(e.target.value);
        if (e.target.name==="SoilType") setSoilType(e.target.value);
        if (e.target.name === "CropType") setCropType(e.target.value);
    }

  return (
    <div className={style.fullpage}>
    <Navbar />
    <form onSubmit={handleSubmit} className={style.box}>
              <div className={style.left}>
                  <img className={style.img} src={logo} alt="img" />
                  {/* <img className={style.leftimag} src={logo} alt="BigCo Inc. logo"/> */}
                  <div className={style.heading}>
                        Fertilizer Recommendation
                  </div>
                  <div className={style.info}>
                        Please enter  details to know favourable fertilizer for your soil
                  </div>
              </div>

              <div className={style.right}>
                {flag?(
                  <>
                  
                <div className={style.result}>
                  <div className={style.result_heading}>
                    Recommended Fertilizer:
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
                    <tr>
                    <input className={style.forinput} type="number" name="Temperature" id="Temperature" placeholder="Temperature eg. 30" required="true" onChange={handleChange} />
                    </tr>

                    
                    <tr>
                    <input className={style.forinput} type="number" name="Humidity" id="Humidity" placeholder="Humidity eg. 60" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Moisture" id="Moisture" placeholder="Moisture eg. 40" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Nitrogen" id="Nitrogen" placeholder="Nitrogen eg. 20" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Phosphorus" id="Phosphorus" placeholder="Phosphorus eg. 15" required="true" onChange={handleChange} />
                    </tr>

                    <select className={style.selected} name = "SoilType" required="true" onChange={handleChange}>
                        <option value="none">Select Soil Type</option>
                        <option value="Soil Type_Loamy">Loamy</option>
                        <option value="Soil Type_Sandy">Sandy</option>
                        <option value="Soil Type_Clayey">Clayey</option>
                        <option value="Soil Type_Black">Black</option>
                        <option value="Soil Type_Red">Red</option>
                    </select>

                    <select className={style.selected} name = "CropType" required="true" onChange={handleChange}>
                        <option value="none">Select Crop Type</option>
                        <option value="Crop Type_Sugarcane">Sugarcane</option>
                        <option value="Crop Type_Cotton">Cotton</option>
                        <option value="Crop Type_Millets">Millets</option>
                        <option value="Crop Type_Pulses">Pulses</option>
                        <option value="Crop Type_Paddy">Paddy</option>
                        <option value="Crop Type_Wheat">Wheat</option>
                        <option value="Crop Type_Tobacco">Tobacco</option>
                        <option value="Crop Type_Oil seeds">Oil seeds</option>
                        <option value="Crop Type_Ground Nuts">Ground Nuts</option>
                        <option value="Crop Type_Barley">Barley</option>
                        <option value="Crop Type_Maize">Maize</option>
                    </select>

                    

                    

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

export default StrokePrediction;