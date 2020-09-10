// Load jQuery from NPM
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$(".state").each(function(){
    $(this).on("click", function(e){
        var element_state_id = this.id;
        $.getJSON("../data/us_state_data_static.json", function (data) {
            var notes = [];
            $.each(data, function(idx, obj){
                if (element_state_id === obj.STATE_ID){
                    notes.push("<p>" + obj.NOTE + "</p>")
                }
            });
            $("<ul/>", {
                "class": "my-new-list",
                html: notes.join("")
            });
            $("#state_notes").html(notes)
        });
    });
});

