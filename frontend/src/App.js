import './App.css';
import HomePage from './pages/HomePage/homePage';
import { useEffect } from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import axios from 'axios'
import { BASE_API_URL } from './utils/constansts';
import CropRecommendation from './pages/CropRecommendation/cropRecommendation';
import StrokePrediction from './pages/StrokePrediction/strokePrediction';
import FertilizerRecommendation from './pages/FertilizerRecommendation/fertilizerRecommendation';
import LifeExpectancy from './pages/LifeExpectancy/lifeExpectancy';
import PlantDisease from './pages/PlantDisease/plantDisease';

function App() {

  // useEffect( ()=>{
  //   var head= sessionStorage.getItem("accessToken")
  //   console.log("Hii form react")
  //   if(1)
  //   {
  //       axios.post(BASE_API_URL, {header:head})
  //       .then((res) => {
  //         console.log(res);
  //       // console.log(res.data[0]);
  //       // setAllrequests(res.data);
  //       //  seal
        
  //       // console
  //       });
  //   }
  // },[]) 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={< HomePage />} />
          <Route path="/crop-recommendation"  element={< CropRecommendation />} />
          <Route path="/fertilizer-recommendation"  element={< FertilizerRecommendation />} />
          <Route path="/plant-disease"  element={< PlantDisease />} />
          <Route path="/stroke-prediction"  element={< StrokePrediction />} />
          <Route path="/life-expectancy"  element={< LifeExpectancy />} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;