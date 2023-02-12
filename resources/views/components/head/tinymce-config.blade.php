<div>
    <script src="{{ asset('/tinymce/js/tinymce/tinymce.min.js') }}" referrerpolicy="origin"></script>
    <script>
        tinymce.init({
            content_css: "{{asset('/css/tinymce.css')}}",
            promotion: false,
            menubar: true,
            selector: 'textarea#message', // Replace this CSS selector to match the placeholder element for TinyMCE
            plugins: 'code table lists image responsivefilemanager',
            toolbar: 'undo redo | image |  bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist | code | responsivefilemanager ',
            external_plugins: {
                "responsivefilemanager": "{{ asset('/tinymce/js/tinymce/plugins/responsivefilemanager/plugin.min.js')}}",
                "filemanager": "{{ asset('/tinymce/js/tinymce/plugins/responsivefilemanager/plugin.min.js')}}"
            }
        });
    </script>
</div>