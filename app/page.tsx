import DotBackground from "./components/DotBackground";
import HomeComponent from "./components/Home";
import HomeBanner from "./components/HomeBanner";
export default function Home() {
  const currentDate = new Date();
  const offerExpirationDate = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000);
  return (
    <div className="">
      <DotBackground />
      <HomeBanner offerExpirationDate={offerExpirationDate} />
      <HomeComponent />
    </div>
  );
}
