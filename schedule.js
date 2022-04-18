window.onload = () =>{
    var urlParams = new URLSearchParams(location.search);
    
    var season = urlParams.get("season");

    listSeason(season);

    console.log(season);
}

function listSeason(selectedSeason) {
    fetch("https://ergast.com/api/f1/{{year}}.json".replace("{{year}}", selectedSeason))
    .then(result => result.json())
    .then(result => buildScheduleList(result.MRData.RaceTable.Races));

}

function buildScheduleList (schedule){
    let scheduleList = "";

    schedule.forEach(element => {
        scheduleList += ``
    });

    console.log(schedule);
}