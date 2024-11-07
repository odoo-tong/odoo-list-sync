{
    'name': "Web List Sync",
    'description': """
Web List Sync Demo
    """,
    'depends': ['sale'],
    'data': [
        "views/sale_order_views.xml"
    ],
    'assets': {
        'web.assets_backend': [
            'web_list_sync/static/src/views/list/list_renderer.js',
        ],
    },
    'license': 'OEEL-1',
}
