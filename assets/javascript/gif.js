var celebAdvice = [];
$("#adviceButton").on("click", function () {
    console.log("click");
    var queryURL = "https://api.adviceslip.com/advice";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        data = JSON.parse(response);
        console.log(data.slip.advice);
        $("#showAdvice").text(data.slip.advice);
        $(".getAdvice").show(response.data.slip);
        celebAdvice.push(response.data.slip);
        $("#showAdvice").html(celebAdvice[0]);
        alert(response.data);
    });
})