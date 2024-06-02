//Adding event listener to all .gallerypics elements, adding a mouseover evern that makes the image transition and tranform, adding opacity at the same time.
let allGalleryPics = document.querySelectorAll(".gallerypics");
for(let i = 0; i < allGalleryPics.length; i++){
    allGalleryPics[i].addEventListener("mouseover", function(){
        this.style.transition = "transform 0.3s ease-in-out";
        this.style.transform = "scale(1.1)";
        this.style.opacity = ".60";
    });


    allGalleryPics[i].addEventListener("mouseout", function(){
        this.style.transition = "transform 0.3s ease-in-out";
        this.style.transform = "scale(1.0)";
        this.style.opacity = "1.0";
    })
};


function isVisible(element){
    let elementBox = element.getBoundingClientRect();
    //This function takes an argument called element. This argument represents the section on the page that we will check
    //for it's distance from the top of the page We attach the getBoundingClientRect to this element.
    //The element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    //This is where we get the .top information to use below.
    let distanceFromTop = -200;
    //this is setting distance from the top
    if(elementBox.top - window.innerHeight < distanceFromTop){
        return true;
    } else {
        return false;
    }
}
    //This code above is grabbing the elementBox.top and subtracting window.innerHeight. If it is less than -200, it will return 
    //true. This means that the section is within peek distance.  If it is greater than 200, it will return false. This means that it is not within peek distance.

function scanDocument(){
    let sectionList = document.querySelectorAll(".hideUntilViewed");
    sectionList.forEach(function(section) {
        if(isVisible(section)){
            section.classList.remove("hideUntilViewed");
        };
    });
//console.log(numberOfScans);
//numberOfScans++;
}

document.addEventListener("scroll", scanDocument);

//I want to remove the class hidden to reveal it over the image

