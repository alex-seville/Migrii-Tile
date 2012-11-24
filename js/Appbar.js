
(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("default.html", {
        ready: function (element, options) {
            document.getElementById("cmdAdd")
                .addEventListener("click", doClickAdd, false);
            
            document.getElementById("cmdProfile")
                .addEventListener("click", doClickProfile, false);
            document.getElementById("cmdCamera")
                .addEventListener("click", doClickCamera, false);
            WinJS.log && WinJS.log("To show the bar, swipe up from " +
                "the bottom of the screen, right-click, or " +
                "press Windows Logo + z. To dismiss the bar, " +
                "tap in the application, swipe, right-click, " +
                "or press Windows Logo + z again.", "sample", "status");
        },
    });

    // Command button functions
    function doClickAdd() {
        WinJS.log && WinJS.log("Add button pressed");
        WinJS.Navigation.navigate("/pages/Create/pagecontrol.html");
    }

    

    function doClickProfile() {
        WinJS.log && WinJS.log("Delete button pressed");
    }

    function doClickCamera() {
        WinJS.log && WinJS.log("Camera button pressed");
    }

    WinJS.log = function (message) {
        var statusDiv = document.getElementById("statusMessage");
        if (statusDiv) {
            statusDiv.innerText = message;
        }
    };
})();