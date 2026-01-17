function TaggingText(ButtonId) {
    if ( ButtonId == "None" ) {
        Elements = document.getElementsByClassName("Niveau1");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.remove("YellowText");
        }
        Elements = document.getElementsByClassName("Niveau2");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.remove("GreenText");
        }
        Elements = document.getElementsByClassName("Niveau3");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.remove("BlueText");
        }
        Viewers = document.getElementsByClassName("Viewer");
        for (var i = Viewers.length - 1; i >= 0; i--) {
            Viewers[i].className = "Viewer GreyText";
        }
    } else {
        if ( ButtonId == "Niveau1" || ButtonId == "All") {
            Elements = document.getElementsByClassName("Niveau1");
            for (var i = Elements.length - 1; i >= 0; i--) {
                Elements[i].classList.add("YellowText");
            }
            Viewer = document.getElementById("ViewNiveau1");
            Viewer.classList.remove("GreyText");
            Viewer.classList.add("YellowText");
        }
        if ( ButtonId == "Niveau2" || ButtonId == "All") {
            Elements = document.getElementsByClassName("Niveau2");
            for (var i = Elements.length - 1; i >= 0; i--) {
                Elements[i].classList.add("GreenText");
            }
            Viewer = document.getElementById("ViewNiveau2");
            Viewer.classList.remove("GreyText");
            Viewer.classList.add("GreenText");
        }
        if ( ButtonId == "Niveau3" || ButtonId == "All") {
            Elements = document.getElementsByClassName("Niveau3");
            for (var i = Elements.length - 1; i >= 0; i--) {
                Elements[i].classList.add("BlueText");
            }
            Viewer = document.getElementById("ViewNiveau3");
            Viewer.classList.remove("GreyText");
            Viewer.classList.add("BlueText");
        }
    }
}
function DisplayElements(ButtonId) {
    if ( ButtonId == "Title" ) {
        Elements = document.getElementsByTagName("p");
        for (var i = Elements.length - 1; i >= 0; i--) {
            if ( Elements[i].className != "PreAmbule" ) {
                Elements[i].classList.add("UnDisplay");
            }
        }
        Elements = document.getElementsByTagName("h2");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.add("UnDisplay");
        }
        Elements = document.getElementsByTagName("ul");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.add("UnDisplay");
        }
        Elements = document.getElementsByTagName("table");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.add("UnDisplay");
        }
    } else if ( ButtonId == "SubTitle" ) {
        Elements = document.getElementsByTagName("p");
        for (var i = Elements.length - 1; i >= 0; i--) {
            if ( Elements[i].className != "PreAmbule" ) {
                Elements[i].classList.add("UnDisplay");
            }
        }
    } else if ( ButtonId == "RandomSubTitle" ) {
        Elements = document.getElementsByTagName("p");
        for (var i = Elements.length - 1; i >= 0; i--) {
            if ( Elements[i].className != "PreAmbule" ) {
                Elements[i].classList.add("UnDisplay");
            }
        }
        Elements = document.getElementsByTagName("h2");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.add("UnDisplay");
        }
        var RamdonNumber = Math.floor(Math.random() * 100 );
        var NumElements = Elements.length - 1;
        var NumElement = RamdonNumber / NumElements;
        document.getElementById("RamdonNumber").innerHTML = RamdonNumber;
        document.getElementById("NumElements").innerHTML = NumElements;
        document.getElementById("NumElement").innerHTML = NumElement;
        Elements[NumElement].classList.remove("UnDisplay");
    } else if ( ButtonId == "All" ) {
        Elements = document.getElementsByTagName("p");
        for (var i = Elements.length - 1; i >= 0; i--) {
            if ( Elements[i].className != "PreAmbule" ) {
                Elements[i].classList.remove("UnDisplay");
            }
        }
        Elements = document.getElementsByTagName("h2");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.remove("UnDisplay");
        }
        Elements = document.getElementsByTagName("ul");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.remove("UnDisplay");
        }
        Elements = document.getElementsByTagName("table");
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].classList.remove("UnDisplay");
        }
    } else if ( ButtonId == "Tagged" ) {
        Elements = document.getElementsByTagName("p");
        for (var i = Elements.length - 1; i >= 0; i--) {
            if ( Elements[i].className.includes("Text") ) {
                Elements[i].classList.remove("UnDisplay");
            } else {
                Elements[i].classList.add("UnDisplay");
            }
        }
        Elements = document.getElementsByTagName("h2");
        for (var i = Elements.length - 1; i >= 0; i--) {
            if ( Elements[i].className.includes("Text") ) {
                Elements[i].classList.remove("UnDisplay");
            } else {
                Elements[i].classList.add("UnDisplay");
            }
        }
        Elements = document.getElementsByTagName("ul");
        for (var i = Elements.length - 1; i >= 0; i--) {
            if ( Elements[i].className.includes("Text") ) {
                Elements[i].classList.remove("UnDisplay");
            } else {
                Elements[i].classList.add("UnDisplay");
            }
        }
        Elements = document.getElementsByTagName("table");
        for (var i = Elements.length - 1; i >= 0; i--) {
            if ( Elements[i].className.includes("Text") ) {
                Elements[i].classList.remove("UnDisplay");
            } else {
                Elements[i].classList.add("UnDisplay");
            }
        }
    }
}