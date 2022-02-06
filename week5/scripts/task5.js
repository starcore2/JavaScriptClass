/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const d = new Date();
// Step 2: Declare another variable to hold the day of the week
const week = d.getDay();
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed
let greetingMessage
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (week > 0 && week < 6) {
    greetingMessage = 'Hang in there'
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    greetingMessage = 'Woohoo! It is the weekend!'
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (week) {
    case 0:
        message = 'Sunday';
        break;
    case 1:
        message = 'Monday';
        break;
    case 2:
        message = 'Tuesday';
        break;
    case 3:
        message = 'Wensday';
        break;
    case 4:
        message = 'Thursday';
        break;
    case 5:
        message = 'Friday';
        break;
    case 6:
        message = 'Saturday';
        break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent=greetingMessage;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent=message;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
var templeList = []
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(temple)
{
    if(temple != [])
{
    temple.forEach(temple => {
        let x = document.createElement('article');
        let name = document.createElement('h3');
        name.textContent = temple.templeName;
        let templeLocation = document.createElement('h4');
        templeLocation.textContent = temple.location;
        let templeDedicated = document.createElement('h4');
        templeDedicated.textContent = temple.dedicated;
        let templeIMG = document.createElement('img');
        templeIMG.src = temple.imageUrl;
        templeIMG.alt = temple.templeName;
        x.append(name,templeLocation,templeDedicated,templeIMG);
        document.querySelector('#temples').appendChild(x);

    });    
} 
}

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
//const templeSource = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
//fetch(templeSource)
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
//const templeSource = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
//fetch(templeSource).then(result=result.json())

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
//const templeSource = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
//fetch(templeSource).then(result=result.json()).then(something => {})

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable
//const templeSource = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
//fetch(templeSource).then(result=result.json()).then(something => {templeList=something;})
// Step 7: Finally, call the output function and pass it the list of temples
fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
.then(response=>response.json())
.then(something => {
    templeList=something;
    output(templeList);
})
// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset(){
    let oof = document.querySelector('#temples')
    while(oof.firstChild)
    {
        oof.removeChild(oof.firstChild);
    }
}
// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy()
{
    reset();
    let option = document.querySelector('#sortBy').value
    if(option == 'templeNameAscending')
         {
            templeList.sort(function compare(a,b){
                if(a.templeName>b.templeName){
                    return 1
                }
                if(b.templeName>a.templeName)
                {
                    return -1
                }
                return 0
            });
            output(templeList);
         }
    if(option == 'templeNameDescending')
         {
            templeList.sort(function compare(a,b){
                if(a.templeName>b.templeName){
                    return -1
                }
                if(b.templeName>a.templeName)
                {
                    return 1
                }
                return 0
            });
            output(templeList);
        }
        
    
}
// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
let checking = document.getElementById('sortBy')
checking.addEventListener('change',sortBy)

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
