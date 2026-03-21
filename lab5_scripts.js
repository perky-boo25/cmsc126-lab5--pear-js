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
    const meridiems = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    
    const output = document.getElementById("time");
    output.innerHTML =
    "<p>Today is <strong>" + month + " " + date + ", " + year + ", " + dayName + ".</strong></p>" +
    "<p>The current time is <strong>" + hours + ":" + mins + " " + meridiems + ".</strong></p>";
    output.classList.add("visible");
}

//----------------- add students -----------------------------//
//TODO: validation, student obj creation, student id generator, push to array students

// generate student id function
function generate_student_number() {
    let studentNum;
    do {
        const randomID = Math.floor(Math.random() * 100000); 
        studentNum    = "2024" + String(randomID).padStart(5,0);
    } while (students.some(s => s.studentNumber === studentNum)); 
    return studentNum;
}

// validation function
function validate_form(name, age, email, course) {
    let valid = true;

    // clear all previous errors
    document.getElementById("nameError").textContent   = "";
    document.getElementById("ageError").textContent    = "";
    document.getElementById("emailError").textContent  = "";
    document.getElementById("courseError").textContent = "";

    // name validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    } else if (name.length <= 5) {
        document.getElementById("nameError").textContent = "Name must be more than 5 characters.";
        valid = false;
    } else if (!/^[a-zA-Z]+\s[a-zA-Z\s\-.']+$/.test(name)) {
        document.getElementById("nameError").textContent = "Name must contain at least one space (e.g. First Last).";
        valid = false;
    }

    // age validation
    if (isNaN(age)) {
        document.getElementById("ageError").textContent = "Age is required.";
        valid = false;
    } else if (age <= 18 || age >= 99) {
        document.getElementById("ageError").textContent = "Age must be a number greater than 18 and less than 99.";
        valid = false;
    }

    // email validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!email.endsWith("@up.edu.ph")) {
        document.getElementById("emailError").textContent = "Email must end with @up.edu.ph.";
        valid = false;
    }

    // course validation
    if (course === "") {
        document.getElementById("courseError").textContent = "Please select a course.";
        valid = false;
    }

    return valid;
}

//----------------- add students -----------------------------//
function add_student() {
    const name   = document.getElementById("name").value.trim();
    const age    = parseInt(document.getElementById("age").value);
    const email  = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;

    // run validation 
    if (!validate_form(name, age, email, course)) return;

    // create student object
    const Student = {
        studentNumber : generate_student_number(),
        name          : name,
        age           : age,
        email         : email,
        course        : course
    };

    // add student object to the array
    students.push(Student);

    // pop up notif to inform successfully added student w assigned ID
    alert("Student " + Student.studentNumber + " added successfully!");

    // clear form
    document.getElementById("name").value   = "";
    document.getElementById("age").value    = "";
    document.getElementById("email").value  = "";
    document.getElementById("course").value = "";
}


//----------------- search students --------------------------//
//TODO: Search Student by ID
function find_student() {

}

//----------------- display students -------------------------//
//TODO: Display all students
function display_list(){

}