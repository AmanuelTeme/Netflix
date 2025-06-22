import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/NetflixLogo.jpg";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for click outside functionality
  const profileDropdownRef = useRef(null);
  const mobileNavRef = useRef(null); // Ref for the mobile navigation list (ul)
  const mobileNavToggleRef = useRef(null); // Ref for the mobile navigation toggle button

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Handle click outside for both dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Profile Dropdown
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }

      // Mobile Navigation
      if (
        isMobileNavOpen && // Only run if mobile nav is open
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        mobileNavToggleRef.current &&
        !mobileNavToggleRef.current.contains(event.target)
      ) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileNavOpen, isProfileDropdownOpen]); // Add dependencies to re-run effect if states change (though mousedown is global)

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`header-container ${isScrolled ? "scrolled" : ""} ${
          isMobileNavOpen ? "mobile-nav-active" : ""
        }`}
      >
        <div className="header-wrapper">
          <div className="header-left">
            <img src={Logo} alt="Netflix Logo" className="header-logo" />
            <ul
              ref={mobileNavRef}
              className={`header-nav-links ${isMobileNavOpen ? "open" : ""}`}
            >
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>

          <div className="header-right">
            <div className="header-icon-link">
              <SearchIcon className="header-icon" />
              <NotificationsNoneIcon className="header-icon" />

              <div className="profile-menu-container" ref={profileDropdownRef}>
                <div
                  className="profile-activator"
                  onClick={toggleProfileDropdown}
                >
                  <AccountBoxIcon
                    className={`header-icon profile-icon-main ${
                      isProfileDropdownOpen ? "active" : ""
                    }`}
                  />
                </div>

                {isProfileDropdownOpen && (
                  <div className="profile-dropdown">
                    <div className="profile-dropdown-user">
                      <AccountBoxIcon
                        style={{ fontSize: "30px", marginRight: "10px" }}
                      />
                      <span>User Name</span> {/* Placeholder */}
                    </div>
                    <hr className="dropdown-divider-bold" />
                    <p onClick={() => alert("Manage Profiles clicked")}>
                      Manage Profiles
                    </p>
                    <p onClick={() => alert("Account clicked")}>Account</p>
                    <p onClick={() => alert("Help Center clicked")}>
                      Help Center
                    </p>
                    <hr className="dropdown-divider" />
                    <p
                      className="sign-out"
                      onClick={() => alert("Signing out...")}
                    >
                      Sign Out of Netflix
                    </p>
                  </div>
                )}
              </div>
              <KeyboardArrowDownIcon />
            </div>

            {/* Mobile Menu Toggle */}
            <div
              ref={mobileNavToggleRef}
              className="mobile-menu-toggle"
              onClick={toggleMobileNav}
            >
              <IoMenu
                className={`header-icon mobile-nav-arrow ${
                  isMobileNavOpen ? "open" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
