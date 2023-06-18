
# AgriTech

A web application for agriculture and health sectors with the services of Crop/Fertilizer recommendations, Stroke and Life Expectancy predictions. Created with ReactJS for frontend and Django framework at the backend.

### Try this website - https://agritech-frontend.vercel.app/

## Requirements


## Getting Started
Follow the steps to run the application on local system-

### 1. Creating local copy of this repository
* Make a local copy of this repository in a folder by executing the following command in terminal - 
```
git clone https://github.com/VibhanshuRanjan/AgriTech.git

```
* Enter into the root directory - **`cd AgriTech`**

### 2. Run Frontend 
* Enter frontend folder - **`cd frontend`**
* Install all the dependencies required for ReactJS -
```
npm install
```
  "node_modules" folder will be created which contains all the required dependencies.
* Make sure nothing is running on port 3000, then execute -
```
npm start
```



### 3. Run Backend

* Open another terminal (make sure you are in the root directory "AgriTech") and create virtual environments(suggested for django project) by executing the command - 
```
py -m venv env
```
Directory named "env" will be created. Now all the packages/library required for the backend application will get installed to env>Lib>site-packages
* Activate the virtual environment using following command
    ```
    env\Scripts\activate
    ```
* Now to install all the required packages execute - 
    ```
    pip install -r requirements.txt
    ```
* Changes in **`backend>myproject>settings.py`** file-
      1. 
          Comment out or remove line
          ```
          from decouple import config
          ```

      2. 
          Change
          ```
          SECRET_KEY = config('SECRET_KEY')
          ```
          to
          ```
          SECRET_KEY = "md"
          ```

      3. 
          ```
          DEBUG = config('DEBUG',cast = bool)
          ```
          to

          ```
          DEBUG = True
          ```

      4. 
          Comment out or remove line
          ```
          WSGI_APPLICATION = 'myproject.wsgi.application'
          ```
      5. 
          ```
          DATABASES = {

              'default': {

                  'ENGINE': 'django.db.backends.postgresql',
                  'NAME': 'Agritech',
                  'USER': 'postgres',
                  'PASSWORD': config('PASSWORD'),
                  'HOST': 'localhost',
                  'PORT': config('PORT'),

              }

          }
          ```
          to 

          ```
          DATABASES = {
              'default': {
                  'ENGINE': 'django.db.backends.sqlite3',
                  'NAME': BASE_DIR / 'db.sqlite3',
              }
          }
          ```
* Enter into backend folder - **`cd backend`**
* Then execute the following command to finally run the server-
    ```
    python manage.py runserver
    ```
* Note---
You may still be asked to install django, djangorestframework, django-cors-headers, whitenoise etc. Whatever module is asked to install just use command- pip install <packagename>. And make sure virtual environment is activated when installing modules for backend.

* In **`frontend>src>utils>constants.js`** file change-
    ```
    export const BASE_API_URL= "https://agritech-backend.vercel.app", 
    ``` 
    to
    ```
    export const BASE_API_URL= "http://localhost:8000", 
    ```

* In **`backend>myproject>settings.py`** file change-

    ```
    CORS_ALLOWED_ORIGINS = [
        "https://agritech-backend.vercel.app/"
    ]

    ```
    to 
    ```
    CORS_ORIGIN_ALLOW_ALL = True
    ```
