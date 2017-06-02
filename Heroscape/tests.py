from django.test import TestCase, RequestFactory
from . import views

class ViewTest(TestCase):

    def setUp(self):
        self.factory = RequestFactory()

    def test_card_list(self):
        request = self.factory.get('/heroscape/api/cards/')
        response = views.card_list(request)
        self.assertEqual(response.status_code, 200)

    def test_card_query_list(self):
        request = self.factory.get('/heroscape/api/cards/')
        response = views.card_query_name(request, "Marro")
        self.assertEqual(response.status_code, 200)

    def test_card_query_ability(self):
        request = self.factory.get('/heroscape/api/cards/ability/')
        response = views.card_query_name(request, "Flying")
        self.assertEqual(response.status_code, 200)