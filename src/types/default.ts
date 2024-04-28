//For the quote
export type quoteProps = {
  fullName: string;
  email: string;
  adminEmail: string;
  phoneNumber: string;
  address: string;
  country: string;
  serialNumber: string;
  nearestAirport: string;
};

//For the country dropdown
export type Country = {
  code: string;
  name: string;
};

//For the package
export type packageProps = {
  originPort: string;
  destinationPort: string;
  transportationMode: string;
  pieces: number;
  length: number;
  weight: number;
  width: number;
  height: number;
  statusChanges: object;
  estimatedDeliveryDate: string;
  dateCreated: string;
};

//For the order details
export type OrderDetailsProps = {
  onClose: () => void;
};

//For the admin account creation
export type accountCreation = {
  email: string;
  password: string;
  notificationEmail: string
};

//For the suspension props
export type suspendProps = {
  role: string,
  loggedInEmail: string
  adminEmail: string,
  userSuspended: boolean,
}

//For the deleting props
export type deleteProps = {
  loggedInEmail: string,
  notificationEmail: string
}

//For Serial Number
export type serialNumber = {
    id: string;
    serialNumber: string;
    adminNotificationEmail: string;
    adminEmail: string;
    createdAt: Date;
    updatedAt: Date;
}

//For Quote Email
export type emailProps = {
  fullName?: string;
  email?: number;
  phoneNumber?: string;
  address?: string;
  country?: string;
  nearestAirport?: string;
  serialNumber?: string;
};