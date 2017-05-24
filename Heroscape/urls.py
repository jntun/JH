from django.conf.urls import url
from django.views.generic import TemplateView
from . import views
from UserArmyBuilder import views as ArmyViews

urlpatterns = [
  url(r'^/api/cards$', views.CardList.as_view(), name='card-list'),
  url(r'^/api/armys$', ArmyViews.ArmyList.as_view(), name='army-list'),
  url(r'^/cards/$', TemplateView.as_view(template_name='heroscape/cards.html')),
  url(r'^/builder/$', TemplateView.as_view(template_name='ArmyBuilder/index.html')),
  url(r'^/timer/$', TemplateView.as_view(template_name='heroscape/Timer.html')),
  url(r'^/$', TemplateView.as_view(template_name='heroscape/index.html'))
]