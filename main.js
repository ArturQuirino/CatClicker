let numberOfClicks = 0;
const cats = [
    {
        name: "fluffy",
        srcImage: "cat.jpg"
    },
    {
        name: "honey",
        srcImage: "cat2.jpg"
    }
]

const containerCats = document.getElementById("container-cats");
cats.forEach(cat => {
    console.log("her")
    let containerCat = document.createElement('div');
    containerCat.id = "container-cats__container-cat"
    const imageCat = new Image();
    imageCat.src = cat.srcImage;
    const nameCat = document.createTextNode(cat.name);

    containerCats.appendChild(containerCat);
    containerCat.appendChild(nameCat);
    containerCat.appendChild(imageCat);

    imageCat.addEventListener('click', function(){
        numberOfClicks++;
        document.getElementById("number-of-clicks").innerHTML = numberOfClicks;
    }, false)
})

