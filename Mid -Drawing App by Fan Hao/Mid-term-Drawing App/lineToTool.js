//a tool for drawing straight lines to the screen. Allows the user to preview
//the a line to the current mouse position before drawing the line to the 
//pixel array.
function LineToTool() {
    //set an icon and a name to the object.
    this.icon = "assets/lineTo.jpg";
    this.name = "LineTo";
    //StartMouseX and startMouseY represent the start coordinates for the line, we set them to zero.

    //because we want to diffrentiate the start position but we haven't started drawing yet.

    //Set the drawing boolean value to false because we haven't drawn anything yet.


    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    //draws the line to the screen 
    this.draw = function () {

        //only draw when mouse is clicked
        if (mouseIsPressed) {
            console.log(1)
            //if it's the start of drawing a new line
            // Check if the mouse start position is -1, if it is then set them to current mouse X and Y
            // set the boolean value of drawing to true since we have started drawing
            // Calling on loadpixels(a p5.js reference library function) before we update the pixel[] array in the next 
            if (startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                //save the current pixel Array
                loadPixels();
            } else {
                // Calling upon updatePixel (a p5.js reference library function) to update the display window with the values of pixels[]
                // Draw a line from the startMouseX and startMouseY position to the current X and Y coordiantes of the mouse
                updatePixels();
                //draw the line
                line(startMouseX, startMouseY, mouseX, mouseY);
            }

        } else if (drawing) {
            console.log(2)
            //save the pixels with the most recent line and reset the
            //drawing bool and start locations
            // if the mouse is not pressed, and drawing value is true,  set it back to false and set the startMouse X and Y to the default values
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };


}
