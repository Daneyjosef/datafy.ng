export type ProviderName = "whogohost" | "resellerclub";

export type DomainAvailabilityResult = {
  domain: string;
  tld: string;
  available: boolean;
  price: {
    currency: "NGN" | "USD";
    registration: number;
    renewal: number;
  };
  provider: ProviderName;
};

export type DomainRegistrationRequest = {
  domain: string;
  years: number;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
};

export type DomainRegistrationResult = {
  status: "pending_provider_setup" | "success" | "error";
  message: string;
  orderId?: string;
};
