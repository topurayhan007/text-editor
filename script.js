const textArea = document.getElementById("text-field");

// Bold function
document.getElementById("bold-btn").addEventListener("click", function () {
  if (textArea.style.fontWeight === "bold") {
    textArea.style.fontWeight = "normal";
  } else {
    textArea.style.fontWeight = "bold";
  }
});

// Italic function
document.getElementById("italic-btn").addEventListener("click", function () {
  if (textArea.style.fontStyle === "italic") {
    textArea.style.fontStyle = "";
  } else {
    textArea.style.fontStyle = "italic";
  }
});

// Underline function
document.getElementById("underline-btn").addEventListener("click", function () {
  if (textArea.style.textDecoration === "underline") {
    textArea.style.textDecoration = "none";
  } else {
    textArea.style.textDecoration = "underline";
  }
});

// Align-Left function
document
  .getElementById("align-left-btn")
  .addEventListener("click", function () {
    if (textArea.style.textAlign === "left") {
      textArea.style.textAlign = "";
    } else {
      textArea.style.textAlign = "left";
    }
  });

// Align-Center function
document
  .getElementById("align-center-btn")
  .addEventListener("click", function () {
    if (textArea.style.textAlign === "center") {
      textArea.style.textAlign = "";
    } else {
      textArea.style.textAlign = "center";
    }
  });

// Align-Justify function
document
  .getElementById("align-justify-btn")
  .addEventListener("click", function () {
    if (textArea.style.textAlign === "justify") {
      textArea.style.textAlign = "";
    } else {
      textArea.style.textAlign = "justify";
    }
  });

// Align-Right function
document
  .getElementById("align-right-btn")
  .addEventListener("click", function () {
    if (textArea.style.textAlign === "right") {
      textArea.style.textAlign = "";
    } else {
      textArea.style.textAlign = "right";
    }
  });

// Font-Size function
document
  .getElementById("font-size-field")
  .addEventListener("change", function () {
    const fontSizer = document.getElementById("font-size-field");
    textArea.style.fontSize = fontSizer.value.toString() + "px";
    textArea.style.setProperty("!important");
  });

// Capitalize function
document
  .getElementById("capitalize-btn")
  .addEventListener("click", function () {
    if (textArea.style.textTransform === "uppercase") {
      textArea.style.textTransform = "";
    } else {
      textArea.style.textTransform = "uppercase";
    }
  });

// Font-Color function
document
  .getElementById("color-chooser")
  .addEventListener("change", function () {
    const colorChooser = document.getElementById("color-chooser");
    textArea.style.color = colorChooser.value.toString();
    textArea.style.setProperty("!important");
  });

//   font-family: 'Bebas Neue', cursive;
// font-family: 'EB Garamond', serif;
// font-family: 'Inter', sans-serif;
// font-family: 'Lobster', cursive;
// font-family: 'Manrope', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Work Sans', sans-serif;
// font-family: 'Fira Code', monospace;

// Font-Chooser function
document.getElementById("font-chooser").addEventListener("change", function () {
  const fontChooser = document.getElementById("font-chooser");
  console.log(fontChooser.options[fontChooser.selectedIndex].value);
  // if (fontChooser.options[fontChooser.selectedIndex].value === "poppins")
  textArea.style.fontFamily =
    fontChooser.options[fontChooser.selectedIndex].value;
});
