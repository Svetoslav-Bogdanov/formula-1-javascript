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
         
        let raceDate = formatDate(element.date);

        let raceTime = formatTime(element.time);

        scheduleList += `<div class="row">
        <div class="col-12 col-md-2 text-center text-md-start f1-border-bottom f1-border-top pt-3 pb-3 ps-0">
            <div class="badge bg-secondary" id="number-badge">
                ${element.round}
            </div>
        </div>
        <div class="col-12 col-md-8 text-center text-md-start f1-border-bottom pt-3 pb-3">
            <a href="/race-result.html?season=${element.season}&round=${element.round}" class="race__title" id="race_title">${element.raceName}</a>
            <p class="race__location" id="race_location" >${element.Circuit.circuitName}, ${element.Circuit.Location.locality}, ${element.Circuit.Location.country}</p>

        </div>
        <div class="col-12 col-md-2 f1-border-bottom f1-border-top pt-3 pb-3 pe-0 race__datetime">
            <div class="race__date" id="race_date" >
                ${raceDate}
            </div>
            <div class="race__time" id="race_time">
                ${raceTime}
            </div>
        </div>
    </div>`
    });

    document.getElementById("schedule-container").innerHTML = scheduleList;
}


function formatDate(inputDate){
        let tmp = inputDate.split("-")

       return tmp[2] + "." + tmp[1] + "." + tmp[0];
}

function formatTime(inputTime){
    let tmpTime = inputTime.split(":");

    return tmpTime[0] + ":" + tmpTime[1];

}