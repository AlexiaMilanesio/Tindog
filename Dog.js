class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getTag() {
    if (this.hasBeenLiked) {
      return "like";
    } else if (this.hasBeenSwiped) {
      return "nope";
    } else {
      return "";
    }
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    const dogName = this.name.toLowerCase();
    let tag = this.getTag();

    return `
        <div class="dog-picture-container">
            <img class="dog-picture" src="/images/dog-${dogName}.jpg" alt="Dog">
            <div class="top-left" id="tag">
            
            </div>
            <div class="bottom-left">
                <p class="bottom-left-name"> ${name}, ${age}</p>
                <p class="bottom-left-bio">${bio}</p>
            </div>
        </div>
        `;
  }
}

export default Dog;
