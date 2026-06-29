import { useState } from "react";
import { IoMdArrowDropupCircle as CloseIcon, IoMdArrowDropdownCircle as OpenIcon } from "react-icons/io";

export default function ({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="accordion">
            <section className="title">
                <h2>{title}</h2>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CloseIcon /> : <OpenIcon />}
                </button>
            </section>
            { isOpen && (
                <div className="content">
                    {children}
                </div>
            )}
        </div>
    )
}