// use this to copy code snippets or us your browser's console

// - A new User instance is created and assigned to billy, with a name and favorite band assigned as properties in the constructor
//
// favoriteBandMatches is a class function that takes in an array, bands, and filters it to match the favoriteBandproperty previously set
//
// - callback function is declared when favoriteBandMatches method is invoked:
// - this equals the User instance receiving the method call
// - bind the callback function to that User instance
// - From inside the filter method, when the callback function is invoked
// - the context would be global here, except that the this is already bound to the User instance.

class User {
    constructor(name, favoriteBand) {
        this.name = name;
        this.favoriteBand = favoriteBand;
    }



    favoriteBandMatches(bands) {
        console.log('in User scope: ', this.favoriteBand);
        return bands.filter(
            function(band) {
                console.log('in the anonymous function scope: ', this.favoriteBand);
                return band == this.favoriteBand;
            }.bind(this)
        )[0];
    }
}

let billy = new User('billy', 'paul simon');
billy.favoriteBandMatches(['paul simon', 'the kooks']);
