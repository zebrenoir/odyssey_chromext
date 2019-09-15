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
    const filterArea = document.getElementsByClassName("filter-area");
    filterArea[0].style.paddingLeft = "0";
    filterArea[0].style.paddingRight = "0";
    filterArea[0].style.color = "white";

    let totalElement = document.createElement("p");
    let endedElement = document.createElement("p");
    let pendingElement = document.createElement("p");

    totalElementContent = document.createTextNode("Nombre de quêtes au total : " + quests.totalQuests);
    totalElement.appendChild(totalElementContent);
    totalElement.style.backgroundColor = "#f76c6c";
    totalElement.style.padding = "20px 30px";
    totalElement.style.fontWeight = "bold";
    totalElement.style.margin = "0";
    filterArea[0].appendChild(totalElement);

    endedElementContent = document.createTextNode("Nombre de quêtes terminées : " + quests.endedQuests);
    endedElement.appendChild(endedElementContent);
    endedElement.style.backgroundColor = "lime";
    endedElement.style.color = "green";
    endedElement.style.padding = "20px 30px";
    endedElement.style.fontWeight = "bold";
    endedElement.style.margin = "0";
    filterArea[0].appendChild(endedElement);

    pendingElementContent = document.createTextNode("Nombre de quêtes en cours : " + quests.pendingQuests);
    pendingElement.appendChild(pendingElementContent);
    pendingElement.style.backgroundColor = "orange";
    pendingElement.style.padding = "20px 30px";
    pendingElement.style.fontWeight = "bold";
    filterArea[0].appendChild(pendingElement);

})();

/*
TODO: Créer un système de classes pour styliser les nouveaux éléments
*/
