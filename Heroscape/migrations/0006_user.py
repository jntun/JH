# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Heroscape', '0005_auto_20170516_0756'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=35)),
                ('password', models.CharField(max_length=50)),
                ('first_name', models.CharField(max_length=35)),
            ],
        ),
    ]
