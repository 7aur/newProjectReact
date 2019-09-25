import React, { useState } from 'react';
import { InsertBlog } from './blog/insert';
import { InsertGallery } from './gallery/insert';
import { InsertMusic } from './music/insert';
import { InsertSlider } from './slider/insert';
import { InsertVideo } from './video/insert';
import { InsertAbout } from './about/insert';
import { InsertService } from './services/insert';
export function AdminInsert(props: any): JSX.Element {
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
                            <div className="jumbotron tab-content">
                                <h2 className="alert alert-warning" > {value}  tab </h2>
                                {
                                    value == "blog" ? <InsertBlog {...props} /> : null
                                }
                                {
                                    value == "about" ? <InsertAbout {...props} /> : null
                                }
                                {
                                    value == "gallery" ? <InsertGallery  {...props} /> : null
                                }
                                {
                                    value == "music" ? <InsertMusic {...props} /> : null
                                }
                                {
                                    value == "slider" ? <InsertSlider {...props} /> : null
                                }
                                {
                                    value == "video" ? <InsertVideo {...props} /> : null
                                }
                                {
                                    value == "service" ? <InsertService {...props} /> : null
                                }
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}