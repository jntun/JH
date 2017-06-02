from django.conf.urls import url
from UserArmyBuilder import views as UserArmyBuilder
from Heroscape import views as Heroscape

urlpatterns = [
    url(r'^cards/$', Heroscape.card_list, name='card-list'),
    url(r'^cards/ability/(?P<searchAbility>\w{0,50})/$', Heroscape.card_query_ability, name='card-query-ability'),
    url(r'^cards/(?P<searchName>\w{0,50})/$', Heroscape.card_query_name, name='card-query-name'),
    url(r'^armys/$', UserArmyBuilder.ArmyList.as_view(), name='army-list'),
]