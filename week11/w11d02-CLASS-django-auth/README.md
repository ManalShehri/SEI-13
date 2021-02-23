# Authentication in Django

## Learning Objectives

* Implement Authentication in Django
* Make some routes require login

## Implementation

Authentication in Django is built in out of the box -- no need for Passport or Devise! We already created our first user at the beginning of the lesson with `createsuperuser`. Now, lets make our app require authentication for some views.

In the `tunr_django/urls.py` let's add a few things:

```python
from django.urls import path
from django.conf.urls import include
from django.contrib import admin
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('tunr.urls')),
    path('accounts/login/', auth_views.login, name='login'),
    path('accounts/logout/', auth_views.logout, name='logout'),
]
```
Only a few things are changing here, we are importing the auth views and then adding urls for them. This will give us all of the login/logout functionality!

Let's add a login form. Let's create a new template folder called `registration` to follow Django convention. Let's add a `tunr/templates/registration/login.html` file within it. The form should look like this:

```html
{% extends 'tunr/base.html' %}

{% block content %}
<h2>Login</h2>
<form method="post">
    {% csrf_token %} {{ form.as_p }}
    <button type="submit">Login</button>
</form>
{% endblock %}
```

Let's link to them in our `base.html`.

```html
<nav>
    <a href="/songs">Songs</a>
    <a href="/">Artists</a>
    <div class="user-info">
        {% if user.is_authenticated %}
            Welcome, {{ user.username }}
            <a href="{% url 'logout' %}">Signout</a>
        {% else %}
            <a href="{% url 'login' %}">Login</a>
        {% endif %}
    </div>
</nav>
```

The `user` variable is accessible to us in any view in Django. We just have to check if the user is authenticated to see which button we should view!

Let's edit our configuration in `tunr_django/settings.py` in order add a page for users to redirect to upon login. 

```python
LOGIN_REDIRECT_URL = 'artist_list'
```

This constant says that when a user logs in, we want them to go to the "artist_list" view.

Now let's make it a requirement to be logged in to see some views -- maybe the create, update and delete ones. In `tunr/views.py` on line two, add this line: 

```python
from django.contrib.auth.decorators import login_required
```

This will allow us to use what is called a `decorator` on our chosen functions. A decorator is a function called on a function in order to change its behavior. In this case, it adds an if statement to each function: if the user is logged in continue with the view logic, if not then redirect to the login page. Let's look at the syntax for using them:

```python
@login_required
def artist_create(request):
    if request.method == 'POST':
        form = ArtistForm(request.POST)
        if form.is_valid():
            artist = form.save()
            return redirect('artist_detail', pk=artist.pk)
    else:
        form = ArtistForm()
    return render(request, 'tunr/artist_form.html', {'form': form})
```

All we added was the `@login_required`! Add it to the five other views we want secured!
