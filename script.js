var typed = new Typed(".auto_name", {
    strings: ["Shubh Agarwal", "Flutter Developer", "Programmer", "Backend Developer"],
    typeSpeed: 105,
    backSpeed: 10,
    loop: true
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link"); // Fix: "link" not "links"
    document.getElementById(tabname).classList.add("active-tab"); // Fix: match class
}
 
