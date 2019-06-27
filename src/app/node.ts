export interface INode {
  name: string;
  level: number;
  nodeId: string;
  url: string;
  parent: string;
  child: INode[];
}
