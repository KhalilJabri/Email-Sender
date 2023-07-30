from django.core.mail import send_mail, EmailMessage
from django.conf import settings

def send_mail_verification(email, content):
    emailFrom = settings.EMAIL_HOST
    subject = "Email Verification"
    # send_mail(subject, content, emailFrom, [email])
    email = EmailMessage(
        subject,
        content,
        emailFrom,
        [email]
    )
    email.content_subtype = 'html'  # Set the content type as HTML
    email.send()