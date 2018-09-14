// use this to copy code snippets or us your browser's console
class User {
    constructor(name, favoriteBand) {
        this.name = name;
        this.favoriteBand = favoriteBand;
    }
 
    favoriteBandMatches(bands) {
        return bands.filter(function(band) {
            return band == this.favoriteBand;
        })[0];
    }
}
 
let billy = new User('billy', 'paul simon');
billy.favoriteBandMatches(['paul simon', 'the kooks']);