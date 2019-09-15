/*
(function() {
    console.log("We're changing the world here, baby doll!");
    div = document.getElementsByTagName("div");
    div[0].style.backgroundColor = "lightpink";
})();
*/

function getQuestsStats() {

    console.log("Counting quests...");
    labels = document.getElementsByClassName("ui blue horizontal label");

    var totalQuests = labels.length;
    var endedQuests = 0;
    var pendingQuests = 0;

    for (let i = 0; i < labels.length; i++) {

        let labelContent = labels[i].textContent;

        for (let j = 0; j < labelContent.length; j++) {            
            if (labelContent[j] == "T") {
                endedQuests += 1;
            } else if (labelContent[j] == "E") {
                pendingQuests += 1;
            }
        }

    }
        console.log("Nombre de quêtes au total : " + totalQuests);
        console.log("Nombre de quêtes terminées : " + endedQuests);
        console.log("Nombre de quêtes en cours : " + pendingQuests);
        
        let quests = {
            "totalQuests": totalQuests,
            "endedQuests": endedQuests,
            "pendingQuests": pendingQuests
        }

        return quests;

};

(function() {

    const quests = getQuestsStats();
    let newElement = document.createElement("p");
    newElementContent = document.createTextNode("Nombre de quêtes au total : " + quests.totalQuests);
    newElement.style.backgroundColor = "lightgreen";
    newElement.style.padding = "15px";
    newElement.appendChild(newElementContent);


    const filterArea = document.getElementsByClassName("filter-area");
    filterArea[0].appendChild(newElement);

})();
