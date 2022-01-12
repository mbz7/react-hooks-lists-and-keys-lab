import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchors = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  ))
      return (
        <nav>
          {anchors}  
        </nav>
  );
}

export default NavBar;

// In the NavBar component, there is an array with three strings representing each link on the page. For each of those strings, create an <a> tag that looks like this:

// <a href="#home">home</a>
// Make sure each <a> element also gets a unique key prop.