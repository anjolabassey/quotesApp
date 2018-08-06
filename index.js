let quotes = ["The journey of a thousand miles begins with one step", "Tis better to have loved and lost than never to have loved at all", "Keep calm and carry on", "Love the life you live. Live the life you love"];
let imageArray = ["images/one.jpg", "images/two.jpg", "images/three.jpg", "images/four.jpg","images/five.jpg", "images/six.jpg", "images/seven.jpg"];
let saveInput = document.getElementById("saveQuote");
let display = document.getElementById("displayQuote");
let banner = document.getElementById("display");

let getImage = () => {
    let randomImage = Math.floor(Math.random() * imageArray.length);
    document.getElementById("main").style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + imageArray[randomImage] + ")";
}

let getQuote = () => {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    banner.innerHTML = quotes[randomQuote];
    getImage();
    
}

document.onload = getQuote();

saveInput.addEventListener("click", function(event) {
    event.preventDefault();
    let newQuote = document.getElementById("writeQuote").value;

    if (newQuote < 1) {
        alert("Please type a quote");
    } else {
        quotes.push(newQuote);
    }
    document.forms["myForm"].reset();
    
});

display.addEventListener("click", getQuote);

