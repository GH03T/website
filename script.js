function setFunFact() {
    const FUN_FACTS = [
    "GH03T is not actually a ghost.",
    "GH03T's favorite programming language is Java.",
    "GH03T has a home server, which runs Proxmox.",
    "GH03T is a part-time college student."
    ]

    const rndFact = "Fun Fact: " + FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];

    const factParagraph = document.getElementById("fun-fact");
    factParagraph.textContent = rndFact;
} 

setFunFact();
console.log("Website Loaded"); // On First Load