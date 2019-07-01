export interface INode {
  id: number;
  parent: string;
  name: string;
  nodeId: string;
  url: string;
  level: number;
  child: INode [];
}
