
export const menu = () => {
    const content = document.getElementById("content");

    //create homepage div
    const homePageDiv = document.createElement("div");
    homePageDiv.classList.add("homePageDiv");

    //create h1
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent="Our Menu ";


    //append title to homepadediv
    homePageDiv.appendChild(title);
    //append homepage to content
    content.appendChild(homePageDiv);

    //add square1 div to home page
    const square1 = document.createElement("div");
    //add class
    square1.classList.add("menu-square1");

    //append square1 to homepage
    homePageDiv.appendChild(square1);

    const square2 = document.createElement("div");
    square2.classList.add("menu-square2");

    //append square2 into square1
    square1.appendChild(square2);

    //add div hours into square 2
    const menuHere = document.createElement("div");
    menuHere.classList.add("hours");
   const titleDiv = document.createElement("div");
    titleDiv.classList.add("titleDiv");

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Breakfast";
    titleDiv.appendChild(hoursTitle)

    const breakfastTitle2 = document.createElement("h3");
    breakfastTitle2.textContent = "Menu Special";
     titleDiv.appendChild(breakfastTitle2)

    menuHere.appendChild(titleDiv)

    
    const menuItemDiv1 = document.createElement("div");
    menuItemDiv1.classList.add("menuItemDiv1")

    const pancakesTitle = document.createElement("h3");
    pancakesTitle.textContent = "Pancakes";
    menuItemDiv1.appendChild(pancakesTitle)

    const pancakes = {
        Classic: "12.00",
        Blueberry: "16.00",
        Chocolate: "10.00",
        Oatmeal: "17.00",
        Cheese: "18.00"
    };
    const paragraph2 = document.createElement("p");
    //format the storeHOurs into a string
    let pancakeItems = "<table>";
    for (const [food, price] of Object.entries(pancakes)) {
        pancakeItems += `
        <tr>
        <td class="food">${food}</td>
        <td class="space"></td> <!-- Extra space column -->
        <td class="price"> $ ${price}</td>
    </tr>`;

    }
    pancakeItems+= "</table>"
    //add formated text to p element 
    paragraph2.innerHTML = pancakeItems;
    menuItemDiv1.appendChild(paragraph2)
    menuHere.appendChild(menuItemDiv1)





//breakfast item2
const menuItemDiv2 = document.createElement("div");
menuItemDiv2.classList.add("menuItemDiv2")

const waffleTitle = document.createElement("h3");
    waffleTitle.textContent = "Waffles";
    menuItemDiv2.appendChild(waffleTitle)

    const waffle = {
        Classic: "10.00",
        Banana: "13.00",
        Blueberry: "13.00",
        Belgian: "15.00"
      
    };
    const paragraph3 = document.createElement("p");
    //format the storeHOurs into a string
    let waffleItems = "<table>";
    for (const [food, price] of Object.entries(waffle)) {
        waffleItems += `
        <tr>
        <td class="food">${food}</td>
        <td class="space"></td> <!-- Extra space column -->
        <td class="price"> $ ${price}</td>
    </tr>`;

    }
    waffleItems += "</table>"
    //add formated text to p element 
    paragraph3.innerHTML = waffleItems;

    menuItemDiv2.appendChild(paragraph3)
    menuHere.appendChild(menuItemDiv2)

    square2.appendChild(menuHere);




    //add div statement into square2
    const statement1 = document.createElement("div");
    statement1.classList.add("statement1")



    
      //breakfast item3
      const menuItemDiv3 = document.createElement("div");
menuItemDiv3.classList.add("menuItemDiv3")

const omeletsTitle = document.createElement("h3");
omeletsTitle.textContent = "Omelets";
menuItemDiv3.appendChild(omeletsTitle)

const omelets = {
    Bacon: "10.00",
    cheese : "11.00",
    mushroom: "15.00",
    tomato: "13.00"
  
};
const paragraph4 = document.createElement("p");
//format the storeHOurs into a string
let omeletsItems = "<table>";
for (const [food, price] of Object.entries(omelets)) {
    omeletsItems += `
    <tr>
    <td class="food">${food}</td>
    <td class="price">$${price}</td>
</tr>`;

}
omeletsItems += "</table>";



//add formated text to p element 
paragraph4.innerHTML = omeletsItems;
menuItemDiv3.appendChild(paragraph4)
statement1.appendChild(menuItemDiv3)







//item number 4
const menuItemDiv4 = document.createElement("div");
menuItemDiv4.classList.add("menuItemDiv4")

const eggsTitle = document.createElement("h3");
eggsTitle.textContent = "Eggshh";
menuItemDiv4.appendChild(eggsTitle)

const eggs = {
    Easy: "10.00",
    Two : "11.00",
    Combo: "15.00",
    Baked: "13.00"
};
const paragraph5 = document.createElement("p");
//format the storeHOurs into a string
let eggsItems = "<table>";
for (const [food, price] of Object.entries(eggs)) {
    eggsItems += `
    <tr>
    <td class="food">${food}</td>
    <td class="price">$${price}</td>
</tr>`;

}
eggsItems += "</table>";



//add formated text to p element 
paragraph5.innerHTML = eggsItems;
menuItemDiv4.appendChild(paragraph5)
statement1.appendChild(menuItemDiv4)


    


    square2.appendChild(statement1);

   

} //end of pageLoad function
