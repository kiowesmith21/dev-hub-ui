import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <p>Home Page</p>
        <Link className="border-2 border-blue-500" href="/dashboard">Dashboard</Link>
      </div>
    </>
  );
}
