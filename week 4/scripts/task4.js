/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
let whoIAm = 'William Zacher';
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
const photo = "images/LiamZacherFace.jpg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
let favoriteFoods = ['pizza', 'lasangua', 'sushi', 'choclate', 'icecream', 'enchiladas'];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
let hobbies = ['games', 'reading'];
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
let placesLived = [{place:'Norman, OK', length:'10 years'}, {place:'Edmond, OK', length:'5 Years'}, {place:'Oklahoma City, OK', length:'5 years'}]
let me = {
    whoIAm,
    photo,
    favoriteFoods,
    hobbies,
    placesLived,
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = me.whoIAm;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

document.querySelector('#photo').setAttribute('src',me.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt',me.whoIAm) ;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let y;
let z=document.querySelector('#favorite-foods');
for(let x of me.favoriteFoods){
    y = document.createElement('li');
    y.textContent = x
    z.appendChild(y)
}
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
y = null;
z = document.querySelector('#hobbies');
for(let x of me.hobbies){
    y = document.createElement('li');
    y.textContent = x
    z.appendChild(y)
}
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
y = null;
let w;
z = document.querySelector('#places-lived');
for(let x of me.placesLived){
    y = document.createElement('dt');
    w = document.createElement('dd');
    y.textContent = x.place;
    w.textContent = x.length;
    z.appendChild(y);
    z.appendChild(w);
}
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived


