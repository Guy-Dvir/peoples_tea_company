const url = "https://www.peoples-tea.co.uk/_functions/brexitBrewPercentages";

document.addEventListener("DOMContentLoaded", function() {
  fetch(url, {
    method: "get",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  })
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
    .catch(err => {
      console.error(err);
    });
});
