from django.urls import path
from products import views

urlpatterns = [
    path('api/products/', views.product_list, name='product-list'),
    path('api/products/<int:pk>/', views.product_detail, name='product-detail'),
    path('api/products/published/', views.product_list_published, name='product-list-published'),
]
