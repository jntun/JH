from django.conf.urls import url
from UserArmyBuilder import views as UserArmyBuilder
from Heroscape import views as Heroscape

urlpatterns = [
    url(r'^cards/$', Heroscape.card_list, name='card-list'),
    url(r'^cards/(?P<searchName>\w{0,50})/$', Heroscape.card_query_list, name='card-query'),
    url(r'^armys/$', UserArmyBuilder.ArmyList.as_view(), name='army-list'),
]