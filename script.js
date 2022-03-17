// Global Vars
let settings = {
    "searchEngine": "google",
    "clockMode": "24"
};

let links = [
    ["Link 1","#"],
    ["Link 2","#"],
    ["Link 3","#"],
    ["Link 4","#"],
    ["Link 5","#"],
    ["Link 6","#"],
    ["Link 7","#"],
    ["Link 8","#"]
]

// Searchbar Logic
const searchLogic = (() => {
    // DOM Vars
    const searchBar = document.getElementById("searchbar");
    const errorMsg = document.getElementById("errorMessage")

    // DOM Methods
    searchBar.onkeydown = (event) => onKey(event);

    const _cmdParser = function(input, startIndex){
        let parsed = "";
        for(let i = startIndex; i < input.length - 1; i++){
            parsed += input[i];
            if(i < input.length - 2){
                parsed += " ";
            };
        };
        return parsed;
    };

    const _cmdCheck = function(input){
        if(/^sp:/.test(input)){
            let errorMessage = "";
            const commandList = input.slice(3).split(" ");
            if(commandList.length > 0){
                switch(commandList[0]){
                    case "clock-mode":
                    case "cm":
                        if(settings["clockMode"] === "24"){
                            settings["clockMode"] = "12";
                        }
                        else{
                            settings["clockMode"] = "24";
                        }
                        break;

                    case "search-engine":
                    case "se":
                        switch(commandList[1]){
                            case "duckduckgo":
                            case "google":
                                settings["searchEngine"] = commandList[1];
                                break;
                            default:
                                errorMessage = "Missing or unrecognized search engine."
                                break;
                        }
                        break;

                    case "link-add":
                    case "la":
                        if(commandList.length >= 3){
                            const linkName = _cmdParser(commandList, 1);
                            errorMessage = DOMLogic.addLink(linkName, commandList[commandList.length-1]);
                        }
                        else{
                            errorMessage = 'Usage: "sp:[la || link-add] <link name> <link URL>"'
                        }
                        break;

                    case  "link-remove":
                    case "lr":
                        if(commandList.length === 2){
                            const linkIndex = parseInt(commandList[1]);
                            if(isNaN(linkIndex)){
                                errorMessage = "The link index must be a number."
                            }
                            else{
                                errorMessage = DOMLogic.removeLink(linkIndex);
                            };
                        }
                        else{
                            errorMessage = 'Usage: "sp:[lr || link-remove] <link index>"'
                        }
                        break;

                    case "link-set":
                    case "ls":
                        if(commandList.length >= 4){
                            const linkIndex = parseInt(commandList[1]);
                            if(isNaN(linkIndex)){
                                errorMessage = "The link index must be a number."
                            }
                            else{
                                const linkName = _cmdParser(commandList, 2);
                                errorMessage = DOMLogic.setLink(linkIndex, linkName, commandList[commandList.length-1]);
                            };
                        }
                        else{
                            errorMessage = 'Usage: "sp:[ls || link-set] <link index> <link name> <link URL>"'
                        }
                        break;

                    case "settings-save":
                    case "ss":
                        settingsLogic.save();
                        break;

                    case "settings-load":
                    case "sl":
                        settingsLogic.load();
                        break;

                    case "settings-reset":
                    case "sr":
                        settingsLogic.reset();
                        break;

                    case "message-clear":
                    case "mc":
                        errorMessage = "";
                        break;

                    default:
                        errorMessage = 'Command not recognized "' + commandList[0] + '".'
                        break;
                }
            }
            else{
                errorMessage = 'Usage: "sp:<command> <parameters>"'
            };
            errorMsg.innerText = errorMessage;
        }
        else{
            _search(input);
        };
    };
     
    const _search = function (term) {
        let url;
        term = term.split(" ");
        switch(settings["searchEngine"]){
            case "google":
                url = "https://www.google.com/search?q=";
                break;
            case "duckduckgo":
                url = "https://duckduckgo.com/?q=";
                break;
        }
        for (let i = 0; i < term.length; i++){
            url += term[i];
            url += "+";
        };
        window.location.href = url;
    };

    const onKey = function (key) {
        if (key.keyCode === 13){
            input = searchBar.value;
            searchBar.value = "";
            searchBar.blur();
            _cmdCheck(input);
        };
    };

    return{
        onKey
    };
})();

// Clock Logic
const clock = (() => {
    // DOM Vars
    const clockContainer = document.getElementById("clockContainer");

    // Naming Vars
    const days = ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    // Private Functions
    const _checkTime = function (time,checkHour=false){
        if (checkHour === true) {
            if (time > 12 && settings["clockMode"] === "12") {
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
        if(settings["clockMode"] === "12"){
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

    return{
        displayTime
    };
})();

// DOM Manipulator
const DOMLogic = (() => {
    //DOM Vars
    const linkContainer = document.getElementById("linkContainer");

    const refresh = function () {
        linkContainer.innerHTML = "";
        links.forEach(link => {
            newLink = document.createElement("a");
            newLink.setAttribute("tabindex","-1");
            newLink.setAttribute("href",link[1]);
            newLink.innerText = link[0];
            linkContainer.appendChild(newLink);
        });
    };

    const addLink = function (linkName, linkURL) {
        if(links.length < 8){
            links.push([linkName,linkURL]);
            refresh();
            return "";
        }
        return "Cannot add more than 8 links."
    };

    const removeLink = function (index) {
        if(links.length > 0){
            if(links.length >= index && index >= 0){
                links.splice(index - 1,1);
                refresh();
                return "";
            }
            else{
                return "Link " + index + " doesn't exist.";
            }
        };
        return "There's nothing to remove."
    };

    const setLink = function (index, linkName, linkURL) {
        if(links.length >= index && index >= 0){
            links[index-1] = [linkName, linkURL];
            refresh();
            return "";
        }
        return "Link " + index + " doesn't exist."
    };

    return{
        refresh,
        addLink,
        removeLink,
        setLink
    };
})();

// Saving and loading functions for the settings and the links
const settingsLogic = (() => {
    const save = function () {
        window.localStorage.setItem("settings",JSON.stringify(settings));
        window.localStorage.setItem("links",JSON.stringify(links));
    };
    
    const load = function () {
        settingStorage = JSON.parse(window.localStorage.getItem("settings"));
        if(settingStorage !== null){
            settings = settingStorage;
        };
        linkStorage = JSON.parse(window.localStorage.getItem("links"));
        if(linkStorage !== null){
            links = linkStorage;
        };
        DOMLogic.refresh();
    };

    const reset = function (){
        window.localStorage.clear();
        location.reload();
    }

    return{
        save,
        load,
        reset
    };
})();

// Start
settingsLogic.load();
DOMLogic.refresh();
clock.displayTime();