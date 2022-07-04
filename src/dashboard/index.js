import Breadcrumb from "../views/layouts/breadcrumb";
import Info from "./components/info";
import Order from "./components/orders";
import Payments from "./components/payments";
import Profile from "./components/profile";
import Security from "./components/security";
import Wishlist from "./components/wishlist";

const DashboardIndex = () => {
    return (
        <>
            {/* breadcrumb start  */}
            <Breadcrumb title="Dashboard" breadcrumbItem="Dashboard" />
            {/* breadcrumb End  */}
            

            {/* dashboard section start  */}
            <section className="dashboard-section section-b-space user-dashboard-section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                    <div className="dashboard-sidebar">
                        <div className="profile-top">
                        <div className="profile-image">
                            <img src="../assets/images/avtar.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="profile-detail">
                            <h5>Mark Jecno</h5>
                            <h6>mark.jecno@mail.com</h6>
                        </div>
                        </div>
                        <div className="faq-tab">
                        <ul className="nav nav-tabs" id="top-tab" role="tablist">
                            <li className="nav-item"><a data-bs-toggle="tab" data-bs-target="#info" className="nav-link active">Account Info</a></li>
                            <li className="nav-item"><a data-bs-toggle="tab" data-bs-target="#address" className="nav-link">Address Book</a></li>
                            <li className="nav-item"><a data-bs-toggle="tab" data-bs-target="#orders" className="nav-link">My Orders</a></li>
                            <li className="nav-item"><a data-bs-toggle="tab" data-bs-target="#wishlist" className="nav-link">My Wishlist</a></li>
                            <li className="nav-item"><a data-bs-toggle="tab" data-bs-target="#payment" className="nav-link">Saved Cards</a></li>
                            <li className="nav-item"><a data-bs-toggle="tab" data-bs-target="#profile" className="nav-link">Profile</a></li>
                            <li className="nav-item"><a data-bs-toggle="tab" data-bs-target="#security" className="nav-link">Security</a> </li>
                            <li className="nav-item"><a href className="nav-link">Log Out</a> </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-9">
                    <div className="faq-content tab-content" id="top-tabContent">
                        <div className="tab-pane fade show active" id="info">
                            <Info/>
                        </div>
                        <div className="tab-pane fade" id="address">
                            <div className="row">
                                <div className="col-12">
                                <div className="card mt-0">
                                    <div className="card-body">
                                    <div className="top-sec">
                                        <h3>Address Book</h3>
                                        <a href="#" className="btn btn-sm btn-solid">+ add new</a>
                                    </div>
                                    <div className="address-book-section">
                                        <div className="row g-4">
                                        <div className="select-box active col-xl-4 col-md-6">
                                            <div className="address-box">
                                            <div className="top">
                                                <h6>mark jecno <span>home</span></h6>
                                            </div>
                                            <div className="middle">
                                                <div className="address">
                                                <p>549 Sulphur Springs Road</p>
                                                <p>Downers Grove, IL</p>
                                                <p>60515</p>
                                                </div>
                                                <div className="number">
                                                <p>mobile: <span>+91 123 - 456 - 7890</span></p>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <a href="javascript:void(0)" data-bs-target="#edit-address" data-bs-toggle="modal" className="bottom_btn">edit</a>
                                                <a href="#" className="bottom_btn">remove</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="select-box col-xl-4 col-md-6">
                                            <div className="address-box">
                                            <div className="top">
                                                <h6>mark jecno <span>office</span></h6>
                                            </div>
                                            <div className="middle">
                                                <div className="address">
                                                <p>549 Sulphur Springs Road</p>
                                                <p>Downers Grove, IL</p>
                                                <p>60515</p>
                                                </div>
                                                <div className="number">
                                                <p>mobile: <span>+91 123 - 456 - 7890</span></p>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <a href="javascript:void(0)" data-bs-target="#edit-address" data-bs-toggle="modal" className="bottom_btn">edit</a>
                                                <a href="#" className="bottom_btn">remove</a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="orders">
                            <Order/>
                        </div>
                        <div className="tab-pane fade" id="wishlist">
                            <Wishlist/>
                        </div>
                        <div className="tab-pane fade" id="payment">
                            <Payments/>
                        </div>
                        <div className="tab-pane fade" id="profile">
                            <Profile/>
                        </div>
                        <div className="tab-pane fade" id="security">
                            <Security />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* dashboard section end */}


        </>
    )
}

export default DashboardIndex;