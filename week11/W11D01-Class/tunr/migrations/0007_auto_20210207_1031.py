# Generated by Django 3.1.5 on 2021-02-07 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tunr', '0006_song'),
    ]

    operations = [
        migrations.AddField(
            model_name='artist',
            name='age',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='song',
            name='name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
