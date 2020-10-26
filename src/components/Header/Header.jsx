import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <img
          alt="logo"
          src="data:image/png;base64,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"
          href="/profile"
        />
      </div>
    </header>
  );
};

export default Header;
