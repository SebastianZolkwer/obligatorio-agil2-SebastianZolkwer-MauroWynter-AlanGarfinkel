import { ImageBasicInfoModel } from './image-basic-info-model';
import { ReviewDetailsModel } from './review-details-model';

export interface ChargingPointDetailsModel {
  id: number;
  regionId: number;
  name: string;
  address: string;
  description: string;
  identifier: string;
}
