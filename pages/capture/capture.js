// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    
    var pic = null;
    WinJS.UI.Pages.define("/pages/capture/capture.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            document.getElementById("pic").addEventListener("click", takepicture);
            document.getElementById("create").addEventListener("click", function () {
                var group = Data.items.getAt(0).group;
                /*
                Data.items.push({
                    group: group,
                    title: document.getElementById("caption"),
                    subtitle: "web",
                    description: "A picture says a thousand words...",
                    content: "",
                    backgroundImage: pic
                });
                */
                var messageDialog = new Windows.UI.Popups.MessageDialog("You successfully added an image to your idea");

                messageDialog.showAsync();

               


            });
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
    function takepicture() {
        var captureUI = new Windows.Media.Capture.CameraCaptureUI();
        captureUI.captureFileAsync(Windows.Media.Capture.CameraCaptureUIMode.photo).then(function (capturedItem) {
            if (capturedItem) {
                document.getElementById("message").innerHTML = "User captured a photo.";


                document.getElementById('pictureUploaded').src = URL.createObjectURL(capturedItem);
            }
            else {
                document.getElementById("message").innerHTML = "User didn't capture a photo.";
            }
        });
    }

})();
