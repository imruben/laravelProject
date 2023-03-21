<div>
    <script src="{{ asset('/tinymce/js/tinymce/tinymce.min.js') }}" referrerpolicy="origin"></script>
    <input id="my-file" type="file" name="my-file" style="display: none;" onchange="" />

    <script>
        tinymce.init({
            language: 'es',
            content_css: "{{asset('/css/tinymce.css')}}",
            promotion: false,
            menubar: false,
            selector: 'textarea#postcontent', // Replace this CSS selector to match the placeholder element for TinyMCE
            // auto_focus: 'element1',
            placeholder: 'Escribe tu pio aquí...',
            height: 250,
            plugins: 'code table lists image',
            toolbar: 'undo redo | image responsivefilemanager |  bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist | code ',
            // gestión de archivos
            automatic_uploads: true,
            images_reuse_filename: true,
            images_upload_url: "/uploads/",
            external_filemanager_path: "/filemanager/",
            images_upload_credentials: true,
            filemanager_title: "Gestor de archivos",
            relative_urls: false,
            // file_picker_types: "file image media",
            external_plugins: {
                responsivefilemanager: "/filemanager/plugin.min.6.0.js",
            },
        });
    </script>
</div>