from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import status

from .serializers import sendEmailSerializers
from ..email import send_mail_verification

class sendEmailView(APIView):
    def post(self, request):
        serializer = sendEmailSerializers(data=request.data)
        if serializer.is_valid():
            context = {
                'name': serializer.data['name'],
                'message': 'i guess you get mail verification well',
                'code': 'A468AQS'
            }
            email_template = render(request, 'main.html', context)
            email_content = email_template.content.decode('utf-8')

            send_mail_verification(serializer.data['email'], email_content)
            return Response({'message': 'everything is fine!'}, status=status.HTTP_200_OK)

        return Response({'message': 'there is probleme!'}, status=status.HTTP_404_NOT_FOUND)

