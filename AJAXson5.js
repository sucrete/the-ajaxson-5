

$(document).ready(function() {

    $("#form-gif-request").submit(fetchAndDisplayGif);
  });


function fetchAndDisplayGif(event) {


    event.preventDefault();


    var searchQuery = $("input#tag").val();
    var writnumb = $("#finishthis").val();

    if (writnumb === "") {
      $("#finishthis").attr('style', "border:#FF0000 1px solid;")
      .attr('placeholder', "")
      .attr('placeholder', "I need an answer here bud");
      return false;
    } else if (writnumb !== '5'){
      $("#finishthis").attr('style', "width: 100%; border:#FF0000 1px solid;")
      .attr('value', "")
      .attr('placeholder', "Wrong!");
      return false;
    } else if (searchQuery === ""){
      $("#tag").attr('style', "width: 100%; border:#FF0000 1px solid;")
      .attr('placeholder', "")
      .attr('placeholder', "NO GIF KEYWORD?");
      return false;
    }


    var params = {

        api_key : "dc6zaTOxFJmzC",
        tag : searchQuery + "michael jackson"
    };

    $("#loader").attr("hidden", false);
    $("#loaderboi").attr('hidden', false);

    $.ajax({
        url: 'http://api.giphy.com/v1/gifs/random',
        data: params,
        success: function(response) {
            $("#gif").attr('src', response.data.image_url);
            $("#gif").load(function() {
            $("#loader").attr("hidden", true);
            $("#loaderboi").attr('hidden', true);
            $("#finishthis").attr('style', "");

            $("#gif").attr("hidden", false);
            $("#tag").attr('style', "width: 100%;");
          });
            console.log(response);

        },
        error: function() {
            $("#loader").attr("hidden", true);
            $("#loaderboi").attr('hidden', true);
            $("#feedback").text("Sorry, could not load GIF. Try again!");
            setGifLoadedStatus(false);
          }
        });
    }

function setGifLoadedStatus(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
}
