//Save item
localStorage.setItem("firstName", "Colt");
localStorage.setItem("favoriteNumber", 33);
localStorage.setItem("hasChickens", true);
//Retrieve item 
localStorage.getItem("firstName"); // "Colt"
localStorage.firstName // "Colt"
//Remove item
localStorage.removeItem("firstName");
localStorage.clear(); //Clear storage
//Adding Objects to localStorage
const friends = ["Lana", "Hayden", "Jessie"];
localStorage.setItem("friends", friends);
localStorage.getItem("friends");//"Lana,Hayden,Jessie"
//Save as JSON
const friends = ["Lana", "Hayden", "Jessie"];
localStorage.setItem("friends", JSON.stringify(friends));
JSON.parse(localStorage.getItem("friends"));
