import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "PR Firm In India - Confiance Communications"; // default
    let description = ""; // default

    switch (location.pathname) {
      case "/":
        title = "PR Firm In India - Confiance Communications";
        description = "";
        break;
      case "/about":
        title = "About Us - Confiance Communications";
        description = "";
        break;
      case "/contact":
        title = "Contact Us - Confiance Communications";
        description = "";
        break;
      default:
        title = "PR Firm In India - Confiance Communications";
        description = "";
    }

    // Page Title update
    document.title = title;

    // Meta Title & Description update
    let metaTitle = document.querySelector("meta[name='title']");
    let metaDesc = document.querySelector("meta[name='description']");

    if (metaTitle) metaTitle.setAttribute('content', title);
    if (metaDesc) metaDesc.setAttribute('content', description);

  }, [location]);

  return null; // doesn’t render anything visible
};

export default PageTitle;
