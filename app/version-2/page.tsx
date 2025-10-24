import DotBackground2 from "../components/DotBackground2";
import HomeComponent from "../components/Home";
import HomeBanner from "../components/HomeBanner";
export default function Home() {
  const currentDate = new Date();
  const offerExpirationDate = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000);
  return (
    <div className="">
      <DotBackground2 />
      <HomeBanner offerExpirationDate={offerExpirationDate} />
      <HomeComponent />
    </div>
  );
}
