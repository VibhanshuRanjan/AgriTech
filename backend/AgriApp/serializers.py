from rest_framework import serializers
from .models import AgriApp

class AgriAppSerializer(serializers.ModelSerializer):

    class Meta:
        model = AgriApp
        fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')