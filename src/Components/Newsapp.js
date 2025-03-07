import React, { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import "./NewsApp.css";
import { FaSearch } from "react-icons/fa";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY || "752ffd9ac1532d821ab7155afb608e45";

const NewsApp = () => {
    const [search, setSearch] = useState("Cricket");
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch data from API
    const getData = useCallback(async (query) => {
        if (!query.trim()) {
            setError("");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&country=us&max=100&token=${API_KEY}`
            );

            if (!response.ok) throw new Error(`Error: ${response.status}`);

            const jsonData = await response.json();
            setNewsData(Array.isArray(jsonData.articles) ? jsonData.articles : []);
        } catch (err) {
            setError(err.message || "Something went wrong while fetching news.");
            setNewsData([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch initial news on mount (Default: "india")
    useEffect(() => {
        getData("india");
    }, []); 

    return (
        <div className="container">
            {/* Navbar */}
            <nav className="navbar">

                <h1 className="logo">INSIGHT STREAM</h1>
                
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="Search News"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // Only updates state
                        className="searchInput"
                        onKeyDown={(e) => e.key === "Enter" && getData(search)} // Fetch only on Enter
                    />
                    <button onClick={() => getData(search)} className="searchBtn">
                        <FaSearch />
                    </button>
                </div>
            </nav>

            {/* Error Message */}
            {error && <p className="error">{error}</p>}

            {/* Header with Categories */}
            <div className="header">
                <h2>News That Echoes Across the Globe</h2>
                <div className="categoryButtons">
                    {["Technology and AI", "Climate Change", "Environment", "Entertainment", "Business", "Science"].map((category) => (
                        <button key={category} onClick={() => getData(category.toLowerCase())} className="categoryBtn">
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* News Cards */}
            <div className="newsGrid">
                {loading ? (
                    <p className="loading">🔄 Fetching News...</p>
                ) : newsData.length > 0 ? (
                    newsData.map((article, index) => <Card key={index} article={article} />)
                ) : (
                    <p className="loading">No News Found...</p>
                )}
            </div>
        </div>
    );
};

export default NewsApp;
