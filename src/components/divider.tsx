interface DividerProps {
  indent?: number;
}

export default function Divider(props: DividerProps) {
  return (
    <div
      style={{
        marginLeft: `${props.indent ?? 0}px`,
        height: "1px",
        width: "100%",
        backgroundColor: "gray",
      }}
    ></div>
  );
}
