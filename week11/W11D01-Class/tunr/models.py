from django.db import models

# Create your models here.
class Artist(models.Model):
    name = models.CharField( max_length=50)
    nationality = models.CharField (max_length=50)
    photo_url = models.TextField( verbose_name="your photo")
    age = models.IntegerField(null = True)


    def __str__(self):
        return self.name
    pass


class Song(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='songs')
    name = models.CharField( max_length=50 ,null=True)
    

    def __str__(self):
        return self.name