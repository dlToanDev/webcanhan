import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('warpper')}>
            <h2>toannn barr</h2>
    </aside>
}

export default Sidebar;