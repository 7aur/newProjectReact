import React, { useState } from 'react';
import {HttpsModule} from '../../https/httpsModue';
import { setTimeout } from 'timers';
interface IblogData {
    title: String,
    image: String,
    category: String,
    description: String,
    status:number,
    priority:number
}

export function InsertBlog(props:any): JSX.Element {

    const [title, titleValue] = useState<string>('');
    const [image, imageValue] = useState<string>('');
    const [category, catsValue] = useState<string>();
    const [description, descriptionValue] = useState<string>('');

    const [blogData, blogDataValue] = useState<IblogData[]>([]);

    let handleBlogPost = (e: any) => {
        e.preventDefault();
        newBlogData(title,image,category, description  );
    }

    let clearFields = () => {
        titleValue('');
        imageValue('');
        catsValue('');
        descriptionValue('');
        blogDataValue([]);
    }

    let newBlogData = (title:string, image:string, category:string, description:string) => {
        const addblogData:IblogData[] = [...blogData, {title, image, category, description,  "status": 0,  "priority": 0, }];
        blogDataValue(addblogData); 
        setTimeout(() => {
            clearFields();
        },100)
    }

    let postUrl = {
        url: "http://localhost:1212/api/blogs/add",
        method:"POST",
        data:blogData[0],
        payload:props.setName
    }
    return (
        <div>
            {
                blogData.length > 0 ?  <HttpsModule  props={postUrl} data={props} /> : null
            }
           
            <form onSubmit={ handleBlogPost} >
                <div className="col-md-4">
                    <div className="default-element">
                        <input value={title} onChange={(e) => titleValue(e.target.value)} type="text" className="form-control" placeholder="Blog title" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="default-element">
                        <input type="text" value={image} onChange={(e) => imageValue(e.target.value)} className="form-control" placeholder="Blog image" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="default-element">
                        <select className="form-control" onChange={(e) => catsValue(e.target.value)} defaultValue={'DEFAULT'} >
                            <option value="DEFAULT" disabled    > choice category </option>
                            <option value="1" > Game </option>
                            <option value="2" > Movie </option>
                            <option value="3" > Simple </option>
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="default-element">
                        <textarea className="form-control" value={description} onChange={(e) => descriptionValue(e.target.value)} placeholder="Blog description"></textarea>
                    </div>
                </div>
                <div className="col-md-12 text-right">
                    <button className="link-md blue waves-effect" type="submit">  Submit </button>
                </div>
                <div className="clearfix"></div>
            </form>
        </div>
    )
}