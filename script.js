const searchLogic = (() => {
    // DOM Vars
    const searchBar = document.getElementById("searchbar");

    // DOM Methods
    searchBar.onkeydown = (event) => onKey(event);

    let engine = "google";
     
    const _search = function (term) {
        if (term === "sp:es-ddg"){
            engine = "duckduckgo";
        }
        else if(term === "sp:es-google"){
            engine = "google";
        }
        else if(term === "sp:cm"){
            clock.changeMode();
        }
        else{
            let url;
            term = term.split(" ");
            if(engine === "google"){
                url = "https://www.google.com/search?q="
            }
            else if(engine === "duckduckgo"){
                url = "https://duckduckgo.com/?q="
            };
            for (let i = 0; i < term.length; i++){
                url += term[i];
                url += "+";
            };
            window.location.href = url;
        };
    };

    const onKey = function (key) {
        if (key.keyCode === 13){
            term = searchBar.value;
            searchBar.value = "";
            searchBar.blur();
            _search(term);
        };
    };

    return{
        onKey
    };
})();

const clock = (() => {
    // DOM Vars
    const clockContainer = document.getElementById("clockContainer");

    // Setting Vars
    let twelveHour = false;

    // Naming Vars
    const days = ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    // Private Functions
    const _checkTime = function (time,checkHour=false){
        if (checkHour === true) {
            if (time > 12 && twelveHour === true) {
                time -= 12;
            };
        };

        if (time < 10) {
            time = "0" + time;
        };
        return time;
    };

    // Public Functions
    const displayTime = function () {
        let clockText = "";
        const today = new Date();
        clockText += days[today.getDay()] + ", " + months[today.getMonth()] + " " + today.getDate() + " | " ;
        let h = today.getHours();
        let m = today.getMinutes();
        clockText += _checkTime(h, true) + ":" + _checkTime(m);;
        if(twelveHour === true){
            if(h > 12){
                clockText +=  " PM";
            }
            else{
                clockText +=  " AM";
            };
        }
        clockContainer.innerText = clockText
        setTimeout(displayTime, 1000);
    };

    const changeMode = function () {
        twelveHour = !twelveHour;
    };

    return{
        displayTime,
        changeMode,
    };
})();

clock.displayTime()