"use strict";
// --------------------- Nature Image --------------------------


const popup_image = document.querySelector(".popup_image");
const popup_image_container = document.querySelector(".popup_image_container");
const nature_image = document.querySelector(".ima");
const mountElements = document.querySelectorAll(".mount");

const objects = [
    { nat_img: "nature-1.jpeg" },
    { nat_img: "nature-2.jpeg" },
    { nat_img: "nature-3.jpeg" }
];

let nature_index = 0;

document.querySelectorAll(".image_container img").forEach((image, index) => {
    image.onclick = () => {
        popup_image.style.display = "block";
        nature_index = index;
        showNatureImage();
    };
});

document.querySelector(".popup_image span").onclick = () => {
    popup_image.style.display = "none";
};

document.querySelector(".fa-greater-than").addEventListener("click", () => {
    nature_index = nature_index + 1;
    if (nature_index >= objects.length) 
    {
        nature_index = 0; 
    }
    showNatureImage();
});

document.querySelector(".fa-less-than").addEventListener("click", () => {
    nature_index = nature_index - 1;
    if (nature_index < 0) 
    {
        nature_index = objects.length - 1;
    }
    showNatureImage();
});

    mountElements.forEach((mount, index) => {
        mount.addEventListener("click", ()=> {
            nature_index = index;
            showNatureImage();
        });
    });

    function showNatureImage() {
        nature_image.src = objects[nature_index].nat_img;
        mountElements.forEach((mount, index) => {
            
            if(index === nature_index){
                console.log(index,nature_index)
                mount.classList.remove("active");
            }
            else{
                mount.classList.add("active"); 
            }
            
        });
}


// --------------------------- City Image -------------------------------------

let decrease_image = document.querySelector(".decrease_image");
let increase_image = document.querySelector(".increase_image");
let city_image = document.querySelector(".img2");
let popup_city_image = document.querySelector(".popup_city_image");

let city_elements = [
    document.querySelector(".cty1"),
    document.querySelector(".cty2"),
    document.querySelector(".cty3"),
    document.querySelector(".cty4"),
    document.querySelector(".cty5")
];

let current_city_index = 0;

let city_object = [
    { city_img: "city-1.jpeg" },
    { city_img: "city-2.jpeg" },
    { city_img: "city-3.jpeg" },
    { city_img: "city-4.jpeg" },
    { city_img: "city-5.jpeg" }
];

document.querySelectorAll(".city_image_container img").forEach((image2, index) => {
    image2.onclick = () => {
        popup_city_image.style.display = "block";
        city_image.src = image2.getAttribute("src");
        current_city_index = index;
        showCityImage();
    };
});

document.querySelector(".popup_city_image span").onclick = () => {
    popup_city_image.style.display = "none";
};

increase_image.addEventListener("click", () => {
    current_city_index = current_city_index + 1;
    if(current_city_index >= city_object.length)
    {
        current_city_index = 0;
    }
    showCityImage();
});

decrease_image.addEventListener("click", () => {
    current_city_index = current_city_index - 1;
    if(current_city_index < 0 )
    {
        current_city_index = city_object.length - 1;
    }
    showCityImage();
});

city_elements.forEach((city_element, index) => {
    city_element.addEventListener("click", () => {
        current_city_index = index;
        showCityImage();
    });
});

function showCityImage() {
    city_image.src = city_object[current_city_index].city_img;
    city_elements.forEach((city_element, index) => {
        if(index === current_city_index)
        {
            city_element.classList.remove("active");
        }
        else
        {
            city_element.classList.add("active");
        }
    });
}

