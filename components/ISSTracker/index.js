import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR, { mutate } from "swr";

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544"
  );
  console.log(data);
  if (error) {
    return "it is an error there!";
  } else if (isLoading) {
    return "Loading ...";
  }

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
