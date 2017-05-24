from django.db import models

# Create your models here.

class Card(models.Model):
  id = models.AutoField(primary_key=True)
  count = models.IntegerField(verbose_name='Card Count', default=1)

  unit_name = models.CharField(verbose_name='Name', max_length=100)
  faction = models.CharField(max_length=25)
  race = models.CharField(max_length=25)
  classification = models.CharField(max_length=25)
  type = models.CharField(max_length=25)
  nature = models.CharField(max_length=25)
  size = models.CharField(max_length=25)

  life = models.IntegerField()
  move = models.IntegerField()
  range = models.IntegerField()
  attack = models.IntegerField()
  defense = models.IntegerField()
  points = models.IntegerField()
  unit_count = models.SmallIntegerField(default=1)

  ability_1_name = models.CharField(max_length=50, blank=True)
  ability_1 = models.TextField(null=True, blank=True)

  ability_2_name = models.CharField(max_length=50, blank=True)
  ability_2 = models.TextField(null=True, blank=True)

  ability_3_name = models.CharField(max_length=50, blank=True)
  ability_3 = models.TextField(null=True, blank=True)

  ability_4_name = models.CharField(max_length=50, blank=True)
  ability_4 = models.TextField(null=True, blank=True)

  ability_5_name = models.CharField(max_length=50, blank=True)
  ability_5 = models.TextField(null=True, blank=True)

  card_image = models.ImageField(default='None', upload_to='Heroscape/static/card_images')

  def __str__(self):
    return self.unit_name

  class Meta:
    ordering = ('id',)

class User(models.Model):
  id = models.AutoField(primary_key=True)
  username = models.CharField(max_length=35)
  password = models.CharField(max_length=50)
  first_name = models.CharField(max_length=35)

  def __str__(self):
    return self.username
