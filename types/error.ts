interface ValidationMessage {
  message: string;
}

export interface ApiError {
  message: string;
  status: boolean;
  title: string;
}

export interface ApiValidationError {
  error: ValidationMessage[];
  status: boolean;
  title: string;
}
