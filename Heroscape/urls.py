from django.conf.urls import url, include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
  url(r'^/api/', include('api.urls')),
  url(r'^/cards/$', TemplateView.as_view(template_name='heroscape/cards.html')),
  url(r'^/armys/$', TemplateView.as_view(template_name='ArmyBuilder/index.html')),
  url(r'^/timer/$', TemplateView.as_view(template_name='heroscape/Timer.html')),
  url(r'^/test/$', TemplateView.as_view(template_name='heroscape/react.html')),
  url(r'^/$', TemplateView.as_view(template_name='heroscape/index.html'))
]