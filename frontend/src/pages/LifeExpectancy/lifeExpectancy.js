import style from './lifeExpectancy.module.scss'
import { useState } from "react";
import axios from 'axios';
import logo from '../../utils/image/life.svg'
import Navbar from "../../components/Navbar/navbar.js"
import { BASE_API_URL } from '../../utils/constants';

function CropRecommendation() {

    const [status, setStatus] = useState();
    const [adultMortality,setAdultMortality]= useState();
    const [alcohol, setAlcohol]= useState();
    const [expenditure, setExpenditure] = useState();
    const [hepatitisB,setHepatitisB]= useState();
    const [measles, setMeasles]= useState();
    const [BMI, setBMI] = useState();
    const [under5Deaths, setUnder5Deaths] = useState();
    const [polio,setPolio] = useState();
    const [totalExpenditure,setTotalExpenditure]= useState();
    const [diphtheria, setDiphtheria]= useState();
    const [HIV, setHIV] = useState();
    const [GDP, setGDP] = useState();
    const [population,setPopulation] = useState();
    const [prevalence10, setPrevalence10]= useState();
    const [prevalence5, setPrevalence5] = useState();
    const [incomeComposition, setIncomeComposition] = useState();
    const [schooling,setSchooling] = useState();

    const [prediction,setPrediction]=useState();
    const [flag,setFlag]=useState(false);

    function handleSubmit(e){
        e.preventDefault();
        // console.log(email, password);
        const obj = [
          status,adultMortality,alcohol,expenditure,hepatitisB,measles,BMI,under5Deaths,polio,totalExpenditure,diphtheria,HIV,
          GDP,population,prevalence10,prevalence5,incomeComposition,schooling
        ]
        console.log(obj)
        let s=`${BASE_API_URL}/api/life-expectancy-prediction`
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
        if (e.target.name === "Status") setStatus(e.target.value);
        if (e.target.name === "AdultMortality") setAdultMortality(e.target.value);
        if (e.target.name === "Alcohol") setAlcohol(e.target.value);
        if (e.target.name === "Expenditure") setExpenditure(e.target.value);
        if (e.target.name === "HepatitisB") setHepatitisB(e.target.value);
        if (e.target.name === "Measles") setMeasles(e.target.value);
        if (e.target.name === "BMI") setBMI(e.target.value);
        if (e.target.name === "Under5Deaths") setUnder5Deaths(e.target.value);
        if (e.target.name === "Polio") setPolio(e.target.value);
        if (e.target.name === "TotalExpenditure") setTotalExpenditure(e.target.value);
        if (e.target.name === "Diphtheria") setDiphtheria(e.target.value);
        if (e.target.name === "HIV") setHIV(e.target.value);
        if (e.target.name === "GDP") setGDP(e.target.value);
        if (e.target.name === "Population") setPopulation(e.target.value);
        if (e.target.name === "Prevalence10") setPrevalence10(e.target.value);
        if (e.target.name === "Prevalence5") setPrevalence5(e.target.value);
        if (e.target.name === "IncomeComposition") setIncomeComposition(e.target.value);
        if (e.target.name === "Schooling") setSchooling(e.target.value);
    }

  return (
    <div className={style.fullpage}>
    <Navbar />
    <form onSubmit={handleSubmit} className={style.box}>
              <div className={style.left}>
                  <img className={style.img} src={logo} alt="img" />
                  {/* <img className={style.leftimag} src={logo} alt="BigCo Inc. logo"/> */}
                  <div className={style.heading}>
                        Life Expectancy Prediction
                  </div>
                  <div className={style.info}>
                        Please enter correct details to predict your life expectancy
                  </div>
              </div>

              <div className={style.right}>
                {flag?(
                  <>
                  
                <div className={style.result}>
                  <div className={style.result_heading}>
                  Your life expectancy is :
                  </div>
                  {prediction} &nbsp; years
                  </div>
                  
                <div className={style.btn_back}>
                <button type="button" className={style.custom_button} onClick={()=>setFlag(false)}>Back</button>
                </div>
                </>)
                  :
                (<>
                <table className={style.table}>
                    <tr >
                    <input className={style.forinput} type="number" name="Status" id="Status" placeholder="*STATUS* - Developing : 0 & Developed : 1" required="true" onChange={handleChange} />
                    </tr>

                    
                    <tr >
                    <input className={style.forinput} type="number" name="AdultMortality" id="AdultMortality" placeholder="*ADULT MORTALITY* - probability of dying between 15-60 years/1000 population" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Alcohol" id="Alcohol" placeholder="*ALCOHOL* - recorded per capita (15+) consumption (in litres of pure alcohol) eg. 0.01" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Expenditure" id="Expenditure" placeholder="% EXPENDITURE on health as a percentage of GDP per capita" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="HepatitisB" id="HepatitisB" placeholder="*HEPATITIS B* (HepB) immunization coverage among 1-year-olds (%)" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Measles" id="Measles" placeholder="*MEASLES* - Number of reported cases per 1000 population" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="BMI" id="BMI" placeholder="*BMI* eg. 22" required="true" onChange={handleChange} />
                    </tr>
                    <tr >
                    <input className={style.forinput} type="number" name="Under5Deaths" id="Under5Deaths" placeholder="*UNDER 5 DEATHS* -Number of under-five deaths per 1000 population" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Polio" id="Polio" placeholder="*POLIO* - (Pol3) immunization coverage among 1-year-olds (%)" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="TotalExpenditure" id="TotalExpenditure" placeholder="*TOTAL EXPENDITURE* - Govt expenses on health as a % of total govt expenses " required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Diphtheria" id="Diphtheria" placeholder="*DIPHTHERIA* - immunization coverage among 1-year-olds (%)" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="HIV" id="HIV" placeholder="*HIV/AIDS* - Deaths per 1000 live births HIV/AIDS (0-4 years)" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="GDP" id="GDP" placeholder="*GDP* in USD eg. 8000" required="true" onChange={handleChange} />
                    </tr>
                    <tr >
                    <input className={style.forinput} type="number" name="Population" id="Population" placeholder="*POPULATION* - Population of your country " required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Prevalence10" id="Prevalence10" placeholder="*Prevalence of thinness among children* for Age 10-19 (%)" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Prevalence5" id="Prevalence5" placeholder="*Prevalence of thinness among children* for Age 5-9 (%)" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="IncomeComposition" id="IncomeComposition" placeholder="HDI in terms of *Income composition of resources* (index 0 to 1)" required="true" onChange={handleChange} />
                    </tr>

                    <tr>
                    <input className={style.forinput} type="number" name="Schooling" id="Schooling" placeholder="*SCHOOLING* - Number of years of Schooling(years) eg 10" required="true" onChange={handleChange} />
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