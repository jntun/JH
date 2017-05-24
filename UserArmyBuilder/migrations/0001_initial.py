# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Heroscape', '0006_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Army_Builder',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('owner', models.ForeignKey(to='Heroscape.User')),
            ],
        ),
    ]
