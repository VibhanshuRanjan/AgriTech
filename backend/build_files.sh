
echo "BUILD START"
pip install -r requirements.txt
python manage.py collectstatic 
echo "BUILD END"
