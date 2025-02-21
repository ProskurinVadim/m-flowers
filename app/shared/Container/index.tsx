import {FC,ReactNode} from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const Component: FC<Props> = ({children, className=""}) => (
    <div className={`${className}`}>
        Container
        {children}
    </div>
)

export default Component;