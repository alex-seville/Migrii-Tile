﻿(function () {
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
            element.querySelector("article .item-image").src = "/images/makewebnotwar.jpg";
            element.querySelector("article .item-image").alt = item.subtitle;
            

            element.querySelector("article .item-owner").innerHTML = '<p><img src="/images/profile.jpg" alt="" /></p>';

            
            
            element.querySelector("article .item-content").textContent = item.description;
            element.querySelector(".content").focus();

            var dataTransferManager = Windows.ApplicationModel.DataTransfer.DataTransferManager.getForCurrentView();
            dataTransferManager.addEventListener("datarequested", dataRequested);
        },
        unload: function () {
            var dataTransferManager = Windows.ApplicationModel.DataTransfer.DataTransferManager.getForCurrentView();
            dataTransferManager.removeEventListener("datarequested", dataRequested);
        }
    });

    function dataRequested(e) {
        var request = e.request;

        request.data.properties.title = document.getElementById("title").innerText;

        request.data.properties.description = document.getElementById("description").innerText;
    
        var url = "http://www.migrii.com";
        try {
            request.data.properties.setUri(new Windows.Foundation.Uri(url));
            WinJS.log && WinJS.log("", "sample", "error");
        } catch (ex) {
            WinJS.log && WinJS.log("Exception occured: the uri provided " + url + " is not well formatted.", "sample", "error");
        }
            
    }

    

})();
