interface CardProps {
  children: JSX.Element[] | JSX.Element;
}

export default function Card(props: CardProps) {
  return (
    <div
      style={{
        backgroundColor: "#393E46",
        borderRadius : "12px",
        color: "white",
        boxShadow : "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        overflow:"hidden",
      }}
    >
      {props.children}
    </div>
  );
}
