let score = document.querySelector("#score");
// !ALL BUTTONS
let btn1 = document.querySelector(".no1");
let btn2 = document.querySelector(".no2");
let btn3 = document.querySelector(".no3");
let btn4 = document.querySelector(".no4");
let btn5 = document.querySelector(".no5");
// ! ALL ANSWERS
let ans1 = document.querySelector(".ans1");
let ans2 = document.querySelector(".ans2");
let ans3 = document.querySelector(".ans3");
let ans4 = document.querySelector(".ans4");
let ans5 = document.querySelector(".ans5");
let ans6 = document.querySelector(".ans6");
let ans7 = document.querySelector(".ans7");
let ans8 = document.querySelector(".ans8");
let ans9 = document.querySelector(".ans9");
let ans10 = document.querySelector(".ans10");
let ans11 = document.querySelector(".ans11");
let ans12 = document.querySelector(".ans12");
let ans13 = document.querySelector(".ans13");
let ans14 = document.querySelector(".ans14");
let ans15 = document.querySelector(".ans15");
// ! CONTAINERS
let quiz1 = document.querySelector(".quiz-container1");
let quiz2 = document.querySelector(".quiz-container2")
let quiz3 = document.querySelector(".quiz-container3")
let quiz4 = document.querySelector(".quiz-container4")
let quiz5 = document.querySelector(".quiz-container5")
// ! LI'S
let list1 = document.querySelectorAll(".list-group1 li");
let c1 = document.querySelector(".list-group1")
let list2 = document.querySelectorAll(".list-group2 li")
let c2 = document.querySelector(".list-group2")
let list3 = document.querySelectorAll(".list-group3 li")
let c3 = document.querySelector(".list-group3")
let list4 = document.querySelectorAll(".list-group4 li")
let c4 = document.querySelector(".list-group4")
let list5 = document.querySelectorAll(".list-group5 li")
let c5 = document.querySelector(".list-group5")
let modalTtile = document.querySelector(".modal-title")
let modalMsg = document.querySelector("#scoreMessage")
let finalScore = document.querySelector("#finalScore")
let s = 0;

list1.forEach((li) => {
    li.addEventListener("click" , () => {
        if(li.classList.contains("right")){
            li.classList.add("green")
            c1.classList.add("none")
            s++
            score.textContent = s
        }
        else{
            li.classList.add("red")
            c1.classList.add("none")
            s--
            score.textContent = s
        }
    })
})
list2.forEach((li) => {
    li.addEventListener("click" , () => {
        if(li.classList.contains("right")){
            li.classList.add("green")
            c2.classList.add("none")
            s++
            score.textContent = s
        }
        else{
            li.classList.add("red")
            c2.classList.add("none")
            s--
            score.textContent = s
        }
    })
})
list3.forEach((li) => {
    li.addEventListener("click" , () => {
        if(li.classList.contains("right")){
            li.classList.add("green")
            c3.classList.add("none")
            s++
            score.textContent = s
        }
        else{
            li.classList.add("red")
            c3.classList.add("none")
            s--
            score.textContent = s
        }
    })
})
list4.forEach((li) => {
    li.addEventListener("click" , () => {
        if(li.classList.contains("right")){
            li.classList.add("green")
            c4.classList.add("none")
            s++
            score.textContent = s
        }
        else{
            li.classList.add("red")
            c4.classList.add("none")
            s--
            score.textContent = s
        }
    })
})
list5.forEach((li) => {
    li.addEventListener("click" , () => {
        if(li.classList.contains("right")){
            li.classList.add("green")
            c5.classList.add("none")
            s++
            score.textContent = s
        }
        else{
            li.classList.add("red")
            c5.classList.add("none")
            s--
            score.textContent = s
        }
    })
})

btn1.addEventListener("click" , () => {
    quiz1.classList.add("none")
    quiz2.classList.remove("none")
})
btn2.addEventListener("click" , () => {
    quiz2.classList.add("none")
    quiz3.classList.remove("none")
})
btn3.addEventListener("click" , () => {
    quiz3.classList.add("none")
    quiz4.classList.remove("none")
})
btn4.addEventListener("click" , () => {
    quiz4.classList.add("none")
    quiz5.classList.remove("none")
})
btn5.addEventListener("click" , () => {
    quiz5.classList.add("none")
    finalScore.textContent = score.textContent
    let final = Number(score.textContent)
    if(final >= 5){
        modalMsg.textContent = "Perfect score. Luxury-level performance."
    }
    else if(final === 4){
        modalMsg.textContent = "Excellent result. Almost flawless."
    }
    else if(final === 3){
        modalMsg.textContent = "Good job. A little more practice and you are elite."
    }
    else if(final === 2){
        modalMsg.textContent = "Decent start. Keep pushing for a premium score."
    }
    else if(final === 1){
        modalMsg.textContent = "You can do better. Try again and level up."
    }
    else{
        modalMsg.textContent = "Tough round. Reset and go for the win."
    }
})
