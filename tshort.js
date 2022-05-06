// *** YOUR LINKS ***
var links = {
    "/": "https://jaswdr.dev",
    "/blog": "https://jaswdr.dev",
    "/notebook-header":"https://gist.githubusercontent.com/jaswdr/e418dd4196d114a5cbd38383edf3aabc/raw/7dea919340d8ce3af3349adba7dd2b488774866f/header.py"
};
// ***

var path = window.location.pathname; if (path in links) { window.location.href = links[path]; } else { window.location.href = links["/"]; }
