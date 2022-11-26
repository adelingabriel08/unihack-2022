export interface IFilterProperties {
  name: string;
  options?: IFilterOption[];
}

export interface IFilterOption {
  name: string;
  id: number;
}
