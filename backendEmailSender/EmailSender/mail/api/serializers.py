from rest_framework import serializers

class sendEmailSerializers(serializers.Serializer):
    email = serializers.EmailField()
    name = serializers.CharField(max_length=50)


