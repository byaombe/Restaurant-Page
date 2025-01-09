import "./styles.css";
import { pageLoad } from "./page-load.js";
import { menu } from "./menu.js";
import {about } from "./about.js"


//initialize pageLOad


//tab switching logic with event listeners

const tabs = (tabName) => {
    const contentContainer = document.getElementById("content");

    //clear current content
     contentContainer.innerHTML= "";

    // render content based on tab
    switch (tabName) {
        case 'home':
            pageLoad(); //load home page
            break;
        case 'menu':
            menu(); //load menu content
            break;
        case 'about':
            about(); //load about content
            break;
        default:
            pageLoad();
            break;
    }


}


//eventlisteners for the btns
document.getElementById("home").addEventListener('click', () => tabs('home'));
document.getElementById("menu").addEventListener('click', () => tabs('menu'));
document.getElementById("about").addEventListener('click', () => tabs('about'));

tabs('home');
//change background colors 
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener('click', () => {

        //remove active class from all
        buttons.forEach(btn => btn.classList.remove("active"));

        //add to the clicked btn
        button.classList.add("active")
    })
})


/* HTML 
<div id=content>
<div id=homePage>
<h1> Mary's Breakfast</h1>

<div id=square1>
<square2>

<div id=hours>
<h1> Hour hours</>
<p>Monday: 6am-5px</p>
<p>Tuesday: 6am-5px</p>
</> //end of div hours

<div id=statement>
<p> At Mary's Breakfast...

</> //end of div statement

</> //end of square2
</> //end of square1
</> //end of homepaghe
</> //end of home page


<div id=Menu>
</> ///end of Menu
<div id=About>
</> //end of about

</> //end off content

*/
//arrow function 
//const add = () => {}

