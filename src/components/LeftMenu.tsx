import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";
import Ad from "./Ad";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/posts.png" alt="" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-500 w-36 self-center" />

        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/activity.png" alt="" width={20} height={20} />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-500 w-36 self-center" />

        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/market.png" alt="" width={20} height={20} />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-500 w-36 self-center" />

        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-500 w-36 self-center" />

        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/albums.png" alt="" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-500 w-36 self-center" />

        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/videos.png" alt="" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-500 w-36 self-center" />

        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/news.png" alt="" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-500 w-36 self-center" />

        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/courses.png" alt="" width={20} height={20} />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-500 w-36 self-center" />

        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/lists.png" alt="" width={20} height={20} />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-500 w-36 self-center" />
        {/* ITEMS */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200"
        >
          <Image src="/settings.png" alt="" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm"/>
    </div>
  );
};

export default LeftMenu;