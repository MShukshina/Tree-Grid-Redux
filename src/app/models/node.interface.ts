export interface Node {
  id: number;
  parent?: string;
  parent_id: number;
  name: string;
  nodeId: string;
  url: string;
  level: number;
  child?: Node [];
  isOpened?: boolean;
}
