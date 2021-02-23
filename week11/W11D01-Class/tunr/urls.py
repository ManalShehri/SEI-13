
from django.urls import path
from . import views
urlpatterns = [
   # artists
   path('', views.artist_list, name='artist_list'),
   path('artists/<int:pk>' , views.artist_detail , name = 'artist_detail' ),
   path('artists/new', views.artist_create, name='artist_create'), # new artists
   path('artists/<int:pk>/edit', views.artist_edit, name='artist_edit'), # edit artist
   path('artists/<int:pk>/delete', views.artist_delete, name='artist_delete'), #delete artist
  

   path('home/' , views.home , name = "home" ) , 
   path('about/' , views.about) , 
   path('user/<int:id>' , views.show_one_user)
]
