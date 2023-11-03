interface CustomButtonProps{
    title : string;
}


export default function Custom_button(props : CustomButtonProps){
    return <button>
        {props.title}
    </button>
}