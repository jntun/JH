# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Heroscape', '0006_user'),
        ('UserArmyBuilder', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='army_builder',
            name='cards',
            field=models.ManyToManyField(to='Heroscape.Card'),
        ),
    ]
