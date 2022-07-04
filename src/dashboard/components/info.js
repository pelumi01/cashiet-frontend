const Info = () => {
    return (
        <>
            <div className="counter-section">
                <div className="welcome-msg">
                <h4>Hello, MARK JECNO !</h4>
                <p>From your My Account Dashboard you have the ability to view a snapshot of your
                    recent
                    account activity and update your account information. Select a link below to
                    view or
                    edit information.</p>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <div className="counter-box">
                    <img src="../assets/images/icon/dashboard/sale.png" className="img-fluid" />
                    <div>
                        <h3>25</h3>
                        <h5>Total Order</h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="counter-box">
                    <img src="../assets/images/icon/dashboard/homework.png" className="img-fluid" />
                    <div>
                        <h3>5</h3>
                        <h5>Pending Orders</h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="counter-box">
                    <img src="../assets/images/icon/dashboard/order.png" className="img-fluid" />
                    <div>
                        <h3>50</h3>
                        <h5>Wishlist</h5>
                    </div>
                    </div>
                </div>
                </div>
                <div className="box-account box-info">
                <div className="box-head">
                    <h4>Account Information</h4>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                    <div className="box">
                        <div className="box-title">
                        <h3>Contact Information</h3><a href="#">Edit</a>
                        </div>
                        <div className="box-content">
                        <h6>Mark Jecno</h6>
                        <h6>mark-jecno@gmail.com</h6>
                        <h6><a href="#">Change Password</a></h6>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="box">
                        <div className="box-title">
                        <h3>Newsletters</h3><a href="#">Edit</a>
                        </div>
                        <div className="box-content">
                        <p>You are currently not subscribed to any newsletter.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="box mt-3">
                    <div className="box-title">
                    <h3>Address Book</h3><a href="#">Manage Addresses</a>
                    </div>
                    <div className="row">
                    <div className="col-sm-6">
                        <h6>Default Billing Address</h6>
                        <address>You have not set a default billing address.<br /><a href="#">Edit
                            Address</a></address>
                    </div>
                    <div className="col-sm-6">
                        <h6>Default Shipping Address</h6>
                        <address>You have not set a default shipping address.<br /><a href="#">Edit Address</a></address>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Info;