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
    link: "text-orange-800 hover:underline",
    primary: "bg-orange-800 text-white hover:bg-orange-900",
    secondary: "bg-orange-200 text-orange-800 hover:bg-orange-300",
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
