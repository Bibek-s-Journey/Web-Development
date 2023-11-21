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


// footer section
let footer_top = document.querySelector(".footer-top");
let contact_bottom = document.querySelector(".contact-bottom");
let social_media = document.querySelector(".social-media");
let bottom_right = document.querySelector(".bottom-right");
let service_top = document.querySelector(".service-top");
window.addEventListener("resize", (e) => {
    if (window.innerWidth <= 992) {
        console.log(window.innerWidth)
        footer_top.append(contact_bottom);
        footer_top.append(social_media);
        service_top.append(bottom_right)
    } else {
        let our_contact = document.querySelector(".our-contact");
        our_contact.appendChild(contact_bottom);
        let contact_top = document.querySelector(".contact-top");
        contact_top.appendChild(social_media);
        let footer_bottom = document.querySelector(".footer-bottom");
        footer_bottom.appendChild(bottom_right);
    }
})