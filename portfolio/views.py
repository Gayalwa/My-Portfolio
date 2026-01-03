# portfolio/views.py
from django.shortcuts import render, redirect
from django.core.mail import send_mail

def booking_submit(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        service = request.POST.get('service')
        preferred_date = request.POST.get('preferred_date')
        location = request.POST.get('location')
        message = request.POST.get('message')
        
        # Send email
        send_mail(
            f'New Booking from {name}',
            f'Service: {service}\n\nContact:\n{name}\n{email}\n{phone}\n\nDate: {preferred_date}\nLocation: {location}\n\nMessage:\n{message}',
            'noreply@mkphotography.com',
            ['makalizudesmond@gmail.com'],
        )
        
        return redirect('home')  # Change to your home page URL name
    
    return redirect('home')

def home(request):
    return render(request, 'portfolio/index.html')

def gallery(request):
    return render(request, 'portfolio/gallery.html')

def about(request):
    return render(request, 'portfolio/about.html')

def contact(request):
    return render(request, 'portfolio/contact.html')


