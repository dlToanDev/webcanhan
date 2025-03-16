
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images'
const cx = classNames.bind(styles)

function Header() {
    return <header className={ cx('wrapper') }>
        <div className={ cx('inner')}>
            <div classNames={cx('logo')}>
                 <img src={images.logo} alt="Mô tả ảnh"   />
            </div>
            <div classNames={cx('search')} >
                <input placeholder="Search" spellCheck={false} />
                <button className={cx('clear')}> {/* {} */} </button>
                {/* {} */}
                <button className={cx('search-btn')}> {/* {} */} </button>
                
            </div>
        </div>
    </header>
}

export default Header;