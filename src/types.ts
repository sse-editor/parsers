export interface OutputData<T extends Object = any> {
  id: string;
  type: string;
  data: T;
}
