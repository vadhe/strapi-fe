import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

interface BlogDetail {
  id: number;
  attributes: {
    title: string;
    content: BlocksContent;
    date: string;
  };
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogDetail | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setBlog(data.data);
      })
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-detail bg-white shadow-md rounded-lg p-4 my-4">
      <h1 className="text-3xl font-bold text-gray-800">{blog.attributes.title}</h1>
      <div className="my-5">
        <BlocksRenderer
          content={blog.attributes.content}
          blocks={{
            paragraph: ({ children }) => <p className="my-2">{children}</p>,
            list: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
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
  );
};

export default BlogDetail;
