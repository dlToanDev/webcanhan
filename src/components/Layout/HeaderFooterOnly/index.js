import Footer from "~/components/Layout/components/Footer";
import Header from "~/components/Layout/components/Header";


function HeaderFooterOnly({ children }) {
    return (
        <div>
            <header><Header /></header>
            <div className="container">

                <div className="content">
                    {children}
                </div>
            </div>
            <footer><Footer /></footer>
        </div>

    );
}

export default HeaderFooterOnly;