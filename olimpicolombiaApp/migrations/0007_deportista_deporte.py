# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-08-23 14:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('olimpicolombiaApp', '0006_remove_deportista_deporte'),
    ]

    operations = [
        migrations.AddField(
            model_name='deportista',
            name='deporte',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='olimpicolombiaApp.Deporte'),
        ),
    ]
