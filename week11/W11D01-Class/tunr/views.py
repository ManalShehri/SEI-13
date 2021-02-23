from django.shortcuts import render , redirect
from django.http import HttpResponse , JsonResponse
# Create your views here.
# 
from .form import ArtistForm

from .models import Artist 
def home(request):
    name = "Sarah"
    return render(request , 'home.html' , {'name' : name} )


  

def about(request):

    return  HttpResponse("<h1>hello from about</h1>")



def show_one_user(requset , id):
    try:
        artist = Artist.objects.get(id=id)
    except Exception:
        return HttpResponse("page not found")

    return  HttpResponse(f"<h1>hello from name : {artist} , {artist.age} , {artist.nationality} </h1>")

# show all artists
def artist_list(request):
    artists= Artist.objects.all()
    return render(request , 'tunr/artist_list.html' , {'artists' : artists})


# show one artist
def artist_detail(request, pk):
    artist = Artist.objects.get(id=pk)
    return render(request, 'tunr/artist_detail.html', {'artist': artist})

# create artist
def artist_create(request):
   
    if (request.method == "POST"): # post('/arists/
        form = ArtistForm(request.POST)
        if form.is_valid():
            artist = form.save()
            return redirect('artist_detail', pk=artist.id)
    else: # get('/arists/new')

        form = ArtistForm()
        return render(request , 'tunr/artist_form.html' , {"form" : form})


# edit artist
def artist_edit(request,pk):
    artist = Artist.objects.get(pk = pk)
    if (request.method == "POST"): 
        form = ArtistForm(request.POST , instance=artist)
        if form.is_valid():
            artist = form.save()
            return redirect('artist_detail', pk=artist.id)
    else: 
        form = ArtistForm(instance=artist)
        return render(request , 'tunr/artist_form.html' , {"form" : form})

# delete artist
def artist_delete(request, pk):
    Artist.objects.get(id=pk).delete()
    return redirect('artist_list')