import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ENTRIES } from '../constants';
import { capitalizeStr } from '../utils';
import { TwitterOutlined } from '@ant-design/icons';
import './BlogHome.scss';
import { Button } from 'antd';


interface EntryDisplayData {
    displayName: string
    linkTarget: string
    url: string
}

function getDisplayEntryData(entry: string, url: string): EntryDisplayData {
    const parts = entry.split('-');

    const displayName = capitalizeStr(parts.slice(1).join(' '));

    return { url, displayName, linkTarget: entry };
}

function useAllEntries() {
    const [entries, setEntries] = useState<EntryDisplayData[]>([]);

    useEffect(() => {
        const readableEntries = Array.from(ENTRIES.entries(), ([key, val]) => getDisplayEntryData(key, val));
        setEntries(readableEntries);
    }, []);

    return entries;
}

export default function BlogHome() {
    const allEntries = useAllEntries();

    return <div className="homeWrapper">
        <h1>My Blog</h1>
        {allEntries.map((entry, idx) => {
            return <p key={idx}>
                <Link to={'/blogs/' + entry.linkTarget}>
                    {entry.displayName}</Link>
            </p>;
        })}

        <footer>
            <Button style={{
                color: '#fafafa',
                fontSize: '16px',
            }} type="text" icon={<TwitterOutlined/>}
                    href="https://twitter.com/greenlukaz" target="_blank">
                Get in touch
            </Button>
        </footer>
    </div>;
}
