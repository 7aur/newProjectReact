

const {Route }              =       require('react-router-dom');
import { Home }             from    '../components/pages/home/main';
import { Login }            from    '../components/pages/auth/login';
import { Register }         from    '../components/pages/auth/register';
import { About }            from    '../components/pages/about/about';
import { Blog }             from    '../components/pages/blog/blog';
import { BlogSingle }       from    '../components/pages/blog/blog-single';
import { Company }          from    '../components/pages/company/company';
import { Contact }          from    '../components/pages/contact/contact';
import { Gallery }          from    '../components/pages/gallery/gallery';
import { GallerySIngle }    from    '../components/pages/gallery/gallery-single';
import { Music }            from    '../components/pages/music/music';
import { Profile }          from    '../components/pages/profile/profile';
import { Slider }           from    '../components/pages/slider/slider';
import { Video }            from    '../components/pages/video/video';
import { VideoSingle }      from    '../components/pages/video/video-single';
import { Admin }            from    '../admin/admin';
import { AdminInsert }      from    '../admin/admin-insert';

export let routes = [
    { path: "/",                component: Home },
    { path: "/login",           component: Login },
    { path: "/register",        component: Register },
    { path: "/about",           component: About },
    { path: "/blog",            component: Blog },
    { path: "/blogsingle",      component: BlogSingle },
    { path: "/contact",         component: Contact },
    { path: "/gallery",         component: Gallery },
    { path: "/gallerysingle",   component: GallerySIngle },
    { path: "/music",           component: Music },
    { path: "/profile",         component: Profile },
    { path: "/slider",          component: Slider },
    { path: "/video",           component: Video },
    { path: "/videosingle",     component: VideoSingle },
    { path: "/company",         component: Company },
    { path: "/admin",           component: Admin },
    { path: "/adminAdd",        component: AdminInsert }
];