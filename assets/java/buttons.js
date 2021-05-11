var contentsIsVisible = false;
var citedIsVisible = false;

var timeo;

function toggleContents() {
    var contents = document.getElementById("contents");

    timeo = setTimeout(reset, 330, contents);
    contents.style.transition = ".333s";

    if(contentsIsVisible){ /* Toggle Contents Off */
        contents.style.width = "0";
        contentsIsVisible = false;
    }
    else{
        /* Toggle Contents On */
        if(citedIsVisible){ /* Hide the Works Cited first if they are currently visible */
            toggleCited();
            clearTimeout(timeo);
            timeo = setTimeout(toggleContents,500);
        }
        else{
            contents.style.width = "100%";
            contentsIsVisible = true;
        }
    }
}

function toggleCited() {
    var x = window.matchMedia("(max-width: 900px)")
    var worksCited = document.getElementById("workscited");

    timeo = setTimeout(reset, 500, worksCited);
    workscited.style.transition = ".5s";
    workscited.style.overflowX = "hidden";

    /* Toggle Works Cited On */

    if(citedIsVisible){ /* Toggle Works Cited Off */
        workscited.style.width = "0";
        workscited.style.padding = "0em";
        citedIsVisible = false;
    }

    else{
        if(contentsIsVisible){ /* Hide the contents first if they are currently visible */
            toggleContents();
            clearTimeout(timeo);
            timeo = setTimeout(toggleCited,330);
        }
        else{
            if(x.matches) {
                workscited.style.width = "auto";
            }
            else{
                workscited.style.width = "30%";
            }
            workscited.style.padding = "4vmax 2em 2em 2em";
            citedIsVisible = true;
        }
    }
}

function openCited(){
    if(!citedIsVisible){
        toggleCited();
    }
} 

function reset( x ){
    x.style.transition = null;
    workscited.style.overflowX = null;
}


// function toggleContents() {
//     var contents = document.getElementById("contents");
//     var workscited = document.getElementById("workscited");
//     setTimeout(resetvalues, 510);
//     contents.style.transition = ".5s";
//     if(contentsIsVisible){ /* Toggle Contents Off */
//         contents.style.width = "0";
//         contentsIsVisible = false;
//     }

//     else{
//         /* Toggle Contents On */
//         if(citedIsVisible){ /* Hide the Works Cited first if they are currently visible */
//             workscited.style.transition = ".5s"; /*Add transition */
//             workscited.style.width = "0";
//             workscited.style.height = "0";
//             workscited.style.padding = "0em";
//             citedIsVisible = false;
//         }
//         contents.style.width = "100%";
//         contentsIsVisible = true;
//     }
// }

// function toggleCited() {
//     var contents = document.getElementById("contents");
//     var workscited = document.getElementById("workscited");
//     workscited.style.transition = ".5s"
//     setTimeout(resetvalues, 510);
    
//     /* Toggle Works Cited On */
//     workscited.style.transition = "0.5s";

//     if(citedIsVisible){ /* Toggle Works Cited Off */
//         workscited.style.height = "0";
//         workscited.style.width = "0";
//         workscited.style.padding = "0em";
//         citedIsVisible = false;
//     }

//     else{
//         if(contentsIsVisible){ /* Hide the contents first if they are currently visible */
//             contents.style.transition = ".5s";
//             contents.style.width = "0";
//             workscited.style.transitionDelay = "0.5s"
//             contentsIsVisible = false;
//         }

//         workscited.style.height = "100vh";
//         workscited.style.width = "30%";
//         workscited.style.padding = "2em";
//         citedIsVisible = true;
//     }
// }

// function resetvalues( a, b ){
//     var contents = document.getElementById("contents");
//     var workscited = document.getElementById("workscited");
//     contents.style.transition = null;
//     workscited.style.transition = null;
// }
// /*