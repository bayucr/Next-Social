import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/*----------LEFT----------*/}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          ELAELO
        </Link>
      </div>

      {/*----------CENTER----------*/}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* -LINK- */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="homepage"
              className="size-4"
              width={30}
              height={30}
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="homepage"
              className="size-4"
              width={30}
              height={30}
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/stories.png"
              alt="homepage"
              className="size-4"
              width={30}
              height={30}
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-200 items-center rounded-full">
          <input type="text" placeholder="Search..." className="bg-transparent outline-none" />
          <Image src="/search.png" alt="" width={14} height={14}/>
        </div>
      </div>

      {/*----------RIGHT----------*/}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          {/* -LoadingImage- */}
          <div
            className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="" height={25} width={25} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" height={20} width={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="" height={20} width={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-1 text-sm">
              <Image src="/noAvatar.png" alt="" height={20} width={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
