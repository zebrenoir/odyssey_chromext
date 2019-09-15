/*
(function() {
    console.log("We're changing the world here, baby doll!");
    div = document.getElementsByTagName("div");
    div[0].style.backgroundColor = "lightpink";
})();
*/

(function() {

    console.log("Counting quests");
    labels = document.getElementsByClassName("ui blue horizontal label");
    
    var total_quests = labels.length;
    var ended_quests = 0;
    var pending_quests = 0;

    for (let i = 0; i < labels.length; i++) {

        let label_content = labels[i].textContent;

        for (let j = 0; j < label_content.length; j++) {            
            if (label_content[j] == "T") {
                ended_quests += 1;
            } else if (label_content[j] == "E") {
                pending_quests += 1;
            }
        }

    }
        console.log("Nombre de quêtes au total : " + total_quests);
        console.log("Nombre de quêtes terminées : " + ended_quests);
        console.log("Nombre de quêtes en cours : " + pending_quests);
    
    
})();
