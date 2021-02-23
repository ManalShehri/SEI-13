from django.conf.urls import url
from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    path("artists/", views.ArtistList.as_view(), name="artists-list"),
    path("artists/<int:pk>", views.ArtistDetail.as_view(), name="artist-detail"),
    path("songs/", views.SongList.as_view(), name="songs-list"),
    path("songs/<int:pk>", views.SongDetail.as_view(), name="song-detail"),
]
