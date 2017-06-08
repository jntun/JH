from django.test import TestCase, RequestFactory
from . import views

class ViewTest(TestCase):
    def setUp(self):
        self.factory = RequestFactory()

    def test_get_user_info(self):
        request = self.factory.get('/heroscape/api/user')
        response = views.get_user_info(request)
        self.assertEqual(response.status_code, 200)