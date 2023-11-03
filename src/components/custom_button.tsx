import "./custom_button.css";

interface CustomButtonProps{
    title : string;
}


export default function Custom_button(props : CustomButtonProps){
    return <button className="custom-button">
        {props.title}
    </button>
}