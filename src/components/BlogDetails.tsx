import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Empty } from 'antd';
import { ENTRIES } from '../constants';
import ReactMarkdown from 'react-markdown/with-html';
import './BlogDetails.scss';


function getBlogContentsUrl(url: string): string {
    return `${url}/README.md`;
}

function useBlogDetails(slug: string) {
    const [blogData, setBlogData] = useState('');
    const blogUrl = ENTRIES.get(slug) ?? '';

    useEffect(() => {
        setBlogData('');
        if (blogUrl === '') {
            return;
        }

        fetch(getBlogContentsUrl(blogUrl)).then(response => {
            response.text().then(res => {
                setBlogData(res);
            });
        });
    }, [blogUrl]);

    return blogData;
}

export default function BlogDetail() {
    const { blogName } = useParams<{ blogName: string }>();
    const blogDetails = useBlogDetails(blogName);

    if (blogDetails === '') {
        return <Empty description="Nothing here"/>;
    }

    return <>
        <div style={{marginLeft: '16px'}} className="backToHome">
            <Link to="/">Home</Link>
        </div>
        <div className="blogWrapper">
            <ReactMarkdown>{blogDetails}</ReactMarkdown>
        </div>
    </>;
}
