let students =[]

//-----------------time function --------------------------//
function time_now(){
    let now = new Date();

    let date = now.toDateString();
    let time = now.toLocaleDateString();

    document.getElementById("time").innerHTML =

    "Today is " + date + "<br> The current time is " + time;
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