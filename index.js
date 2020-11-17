let hex = document.getElementById("hex");
let rgb = document.getElementById("rgb");
let hsl = document.getElementById("hsl");
let input = document.querySelector('input');
let body = document.getElementById('fourth');
let large = document.getElementById('large');
let secondLarge = document.getElementById('larger');
let thirdLarge = document.getElementById('largest');
let searchIcon = document.getElementById("searchIcon");

hex.addEventListener("click", function () {
    document.getElementById("span").innerHTML = "#";
    document.getElementById("spanned").innerHTML = "";
    input.style.display = "block";
    input.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            let value = input.value;
            body.style.backgroundColor = "#" + value;
            large.innerHTML = "#" + value;
            secondLarge.style.display = "none";
            thirdLarge.style.display = "none";
        }
        searchIcon.addEventListener("click", function () {
            let value = input.value;
            body.style.backgroundColor = "#" + value;
            large.innerHTML = "#" + value;
            secondLarge.style.display = "none";
            thirdLarge.style.display = "none";
        })
    })
})
rgb.addEventListener("click", function () {
    document.getElementById("span").innerHTML = "rgb" + "(";
    document.getElementById("spanned").innerHTML = ")";
    input.style.display = "block";
    input.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            let value = input.value;
            body.style.backgroundColor = "rgb" + "(" + value + ")";
            large.innerHTML = "rgb" + "(" + value + ")";
            secondLarge.style.display = "none";
            thirdLarge.style.display = "none";
        }
        searchIcon.addEventListener("click", function () {
            let value = input.value;
            body.style.backgroundColor = "rgb" + "(" + value + ")";
            large.innerHTML = "rgb" + "(" + value + ")";
            secondLarge.style.display = "none";
            thirdLarge.style.display = "none";
        })
    })
})
hsl.addEventListener("click", function () {
    document.getElementById("span").innerHTML = "hsl" + "(";
    document.getElementById("spanned").innerHTML = ")";
    input.style.display = "block";
    input.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            let value = input.value;
            if (value.indexOf("%") == -1) {
                let newArray = value.split(",");
                newArray[1] = newArray[1] + "%";
                newArray[2] = newArray[2] + "%";
                let string = newArray.join(",");
                body.style.backgroundColor = "hsl" + "(" + string + ")";
                large.innerHTML = "hsl" + "(" + string + ")";
            } else {
                body.style.backgroundColor = "hsl" + "(" + value + ")";
                large.innerHTML = "hsl" + "(" + value + ")";
            }
            secondLarge.style.display = "none";
            thirdLarge.style.display = "none";
        }
        searchIcon.addEventListener("click", function () {
            let value = input.value;
            if (value.indexOf("%") == -1) {
                let newArray = value.split(",");
                newArray[1] = newArray[1] + "%";
                newArray[2] = newArray[2] + "%";
                let string = newArray.join(",");
                body.style.backgroundColor = "hsl" + "(" + string + ")";
                large.innerHTML = "hsl" + "(" + string + ")";
            } else {
                body.style.backgroundColor = "hsl" + "(" + value + ")";
                large.innerHTML = "hsl" + "(" + value + ")";
            }
            secondLarge.style.display = "none";
            thirdLarge.style.display = "none";
        })
    })
})