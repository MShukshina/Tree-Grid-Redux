export interface INode {
  parent: string;
  name: string;
  nodeId: string;
  url: string;
  level: number;
  child: INode [];
}
