'use client'

import {useEffect, useState} from "react";
import {getPosts} from "@/api-services.js/getPosts";

import './virtual-scroll.css'

function VirtualScroll() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleItems, setVisibleItems] = useState({ start: 0, end: 10 });

    const itemHeight = 100;


    useEffect(() => {
        async function loadPosts() {
            try {
                const postsData = await getPosts();
                setPosts(postsData)
                setLoading(false);
            } catch (e) {
                setLoading(false);
                console.log(e);
            }
        }

        loadPosts();
    }, [])

    const handleScroll = (e) => {
        const container = e.target;
        const containerHeight = container.clientHeight;
        const scrollTop = container.scrollTop;
        const startIndex = Math.floor(scrollTop / itemHeight);
        const endIndex = Math.min(
            posts.length - 1,
            Math.ceil((scrollTop + containerHeight) / itemHeight)
        );

        setVisibleItems({ start: startIndex, end: endIndex });
    }


    if (loading || posts.length === 0) {
        return (
            <div className="virtual-scroll-loading">Loading...</div>
        )
    }

    return (
        <div className="virtual-scroll__container" onScroll={handleScroll}>
            <div style={{
                height: `${posts.length * itemHeight}px`, // Total height for all items
                position: "relative",
            }}></div>
            <div className="virtual-scroll-list">
                {posts.slice(visibleItems.start, visibleItems.end).map((post, index) => (
                    <div
                        style={{
                            position: "absolute",
                            top: `${(index + visibleItems.start) * itemHeight}px`,
                            height: `${itemHeight}px`,
                            width: "100%",
                            marginBottom: "10px",
                        }}
                        key={index}
                        className="virtual-scroll-list__item"
                    >
                        <p>{post.title}</p>
                        <p>{post.id}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default VirtualScroll;