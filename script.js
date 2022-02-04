import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "../asset/images/backpack_img.png",
  "backpack",
  50,
  "gray",
  12,
  10,
  10,
  false,
  "January 17, 2022 5:57:00 PST"
);

const content = `
       
    <figure class="backpack__image">
      <img  class="image" src=${everydayPack.backpackImage} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen ? "opened" : "closed"
      }
      }</span></li>
    </ul>
 
`;

const parag = `
        If you're carrying a heavy load, you can't find a better tool than a
        backpack. Distributing the weight evenly across your shoulders, back,
        and hips, the backpack lets you use the natural frame of your body to
        literally <em>shoulder</em> the weight while your legs do the
        carrying.
    `;

const main = document.querySelector(".main-content");

//classList has:
// elt.classList.add('param')
// elt.classList.remove('para')
//elt.classList.toggle('param')
//elt.classList.replace('old','new')

//attribut has:
//doc.hasAttribute('param')
//doc.getAttribute('param')
//doc.setAttribute("old",'new') //to set or to create attribute
//doc.removeAttribute('param')

const newElement = document.createElement("article");
newElement.classList.add("backpack");
newElement.setAttribute("id", "everyday");
newElement.innerHTML = content;

const list = `

<li><a href="#"> Home</a></li>
<li> <a href="#">About</a></li>
<li><a href="#"> Contact</a></li>
<li><a href="#">Login</a></li>
<li><a href="#">LogOut</a></li>

`;
const nav = document.createElement("nav");
nav.classList.add("navbar");
nav.setAttribute("id", "navbar");

const ul = document.createElement("ul");
ul.classList.add("main-list");
ul.setAttribute("id", "main-li");
ul.innerHTML = list;
nav.append(ul);
const header = document.querySelector("header");
header.prepend(nav);
// nav.insertBefore(header);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.setAttribute("id", "paragraph");
const footer = document.querySelector(".site-footer");
paragraph.innerHTML = parag;
footer.appendChild(paragraph);

//inserting html elt into dom elt
// footer.insertAdjacentHTML("beforebegin", "<p>dom</p>");
// footer.insertAdjacentHTML("afterbegin", "<p>dom</p>");
// footer.insertAdjacentHTML("beforeend", "<p>dom</p>");
// footer.insertAdjacentHTML("afterend", "<p>dom</p>");
main.append(newElement);

// styling  title BACKPACK with color purple
var color = "red";
var color2 = "black";

//get the class
document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

function headingColor() {
  color = "black";
  document.querySelector(".right").style.backgroundColor = color;
  document.querySelector(".right .color-value").innerHTML = color;
}

headingColor();

const siteheader = () => {
  let color = "green";
  document.querySelector(".site-header").style.color = color;
};
siteheader();

var anothercolor = "red";
let sitedesc = document.querySelector(".site-description");
sitedesc.style.color = anothercolor;

const mainList = () => {
  let main = "blue";
  document.querySelector(".navbar").style.color = main;
};
mainList();

const leftmid = () => {
  let yellow = "yellow";
  let black = "black";
  document.querySelector(".left-middle").style.backgroundColor = yellow;
  document.querySelector(".left-middle .color-value").innerHTML = yellow;
  document.querySelector(".left-middle .color-value").style.color = black;
};
leftmid();

// console.log("bojc", bkObj);
// console.log("volume", bkObj.volume);
