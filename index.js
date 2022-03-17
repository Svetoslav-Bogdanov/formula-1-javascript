window.onload = () => {
    getSeasons();


};
function getSeasons() {

    let f1years = sessionStorage.getItem("f1years");

    if (f1years !== null) {
        buildSeasonsList(f1years.split(","));
        return;
    }


    fetch('https://ergast.com/api/f1/seasons.json?limit=1000')
        .then(result => result.json())
        .then(result => {
            var seasons = result.MRData.SeasonTable.Seasons
                .map(element => element.season)
                .sort((seasonA, seasonB) => seasonB - seasonA);

            sessionStorage.setItem("f1years", seasons);

            buildSeasonsList(seasons);

        });

}

function buildSeasonsList(seasons) {
    let seasonsHtml = "";

    seasons.forEach(element => {
        seasonsHtml += `<li><a href="/schedule.html?season=${element}">${element}</a></li>`
    })

    document.getElementById("seasons-list").innerHTML = seasonsHtml;
}