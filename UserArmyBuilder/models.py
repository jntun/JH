from django.db import models
from Heroscape.models import User, Card

class Army_Builder(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=35, default='No name')
  description = models.TextField(default='No description')
  owner = models.ForeignKey(User, on_delete=models.CASCADE)
  cards = models.ManyToManyField(Card)