import { Search } from "@carbon/icons-react";

export default function Home() {
  return (
    <div>
      <div style={{display:'flex', width:'100vw', justifyContent:'space-between'}}>
        <h1>Password Manager </h1>
        <Search />
      </div>
      <button>New Password</button>
    </div>
  );
}
