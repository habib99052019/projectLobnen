function playVideo() {

    var element = document.querySelector(".video-cst-dsg-m")

    if (element != null) {
        document.addEventListener('click', function() {
            element.muted = true
            element.play().catch(error => {
                console.error(error);
            });
        })
        document.body.click()
    }

    element = document.querySelector(".video-cst-dsg")

    if (element != null) {
        document.addEventListener('click', function() {
            element.muted = true
            element.play().catch(error => {
                console.error(error);
            });
        })
        document.body.click()
    }

}