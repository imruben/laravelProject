<div>
    <script src="{{ asset('/tinymce/js/tinymce/tinymce.min.js') }}" referrerpolicy="origin"></script>
    <input id="my-file" type="file" name="my-file" style="display: none;" onchange="" />

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
            },
            file_picker_callback: function(callback, value, meta) {
                if (meta.filetype == 'image') {
                    var input = document.getElementById('my-file');
                    input.click();
                    input.onchange = function() {
                        var file = input.files[0];
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            callback(e.target.result, {
                                alt: file.name
                            });
                        };
                        reader.readAsDataURL(file);
                    };
                }
            }
        });
    </script>
</div>