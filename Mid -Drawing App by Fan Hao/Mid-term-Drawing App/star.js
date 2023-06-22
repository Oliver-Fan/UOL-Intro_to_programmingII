//StampTool constructor Function
function Star() {
    this.name = "star";
    this.icon = "assets/star.png";


    this.draw = function () {
        if (mouseIsPressed) {
            for (var i = 0; i < nStarSlider.value(); i++) {
                var starSize = starSizeSlider.value();
                var starX = random((mouseX - starSize / 2) - 10,
                    (mouseX - starSize / 2) + 10);
                var starY = random((mouseY - starSize / 2) - 10,
                    (mouseY - starSize / 2) + 10);
                image(star, starX, starY, starSize, starSize);
            }
        }
    };
}
