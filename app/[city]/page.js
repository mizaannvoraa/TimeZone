import HomeContent from "@/components/HomeContent";

export default async function CityPage(props) {
  const { city } = await props.params;

  return <HomeContent city={city.toLowerCase()} />;
}
