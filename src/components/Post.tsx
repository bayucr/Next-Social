import Image from "next/image";
import React from "react";
import Comment from "./Comment";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div>
        <div className="flex items-center justify-between ">
          {/* avatar */}
          <Image
            src="https://images.pexels.com/photos/24375005/pexels-photo-24375005/free-photo-of-young-brunette-posing-among-tropical-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt=""
            className="size-10 rounded-full"
          />
          <span className="pl-7 font-medium">bing chilling</span>
          <Image src="/more.png" width={16} height={16} alt="" />
        </div>
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/25677021/pexels-photo-25677021/free-photo-of-village-in-green-valley.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <p>Lgi digunung nih</p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
      <Comment />
    </div>
  );
};

export default Post;
