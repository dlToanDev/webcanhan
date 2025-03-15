
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";


function DefaultLayout({ children }) {
    return (
        <div className="layout-wrapper">
            <header><Header /></header>
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
            <footer><Footer /></footer>
        </div>
    );
}

export default DefaultLayout;