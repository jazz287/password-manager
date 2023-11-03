import { Search } from "@carbon/icons-react";
import { SiteCard } from "./site_card";
import Custom_button from "./custom_button";
import Heading_bar from "./Heading_bar";

export default function Home() {
  return (
    <div>
      <Heading_bar />
      <Custom_button title="New Password" />
      <br />
      <br />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
    </div>
  );
}
