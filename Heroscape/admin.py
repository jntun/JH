from django.contrib import admin
from .models import Card, User

class CardAdmin(admin.ModelAdmin):
  list_display = ('id', 'unit_name', 'count', 'points')
  search_fields = ('unit_name', 'faction', 'race', 'type', 'classification', 'nature', 'size', 'ability_1_name', 'ability_2_name', 'ability_3_name')
  ordering = ('points',)

class UserAdmin(admin.ModelAdmin):
  list_display = ('id', 'username')
  search_fields = ('username',)

admin.site.register(Card, CardAdmin)
admin.site.register(User, UserAdmin)