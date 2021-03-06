import * as React from 'react';
import { IConfig, ILink, INode, INodeInnerDefaultProps, IOnDragNode, IOnDragNodeStop, IOnLinkCancel, IOnLinkComplete, IOnLinkMove, IOnLinkStart, IOnNodeClick, IOnNodeDoubleClick, IOnNodeMouseEnter, IOnNodeMouseLeave, IOnNodeSizeChange, IOnPortPositionChange, IPortDefaultProps, IPortsDefaultProps, IPosition, ISelectedOrHovered } from '../../';
import { INodeDefaultProps } from './Node.default';
export interface INodeWrapperProps {
    config: IConfig;
    node: INode;
    Component: React.FunctionComponent<INodeDefaultProps>;
    offset: IPosition;
    selected: ISelectedOrHovered | undefined;
    hovered: ISelectedOrHovered | undefined;
    selectedLink: ILink | undefined;
    hoveredLink: ILink | undefined;
    isSelected: boolean;
    NodeInner: React.FunctionComponent<INodeInnerDefaultProps>;
    Ports: React.FunctionComponent<IPortsDefaultProps>;
    Port: React.FunctionComponent<IPortDefaultProps>;
    onPortPositionChange: IOnPortPositionChange;
    onLinkStart: IOnLinkStart;
    onLinkMove: IOnLinkMove;
    onLinkComplete: IOnLinkComplete;
    onLinkCancel: IOnLinkCancel;
    onDragNode: IOnDragNode;
    onDragNodeStop: IOnDragNodeStop;
    onNodeClick: IOnNodeClick;
    onNodeDoubleClick: IOnNodeDoubleClick;
    onNodeSizeChange: IOnNodeSizeChange;
    onNodeMouseEnter: IOnNodeMouseEnter;
    onNodeMouseLeave: IOnNodeMouseLeave;
}
export declare const NodeWrapper: ({ config, node, onDragNode, onDragNodeStop, onNodeClick, onNodeDoubleClick, isSelected, Component, onNodeSizeChange, onNodeMouseEnter, onNodeMouseLeave, NodeInner, Ports, Port, offset, selected, selectedLink, hovered, hoveredLink, onPortPositionChange, onLinkStart, onLinkMove, onLinkComplete, onLinkCancel, }: INodeWrapperProps) => JSX.Element;
