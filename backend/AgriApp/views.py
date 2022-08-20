# from django.shortcuts import render

# # Create your views here.
# def index(request):
#     return render(request, 'build/index.html')

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


import numpy as np
import pickle
import os

from .models import AgriApp
from .serializers import *
import pickle

cwd = os.path.dirname(os.path.realpath(__file__))
model2 = pickle.load(open(cwd+"/FertilizerRecommendationModel.pkl", 'rb'))
model1 = pickle.load(open(cwd+'/CropRecommendationModel.pkl', 'rb'))
model4= pickle.load(open(cwd+'/StrokePredictionModel.pkl', 'rb'))
model5=pickle.load(open(cwd+'/LifeExpectancyPredictionModel.pkl','rb'))





@api_view(['GET', 'POST'])
def crop_recommendation(request):
    if request.method == "POST":
        # print(request.data)
        int_features = [int ( x ) for x in request.data]
        print(int_features)
        final_features = [np.array(int_features)]
        prediction = model1.predict( final_features )
        output = prediction[0].capitalize()
        print(output)
        print(cwd)
        return Response(output)




@api_view(['GET', 'POST'])
def fertilizer_recommendation(request):
    if request.method == "POST":
        # print(request.data)
        temp = int(request.data[0])
        humid = int(request.data[1])
        mois = int(request.data[2])
        nit = int(request.data[3])
        pho = int(request.data[4])
        temp_array =  [temp, humid, mois, nit, pho]

        soil_type = request.data[5]
        if soil_type == 'Soil Type_Black':
            temp_array = temp_array + [1, 0, 0, 0, 0]
        elif soil_type == 'Soil Type_Clayey':
            temp_array = temp_array + [0, 1, 0, 0, 0]
        elif soil_type == 'Soil Type_Loamy':
            temp_array = temp_array + [0, 0, 1, 0, 0]
        elif soil_type == 'Soil Type_Red':
            temp_array = temp_array + [0, 0, 0, 1, 0]
        elif soil_type == 'Soil Type_Sandy':
            temp_array = temp_array + [0, 0, 0, 0, 1]

        crop_type = request.data[6]
        if crop_type == 'Crop Type_Barley':
            temp_array = temp_array + [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        elif crop_type == 'Crop Type_Cotton':
            temp_array = temp_array + [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        elif crop_type == 'Crop Type_Ground Nuts':
            temp_array = temp_array + [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
        elif crop_type == 'Crop Type_Maize':
            temp_array = temp_array + [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
        elif crop_type == 'Crop Type_Millets':
            temp_array = temp_array + [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
        elif crop_type == 'Crop Type_Oil seeds':
            temp_array = temp_array + [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
        elif crop_type == 'Crop Type_Paddy':
            temp_array = temp_array + [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
        elif crop_type == 'Crop Type_Pulses':
            temp_array = temp_array + [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
        elif crop_type == 'Crop Type_Sugarcane':
            temp_array = temp_array + [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
        elif crop_type == 'Crop Type_Tobacco':
            temp_array = temp_array + [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
        elif crop_type == 'Crop Type_Wheat':
            temp_array = temp_array + [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        print(temp_array)
        print(request.data)

        
        final_features = np.array([temp_array])
        prediction = model2.predict( final_features )
        output = prediction[0].capitalize()
        # print(output)
        # print(cwd)
        return Response(output)



@api_view(['GET', 'POST'])
def stroke_prediction(request):
    if request.method == "POST":
        temp_array=list()
        gender = request.data[5]
        if gender =='Female':
            temp_array= temp_array+[1,0]
        else:
            temp_array = temp_array + [0 , 1]

        marr = request.data[6]
        if marr=='Not Married':
            temp_array = temp_array + [1, 0]
        else:
            temp_array = temp_array + [0 , 1]

        govt = request.data[7]
        if govt == 'Govt Job':
            temp_array = temp_array + [1,0,0,0,0]
        elif govt == 'Never Worked':
            temp_array = temp_array + [0, 1, 0, 0, 0]
        elif govt == 'Private Job':
            temp_array = temp_array + [0, 0, 1, 0, 0]
        elif govt == 'Self Employed':
            temp_array = temp_array + [0, 0, 0, 1, 0]
        elif govt == 'Student/Children':
            temp_array = temp_array + [0, 0, 0, 0, 1]


        rt = request.data[8]
        if rt=='Rural':
            temp_array = temp_array + [1, 0]
        else:
            temp_array = temp_array + [0 , 1]

        smk = request.data[9]
        if smk == 'Dont want to Disclose':
            temp_array = temp_array + [1,0,0,0]
        elif smk == 'Formerly Smoked':
            temp_array = temp_array + [0, 1, 0, 0]
        elif smk == 'Never Smoked':
            temp_array = temp_array + [0, 0, 1, 0 ]
        elif smk == 'Smokes':
            temp_array = temp_array + [0, 0, 0, 1]

        age = int(request.data[0])
        hype = int(request.data[1])
        heart = int(request.data[2])
        glu = int(request.data[3])
        bmi = int(request.data[4])
        temp_array =  temp_array+[age, hype, heart, glu, bmi]


        # print(request.data)
        # int_features = [int ( x ) for x in request.data]
        # print(int_features)
        final_features = np.array([temp_array])
        prediction = model4.predict( final_features )
        output=1
        if(prediction[0]==0):
            output="You are less likely to have Stroke"
        else :
            output="You are more likely to have Stroke"
        
        # print(output)
        # print(cwd)
        return Response(output)



@api_view(['GET', 'POST'])
def life_expectancy_prediction(request):
    if request.method == "POST":
        # print(request.data)
        int_features = [int ( x ) for x in request.data]
        print(int_features)
        final_features = [np.array(int_features)]
        prediction = model5.predict( final_features )
        output = round(prediction[0],2)
        # print(prediction)
        # print(cwd)
        return Response(output)

