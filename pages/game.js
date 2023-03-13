import { useState, useEffect } from "react";
import { useAuth, getData } from "../firebase/firebaseClient";

export default function Game() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { user } = useAuth();

    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await getData("game-posts");
            console.log("DATA:" + postsData);
            setPosts(postsData);
        };
        fetchPosts();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPosts = posts.length > 0 && posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input type="text" onChange={handleSearch} />
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))
            ) : (
                <p>{posts.length > 0 ? "No matching posts found" : "Loading..."}</p>
            )}
        </div>
    );
}

