export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface InquiryForm {
  name: string;
  inquiryType: string;
  city: string;
  phone: string;
  email: string;
  message: string;
}