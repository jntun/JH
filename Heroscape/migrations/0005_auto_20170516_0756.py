# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-16 07:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Heroscape', '0004_auto_20170516_0431'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='card_image',
            field=models.ImageField(default='None', upload_to='Heroscape/static/card_images'),
        ),
    ]
