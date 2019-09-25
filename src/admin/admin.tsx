import React, { useState } from 'react';
import { ReadBlog } from './blog/read';
import { ReadGallery } from './gallery/read';
import { ReadMusic } from './music/read';
import { ReadSlider } from './slider/read';
import { ReadVideo } from './video/read';
import { ReadAbout } from './about/read';
import { ReadService } from './services/read';
export function Admin(): JSX.Element {

    const [value, activeTab] = useState<String>('blog');

    let handleTab = (e: any) => {
        e.preventDefault();
        const getTabId = e.target.getAttribute("href").substring(1);
        activeTab(getTabId)
        document.querySelector("ul li.active").classList.remove("active");
        e.target.closest("li").classList.add("active");
    }
    return (
        <section className="default-section admin-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="admin-block">
                        <div className="col-md-3">
                            <div className="menu-block">
                                <ul className="adm-menu">
                                    <li> <span> Admin panel Insert </span>
                                        <ul>
                                            <li className="active"> <a href="#blog" onClick={(e) => handleTab(e)}> Blog </a> </li>
                                            <li> <a href="#about" onClick={(e) => handleTab(e)} > About </a> </li>
                                            <li> <a href="#slider" onClick={(e) => handleTab(e)} > Slider </a> </li>
                                            <li> <a href="#service" onClick={(e) => handleTab(e)} > Services </a> </li>
                                            <li> <a href="#gallery" onClick={(e) => handleTab(e)} > Gallery </a> </li>
                                            <li> <a href="#video" onClick={(e) => handleTab(e)} > Video </a> </li>
                                            <li> <a href="#music" onClick={(e) => handleTab(e)} > Music </a> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            {
                                value == "blog" ? <ReadBlog /> : null
                            }
                            {
                                value == "about" ? <ReadAbout /> : null
                            }
                            {
                                value == "gallery" ? <ReadGallery /> : null
                            }
                            {
                                value == "music" ? <ReadMusic /> : null
                            }
                            {
                                value == "slider" ? <ReadSlider /> : null
                            }
                            {
                                value == "video" ? <ReadVideo /> : null
                            }
                            {
                                value == "service" ? <ReadService /> : null
                            }
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}