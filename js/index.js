class User {
        constructor(name, interests) {
            this.name = name;
            this.interests = interests;
        }
    
         matchInterests(event) {
            return event.keywords.some(word => this.interests.includes(word));
        } 
    }

    let billy = new User('billy', ['music', 'art', 'movies']);
    let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

    billy.matchInterests(freeMusic);