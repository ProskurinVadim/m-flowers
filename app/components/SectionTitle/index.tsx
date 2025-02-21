import { FC, ReactNode } from "react";
import {h2} from "./title.tailwind";
import { VariantProps } from "tailwind-variants";
interface Props {
    children: ReactNode;
    className?: string;
    tlwVar?: VariantProps<typeof h2>
}

const SectionTitle: FC<Props> = ({children, className, tlwVar = {}}) => {
    const {type, color} = tlwVar
    return <h2 className={`${className} ${h2({type, color})}`}>{children}</h2>
}

export default SectionTitle