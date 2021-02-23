from django.urls import path , include
from . import views




urlpatterns = [

    path('tasks/' , views.showAll , name ="showall"),
    path('tasks/<int:pk>' , views.showOne , name="showone"),
    path('tasks/create' , views.createTask , name= "createTask"),
    path('tasks/<int:pk>/update' , views.updateTask , name= "updateTask"),
    path('tasks/<int:pk>/delete' , views.deleteTask , name= "deleteTask"),

]