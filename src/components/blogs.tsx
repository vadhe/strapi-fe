import { useEffect, useState } from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { Link } from "react-router-dom";

interface Blog {
  id: number;
  attributes: {
    title: string;
    content: BlocksContent;
    date: string;
  };
}

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setBlogs(data.data);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="mt-8">
      {blogs.map((blog) => (
        <Link to={`blog/${blog.id}`}>
          <div className="blog-preview bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl line-clamp-1 font-bold text-gray-800">
              {blog.attributes.title}
            </h2>
            <div className="line-clamp-3 my-5">
              <BlocksRenderer
                content={blog.attributes.content}
                blocks={{
                  image: ({ children }) => (
                    <div className="hidden">{children}</div>
                  ),
                }}
              />
            </div>
            <p className="text-gray-500 text-sm">
              {new Date(blog.attributes.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
