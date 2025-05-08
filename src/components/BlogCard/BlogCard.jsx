import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";

const blogs = [
    {
        image: blog1,
        date: "April 15, 2023",
        readTime: "5 min read",
        title: "5 Reasons to Clean Your Car Weekly",
        description: "Regular car cleaning is more than just about aesthetics. Learn the surprising benefits of maintaining a weekly car cleaning routine for your vehicle's health and value.",
        author: "Vikram Singh",
        bloglink: "#",
    },
    {
        image: blog2,
        date: "April 15, 2023",
        readTime: "5 min read",
        title: "5 Reasons to Clean Your Car Weekly",
        description: "Regular car cleaning is more than just about aesthetics. Learn the surprising benefits of maintaining a weekly car cleaning routine for your vehicle's health and value.",
        author: "Vikram Singh",
        bloglink: "#",
    },
    {
        image: blog3,
        date: "April 15, 2023",
        readTime: "5 min read",
        title: "5 Reasons to Clean Your Car Weekly",
        description: "Regular car cleaning is more than just about aesthetics. Learn the surprising benefits of maintaining a weekly car cleaning routine for your vehicle's health and value.",
        author: "Vikram Singh",
        bloglink: "#",
    },
    {
        image: blog4,
        date: "April 15, 2023",
        readTime: "5 min read",
        title: "5 Reasons to Clean Your Car Weekly",
        description: "Regular car cleaning is more than just about aesthetics. Learn the surprising benefits of maintaining a weekly car cleaning routine for your vehicle's health and value.",
        author: "Vikram Singh",
        bloglink: "#",
    },
];

export default function BlogCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 blog-grid">
            {blogs.map((blog, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-card shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 blog-box">
                    <div className="h-48 overflow-hidden blog-img">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <div className="flex flex-col p-6 blog-inner-info">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                            <span>{blog.date}</span>
                            <span>{blog.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-semibold leading-none tracking-tight text-primary hover:text-secondary transition-colors mt-1.5">
                            <Link to={blog.bloglink}>{blog.title}</Link>
                        </h3>
                    </div>

                    <div className="p-6 pt-0">
                        <p className="text-slate-500 text-base">{blog.description}</p>
                    </div>

                    <div className="p-6 pt-0 flex justify-between items-center">
                        <div className="text-sm text-gray-600">By {blog.author}</div>
                        <Link to={blog.bloglink}>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none cursor-pointer hover:underline underline-offset-4 h-10 px-4 py-2 text-secondary">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
