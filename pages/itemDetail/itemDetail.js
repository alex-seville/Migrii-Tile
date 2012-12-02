(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = options && options.item ? Data.resolveItemReference(options.item) : Data.items.getAt(0);
            element.querySelector(".titlearea .pagetitle").textContent = item.group.title;
            element.querySelector("article .item-title").textContent = item.title;
            element.querySelector("article .item-subtitle").textContent = item.subtitle;

            element.querySelector("article .item-image").src = item.backgroundImage;

            element.querySelector("article .item-image").alt = item.subtitle;
            element.querySelector("article .item-content").innerHTML = item.content;

            element.querySelector("article .item-owner .picture").src = "/images/profile.jpg";
            element.querySelector("article .item-owner span").innerHTML = "Florent<br>22 ans<br>Montreal,QC</span>";
            
            element.querySelector(".content").focus();

            var ratingControlDiv = document.getElementById("ratingControlDiv");

            // Retrieve the actual Rating control.
            var ratingControl = ratingControlDiv.winControl;

            // Register the event handler. 
            ratingControl.addEventListener("change", this.ratingChanged, false);
        },
        ratingChanged: function (eventInfo) {
            var ratingControlDiv = document.getElementById("ratingControlDiv");

            ratingControlDiv.innerHTML = "You gave a "+eventInfo.detail.tentativeRating+" to this idea !";
            
        }
    });
})();
