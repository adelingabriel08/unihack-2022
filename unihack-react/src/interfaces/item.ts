export interface IItem {
  id: number;
  title: string;
  stolenItemTypeId: number;
  serialNumber: string;
  description: string;
  location: string;
  color: string;
  size: string;
  fileUrl: string;
  createdTimeUTC: Date;
  stolenItemType: IStolenItemType;
}

export interface IStolenItemType {
  name: string;
  id: number;
  createdTimeUtc?: Date;
  updatedTimeUtc?: Date;
}
