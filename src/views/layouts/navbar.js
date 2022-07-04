import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <header>
                <div className="mobile-fix-option"></div>
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-contact">
                                    <ul>
                                        <li>Welcome to Our store Multikart</li>
                                        <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123 - 456 - 7890</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul className="header-dropdown">
                                    <li className="mobile-wishlist"><a href="/"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="onhover-dropdown mobile-account"> <i className="fa fa-user" aria-hidden="true"></i>
                                        My Account
                                        <ul className="onhover-show-div">
                                            <li><Link to="/sign-in">Login</Link></li>
                                            <li><Link to="/sign-up">register</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="main-menu">
                                <div className="menu-left">
                                    <div className="navbar">
                                        <a href="javascript:void(0)" onclick="openNav()">
                                            <div className="bar-style"><i className="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <div id="mySidenav" className="sidenav">
                                            <a href="javascript:void(0)" className="sidebar-overlay" onclick="closeNav()"></a>
                                            <nav>
                                                <div onclick="closeNav()">
                                                    <div className="sidebar-back text-start"><i className="fa fa-angle-left pe-2"
                                                            aria-hidden="true"></i> Back</div>
                                                </div>
                                                <ul id="sub-menu" className="sm pixelstrap sm-vertical">
                                                    <li> <a href="/">clothing</a>
                                                        <ul className="mega-menu clothing-menu">
                                                            <li>
                                                                <div className="row m-0">
                                                                    <div className="col-xl-4">
                                                                        <div className="link-section">
                                                                            <h5>women's fashion</h5>
                                                                            <ul>
                                                                                <li><a href="/">dresses</a></li>
                                                                                <li><a href="/">skirts</a></li>
                                                                                <li><a href="/">westarn wear</a></li>
                                                                                <li><a href="/">ethic wear</a></li>
                                                                                <li><a href="/">sport wear</a></li>
                                                                            </ul>
                                                                            <h5>men's fashion</h5>
                                                                            <ul>
                                                                                <li><a href="/">sports wear</a></li>
                                                                                <li><a href="/">western wear</a></li>
                                                                                <li><a href="/">ethic wear</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-4">
                                                                        <div className="link-section">
                                                                            <h5>accessories</h5>
                                                                            <ul>
                                                                                <li><a href="/">fashion jewellery</a>
                                                                                </li>
                                                                                <li><a href="/">caps and hats</a></li>
                                                                                <li><a href="/">precious jewellery</a>
                                                                                </li>
                                                                                <li><a href="/">necklaces</a></li>
                                                                                <li><a href="/">earrings</a></li>
                                                                                <li><a href="/">wrist wear</a></li>
                                                                                <li><a href="/">ties</a></li>
                                                                                <li><a href="/">cufflinks</a></li>
                                                                                <li><a href="/">pockets squares</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-4">
                                                                        <a href="/" className="mega-menu-banner"><img
                                                                                src="../assets/images/mega-menu/fashion.jpg"
                                                                                alt="" className="img-fluid blur-up lazyload"/></a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li> <a href="/">bags</a>
                                                        <ul>
                                                            <li><a href="/">shopper bags</a></li>
                                                            <li><a href="/">laptop bags</a></li>
                                                            <li><a href="/">clutches</a></li>
                                                            <li> <a href="/">purses</a>
                                                                <ul>
                                                                    <li><a href="/">purses</a></li>
                                                                    <li><a href="/">wallets</a></li>
                                                                    <li><a href="/">leathers</a></li>
                                                                    <li><a href="/">satchels</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li> <a href="/">bags</a>
                                                        <ul>
                                                            <li><a href="/">shopper bags</a></li>
                                                            <li><a href="/">laptop bags</a></li>
                                                            <li><a href="/">clutches</a></li>
                                                            <li> <a href="/">purses</a>
                                                                <ul>
                                                                    <li><a href="/">purses</a></li>
                                                                    <li><a href="/">wallets</a></li>
                                                                    <li><a href="/">leathers</a></li>
                                                                    <li><a href="/">satchels</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li> <a href="/">bags</a>
                                                        <ul>
                                                            <li><a href="/">shopper bags</a></li>
                                                            <li><a href="/">laptop bags</a></li>
                                                            <li><a href="/">clutches</a></li>
                                                            <li> <a href="/">purses</a>
                                                                <ul>
                                                                    <li><a href="/">purses</a></li>
                                                                    <li><a href="/">wallets</a></li>
                                                                    <li><a href="/">leathers</a></li>
                                                                    <li><a href="/">satchels</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li> <a href="/">footwear</a>
                                                        <ul>
                                                            <li><a href="/">sport shoes</a></li>
                                                            <li><a href="/">formal shoes</a></li>
                                                            <li><a href="/">casual shoes</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/">watches</a></li>
                                                    <li> <a href="/">Accessories</a>
                                                        <ul>
                                                            <li><a href="/">fashion jewellery</a></li>
                                                            <li><a href="/">caps and hats</a></li>
                                                            <li><a href="/">precious jewellery</a></li>
                                                            <li> <a href="/">more..</a>
                                                                <ul>
                                                                    <li><a href="/">necklaces</a></li>
                                                                    <li><a href="/">earrings</a></li>
                                                                    <li><a href="/">wrist wear</a></li>
                                                                    <li> <a href="/">accessories</a>
                                                                        <ul>
                                                                            <li><a href="/">ties</a></li>
                                                                            <li><a href="/">cufflinks</a></li>
                                                                            <li><a href="/">pockets squares</a></li>
                                                                            <li><a href="/">helmets</a></li>
                                                                            <li><a href="/">scarves</a></li>
                                                                            <li> <a href="/">more...</a>
                                                                                <ul>
                                                                                    <li><a href="/">accessory gift
                                                                                            sets</a>
                                                                                    </li>
                                                                                    <li><a href="/">travel
                                                                                            accessories</a>
                                                                                    </li>
                                                                                    <li><a href="/">phone cases</a></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><a href="/">belts & more</a></li>
                                                                    <li><a href="/">wearable</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/">house of design</a></li>
                                                    <li> <a href="/">beauty & personal care</a>
                                                        <ul>
                                                            <li><a href="/">makeup</a></li>
                                                            <li><a href="/">skincare</a></li>
                                                            <li><a href="/">premium beaty</a></li>
                                                            <li> <a href="/">more</a>
                                                                <ul>
                                                                    <li><a href="/">fragrances</a></li>
                                                                    <li><a href="/">luxury beauty</a></li>
                                                                    <li><a href="/">hair care</a></li>
                                                                    <li><a href="/">tools & brushes</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/">home & decor</a></li>
                                                    <li><a href="/">kitchen</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="brand-logo">
                                        <Link to={'/'}><img src="../assets/images/icon/logo.png"
                                                className="img-fluid blur-up lazyload" alt=""/></Link>
                                    </div>
                                </div>
                                <div className="menu-right pull-right">
                                    <div>
                                        <nav id="main-nav">
                                            <div className="toggle-nav"><i className="fa fa-bars sidebar-bar"></i></div>
                                            <ul id="main-menu" className="sm pixelstrap sm-horizontal">
                                                <li>
                                                    <div className="mobile-back text-end">Back<i className="fa fa-angle-right ps-2"
                                                            aria-hidden="true"></i></div>
                                                </li>
                                                <li><a href="index.html">Home</a></li>
                                                <li className="mega" id="hover-cls">
                                                    <a href="/">feature <div className="lable-nav">new</div></a>
                                                <ul className="mega-menu full-mega-menu">
                                                            <li>
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="col mega-box">
                                                                            <div className="link-section">
                                                                                <div className="menu-title">
                                                                                    <h5>invoice template</h5>
                                                                                </div>
                                                                                <div className="menu-content">
                                                                                    <ul>
                                                                                        <li><a target="_blank"
                                                                                                href="invoice-1.html">invoice
                                                                                                1</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="invoice-2.html">invoice
                                                                                                2</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="invoice-3.html">invoice
                                                                                                3</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="invoice-4.html">invoice
                                                                                                4</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="invoice-5.html">invoice
                                                                                                5</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="menu-title mt-2">
                                                                                    <h5>elements</h5>
                                                                                </div>
                                                                                <div className="menu-content">
                                                                                    <ul>
                                                                                        <li><a href="elements.html">
                                                                                                elements page<i
                                                                                                    className="ms-2 fa fa-bolt icon-trend"
                                                                                                    aria-hidden="true"></i>
                                                                                            </a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                
                                                                        <div className="col mega-box">
                                                                            <div className="link-section">
                                                                                <div className="menu-title">
                                                                                    <h5>email template</h5>
                                                                                </div>
                                                                                <div className="menu-content">
                                                                                    <ul>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/welcome.html">welcome</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/new-product-announcement.html">announcement</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/abandonment-email.html">abandonment</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/offer.html">offer</a></li>
                                                                                        <li><a target="_blank"
                                                                                            href="../email-template/offer-2.html">offer 2</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/product-review.html">review</a></li>
                                                                                        <li><a target="_blank"
                                                                                            href="../email-template/featured-products.html">featured product</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col mega-box">
                                                                            <div className="link-section">
                                                                                <div className="menu-title">
                                                                                    <h5>email template</h5>
                                                                                </div>
                                                                                <div className="menu-content">
                                                                                    <ul>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/black-friday.html">black friday</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/christmas.html">christmas</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/cyber-monday.html">cyber-monday</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/flash-sale.html">flash sale</a></li>
                                                                                        <li><a target="_blank"
                                                                                            href="../email-template/email-order-success.html">order success</a></li>
                                                                                        <li><a target="_blank"
                                                                                                href="../email-template/email-order-success-two.html">order success 2</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                    
                                                                        <div className="col mega-box">
                                                                            <div className="link-section">
                                                                                <div className="menu-title">
                                                                                    <h5>cookie bar</h5>
                                                                                </div>
                                                                                <div className="menu-content">
                                                                                    <ul>
                                                                                        <li><a href="index.html">bottom<i
                                                                                                    className="ms-2 fa fa-bolt icon-trend"
                                                                                                    aria-hidden="true"></i></a></li>
                                                                                        <li><a href="fashion-4.html">bottom left</a>
                                                                                        </li>
                                                                                        <li><a href="bicycle.html">bottom right</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="menu-title mt-2">
                                                                                    <h5>search</h5>
                                                                                </div>
                                                                                <div className="menu-content">
                                                                                    <ul>
                                                                                        <li><a href="/">ajax
                                                                                                search<i
                                                                                                    className="ms-2 fa fa-bolt icon-trend"
                                                                                                    aria-hidden="true"></i></a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                    
                                                                        <div className="col mega-box">
                                                                            <div className="link-section">
                                                                                <div className="menu-title">
                                                                                    <h5>model</h5>
                                                                                </div>
                                                                                <div className="menu-content">
                                                                                    <ul>
                                                                                        <li><a href="index.html">Newsletter</a></li>
                                                                                        <li><a href="index.html">exit<i
                                                                                                    className="ms-2 fa fa-bolt icon-trend"
                                                                                                    aria-hidden="true"></i></a></li>
                                                                                        <li><a href="christmas.html">christmas</a>
                                                                                        </li>
                                                                                        <li><a href="furniture-3.html">black
                                                                                                friday</a></li>
                                                                                        <li><a href="fashion-4.html">cyber
                                                                                                monday</a></li>
                                                                                        <li><a href="marketplace-demo-3.html">new
                                                                                                year</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                    
                                                                        <div className="col mega-box">
                                                                            <div className="link-section">
                                                                                <div className="menu-title">
                                                                                    <h5>add to cart</h5>
                                                                                </div>
                                                                                <div className="menu-content">
                                                                                    <ul>
                                                                                        <li><a href="nursery.html">cart modal
                                                                                                popup</a></li>
                                                                                        <li><a href="vegetables.html">qty. counter
                                                                                                <i className="fa fa-bolt icon-trend"
                                                                                                    aria-hidden="true"></i></a></li>
                                                                                        <li><a href="bags.html">cart top</a></li>
                                                                                        <li><a href="shoes.html">cart bottom</a>
                                                                                        </li>
                                                                                        <li><a href="watch.html">cart left</a></li>
                                                                                        <li><a href="tools.html">cart right</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <img src="../assets/images/menu-banner.jpg"
                                                                                className="img-fluid mega-img" alt=''/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                    </ul>   
                                                </li>
                                                <li>
                                                    <a href="/">shop</a>
                                                    <ul>
                                                        <li><a href="category-page(vegetables).html">tab style<span
                                                            className="new-tag">new</span></a></li>
                                                        <li><a href="category-page(top-filter).html">top filter</a></li>
                                                        <li><a href="category-page(modern).html">modern</a></li>
                                                        <li><a href="category-page.html">left sidebar</a></li>
                                                        <li><a href="category-page(right).html">right sidebar</a></li>
                                                        <li><a href="category-page(no-sidebar).html">no sidebar</a></li>
                                                        <li><a href="/">sidebar popup</a>
                                                        </li>
                                                        <li><a href="/">metro</a></li>
                                                        <li><a href="/">full width</a></li>
                                                        <li><a href="/">infinite
                                                                scroll</a></li>
                                                        {/* <li><a href=category-page(3-grid).html>three grid</a></li> */}
                                                        <li><a href="/">six grid</a></li>
                                                        <li><a href="/">list view</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/">product</a>
                                                    <ul>
                                                        <li><a href="/">360 view <span
                                                                    className="new-tag">new</span></a></li>
                                                        <li><a href="/">video
                                                                thumbnail<span className="new-tag">new</span></a></li>
                                                        <li>
                                                            <a href="/">sidebar</a>
                                                            <ul>
                                                                <li><a href="/">left sidebar</a></li>
                                                                <li><a href="/">right
                                                                        sidebar</a>
                                                                </li>
                                                                <li><a href="/">no sidebar</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/">thumbnail image</a>
                                                            <ul>
                                                                <li><a href="/">left image</a>
                                                                </li>
                                                                <li><a href="/">right image</a>
                                                                </li>
                                                                <li><a href="/">image
                                                                        outside</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/">three column</a>
                                                            <ul>
                                                                <li><a href="/">thumbnail
                                                                        left</a>
                                                                </li>
                                                                <li><a href="/">thumbnail
                                                                        right</a>
                                                                </li>
                                                                <li><a href="/">thubnail
                                                                        bottom</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/">four image</a></li>
                                                        <li><a href="/">sticky</a></li>
                                                        <li><a href="/">accordian</a></li>
                                                        <li><a href="/">bundle</a></li>
                                                        <li><a href="/">image swatch </a></li>
                                                        <li><a href="/">vertical tab</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/">pages</a>
                                                    <ul>
                                                        <li>
                                                            <a href="/">vendor</a>
                                                            <ul>
                                                                <li><a href="/">vendor dashboard</a>
                                                                </li>
                                                                <li><a href="/">vendor profile</a></li>
                                                                <li><a href="/">become vendor</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/">account</a>
                                                            <ul>
                                                                <li><a href="/">wishlist</a></li>
                                                                <li><a href="/">cart</a></li>
                                                                <li><a href="/">Dashboard</a></li>
                                                                <li><a href="/">login</a></li>
                                                                <li><a href="/">register</a></li>
                                                                <li><a href="/">contact</a></li>
                                                                <li><a href="/">forget password</a></li>
                                                                <li><a href="/">profile</a></li>
                                                                <li><a href="/">checkout</a></li>
                                                                <li><a href="/">order success</a></li>
                                                                <li><a href="/">order tracking<span
                                                                            className="new-tag">new</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/">portfolio</a>
                                                            <ul>
                                                                <li><a href="/">grid</a>
                                                                    <ul>
                                                                        <li><a href="grid-2-col.html">grid
                                                                                2</a></li>
                                                                        <li><a href="grid-3-col.html">grid
                                                                                3</a></li>
                                                                        <li><a href="grid-4-col.html">grid
                                                                                4</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li><a href="/">masonry</a>
                                                                    <ul>
                                                                        <li><a href="/">grid 2</a></li>
                                                                        <li><a href="/">grid 3</a></li>
                                                                        <li><a href="/">grid 4</a></li>
                                                                        <li><a href="/">full width</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/">about us</a></li>
                                                        <li><a href="/">search</a></li>
                                                        <li><a href="/">review</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">compare</a>
                                                            <ul>
                                                                <li><a href="/">compare</a></li>
                                                                <li><a href="/">compare-2</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/">collection</a></li>
                                                        <li><a href="/">lookbook</a></li>
                                                        <li><a href="/">site map</a>
                                                        </li>
                                                        <li><a href="/">404</a></li>
                                                        <li><a href="/">coming soon</a></li>
                                                        <li><a href="/">FAQ</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/">blog</a>
                                                    <ul>
                                                        <li><a href="/">left sidebar</a></li>
                                                        <li><a href="/">right sidebar</a></li>
                                                        <li><a href="/">no sidebar</a></li>
                                                        <li><a href="/">blog details</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div>
                                        <div className="icon-nav">
                                            <ul>
                                                <li className="onhover-div mobile-search">
                                                    <div><img src="../assets/images/icon/search.png" onclick="openSearch()"
                                                            className="img-fluid blur-up lazyload" alt=""/> <i className="ti-search"
                                                            onclick="openSearch()"></i></div>
                                                    <div id="search-overlay" className="search-overlay">
                                                        <div> <span className="closebtn" onclick="closeSearch()"
                                                                title="Close Overlay">×</span>
                                                            <div className="overlay-content">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="col-xl-12">
                                                                            <form>
                                                                                <div className="form-group">
                                                                                    <input type="text" className="form-control"
                                                                                        id="exampleInputPassword1"
                                                                                        placeholder="Search a Product"/>
                                                                                </div>
                                                                                <button type="submit" className="btn btn-primary"><i
                                                                                        className="fa fa-search"></i></button>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="onhover-div mobile-setting">
                                                    <div><img src="../assets/images/icon/setting.png"
                                                            className="img-fluid blur-up lazyload" alt=""/> <i
                                                            className="ti-settings"></i></div>
                                                    <div className="show-div setting">
                                                        <h6>language</h6>
                                                        <ul>
                                                            <li><a href="/">english</a></li>
                                                            <li><a href="/">french</a></li>
                                                        </ul>
                                                        <h6>currency</h6>
                                                        <ul className="list-inline">
                                                            <li><a href="/">euro</a></li>
                                                            <li><a href="/">rupees</a></li>
                                                            <li><a href="/">pound</a></li>
                                                            <li><a href="/">doller</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="onhover-div mobile-cart">
                                                    <div><img src="../assets/images/icon/cart.png"
                                                            className="img-fluid blur-up lazyload" alt=""/> <i
                                                            className="ti-shopping-cart"></i></div>
                                                    <span className="cart_qty_cls">2</span>
                                                    <ul className="show-div shopping-cart">
                                                        <li>
                                                            <div className="media">
                                                                <a href="/"><img alt="" className="me-3"
                                                                        src="../assets/images/fashion/product/1.jpg"/></a>
                                                                <div className="media-body">
                                                                    <a href="/">
                                                                        <h4>item name</h4>
                                                                    </a>
                                                                    <h4><span>1 x $ 299.00</span></h4>
                                                                </div>
                                                            </div>
                                                            <div className="close-circle"><a href="/"><i className="fa fa-times"
                                                                        aria-hidden="true"></i></a></div>
                                                        </li>
                                                        <li>
                                                            <div className="media">
                                                                <a href="/"><img alt="" className="me-3"
                                                                        src="../assets/images/fashion/product/2.jpg"/></a>
                                                                <div className="media-body">
                                                                    <a href="/">
                                                                        <h4>item name</h4>
                                                                    </a>
                                                                    <h4><span>1 x $ 299.00</span></h4>
                                                                </div>
                                                            </div>
                                                            <div className="close-circle"><a href="/"><i className="fa fa-times"
                                                                        aria-hidden="true"></i></a></div>
                                                        </li>
                                                        <li>
                                                            <div className="total">
                                                                <h5>subtotal : <span>$299.00</span></h5>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="buttons"><a href="cart.html" className="view-cart">view
                                                                    cart</a> <a href="/" className="checkout">checkout</a></div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar;