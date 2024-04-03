// import { cookies } from "next/headers";
import Card from "./components/Card";
import DisplyCard from "./components/DisplyCard";
import Link from "next/link";
import Logout from "./components/Logout";
import CheckRoute from "./components/CheckRoute";

export default function Home() {
  return (
    <main className="flex h-screen p-[5%] justify-evenly items-center bg-[#F1EF99] gap-x-6  relative">
      <CheckRoute />
      <div className="w-[300px] h-[400px]   rounded-lg flex flex-col gap-y-[20px] bg-[#B0C5A4]  p-5">
        <Card />
      </div>

      <div className="flex-initial h-[450px] w-full flex justify-start gap-x-5 gap-y-5 flex-wrap bg-white rounded-lg  p-[5%] overflow-scroll ">
        <DisplyCard />
      </div>

      <div className="absolute top-0 right-0 mt-4 mr-4">
        <Link href={"/Login"}>
          <Logout />
        </Link>
      </div>
    </main>
  );
}
