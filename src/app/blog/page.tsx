import React from 'react';
import Image from "next/image";

const FrogImage = () => {
  return (
    <Image
      src="/frog.svg"
      alt="Frog"
      width={200}
      height={200}
    />
  );
};

const BlogPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FrogImage />
      <div className="mt-8 text-2xl font-bold text-gray-800">Coming soon!</div>
    </div>
  );
};

export default BlogPage;