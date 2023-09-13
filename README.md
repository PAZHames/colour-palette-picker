# Color Palette Picker

The Palette Picker is a simple web application that generates color palettes with various shades and complementary colors. Users can click a button to generate a new palette, and each color in the palette can be clicked to change its value. The application is designed using HTML, CSS, and JavaScript.

# Getting Started
To use the Palette Picker, follow these steps:

Clone or Download: Clone this repository to your local machine or download the files as a ZIP archive.

Open the HTML File: Locate the index.html file in the downloaded repository and open it in a web browser. This will display the Palette Picker interface.

Generate Palettes: Click the "Give me a palette!" button to generate a new color palette. The main color and its complementary color will be displayed at the top, followed by variations of both colors.

Change Colors: You can click on each individual color box to change its value. When you click a color box, its background color and the associated hex code will be updated.

# Features

- Produces complementary hues and colour palettes for all you design needs
- Interactive interface - each colour can be changed to suit your personal preferences
- Don't like what you see? Click the randomise button again to get a whole new palette!

# Challenges and Solutions 

| Challenge       | Solution     
|--------------|---------------------------------------------------------------------------------------------------------------|
| When I added the JavaScript code to make the colours complementary, it broke both the colour generation and the headers. It was initially only producing one colour at a time, then the user had to populate each div by either clicking them individually or clicking the randomise button a series of times, during which time colours were often repeated. Furthermore, the headings for each div were being populated with multiple hex values from across the other divs.  | After much testing using `console.log`, I found that my problem was in my shuffle function. The destructuring assignment was not working properly, so I replaced it with a temp variable. That solved the headings and meant all five divs were populated with the first click. But I still had the problem of the repeating colours. Not ideal for a colour palette where range is key! |

# Credits
This Palette Picker was created by Phoebe Hames. Feel free to contact me at phoebehames292@gmail.com for any questions or feedback.


