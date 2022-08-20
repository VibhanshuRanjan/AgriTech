import style from './strokePrediction.module.scss'
import { useState } from "react";
import axios from 'axios';
import logo from '../../utils/image/stroke.svg'
import Navbar from "../../components/Navbar/navbar.js"
import { BASE_API_URL } from '../../utils/constants';

function StrokePrediction() {

    const [age, setAge] = useState();
    const [hypertension,setHypertension]= useState();
    const [heartDisease, setHeartDisease]= useState();
    const [glucoseLevel, setGlucoseLevel] = useState();
    const [BMI,setBMI]= useState();
    const [gender, setGender]= useState();
    const [maritalStatus, setMaritalStatus] = useState();
    const [workType,setWorkType]= useState();
    const [residenceType, setResidenceType]= useState();
    const [smokingStatus, setSmokingStatus] = useState();
    const [prediction, setPrediction] = useState("");
    const [flag,setFlag] = useState(false);


    function handleSubmit(e){
        e.preventDefault();
        // console.log(email, password);
        const obj = [
            `${age}`,
            `${hypertension}`,
            `${heartDisease}`,
            `${glucoseLevel}`,
            `${BMI}`,
            `${gender}`,
            `${maritalStatus}`,
            `${workType}`,
            `${residenceType}`,
            `${smokingStatus}`,
        ]
        console.log(obj)
        let s=`${BASE_API_URL}/api/stroke-prediction`
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
        if (e.target.name === "Age") setAge(e.target.value);
        if (e.target.name==="Hypertension") setHypertension(e.target.value);
        if (e.target.name === "HeartDisease") setHeartDisease(e.target.value);
        if (e.target.name==="GlucoseLevel") setGlucoseLevel(e.target.value);
        if (e.target.name === "BMI") setBMI(e.target.value);
        if (e.target.name==="Gender") setGender(e.target.value);
        if (e.target.name === "MaritalStatus") setMaritalStatus(e.target.value);
        if (e.target.name === "WorkType") setWorkType(e.target.value);
        if (e.target.name==="ResidenceType") setResidenceType(e.target.value);
        if (e.target.name === "SmokingStatus") setSmokingStatus(e.target.value);
    }

  return (
    <div className={style.fullpage}>
    <Navbar />
    <form onSubmit={handleSubmit} className={style.box}>
              <div className={style.left}>
                  <img className={style.img} src={logo} alt="img" />
                  {/* <img className={style.leftimag} src={logo} alt="BigCo Inc. logo"/> */}
                  <div className={style.heading}>
                        Stroke Prediction
                  </div>
                  <div className={style.info}>
                        Please enter correct details
                  </div>
              </div>

              <div className={style.right}>
                {flag?(
                  <>
                  
                <div className={style.result}>
                  <div className={style.result_heading}>
                    Result:
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
                    <input className={style.forinput} type="number" name="Age" id="Age" placeholder="Age of the patient" required="true" onChange={handleChange} />
                    </tr>

                    
                    <tr>
                    <input className={style.forinput} type="bool" name="Hypertension" id="Hypertension" placeholder="Hypertension (0:No and 1:Yes)" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="bool" name="HeartDisease" id="HeartDisease" placeholder="Heart Disease (0:No and 1:Yes)" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="GlucoseLevel" id="GlucoseLevel" placeholder="Glucose level eg. 100" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="BMI" id="BMI" placeholder="BMI eg. 25" required="true" onChange={handleChange} />
                    </tr>

                    <select className={style.selected} name = "Gender" required="true" onChange={handleChange} >
                        <option   selected disabled>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <select className={style.selected} name = "MaritalStatus" required="true" onChange={handleChange} >
                        <option   selected disabled>Marital Status</option>
                        <option>Married</option>
                        <option>Not Married</option>
                    </select>

                    <select className={style.selected} name = "WorkType" required="true" onChange={handleChange} >
                        <option   selected disabled>Work Type</option>
                        <option>Govt Job</option>
                        <option>Never Worked</option>
                        <option>Private Job</option>
                        <option>Self Employed</option>
                        <option>Student/Children</option>
                    </select>

                    <select className={style.selected} name = "ResidenceType" required="true" onChange={handleChange} >
                        <option   selected disabled>Residence Type</option>
                        <option>Rural</option>
                        <option>Urban</option>
                    </select>
                    
                    <select className={style.selected} name = "SmokingStatus" required="true" onChange={handleChange} >
                        <option   selected disabled>Smoking Status</option>
                        <option>Dont want to Disclose</option>
                        <option>Formerly Smoked</option>
                        <option>Never Smoked</option>
                        <option>Smokes</option>
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