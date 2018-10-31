// function to make the top nav menu responsive
function responsiveNavMenu() {
    // set the variable nav to get the Id element 'myTopnav'
    const nav = document.getElementById("myTopNav");
    // if the classname is identical to topnav
    if (nav.className === "topnav") {
        // add the class responsive to the navbar
        nav.className += " responsive";
    } else {
        // use the topnav class only
        nav.className = "topnav";
    }
}

function responsiveNavMenu() {
    const nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}


function initMap() {
    const dyrhamlodge = {lat: 51.458813, lng: -2.616257};
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: dyrhamlodge
    });
    const marker = new google.maps.Marker({
        position: dyrhamlodge,
        map: map
    });
}
