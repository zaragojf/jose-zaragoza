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
            description: "Men's Monday night softball for Milwaukee AG Churches playing at Wick Field.",
            selector: 'p1'
        },
        {
            name: 'Dennis Holmstrom',
            selector: 'p2'
        },
        {
            name: 'Jesus Serna (OC Royals)',
            selector: 'p3'
        },
        {
            name: 'Jose Zaragoza (Root River Shock)',
            selector: 'p4'
        },
        {
            name: 'Jose Zaragoza (Root River Shock)',
            selector: 'p5'
        }
    ];

    // (VS Code) Package constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
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

            // Write package data to DOM elements
            nameEl.textContent = package.name;
    };

    // Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    // Write package data one-by-one
    var Descript = new Package(data[0]);
    writePackageInfo(Descript);

    var Director = new Package(data[1]);
    writePackageInfo(Director);

    var SportsmanshipCommittee = new Package(data[2]);
    writePackageInfo(SportsmanshipCommittee);

    var SportsmanshipCommittee2 = new Package(data[3]);
    writePackageInfo(SportsmanshipCommittee2);

    var RecordKeeping = new Package(data[4]);
    writePackageInfo(RecordKeeping);

}());









// Utility functions
function get(element) {
    return document.getElementById(element);
}


// Application functions
function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    // Clear text
    title.value = '';
    text.value = '';

    // Hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    // Create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    // Add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

// Wire up event handlers
window.addEventListener('load', function () {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});



