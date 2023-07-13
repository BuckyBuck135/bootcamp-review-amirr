
document.querySelector(".color-btn").addEventListener("click", getColors)

function getColors() {
  const colorPicker = document.querySelector(".color-picker").value
  colorPickerValue = colorPicker.replace("#", "")
  const colorScheme = document.querySelector(".color-scheme").value

  fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&format=json&mode=${colorScheme}&count=6`)
    .then(resp => resp.json())
    .then(data => {
      // let's refactor your 2 render functions into one, and place that into this fetch request. Alternatively, you could isolate the rendering functions and just return data here.
      // Because there's not too much code, I prefer to leave everyting here in the fetch request.
      const colorBox = document.querySelector(".color-box")
      colorBox.innerHTML = ""
      // let colors =  // was not used
      data.colors.map(color => {
      // merging the bg color and the hex text into one block of HTML below  
      //   return `<h1 class="hex-code">${color.hex.value}</h1>`
      // }).join("")

      // we generate one string of HTML with all the necessary data. I changed the markup to put the color and the hex into one div; makes more semantic sense, and fixes layout issues
      colorBox.innerHTML += 
        `
          <div class="color-strip">
            <div class="color-strip--background" style="background-color: ${color.hex.value}"></div>
            <p class="color-strip--hex">${color.hex.value}</p>
          </div>
        `
  
      // document.querySelector(".color-code").innerHTML = colors    // REMOVED
      copyClipboard()
      // generateColorBlock(data.colors)   // REMOVED
    }) // end .map()
  }) //end fetch
}

//// All of this is now part of the main fetch function ////
// function generateColorBlock(colors) { 
//     const colorCodes = colors.map(color => color.hex.value)
//     const colorBox = document.querySelector(".color-box")
//     // colorBox.innerHTML = ""

//     colorCodes.map(colorCode => {
//         colorBox.innerHTML += 
//         `<div class="color-strips" style="background-color: ${colorCode}">
//           <h1 class="hex-code">${colorCode.hex.value}</h1>
//         </div>`
//     })
//     }

function copyClipboard() {
  // const hexCodeValues = document.querySelectorAll(".hex-code")
  const hexCodeValues = document.querySelectorAll(".color-strip--hex") //new class name

  hexCodeValues.forEach( element => {
    element.addEventListener("click", () => {
      // const text = element.textContent  // let's shorten that, see below

      navigator.clipboard.writeText(element.textContent) // use the value directly instead of going through one extra constant
        .then(() => {
          alert("Color copied to clipboard")
        })
        .catch((error) => {
          alert("Unable to copy text to clipboard")
          console.error(error) // new
        })
    })
  })
}
    