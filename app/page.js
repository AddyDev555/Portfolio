import SideProfile from "@/components/SideProfile";
import MainHomepage from "@/components/MainHomepage";

export default function Home() {
  return (
    <div className="p-4 flex">
      <SideProfile className="sticky top-0"/>
      <MainHomepage />
    </div>
  );
}
