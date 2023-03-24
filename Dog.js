class Dog {
    constructor(data){
        Object.assign(this, data)  
    }

    setLikedSwiped = (like, swiped) => {
        this.hasBeeLiked = like
        this.hasBeenSwiped = swiped
    }

    getBtnHtml = () => {
        return `
            <button id="cross-btn" class="cross-btn"></button>
            <button id="heart-btn" class="heart-btn"></button>
        `
    }
    
    getProfileHtml = () => {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeeLiked} = this
        return ` 
            <div class="badge ${hasBeeLiked ? "like" :
            hasBeenSwiped ? "nope" : ""}"></div>  
            <div class="img-gradient">
                <img id="hero-img" src=${avatar}>
            </div>
            <div class="hero-caption">
                <h2>${name}, ${age}</h2>
                <p>${bio}</p>
            </div>
        `
    }
}

export default Dog
