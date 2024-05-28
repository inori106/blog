export type ContactFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: null | string;
};

export type SearchFormState = {
  errors?: {
    search?: string[];
  };
};
