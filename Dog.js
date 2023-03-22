

class TinProfile {
    constructor(data){
        Object.assign(this, data)
        
    }
    
    getProfileHtml = () => {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeeLiked} = this
        return `
            <div class="badge"></div>
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

export default TinProfile
