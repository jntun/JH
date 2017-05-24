from django.contrib import admin
from .models import Army_Builder

class UserArmyBuilderAdmin(admin.ModelAdmin):
  list_display = ('owner',)

admin.site.register(Army_Builder, UserArmyBuilderAdmin)