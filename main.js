let docBody = document.querySelector("body");

let mainButton = document.createElement("button");
mainButton.className = "main-button";
mainButton.append("Hello!");
docBody.append(mainButton);

let mainDiv = document.createElement("main");
mainDiv.className = "main-div";
docBody.append(mainDiv);

let mainImg = document.createElement("img");
mainImg.src = "https://s31606.pcdn.co/wp-content/uploads/2016/01/chicago.jpg";
mainDiv.append(mainImg);

let mainLink = document.createElement("a");
mainLink.className = "main-link";
mainLink.append("Google");
mainLink.href = "https://www.google.com";
mainLink.target = "_blank";
mainDiv.append(mainLink);
