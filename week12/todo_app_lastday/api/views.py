from django.shortcuts import render
from rest_framework.response import Response
# Create your views here.
from rest_framework.decorators import api_view
from .sereliaizer import TaskSerializer
from .models import Task


@api_view(['GET'])
def showAll(reqeuest):
	tasks = Task.objects.all().order_by('completed')
	serializer = TaskSerializer(tasks, many=True)
	return Response(serializer.data)


@api_view(['GET'])
def showOne(reqeuest , pk):
    task = Task.objects.get(pk =pk)
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

@api_view(["POST"])
def createTask(reqeuest):
    task = TaskSerializer(data= reqeuest.data)
    print (task)
    if task.is_valid():
        task.save()
       
    return Response({"msg" : "task was added"})


@api_view(['PUT'])
def updateTask(reqeuest , pk):
    task = Task.objects.get(pk = pk)
    serializer = TaskSerializer(data=reqeuest.data , instance=task)
    if serializer.is_valid():
        serializer.save()

    return Response({'msg' : "task is uptaded"})


@api_view(['DELETE'])
def deleteTask(reqeuest , pk):
      task = Task.objects.get(pk = pk)
      task.delete()
      return Response({'msg' : "task is deleted"})

