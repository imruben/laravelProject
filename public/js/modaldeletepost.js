$(".remove-pio-button").each(function () {
    $(this).click(function () {
        const id = $(this).data("id");
        $("#modal-delete-pio__accept").data("id", id);
    });
});

$("#modal-delete-pio__accept").click(function () {
    var id = $(this).data("id");
    var token = $("meta[name='csrf-token']").attr("content");
    $.ajax({
        url: "pios/" + id,
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
