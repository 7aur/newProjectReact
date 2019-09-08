 /*[---------- SEARCH FORM  ----------]*/
 document.querySelector("button[jsClick='search-button']").addEventListener("click", function(){
    document.querySelector("div[jsGet='search-form']").classList.add("active");
});
document.querySelector("button[jsClick='close-search']").addEventListener("click", function(){
    document.querySelector("div[jsGet='search-form']").classList.remove("active");
});

document.querySelector("[jsGet='mobile-btn']").addEventListener("click", (e) => {
    e.target.closest("button").classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active"); 
    document.body.classList.toggle("overflow");
    //e.target.closest("header").classList.toggle("full-height");
})

/*[---------- BANNER REMOVE  ----------]*/
document.querySelector("button[jsClick='banner-remove']").addEventListener("click", ()=> {
    document.querySelector("[jsGet='banner-section']").remove();
    document.querySelector("[jsGet='header']").classList.add("top");
})

/*[---------- services slider  ----------]*/
$("ul.owl-slider").owlCarousel({
    loop: false,
    margin: 10,
    items: 5,
    nav: true,
    responsiveClass: true,
    responsive: {
        320: {
          items: 1,
        },
        575: {
          items: 2,
        },
        991:  {
            items: 3,
            margin: 20,
        },
        1000: {
          items: 4
        }
      }
});

/*[---------- Waves effect buttons  ----------]*/
document.querySelectorAll("a, button").forEach(item => {
    item.classList.add("waves-effect");
});

/*[---------- Google Map   ----------]*/
function google_map (id) {
    if(document.getElementById(id)) {
        let lat = parseFloat(document.getElementById(id).getAttribute("data-lat"));
        let lng = parseFloat(document.getElementById(id).getAttribute("data-lng"));
        function initMap () {
            var map = new google.maps.Map(document.getElementById(id), {
                zoom: 8,
                center : new google.maps.LatLng({lat, lng}),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl:true,
                disableDefaultUI: true
            });
            let marker = new google.maps.Marker({
                map:map,
                position:new google.maps.LatLng({lat, lng}),
                animation: google.maps.Animation.DROP
            })
        }
        google.maps.event.addDomListener(window, "load", initMap );
    }
}
google_map("map");

/*[---------- Header fixed   ----------]*/
let mouseDown = 0;
document.addEventListener("scroll", () => {
    let topWindow =  document.querySelector("[jsGet='header']").offsetHeight;
    let scrolled = document.documentElement.scrollTop;
    if(scrolled >= topWindow ) {
        document.querySelector("[jsGet='header']").classList.add("fixed-anime");
        if(document.body.getBoundingClientRect().top >  mouseDown) {
            document.querySelector("[jsGet='header']").classList.add("move-up");
        }else {
            document.querySelector("[jsGet='header']").classList.remove("move-up");
        }
    }else {
        document.querySelector("[jsGet='header']").classList.remove("fixed-anime");
    };
    mouseDown = document.body.getBoundingClientRect().top ;
    let bodyHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let indicator = (100 * document.documentElement.scrollTop) / bodyHeight ;
    document.querySelector("[jsGet='top-line']").style.width = indicator+ '%';
});

/*[---------- Auto dedect   ----------]*/
function autoDedect(millisecond) {
    var times;
    window.onload           = resetTimer;
    window.onmousemove      = resetTimer;
    window.onmousedown      = resetTimer;  
    window.ontouchstart     = resetTimer; 
    window.onclick          = resetTimer;     
    window.onkeypress       = resetTimer;   
    window.addEventListener('scroll', resetTimer, true); 

    function sleeping() {
       document.body.style.opacity = "0.1";
    }

    function resetTimer() {
        clearTimeout(times);
        times = setTimeout(sleeping, millisecond);  
        document.body.style.opacity = "1";
    }
}
//autoDedect(1000);