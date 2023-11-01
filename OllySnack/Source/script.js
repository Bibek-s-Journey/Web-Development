let testimonial = document.querySelectorAll(".testinomial-statement");
let test_list = document.querySelector(".test-list");
let logo = document.querySelectorAll(".logos");

let manual = function (index) {
    testimonial.forEach((element) => {
        element.classList.remove("active");
    });
    logo.forEach((element) => {
        element.classList.remove("active");
    });

    testimonial[index].classList.add("active");  
    logo[index].classList.add("active");  
};
logo.forEach((element,index) => {
    element.addEventListener("click", (dets) => {
        manual(index);
    });
});
