$(".remove-post-button").each(function () {
    $(this).click(function () {
        const id = $(this).data("id");
        $("#modal-delete-post").data("id", id);
    });
});

$("#modal-delete-post").click(function () {
    var id = $(this).data("id");
    var token = $("meta[name='csrf-token']").attr("content");
    $.ajax({
        url: "posts/" + id,
        type: "DELETE",
        data: {
            id: id,
            _token: token,
        },
        success: function () {
            console.log("borrao");
            location.reload();
        },
    });
});
