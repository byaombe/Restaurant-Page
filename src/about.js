
 export const about = () => {
    const content = document.getElementById("content");

    //create homepage div
    const homePageDiv = document.createElement("div");
    homePageDiv.classList.add("homePageDiv");

    //create h1
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent="About Us ";


    //append title to homepadediv
    homePageDiv.appendChild(title);
    //append homepage to content
    content.appendChild(homePageDiv);

    //add square1 div to home page
    const square1 = document.createElement("div");
    //add class
    square1.classList.add("square1");

    //append square1 to homepage
    homePageDiv.appendChild(square1);

    const square2 = document.createElement("div");
    square2.classList.add("about-square2");

    //append square2 into square1
    square1.appendChild(square2);

    //add div hours into square 2
    const opHours = document.createElement("div");
    opHours.classList.add("hours");
    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Our Address";
    opHours.appendChild(hoursTitle)

    const storeHours = {
        address: "1111 S10th St",
        City: "Abilene",
        State: "Texas",
        zip: "00000"
        
    };
    const paragraph2 = document.createElement("p");
    //format the storeHOurs into a string
    let hoursText = "";
    for (const [day, hours] of Object.entries(storeHours)) {
        hoursText += `${day}: ${hours}<br>`;
    }
    //add formated text to p element 
    paragraph2.innerHTML = hoursText;
    opHours.appendChild(paragraph2)


    square2.appendChild(opHours);

    //add div statement into square2
    const statement1 = document.createElement("div");
    statement1.classList.add("statement1")
   const paragraph1 = document.createElement("p");
   paragraph1.classList.add("paragraph1");
   paragraph1.textContent = "We are Mary's Breakfast, here we thrive to meet our customer's satisfaction and value great service. Our Eggs are from local businesses, gown locally. We started our breakfast in 2005 and have since served over 5,000 locals, and we are proud of serving you each and every day";
   
   statement1.appendChild(paragraph1);


    square2.appendChild(statement1);

   

} //end of about function
