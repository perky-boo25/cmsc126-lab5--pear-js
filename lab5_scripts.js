let students =[]

//-----------------time function --------------------------//
function time_now(){
    const now = new Date();
    
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    const months = ["January","February","March","April","May","June", "July","August","September","October","November","December" ];
    const dayName = days[now.getDay()];
    const month   = months[now.getMonth()];
    const date    = now.getDate();
    const year    = now.getFullYear();
    
    let hours  = now.getHours();
    const mins = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    
    const output = document.getElementById("time");
    output.innerHTML =
    "<p>Today is <strong>" + month + " " + date + ", " + year + ", " + dayName + ".</strong></p>" +
    "<p>The current time is <strong>" + hours + ":" + mins + " " + ampm + ".</strong></p>";
    output.classList.add("visible");
}

//----------------- add students -----------------------------//
//TODO: validation, student obj creation, student id generator, push to array students
function add_student(){

}
//----------------- search students --------------------------//
//TODO: Search Student by ID
function find_student() {

}

//----------------- display students -------------------------//
//TODO: Display all students
function display_list(){

}