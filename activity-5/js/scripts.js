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
            name: 'Settings Sync',
            description: 'Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.',
            author: 'Shan Khan',
            url: 'https://atom.io/https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync/emmet',
            downloads: 2775805,
            stars: 663,
            price: 0.00,
            selector: 'p1'
        },
        {
            name: 'Trailing Spaces',
            description: 'Highlight trailing spaces and delete them in a flash!',
            author: 'Shardul Mahadik',
            url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
            downloads: 788571,
            stars: 39,
            price: 0.00,
            selector: 'p2'
        },
        {
            name: 'Path Intellisense',
            description: 'Visual Studio Code plugin that autocompletes filenames',
            author: 'Christian Kohler',
            url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
            downloads: 55560454,
            stars: 94,
            price: 0.00,
            selector: 'p3'
        },
        {
            name: 'CSS Peek',
            description: 'Allow peeking to css ID and class strings as definitions from html files to respective CSS. Allows peek and goto definition.',
            author: 'Pranay Prakash',
            url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            downloads: 2317579,
            stars: 69,
            price: 0.00,
            selector: 'p4'
        }
    ];

    // (VS Code) Package constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
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
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

            // Write package data to DOM elements
            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
    };

    // Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    // Write package data one-by-one
    var SettingSync = new Package(data[0]);
    writePackageInfo(SettingSync);

    var TrailingSpaces = new Package(data[1]);
    writePackageInfo(TrailingSpaces);

    var PathIntellisense = new Package(data[2]);
    writePackageInfo(PathIntellisense);

    var CSSPeek = new Package(data[3]);
    writePackageInfo(CSSPeek);

}());