const Wishlist = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-sm">
                        <div className="top-sec">
                            <h3>My Wishlist</h3>
                        </div>
                        <div className="table-responsive-xl">
                            <table className="table cart-table wishlist-table">
                            <thead>
                                <tr className="table-head">
                                <th scope="col">image</th>
                                <th scope="col">Order Id</th>
                                <th scope="col">Product Details</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>
                                    <a href="javascript:void(0)">
                                    <img src="../assets/images/pro3/1.jpg" className="blur-up lazyloaded" alt="" />
                                    </a>
                                </td>
                                <td>
                                    <span className="mt-0">#125021</span>
                                </td>
                                <td>
                                    <span>Purple polo tshirt</span>
                                </td>
                                <td>
                                    <span className="theme-color fs-6">$49.54</span>
                                </td>
                                <td>
                                    <a href="javascript:void(0)" className="btn btn-xs btn-solid">
                                    Move to Cart
                                    </a>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <a href="javascript:void(0)">
                                    <img src="../assets/images/pro3/2.jpg" className="blur-up lazyloaded" alt="" />
                                    </a>
                                </td>
                                <td>
                                    <span className="mt-0">#125367</span>
                                </td>
                                <td>
                                    <span>Sleevless white top</span>
                                </td>
                                <td>
                                    <span className="theme-color fs-6">$49.54</span>
                                </td>
                                <td>
                                    <a href="javascript:void(0)" className="btn btn-xs btn-solid">
                                    Move to Cart
                                    </a>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <a href="javascript:void(0)">
                                    <img src="../assets/images/pro3/27.jpg" className="blur-up lazyloaded" alt="" />
                                    </a>
                                </td>
                                <td>
                                    <span>#125948</span>
                                </td>
                                <td>
                                    <span>multi color polo tshirt</span>
                                </td>
                                <td>
                                    <span className="theme-color fs-6">$49.54</span>
                                </td>
                                <td>
                                    <a href="javascript:void(0)" className="btn btn-xs btn-solid">
                                    Move to Cart
                                    </a>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <a href="javascript:void(0)">
                                    <img src="../assets/images/pro3/28.jpg" className="blur-up lazyloaded" alt="" />
                                    </a>
                                </td>
                                <td>
                                    <span>#127569</span>
                                </td>
                                <td>
                                    <span>Candy red solid tshirt</span>
                                </td>
                                <td>
                                    <span className="theme-color fs-6">$49.54</span>
                                </td>
                                <td>
                                    <a href="javascript:void(0)" className="btn btn-xs btn-solid">
                                    Move to Cart
                                    </a>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <a href="javascript:void(0)">
                                    <img src="../assets/images/pro3/33.jpg" className="blur-up lazyloaded" alt="" />
                                    </a>
                                </td>
                                <td>
                                    <span>#125753</span>
                                </td>
                                <td>
                                    <span>multicolored polo tshirt</span>
                                </td>
                                <td>
                                    <span className="theme-color fs-6">$49.54</span>
                                </td>
                                <td>
                                    <a href="javascript:void(0)" className="btn btn-xs btn-solid">
                                    Move to Cart
                                    </a>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <a href="javascript:void(0)">
                                    <img src="../assets/images/pro3/34.jpg" className="blur-up lazyloaded" alt="" />
                                    </a>
                                </td>
                                <td>
                                    <span>#125021</span>
                                </td>
                                <td>
                                    <span>Men's Sweatshirt</span>
                                </td>
                                <td>
                                    <span className="theme-color fs-6">$49.54</span>
                                </td>
                                <td>
                                    <a href="javascript:void(0)" className="btn btn-xs btn-solid">
                                    Move to Cart
                                    </a>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist;