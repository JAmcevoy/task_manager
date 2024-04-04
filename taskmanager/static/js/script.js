// This event listener listens for the DOMContentLoaded event, which indicates that the initial HTML document has been completely loaded and parsed, including stylesheets, images, and subframes.

document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    // Select all elements with the class "sidenav" and initialize them as Materialize sidenav components.
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // datepicker initialization
    // Select all elements with the class "datepicker" and initialize them as Materialize datepicker components.
    // The options object passed to M.Datepicker.init() specifies the format of the date and customizes the "done" button text.
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy", // Date format: day, month (full name), year
        i18n: {done: "Select"}    // Customized "done" button text
    });

    // select initialization
    // Select all <select> elements and initialize them as Materialize select components.
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
});
