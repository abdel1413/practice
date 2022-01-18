class Backpack {
  constructor(
    backpackImage,
    name,
    volume,
    color,
    pocketNum,
    strapLengthR,
    strapLengthL,
    lidOpen,
    dataRequired
  ) {
    this.name = name;

    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.dataRequired = dataRequired;
    this.lidOpen = lidOpen;
    this.backpackImage = backpackImage;
  }

  updateStrapLength(newLeftLength, newRightLength) {
    this.strapLength.left = newLeftLength;
    this.strapLength.right = newRightLength;
  }

  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  backpackAge() {
    let currentDate = new Date();
    let purchaseDate = new Date(this.dataRequired);
    let difference = currentDate - purchaseDate;
    let timeConverted = 1000 * 3600 * 24;
    let daysUpToNow = Math.floor(difference / timeConverted);
    return daysUpToNow;
  }
}

export default Backpack;
