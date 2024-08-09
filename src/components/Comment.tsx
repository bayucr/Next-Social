import Image from "next/image";
import React from "react";

const Comment = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/18262641/pexels-photo-18262641/free-photo-of-bird-eye-view-on-yacht-in-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="size-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between bg-slate-200 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/18262641/pexels-photo-18262641/free-photo-of-bird-eye-view-on-yacht-in-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">iwak</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tempor finibus nisi et suscipit. Morbi eros ligula, interdum vitae
              metus sit amet, posuere commodo lorem. Pellentesque interdum eu
              ligula quis elementum.
            </p>
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-4 mt-2">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3 cursor-pointer"
                />
                <span className="text-gray-400">|</span>
                <span className="text-gray-500">123 Likes</span>
                <div className="">reply</div>
              </div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
