let products = {
    data: [

    {
        productName: "M0006",
        category: "自拍",
        image: "1.jpg",
    },

    {
        productName: "M0005",
        category: "自慰",
        image: "2.jpg",
    },

    {
        productName: "M0004",
        category: "口交",
        image: "3.jpg",
    },

    {
        productName: "M0003",
        category: "口交",
        image: "4.jpg",
    },

    {
        productName: "M0002",
        category: "口交",
        image: "5.jpg",
    },

    {
        productName: "M0001",
        category: "自慰",
        image: "6.jpg",
    },



    ],
};


for(let i of products.data) {
    //Creare Card
    let card = document.createElement("div");
    //Card should have category
    card.classList.add("card",i.category,"hide");

    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");


    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}


function filterProduct(value){
    let buttons = document.querySelectorAll(".button-pro-menu");
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(value == "全部"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}


window.onload = () => {
    filterProduct("全部");
};
