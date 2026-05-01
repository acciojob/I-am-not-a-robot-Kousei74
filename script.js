//your code here
const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const result = document.getElementById("para");

let selected = [];
function init() {
    container.innerHTML = "";
    result.textContent = "";
    verifyBtn.style.display = "none";
    resetBtn.style.display = "none";
    selected = [];

    let images = ["img1", "img2", "img3", "img4", "img5"];
    let dup = images[Math.floor(Math.random() * images.length)];
    images.push(dup);
    for (let i = images.length - 1; i > 0; i--) {
	    let j = Math.floor(Math.random() * (i + 1));
	    [images[i], images[j]] = [images[j], images[i]];
	}
    images.forEach(cls => {
        let img = document.createElement("img");
        img.classList.add(cls);

        img.addEventListener("click", handleClick);
        container.appendChild(img);
    });
}
function handleClick() {
    if (selected.length >= 2) return;
    if (this.classList.contains("selected")) return;

    this.classList.add("selected");
    selected.push(this);

    resetBtn.style.display = "inline-block";

    if (selected.length === 2) {
        verifyBtn.style.display = "inline-block";
    }
}
resetBtn.addEventListener("click", init);
verifyBtn.addEventListener("click", () => {
    verifyBtn.style.display = "none";

    if (selected[0].className === selected[1].className) {
        result.textContent = "You are a human. Congratulations!";
    } else {
        result.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }
});

init();