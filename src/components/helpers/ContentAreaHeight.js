//import React from 'react'

export const ContentAreaHeight = () => {

    window.onload = () => {

        let headerHeight = document.querySelector(".header").offsetHeight + 30;
        let footerHeight = document.querySelector(".footer").offsetHeight;
        let screenHeight = document.querySelector(".wrapper").offsetHeight;
        let contentHeight = screenHeight - headerHeight - footerHeight - 20 - 10;
        let content = document.querySelector(".content");

        content.style.height = contentHeight + "px";

        //console.log(screenHeight, headerHeight, footerHeight, contentHeight);
    };  
    
}
