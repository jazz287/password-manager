import { Search } from "@carbon/icons-react";

export default function Heading_bar() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-between",
      }}
    >
      <h1>Page Heading </h1>
      <Search />
    </div>
  );
}
