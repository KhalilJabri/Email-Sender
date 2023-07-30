from django.urls import path

from .views import sendEmailView

urlpatterns = [
    path('send/', sendEmailView.as_view(), name='send-mail'),
]