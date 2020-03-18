from django.contrib import admin
from django.conf.urls import url, include

urlpatterns = [
    url(r'^manager/', include('manager.urls')),
    url(r'^admin/', admin.site.urls),
]
