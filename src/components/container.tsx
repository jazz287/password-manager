interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export function Container(props: ContainerProps) {
  return (
    <div
      className="container"
      style={{
        marginTop : "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <div
        style={{
          width: "60vw",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
