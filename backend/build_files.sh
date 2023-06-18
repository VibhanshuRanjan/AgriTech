
echo "BUILD START"
pip install -r requirements.txt --root-user-action=ignore
python manage.py collectstatic --noinput --clear
echo "BUILD END"
