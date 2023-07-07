/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

export default function MyMainNav() {
  const [open, setOpen] = useState(false);
  const [openShoppingOnline, setOpenShoppingOnline] = useState(false);
  const [openSocialWebsitesApps, setOpenSocialWebsitesApps] = useState(false);
  const [openOnlineEntertainment, setOpenOnlineEntertainment] = useState(false);
  const [openUsefulWebsitesApps, setOpenUsefulWebsitesApps] = useState(false);
  const [openTechnologyBasics, setOpenTechnologyBasics] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickShoppingOnline = (event) => {
    event.preventDefault();
    setOpenShoppingOnline(!openShoppingOnline);
  };

  const handleClickSocialWebsitesApps = (event) => {
    event.preventDefault();
    setOpenSocialWebsitesApps(!openSocialWebsitesApps);
  };

  const handleClickOnlineEntertainment = (event) => {
    event.preventDefault();
    setOpenOnlineEntertainment(!openOnlineEntertainment);
  };

  const handleClickUsefulWebsitesApps = (event) => {
    event.preventDefault();
    setOpenUsefulWebsitesApps(!openUsefulWebsitesApps);
  };

  const handleClickTechnologyBasics = (event) => {
    event.preventDefault();
    setOpenTechnologyBasics(!openTechnologyBasics);
  };

  const handleMouseOver = (event) => {
    setActiveCategory(event.currentTarget.getAttribute('data-category'));
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <header
      className="site-header"
      role="banner"
      style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <Box display={{ xs: 'block', sm: 'none' }}>
        <div
          className="mobile-nav-bar title-bar"
          data-responsive-toggle="mobile-menu"
          data-e="fkq9tt-e"
        >
          <div className="title-bar-left">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              className="menu-icon"
              type="button"
              // data-toggle="mobile-menu"
              onClick={handleClick}
            />
          </div>
          <div className="title-bar-center">
            <span className="site-mobile-title title-bar-title">
              <a href="https://techboomers.com/">
                <img
                  width="105"
                  height="27"
                  src="https://techboomers.com/wp-content/themes/TechBoomers2018/dist/assets/images/logo-mobile-small.png"
                  alt="techboomers logo"
                />
              </a>
            </span>
          </div>
          {/* <div className="title-bar-right">
            <button
              className="search-icon"
              type="button"
              data-toggle="mobile-menu"
              style={{ height: '16px' }}
            >
              <i className="fa fa-search" />
            </button>
          </div> */}
        </div>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <nav className="vertical menu show-for-small-only" id="mobile-menu" role="navigation">
            <div className="row column">
              <form
                role="search"
                method="get"
                id="search-form-mobile"
                action="https://techboomers.com/"
              >
                <div className="form-icons">
                  <div className="input-group">
                    <span className="input-group-label">
                      <i className="fa fa-search" />
                    </span>
                    <input
                      type="text"
                      className="input-group-field"
                      value=""
                      name="s"
                      placeholder=""
                    />
                    <div className="input-group-button">
                      <input type="submit" id="searchsubmit" value="GO" className="button" />
                    </div>
                  </div>
                </div>
              </form>{' '}
            </div>
            <div className="row">
              <ul
                id="menu-main-mobile"
                className="vertical menu"
                data-accordion-menu=""
                role="tree"
                aria-multiselectable="true"
                data-e="2rhith-e"
              >
                <li
                  id="menu-item-39"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-has-children menu-item-39 is-accordion-submenu-parent"
                  role="treeitem"
                  aria-selected
                  aria-controls="yw69n4-acc-menu"
                  aria-expanded="false"
                >
                  <a
                    href="https://techboomers.com/c/online-shopping-sites-apps"
                    onClick={(e) => handleClickShoppingOnline(e)}
                  >
                    Shopping Online
                  </a>
                  <Collapse in={openShoppingOnline} timeout="auto" unmountOnExit>
                    <ul
                      className={`${
                        openShoppingOnline ? 'is-active ' : ''
                      }'vertical nested menu submenu is-accordion-submenu'`}
                      data-submenu=""
                      role="group"
                      aria-labelledby="menu-item-39"
                      aria-hidden="true"
                      id="yw69n4-acc-menu"
                    >
                      <li
                        id="menu-item-48"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-48 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/buying-selling-online">
                          Buying &amp; Selling
                        </a>
                      </li>
                      <li
                        id="menu-item-50"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-50 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/booking-flights-and-hotels">
                          Flights and Hotels
                        </a>
                      </li>
                      <li
                        id="menu-item-51"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-51 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/vacation-property-rentals">
                          Vacation Rentals
                        </a>
                      </li>
                      <li
                        id="menu-item-49"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-49 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/coupon-discount-shopping">
                          Discount Shopping
                        </a>
                      </li>
                      <li
                        id="menu-item-8064"
                        className="view-all-mobile menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-8064 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/online-shopping-sites-apps">
                          View All ‣
                        </a>
                      </li>
                    </ul>
                  </Collapse>
                </li>
                <li
                  id="menu-item-40"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-40 is-accordion-submenu-parent"
                  role="treeitem"
                  aria-selected
                  aria-controls="wepjba-acc-menu"
                  aria-expanded="false"
                >
                  <a
                    href="https://techboomers.com/c/social-websites-apps"
                    onClick={(e) => handleClickSocialWebsitesApps(e)}
                  >
                    Social Websites and Apps
                  </a>
                  <Collapse in={openSocialWebsitesApps} timeout="auto" unmountOnExit>
                    <ul
                      className={`${
                        openSocialWebsitesApps ? 'is-active ' : ''
                      }'vertical nested menu submenu is-accordion-submenu'`}
                      data-submenu=""
                      role="group"
                      aria-labelledby="menu-item-40"
                      aria-hidden="true"
                      id="wepjba-acc-menu"
                    >
                      <li
                        id="menu-item-54"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-54 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/social-media-networking">
                          Social Networking
                        </a>
                      </li>
                      <li
                        id="menu-item-55"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-55 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/video-and-image-sharing">
                          Video and Image Sharing
                        </a>
                      </li>
                      <li
                        id="menu-item-52"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-52 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/messaging-chat-email">
                          Messaging and Chat
                        </a>
                      </li>
                      <li
                        id="menu-item-53"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-53 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/online-dating">Online Dating</a>
                      </li>
                      <li
                        id="menu-item-8065"
                        className="view-all-mobile menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8065 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/social-websites-apps">View All ‣</a>
                      </li>
                    </ul>
                  </Collapse>
                </li>
                <li
                  id="menu-item-38"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-38 is-accordion-submenu-parent"
                  role="treeitem"
                  aria-selected
                  aria-controls="2yvq1g-acc-menu"
                  aria-expanded="false"
                >
                  <a
                    href="https://techboomers.com/c/entertainment-websites-apps"
                    onClick={(e) => handleClickOnlineEntertainment(e)}
                  >
                    Online Entertainment
                  </a>
                  <Collapse in={openOnlineEntertainment} timeout="auto" unmountOnExit>
                    <ul
                      className={`${
                        openOnlineEntertainment ? 'is-active ' : ''
                      }'vertical nested menu submenu is-accordion-submenu'`}
                      data-submenu=""
                      role="group"
                      aria-labelledby="menu-item-38"
                      aria-hidden="true"
                      id="2yvq1g-acc-menu"
                    >
                      <li
                        id="menu-item-47"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-47 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/streaming-tv-movies">TV and Movies</a>
                      </li>
                      <li
                        id="menu-item-45"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-45 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/stream-music-audiobooks">
                          Music and Audiobooks
                        </a>
                      </li>
                      <li
                        id="menu-item-44"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-44 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/fun-and-games-online">Fun and Games</a>
                      </li>
                      <li
                        id="menu-item-46"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-46 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/news-sports-information">
                          News and Information
                        </a>
                      </li>
                      <li
                        id="menu-item-8063"
                        className="view-all-mobile menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8063 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/entertainment-websites-apps">
                          View All ‣
                        </a>
                      </li>
                    </ul>
                  </Collapse>
                </li>
                <li
                  id="menu-item-42"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-42 is-accordion-submenu-parent"
                  role="treeitem"
                  aria-selected
                  aria-controls="dycg7f-acc-menu"
                  aria-expanded="false"
                >
                  <a
                    href="https://techboomers.com/c/useful-websites-apps"
                    onClick={(e) => handleClickUsefulWebsitesApps(e)}
                  >
                    Useful Websites and Apps
                  </a>
                  <Collapse in={openUsefulWebsitesApps} timeout="auto" unmountOnExit>
                    <ul
                      className={`${
                        openUsefulWebsitesApps ? 'is-active ' : ''
                      }'vertical nested menu submenu is-accordion-submenu'`}
                      data-submenu=""
                      role="group"
                      aria-labelledby="menu-item-42"
                      aria-hidden="true"
                      id="dycg7f-acc-menu"
                    >
                      <li
                        id="menu-item-58"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-58 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/educational-websites-apps">
                          Online Learning
                        </a>
                      </li>
                      <li
                        id="menu-item-59"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-59 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/research-tools-sites-apps">
                          Research Tools
                        </a>
                      </li>
                      <li
                        id="menu-item-56"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-56 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/business-productivity-online">
                          Business and Productivity
                        </a>
                      </li>
                      <li
                        id="menu-item-57"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-57 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/helpful-websites-apps">
                          More Helpful Apps
                        </a>
                      </li>
                      <li
                        id="menu-item-8067"
                        className="view-all-mobile menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8067 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/useful-websites-apps">View All ‣</a>
                      </li>
                    </ul>
                  </Collapse>
                </li>
                <li
                  id="menu-item-41"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-41 is-accordion-submenu-parent"
                  role="treeitem"
                  aria-selected
                  aria-controls="jfd1vi-acc-menu"
                  aria-expanded="false"
                >
                  <a
                    href="https://techboomers.com/c/technology-basics"
                    onClick={(e) => handleClickTechnologyBasics(e)}
                  >
                    Technology Basics
                  </a>
                  <Collapse in={openTechnologyBasics} timeout="auto" unmountOnExit>
                    <ul
                      className={`${
                        openTechnologyBasics ? 'is-active ' : ''
                      }'vertical nested menu submenu is-accordion-submenu'`}
                      data-submenu=""
                      role="group"
                      aria-labelledby="menu-item-41"
                      aria-hidden="true"
                      id="jfd1vi-acc-menu"
                    >
                      <li
                        id="menu-item-63"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-63 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/iphone-ipad-ios-devices">
                          iPhone and iPad
                        </a>
                      </li>
                      <li
                        id="menu-item-60"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-60 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/android-devices">Android</a>
                      </li>
                      <li
                        id="menu-item-61"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-61 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/digital-literacy">Digital Literacy</a>
                      </li>
                      <li
                        id="menu-item-62"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-62 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/internet-basics">Internet 101</a>
                      </li>
                      <li
                        id="menu-item-8066"
                        className="view-all-mobile menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8066 is-submenu-item is-accordion-submenu-item"
                        role="treeitem"
                        aria-selected
                      >
                        <a href="https://techboomers.com/c/technology-basics">View All ‣</a>
                      </li>
                    </ul>
                  </Collapse>
                </li>
              </ul>
            </div>
          </nav>
        </Collapse>
      </Box>

      <Box display={{ xs: 'none', sm: 'block' }}>
        <div className="row expanded collapse hide-for-small-only">
          <div className="column medium-3 large-2">
            <a href="https://techboomers.com/" className="header-home-link">
              <img
                src="https://techboomers.com/wp-content/themes/TechBoomers2018/dist/assets/images/Logo-Tech-Boomers.png"
                alt="techboomers logo"
                width="250"
                height="63"
              />
            </a>
          </div>
          <div className="column medium-7 large-6">
            <form
              role="search"
              method="get"
              id="searchform"
              action="https://techboomers.com/"
              style={{ display: 'inline-block', verticalAlign: 'top' }}
            >
              <div className="form-icons">
                <div className="input-group">
                  <span className="input-group-label">
                    <i className="fa fa-search" />
                  </span>
                  <input
                    className="search-input input-group-field"
                    type="text"
                    name="s"
                    id="s"
                    placeholder="Today I want to learn about..."
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="column medium-2 large-4 text-right">
            <a
              href="http://facebook.com/techboomers"
              target="_blank"
              className="header-social-logo facebook show-for-large"
              rel="noreferrer"
            >
              &nbsp;
            </a>
            <a
              href="https://twitter.com/techboomers"
              target="_blank"
              className="header-social-logo twitter show-for-large"
              rel="noreferrer"
            >
              &nbsp;
            </a>
            <a
              href="https://www.youtube.com/techboomers"
              target="_blank"
              className="header-social-logo youtube show-for-large"
              rel="noreferrer"
            >
              &nbsp;
            </a>
            <a
              href="https://youtu.be/4K_kbuu8RuU"
              data-lity=""
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                margin: '0.5rem 1rem 0.5rem 0',
                verticalAlign: 'bottom',
              }}
            >
              <img
                src="https://techboomers.com/wp-content/themes/TechBoomers2018/dist/assets/images/Take_the_Tour.png"
                alt="take the tour"
              />
            </a>
          </div>
        </div>
        <nav className="megamenu-nav hide-for-small-only" role="navigation">
          <ul id="menu-mega-menu" className="topbar-nav ">
            <li className="course-page-link menu-item menu-item-type-post_type menu-item-object-page">
              <a className="navlink" href="https://techboomers.com/courses">
                Access 100+ Free Courses
              </a>
            </li>
            <li
              data-category="5"
              className={`${
                activeCategory === '5' ? 'active ' : ''
              } menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children online-shopping-sites-apps mega-menu`}
              data-menuloaded="true"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseLeave={handleMouseLeave}
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="navlink" href="#">
                Shopping Online
              </a>
              <div className="subcategory-nav-container">
                {/* active class is added to the following element */}
                <div className={`${activeCategory === '5' ? 'active ' : ''} subcategory-nav`}>
                  <ul className="subcat-nav-list">
                    {/* class changes from current-post-** to current-catetory-** and active is added */}
                    <li
                      data-category="5"
                      className={`${
                        activeCategory === '5' ? 'active ' : ''
                      } menu-item menu-item-type-taxonomy menu-item-object-category online-shopping-sites-apps`}
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/online-shopping-sites-apps"
                        data-category="online-shopping-sites-apps"
                      >
                        All Topics
                      </a>
                    </li>
                    <li
                      data-category="10"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category buying-selling-online"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/buying-selling-online"
                        data-category="buying-selling-online"
                      >
                        Buying &amp; Selling
                      </a>
                    </li>
                    <li
                      data-category="11"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent booking-flights-and-hotels"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/booking-flights-and-hotels"
                        data-category="booking-flights-and-hotels"
                      >
                        Flights and Hotels
                      </a>
                    </li>
                    <li
                      data-category="12"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent vacation-property-rentals"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/vacation-property-rentals"
                        data-category="vacation-property-rentals"
                      >
                        Vacation Rentals
                      </a>
                    </li>
                    <li
                      data-category="13"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category coupon-discount-shopping"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/coupon-discount-shopping"
                        data-category="coupon-discount-shopping"
                      >
                        Discount Shopping
                      </a>
                    </li>
                  </ul>
                  <div className="category-panels">
                    <div
                      className={`${
                        activeCategory === '5' ? 'active ' : ''
                      } category category-items row`}
                      data-category="online-shopping-sites-apps"
                    >
                      <div className="column medium-4 large-3">
                        <h3>Popular Courses</h3>
                        <ul className="popular-courses">
                          <li>
                            <a href="https://techboomers.com/p/ebay">Buying on eBay</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/how-to-sell-on-ebay">
                              Selling on eBay
                            </a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/amazon">Amazon</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/expedia">Expedia</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/priceline">Priceline</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/stubhub">StubHub</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/paypal">PayPal</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/airbnb">Airbnb</a>
                          </li>
                        </ul>
                        <p>
                          <a href="https://techboomers.com/c/online-shopping-sites-apps#courses">
                            View all Courses
                          </a>
                        </p>
                      </div>
                      <div className="column medium-8 large-9">
                        <h3>Featured and Trending &quot;Shopping Online&quot; Articles</h3>
                        <div className="row">
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/amazon-alternative-belgium"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width={240}
                                  height={150}
                                  src="https://techboomers.com/wp-content/uploads/2022/06/amazon-alternatives-belgium-240x150.png"
                                  className="category-blue wp-post-image"
                                  alt="Amazon Alternatives in Belgium"
                                  decoding="async"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    13 Amazon Alternatives in Belgium for Finding Quality Products
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/netherlands-amazon-alternative"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width={240}
                                  height={150}
                                  src="https://techboomers.com/wp-content/uploads/2022/06/amazon-alternatives-netherlands-240x150.png"
                                  className="category-blue wp-post-image"
                                  alt="Amazon Alternatives in the Netherlands"
                                  decoding="async"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    14 Amazon Alternatives in the Netherlands for Online Shopping
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-large">
                            <a
                              href="https://techboomers.com/amazon-alternative-pakistan"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width={240}
                                  height={150}
                                  src="https://techboomers.com/wp-content/uploads/2022/06/amazon-alternatives-pakistan-240x150.png"
                                  className="category-blue wp-post-image"
                                  alt="Amazon alternatives in Pakistan"
                                  decoding="async"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    22 Amazon Alternatives in Pakistan for Buying Popular Products
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-xlarge">
                            <a
                              href="https://techboomers.com/amazon-alternative-germany"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width={240}
                                  height={150}
                                  src="https://techboomers.com/wp-content/uploads/2022/06/amazon-alternatives-germany-240x150.png"
                                  className="category-blue wp-post-image"
                                  alt="Amazon alternatives in Germany"
                                  decoding="async"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    17 Amazon Alternatives in Germany for Great Products &amp;
                                    Discounts
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column medium-12 large-8 xlarge-6">
                            <a
                              href="https://techboomers.com/amazon-alternative-thailand"
                              className="card-link"
                            >
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width={200}
                                    height={150}
                                    src="https://techboomers.com/wp-content/uploads/2022/06/amazon-alternatives-thailand-200x150.png"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="Amazon alternatives in Thailand"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2022/06/amazon-alternatives-thailand-200x150.png 200w, https://techboomers.com/wp-content/uploads/2022/06/amazon-alternatives-thailand-420x315.png 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-blue" />
                                  <div className="card-section">
                                    <h5>
                                      9 Amazon Alternatives in Thailand for Great Deals On
                                      Everything
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-12 large-8 xlarge-6 show-for-xlarge">
                            <a
                              href="https://techboomers.com/amazon-alternative-singapore"
                              className="card-link"
                            >
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width={200}
                                    height={150}
                                    src="https://techboomers.com/wp-content/uploads/2022/05/amazon-alternatives-singapore-200x150.png"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="Amazon Alternatives in Singapore"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2022/05/amazon-alternatives-singapore-200x150.png 200w, https://techboomers.com/wp-content/uploads/2022/05/amazon-alternatives-singapore-420x315.png 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-blue" />
                                  <div className="card-section">
                                    <h5>
                                      21 Websites Like Amazon in Singapore for Shopping Online
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <p>
                            <a href="https://techboomers.com/c/online-shopping-sites-apps">
                              View all Articles
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              data-category="7"
              className={`${
                activeCategory === '7' ? 'active ' : ''
              } menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children entertainment-websites-apps mega-menu`}
              data-menuloaded="true"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseLeave={handleMouseLeave}
            >
              <a className="navlink" href="#">
                Online Entertainment
              </a>
              <div className="subcategory-nav-container">
                <div className={`${activeCategory === '7' ? 'active ' : ''} subcategory-nav`}>
                  <ul className="subcat-nav-list">
                    <li
                      data-category="7"
                      className={`${
                        activeCategory === '7' ? 'active ' : ''
                      } menu-item menu-item-type-taxonomy menu-item-object-category entertainment-websites-apps`}
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/entertainment-websites-apps"
                        data-category="entertainment-websites-apps"
                      >
                        All Topics
                      </a>
                    </li>
                    <li
                      data-category="18"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category streaming-tv-movies"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/streaming-tv-movies"
                        data-category="streaming-tv-movies"
                      >
                        TV and Movies
                      </a>
                    </li>
                    <li
                      data-category="19"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category stream-music-audiobooks"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/stream-music-audiobooks"
                        data-category="stream-music-audiobooks"
                      >
                        Music and Audiobooks
                      </a>
                    </li>
                    <li
                      data-category="20"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category fun-and-games-online"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/fun-and-games-online"
                        data-category="fun-and-games-online"
                      >
                        Fun and Games
                      </a>
                    </li>
                    <li
                      data-category="21"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category news-sports-information"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/news-sports-information"
                        data-category="news-sports-information"
                      >
                        News and Information
                      </a>
                    </li>
                  </ul>
                  <div className="category-panels">
                    <div
                      className={`${
                        activeCategory === '7' ? 'active ' : ''
                      } category category-items row`}
                      data-category="entertainment-websites-apps"
                    >
                      <div className="column medium-4 large-3">
                        <h3>Popular Courses</h3>
                        <ul className="popular-courses">
                          <li>
                            <a href="https://techboomers.com/p/netflix">Netflix</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/spotify">Spotify</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/hulu">Hulu</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/pokemon-go">Pokémon Go</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/candy-crush-saga">
                              Candy Crush Saga
                            </a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/hbo-now">HBO Now</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/soundcloud">SoundCloud</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/imdb">IMDB</a>
                          </li>
                        </ul>
                        <p>
                          <a href="https://techboomers.com/c/entertainment-websites-apps#courses">
                            View all Courses
                          </a>
                        </p>
                      </div>
                      <div className="column medium-8 large-9">
                        <h3>Featured and Trending &quot;Online Entertainment&quot; Articles</h3>
                        <div className="row">
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/spotify-vs-apple-music"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2019/02/spotify-vs-apple-music-h-240x150.jpg"
                                  className="category-green wp-post-image"
                                  alt="Spotify vs. Apple Music header"
                                  loading="lazy"
                                  srcSet="https://techboomers.com/wp-content/uploads/2019/02/spotify-vs-apple-music-h-240x150.jpg 240w, https://techboomers.com/wp-content/uploads/2019/02/spotify-vs-apple-music-h-150x94.jpg 150w, https://techboomers.com/wp-content/uploads/2019/02/spotify-vs-apple-music-h-300x188.jpg 300w, https://techboomers.com/wp-content/uploads/2019/02/spotify-vs-apple-music-h-768x480.jpg 768w, https://techboomers.com/wp-content/uploads/2019/02/spotify-vs-apple-music-h-640x400.jpg 640w, https://techboomers.com/wp-content/uploads/2019/02/spotify-vs-apple-music-h.jpg 800w"
                                  sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 240px"
                                />
                                <div className="card-section">
                                  <h5>
                                    Spotify vs. Apple Music: A Music Streaming Service Showdown
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/free-ecards-online-greeting-cards"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2018/12/special-occasion-greeting-h-240x150.png"
                                  className="category-green wp-post-image"
                                  alt="Best Free Online Greeting Cards header"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    Free E-Cards and Online Greeting Cards: The 7 Best Places to Get
                                    Them
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-large">
                            <a
                              href="https://techboomers.com/save-gif-on-computer"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2018/11/save-gif-on-computer-240x150.png"
                                  className="category-green wp-post-image"
                                  alt="How to Save a GIF on Computer header"
                                  loading="lazy"
                                  srcSet="https://techboomers.com/wp-content/uploads/2018/11/save-gif-on-computer-240x150.png 240w, https://techboomers.com/wp-content/uploads/2018/11/save-gif-on-computer-150x94.png 150w, https://techboomers.com/wp-content/uploads/2018/11/save-gif-on-computer-300x188.png 300w, https://techboomers.com/wp-content/uploads/2018/11/save-gif-on-computer-768x480.png 768w, https://techboomers.com/wp-content/uploads/2018/11/save-gif-on-computer-640x400.png 640w, https://techboomers.com/wp-content/uploads/2018/11/save-gif-on-computer.png 800w"
                                  sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 240px"
                                />
                                <div className="card-section">
                                  <h5>How to Save a GIF on Your Computer</h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-xlarge">
                            <a
                              href="https://techboomers.com/watch-best-quality-game-of-thrones"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2018/08/watch-game-of-thrones-h-240x150.jpg"
                                  className="category-green wp-post-image"
                                  alt="How to Watch Best Quality Game of Thrones header"
                                  loading="lazy"
                                  srcSet="https://techboomers.com/wp-content/uploads/2018/08/watch-game-of-thrones-h-240x150.jpg 240w, https://techboomers.com/wp-content/uploads/2018/08/watch-game-of-thrones-h-150x94.jpg 150w, https://techboomers.com/wp-content/uploads/2018/08/watch-game-of-thrones-h-300x188.jpg 300w, https://techboomers.com/wp-content/uploads/2018/08/watch-game-of-thrones-h-768x480.jpg 768w, https://techboomers.com/wp-content/uploads/2018/08/watch-game-of-thrones-h-640x400.jpg 640w, https://techboomers.com/wp-content/uploads/2018/08/watch-game-of-thrones-h.jpg 800w"
                                  sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 240px"
                                />
                                <div className="card-section">
                                  <h5>
                                    How to Watch the Best Quality Game of Thrones for Free with HBO
                                    Now
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column medium-12 large-8 xlarge-6">
                            <a
                              href="https://techboomers.com/how-to-block-youtube-on-your-computer"
                              className="card-link"
                            >
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width="200"
                                    height="150"
                                    src="https://techboomers.com/wp-content/uploads/2018/07/how-to-block-youtube-h-200x150.jpg"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="How to Block YouTube header"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2018/07/how-to-block-youtube-h-200x150.jpg 200w, https://techboomers.com/wp-content/uploads/2018/07/how-to-block-youtube-h-420x315.jpg 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-green" />
                                  <div className="card-section">
                                    <h5>
                                      How to Block YouTube on Your Computer and Mobile Devices
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-12 large-8 xlarge-6 show-for-xlarge">
                            <a
                              href="https://techboomers.com/delete-spotify-account"
                              className="card-link"
                            >
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width="200"
                                    height="150"
                                    src="https://techboomers.com/wp-content/uploads/2018/03/delete-spotify-account-200x150.png"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="How to Delete a Spotify Account header"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2018/03/delete-spotify-account-200x150.png 200w, https://techboomers.com/wp-content/uploads/2018/03/delete-spotify-account-420x315.png 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-green" />
                                  <div className="card-section">
                                    <h5>How to Delete Your Spotify Account</h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <p>
                            <a href="https://techboomers.com/c/entertainment-websites-apps">
                              View all Articles
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              data-category="6"
              className={`${
                activeCategory === '6' ? 'active ' : ''
              } menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children social-websites-apps mega-menu`}
              data-menuloaded="true"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseLeave={handleMouseLeave}
            >
              <a className="navlink" href="#">
                Social Websites and Apps
              </a>
              <div className="subcategory-nav-container">
                <div className={`${activeCategory === '6' ? 'active ' : ''} subcategory-nav`}>
                  <ul className="subcat-nav-list">
                    <li
                      data-category="6"
                      className={`${
                        activeCategory === '6' ? 'active ' : ''
                      } menu-item menu-item-type-taxonomy menu-item-object-category social-websites-apps`}
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/social-websites-apps"
                        data-category="social-websites-apps"
                      >
                        All Topics
                      </a>
                    </li>
                    <li
                      data-category="14"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category social-media-networking"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/social-media-networking"
                        data-category="social-media-networking"
                      >
                        Social Networking
                      </a>
                    </li>
                    <li
                      data-category="15"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category video-and-image-sharing"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/video-and-image-sharing"
                        data-category="video-and-image-sharing"
                      >
                        Video and Image Sharing
                      </a>
                    </li>
                    <li
                      data-category="16"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category messaging-chat-email"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/messaging-chat-email"
                        data-category="messaging-chat-email"
                      >
                        Messaging and Chat
                      </a>
                    </li>
                    <li
                      data-category="17"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category online-dating"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/online-dating"
                        data-category="online-dating"
                      >
                        Online Dating
                      </a>
                    </li>
                  </ul>
                  <div className="category-panels">
                    <div
                      className={`${
                        activeCategory === '6' ? 'active ' : ''
                      } category category-items row`}
                      data-category="social-websites-apps"
                    >
                      <div className="column medium-4 large-3">
                        <h3>Popular Courses</h3>
                        <ul className="popular-courses">
                          <li>
                            <a href="https://techboomers.com/p/facebook">Facebook</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/skype">Skype</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/gmail">Gmail</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/pinterest">Pinterest</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/youtube">YouTube</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/evernote">Evernote</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/whatsapp">WhatsApp</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/snapchat">Snapchat</a>
                          </li>
                        </ul>
                        <p>
                          <a href="https://techboomers.com/c/social-websites-apps#courses">
                            View all Courses
                          </a>
                        </p>
                      </div>
                      <div className="column medium-8 large-9">
                        <h3>Featured and Trending &quot;Social Websites and Apps&quot; Articles</h3>
                        <div className="row">
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/zoom-slack-integration"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2020/11/zoom-integrate-slack-240x150.png"
                                  className="category-red wp-post-image"
                                  alt="A laptop with the Zoom and Slack logos together"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>Zoom + Slack Integration: Create Instant Team Meetings</h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/download-zoom-recording"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2020/11/download-zoom-recording-240x150.png"
                                  className="category-red wp-post-image"
                                  alt="Laptop downloading a recording from the Zoom cloud server"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    How to Find and Download Zoom Recordings: Local, Cloud, and
                                    Shared
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-large">
                            <a
                              href="https://techboomers.com/zoom-breakout-rooms"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2020/11/zoom-breakout-rooms-240x150.png"
                                  className="category-red wp-post-image"
                                  alt="Zoom Breakout Rooms feature"
                                  loading="lazy"
                                  srcSet="https://techboomers.com/wp-content/uploads/2020/11/zoom-breakout-rooms-240x150.png 240w, https://techboomers.com/wp-content/uploads/2020/11/zoom-breakout-rooms-300x188.png 300w, https://techboomers.com/wp-content/uploads/2020/11/zoom-breakout-rooms-150x94.png 150w, https://techboomers.com/wp-content/uploads/2020/11/zoom-breakout-rooms-768x480.png 768w, https://techboomers.com/wp-content/uploads/2020/11/zoom-breakout-rooms-640x400.png 640w, https://techboomers.com/wp-content/uploads/2020/11/zoom-breakout-rooms.png 800w"
                                  sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 240px"
                                />
                                <div className="card-section">
                                  <h5>
                                    Zoom Breakout Rooms: How to Enable &amp; Use Them for Group
                                    Sessions
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-xlarge">
                            <a href="https://techboomers.com/zoom-co-host" className="card-link">
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2020/10/zoom-assign-co-host-240x150.png"
                                  className="category-red wp-post-image"
                                  alt="Assign a Zoom co-host"
                                  loading="lazy"
                                  srcSet="https://techboomers.com/wp-content/uploads/2020/10/zoom-assign-co-host-240x150.png 240w, https://techboomers.com/wp-content/uploads/2020/10/zoom-assign-co-host-300x188.png 300w, https://techboomers.com/wp-content/uploads/2020/10/zoom-assign-co-host-150x94.png 150w, https://techboomers.com/wp-content/uploads/2020/10/zoom-assign-co-host-768x480.png 768w, https://techboomers.com/wp-content/uploads/2020/10/zoom-assign-co-host-640x400.png 640w, https://techboomers.com/wp-content/uploads/2020/10/zoom-assign-co-host.png 800w"
                                  sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 240px"
                                />
                                <div className="card-section">
                                  <h5>
                                    Zoom Co-Host: What It Is, How to Enable It, and How to Assign
                                    One
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column medium-12 large-8 xlarge-6">
                            <a
                              href="https://techboomers.com/how-to-record-zoom-meeting"
                              className="card-link"
                            >
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width="200"
                                    height="150"
                                    src="https://techboomers.com/wp-content/uploads/2020/10/record-zoom-meeting-200x150.png"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="Laptop showing a Zoom meeting with a hand cursor pointing towards a recording indicator"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2020/10/record-zoom-meeting-200x150.png 200w, https://techboomers.com/wp-content/uploads/2020/10/record-zoom-meeting-420x315.png 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-red" />
                                  <div className="card-section">
                                    <h5>
                                      How to Record a Zoom Meeting: Instructions for Desktop &amp;
                                      Mobile
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-12 large-8 xlarge-6 show-for-xlarge">
                            <a href="https://techboomers.com/tik-tok-stand" className="card-link">
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width="200"
                                    height="150"
                                    src="https://techboomers.com/wp-content/uploads/2020/10/tiktok-stand-200x150.png"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="TikTok stands for great lighting"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2020/10/tiktok-stand-200x150.png 200w, https://techboomers.com/wp-content/uploads/2020/10/tiktok-stand-420x315.png 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-red" />
                                  <div className="card-section">
                                    <h5>
                                      The 7 Best TikTok Stands to Shoot Steady Videos for Your
                                      Followers
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <p>
                            <a href="https://techboomers.com/c/social-websites-apps">
                              View all Articles
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              data-category="8"
              className={`${
                activeCategory === '8' ? 'active ' : ''
              } menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children useful-websites-apps mega-menu`}
              data-menuloaded="true"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseLeave={handleMouseLeave}
            >
              <a className="navlink" href="#">
                Useful Websites and Apps
              </a>
              <div className="subcategory-nav-container">
                <div className={`${activeCategory === '8' ? 'active ' : ''} subcategory-nav`}>
                  <ul className="subcat-nav-list">
                    <li
                      data-category="8"
                      className={`${
                        activeCategory === '8' ? 'active ' : ''
                      } menu-item menu-item-type-taxonomy menu-item-object-category useful-websites-apps`}
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/useful-websites-apps"
                        data-category="useful-websites-apps"
                      >
                        All Topics
                      </a>
                    </li>
                    <li
                      data-category="22"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category educational-websites-apps"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/educational-websites-apps"
                        data-category="educational-websites-apps"
                      >
                        Online Learning
                      </a>
                    </li>
                    <li
                      data-category="23"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category research-tools-sites-apps"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/research-tools-sites-apps"
                        data-category="research-tools-sites-apps"
                      >
                        Research Tools
                      </a>
                    </li>
                    <li
                      data-category="24"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category business-productivity-online"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/business-productivity-online"
                        data-category="business-productivity-online"
                      >
                        Business and Productivity
                      </a>
                    </li>
                    <li
                      data-category="25"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category helpful-websites-apps"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/helpful-websites-apps"
                        data-category="helpful-websites-apps"
                      >
                        More Helpful Apps
                      </a>
                    </li>
                  </ul>
                  <div className="category-panels">
                    <div
                      className={`${
                        activeCategory === '8' ? 'active ' : ''
                      } category category-items row`}
                      data-category="useful-websites-apps"
                    >
                      <div className="column medium-4 large-3">
                        <h3>Popular Courses</h3>
                        <ul className="popular-courses">
                          <li>
                            <a href="https://techboomers.com/p/udemy">Udemy</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/coursera">Coursera</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/ancestry">Ancestry</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/angies-list">Angie&apos;s List</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/wix">Wix</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/weebly">Weebly</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/wikipedia">Wikipedia</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/techboomers">TechBoomers</a>
                          </li>
                        </ul>
                        <p>
                          <a href="https://techboomers.com/c/useful-websites-apps#courses">
                            View all Courses
                          </a>
                        </p>
                      </div>
                      <div className="column medium-8 large-9">
                        <h3>Featured and Trending &quot;Useful Websites and Apps&quot; Articles</h3>
                        <div className="row">
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/best-baggage-x-ray-scanners"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width={240}
                                  height={150}
                                  src="https://techboomers.com/wp-content/uploads/2021/12/best-xray-baggage-scanners-240x150.jpg"
                                  className="category-orange wp-post-image"
                                  alt="An X-ray scanner processing different types of baggage"
                                  decoding="async"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    Best X-Ray Baggage Scanners for Luggage &amp; Airport Security
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/best-mailroom-x-ray-scanners"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width={240}
                                  height={150}
                                  src="https://techboomers.com/wp-content/uploads/2021/10/best-mailroom-xray-scanners-240x150.png"
                                  className="category-orange wp-post-image"
                                  alt="A conveyor-type x-ray machine passing a parcel through and detecting a threat"
                                  decoding="async"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    Best Mailroom X-Ray Scanners for Mail, Packages, and Parcels
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-large">
                            <a
                              href="https://techboomers.com/sittercity-vs-care-com"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width={240}
                                  height={150}
                                  src="https://techboomers.com/wp-content/uploads/2021/05/nanny-playing-240x150.jpg"
                                  className="category-orange wp-post-image"
                                  alt="Nanny playing with two children"
                                  decoding="async"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    Sittercity vs. Care.com: Finding the Best Care for Your Family
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-xlarge">
                            <a
                              href="https://techboomers.com/mailroom-screening"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width={240}
                                  height={150}
                                  src="https://techboomers.com/wp-content/uploads/2021/05/mail-inspection-240x150.jpg"
                                  className="category-orange wp-post-image"
                                  alt="A customs agent and an agriculture specialist inspecting a package"
                                  decoding="async"
                                  loading="lazy"
                                  srcSet="https://techboomers.com/wp-content/uploads/2021/05/mail-inspection-240x150.jpg 240w, https://techboomers.com/wp-content/uploads/2021/05/mail-inspection-300x189.jpg 300w, https://techboomers.com/wp-content/uploads/2021/05/mail-inspection-150x94.jpg 150w, https://techboomers.com/wp-content/uploads/2021/05/mail-inspection-768x483.jpg 768w, https://techboomers.com/wp-content/uploads/2021/05/mail-inspection-640x402.jpg 640w, https://techboomers.com/wp-content/uploads/2021/05/mail-inspection.jpg 800w"
                                  sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 240px"
                                />
                                <div className="card-section">
                                  <h5>The Ultimate Guide to Mailroom Screening and Security</h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column medium-12 large-8 xlarge-6">
                            <a
                              href="https://techboomers.com/mailroom-security-best-practices"
                              className="card-link"
                            >
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width={200}
                                    height={150}
                                    src="https://techboomers.com/wp-content/uploads/2021/04/mail-inspection-200x150.jpg"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="A person screening mail"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2021/04/mail-inspection-200x150.jpg 200w, https://techboomers.com/wp-content/uploads/2021/04/mail-inspection-420x315.jpg 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-orange" />
                                  <div className="card-section">
                                    <h5>
                                      Mailroom Security: Best Practices and Screening Procedures
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-12 large-8 xlarge-6 show-for-xlarge">
                            <a
                              href="https://techboomers.com/udacity-vs-coursera"
                              className="card-link"
                            >
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width={200}
                                    height={150}
                                    src="https://techboomers.com/wp-content/uploads/2021/04/udacity-vs-coursera-200x150.png"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="Laptop displaying ‘Udacity vs. Coursera’"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2021/04/udacity-vs-coursera-200x150.png 200w, https://techboomers.com/wp-content/uploads/2021/04/udacity-vs-coursera-420x315.png 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-orange" />
                                  <div className="card-section">
                                    <h5>
                                      Udacity vs. Coursera: Business vs. Academic E-Learning
                                      Approaches
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <p>
                            <a href="https://techboomers.com/c/useful-websites-apps">
                              View all Articles
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              data-category="9"
              className={`${
                activeCategory === '9' ? 'active ' : ''
              } menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children technology-basics mega-menu`}
              data-menuloaded="true"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseLeave={handleMouseLeave}
            >
              <a className="navlink" href="#">
                Technology Basics
              </a>
              <div className="subcategory-nav-container">
                <div className={`${activeCategory === '9' ? 'active ' : ''} subcategory-nav`}>
                  <ul className="subcat-nav-list">
                    <li
                      data-category="9"
                      className={`${
                        activeCategory === '9' ? 'active ' : ''
                      } menu-item menu-item-type-taxonomy menu-item-object-category technology-basics`}
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/technology-basics"
                        data-category="technology-basics"
                      >
                        All Topics
                      </a>
                    </li>
                    <li
                      data-category="26"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category iphone-ipad-ios-devices"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/iphone-ipad-ios-devices"
                        data-category="iphone-ipad-ios-devices"
                      >
                        iPhone and iPad
                      </a>
                    </li>
                    <li
                      data-category="27"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category android-devices"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/android-devices"
                        data-category="android-devices"
                      >
                        Android
                      </a>
                    </li>
                    <li
                      data-category="28"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category digital-literacy"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/digital-literacy"
                        data-category="digital-literacy"
                      >
                        Digital Literacy
                      </a>
                    </li>
                    <li
                      data-category="29"
                      className=" menu-item menu-item-type-taxonomy menu-item-object-category internet-basics"
                    >
                      <a
                        className="navlink"
                        href="https://techboomers.com/c/internet-basics"
                        data-category="internet-basics"
                      >
                        Internet 101
                      </a>
                    </li>
                  </ul>
                  <div className="category-panels">
                    <div
                      className={`${
                        activeCategory === '9' ? 'active ' : ''
                      } category category-items row`}
                      data-category="technology-basics"
                    >
                      <div className="column medium-4 large-3">
                        <h3>Popular Courses</h3>
                        <ul className="popular-courses">
                          <li>
                            <a href="https://techboomers.com/p/introduction-to-the-internet">
                              Intro to the Internet
                            </a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/internet-safety">Internet Safety</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/internet-privacy">
                              Internet Privacy
                            </a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/passwords">Passwords</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/wifi">Wi-Fi</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/udemy">Udemy</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/coursera">Coursera</a>
                          </li>
                          <li>
                            <a href="https://techboomers.com/p/techboomers">TechBoomers</a>
                          </li>
                        </ul>
                        <p>
                          <a href="https://techboomers.com/c/technology-basics#courses">
                            View all Courses
                          </a>
                        </p>
                      </div>
                      <div className="column medium-8 large-9">
                        <h3>Featured and Trending &quot;Technology Basics&quot; Articles</h3>
                        <div className="row">
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/best-digital-literacy-organizations"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2020/09/global-network-240x150.png"
                                  className="category-navy wp-post-image"
                                  alt="Digital connection around the world"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    31 Best Digital Literacy Organizations: Bridging the Digital Gap
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3">
                            <a
                              href="https://techboomers.com/50-plus-world-social-media-mysteries"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2019/05/social-media-mysteries-header-240x150.png"
                                  className="category-navy wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    Twitter, Instagram, &amp; Pinterest: Social Media Mysteries
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-large">
                            <a
                              href="https://techboomers.com/data-privacy-day"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2019/01/data-privacy-day-h-240x150.jpg"
                                  className="category-navy wp-post-image"
                                  alt="Data Privacy Day header"
                                  loading="lazy"
                                  srcSet="https://techboomers.com/wp-content/uploads/2019/01/data-privacy-day-h-240x150.jpg 240w, https://techboomers.com/wp-content/uploads/2019/01/data-privacy-day-h-150x94.jpg 150w, https://techboomers.com/wp-content/uploads/2019/01/data-privacy-day-h-300x188.jpg 300w, https://techboomers.com/wp-content/uploads/2019/01/data-privacy-day-h-768x480.jpg 768w, https://techboomers.com/wp-content/uploads/2019/01/data-privacy-day-h-640x400.jpg 640w, https://techboomers.com/wp-content/uploads/2019/01/data-privacy-day-h.jpg 800w"
                                  sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 240px"
                                />
                                <div className="card-section">
                                  <h5>
                                    Guide to Data Privacy Day: What It Is and How to Stay Safe
                                    Online
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-6 large-4 xlarge-3 show-for-xlarge">
                            <a
                              href="https://techboomers.com/take-rideshare-app-home-from-office-parties"
                              className="card-link"
                            >
                              <div className="card card-tall">
                                <img
                                  width="240"
                                  height="150"
                                  src="https://techboomers.com/wp-content/uploads/2018/01/get-uber-lyft-ride-home-h-240x150.jpg"
                                  className="category-navy wp-post-image"
                                  alt="How to take a rideshare home header"
                                  loading="lazy"
                                />
                                <div className="card-section">
                                  <h5>
                                    Ride an Uber/Lyft Home from an Office Party: Stay Safe and Save
                                    Money
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column medium-12 large-8 xlarge-6">
                            <a
                              href="https://techboomers.com/transfer-data-from-old-iphone-to-new-iphone"
                              className="card-link"
                            >
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width="200"
                                    height="150"
                                    src="https://techboomers.com/wp-content/uploads/2018/10/transfer-data-between-iphones-h-1-200x150.jpg"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="How to Transfer Data Between iPhones header"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2018/10/transfer-data-between-iphones-h-1-200x150.jpg 200w, https://techboomers.com/wp-content/uploads/2018/10/transfer-data-between-iphones-h-1-420x315.jpg 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-navy" />
                                  <div className="card-section">
                                    <h5>
                                      How to Transfer All Data and Apps from Old iPhone to New
                                      iPhone
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="column medium-12 large-8 xlarge-6 show-for-xlarge">
                            <a
                              href="https://techboomers.com/how-to-recover-deleted-voicemails-on-iphone"
                              className="card-link"
                            >
                              <div className="row card horizontal collapse card-medium">
                                <div className="column medium-4 hide-for-small-only">
                                  <img
                                    width="200"
                                    height="150"
                                    src="https://techboomers.com/wp-content/uploads/2018/08/recover-deleted-iphone-voicemails-h-200x150.jpg"
                                    className="attachment-best-card size-best-card wp-post-image"
                                    alt="How to Recover Deleted iPhone Voicemails header"
                                    loading="lazy"
                                    srcSet="https://techboomers.com/wp-content/uploads/2018/08/recover-deleted-iphone-voicemails-h-200x150.jpg 200w, https://techboomers.com/wp-content/uploads/2018/08/recover-deleted-iphone-voicemails-h-420x315.jpg 420w"
                                    sizes="(max-width: 639px) 98vw, (max-width: 1199px) 64vw, 200px"
                                  />
                                </div>
                                <div className="column small-12 medium-8">
                                  <div className="card-divider category-navy" />
                                  <div className="card-section">
                                    <h5>How to Recover Deleted Voicemails on iPhone</h5>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <p>
                            <a href="https://techboomers.com/c/technology-basics">
                              View all Articles
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </Box>
    </header>
  );
}
