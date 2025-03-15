
import Home from '~/pages/Home';
import News from '~/pages/News';
import Contact from '~/pages/Contact';
import Upload from '~/pages/Upload';



const publicRoutes = [
    { path: '/', component: Home },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/upload', component: Upload, layout: null }

];

const privateRoutes = [
    // Các route cần đăng nhập mới truy cập được
];

export { publicRoutes, privateRoutes };
