# Karnataka EduConnect

A responsive directory and admissions information portal for higher-education institutions across Karnataka's four administrative divisions: Bengaluru, Belagavi, Kalaburagi, and Mysuru. The interface includes English and Kannada support and a built-in college enquiry assistant.

## Features

- Browse colleges by division, district, stream, and institution type.
- Search and sort the college directory.
- View college details, compare up to three colleges, and save bookmarks.
- Estimate eligibility with the admissions calculator.
- Explore admissions guidance and official Karnataka education portals.
- Ask the built-in enquiry chatbot about colleges, courses, fees, hostels, scholarships, and admissions. Voice input/output depends on browser support.
- Switch between dark and light themes; saved preferences and bookmarks use browser local storage.

## Run locally

This is a static website and does not require a package installation or build step.

1. Open `index.html` in a modern browser, or place the project under your local web server's document root.
2. With XAMPP, keep the project in `htdocs` and visit `http://localhost/my/`.

The page loads its CSS, JavaScript, and data from relative paths, so keep the project folder structure intact. An internet connection is needed for the Font Awesome stylesheet loaded from a CDN; the rest of the site runs locally.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Main page and page content |
| `css/style.css` | Layout, responsive styling, and themes |
| `js/app.js` | Directory UI, filters, calculator, bookmarks, and interactions |
| `js/chatbot-engine.js` | Local enquiry chatbot and speech features |
| `js/colleges-data.js` | Data consumed by the website |
| `data-*.js` | Source college records organized by division and stream |
| `assemble-master-data.js` | Combines source records and writes `js/colleges-data.js` |
| `assets/images/` | Images used by the site |

## Updating college data

Edit the relevant `data-*.js` source file, then regenerate the browser data file from the project directory with Node.js:

```powershell
node .\assemble-master-data.js
```

The generator writes the combined data to `js/colleges-data.js`, which is loaded by `index.html`.
