from django.test import TestCase, Client, RequestFactory
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
        response = views.card_query_list(request, "Marro")
        self.assertEqual(response.status_code, 200)