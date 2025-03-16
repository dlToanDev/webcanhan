
import Sidebar from "./Sidebar";
import Footer from "~/components/Layout/components/Footer";
import Header from "~/components/Layout/components/Header";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";


const cx = classNames.bind(styles)


function DefaultLayout({ children }) {
    return (
        <div className={cx('warpper')}>
            <header><Header /></header>
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <footer><Footer /></footer>
        </div>
    );
}

export default DefaultLayout;