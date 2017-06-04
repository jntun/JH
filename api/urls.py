from django.conf.urls import url
from UserArmyBuilder import views as UserArmyBuilder
from Heroscape import views as Heroscape



urlpatterns = [
    url(r'^cards/$', Heroscape.card_list, name='card-list'),
    url(r'^cards/ability/(?P<searchAbility>[\w\s]+)/$', Heroscape.card_query_ability, name='card-query-ability'),
    url(r'^cards/classification/(?P<searchClass>[\w\s]+)/$', Heroscape.card_query_classification, name='card-query-classification'),
    url(r'^cards/type/(?P<searchType>[\w\s]+)/$', Heroscape.card_query_type, name='card-query-type'),
    url(r'^cards/(?P<searchName>[\w\s.]+)/$', Heroscape.card_query_name, name='card-query-name'),
    url(r'^armys/$', UserArmyBuilder.ArmyList.as_view(), name='army-list'),
]