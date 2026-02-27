let score = document.querySelector("#score");
let nextBtn = document.querySelector(".btn");
let a1 = document.querySelector(".ans1")
let a2 = document.querySelector(".ans2")
let a3 = document.querySelector(".ans2")
let lists = document.querySelectorAll(".list-group li")
let s = 0;
lists.forEach((list) => {
    list.addEventListener("click" , () => {
        if(list.textContent === "London"){
            score.textContent = ++s
        }
    })
    list.addEventListener("click" , () => {
        if(list.textContent !== "London"){
            score.textContent = --s
        }
    })
})
