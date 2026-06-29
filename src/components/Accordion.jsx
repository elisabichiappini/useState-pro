import { useState } from "react";
import { IoMdArrowDropupCircle as CloseIcon, IoMdArrowDropdownCircle as OpenIcon } from "react-icons/io";

export default function ({ title, children, isOpen, onAccordionClick }) {
    
    return (
        <div className="accordion">
            <section className="title">
                <h2>{title}</h2>
                <button onClick={onAccordionClick }>
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