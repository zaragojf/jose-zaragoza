/**
 * Wrap everything in an IEFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function() {

    /*************************************
    * Package data and constructor objects
    *************************************/

    // Package data array (simulated data source, such as JSON or database recordset)
    var data = [
        {
            name: 'Baum Bats',
            description: 'Baum Bats are THE BOMB! The first Baum Bat I purchased lasted over three years, and I still use it for batting practice. You simply can not purchase a wood bat that is longer lasting or has more POP than a Baum Bat. Baum Bats are the best on the market.',
            url: 'https://baumbat.com/',
            options: 5,
            price: '$120-$340',
            selector: 'p1'
        },
        {
            name: '44 Pro Gloves',
            description: 'The Best Gloves. The Right Prices. Specializing in crafting a truly unique pro quality baseball glove.',
            url: 'https://44progloves.com/',
            options: 10,
            price: '$149-$340',
            selector: 'p2'
        },
        {
            name: 'Just Bats',
            description: "Welcome to the JustBats Experience! We believe that no matter your age, height, or skill level, there is always a reason to take the field. That's why it is our passion to provide the best online shopping experience in the game.",
            url: 'https://www.justbats.com/',
            options: 100,
            price: '$20-$500',
            selector: 'p3'
        },
    ];

    // Baseball Bat and Glove Review constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.url = data.url;
        this.options = data.options;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedOptions = function () {
            return this.options.toLocaleString();
        };
    };

    /*******************
     * Utility functions
     ******************/

    // Returns today's date, formatted
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    // Returns DOM element by id.
    // We're just wrapping document.getElementById
    // in a shorthand function. If this seems confusing,
    // then just replace getEl with document.getElementById
    // in the writePackageInfo function.
    var getEl = function (id) {
        return document.getElementById(id);
    };

    /**
     * Write's the package object's data to the appropriate
     * DOM elements utilizing the package selector property.
     */
    var writePackageInfo = function (package) {
        // Get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            urlEl = getEl(selector + '-url'),
            optEl = getEl(selector + '-options'),
            priceEl = getEl(selector + '-price');

            // Write package data to DOM elements
            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            urlEl.textContent = package.url;
            optEl.textContent = package.getFormattedOptions();
            priceEl.textContent = package.price;
    };

    // Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    // Write package data one-by-one
    var BaumBat = new Package(data[0]);
    writePackageInfo(BaumBat);

    var ProGloves = new Package(data[1]);
    writePackageInfo(ProGloves);

    var JustBats = new Package(data[2]);
    writePackageInfo(JustBats);

}());