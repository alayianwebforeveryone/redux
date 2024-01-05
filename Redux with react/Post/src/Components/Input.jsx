import { useId } from "react"

function Input({
    label,
    type = "text",
    className = "",
    ...props

}) {

    const id = useId()
    return (
        <div className="w-full">
            {
                label && <label className="mb-1 pl-1 inline-block"
                    htmlFor={props.id}>
                </label>
            }
            <input
            
            type= {type} className={`${className} px-3 py-2 round-lg bg-white text-black outline-none
            focus:bg-gray-50 duration-200 border border-gray-200 w-full`} 
            id= {id}
            {...props}
            />

        </div>
    )
}

export default Input
