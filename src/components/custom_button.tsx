import "./custom_button.css";

interface CustomButtonProps {
  title: string;
  onClick?: Function;
}

export default function Custom_button(props: CustomButtonProps) {
  return (
    <button
      className="custom-button"
      onClick={function () {
        if (props.onClick !== undefined) {
          props.onClick();
        }
      }}
    >
      {props.title}
    </button>
  );
}
