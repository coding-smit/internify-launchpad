from django.contrib import admin
from .models import Application


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'email',
        'phone',
        'role',
        'duration',
        'college',
        'status',         
        'applied_at',
    )

    list_filter = (
        'status',       
        'role',
        'duration',
        'applied_at',
    )

    search_fields = ('name', 'email', 'college')
    ordering = ('-applied_at',)
