import classNames from "classnames";
import { ReactNode } from "react";
import { Link, To } from "react-router-dom";

type Props = {
    children: ReactNode;
    onClick?: () => void;
    to?: To;
    variant?: "link" | "primary" | "secondary";
    disabled?: boolean;
};

const variants = {
    link: "text-emerald-400 hover:underline",
    primary: "bg-emerald-400 text-white hover:bg-emerald-500",
    secondary: "bg-emerald-100 text-emerald-400 hover:bg-emerald-200",
};

function Button({
    variant = "primary",
    children,
    to,
    onClick = () => {},
    disabled,
}: Props) {
    const Element = to ? Link : "button";

    return (
        <Element
            className={classNames("px-3 py-1 rounded-lg", variants[variant], {"opacity-50 cursor-not-allowed": disabled})}
            to={to ?? ""}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Element>
    );
}

export default Button;
