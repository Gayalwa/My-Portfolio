from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('', include('portfolio.urls')),  
]

# Serves static and media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    # This is the fix - serve from the actual static directory
    urlpatterns += static(settings.STATIC_URL, document_root=settings.BASE_DIR / 'portfolio' / 'static')