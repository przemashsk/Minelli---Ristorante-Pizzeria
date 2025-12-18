
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'pizza' | 'pasta' | 'mains' | 'desserts' | 'drinks';
  image: string;
  allergens?: string[];
  popular?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ReservationStatus {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
