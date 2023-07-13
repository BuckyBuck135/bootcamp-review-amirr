Color Picker
• An online color picker that helps you generate color schemes based on a seed color of your choosing
• Built using Javascript, REST API, HTML & CSS


Code review remarks:
- HTML file:
[] all the meta tags are here; great
[] careful not to use font family and weights that you will not need. It's extra size for the browser to download.
[] semantic HTML: section .hero should be <main> and the navbar should be <nav>
[] personally, I prefer using ID when the element will be manipulated by JS ; I find it easier to recognize my CSS and my JS that way.

- CSS file
[] reorganize declarations in logical order (usually following the markup) => .hero goes at the top of the file, above nav-bar for example
[] modified .hero class => removed min-width, replaced by width: 80% ; this way your hero is responsive
[] .color-navbar => added align-items: center;
[] repeating 40px for all navbar elements => set 40px on navbar parent + height 100% on children 
[] modified styles of navbar to make it better on mobile ; feel free to change the text of button, or change the layout =>
   [picker] [options]
   [     button     ]

- JS file
[] it works! 
[] refactored the fetch request to include a shorter version of the rendering functions and changing the  HTML markup of the color strips. see notes in js file
[] do not use multiple h1 tags. the hex codes shouldn't be h1. either span or p. 
[] the copy to clipboard function works perfectly. Note that Scrimba browser doesn NOT support it, that's why you had error messages :)
[] avoid alert() - it's not great UX. Instead, you can use a popup or toast => https://www.w3schools.com/howto/howto_js_snackbar.asp
[] challenge: use async/await syntax
   async function myFunction() {
    const res = await fetch("url")
    const data = await res.json()
    //do somethig with data
    }