window.onload = () =>{
    var urlParams = new URLSearchParams(location.search);
    
    var season = urlParams.get("season");

    console.log(season);
}