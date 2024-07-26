export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center'>
        <h1 className='text-4xl font-semibold text-center my-7 text-indigo-600'>
          About ByteBlog
        </h1>
        <div className='text-lg text-gray-700 flex flex-col gap-6'>
          <p>
            Welcome to ByteBlog! Here, you'll discover a wealth of knowledge through weekly articles and tutorials on topics such as web development, software engineering, and programming languages. Our content is designed to help you stay ahead of the curve in the ever-evolving tech landscape.
          </p>

          <p>
            ByteBlog features an engaging community where you can leave comments, like other people's comments, and reply to them. We believe in fostering a collaborative environment where readers can share insights, ask questions, and help each other grow.
          </p>

          <p>
            Stay tuned for the latest trends, tips, and techniques in technology. Whether you're a seasoned developer or just starting out, ByteBlog is your go-to resource for all things tech. Join us on this exciting journey and elevate your skills to the next level!
          </p>
        </div>
      </div>
    </div>
  );
}

