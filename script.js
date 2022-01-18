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

const main = document.querySelector(".main-content");
console.log("this is main", main);

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

{
  /* <article class="article">
            <figure class="figure">
             <img src=${bkObj.backpackImage} alt="">
            </figure>
            <h1> Name: ${bkObj.name}</h1>
            <ul class="features">
                  
                <li> Volume: <span>${bkObj.volume}</span> </li>
                <li> Color: <span> ${bkObj.color}</span> </li>
                <li> The number of pockets:<span> ${
                  bkObj.pocketNum
                }</span> </li>
                <li>  Left strap length:<span>${
                  bkObj.strapLength.left
                } </span></li>
                </li> Left strap length:<span> ${
                  bkObj.strapLength.right
                } </span> </li>
                <li>Lid status: <span> ${bkObj.lidOpen} </span> </li>
                <li> The date aquired is: <span> ${bkObj.BackpackkAge()}</span> </li>
            </ul>
        </article> */
}

main.innerHTML = content;

// console.log("bojc", bkObj);
// console.log("volume", bkObj.volume);
