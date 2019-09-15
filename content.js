function getQuestsStats() {

    console.log("Extension running...")
    labels = document.getElementsByClassName("ui blue horizontal label");

    let totalQuests = labels.length;
    let endedQuests = 0;
    let pendingQuests = 0;

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
    filterArea[0].style.padding = "0";
    filterArea[0].style.color = "white";

    let totalElement = document.createElement("p");
    let endedElement = document.createElement("p");
    let pendingElement = document.createElement("p");

    totalElementContent = document.createTextNode("Nombre de quêtes au total : " + quests.totalQuests);
    totalElement.appendChild(totalElementContent);
    totalElement.style.backgroundColor = "white";
    totalElement.style.color = "#f76c6c";
    totalElement.style.padding = "20px 30px";
    totalElement.style.fontWeight = "bold";
    totalElement.style.margin = "0";
    filterArea[0].appendChild(totalElement);

    endedElementContent = document.createTextNode("Nombre de quêtes terminées : " + quests.endedQuests);
    endedElement.appendChild(endedElementContent);
    endedElement.style.backgroundColor = "#aaffaa";
    endedElement.style.color = "green";
    endedElement.style.padding = "20px 30px";
    endedElement.style.fontWeight = "bold";
    endedElement.style.margin = "0";
    filterArea[0].appendChild(endedElement);

    pendingElementContent = document.createTextNode("Nombre de quêtes en cours : " + quests.pendingQuests);
    pendingElement.appendChild(pendingElementContent);
    pendingElement.style.backgroundColor = "#fecb6d";
    pendingElement.style.color = "#a96d00";
    
    pendingElement.style.padding = "20px 30px";
    pendingElement.style.fontWeight = "bold";
    filterArea[0].appendChild(pendingElement);

})();

/*
TODO: Créer un système de classes CSS pour styliser les nouveaux éléments
*/
