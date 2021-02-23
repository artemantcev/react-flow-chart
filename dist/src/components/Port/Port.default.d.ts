/// <reference types="react" />
import { IConfig, INode, IPort } from '../../';
export interface IPortDefaultProps {
    className?: string;
    config: IConfig;
    port: IPort;
    node: INode;
    isSelected: boolean;
    isHovered: boolean;
    isLinkSelected: boolean;
    isLinkHovered: boolean;
}
export declare const PortDefault: ({ isLinkSelected, isLinkHovered, config, className }: IPortDefaultProps) => JSX.Element;
