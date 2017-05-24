# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('UserArmyBuilder', '0002_army_builder_cards'),
    ]

    operations = [
        migrations.AddField(
            model_name='army_builder',
            name='name',
            field=models.CharField(max_length=35, default='No name'),
        ),
    ]
