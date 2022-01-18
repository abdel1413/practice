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
         <article class="backpack" id="everyday">
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
        everydayPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;

const paragraph = ` 
        If you're carrying a heavy load, you can't find a better tool than a
        backpack. Distributing the weight evenly across your shoulders, back,
        and hips, the backpack lets you use the natural frame of your body to
        literally <em>shoulder</em> the weight while your legs do the
        carrying.
    `;

const htmparagraph = document.querySelector("paragraph");

const main = document.querySelector(".main-content");

const newElement = document.createElement("p");

// newElement.createTextNode(paragraph);
newElement.innerHTML = paragraph;
//htmparagraph.innerHTML = paragraph;

// htmparagraph.appendChild(newElement);

main.innerHTML = content;

// console.log("bojc", bkObj);
// console.log("volume", bkObj.volume);
