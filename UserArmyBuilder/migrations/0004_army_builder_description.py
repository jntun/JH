# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('UserArmyBuilder', '0003_army_builder_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='army_builder',
            name='description',
            field=models.TextField(default='No description'),
        ),
    ]
