//ScissorsTool Constructor function
function ScissorsTool() {
    this.icon = "assets/scissorsTool.png";
    this.name = "scissorsTool";

    this.draw = function () {
        if (mouseIsPressed) {


            if (selectMode == 0) {
                //check if they previousX and Y are -1. set them to the current
                //mouse X and Y if they are.
                if (previousMouseX == -1) {
                    console.log("update mouse")
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
                //if we already have values for previousX and Y we can draw a line from 
                //there to the current mouse location
                else {
                    stroke(0);
                    noFill();
                    line(previousMouseX, previousMouseY, mouseX, mouseY);
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
            } else if (selectMode == 1) {
                updatePixels();

                noStroke();
                fill(255, 0, 0, 100);
                rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
            }


        } else {
            //if the user has released the mouse we want to set the previousMouse values 
            //back to -1.
            previousMouseX = -1;
            previousMouseY = -1;
        }

    };
}
