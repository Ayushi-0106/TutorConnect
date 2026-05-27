from django.contrib import admin
from .models import Review

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['id', 'student', 'tutor', 'rating', 'comment', 'created_at']
    list_filter = ['rating', 'created_at']
    search_fields = ['student__username', 'tutor__name', 'comment']
    readonly_fields = ['created_at']