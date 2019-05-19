function toggleSidebar(){
    var sidebar=document.getElementById("sidebar");
    if(sidebar.classList.contains("active")){
	sidebar.classList.remove("active");
    }
    else{
	sidebar.classList.add("active");
    }
}

function openMainItem(element){
    // Close opened elements
    var openedMainItems=document.querySelectorAll(".opened");
    for(var item of openedMainItems){
	console.log(item.text);
	item.classList.remove("opened");
    }

    // open clicked element
    var father=element.parentNode;
    father.querySelector("ul").classList.add("opened");    
}

function seeMore(link){
    divElement=link.previousElementSibling;
    divElement.classList.remove("reduced");
}


function filterContent(){
    levelFilter=document.getElementById("level-filter").value;
    typeFilter=document.getElementById("type-filter").value;
    divNode=document.getElementById("searchdiv");
    listNode=divNode.nextElementSibling;
    for(var element of listNode.getElementsByTagName("li")){
	element.style.display = "none";
    }
    if (levelFilter.length>0 || typeFilter.length>0){
	targetElements=listNode.getElementsByClassName(levelFilter + " " + typeFilter);
    }
    else{
	targetElements=listNode.getElementsByTagName("li");
    }
    for(var element of targetElements){
	element.style.display = "inline-block";
    }
}
