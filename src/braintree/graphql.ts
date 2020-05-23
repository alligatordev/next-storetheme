import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * An [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code. Braintree only accepts [specific alpha-2 values](https://developers.braintreepayments.com/reference/general/countries#list-of-countries).
   */
  CountryCodeAlpha2: unknown;
  /**
   * An [ISO 4217 alpha](https://en.wikipedia.org/wiki/ISO_4217) currency code.
   * Braintree only accepts [specific alpha
   * values](https://developers.braintreepayments.com/reference/general/currencies).
   */
  CurrencyCodeAlpha: unknown;
  /** A date in the format YYYY-MM-DD. */
  Date: unknown;
  /** An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Times) timestamp with microsecond precision, in UTC. */
  Timestamp: unknown;
  /** A monetary amount, either a whole number or a number with exactly two or three decimal places. */
  Amount: unknown;
  /**
   * An [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
   * country code. Braintree only accepts [specific alpha-3 values](https://developers.braintreepayments.com/reference/general/countries#list-of-countries).
   */
  CountryCodeAlpha3: unknown;
  /** A card brand-specific two-digit string describing the mode of the transaction. */
  ECommerceIndicator: unknown;
  /** A four-digit string. */
  CreditCardLast4: unknown;
  /** A string representing a custom field value. Contains letters, numbers, and underscores. */
  CustomFieldName: unknown;
  /** A 3D Secure authentication version. Must be composed of digits separated by periods (e.g. '1.0.2'). */
  ThreeDSecureVersion: unknown;
  /** A raw 3D Secure PARes or VARes response code (e.g. 'Y'). */
  ThreeDSecureStatusCode: unknown;
  /** A 3D Secure CAVV algorithm. Possible Values: 2 - CVV with ATN, 3 - Mastercard SPA algorithm. */
  ThreeDSecureCavvAlgorithm: unknown;
  /** A two-digit, zero-padded month. */
  Month: unknown;
  /** A four-digit year. */
  Year: unknown;
  /** A number that passes Luhn validation. */
  CreditCardNumber: unknown;
  /** An account number containing 4-17 digits. */
  UsBankAccountNumber: unknown;
  /** A routing number containing 8 or 9 digits. */
  UsBankRoutingNumber: unknown;
  /** A US ZIP code. Supports DDDDD and DDDDD-DDDD formats. */
  UsZipCode: unknown;
  /** A nine-digit Employer Identification Number or Social Security Number. */
  USTaxIdentificationNumber: unknown;
  /** An [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) Merchant Category Code. Four digits. */
  MerchantCategoryCode: unknown;
};

/** Top-level input fields for accepting a dispute. */
export type AcceptDisputeInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the dispute to be accepted. */
  disputeId: Scalars['ID'];
};

/** Top-level field returned when accepting a dispute. */
export type AcceptDisputePayload = {
  __typename?: 'AcceptDisputePayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Information about the dispute that was accepted. */
  dispute?: Maybe<Dispute>;
};

/** Information abou the business's ACH configuration. */
export type ACHConfigurationInput = {
  /** The ACH/NACHA company ID. Included in the NACHA file to help identify the company. */
  companyId: Scalars['String'];
  /** The business's NACHA entry. Included in the NACHA file to help identify the company. */
  entry: Scalars['String'];
  /** Should ACH initiation be enabled? If true, any failed transaction will be retried. */
  reinitiation: Scalars['Boolean'];
};

/** A NACHA standard entry class (SEC) code, which designates how an ACH transaction was authorized. */
export enum ACHStandardEntryClassCode {
  /** Corporate credit or debit. */
  CCD = 'CCD',
  /** Prearranged payment and deposit. */
  PPD = 'PPD',
  /** Telephone-initiated. */
  TEL = 'TEL',
  /** Internet-initiated/mobile. */
  WEB = 'WEB',
}

/** Representation of an address. */
export type Address = {
  __typename?: 'Address';
  /** Company name. */
  company?: Maybe<Scalars['String']>;
  /** The street address. */
  streetAddress?: Maybe<Scalars['String']>;
  /** Extended address information, such as an apartment or suite number. */
  extendedAddress?: Maybe<Scalars['String']>;
  /**
   * First name.
   * @deprecated Use `fullName` instead.
   */
  firstName?: Maybe<Scalars['String']>;
  /**
   * Last name.
   * @deprecated Use `fullName` instead.
   */
  lastName?: Maybe<Scalars['String']>;
  /** Full name. */
  fullName?: Maybe<Scalars['String']>;
  /** Locality/city. */
  locality?: Maybe<Scalars['String']>;
  /** State or province. */
  region?: Maybe<Scalars['String']>;
  /** Postal code, otherwise known as CAP, CEP, Eircode, NPA, PIN, PLZ, or ZIP code. */
  postalCode?: Maybe<Scalars['String']>;
  /** Country code for the address in ISO 3166-1 alpha-3 format. */
  countryCode?: Maybe<Scalars['CountryCodeAlpha3']>;
};

/** Input fields for an Address. */
export type AddressInput = {
  /** Company name. 255 character maximum. */
  company?: Maybe<Scalars['String']>;
  /** The street address. 255 character maximum. */
  streetAddress?: Maybe<Scalars['String']>;
  /** Extended address information, such as an apartment or suite number. 255 character maximum. */
  extendedAddress?: Maybe<Scalars['String']>;
  /** First name. 255 character maximum. */
  firstName?: Maybe<Scalars['String']>;
  /** Last name. 255 character maximum. */
  lastName?: Maybe<Scalars['String']>;
  /** Locality/city. 255 character maximum. */
  locality?: Maybe<Scalars['String']>;
  /** State or province. 255 character maximum. */
  region?: Maybe<Scalars['String']>;
  /**
   * Postal code in any country's format, otherwise known as CAP, CEP, Eircode,
   * NPA, PIN, PLZ, or ZIP code. Nine alphanumeric characters maximum, may also
   * contain spaces and hyphens.
   *
   * *Required for Level 3 processing*.
   */
  postalCode?: Maybe<Scalars['String']>;
  /**
   * Country code for the address in ISO 3166-1 alpha-3 format.
   *
   * *Required for Level 3 processing*.
   */
  countryCode?: Maybe<Scalars['CountryCodeAlpha3']>;
  /**
   * Deprecated: This field is included for supporting legacy clients. Please use `countryCode` instead.
   *
   * Country code for the address in ISO 3166-1 alpha-3 format.
   */
  countryCodeAlpha3?: Maybe<Scalars['String']>;
  /**
   * Deprecated: This field is included for supporting legacy clients. Please use `countryCode` instead.
   *
   * Country code for the address in ISO 3166-1 alpha-2 format.
   */
  countryCodeAlpha2?: Maybe<Scalars['String']>;
  /**
   * Deprecated: This field is included for supporting legacy clients. Please use `countryCode` instead.
   *
   * Country code for the address in ISO 3166-1 numeric format.
   */
  countryCodeNumeric?: Maybe<Scalars['String']>;
  /**
   * Deprecated: This field is included for supporting legacy clients. Please use `countryCode` instead.
   *
   * Country name for the address.
   */
  countryName?: Maybe<Scalars['String']>;
};

/** Information about the business's relationship with American Express. */
export type AmericanExpressRelationshipInput = {
  /** The business's American Express SE number. */
  serviceEstablishmentNumber: Scalars['String'];
};

/** Configuration for Apple Pay on iOS. */
export type ApplePayConfiguration = {
  __typename?: 'ApplePayConfiguration';
  /** The environment being used for Apple Pay. */
  status?: Maybe<ApplePayStatus>;
  /** The merchant's Apple Pay country code. */
  countryCode?: Maybe<Scalars['CountryCodeAlpha2']>;
  /** The merchant's Apple Pay currency ISO code. */
  currencyCode?: Maybe<Scalars['CurrencyCodeAlpha']>;
  /** The merchant identifier that must be supplied when making an Apple Pay request. */
  merchantIdentifier?: Maybe<Scalars['String']>;
  /** A list of card brands supported by the merchant for Apple Pay. */
  supportedCardBrands?: Maybe<Array<CreditCardBrandCode>>;
};

/** Additional information about the payment method specific to Apple Pay. */
export type ApplePayOriginDetails = {
  __typename?: 'ApplePayOriginDetails';
  /**
   * A human-readable description of the Apple Pay payment method. This usually
   * consists of the Apple Pay card type and its last four digits. If there is no
   * underlying credit card, this will describe the customer's payment method and
   * the parent CreditCardDetail object's last4 field will be null.
   */
  paymentInstrumentName?: Maybe<Scalars['String']>;
  /**
   * The first 6 digits of the credit card, known as the Bank Identification
   * Number. This BIN may differ from the BIN of the customer's actual card.
   */
  bin?: Maybe<Scalars['String']>;
};

/** The environment being used for Apple Pay. */
export enum ApplePayStatus {
  MOCK = 'MOCK',
  OFF = 'OFF',
  PRODUCTION = 'PRODUCTION',
  mock = 'mock',
  off = 'off',
  production = 'production',
}

/** Configuration for Apple Pay on web. */
export type ApplePayWebConfiguration = {
  __typename?: 'ApplePayWebConfiguration';
  /** The merchant's Apple Pay country code. */
  countryCode?: Maybe<Scalars['CountryCodeAlpha2']>;
  /** The merchant's Apple Pay currency ISO code. */
  currencyCode?: Maybe<Scalars['CurrencyCodeAlpha']>;
  /** The merchant identifier that must be supplied when making an Apple Pay request. */
  merchantIdentifier?: Maybe<Scalars['String']>;
  /** A list of card brands supported by the merchant for Apple Pay. */
  supportedCardBrands?: Maybe<Array<CreditCardBrandCode>>;
};

/** Input fields for a Merchant Account Application bank account object. */
export type ApplicationBankAccountInput = {
  /** The routing number of the bank that holds the account. */
  routingNumber: Scalars['UsBankRoutingNumber'];
  /** The account number of the bank account. */
  accountNumber: Scalars['UsBankAccountNumber'];
  /** The type of transfer setup on the account. */
  transferType: ApplicationTransferType;
  /** The type of account. */
  accountType: ApplicationBankAccountType;
  /** The purpose of account. */
  accountPurpose: ApplicationBankAccountPurpose;
  /** The type of entity that holds the account. */
  entityType: ApplicationEntityType;
};

/** The purpose of the merchant application bank account. */
export enum ApplicationBankAccountPurpose {
  CHECKING = 'CHECKING',
  SAVINGS = 'SAVINGS',
}

/** The type of merchant application bank account. */
export enum ApplicationBankAccountType {
  CORPORATION = 'CORPORATION',
  PARTNERSHIP = 'PARTNERSHIP',
}

/** The entity that holds the merchant application bank account. */
export enum ApplicationEntityType {
  COMPANY = 'COMPANY',
}

/** The status of a merchant account application. */
export enum ApplicationStatus {
  APPROVED = 'APPROVED',
  PROCESSING = 'PROCESSING',
  REJECTED = 'REJECTED',
}

/** The type of transfer used for the bank account. */
export enum ApplicationTransferType {
  BANK_ACCOUNT_USA = 'BANK_ACCOUNT_USA',
  BANK_ACCOUNT_WIRE_USA = 'BANK_ACCOUNT_WIRE_USA',
}

/**
 * Information about the [customer authentication regulation environment](https://developers.braintreepayments.com/guides/3d-secure/migration/javascript/v3#authentication-insight)
 * that applies to the payment method when processed with the provided merchant account.
 */
export type AuthenticationInsight = {
  __typename?: 'AuthenticationInsight';
  /** The merchant account used to determine authentication insight. */
  merchantAccountId?: Maybe<Scalars['String']>;
  /**
   * The customer authentication regulation environment that applies when
   * transacting with this payment method and merchant account.
   */
  customerAuthenticationRegulationEnvironment?: Maybe<CustomerAuthenticationRegulationEnvironment>;
  /** A value indicating when to perform further customer authentication. */
  customerAuthenticationIndicator?: Maybe<CustomerAuthenticationIndicator>;
};

/** Input fields when requesting authentication insight for a payment method. */
export type AuthenticationInsightInput = {
  /** ID of the merchant account that will be used when charging this payment method. */
  merchantAccountId: Scalars['ID'];
  /** The intended transaction amount to be authorized on this payment method. */
  amount?: Maybe<Scalars['Amount']>;
  /** A flag indicating whether the customer has consented to further recurring transactions. */
  recurringCustomerConsent?: Maybe<Scalars['Boolean']>;
  /** The maximum amount permitted for recurring transactions set by the customer. */
  recurringMaxAmount?: Maybe<Scalars['Amount']>;
};

/** Accompanying information for an authorization expired transaction. */
export type AuthorizationExpiredEvent = PaymentStatusEvent & {
  __typename?: 'AuthorizationExpiredEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the authorization for this transaction was marked expired. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The amount of the transaction for this status event. */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
};

/** Accompanying information for an authorized transaction. */
export type AuthorizedEvent = PaymentStatusEvent & {
  __typename?: 'AuthorizedEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the transaction was authorized. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /**
   * The amount the transaction was authorized for. This will match the amount on
   * the transaction itself. In most cases, you can't request to settle more than this amount.
   */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Fields describing the payment processor response to the authorization request. */
  processorResponse?: Maybe<TransactionAuthorizationProcessorResponse>;
  /** Risk decision for this transaction. */
  riskDecision?: Maybe<RiskDecision>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
  /**
   * The date/time the transaction will expire if it has the authorized status. For
   * more details on authorization expiration timeframes, see the [Statuses reference](https://developers.braintreepayments.com/reference/general/statuses#authorization-expired).
   */
  authorizationExpiresAt?: Maybe<Scalars['Timestamp']>;
};

/** Top-level input fields for creating a transaction by authorizing a payment method. */
export type AuthorizePaymentMethodInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of a payment method to be authorized. */
  paymentMethodId: Scalars['ID'];
  /** Input fields for the authorization, with details that will define the resulting transaction. */
  transaction: TransactionInput;
};

/** Top-level input fields for creating a transaction by authorizing a payment method. */
export type AuthorizePayPalAccountInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of a payment method to be authorized. */
  paymentMethodId: Scalars['ID'];
  /** Input fields related to the PayPal account being charged. */
  options?: Maybe<AuthorizePayPalAccountOptionsInput>;
  /** Input fields for the authorization, with details that will define the resulting transaction. */
  transaction: TransactionInput;
};

/** Input fields for authorizing a PayPal account. */
export type AuthorizePayPalAccountOptionsInput = {
  /** Variable passed directly to PayPal for your own tracking purposes. Customers do not see this value. */
  customField?: Maybe<Scalars['String']>;
  /** Description of the transaction that is displayed to customers in PayPal email receipts. */
  description?: Maybe<Scalars['String']>;
  /**
   * Input fields setting the PayPal transaction context for risk assessment
   * purposes. In order to use this field, your PayPal account must be set up to
   * use the SetTransactionContext feature. This data will only be passed through
   * to PayPal, and won't be stored on the transaction itself.
   */
  riskContext?: Maybe<PayPalTransactionRiskContextInput>;
  /** Deprecated: This field is no longer supported. */
  payee?: Maybe<PayPalPayeeOptionsInput>;
};

/** Top-level input fields for creating a transaction by authorizing a payment method. */
export type AuthorizeVenmoAccountInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of a payment method to be authorized. */
  paymentMethodId: Scalars['ID'];
  /** Input fields related to the Venmo account being charged. */
  options?: Maybe<AuthorizeVenmoAccountOptionsInput>;
  /** Input fields for the authorization, with details that will define the resulting transaction. */
  transaction: TransactionInput;
};

/** Input fields for authorizing a Venmo account. */
export type AuthorizeVenmoAccountOptionsInput = {
  /** Specifies which Venmo business profile to use for the transaction. */
  profileId?: Maybe<Scalars['String']>;
};

/** Response codes from the processing bank's Address Verification System (AVS) and CVV verification. */
export enum AvsCvvResponseCode {
  BYPASS = 'BYPASS',
  DOES_NOT_MATCH = 'DOES_NOT_MATCH',
  ISSUER_DOES_NOT_PARTICIPATE = 'ISSUER_DOES_NOT_PARTICIPATE',
  MATCHES = 'MATCHES',
  NOT_APPLICABLE = 'NOT_APPLICABLE',
  NOT_PROVIDED = 'NOT_PROVIDED',
  NOT_VERIFIED = 'NOT_VERIFIED',
  SYSTEM_ERROR = 'SYSTEM_ERROR',
}

/** Information about the credit card based on its BIN. */
export type BinRecord = {
  __typename?: 'BinRecord';
  /** Whether or not the card is prepaid, such as a gift card. */
  prepaid?: Maybe<BinRecordValue>;
  /** Whether the card is designated only to be used for healthcare expenses. */
  healthcare?: Maybe<BinRecordValue>;
  /** Whether or not the card is a debit card. */
  debit?: Maybe<BinRecordValue>;
  /**
   * Whether the card is regulated by the Durbin Amendment due to the bank's
   * assets, and therefore has a maximum interchange rate.
   */
  durbinRegulated?: Maybe<BinRecordValue>;
  /** Whether or not the card is a commercial card and capable of processing Level 2 transactions. */
  commercial?: Maybe<BinRecordValue>;
  /** Whether or not the card is designated for employee wages. */
  payroll?: Maybe<BinRecordValue>;
  /** The name of the bank that issued the card. */
  issuingBank?: Maybe<Scalars['String']>;
  /** The country code of the country that issued the card in ISO 3166-1 alpha-3 format. */
  countryOfIssuance?: Maybe<Scalars['CountryCodeAlpha3']>;
  /** A code representing any special program from the card issuer the card is part of. */
  productId?: Maybe<Scalars['String']>;
};

/** A boolean-like value that includes `UNKNOWN` in the case where the information isn't available. */
export enum BinRecordValue {
  NO = 'NO',
  UNKNOWN = 'UNKNOWN',
  YES = 'YES',
  No = 'No',
  Unknown = 'Unknown',
  Yes = 'Yes',
}

/** Configuration for payment methods in legacy clients. */
export type BraintreeApiConfiguration = {
  __typename?: 'BraintreeApiConfiguration';
  /** The URL for tokenizing payment methods. */
  url?: Maybe<Scalars['String']>;
  /** The authentication for tokenizing payment methods. */
  accessToken?: Maybe<Scalars['String']>;
};

/** The biller's ID type. */
export enum BusinessIDType {
  EMPLOYER_IDENTIFICATION_NUMBER = 'EMPLOYER_IDENTIFICATION_NUMBER',
}

/** General information about the business associated with the account. */
export type BusinessInput = {
  /** The biller's business type. */
  type: BusinessType;
  /** The DBA (Doing Business As) name of the business. */
  dbaName: Scalars['String'];
  /** The business's legal name. Max 100 characters. Valid characters: letters, numbers, spaces, ! & ' ( ) + , - / : . */
  legalName: Scalars['String'];
  /** The business's federal tax ID (EIN). Not required if business `type` is `SOLE_PROPRIETORSHIP`. */
  federalTaxId?: Maybe<Scalars['USTaxIdentificationNumber']>;
  /** The biller's ID type. */
  idType?: Maybe<BusinessIDType>;
  /** The country that issued the business's ID. */
  idIssuer?: Maybe<Scalars['CountryCodeAlpha3']>;
  /** The business's U.S. state of registration. */
  stateOfRegistration: UsStateCode;
  /** The business's merchant category code. */
  merchantCategoryCode?: Maybe<Scalars['MerchantCategoryCode']>;
  /** The business's start date. Must be after 1700. */
  startDate: Scalars['Date'];
  /** A URL to an logo image. Required for Venmo onboarding. Constraints TBD. */
  logoUrl?: Maybe<Scalars['String']>;
  /** The business's email address. */
  email?: Maybe<Scalars['String']>;
  /** The business's address. No P.O. Boxes. */
  address: AddressInput;
  /** The country code for the business's phone number. */
  phoneCountryCode: Scalars['Int'];
  /** The business's phone number. 9 digits. No extensions. Numbers only. */
  phoneNumber: Scalars['String'];
  /** The type of phone number for the business. */
  phoneType: BusinessPhoneType;
  /** The business's customer support email. */
  supportEmail?: Maybe<Scalars['String']>;
  /** The business's website. Must be a valid URL. */
  website: Scalars['String'];
  /** The business's annual processing volume. Must be less than 1 billion USD. */
  annualVolume: Scalars['Int'];
  /** The business's average transaction size. Must be less than 1 billion USD. */
  averageTransactionSize: Scalars['Int'];
  /** The business's largest transaction size. Must be less than 1 billion USD. */
  largestTransactionSize: Scalars['Int'];
  /** Whether payment is collected in arrears (after goods have been delivered). */
  arrears?: Maybe<Scalars['Boolean']>;
  /** Percentage of the business's transactions are billed in arrears. Must be between 0 and 100. */
  percentageOneTime?: Maybe<Scalars['Int']>;
  /** If the biller delivers goods, the number of days after charge they are delivered. */
  deliveryDays?: Maybe<Scalars['Int']>;
  /** The business's refund policy. */
  refundPolicy?: Maybe<RefundPolicy>;
  /** If applicable, the breakdown of monthly, quarterly, semi-annual, and annual subscriptions offered by the business. */
  subscriptions?: Maybe<BusinessSubscriptionInput>;
};

/** The type of phone number for the business. */
export enum BusinessPhoneType {
  BUSINESS = 'BUSINESS',
  CUSTOMER_SERVICE = 'CUSTOMER_SERVICE',
  MOBILE = 'MOBILE',
  WORK = 'WORK',
}

/** A breakdown of the business's subscription frequency. All percentages provided must add up to 100. */
export type BusinessSubscriptionInput = {
  /** The percentage of the business's subscriptions that are monthly. */
  percentMonthly: Scalars['Int'];
  /** The percentage of the business's subscriptions that are quarterly. */
  percentQuarterly: Scalars['Int'];
  /** The percentage of the business's subscriptions that are semi-annual. */
  percentSemiAnnual: Scalars['Int'];
  /** The percentage of the business's subscriptions that are annual. */
  percentAnnual: Scalars['Int'];
};

/** The biller's business type. */
export enum BusinessType {
  PRIVATE_CORPORATION = 'PRIVATE_CORPORATION',
  PUBLIC_CORPORATION = 'PUBLIC_CORPORATION',
  TAX_EXEMPT = 'TAX_EXEMPT',
  LIMITED_LIABILITY_CORPORATION = 'LIMITED_LIABILITY_CORPORATION',
  SOLE_PROPRIETORSHIP = 'SOLE_PROPRIETORSHIP',
  PARTNERSHIP_LLP = 'PARTNERSHIP_LLP',
  GOVERNMENT_ENTITY = 'GOVERNMENT_ENTITY',
}

/** Top-level input fields for capturing an authorized transaction. */
export type CaptureTransactionInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of the transaction to be captured. */
  transactionId: Scalars['ID'];
  /**
   * Deprecated: This field is included for supporting legacy clients. Please use `transaction.amount` instead.
   *
   * The amount to capture on the transaction. Must be greater than 0. You can't
   * capture more than the authorized amount unless your industry and processor
   * support settlement adjustment (capturing a certain percentage over the
   * authorized amount); [contact us for assistance](https://help.braintreepayments.com?issue=TransactionProcessingQuestion).
   * If you capture an amount that is less than what was authorized, the
   * transaction object will return the amount captured.
   */
  amount?: Maybe<Scalars['Amount']>;
  /** Input fields for the capture, with details that will define the resulting transaction. */
  transaction?: Maybe<CaptureTransactionOptionsInput>;
};

/** Input fields for a capture, with details that will define the resulting transaction. */
export type CaptureTransactionOptionsInput = {
  /**
   * The amount to capture on the transaction. Must be greater than 0. You can't
   * capture more than the authorized amount unless your industry and processor
   * support settlement adjustment (capturing a certain percentage over the
   * authorized amount); [contact us for assistance](https://help.braintreepayments.com?issue=TransactionProcessingQuestion).
   * If you capture an amount that is less than what was authorized, the
   * transaction object will return the amount captured.
   */
  amount?: Maybe<Scalars['Amount']>;
  /**
   * Fields used to define what will appear on a customer's bank statement for a
   * specific purchase. If specified, this will update the existing descriptor on
   * the transaction.
   */
  descriptor?: Maybe<TransactionDescriptorInput>;
  /**
   * Additional information about the transaction. On PayPal transactions, this
   * field maps to the PayPal invoice number. PayPal invoice numbers must be unique
   * in your PayPal business account. Maximum 255 characters or 127 for PayPal
   * transactions. If specified, this will update the existing order ID on the transaction.
   */
  orderId?: Maybe<Scalars['String']>;
};

/** A list of challenges that are required by the current merchant to process a given credit card. */
export enum Challenge {
  CVV = 'CVV',
  POSTAL_CODE = 'POSTAL_CODE',
  cvv = 'cvv',
  postal_code = 'postal_code',
}

/** Top-level input fields for creating a transaction by charging a payment method. */
export type ChargePaymentMethodInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of a payment method to be charged. */
  paymentMethodId: Scalars['ID'];
  /** Input fields for the charge, with details that will define the resulting transaction. */
  transaction: TransactionInput;
};

/** Top-level input fields for creating a transaction by charging a PayPal account. */
export type ChargePayPalAccountInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of an existing PayPal account. */
  paymentMethodId: Scalars['ID'];
  /** Input fields related to the PayPal account being charged. */
  options?: Maybe<ChargePayPalAccountOptionsInput>;
  /** Input fields for the charge, with details that will define the resulting transaction. */
  transaction: TransactionInput;
};

/** Input fields for creating a transaction with a PayPal account. */
export type ChargePayPalAccountOptionsInput = {
  /** Variable passed directly to PayPal for your own tracking purposes. Customers do not see this value. */
  customField?: Maybe<Scalars['String']>;
  /** Description of the transaction that is displayed to customers in PayPal email receipts. */
  description?: Maybe<Scalars['String']>;
  /**
   * Input fields setting the PayPal transaction context for risk assessment
   * purposes. In order to use this field, your PayPal account must be set up to
   * use the SetTransactionContext feature. This data will only be passed through
   * to PayPal, and won't be stored on the transaction itself.
   */
  riskContext?: Maybe<PayPalTransactionRiskContextInput>;
  /** Deprecated: This field is no longer supported. */
  payee?: Maybe<PayPalPayeeOptionsInput>;
};

/** Top-level input fields for creating a transaction by charging a US bank account. */
export type ChargeUsBankAccountInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of an existing US bank account. */
  paymentMethodId: Scalars['ID'];
  /** Input fields related to the US bank account being charged. */
  options?: Maybe<ChargeUsBankAccountOptionsInput>;
  /** Input fields for the charge, with details that will define the resulting transaction. */
  transaction: TransactionInput;
};

/** Input fields for creating a transaction with a US bank account. */
export type ChargeUsBankAccountOptionsInput = {
  /**
   * A NACHA standard entry class (SEC) code, which designates how the transaction
   * was authorized. Most internet-based sales should use the `WEB` code.
   */
  standardEntryClassCode?: Maybe<ACHStandardEntryClassCode>;
};

/** Top-level input fields for creating a transaction by charging a Venmo account. */
export type ChargeVenmoAccountInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of an existing Venmo account. */
  paymentMethodId: Scalars['ID'];
  /** Input fields for creating a Pay with Venmo transaction. */
  options?: Maybe<ChargeVenmoAccountOptionsInput>;
  /** Input fields for the charge, with details that will define the resulting transaction. */
  transaction: TransactionInput;
};

/** Input fields for creating a Pay with Venmo transaction. */
export type ChargeVenmoAccountOptionsInput = {
  /** Specifies which Venmo business profile to use for the transaction. */
  profileId?: Maybe<Scalars['String']>;
};

/** A partial capture's relationship to its original authorization transaction. */
export type ChildCapture = {
  __typename?: 'ChildCapture';
  /** The original authorization whose funds have been partially captured. */
  parentAuthorization?: Maybe<Transaction>;
};

/** Top-level fields returned from the client configuration query. */
export type ClientConfiguration = {
  __typename?: 'ClientConfiguration';
  /**
   * URL to send analytics.
   * @deprecated This field is included for supporting SDKs that send analytics.
   */
  analyticsUrl?: Maybe<Scalars['String']>;
  /** Configuration for Apple Pay on iOS. */
  applePay?: Maybe<ApplePayConfiguration>;
  /** Configuration for Apple Pay on the web. */
  applePayWeb?: Maybe<ApplePayWebConfiguration>;
  /** A URL pointing to the base path of Braintree's web pages used for various browser switches and popups. */
  assetsUrl?: Maybe<Scalars['String']>;
  /**
   * A URL pointing to the base path of Braintree's client API.
   * @deprecated This field is included for supporting legacy clients.
   */
  clientApiUrl?: Maybe<Scalars['String']>;
  /**
   * A list of client features the merchant supports.
   * @deprecated This field is included for supporting legacy clients.
   */
  supportedFeatures?: Maybe<Array<ClientFeature>>;
  /**
   * Configuration for payment methods in legacy clients.
   * @deprecated This field is included for supporting legacy clients.
   */
  braintreeApi?: Maybe<BraintreeApiConfiguration>;
  /** Configuration for credit card tokenization. */
  creditCard?: Maybe<CreditCardConfiguration>;
  /** The enum of the current environment. */
  environment?: Maybe<ClientConfigurationEnvironment>;
  /** Configuration for fraud protection provider. */
  fraudProvider?: Maybe<FraudProviderConfiguration>;
  /** Configuration for Google Pay on Android and the web. */
  googlePay?: Maybe<GooglePayConfiguration>;
  /**
   * Deprecated, this field will always be null.
   * @deprecated This field is included for supporting legacy clients.
   */
  ideal?: Maybe<IDealConfiguration>;
  /**
   * Deprecated, formerly configuration for Kount fraud tools, now this configuration lives under fraudProvider.
   * @deprecated This field is included for supporting legacy clients.
   */
  kount?: Maybe<KountConfiguration>;
  /** Configuration for Masterpass. */
  masterpass?: Maybe<MasterpassConfiguration>;
  /** The merchant ID. */
  merchantId?: Maybe<Scalars['String']>;
  /** Configuration for PayPal. */
  paypal?: Maybe<PayPalConfiguration>;
  /** Configuration for Samsung Pay. */
  samsungPay?: Maybe<SamsungPayConfiguration>;
  /** Configuration for UnionPay cards. */
  unionPay?: Maybe<UnionPayConfiguration>;
  /** Configuration for US bank account processing. */
  usBankAccount?: Maybe<UsBankAccountConfiguration>;
  /** Configuration for Pay with Venmo. */
  venmo?: Maybe<VenmoConfiguration>;
  /** Configuration for Visa Checkout. */
  visaCheckout?: Maybe<VisaCheckoutConfiguration>;
  /** A list of challenges that are required by the current merchant to process a given credit card. */
  challenges?: Maybe<Array<Challenge>>;
};

/** The client configuration environment being used. */
export enum ClientConfigurationEnvironment {
  DEVELOPMENT = 'DEVELOPMENT',
  PRODUCTION = 'PRODUCTION',
  QA = 'QA',
  SANDBOX = 'SANDBOX',
  TEST = 'TEST',
  development = 'development',
  production = 'production',
  qa = 'qa',
  sandbox = 'sandbox',
  test = 'test',
}

/** A value used by Braintree client SDKs to determine what operations are supported through this GraphQL API. */
export enum ClientFeature {
  TOKENIZE_CREDIT_CARDS = 'TOKENIZE_CREDIT_CARDS',
  tokenize_credit_cards = 'tokenize_credit_cards',
}

/** Input fields for creating a client token. */
export type ClientTokenInput = {
  /** The merchant account ID used to create the client token. Defaults to your default merchant account ID. */
  merchantAccountId?: Maybe<Scalars['ID']>;
  /** The ID of an existing customer. Including this will allow your customer to vault and manage their payment methods. */
  customerId?: Maybe<Scalars['ID']>;
};

/** Top-level input field for confirming micro-transfer values. */
export type ConfirmMicroTransferAmountsInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the verification from vaulting the bank account. */
  verificationId: Scalars['ID'];
  /**
   * The amounts, in cents, of two deposits made into the customer's bank account
   * after initiating a MICRO_TRANSFERS verification. These values should be
   * collected from your customer.
   */
  amountsInCents: Array<Scalars['Int']>;
};

/** Top-level output field from confirming micro-transfer amounts on bank account. */
export type ConfirmMicroTransferAmountsPayload = {
  __typename?: 'ConfirmMicroTransferAmountsPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The verification that was run on the payment method prior to vaulting. */
  verification?: Maybe<Verification>;
  /** The status of the micro-transfer amounts confirmation. */
  status?: Maybe<ConfirmMicroTransferAmountsStatus>;
};

/** The status of a micro-transfer amount confirmation. */
export enum ConfirmMicroTransferAmountsStatus {
  AMOUNTS_DO_NOT_MATCH = 'AMOUNTS_DO_NOT_MATCH',
  CONFIRMED = 'CONFIRMED',
  TOO_MANY_ATTEMPTS = 'TOO_MANY_ATTEMPTS',
}

/** Top-level input field for generating a client token. */
export type CreateClientTokenInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Input fields for creating a client token. */
  clientToken?: Maybe<ClientTokenInput>;
};

/** Top-level fields returned when creating a client token. */
export type CreateClientTokenPayload = {
  __typename?: 'CreateClientTokenPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A Base64 encoded string used to initialize client SDKs. */
  clientToken?: Maybe<Scalars['String']>;
};

/** Fields that are provided when creating a custom action payment context. */
export type CreateCustomActionsPaymentContextInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The action you wish to invoke when creating the payment context. */
  actionName: Scalars['String'];
  /** A list of fields used to create a PaymentContext during execution of a Custom Actions handler (Five (5) entries maximum). */
  customFields?: Maybe<Array<CustomActionsPaymentContextFieldInput>>;
};

/** Top-level field for creating a customer. */
export type CreateCustomerInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Input fields for creating a customer. */
  customer?: Maybe<CustomerInput>;
};

/** Top-level fields returned when creating a customer. */
export type CreateCustomerPayload = {
  __typename?: 'CreateCustomerPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * Information about the customer that was created. Can be used when vaulting
   * payment methods or creating transactions to associate those objects.
   */
  customer?: Maybe<Customer>;
};

/** Input fields for creating an in store location. */
export type CreateInStoreLocationInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Input fields to create an in-store Location. */
  location: InStoreLocationInput;
};

/** Top-level fields returned when creating an in-store location. */
export type CreateInStoreLocationPayload = {
  __typename?: 'CreateInStoreLocationPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The in-store location. */
  location?: Maybe<InStoreLocation>;
};

/** Input fields for applying for a merchant account. */
export type CreateMerchantAccountApplicationInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** General information about the business associated with the account. */
  business: BusinessInput;
  /** A minimum of one and a maximum of five owners can be submitted. One owner must be the authorized signer on the account. */
  owners: Array<OwnerInput>;
  /** Information about the business's relationship with American Express. */
  americanExpressRelationship?: Maybe<AmericanExpressRelationshipInput>;
  /** The bank account to be used for sales. */
  salesAccount: ApplicationBankAccountInput;
  /** Configuration for businesses registered with various discount programs (MVV, VPP, Loans). */
  discountProgramRegistration?: Maybe<DiscountProgramRegistrationInput>;
  /** Configuration for processing via ACH. */
  achConfiguration?: Maybe<ACHConfigurationInput>;
};

/** A code identifying the card brand. */
export enum CreditCardBrandCode {
  AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
  DINERS = 'DINERS',
  DISCOVER = 'DISCOVER',
  INTERNATIONAL_MAESTRO = 'INTERNATIONAL_MAESTRO',
  JCB = 'JCB',
  MASTERCARD = 'MASTERCARD',
  SOLO = 'SOLO',
  UK_MAESTRO = 'UK_MAESTRO',
  UNION_PAY = 'UNION_PAY',
  UNKNOWN = 'UNKNOWN',
  VISA = 'VISA',
  american_express = 'american_express',
  diners = 'diners',
  discover = 'discover',
  international_maestro = 'international_maestro',
  jcb = 'jcb',
  mastercard = 'mastercard',
  solo = 'solo',
  uk_maestro = 'uk_maestro',
  union_pay = 'union_pay',
  unknown = 'unknown',
  visa = 'visa',
}

/** Configuration for credit card tokenization. */
export type CreditCardConfiguration = {
  __typename?: 'CreditCardConfiguration';
  /** A list of card brands supported by the merchant for credit card processing. */
  supportedCardBrands?: Maybe<Array<CreditCardBrandCode>>;
  /** A list of challenges that are required by the merchant to process a given credit card. */
  challenges?: Maybe<Array<Challenge>>;
  /**
   * Whether or not the merchant supports 3D Secure.
   * @deprecated Use `threeDSecure` instead.
   */
  threeDSecureEnabled?: Maybe<Scalars['Boolean']>;
  /** Configuration for 3D Secure. */
  threeDSecure?: Maybe<ThreeDSecureConfiguration>;
  /** Whether or not fraud data collection is enabled for the merchant. */
  fraudDataCollectionEnabled?: Maybe<Scalars['Boolean']>;
};

/** Details about a credit card. */
export type CreditCardDetails = {
  __typename?: 'CreditCardDetails';
  /** A static code identifying the card brand. */
  brandCode?: Maybe<CreditCardBrandCode>;
  /**
   * The display name of the card brand, e.g. "Visa" or "American Express".
   * @deprecated Use `brandCode` instead.
   */
  brand?: Maybe<Scalars['String']>;
  /** The last four digits of the card number. */
  last4?: Maybe<Scalars['String']>;
  /**
   * The first 6 digits of the credit card number, known as the Bank Identification
   * Number. If this card originates from a third party such as a wallet provider,
   * this BIN may not be present and the PaymentMethodOriginDetails will contain a BIN instead.
   */
  bin?: Maybe<Scalars['String']>;
  /** Information about the card based on its BIN. */
  binData?: Maybe<BinRecord>;
  /** The month of the expiration date, formatted MM. */
  expirationMonth?: Maybe<Scalars['String']>;
  /** The year of the expiration date, formatted YYYY. */
  expirationYear?: Maybe<Scalars['String']>;
  /**
   * A URL to an image logo representing the card brand.
   * @deprecated This field is included for supporting legacy clients.
   */
  imageUrl?: Maybe<Scalars['String']>;
  /** The cardholder's name. */
  cardholderName?: Maybe<Scalars['String']>;
  /**
   * An identifier that uniquely represents any credit card number, for cards
   * stored in a merchant's vault. If the same credit card is added to a merchant's
   * vault multiple times, each will have the same identifier. This identifier will
   * only be returned if the field "origin" is null.
   */
  uniqueNumberIdentifier?: Maybe<Scalars['String']>;
  /**
   * Additional information if the credit card was provided from a third-party
   * origin, such as Apple Pay, Google Pay, or another digital wallet.
   */
  origin?: Maybe<PaymentMethodOrigin>;
  /**
   * Contains relevant data fields if the payment method has been authenticated
   * using 3D Secure. Only available on 3D Secure authenticated single-use payment
   * methods and 3D Secure paymentMethodSnapshots.
   */
  threeDSecure?: Maybe<ThreeDSecureAuthentication>;
};

/** Input fields for a credit card. */
export type CreditCardInput = {
  /** The 12-to-19-digit value that uniquely identifies this credit card, also known as the primary account number or PAN. */
  number?: Maybe<Scalars['String']>;
  /** The two- or four-digit year associated with a credit card, formatted `YYYY` or `YY`. */
  expirationYear?: Maybe<Scalars['String']>;
  /** The expiration month of a credit card, formatted `MM`. */
  expirationMonth?: Maybe<Scalars['String']>;
  /**
   * A three- or four-digit card verification value assigned to credit cards. The
   * CVV will never be stored, but it can be provided with one-time requests to
   * verify the card.
   */
  cvv?: Maybe<Scalars['String']>;
  /** When supplied, the cardholder name that will be tokenized with the contents of the fields. */
  cardholderName?: Maybe<Scalars['String']>;
  /** The billing address for the credit card. */
  billingAddress?: Maybe<AddressInput>;
};

/** Information specific to verifications of credit card payment methods. */
export type CreditCardVerificationDetails = {
  __typename?: 'CreditCardVerificationDetails';
  /** The amount used when performing the verification. May be 0. */
  amount?: Maybe<MonetaryAmount>;
};

/** Top-level fields returned from a Custom Actions payment context. */
export type CustomActionsPaymentContext = Node & {
  __typename?: 'CustomActionsPaymentContext';
  /** The identifier of the payment context. */
  id: Scalars['ID'];
  /** An ISO 8601 date string of when the payment context was created. */
  createdAt: Scalars['String'];
  /** An ISO 8601 date string of when the payment context was updated. */
  updatedAt: Scalars['String'];
  /** A list of fields stored on a PaymentContext during execution of a Custom Actions handler (Five (5) entries maximum). */
  customFields?: Maybe<Array<CustomActionsPaymentContextField>>;
};

/** Fields returned by the createPaymentContext custom actions event handler. */
export type CustomActionsPaymentContextField = {
  __typename?: 'CustomActionsPaymentContextField';
  /** An alphanumeric string used as a key to lookup a CustomField value (255 characters maximum). */
  name: Scalars['String'];
  /** An alphanumeric string used to store a CustomField value (5000 characters maximum). */
  value: Scalars['String'];
};

/** Fields that are provided when creating the payment context. */
export type CustomActionsPaymentContextFieldInput = {
  /** An alphanumeric string used as a key to lookup a CustomField value (255 characters maximum). */
  name: Scalars['String'];
  /** An alphanumeric string used to store a CustomField value (5000 characters maximum). */
  value: Scalars['String'];
};

/** Top-level fields returned from a created custom actions payment context. */
export type CustomActionsPaymentContextPayload = {
  __typename?: 'CustomActionsPaymentContextPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The payment context data. */
  customActionsPaymentContext?: Maybe<CustomActionsPaymentContext>;
};

/** Details about a custom actions payment method. */
export type CustomActionsPaymentMethodDetails = {
  __typename?: 'CustomActionsPaymentMethodDetails';
  /** The action to be invoked when using the payment method. */
  actionName?: Maybe<Scalars['String']>;
  /** Fields that your action requires. */
  fields?: Maybe<Array<CustomActionsPaymentMethodField>>;
};

/** Fields that are provided during tokenization and are presented to the invoked action to be consumed. */
export type CustomActionsPaymentMethodField = {
  __typename?: 'CustomActionsPaymentMethodField';
  /** The name of this field, e.g. "accountNumber". */
  name?: Maybe<Scalars['String']>;
  /** The value displayed in the Control Panel or API, e.g. "*****6789". */
  displayValue?: Maybe<Scalars['String']>;
};

/** Fields that are provided during tokenization and are presented to the invoked action to be consumed. */
export type CustomActionsPaymentMethodFieldInput = {
  /** The name of this field. e.g. "accountNumber". */
  name: Scalars['String'];
  /** The value of this field. e.g. "123456789". */
  value: Scalars['String'];
  /** The value displayed in the Control Panel or API. e.g. "*****6789". */
  displayValue: Scalars['String'];
};

/** Input fields for a Custom Actions payment method. */
export type CustomActionsPaymentMethodInput = {
  /** The action you wish to invoke when using the tokenized payment method. */
  actionName: Scalars['String'];
  /** Fields that your action requires. */
  fields: Array<CustomActionsPaymentMethodFieldInput>;
};

/** Information about a customer and their associated payment methods and transactions. */
export type Customer = Node & {
  __typename?: 'Customer';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Legacy unique identifier. */
  legacyId: Scalars['ID'];
  /** Company or business name associated with this customer. */
  company?: Maybe<Scalars['String']>;
  /** Date and time at which the customer was created. */
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** Collection of custom field/value pairs. Custom fields are [defined in the Control Panel](https://articles.braintreepayments.com/control-panel/custom-fields#store-and-pass-back-fields). */
  customFields?: Maybe<Array<CustomField>>;
  /** Customer's default payment method. */
  defaultPaymentMethod?: Maybe<PaymentMethod>;
  /** Email address for this customer. */
  email?: Maybe<Scalars['String']>;
  /** Customer's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** Customer's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The phone number for this customer. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Payment methods belonging to this customer. */
  paymentMethods?: Maybe<PaymentMethodConnection>;
  /**
   * Transactions associated with this customer. This includes transactions created
   * by charging a vaulted payment method that belongs or belonged to the customer,
   * or by passing a customer ID when charging a single-use payment method.
   */
  transactions?: Maybe<TransactionConnection>;
};

/** Information about a customer and their associated payment methods and transactions. */
export type CustomerpaymentMethodsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** Information about a customer and their associated payment methods and transactions. */
export type CustomertransactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** A value indicating when to perform further customer authentication. */
export enum CustomerAuthenticationIndicator {
  /** Indicates further authentication should be performed. */
  REQUIRED = 'REQUIRED',
  /** Indicates further authentication is optional. */
  OPTIONAL = 'OPTIONAL',
  /** Customer authentication indicator information is unavailable at this time. */
  UNAVAILABLE = 'UNAVAILABLE',
}

/**
 * The customer authentication regulation environment that applies to the
 * transaction, such as [PSD2](https://www.braintreepayments.com/blog/understanding-and-preparing-for-psd2-strong-customer-authentication/).
 */
export enum CustomerAuthenticationRegulationEnvironment {
  /**
   * EU Regulation [PSD2 Strong Customer Authentication](https://www.braintreepayments.com/blog/understanding-and-preparing-for-psd2-strong-customer-authentication/)
   * applies to this transaction.
   */
  PSDTWO = 'PSDTWO',
  /** Reserve Bank of India regulations apply to this transactions. */
  RBI = 'RBI',
  /** Customer authentication regulation environment information is unavailable for this transaction at this time. */
  UNAVAILABLE = 'UNAVAILABLE',
  /** No customer authentication regulations apply to this transaction. */
  UNREGULATED = 'UNREGULATED',
}

/** A paginated list of customers. */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /** A list of customers. */
  edges?: Maybe<Array<Maybe<CustomerConnectionEdge>>>;
  /** Information about the page of customers contained in `edges`. */
  pageInfo: PageInfo;
};

/** A customer within a CustomerConnection. */
export type CustomerConnectionEdge = {
  __typename?: 'CustomerConnectionEdge';
  /** This customer's location within the CustomerConnection. Used for requesting additional pages. */
  cursor?: Maybe<Scalars['String']>;
  /** The customer. */
  node?: Maybe<Customer>;
};

/**
 * Input fields for creating or updating a customer. On update, omitted fields will
 * not be updated. Passing a null value will assign null to that field.
 */
export type CustomerInput = {
  /** Company or business name associated with the customer. */
  company?: Maybe<Scalars['String']>;
  /**
   * Collection of custom field/value pairs. You must [set up each custom field in the Control Panel](https://articles.braintreepayments.com/control-panel/custom-fields#creating-a-custom-field)
   * prior to passing it with a request.
   */
  customFields?: Maybe<Array<CustomFieldInput>>;
  /** Email address for the customer. */
  email?: Maybe<Scalars['String']>;
  /** Customer's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** Customer's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The customer's phone number. */
  phoneNumber?: Maybe<Scalars['String']>;
};

/** Input fields for searching for customers. */
export type CustomerSearchInput = {
  /** Find customers with an id or ids. */
  id?: Maybe<SearchValueInput>;
  /** Find customers with a given company or business name. */
  company?: Maybe<SearchTextInput>;
  /** Find customers with a given created at time. */
  createdAt?: Maybe<SearchTimestampInput>;
  /** Find customers with a given email address. */
  email?: Maybe<SearchTextInput>;
  /** Find customers with a given first name. */
  firstName?: Maybe<SearchTextInput>;
  /** Find customers with a given last name. */
  lastName?: Maybe<SearchTextInput>;
  /** Find customers with a given phone number. */
  phoneNumber?: Maybe<SearchTextInput>;
};

/** A merchant-defined custom field to store additional information. */
export type CustomField = {
  __typename?: 'CustomField';
  /** The name of the custom field. */
  name?: Maybe<Scalars['String']>;
  /** The value of the custom field. */
  value?: Maybe<Scalars['String']>;
};

/**
 * Custom field name/value pairs. Maximum 255 characters. You must [set up each
 * custom field in the Control Panel](https://articles.braintreepayments.com/control-panel/custom-fields#creating-a-custom-field)
 * prior to passing it with a request.
 */
export type CustomFieldInput = {
  /** Name of the custom field as defined in the Control Panel. */
  name: Scalars['CustomFieldName'];
  /** Value for the named custom field. A null value will ignore (on create) or remove (on update) the custom field. */
  value?: Maybe<Scalars['String']>;
};

/** Top-level input fields for deleting a customer. */
export type DeleteCustomerInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the customer to be deleted. */
  customerId: Scalars['ID'];
};

/** Top-level output field from deleting a customer. */
export type DeleteCustomerPayload = {
  __typename?: 'DeleteCustomerPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Top-level input fields for deleting a payment method referenced by a single-use token. */
export type DeletePaymentMethodFromSingleUseTokenInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A single-use token ID referencing a payment method. */
  singleUseTokenId: Scalars['ID'];
};

/** Top-level output field from deleting a payment method referenced by a single-use token. */
export type DeletePaymentMethodFromSingleUseTokenPayload = {
  __typename?: 'DeletePaymentMethodFromSingleUseTokenPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Top-level input fields for deleting a multi-use payment method from the vault. */
export type DeletePaymentMethodFromVaultInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the multi-use payment method to be deleted. */
  paymentMethodId: Scalars['ID'];
};

/** Top-level output field from deleting a multi-use payment method. */
export type DeletePaymentMethodFromVaultPayload = {
  __typename?: 'DeletePaymentMethodFromVaultPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/**
 * Disbursement details contain information about how and when the transaction was
 * disbursed, including timing and currency information. This field is only
 * available if you have an eligible merchant account.
 */
export type DisbursementDetails = {
  __typename?: 'DisbursementDetails';
  /** The date that the funds associated with this transaction were disbursed. */
  date?: Maybe<Scalars['Date']>;
  /**
   * Amount of money disbursed in the settlement currency, which may be different
   * than the transaction's [presentment
   * currency](https://articles.braintreepayments.com/get-started/currencies).
   */
  amount?: Maybe<MonetaryAmount>;
  /**
   * The exchange rate from the presentment currency to the settlement currency. If
   * the currencies are the same, this will be 1.
   */
  exchangeRate?: Maybe<Scalars['String']>;
  /** Indicates whether funds have been withheld from a disbursement to the merchant's account. */
  fundsHeld?: Maybe<Scalars['Boolean']>;
};

/** Information about the business's particpation in various discount programs. */
export type DiscountProgramRegistrationInput = {
  /** The business's MVV (Merchant Verification Value) registration type. */
  registrationType: MVVRegistrationType;
  /** The business's existing MVV (Merchant Verification Value) registration number, if they have one. */
  registrationIdentifier?: Maybe<Scalars['String']>;
  /** The number of customers the business has. Required if `registrationType` is `UTIL_RATE` or `LOAN_VPP`. */
  numberOfCustomers?: Maybe<Scalars['Int']>;
  /** The means by which customers pay their bills. Required if  `registrationType` is `UTIL_RATE` or `LOAN_VPP`. */
  acceptanceChannel?: Maybe<Array<Maybe<MVVAcceptanceChannel>>>;
  /** The business's MVV utility type. Required if `registrationType` is `UTIL_RATE`. */
  utilityType?: Maybe<Array<Maybe<MVVUtilityType>>>;
  /** Does the business accept payday loans? Required if `registrationType` is `LOAN_VPP`. */
  loanPayday?: Maybe<Scalars['Boolean']>;
  /** Does the business charge fees for debt repayment? Required if `registrationType` is `LOAN_VPP`. */
  loanFee?: Maybe<Scalars['Boolean']>;
};

/**
 * [A case raised by a customer to either request information about or to challenge a charge](https://articles.braintreepayments.com/risk-and-security/chargebacks-retrievals/overview).
 * These are initiated via a customer's payment provider, such as their bank, and
 * require a merchant to provide evidence or further information.
 */
export type Dispute = Node & {
  __typename?: 'Dispute';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Legacy unique identifier. */
  legacyId: Scalars['ID'];
  /**
   * The amount of money from the original charge that the customer is disputing.
   * Can be 0. This amount is debited from a merchant's account and held in a
   * third-party account until the dispute is resolved, at which time it is sent to
   * either the merchant or customer.
   */
  amountDisputed?: Maybe<MonetaryAmount>;
  /** If an amount was disputed, the amount of money awarded back to the merchant if the dispute was reversed. */
  amountWon?: Maybe<MonetaryAmount>;
  /** The case number for the dispute. */
  caseNumber?: Maybe<Scalars['String']>;
  /** Date and time at which the dispute was created. */
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** Date the dispute was received by the merchant. */
  receivedDate?: Maybe<Scalars['Date']>;
  /** The transaction reference number for the dispute. */
  referenceNumber?: Maybe<Scalars['String']>;
  /** The deadline for the merchant to submit a response to the dispute. */
  responseDeadline?: Maybe<Scalars['Timestamp']>;
  /** The reply by date for the merchant to submit a response to the dispute. */
  replyByDate?: Maybe<Scalars['Date']>;
  /** The type of dispute. */
  type?: Maybe<DisputeType>;
  /** Evidence records submitted by the merchant for the dispute. */
  evidence?: Maybe<Array<DisputeEvidence>>;
  /** If this dispute is a follow-up to a previous chargeback or retrieval, the original dispute. */
  originalDispute?: Maybe<Dispute>;
  /** Additional information from the payment processor. */
  processorResponse?: Maybe<DisputeProcessorResponse>;
  /** The status of the dispute. */
  status?: Maybe<DisputeStatus>;
  /** A log of history events containing status changes by date for this dispute. */
  statusHistory?: Maybe<Array<DisputeStatusEvent>>;
  /** The disputed transaction which the customer is either requesting further information on or challenging. */
  transaction?: Maybe<Transaction>;
};

/** A paginated list of disputes. */
export type DisputeConnection = {
  __typename?: 'DisputeConnection';
  /** A list of disputes. */
  edges?: Maybe<Array<Maybe<DisputeConnectionEdge>>>;
  /** Information about the page of disputes contained in `edges`. */
  pageInfo: PageInfo;
};

/** A dispute within a DisputeConnection. */
export type DisputeConnectionEdge = {
  __typename?: 'DisputeConnectionEdge';
  /** This dispute's location within the DisputeConnection. Used for requesting additional pages. */
  cursor?: Maybe<Scalars['String']>;
  /** The dispute. */
  node?: Maybe<Dispute>;
};

/** Evidence provided by a merchant to respond to a dispute. */
export type DisputeEvidence = {
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Legacy unique identifier. */
  legacyId: Scalars['ID'];
  /** Date and time when the evidence was created with Braintree. */
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** Date and time when the evidence was sent to the processor. */
  sentToProcessorAt?: Maybe<Scalars['Timestamp']>;
  /** The evidence category. */
  category?: Maybe<Scalars['String']>;
};

/** Images, files, or other evidence supporting a dispute case. */
export type DisputeFileEvidence = DisputeEvidence & {
  __typename?: 'DisputeFileEvidence';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Legacy unique identifier. */
  legacyId: Scalars['ID'];
  /** Date and time at which the evidence was created with Braintree. */
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** Date and time at which the evidence was sent to the processor. */
  sentToProcessorAt?: Maybe<Scalars['Timestamp']>;
  /** A URL where you can retrieve the dispute evidence. */
  url?: Maybe<Scalars['String']>;
  /** The evidence category. */
  category?: Maybe<Scalars['String']>;
};

/** Information about the dispute provided by the processor. */
export type DisputeProcessorResponse = {
  __typename?: 'DisputeProcessorResponse';
  /** Additional comments forwarded by the processor. */
  processorComments?: Maybe<Scalars['String']>;
  /** The reason the dispute was created. */
  reason?: Maybe<DisputeReason>;
  /** The reason code provided by the processor. */
  reasonCode?: Maybe<Scalars['String']>;
  /** The reason code description based on the `reasonCode`. */
  reasonDescription?: Maybe<Scalars['String']>;
  /** Date the dispute was received by the merchant. */
  receivedDate?: Maybe<Scalars['Date']>;
  /** The string value representing the reference number provided by the processor (if any). */
  referenceNumber?: Maybe<Scalars['String']>;
};

/** The reason a customer opened a chargeback, pre-arbitration, or retrieval. */
export enum DisputeReason {
  CANCELLED_RECURRING_TRANSACTION = 'CANCELLED_RECURRING_TRANSACTION',
  CREDIT_NOT_PROCESSED = 'CREDIT_NOT_PROCESSED',
  DUPLICATE = 'DUPLICATE',
  FRAUD = 'FRAUD',
  GENERAL = 'GENERAL',
  INVALID_ACCOUNT = 'INVALID_ACCOUNT',
  NOT_RECOGNIZED = 'NOT_RECOGNIZED',
  PRODUCT_NOT_RECEIVED = 'PRODUCT_NOT_RECEIVED',
  PRODUCT_UNSATISFACTORY = 'PRODUCT_UNSATISFACTORY',
  RETRIEVAL = 'RETRIEVAL',
  TRANSACTION_AMOUNT_DIFFERS = 'TRANSACTION_AMOUNT_DIFFERS',
}

/** Input fields for searching for Disputes. */
export type DisputeSearchInput = {
  /** Find disputes with an id or ids. */
  id?: Maybe<SearchValueInput>;
  /** Find disputes with a given status. */
  status?: Maybe<SearchDisputeStatusInput>;
  /** Find disputes with a given type. */
  type?: Maybe<SearchDisputeTypeInput>;
  /** Find disputes with a given reason description. */
  reason?: Maybe<SearchDisputeReasonInput>;
  /** Find disputes with a given processor's caseNumber. */
  caseNumber?: Maybe<SearchTextInput>;
  /** Find disputes with a given transaction referenceNumber. */
  referenceNumber?: Maybe<SearchTextInput>;
  /** Find disputes for a given amount or currency. */
  amountDisputed?: Maybe<MonetaryAmountSearchInput>;
  /** Find disputes by the amount won. */
  amountWon?: Maybe<MonetaryAmountSearchInput>;
  /** Find disputes by the date received. */
  receivedDate?: Maybe<SearchDateInput>;
  /** Find disputes by the reply by date. */
  replyByDate?: Maybe<SearchDateInput>;
  /** Find disputes by the date a status change history event took effect. */
  effectiveDate?: Maybe<SearchDateInput>;
  /** Find disputes based on a set of transaction criteria. */
  transaction?: Maybe<DisputeTransactionSearchInput>;
};

/** The status of the dispute. */
export enum DisputeStatus {
  ACCEPTED = 'ACCEPTED',
  DISPUTED = 'DISPUTED',
  EXPIRED = 'EXPIRED',
  LOST = 'LOST',
  OPEN = 'OPEN',
  WON = 'WON',
}

/** A record of a status the dispute has passed through. */
export type DisputeStatusEvent = {
  __typename?: 'DisputeStatusEvent';
  /** The date any funds associated with this event were disbursed. */
  disbursementDate?: Maybe<Scalars['Date']>;
  /** The status of the dispute. */
  status?: Maybe<DisputeStatus>;
  /** Date and time when the status event occurred. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The date the status event took effect. */
  effectiveDate?: Maybe<Scalars['Date']>;
};

/** Text evidence supporting a dispute case. */
export type DisputeTextEvidence = DisputeEvidence & {
  __typename?: 'DisputeTextEvidence';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Legacy unique identifier. */
  legacyId: Scalars['ID'];
  /** Date and time at which the evidence was created with Braintree. */
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** Date and time at which the evidence was sent to the processor. */
  sentToProcessorAt?: Maybe<Scalars['Timestamp']>;
  /** The body for text evidence. */
  comment?: Maybe<Scalars['String']>;
  /** The evidence category. */
  category?: Maybe<Scalars['String']>;
};

/** Transaction input fields for searching for disputes. */
export type DisputeTransactionSearchInput = {
  /** Find disputes for a transaction id or ids. */
  transactionId?: Maybe<SearchValueInput>;
  /** Find disputes for a customer id or ids. */
  customerId?: Maybe<SearchValueInput>;
  /** Find disputes with a given transaction source. */
  transactionSource?: Maybe<SearchTransactionSourceInput>;
  /** Find disputes on transactions charging payment methods of the given type. */
  paymentMethodSnapshotType?: Maybe<SearchPaymentMethodSnapshotTypeInput>;
  /** Find disputes on transactions created by a third party via the Grant API using a given OAuth application client ID. */
  facilitatorOAuthApplicationClientId?: Maybe<SearchValueInput>;
  /** Find disputes by the transaction's disbursement date. */
  disbursementDate?: Maybe<SearchDateInput>;
  /** Find disputes on transactions associated with a merchant account ID or IDs. */
  merchantAccountId?: Maybe<SearchValueInput>;
};

/** Type of dispute. */
export enum DisputeType {
  CHARGEBACK = 'CHARGEBACK',
  /**
   * A [second challenge to a charge](https://articles.braintreepayments.com/risk-and-security/chargebacks-retrievals/overview#pre-arbitrations),
   * in the case that you have won an initial chargeback.
   */
  PRE_ARBITRATION = 'PRE_ARBITRATION',
  RETRIEVAL = 'RETRIEVAL',
}

/**
 * Fields capturing information about a third party that provided payment
 * information for this transaction via the Grant API, Shared Vault, or Google Pay.
 */
export type FacilitatorDetails = {
  __typename?: 'FacilitatorDetails';
  /** The OAuth application that owns the payment information used to create the transaction. */
  oauthApplication?: Maybe<OAuthApplication>;
};

/** Accompanying information for a transaction that failed because it could not be successfully sent to the processor. */
export type FailedEvent = PaymentStatusEvent & {
  __typename?: 'FailedEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the transaction failed. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The amount of the transaction for this status event. */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Fields describing the payment processor response, or an explanation for the lack thereof. */
  processorResponse?: Maybe<TransactionAuthorizationProcessorResponse>;
  /** Risk decision for this transaction. */
  riskDecision?: Maybe<RiskDecision>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
};

/** Configuration for fraud protection provider. */
export type FraudProviderConfiguration = {
  __typename?: 'FraudProviderConfiguration';
  /** The merchant ID used by the fraud protection provider to identify the fraud data collection request. */
  merchantId?: Maybe<Scalars['String']>;
  /** The name of the fraud provider. */
  name?: Maybe<Scalars['String']>;
};

/** The third-party provider used to generate the risk decision. */
export enum FraudServiceProvider {
  FRAUD_PROTECTION = 'FRAUD_PROTECTION',
  KOUNT = 'KOUNT',
}

/** Accompanying information for a gateway rejected transaction. */
export type GatewayRejectedEvent = PaymentStatusEvent & {
  __typename?: 'GatewayRejectedEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the transaction was rejected by the gateway. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The amount of the transaction for this status event. */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** The reason the transaction was rejected, based on your gateway settings. */
  gatewayRejectionReason?: Maybe<GatewayRejectionReason>;
  /**
   * Fields describing the payment processor response. Depending on your gateway
   * settings, the AVS and CVV responses may be the reason for the rejection.
   */
  processorResponse?: Maybe<TransactionAuthorizationProcessorResponse>;
  /** Risk decision for this transaction. If the gatewayRejectionReason is fraud, this may be the reason for the rejection. */
  riskDecision?: Maybe<RiskDecision>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
  /** The original transaction if the gateway rejection reason was `DUPLICATE`. */
  duplicateOf?: Maybe<Transaction>;
};

/** Possible reasons why a transaction was rejected by the gateway. */
export enum GatewayRejectionReason {
  APPLICATION_INCOMPLETE = 'APPLICATION_INCOMPLETE',
  AVS = 'AVS',
  AVS_AND_CVV = 'AVS_AND_CVV',
  CVV = 'CVV',
  DUPLICATE = 'DUPLICATE',
  FRAUD = 'FRAUD',
  THREE_D_SECURE = 'THREE_D_SECURE',
  TOKEN_ISSUANCE = 'TOKEN_ISSUANCE',
}

/** Input fields for generating a pairing code to pair an in store reader. */
export type GenerateInStoreReaderPairingCodeInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The reader device ID. */
  deviceId: Scalars['String'];
};

/** Top-level fields returned when generating a pairing code for an in-store reader. */
export type GenerateInStoreReaderPairingCodePayload = {
  __typename?: 'GenerateInStoreReaderPairingCodePayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reader specific identification code. */
  deviceCode?: Maybe<Scalars['String']>;
  /** Generated code used to pair this reader with a merchant. */
  userCode?: Maybe<Scalars['String']>;
  /** Redirect URI used for verification of the reader. */
  verificationUri?: Maybe<Scalars['String']>;
  /** Time to expiration of the generated user and device codes. */
  expiresIn?: Maybe<Scalars['Int']>;
};

/** Configuration for Google Pay on Android and the web. */
export type GooglePayConfiguration = {
  __typename?: 'GooglePayConfiguration';
  /** A string used to identify the merchant to the customer. */
  displayName?: Maybe<Scalars['String']>;
  /** The environment being used for Google Pay. */
  environment?: Maybe<GooglePayEnvironment>;
  /**
   * Authorization to use when tokenizing a Google Pay payment method.
   * @deprecated This field is included for supporting legacy clients.
   */
  googleAuthorization?: Maybe<Scalars['String']>;
  /** A string used to identify the merchant's PayPal account when generating a PayPal Closed Loop Token. */
  paypalClientId?: Maybe<Scalars['String']>;
  /** A list of card brands supported by the merchant for Google Pay. */
  supportedCardBrands?: Maybe<Array<CreditCardBrandCode>>;
};

/** The environment being used for Google Pay. */
export enum GooglePayEnvironment {
  PRODUCTION = 'PRODUCTION',
  SANDBOX = 'SANDBOX',
  production = 'production',
  sandbox = 'sandbox',
}

/** Additional information about the payment method specific to Google Pay. */
export type GooglePayOriginDetails = {
  __typename?: 'GooglePayOriginDetails';
  /** A reference ID for the Google transaction. */
  googleTransactionId?: Maybe<Scalars['String']>;
  /**
   * The first 6 digits of the credit card, known as the Bank Identification
   * Number. This BIN may differ from the BIN of the customer's actual card.
   */
  bin?: Maybe<Scalars['String']>;
};

/** Configuration for iDEAL. */
export type IDealConfiguration = {
  __typename?: 'IDealConfiguration';
  /** The route ID used to process an iDEAL payment. */
  routeId?: Maybe<Scalars['String']>;
  /** A URL used to redirect the customer to the bank's web page. */
  assetsUrl?: Maybe<Scalars['String']>;
};

/** An in-store location. */
export type InStoreLocation = {
  __typename?: 'InStoreLocation';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Name of the in-store location. */
  name?: Maybe<Scalars['String']>;
  /** The address of the in-store location. */
  address?: Maybe<InStoreLocationAddress>;
};

/** Input fields for an in-store location address. */
export type InStoreLocationAddress = {
  __typename?: 'InStoreLocationAddress';
  /** The street address. */
  streetAddress?: Maybe<Scalars['String']>;
  /** Extended address information, such as an apartment or suite number. */
  extendedAddress?: Maybe<Scalars['String']>;
  /** Locality/city. */
  locality?: Maybe<Scalars['String']>;
  /** State or province. */
  region?: Maybe<Scalars['String']>;
  /** Postal code in any country's format, otherwise known as CAP, CEP, Eircode, NPA, PIN, PLZ, or ZIP code. */
  postalCode?: Maybe<Scalars['String']>;
  /** Country code for the address in ISO 3166-1 alpha-3 format. */
  countryCode?: Maybe<Scalars['CountryCodeAlpha3']>;
};

/** Input fields for an in-store Location Address. */
export type InStoreLocationAddressInput = {
  /** The street address. */
  streetAddress: Scalars['String'];
  /** Extended address information, such as an apartment or suite number. */
  extendedAddress?: Maybe<Scalars['String']>;
  /** Locality/city. */
  locality: Scalars['String'];
  /** State or province. */
  region: Scalars['String'];
  /** Postal code in any country's format, otherwise known as CAP, CEP, Eircode, NPA, PIN, PLZ, or ZIP code. */
  postalCode: Scalars['String'];
  /** Country code for the address in ISO 3166-1 alpha-3 format. */
  countryCode: Scalars['CountryCodeAlpha3'];
};

/** Fields required for an instore location. */
export type InStoreLocationInput = {
  /** Name of the Location. */
  name: Scalars['String'];
  /** The address of the in-store Location. */
  address: InStoreLocationAddressInput;
};

/** An in-store payment card reader. */
export type InStoreReader = {
  __typename?: 'InStoreReader';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Name given to the reader. */
  name?: Maybe<Scalars['String']>;
  /** The unique serial number for the reader. */
  serialNumber?: Maybe<Scalars['String']>;
  /** Vendor-specific information about the reader. */
  vendor?: Maybe<InStoreReaderVendor>;
  /** The in-store location the reader is attached to. */
  location?: Maybe<InStoreLocation>;
  /** Current status of the reader. */
  status?: Maybe<ReaderStatus>;
};

/** Top-level fields returned for an in-store reader. */
export type InStoreReaderPayload = {
  __typename?: 'InStoreReaderPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The reader. */
  reader?: Maybe<InStoreReader>;
};

/** Fields that are reader specific for pairing a reader. */
export type InStoreReaderSetupInput = {
  /** In-Store Location to attach Reader to. */
  locationId: Scalars['ID'];
  /** Name given to the Reader. */
  name: Scalars['String'];
  /** Merchant Account to use to process payments. */
  merchantAccountId: Scalars['ID'];
};

/** A union of all possible in-store reader vendors. */
export type InStoreReaderVendor = VerifoneVendor;

/** Configuration for Kount fraud tools. */
export type KountConfiguration = {
  __typename?: 'KountConfiguration';
  /** The Kount merchant ID used to identify the fraud data collection request. */
  merchantId?: Maybe<Scalars['String']>;
};

/** The type of object the legacy ID represents when converting it to a global ID. */
export enum LegacyIdType {
  CUSTOMER = 'CUSTOMER',
  DISPUTE = 'DISPUTE',
  PAYMENT_METHOD = 'PAYMENT_METHOD',
  REFUND = 'REFUND',
  TRANSACTION = 'TRANSACTION',
  US_BANK_ACCOUNT_VERIFICATION = 'US_BANK_ACCOUNT_VERIFICATION',
  VERIFICATION = 'VERIFICATION',
}

/** Local payment specific details on a transaction. */
export type LocalPaymentDetails = {
  __typename?: 'LocalPaymentDetails';
  /**
   * Additional information about the local payment method provided from a
   * third-party origin, such as PayPal or another regional payment method provider.
   */
  origin?: Maybe<PaymentMethodOrigin>;
  /** Regional payment method selected by the customer. */
  type?: Maybe<LocalPaymentMethodType>;
  /** Description of the payment method that can be displayed to customers. */
  displayName?: Maybe<Scalars['String']>;
};

/** A value identifying the type of regional payment method. */
export enum LocalPaymentMethodType {
  ALIPAY = 'ALIPAY',
  BANCONTACT = 'BANCONTACT',
  BLIK = 'BLIK',
  EPS = 'EPS',
  GIROPAY = 'GIROPAY',
  IDEAL = 'IDEAL',
  MYBANK = 'MYBANK',
  P24 = 'P24',
  PAYU = 'PAYU',
  SEPA = 'SEPA',
  SOFORT = 'SOFORT',
  SWISH = 'SWISH',
  TRUSTLY = 'TRUSTLY',
  VERKKOPANKKI = 'VERKKOPANKKI',
  VIPPS = 'VIPPS',
  WECHAT_PAY = 'WECHAT_PAY',
}

/** Configuration for Masterpass. */
export type MasterpassConfiguration = {
  __typename?: 'MasterpassConfiguration';
  /** The Masterpass merchant checkout ID used to identify the merchant in Masterpass requests. */
  merchantCheckoutId?: Maybe<Scalars['String']>;
  /** A list of card brands supported by the merchant for Masterpass. */
  supportedCardBrands?: Maybe<Array<CreditCardBrandCode>>;
};

/** Additional information about the payment method specific to Masterpass. */
export type MasterpassOriginDetails = {
  __typename?: 'MasterpassOriginDetails';
  /**
   * The first 6 digits of the credit card, known as the Bank Identification
   * Number. This BIN may differ from the BIN of the customer's actual card.
   */
  bin?: Maybe<Scalars['String']>;
};

/** Details about a merchant and its current settings. */
export type Merchant = {
  __typename?: 'Merchant';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Current status. */
  status?: Maybe<Scalars['String']>;
  /** Company name. */
  companyName?: Maybe<Scalars['String']>;
  /** The merchant's main website. */
  website?: Maybe<Scalars['String']>;
  /** The timezone that the merchant operates in. */
  timezone?: Maybe<Scalars['String']>;
};

/** A record of a merchant account application. */
export type MerchantAccountApplication = {
  __typename?: 'MerchantAccountApplication';
  /** A unique ID for the account application. Can be used to query the status of the onboarding request in the future. */
  id: Scalars['ID'];
  /** The status of the application. */
  status?: Maybe<ApplicationStatus>;
};

/** Top-level fields returned when submitting an application for a merchant account. */
export type MerchantAccountApplicationPayload = {
  __typename?: 'MerchantAccountApplicationPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Merchant Account Application. */
  merchantAccountApplication?: Maybe<MerchantAccountApplication>;
};

/** A monetary amount with currency. */
export type MonetaryAmount = {
  __typename?: 'MonetaryAmount';
  /** The amount of money, either a whole number or a number with up to 3 decimal places. */
  value?: Maybe<Scalars['Amount']>;
  /** The ISO code for the money's currency. */
  currencyIsoCode?: Maybe<Scalars['CurrencyCodeAlpha']>;
};

/** Input fields for searching for a transaction or refund amount. */
export type MonetaryAmountSearchInput = {
  /** Find transactions for a given amount. */
  value?: Maybe<SearchRangeInput>;
  /** Find transactions with a given currency. */
  currencyIsoCode?: Maybe<SearchTextInput>;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Authorize an eligible payment method and return a payload that includes details of the resulting transaction. */
  authorizePaymentMethod?: Maybe<TransactionPayload>;
  /** Authorize an eligible PayPal account and return a payload that includes details of the resulting transaction. */
  authorizePayPalAccount?: Maybe<TransactionPayload>;
  /** Authorize an eligible Venmo account and return a payload that includes details of the resulting transaction. */
  authorizeVenmoAccount?: Maybe<TransactionPayload>;
  /** Capture an authorized transaction and return a payload that includes details of the transaction. */
  captureTransaction?: Maybe<TransactionPayload>;
  /** Charge any payment method and return a payload that includes details of the resulting transaction. */
  chargePaymentMethod?: Maybe<TransactionPayload>;
  /**
   * Charge a US bank account and return a payload that includes details of the
   * resulting transaction. See
   * https://developers.braintreepayments.com/guides/ach/configuration for
   * information on eligibility and setup.
   */
  chargeUsBankAccount?: Maybe<TransactionPayload>;
  /** Charge a PayPal account and return a payload that includes details of the resulting transaction. */
  chargePayPalAccount?: Maybe<TransactionPayload>;
  /**
   * Charge a Venmo account and return a payload that includes details of the
   * resulting transaction. See
   * https://articles.braintreepayments.com/guides/payment-methods/venmo for
   * information on eligibility and setup.
   */
  chargeVenmoAccount?: Maybe<TransactionPayload>;
  /**
   * Vault payment information from a single-use payment method and return a
   * payload that includes a new multi-use payment method. When vaulting a credit
   * card, this mutation will also verify that card by default.
   */
  vaultPaymentMethod?: Maybe<VaultPaymentMethodPayload>;
  /**
   * Vault payment information from a single-use US bank account payment method and
   * return a payload that includes a new multi-use payment method.
   */
  vaultUsBankAccount?: Maybe<VaultPaymentMethodPayload>;
  /** Refund a settled transaction and return a payload that includes details of the refund. */
  refundTransaction?: Maybe<RefundTransactionPayload>;
  /** Reverse a transaction and return a payload that includes either the voided transaction or a refund. */
  reverseTransaction?: Maybe<ReverseTransactionPayload>;
  /** Reverse a refund and return a payload that includes voided refund. */
  reverseRefund?: Maybe<RefundTransactionPayload>;
  /** Update custom fields on a transaction. Custom fields are [defined in the Control Panel](https://articles.braintreepayments.com/control-panel/custom-fields#store-and-pass-back-fields). */
  updateTransactionCustomFields?: Maybe<UpdateTransactionCustomFieldsPayload>;
  /** Run a verification on a multi-use payment method. */
  verifyPaymentMethod?: Maybe<VerifyPaymentMethodPayload>;
  /** Run a verification on a multi-use US bank account payment method. */
  verifyUsBankAccount?: Maybe<VerifyPaymentMethodPayload>;
  /**
   * Confirm micro-transfer amounts initiated by vaultUsBankAccount or
   * verifyUsBankAccount, completing the verification process for a US Bank Account
   * via micro-transfer.
   */
  confirmMicroTransferAmounts?: Maybe<ConfirmMicroTransferAmountsPayload>;
  /** Delete a multi-use payment method from the vault. */
  deletePaymentMethodFromVault?: Maybe<DeletePaymentMethodFromVaultPayload>;
  /** Create a client token that can be used to initialize a client in order to tokenize payment information. */
  createClientToken?: Maybe<CreateClientTokenPayload>;
  /**
   * Partially capture funds from a transaction that was successfully authorized
   * and return a payload that includes a new transaction with information about
   * the capture. This is only available for PayPal transactions and certain use
   * cases. For more information about if this mutation fits your use case [see our docs](https://articles.braintreepayments.com/guides/payment-methods/paypal/processing#multiple-partial-settlements).
   */
  partialCaptureTransaction?: Maybe<PartialCaptureTransactionPayload>;
  /** Tokenize Custom Actions fields and return a payload that includes a single-use payment method. */
  tokenizeCustomActionsPaymentMethod?: Maybe<TokenizeCustomActionsPaymentMethodPayload>;
  /** Tokenize credit card fields and return a payload that includes a single-use payment method. */
  tokenizeCreditCard?: Maybe<TokenizeCreditCardPayload>;
  /** Tokenize a credit card's CVV and return a payload that includes a single-use payment method. */
  tokenizeCvv?: Maybe<TokenizeCvvPayload>;
  /** Tokenize a network tokenized payment instrument and return a payload that includes a single-use payment method. */
  tokenizeNetworkToken?: Maybe<TokenizeNetworkTokenPayload>;
  /** Tokenize Samsung Pay card fields and return a payload that includes a single-use payment method. */
  tokenizeSamsungPayCard?: Maybe<TokenizeSamsungPayCardPayload>;
  /** Tokenize US bank account fields and return a payload that includes a single-use payment method. */
  tokenizeUsBankAccount?: Maybe<TokenizeUsBankAccountPayload>;
  /** Tokenize US bank login fields and return a payload that includes a single-use payment method. */
  tokenizeUsBankLogin?: Maybe<TokenizeUsBankAccountPayload>;
  /** Create a customer for storing individual customer information and/or grouping transactions and multi-use payment methods. */
  createCustomer?: Maybe<CreateCustomerPayload>;
  /** Update a customer's information. */
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  /**
   * Delete a customer, breaking association between any of the customer's
   * transactions. Will not delete if the customer has existing payment methods.
   */
  deleteCustomer?: Maybe<DeleteCustomerPayload>;
  /**
   * Delete a payment method referenced by a single-use token.
   * @deprecated Use `deletePaymentMethodFromVault` instead.
   */
  deletePaymentMethodFromSingleUseToken?: Maybe<DeletePaymentMethodFromSingleUseTokenPayload>;
  /**
   * Attempt to perform 3D Secure Authentication on credit card payment method.
   * This may consume the payment method and return a new single-use payment method.
   */
  performThreeDSecureLookup?: Maybe<PerformThreeDSecureLookupPayload>;
  /**
   * Accepts a dispute and returns a payload that includes the dispute that was
   * accepted. Only disputes with a status of OPEN can be accepted.
   */
  acceptDispute?: Maybe<AcceptDisputePayload>;
  /**
   * Vault an existing PayPal Billing Agreement that was not created through
   * Braintree. Only use this mutation if you need to import PayPal Billing
   * Agreements from an existing PayPal integration into your Braintree account.
   */
  vaultPayPalBillingAgreement?: Maybe<VaultPayPalBillingAgreementPayload>;
  /** Force a transaction to settle in the sandbox environment. Generates an error elsewhere. */
  sandboxSettleTransaction?: Maybe<TransactionPayload>;
  /** Creates a new In-Store Location to associate Readers. */
  createInStoreLocation?: Maybe<CreateInStoreLocationPayload>;
  /** Pairs a Reader to an account and In-Store Location. */
  pairInStoreReader?: Maybe<InStoreReaderPayload>;
  /** Creates a new InStoreReader. */
  generateInStoreReaderPairingCode?: Maybe<GenerateInStoreReaderPairingCodePayload>;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationauthorizePaymentMethodArgs = {
  input: AuthorizePaymentMethodInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationauthorizePayPalAccountArgs = {
  input: AuthorizePayPalAccountInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationauthorizeVenmoAccountArgs = {
  input: AuthorizeVenmoAccountInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationcaptureTransactionArgs = {
  input: CaptureTransactionInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationchargePaymentMethodArgs = {
  input: ChargePaymentMethodInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationchargeUsBankAccountArgs = {
  input: ChargeUsBankAccountInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationchargePayPalAccountArgs = {
  input: ChargePayPalAccountInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationchargeVenmoAccountArgs = {
  input: ChargeVenmoAccountInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationvaultPaymentMethodArgs = {
  input: VaultPaymentMethodInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationvaultUsBankAccountArgs = {
  input: VaultUsBankAccountInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationrefundTransactionArgs = {
  input: RefundTransactionInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationreverseTransactionArgs = {
  input: ReverseTransactionInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationreverseRefundArgs = {
  input: ReverseRefundInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationupdateTransactionCustomFieldsArgs = {
  input: UpdateTransactionCustomFieldsInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationverifyPaymentMethodArgs = {
  input: VerifyPaymentMethodInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationverifyUsBankAccountArgs = {
  input: VerifyUsBankAccountInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationconfirmMicroTransferAmountsArgs = {
  input: ConfirmMicroTransferAmountsInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationdeletePaymentMethodFromVaultArgs = {
  input: DeletePaymentMethodFromVaultInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationcreateClientTokenArgs = {
  input?: Maybe<CreateClientTokenInput>;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationpartialCaptureTransactionArgs = {
  input: PartialCaptureTransactionInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationtokenizeCustomActionsPaymentMethodArgs = {
  input: TokenizeCustomActionsPaymentMethodInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationtokenizeCreditCardArgs = {
  input: TokenizeCreditCardInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationtokenizeCvvArgs = {
  input: TokenizeCvvInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationtokenizeNetworkTokenArgs = {
  input: TokenizeNetworkTokenInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationtokenizeSamsungPayCardArgs = {
  input: TokenizeSamsungPayCardInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationtokenizeUsBankAccountArgs = {
  input: TokenizeUsBankAccountInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationtokenizeUsBankLoginArgs = {
  input: TokenizeUsBankLoginInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationcreateCustomerArgs = {
  input?: Maybe<CreateCustomerInput>;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationupdateCustomerArgs = {
  input: UpdateCustomerInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationdeleteCustomerArgs = {
  input: DeleteCustomerInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationdeletePaymentMethodFromSingleUseTokenArgs = {
  input: DeletePaymentMethodFromSingleUseTokenInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationperformThreeDSecureLookupArgs = {
  input: PerformThreeDSecureLookupInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationacceptDisputeArgs = {
  input: AcceptDisputeInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationvaultPayPalBillingAgreementArgs = {
  input: VaultPayPalBillingAgreementInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationsandboxSettleTransactionArgs = {
  input: SandboxSettleTransactionInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationcreateInStoreLocationArgs = {
  input: CreateInStoreLocationInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationpairInStoreReaderArgs = {
  input: PairInStoreReaderInput;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationgenerateInStoreReaderPairingCodeArgs = {
  input: GenerateInStoreReaderPairingCodeInput;
};

/** Means by which customers by their bills. */
export enum MVVAcceptanceChannel {
  FACE_TO_FACE = 'FACE_TO_FACE',
  MAIL = 'MAIL',
  PHONE = 'PHONE',
  WEB = 'WEB',
}

/** Supported MVV (Merchant Verification Value) programs. */
export enum MVVRegistrationType {
  LOAN_VPP = 'LOAN_VPP',
  TAX_DEBIT = 'TAX_DEBIT',
  UTIL_RATE = 'UTIL_RATE',
  UTIL_VPP = 'UTIL_VPP',
}

/** Supported MVV (Merchant Verification Value) utility types. */
export enum MVVUtilityType {
  ELECTRIC = 'ELECTRIC',
  GAS = 'GAS',
  TRASH = 'TRASH',
  WATER = 'WATER',
}

/** Input fields for a network tokenized card. */
export type NetworkTokenInput = {
  /** A one-time-use string generated by the token requester to validate the transaction. */
  cryptogram: Scalars['String'];
  /** A two-digit string that should be passed along in the authorization message. */
  eCommerceIndicator: Scalars['ECommerceIndicator'];
  /** A two-digit string representing the expiration month of the DPAN. */
  expirationMonth: Scalars['Month'];
  /** A four-digit string representing the expiration year of the DPAN. */
  expirationYear: Scalars['Year'];
  /** The card number used in processing. This is a device PAN (DPAN), not the backing card number (FPAN). */
  number: Scalars['CreditCardNumber'];
};

/** Additional information about the payment method specific to Network Token. */
export type NetworkTokenOriginDetails = {
  __typename?: 'NetworkTokenOriginDetails';
  /**
   * The first 6 digits of the credit card, known as the Bank Identification
   * Number. This BIN may differ from the BIN of the customer's actual card.
   */
  bin?: Maybe<Scalars['String']>;
};

/** Relay compatible Node interface. */
export type Node = {
  /** Global ID for a given object. */
  id: Scalars['ID'];
};

/** Information about an OAuth Application. */
export type OAuthApplication = {
  __typename?: 'OAuthApplication';
  /** The unique identifier of the OAuth application. */
  clientId?: Maybe<Scalars['String']>;
};

/** The owner's address type. */
export enum OwnerAddressType {
  HOME = 'HOME',
  MAILING = 'MAILING',
}

/** The type of identity number provided for the owner. */
export enum OwnerIDType {
  INDIVIDUAL_TAX_IDENTIFICATION_NUMBER = 'INDIVIDUAL_TAX_IDENTIFICATION_NUMBER',
  SOCIAL_SECURITY_NUMBER = 'SOCIAL_SECURITY_NUMBER',
}

/**
 * An owner of the business. A minimum of one and a maximum of five owners can be
 * submitted. One owner must be the authorized signer on the account.
 */
export type OwnerInput = {
  /** Whether this owner acts as the authorized signer on the account. This should only be true for one owner. */
  authorizedSigner?: Maybe<Scalars['Boolean']>;
  /** The role that the owner holds. */
  role: OwnerRole;
  /** The position that the owner holds. */
  position: OwnerPosition;
  /** The % of the business that the owner owns. Must be between 0 and 100. */
  ownershipPercentage: Scalars['Int'];
  /** The owner's first name. */
  firstName: Scalars['String'];
  /** The owner's last name. */
  lastName: Scalars['String'];
  /** The owner's email address. */
  email: Scalars['String'];
  /** The owner's address. */
  address: AddressInput;
  /** The owner's address type. */
  addressType: OwnerAddressType;
  /** The owner's date of birth. Format: YYYY-MM-DD. */
  dateOfBirth: Scalars['Date'];
  /** The country code for the owner's phone number. */
  phoneCountryCode: Scalars['Int'];
  /** The owner's phone number. No extensions, numbers only. */
  phoneNumber: Scalars['String'];
  /** The phone number type for the owner's phone number. */
  phoneType: OwnerPhoneType;
  /** The owner's ID type. Required for authorized signer. */
  idType?: Maybe<OwnerIDType>;
  /** The owner's ID number. Must be a valid US SSN or TIN. */
  idNumber?: Maybe<Scalars['USTaxIdentificationNumber']>;
  /** The country that issued the owner's ID. */
  idIssuer?: Maybe<Scalars['CountryCodeAlpha3']>;
};

/** The owner's phone type. */
export enum OwnerPhoneType {
  HOME = 'HOME',
  MOBILE = 'MOBILE',
}

/** The position that the owner holds in the business. */
export enum OwnerPosition {
  BENEFICIAL_OWNER = 'BENEFICIAL_OWNER',
  CHAIRMAN = 'CHAIRMAN',
  DIRECTOR = 'DIRECTOR',
  PARTNER = 'PARTNER',
  SECRETARY = 'SECRETARY',
  TREASURER = 'TREASURER',
}

/** The role that the owner holds in the business. */
export enum OwnerRole {
  BENEFICIAL_OWNER = 'BENEFICIAL_OWNER',
  SIGNIFICANT_RESPONSIBILITY = 'SIGNIFICANT_RESPONSIBILITY',
}

/** The page information for a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Whether or not there is a next page available. */
  hasNextPage: Scalars['Boolean'];
  /** Always false; backwards pagination is not supported. Present to comply with Relay specifications. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor for the first item in the connection page. */
  startCursor?: Maybe<Scalars['String']>;
  /** The cursor for the last item in the connection page. */
  endCursor?: Maybe<Scalars['String']>;
};

/** Input fields for pairing an in store reader. */
export type PairInStoreReaderInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Code displayed on Reader during pairing. */
  pairingCode: Scalars['String'];
  /** Inputs for Reader. */
  reader: InStoreReaderSetupInput;
};

/** An original authorization's relationship to all its partial capture transactions. */
export type ParentAuthorization = {
  __typename?: 'ParentAuthorization';
  /** The captures on a partially captured authorization. */
  childCaptures?: Maybe<Array<Transaction>>;
  /** The total amount authorized by this transaction. This amount will not change as this transaction is partially captured. */
  totalAmountAuthorized?: Maybe<MonetaryAmount>;
};

/**
 * A union of all possible relationships of transactions involved in partial
 * captures. If the transaction has been partially captured, this links to all its
 * partial capture children; if the transaction represents a partial capture
 * attempt, this links to the original parent authorization.
 */
export type PartialCaptureDetails = ChildCapture | ParentAuthorization;

/** Top-level input fields for capturing outstanding funds authorized by a transaction. */
export type PartialCaptureTransactionInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of the original authorized transaction to be partially captured. */
  transactionId: Scalars['ID'];
  /** Input fields for the capture, with details that will define the resulting capture transaction. */
  transaction?: Maybe<PartialCaptureTransactionOptionsInput>;
};

/** Input fields for the capture, with details that will define the resulting capture transaction. */
export type PartialCaptureTransactionOptionsInput = {
  /**
   * The amount to capture on the transaction against the parent authorization
   * transaction. Must be greater than 0. You can perform multiple partial capture
   * transactions as long as the cumulative amount of those transactions is less
   * than or equal to the amount authorized by the parent transaction. You can't
   * capture more than the authorized amount unless your industry and processor
   * support settlement adjustment (capturing a certain percentage over the
   * authorized amount); [contact us for assistance](https://help.braintreepayments.com?issue=TransactionProcessingQuestion).
   */
  amount: Scalars['Amount'];
  /**
   * Additional information about the transaction. On PayPal transactions, this
   * field maps to the PayPal invoice number. PayPal invoice numbers must be unique
   * in your PayPal business account. Maximum 255 characters or 127 for PayPal
   * transactions. If specified, this will update the existing order ID on the transaction.
   */
  orderId?: Maybe<Scalars['String']>;
};

/** Top-level output field from partially capturing a transaction. */
export type PartialCaptureTransactionPayload = {
  __typename?: 'PartialCaptureTransactionPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The transaction representing the partial capture. */
  capture?: Maybe<Transaction>;
};

/**
 * A merchant-initiated movement of money between the merchant and a customer, by
 * way of a payment method. Payments can represent money moving either from a
 * customer to the merchant by charging a payment method (a Transaction), or from
 * the merchant back to a customer by refunding a previous transaction (a Refund).
 */
export type Payment = {
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Legacy unique identifier. */
  legacyId: Scalars['ID'];
  /** Date and time when the payment was created. */
  createdAt?: Maybe<Scalars['Timestamp']>;
  /**
   * The amount charged or credited to the payment method. Note that in the case of
   * a Transaction, this amount will represent the amount moving from the customer
   * to the merchant, and in the case of a Refund, will represent the amount moving
   * from the merchant back to the customer.
   */
  amount?: Maybe<MonetaryAmount>;
  /** The order ID. */
  orderId?: Maybe<Scalars['String']>;
  /** The current status of this payment. */
  status?: Maybe<PaymentStatus>;
  /**
   * The records of all statuses this payment has passed through, with additional
   * information on why each status occurred. Returned in reverse chronological
   * order, with the most recent event first in the list.
   */
  statusHistory?: Maybe<Array<PaymentStatusEvent>>;
  /** The ID of the merchant account that processed this payment. */
  merchantAccountId?: Maybe<Scalars['ID']>;
  /** How the payment was created. */
  source?: Maybe<PaymentSource>;
};

/** A paginated list of transactions and refunds. */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** A list of transactions and refunds. */
  edges?: Maybe<Array<Maybe<PaymentConnectionEdge>>>;
  /** Information about the page of transactions and refunds contained in `edges`. */
  pageInfo: PageInfo;
};

/** A transaction or refund within a PaymentConnection. */
export type PaymentConnectionEdge = {
  __typename?: 'PaymentConnectionEdge';
  /** This transaction or refund's location within the PaymentConnection. Used for requesting additional pages. */
  cursor?: Maybe<Scalars['String']>;
  /** The transaction or refund. */
  node?: Maybe<Payment>;
};

/**
 * The [payment-level fee report (formerly known as the transaction-level fee report)](https://articles.braintreepayments.com/control-panel/reporting/transaction-level-fee-report)
 * provides a breakdown of fees per individual payments (encompassing transactions and refunds).
 */
export type PaymentLevelFeeReport = {
  __typename?: 'PaymentLevelFeeReport';
  /** The URL where you can access the requested report. */
  url?: Maybe<Scalars['String']>;
};

/** Top-level field representing a payment method. */
export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Legacy unique identifier. May be the same as ID for single-use payment methods. */
  legacyId: Scalars['ID'];
  /** Whether a payment method may be used only once or multiple times. */
  usage?: Maybe<PaymentMethodUsage>;
  /** Date and time when the payment method was vaulted. */
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** Details about the payment method specific to the type (e.g. credit card, PayPal account). */
  details?: Maybe<PaymentMethodDetails>;
  /** A paginated list of verifications that have been run against the payment method. */
  verifications?: Maybe<VerificationConnection>;
  /** The customer that the payment method belongs to. */
  customer?: Maybe<Customer>;
};

/** Top-level field representing a payment method. */
export type PaymentMethodverificationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** A paginated list of payment methods. */
export type PaymentMethodConnection = {
  __typename?: 'PaymentMethodConnection';
  /** A list of payment methods. */
  edges?: Maybe<Array<Maybe<PaymentMethodConnectionEdge>>>;
  /** Information about the page of payment methods contained in `edges`. */
  pageInfo: PageInfo;
};

/** A payment method within a PaymentMethodConnection. */
export type PaymentMethodConnectionEdge = {
  __typename?: 'PaymentMethodConnectionEdge';
  /** This payment method's location within the PaymentMethodConnection. Used for requesting additional pages. */
  cursor?: Maybe<Scalars['String']>;
  /** The payment method. */
  node?: Maybe<PaymentMethod>;
};

/**
 * A union of all possible payment method details. PaymentMethodDetails contain
 * information for display purposes, payment method management, and processing.
 */
export type PaymentMethodDetails =
  | CustomActionsPaymentMethodDetails
  | CreditCardDetails
  | PayPalAccountDetails
  | SamsungPayCardDetails
  | VenmoAccountDetails
  | UsBankAccountDetails;

/** Information about how the customer provided a payment method, such as via a digital wallet. */
export type PaymentMethodOrigin = {
  __typename?: 'PaymentMethodOrigin';
  /** An enum identifying the origin of the payment method. */
  type?: Maybe<PaymentMethodOriginType>;
  /** When available, additional details specific to the origin. */
  details?: Maybe<PaymentMethodOriginDetails>;
};

/**
 * A union of all possible payment method origin details.
 * PaymentMethodOriginDetails contain additional information specific to the third
 * party the payment method was provided by.
 */
export type PaymentMethodOriginDetails =
  | ApplePayOriginDetails
  | GooglePayOriginDetails
  | MasterpassOriginDetails
  | NetworkTokenOriginDetails
  | SamsungPayOriginDetails
  | VisaCheckoutOriginDetails
  | PayPalLocalPaymentOriginDetails;

/** A value identifying the third-party origin from which a customer provided their payment method. */
export enum PaymentMethodOriginType {
  APPLE_PAY = 'APPLE_PAY',
  GOOGLE_PAY = 'GOOGLE_PAY',
  MASTERPASS = 'MASTERPASS',
  NETWORK_TOKEN = 'NETWORK_TOKEN',
  PAYPAL = 'PAYPAL',
  SAMSUNG_PAY = 'SAMSUNG_PAY',
  VISA_CHECKOUT = 'VISA_CHECKOUT',
}

/**
 * A union of all possible payment method details as they were used in a
 * transaction or verification. PaymentMethodSnapshot preserves values used to
 * create a given transaction or verify a payment method at that moment in time.
 */
export type PaymentMethodSnapshot =
  | CustomActionsPaymentMethodDetails
  | CreditCardDetails
  | PayPalTransactionDetails
  | VenmoAccountDetails
  | UsBankAccountDetails
  | LocalPaymentDetails;

/**
 * A value identifying the type of payment method used for a transaction. For
 * certain payment methods such as credit cards, this value also encodes the origin
 * from which a customer provided that payment method.
 */
export enum PaymentMethodSnapshotSearchType {
  CREDIT_CARD = 'CREDIT_CARD',
  CREDIT_CARD_VIA_APPLE_PAY = 'CREDIT_CARD_VIA_APPLE_PAY',
  CREDIT_CARD_VIA_GOOGLE_PAY = 'CREDIT_CARD_VIA_GOOGLE_PAY',
  CREDIT_CARD_VIA_MASTERPASS = 'CREDIT_CARD_VIA_MASTERPASS',
  CREDIT_CARD_VIA_NETWORK_TOKEN = 'CREDIT_CARD_VIA_NETWORK_TOKEN',
  CREDIT_CARD_VIA_SAMSUNG_PAY = 'CREDIT_CARD_VIA_SAMSUNG_PAY',
  CREDIT_CARD_VIA_VISA_CHECKOUT = 'CREDIT_CARD_VIA_VISA_CHECKOUT',
  PAYPAL = 'PAYPAL',
  US_BANK_ACCOUNT = 'US_BANK_ACCOUNT',
  VENMO_ACCOUNT = 'VENMO_ACCOUNT',
}

/** Possible usages for payment methods. */
export enum PaymentMethodUsage {
  MULTI_USE = 'MULTI_USE',
  SINGLE_USE = 'SINGLE_USE',
}

/** Input fields for searching for any type of Payment. */
export type PaymentSearchInput = {
  /** Find payments with an ID or IDs. */
  id?: Maybe<SearchValueInput>;
  /** Find payments by their type. Use this field to search for payments by the direction of money movement. */
  type?: Maybe<SearchPaymentTypeInput>;
  /** Find payments with a given status. */
  status?: Maybe<SearchPaymentStatusInput>;
  /** Find payments based on the time at which they transitioned to a given status. */
  statusTransition?: Maybe<SearchPaymentStatusTransitionInput>;
  /** Find payments based on the time they were created. */
  createdAt?: Maybe<SearchTimestampInput>;
  /** Find payments for a given amount or currency. */
  amount?: Maybe<MonetaryAmountSearchInput>;
  /** Find payments with a given orderId. */
  orderId?: Maybe<SearchTextInput>;
  /** Find payments processed through a merchant account ID or IDs. */
  merchantAccountId?: Maybe<SearchValueInput>;
  /**
   * Find payments by their disbursement date. Only use this search criteria if you
   * have an eligible merchant account. Note that payments can only be disbursed
   * after they reach the SETTLED status.
   */
  disbursementDate?: Maybe<SearchDateInput>;
  /** Find payments created with a given source. */
  source?: Maybe<SearchPaymentSourceInput>;
  /** Find payments created by a third party via the Grant API using a given OAuth application client ID. */
  facilitatorOAuthApplicationClientId?: Maybe<SearchValueInput>;
};

/** The type of a Payment, based primarily on implementing type. */
export enum PaymentSearchType {
  /** The payment is a Transaction. */
  TRANSACTION = 'TRANSACTION',
  /**
   * The payment is a Refund, and represents a refund of a transaction present in
   * this Braintree account. Unless you have processed any [detached credits](https://articles.braintreepayments.com/control-panel/transactions/refunds-voids-credits#detached-credits),
   * this type encompasses all refunds.
   */
  REFUND = 'REFUND',
  /**
   * Only use this field if you have processed [detached credits](https://articles.braintreepayments.com/control-panel/transactions/refunds-voids-credits#detached-credits).
   * The payment is a Refund, and represents a refund of a transaction not
   * processed through your Braintree account.
   */
  DETACHED_REFUND = 'DETACHED_REFUND',
}

/** The origin of a request that created or changed a transaction or refund. */
export enum PaymentSource {
  API = 'API',
  CONTROL_PANEL = 'CONTROL_PANEL',
  RECURRING = 'RECURRING',
  UNKNOWN = 'UNKNOWN',
}

/**
 * The status of the payment, indicating its success or failure, and where it is in its [lifecycle](https://articles.braintreepayments.com/get-started/transaction-lifecycle).
 * For further details on why any given status occurred, consult the corresponding
 * `PaymentStatusEvent` in the payment's `statusHistory`.
 */
export enum PaymentStatus {
  /**
   * The transaction spent too much time in the `AUTHORIZED` status and was marked
   * as expired. Expiration [time frames](https://developers.braintreepayments.com/reference/general/statuses#authorization-expired)
   * differ by card type, transaction type, and, in some cases, merchant category.
   */
  AUTHORIZATION_EXPIRED = 'AUTHORIZATION_EXPIRED',
  /**
   * The processor authorized the transaction, putting your customer's funds on
   * hold. Your customer may see a pending charge on his or her account. However,
   * before the customer is actually charged and before you receive the funds, you
   * must use the `captureTransaction` mutation. If you do not want to capture the
   * transaction, you should use the `reverseTransaction` mutation to avoid a
   * misuse of authorization fee.
   */
  AUTHORIZED = 'AUTHORIZED',
  /** If a payment remains in a status of `AUTHORIZING`, [contact us for assistance](https://help.braintreepayments.com?issue=TransactionProcessingQuestion). */
  AUTHORIZING = 'AUTHORIZING',
  /**
   * An error occurred when sending the payment to the downstream processor. See
   * the payment's `statusHistory` for the exact error.
   */
  FAILED = 'FAILED',
  /**
   * The transaction was [rejected](https://articles.braintreepayments.com/control-panel/transactions/gateway-rejections)
   * based on one or more settings or rules in your Braintree gateway. See the
   * transaction's `statusHistory` to determine which resulted in the decline.
   */
  GATEWAY_REJECTED = 'GATEWAY_REJECTED',
  /**
   * The processor declined the transaction while attempting to authorize it. See
   * the transaction's `statusHistory` to determine what reason the processor gave
   * for the decline.
   */
  PROCESSOR_DECLINED = 'PROCESSOR_DECLINED',
  /**
   * The payment has been settled. For transactions, this means your customer has
   * been charged and the process of disbursing the funds to your bank account has
   * begun. For refunds, it means that the process of disbursing funds back to the
   * customer has begun.
   */
  SETTLED = 'SETTLED',
  SETTLEMENT_CONFIRMED = 'SETTLEMENT_CONFIRMED',
  /**
   * The processor declined the payment while attempting to capture it. See the
   * payment's `statusHistory` to determine why it wasn't settled. This status is
   * rare, and only certain types of transactions can be affected.
   */
  SETTLEMENT_DECLINED = 'SETTLEMENT_DECLINED',
  /**
   * The transaction has not yet fully settled. This status is rare, and will
   * generally resolve to a status of `SETTLED`. Only certain types of transactions
   * can be affected.
   */
  SETTLEMENT_PENDING = 'SETTLEMENT_PENDING',
  /** The payment is in the process of being settled. This is a transitory state, and will resolve to a status of `SETTLED`. */
  SETTLING = 'SETTLING',
  /**
   * The payment has been successfully captured, and will be included in the next
   * settlement batch, at which time it will become settled.
   */
  SUBMITTED_FOR_SETTLEMENT = 'SUBMITTED_FOR_SETTLEMENT',
  /**
   * The payment has been voided or canceled. For transactions, this means it's no
   * longer authorized, your customer's funds are no longer on hold, and you can't
   * use the `captureTransaction` mutation on this transaction. For refunds, it
   * means the customer will not receive the funds from the refund.
   */
  VOIDED = 'VOIDED',
}

/** Status event in the [lifecycle of a payment](https://articles.braintreepayments.com/get-started/transaction-lifecycle). */
export type PaymentStatusEvent = {
  /** New status of the payment. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the status event occurred. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /**
   * The payment amount applicable to the status. For instance, the amount when a
   * transaction is `SUBMITTED_FOR_SETTLEMENT` might be less than the amount for
   * which it was `AUTHORIZED`.
   */
  amount?: Maybe<MonetaryAmount>;
  /** Source that caused the status event to occur. */
  source?: Maybe<PaymentSource>;
  /** Whether this is the final state for the payment. If false, this transaction will pass into another subsequent state. */
  terminal?: Maybe<Scalars['Boolean']>;
};

/** Details about a PayPal account. */
export type PayPalAccountDetails = {
  __typename?: 'PayPalAccountDetails';
  /** The ID of the billing agreement for this PayPal account. */
  billingAgreementId?: Maybe<Scalars['String']>;
  /** The billing address associated with the PayPal account. */
  billingAddress?: Maybe<Address>;
  /** The email address associated with the PayPal account. */
  email?: Maybe<Scalars['String']>;
  /** The PayPal ID of the PayPal account. */
  payerId?: Maybe<Scalars['String']>;
  /** The first name on the PayPal account. */
  firstName?: Maybe<Scalars['String']>;
  /** The last name on the PayPal account. */
  lastName?: Maybe<Scalars['String']>;
  /** The label of the co-branded card used as a funding source. */
  cobrandedCardLabel?: Maybe<Scalars['String']>;
};

/** Input for identifying a PayPal account. */
export type PayPalAccountInput = {
  /** The unique PayPal ID of the PayPal account. */
  payerId?: Maybe<Scalars['ID']>;
};

/** Configuration for PayPal. */
export type PayPalConfiguration = {
  __typename?: 'PayPalConfiguration';
  /** The merchant's company name for displaying to customers in the PayPal UI. */
  displayName?: Maybe<Scalars['String']>;
  /** The merchant's PayPal client ID. */
  clientId?: Maybe<Scalars['String']>;
  /** The merchant's privacy policy URL. */
  privacyUrl?: Maybe<Scalars['String']>;
  /** The merchant's user agreement URL. */
  userAgreementUrl?: Maybe<Scalars['String']>;
  /** A URL pointing to the base path of Braintree's web pages used for various browser switches and popups. */
  assetsUrl?: Maybe<Scalars['String']>;
  /** The PayPal environment. */
  environment?: Maybe<PayPalEnvironment>;
  /**
   * For internal use only.
   * @deprecated This field is only included for internal testing purposes.
   */
  environmentNoNetwork?: Maybe<Scalars['Boolean']>;
  /** Whether or not the merchant has been vetted. */
  unvettedMerchant?: Maybe<Scalars['Boolean']>;
  /** Braintree's PayPal client ID. */
  braintreeClientId?: Maybe<Scalars['String']>;
  /** Whether billing agreements are enabled and should be used instead of future payments. */
  billingAgreementsEnabled?: Maybe<Scalars['Boolean']>;
  /** The merchant account being used. This affects the currency code and other options. */
  merchantAccountId?: Maybe<Scalars['String']>;
  /** The currency code to use. */
  currencyCode?: Maybe<Scalars['CurrencyCodeAlpha']>;
  /** The email address of the PayPal account that will receive the funds when a transaction is created. */
  payeeEmail?: Maybe<Scalars['String']>;
  /**
   * For internal use only.
   * @deprecated This field is only included for internal testing purposes.
   */
  directBaseUrl?: Maybe<Scalars['String']>;
};

/** The environment being used for PayPal. */
export enum PayPalEnvironment {
  CUSTOM = 'CUSTOM',
  LIVE = 'LIVE',
  OFFLINE = 'OFFLINE',
  custom = 'custom',
  live = 'live',
  offline = 'offline',
}

/** Additional information about the local payment method specific to PayPal. */
export type PayPalLocalPaymentOriginDetails = {
  __typename?: 'PayPalLocalPaymentOriginDetails';
  /** If funds for the transaction have settled, the PayPal ID for the capture of funds. */
  captureId?: Maybe<Scalars['String']>;
  /** A string of field/value pairs passed directly to PayPal. */
  customField?: Maybe<Scalars['String']>;
  /** The identification value of the payment within PayPal's API. */
  paymentId?: Maybe<Scalars['String']>;
  /** The fee charged by PayPal for the transaction. */
  transactionFee?: Maybe<MonetaryAmount>;
};

/** PayPal local payment specific refund details. */
export type PayPalLocalPaymentRefundDetails = {
  __typename?: 'PayPalLocalPaymentRefundDetails';
  /** The PayPal refund ID. */
  refundId?: Maybe<Scalars['String']>;
  /** Refunded transaction fee charged by PayPal. */
  refundedFee?: Maybe<MonetaryAmount>;
};

/** Input fields for a PayPal account receiving transaction funds. */
export type PayPalPayeeOptionsInput = {
  /** The email address associated with the payee PayPal account. */
  email?: Maybe<Scalars['String']>;
};

/** PayPal-specific refund details. */
export type PayPalRefundDetails = {
  __typename?: 'PayPalRefundDetails';
  /** The PayPal refund ID. */
  refundId?: Maybe<Scalars['String']>;
  /** Refunded transaction fee charged by PayPal. */
  refundedFee?: Maybe<MonetaryAmount>;
};

/** PayPal-specific details on a transaction. */
export type PayPalTransactionDetails = {
  __typename?: 'PayPalTransactionDetails';
  /** If the transaction was successfully authorized, the PayPal ID for the authorization. */
  authorizationId?: Maybe<Scalars['String']>;
  /** If funds for the transaction have settled, the PayPal ID for the capture of funds. */
  captureId?: Maybe<Scalars['String']>;
  /** A string of field/value pairs passed directly to PayPal. */
  customField?: Maybe<Scalars['String']>;
  /** Details about the payer or owner of the PayPal account. */
  payer?: Maybe<PayPalAccountDetails>;
  /** Details about the PayPal account that received the funds. */
  payee?: Maybe<PayPalAccountDetails>;
  /** Whether or not the PayPal account has been verified by PayPal. */
  payerStatus?: Maybe<Scalars['String']>;
  /** The identification value of the payment within PayPal's API. */
  paymentId?: Maybe<Scalars['String']>;
  /**
   * If the transaction is a refund, the PayPal refund ID.
   * @deprecated This field will never be populated as it only appears on refunds. Use `details.paypalId` on a refund instead.
   */
  refundId?: Maybe<Scalars['String']>;
  /** Whether or not the transaction qualifies for PayPal Seller Protection. */
  sellerProtectionStatus?: Maybe<Scalars['String']>;
  /** Payer's tax ID. Only returned for payments from Brazilian accounts. */
  taxId?: Maybe<Scalars['String']>;
  /** Payer's tax ID type. Only returned for payments from Brazilian accounts. Allowed values BR_CPF or BR_CNPJ. */
  taxIdType?: Maybe<Scalars['String']>;
  /** The fee charged by PayPal for the transaction. */
  transactionFee?: Maybe<MonetaryAmount>;
  /**
   * The fee charged by PayPal for the transaction.
   * @deprecated Use `transactionFee.value` instead.
   */
  transactionFeeAmount?: Maybe<Scalars['String']>;
  /**
   * The currency code for the currency of the PayPal transaction fee.
   * @deprecated Use `transactionFee.currencyIsoCode` instead.
   */
  transactionFeeCurrencyIsoCode?: Maybe<Scalars['String']>;
  /** Description of the transaction that is displayed to customers in PayPal email receipts. */
  description?: Maybe<Scalars['String']>;
};

/** A key-value pair for a PayPal SetTransactionContext field. */
export type PayPalTransactionRiskContextDataFieldInput = {
  /** The name of the field. Must correspond exactly to the PayPal key/field name. */
  name?: Maybe<Scalars['String']>;
  /** The value of the field. Maximum 4000 characters. */
  value?: Maybe<Scalars['String']>;
};

/**
 * Input fields setting the PayPal transaction context for risk assessment. In
 * order to use this, your PayPal account must be set up to use the PayPal
 * SetTransactionContext feature.
 */
export type PayPalTransactionRiskContextInput = {
  /** Provide a maximum of 100 fields. */
  fields?: Maybe<Array<PayPalTransactionRiskContextDataFieldInput>>;
};

/** Top-level fields for performing a 3D Secure Lookup. */
export type PerformThreeDSecureLookupInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of the merchant account that will be used when charging the payment method. */
  merchantAccountId?: Maybe<Scalars['ID']>;
  /**
   * Reference ID used by our MPI provider CardinalCommerce to connect the lookup
   * request to the device data that was previously collected.
   */
  dfReferenceId?: Maybe<Scalars['String']>;
  /** The ID of a single-use payment method to perform the lookup on. */
  paymentMethodId: Scalars['ID'];
  /** The amount you plan to charge the payment method after the 3D Secure authentication. */
  amount: Scalars['Amount'];
  /** Additional information about the transaction when authenticating through 3D Secure. */
  transactionInformation?: Maybe<ThreeDSecureLookupTransactionInformationInput>;
  /** Additional information about the cardholder when authenticating through 3D Secure. */
  cardholderInformation?: Maybe<ThreeDSecureLookupCardholderInformationInput>;
  /**
   * When set to true, requests a 3D Secure authentication challenge from the
   * issuer. A challenge will result in the acsUrl field being populated on the
   * response, requiring you to open the challenge on the client side.
   */
  requestAuthenticationChallenge?: Maybe<Scalars['Boolean']>;
  /** Information about the client-side lookup process. */
  clientInformation?: Maybe<ThreeDSecureLookupClientInformationInput>;
};

/** Top-level fields returned when performing a 3D Secure Lookup. */
export type PerformThreeDSecureLookupPayload = {
  __typename?: 'PerformThreeDSecureLookupPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Data fields containing information from the MPI provider about the 3D Secure Lookup result. */
  threeDSecureLookupData?: Maybe<ThreeDSecureLookupData>;
  /** A single-use payment method. */
  paymentMethod?: Maybe<PaymentMethod>;
};

/** Top-level fields returned when fetching a customer's preferred payment methods. */
export type PreferredPaymentMethodsPayload = {
  __typename?: 'PreferredPaymentMethodsPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Probabilistic determination of whether Venmo is a preferred payment method. */
  venmoPreferred?: Maybe<Scalars['Boolean']>;
  /** Probabilistic determination of whether PayPal is a preferred payment method. */
  paypalPreferred?: Maybe<Scalars['Boolean']>;
};

/** Accompanying information for a processor declined transaction. */
export type ProcessorDeclinedEvent = PaymentStatusEvent & {
  __typename?: 'ProcessorDeclinedEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the transaction was declined by the processor. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The amount of the transaction for this status event. */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Whether or not the decline is the result of a temporary issue. */
  declineType?: Maybe<ProcessorDeclineType>;
  /** Fields describing the payment processor response and why they declined the transaction. */
  processorResponse?: Maybe<TransactionAuthorizationProcessorResponse>;
  /** Risk decision for this transaction. */
  riskDecision?: Maybe<RiskDecision>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
};

/**
 * Whether the decline is likely to be temporary or persistent. Can be taken into
 * consideration when determining whether to retry a declined charge.
 */
export enum ProcessorDeclineType {
  /**
   * Hard declines are the result of an error or issue which can't be resolved
   * immediately; the decline is not temporary and subsequent charges on the same
   * payment method will likely not be successful.
   */
  HARD = 'HARD',
  /**
   * Soft declines result from a temporary issue and can be retried; subsequent
   * charges on the same payment method may be successful.
   */
  SOFT = 'SOFT',
}

/** The top-level Query type. Queries are used to fetch data. */
export type Query = {
  __typename?: 'Query';
  /** Returns the literal string 'pong'. */
  ping: Scalars['String'];
  /** The currently authenticated viewer. */
  viewer?: Maybe<Viewer>;
  /** The client-side environment and payment method configuration. */
  clientConfiguration?: Maybe<ClientConfiguration>;
  /** Fetch any object that extends the Node interface using its ID. */
  node?: Maybe<Node>;
  /**
   * Get a GraphQL ID from a legacy ID that was returned from an SDK or a legacyId
   * field. Does not verify existence except for payment methods.
   */
  idFromLegacyId: Scalars['ID'];
  /** The available reports. */
  report?: Maybe<Report>;
  /** The available searches. */
  search?: Maybe<Search>;
  /** The customer's preferred payment methods. */
  preferredPaymentMethods?: Maybe<PreferredPaymentMethodsPayload>;
};

/** The top-level Query type. Queries are used to fetch data. */
export type QuerynodeArgs = {
  id: Scalars['ID'];
};

/** The top-level Query type. Queries are used to fetch data. */
export type QueryidFromLegacyIdArgs = {
  legacyId: Scalars['ID'];
  type: LegacyIdType;
};

/** Indicates the status of a Reader. */
export enum ReaderStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}

/** The type of recurring payment a transaction represents. */
export enum RecurringType {
  FIRST = 'FIRST',
  SUBSEQUENT = 'SUBSEQUENT',
  UNSCHEDULED = 'UNSCHEDULED',
}

/**
 * A refund of a charge on a payment method, representing an attempt to send money
 * from a previous transaction back to the customer.
 */
export type Refund = Node &
  Payment & {
    __typename?: 'Refund';
    /** Unique identifier. */
    id: Scalars['ID'];
    /** Legacy unique identifier. */
    legacyId: Scalars['ID'];
    /** Date and time when the refund was created. */
    createdAt?: Maybe<Scalars['Timestamp']>;
    /** The amount that will be refunded, which can be less than or equal to the original charge amount. */
    amount?: Maybe<MonetaryAmount>;
    /** The order ID for this refund. For PayPal transactions, the PayPal Invoice ID. */
    orderId?: Maybe<Scalars['String']>;
    /** The current status of this refund. */
    status?: Maybe<PaymentStatus>;
    /**
     * The records of all statuses this refund has passed through, with additional
     * information on why each status occurred. Returned in reverse chronological
     * order, with the most recent event first in the list.
     */
    statusHistory?: Maybe<Array<PaymentStatusEvent>>;
    /** Payment method specific details about the refund. */
    details?: Maybe<RefundPaymentMethodDetails>;
    /** The ID of the merchant account that processed this refund. */
    merchantAccountId?: Maybe<Scalars['ID']>;
    /** How the refund was created. */
    source?: Maybe<PaymentSource>;
    /**
     * The original transaction that this refunds. If this is not present, then this
     * refund represents a refund of a transaction that does not belong to this
     * Braintree gateway account.
     */
    refundedTransaction?: Maybe<Transaction>;
    /**
     * Snapshot of payment method details that will receive the refund, typically
     * based on the original transaction. This will always be present. Equivalent to
     * `refundedTransaction.paymentMethodSnapshot`.
     */
    paymentMethodSnapshot?: Maybe<PaymentMethodSnapshot>;
    /**
     * The multi-use payment method that will receive the refund. Only present if a
     * multi-use payment method was used to create the original transaction and it
     * has not been since deleted. The details of this PaymentMethod may have changed
     * since the transaction was created; details used for the transaction can be
     * found in the `paymentMethodSnapshot` field. Equivalent to
     * `refundedTransaction.paymentMethod` (if present).
     */
    paymentMethod?: Maybe<PaymentMethod>;
    /**
     * The customer that the vaulted payment method (if it exists) belongs to.
     * Equivalent to `refundedTransaction.customer` (if present).
     */
    customer?: Maybe<Customer>;
  };

/** A paginated list of refunds. */
export type RefundConnection = {
  __typename?: 'RefundConnection';
  /** A list of refunds. */
  edges?: Maybe<Array<Maybe<RefundConnectionEdge>>>;
  /** Information about the page of refunds contained in `edges`. */
  pageInfo: PageInfo;
};

/** A transaction within a RefundConnection. */
export type RefundConnectionEdge = {
  __typename?: 'RefundConnectionEdge';
  /** This refund's location within the RefundConnection. Used for requesting additional pages. */
  cursor?: Maybe<Scalars['String']>;
  /** The refund. */
  node?: Maybe<Refund>;
};

/** Specific input fields for describing a refund. */
export type RefundInput = {
  /**
   * The amount to refund. Must be less than or equal to the amount of the original
   * transaction. Defaults to the total amount of the original transaction.
   */
  amount?: Maybe<Scalars['Amount']>;
  /** The refund's order ID. Defaults to the order ID of the original transaction. */
  orderId?: Maybe<Scalars['String']>;
};

/** A union of all possible payment method refund details. */
export type RefundPaymentMethodDetails = PayPalRefundDetails | PayPalLocalPaymentRefundDetails;

/** Supported refund policies. */
export enum RefundPolicy {
  EXCHANGE_ONLY = 'EXCHANGE_ONLY',
  NO_REFUND_OR_EXCHANGE = 'NO_REFUND_OR_EXCHANGE',
  REFUND_CARDHOLDER = 'REFUND_CARDHOLDER',
}

/** Input fields for searching for refunds. */
export type RefundSearchInput = {
  /** Find refunds with an ID or IDs. */
  id?: Maybe<SearchValueInput>;
  /** Find refunds with the given status. */
  status?: Maybe<SearchTransactionStatusInput>;
  /** Find payments based on the time at which they transitioned to a given status. */
  statusTransition?: Maybe<SearchPaymentStatusTransitionInput>;
  /** Find refunds based on the time they were created. */
  createdAt?: Maybe<SearchTimestampInput>;
  /** Find refunds with a given amount or currency. */
  amount?: Maybe<MonetaryAmountSearchInput>;
  /** Find refunds with a given orderId. */
  orderId?: Maybe<SearchTextInput>;
  /**
   * Find refunds processed through a merchant account ID or IDs. In most cases,
   * this will be the merchant account of the original refunded transaction.
   */
  merchantAccountId?: Maybe<SearchValueInput>;
  /**
   * Find refunds by their disbursement date. Only use this search criteria if you
   * have an eligible merchant account. Note that refunds can only be disbursed
   * after they reach the SETTLED status.
   */
  disbursementDate?: Maybe<SearchDateInput>;
  /** Find refunds created with a given source. */
  source?: Maybe<SearchPaymentSourceInput>;
  /** Find refunds created by a third party via the Grant API using a given OAuth application client ID. */
  facilitatorOAuthApplicationClientId?: Maybe<SearchValueInput>;
};

/** Top-level input fields for refunding a transaction. */
export type RefundTransactionInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of a transaction to be refunded. */
  transactionId: Scalars['ID'];
  /** Input fields for the details of the refund. */
  refund?: Maybe<RefundInput>;
};

/** Top-level output field from refunding a transaction. */
export type RefundTransactionPayload = {
  __typename?: 'RefundTransactionPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The information about the created refund. */
  refund?: Maybe<Refund>;
};

/** Top-level fields returned for a report query. */
export type Report = {
  __typename?: 'Report';
  /**
   * Top-level fields returned in the transaction-level fee report query.
   * @deprecated This report has been renamed `paymentLevelFees`, since it applies to all types in the Payment interface, including transactions and refunds. Use the `paymentLevelFees` field instead, which returns the same report.
   */
  transactionLevelFees?: Maybe<TransactionLevelFeeReport>;
  /** Top-level fields returned in the payment-level fee report query. */
  paymentLevelFees?: Maybe<PaymentLevelFeeReport>;
};

/** Top-level fields returned for a report query. */
export type ReporttransactionLevelFeesArgs = {
  date: Scalars['Date'];
  merchantAccountId?: Maybe<Scalars['ID']>;
};

/** Top-level fields returned for a report query. */
export type ReportpaymentLevelFeesArgs = {
  date: Scalars['Date'];
  merchantAccountId?: Maybe<Scalars['ID']>;
};

/** Input fields for reversing a refund. */
export type ReverseRefundInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the refund to reverse. */
  refundId: Scalars['ID'];
};

/** Input fields for reversing a transaction. */
export type ReverseTransactionInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the transaction to reverse. */
  transactionId: Scalars['ID'];
};

/** Top-level output field for reversing a transaction. */
export type ReverseTransactionPayload = {
  __typename?: 'ReverseTransactionPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * A transaction (if the original transaction was voided) or refund (if the
   * original transaction was refunded). A reversal will attempt to void the
   * original transaction if it has not yet settled. If the original transaction
   * has settled, a reversal will create a refund for the full amount.
   */
  reversal?: Maybe<TransactionReversal>;
};

/** A right assigned to a user. */
export type Right = {
  __typename?: 'Right';
  /** A human-readable name. */
  name?: Maybe<Scalars['String']>;
};

/** Data from advanced risk evaluations. */
export type RiskData = {
  __typename?: 'RiskData';
  /** Unique identifier. */
  id?: Maybe<Scalars['ID']>;
  /** The risk decision on whether the transaction should be permitted. */
  decision?: Maybe<RiskDecision>;
  /** Whether data associated with the customer's device was captured and used in the decision process. */
  deviceDataCaptured?: Maybe<Scalars['Boolean']>;
  /** The third-party provider used to generate the risk decision. */
  fraudServiceProvider?: Maybe<FraudServiceProvider>;
};

/** Input fields for a risk data object. */
export type RiskDataInput = {
  /**
   * The User-Agent header provided by the customer's browser, which gives
   * information about the browser. Maximum 255 characters.
   */
  customerBrowser?: Maybe<Scalars['String']>;
  /** The customer's IP address. */
  customerIp?: Maybe<Scalars['String']>;
  /**
   * Customer device information. Required when creating transactions using cards
   * (only if using Advanced Fraud Tools), PayPal (only for one-time Vaulted PayPal
   * transactions), and Venmo payment method types. This value will contain a Fraud
   * Merchant ID as the unique, numeric identifier for a Kount account and a Device
   * Session ID as the unique identifier for a customer device. For PayPal and
   * Venmo transactions, this value will also include a PayPal Correlation ID.
   */
  deviceData?: Maybe<Scalars['String']>;
};

/** The risk decision provides further context on how a transaction was scored for risk by Braintree. */
export enum RiskDecision {
  APPROVE = 'APPROVE',
  DECLINE = 'DECLINE',
  NOT_EVALUATED = 'NOT_EVALUATED',
  REVIEW = 'REVIEW',
}

/** Groups of rights assigned to the user. */
export type Role = {
  __typename?: 'Role';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** A human-readable name. */
  name?: Maybe<Scalars['String']>;
  /** Whether the role grants account admin status. */
  isAccountAdmin?: Maybe<Scalars['Boolean']>;
  /** The rights associated with the role. */
  rights?: Maybe<Array<Right>>;
};

/** Details about a Samsung Pay card. */
export type SamsungPayCardDetails = {
  __typename?: 'SamsungPayCardDetails';
  /** The display name of the card brand, e.g. "Visa" or "American Express". */
  brand?: Maybe<Scalars['String']>;
  /** A static code identifying the card brand of the FPAN (the customer's actual backing card). */
  brandCode?: Maybe<CreditCardBrandCode>;
  /**
   * The first 6 digits of the credit card, known as the Bank Identification
   * Number. This BIN will differ from the BIN of the source (customer's actual) card.
   */
  bin?: Maybe<Scalars['String']>;
  /** Information about the card based on its BIN. This BIN will differ from the BIN of the source (customer's actual) card. */
  binData?: Maybe<BinRecord>;
  /** The last four digits of the FPAN (the customer's actual backing card). */
  sourceCardLast4?: Maybe<Scalars['CreditCardLast4']>;
};

/** Input fields for a Samsung Pay card. */
export type SamsungPayCardInput = {
  /** A one-time-use string generated by the token requester to validate the transaction. */
  cryptogram: Scalars['String'];
  /** A two-digit string that should be passed along in the authorization message. */
  eCommerceIndicator: Scalars['ECommerceIndicator'];
  /** A two-digit string representing the expiration month of the DPAN. */
  expirationMonth: Scalars['Month'];
  /** A four-digit string representing the expiration year of the DPAN. */
  expirationYear: Scalars['Year'];
  /**
   * The card number provided by Samsung and used in processing. This is a
   * digitized PAN (DPAN), not the backing card number (FPAN).
   */
  number: Scalars['CreditCardNumber'];
  /** The last four digits of the FPAN (the cardholder's backing card). */
  sourceCardLast4: Scalars['CreditCardLast4'];
};

/** Configuration for Samsung Pay on Android. */
export type SamsungPayConfiguration = {
  __typename?: 'SamsungPayConfiguration';
  /** A string used to identify the merchant to the customer. */
  displayName?: Maybe<Scalars['String']>;
  /** The Samsung Pay environment. */
  environment?: Maybe<SamsungPayEnvironment>;
  /** The Samsung Pay service ID. */
  serviceId?: Maybe<Scalars['String']>;
  /** Authorization to use when tokenizing Samsung Pay. */
  samsungAuthorization?: Maybe<Scalars['String']>;
  /** A list of card brands supported by the merchant for Samsung Pay. */
  supportedCardBrands?: Maybe<Array<CreditCardBrandCode>>;
};

/** The environment being used for Samsung Pay. */
export enum SamsungPayEnvironment {
  PRODUCTION = 'PRODUCTION',
  SANDBOX = 'SANDBOX',
}

/** Additional information about the payment method specific to Samsung Pay. */
export type SamsungPayOriginDetails = {
  __typename?: 'SamsungPayOriginDetails';
  /**
   * The first 6 digits of the credit card, known as the Bank Identification
   * Number. This BIN may differ from the BIN of the customer's actual card.
   */
  bin?: Maybe<Scalars['String']>;
};

/** Top-level input fields for settling a transaction in the sandbox environment. */
export type SandboxSettleTransactionInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Id of the transaction to force settlement in the sandbox environment. */
  transactionId: Scalars['ID'];
};

/** Top-level fields returned for a search query. */
export type Search = {
  __typename?: 'Search';
  /** A paginated list of transactions that match the TransactionSearchInput. */
  transactions?: Maybe<TransactionConnection>;
  /** A paginated list of refunds that match the RefundSearchInput. */
  refunds?: Maybe<RefundConnection>;
  /** A paginated list of all types of Payment that match the PaymentSearchInput. */
  payments?: Maybe<PaymentConnection>;
  /** A paginated list of disputes that match the DisputeSearchInput. */
  disputes?: Maybe<DisputeConnection>;
  /** A paginated list of verifications that match the VerificationSearchInput. */
  verifications?: Maybe<VerificationConnection>;
  /** A paginated list of customers that match the CustomerSearchInput. */
  customers?: Maybe<CustomerConnection>;
};

/** Top-level fields returned for a search query. */
export type SearchtransactionsArgs = {
  input: TransactionSearchInput;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** Top-level fields returned for a search query. */
export type SearchrefundsArgs = {
  input: RefundSearchInput;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** Top-level fields returned for a search query. */
export type SearchpaymentsArgs = {
  input: PaymentSearchInput;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** Top-level fields returned for a search query. */
export type SearchdisputesArgs = {
  input: DisputeSearchInput;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** Top-level fields returned for a search query. */
export type SearchverificationsArgs = {
  input: VerificationSearchInput;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** Top-level fields returned for a search query. */
export type SearchcustomersArgs = {
  input: CustomerSearchInput;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** Input fields for searching transactions by customer. */
export type SearchCustomerInput = {
  /** Find transactions with a given customer ID. */
  id?: Maybe<SearchValueInput>;
};

/** Input fields for searching for a date. These ranges are precise to the day. */
export type SearchDateInput = {
  /** Date is greater than or equal to this value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Date']>;
  /** Date is less than or equal to this value. */
  lessThanOrEqualTo?: Maybe<Scalars['Date']>;
};

/** Input fields for searching for a dispute with a given reason description. */
export type SearchDisputeReasonInput = {
  /** The dispute reason is one of these values. */
  in?: Maybe<Array<DisputeReason>>;
};

/** Input fields for searching for a dispute with a given status. */
export type SearchDisputeStatusInput = {
  /** The dispute status is exactly this value. */
  is?: Maybe<DisputeStatus>;
  /** The dispute status is one of these values. */
  in?: Maybe<Array<DisputeStatus>>;
};

/** Input fields for searching for a dispute with a given type. */
export type SearchDisputeTypeInput = {
  /** The dispute type is exactly this value. */
  is?: Maybe<DisputeType>;
  /** The dispute type is one of these values. */
  in?: Maybe<Array<DisputeType>>;
};

/** Input fields for searching transactions by payment method snapshot type. */
export type SearchPaymentMethodSnapshotTypeInput = {
  /**
   * This value represents the payment method type used to create a transaction. In
   * the case of credit cards, this value also encode the origin from which a
   * customer provided that payment method.
   */
  is?: Maybe<PaymentMethodSnapshotSearchType>;
  /**
   * These values represent the payment method type used to create a transaction.
   * In the case of credit cards, these values also encode the origin from which a
   * customer provided that payment method.
   */
  in?: Maybe<Array<PaymentMethodSnapshotSearchType>>;
};

/** Input fields for searching for a transaction or refund created with a given source. */
export type SearchPaymentSourceInput = {
  /** The transaction source is one of these values. */
  in?: Maybe<Array<PaymentSource>>;
};

/** Input fields for searching for a transaction or refund with a given status. */
export type SearchPaymentStatusInput = {
  /** The transaction status is one of these values. */
  in?: Maybe<Array<PaymentStatus>>;
};

/** Payment status transition times. */
export type SearchPaymentStatusTransitionInput = {
  /** Find transactions with a given failed at time. */
  failedAt?: Maybe<SearchTimestampInput>;
  /** Find transactions with a given settled at time. */
  settledAt?: Maybe<SearchTimestampInput>;
  /** Find transactions with a given submitted for settlement time. */
  submittedForSettlementAt?: Maybe<SearchTimestampInput>;
  /** Find transactions with a given voided at time. */
  voidedAt?: Maybe<SearchTimestampInput>;
};

/** Input fields for searching for payments by implementing type. */
export type SearchPaymentTypeInput = {
  /** The payment is a transaction and/or a refund. */
  in?: Maybe<Array<PaymentSearchType>>;
};

/** Input fields for searching for a range. */
export type SearchRangeInput = {
  /** Field is exactly this value. */
  is?: Maybe<Scalars['String']>;
  /** Field is greater than or equal to this value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Field is less than or equal to this value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
};

/** Input fields for searching text fields. */
export type SearchTextInput = {
  /** Field is exactly this value. */
  is?: Maybe<Scalars['String']>;
  /** Field is not this value. */
  isNot?: Maybe<Scalars['String']>;
  /** Field starts with this value. */
  startsWith?: Maybe<Scalars['String']>;
  /** Field ends with this value. */
  endsWith?: Maybe<Scalars['String']>;
  /** Field contains this value. */
  contains?: Maybe<Scalars['String']>;
};

/**
 * Input fields for searching by timestamp. These ranges are precise to the minute;
 * the results of searching for an object created between 12/17/2015 17:00 and
 * 12/17/2015 17:00 (i.e., the same minute) will include objects created at
 * 12/17/2015 17:00:59. If no timezone is provided, it will be assumed to be UTC.
 */
export type SearchTimestampInput = {
  /** Timestamp is greater than or equal to this value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Timestamp']>;
  /** Timestamp is less than or equal to this value. */
  lessThanOrEqualTo?: Maybe<Scalars['Timestamp']>;
};

/** Input fields for searching for a transaction created with a given source. */
export type SearchTransactionSourceInput = {
  /** The transaction source is one of these values. */
  in?: Maybe<Array<PaymentSource>>;
};

/** Input fields for searching for a transaction with a given status. */
export type SearchTransactionStatusInput = {
  /** The transaction status is exactly this value. */
  is?: Maybe<PaymentStatus>;
  /** The transaction status is one of these values. */
  in?: Maybe<Array<PaymentStatus>>;
};

/** Transaction status transition times. */
export type SearchTransactionStatusTransitionInput = {
  /** Find transactions with a given failed at time. */
  failedAt?: Maybe<SearchTimestampInput>;
  /** Find transactions with a given settled at time. */
  settledAt?: Maybe<SearchTimestampInput>;
  /** Find transactions with a given submitted for settlement time. */
  submittedForSettlementAt?: Maybe<SearchTimestampInput>;
  /** Find transactions with a given voided at time. */
  voidedAt?: Maybe<SearchTimestampInput>;
};

/** Input fields for searching for specific values. */
export type SearchValueInput = {
  /** Field is exactly this value. */
  is?: Maybe<Scalars['String']>;
  /** Field is one of these values. */
  in?: Maybe<Array<Scalars['String']>>;
};

/** Input fields for searching for a verification with a given status. */
export type SearchVerificationStatusInput = {
  /** The verification status is exactly this value. */
  is?: Maybe<VerificationStatus>;
  /** The verification status is one of these values. */
  in?: Maybe<Array<VerificationStatus>>;
};

/** Accompanying information for a settled transaction. */
export type SettledEvent = PaymentStatusEvent & {
  __typename?: 'SettledEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the transaction was settled. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /**
   * The amount the transaction was settled for, in the same currency as the
   * original authorization (aka the "presentment" currency.) If you have elected
   * to settle the transaction into a bank account with a different currency, this
   * will not reflect that.
   */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Fields describing the payment processor response. */
  processorResponse?: Maybe<TransactionSettlementProcessorResponse>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
};

/** Accompanying information for a settlement declined transaction. */
export type SettlementDeclinedEvent = PaymentStatusEvent & {
  __typename?: 'SettlementDeclinedEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the processor declined to settle this transaction. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The amount of the transaction for this status event. */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Fields describing the payment processor response to the settlement request. */
  processorResponse?: Maybe<TransactionSettlementProcessorResponse>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
};

/** Accompanying information for a settlement pending transaction. This typically only occurs for PayPal transactions. */
export type SettlementPendingEvent = PaymentStatusEvent & {
  __typename?: 'SettlementPendingEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the transaction became settlement pending. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The amount of the transaction for this status event. */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Fields describing the payment processor response to the settlement request. */
  processorResponse?: Maybe<TransactionSettlementProcessorResponse>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
};

/**
 * Accompanying information for a transaction that is settling. This is typically a
 * transient state during which the transaction is being settled with the processor.
 */
export type SettlingEvent = PaymentStatusEvent & {
  __typename?: 'SettlingEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the transaction began settling. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The amount of the transaction for this status event. This should match the amount submitted for settlement. */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
};

/** Input fields for submitting a credit card for Account Updater. */
export type SubmitCreditCardForAccountUpdaterInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of the credit card to submit for Account Updater. */
  paymentMethodId: Scalars['ID'];
};

/** Top-level fields returned when submitting a credit card for Account Updater. */
export type SubmitCreditCardForAccountUpdaterPayload = {
  __typename?: 'SubmitCreditCardForAccountUpdaterPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The credit card that was submitted to Account Updater. */
  paymentMethod?: Maybe<PaymentMethod>;
};

/**
 * Accompanying information for a transaction that is submitted for settlement.
 * This status indicates that the transaction is scheduled to be settled.
 */
export type SubmittedForSettlementEvent = PaymentStatusEvent & {
  __typename?: 'SubmittedForSettlementEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the transaction was submitted for settlement. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The amount that was submitted for settlement. This can differ from the authorized amount, but by default is the same. */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
};

/** Data fields for a payment method that has been authenticated using 3D Secure. */
export type ThreeDSecureAuthentication = {
  __typename?: 'ThreeDSecureAuthentication';
  /**
   * The cardholder authentication verification value. This value should be
   * appended to the authorization message signifying that the transaction has been
   * successfully authenticated with 3D Secure. This value will be encoded
   * according to the merchant's configuration with CardinalCommerce, with either
   * Base64 or Hex encoding. The decoded value will be of different length and
   * format per card scheme.
   */
  cavv?: Maybe<Scalars['String']>;
  /** A unique identifier for the 3D Secure interaction with the card brand directory server. */
  directoryServerTransactionId?: Maybe<Scalars['String']>;
  /** The electronic commerce indicator. */
  eciFlag?: Maybe<Scalars['ECommerceIndicator']>;
  /** A boolean indicating if the card has received liability shift. */
  liabilityShifted?: Maybe<Scalars['Boolean']>;
  /** A boolean indicating if the card is eligible for liability shift. */
  liabilityShiftPossible?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the card is enrolled in a 3D Secure program. */
  cardEnrolled?: Maybe<ThreeDSecureCardEnrolled>;
  /** The 3D Secure authentication status of the card. */
  authenticationStatus?: Maybe<ThreeDSecureAuthenticationStatus>;
  /** The version of the 3D Secure protocol used during authentication. */
  version?: Maybe<Scalars['String']>;
  /** A unique identifier for the 3D Secure interaction with the provider. */
  xId?: Maybe<Scalars['String']>;
  /** A unique identifier for the 3D Secure interaction with the 3D Secure server. */
  threeDSecureServerTransactionId?: Maybe<Scalars['String']>;
  /** A unique identifier for the 3D Secure interaction with the access control server. */
  acsTransactionId?: Maybe<Scalars['String']>;
  /** Indicates the current status of the 3D Secure authentication from the 3D Secure server for 3D Secure 1.0 authentications. */
  paresStatus?: Maybe<ThreeDSecureAuthenticationStatusIndicator>;
  /** Indicates the current status of the 3D Secure authentication from the 3D Secure server for 3D Secure 2.0 authentications. */
  transactionStatus?: Maybe<ThreeDSecureAuthenticationStatusIndicator>;
  /** Indicates the reason for the transaction status. This will be null if status is `SUCCESSFUL_AUTHENTICATION`. */
  transactionStatusReason?: Maybe<Scalars['String']>;
};

/**
 * An override field that a merchant can pass in to set the challenge window size
 * to display to the end cardholder. The ACS will reply with content that is
 * formatted appropriately to this window size to allow for the best user
 * experience. The sizes are width x height in pixels of the window displayed in
 * the cardholder browser window.
 */
export enum ThreeDSecureAuthenticationAcsWindowSize {
  FULL_PAGE = 'FULL_PAGE',
  W250_H400 = 'W250_H400',
  W390_H400 = 'W390_H400',
  W500_H600 = 'W500_H600',
  W600_H400 = 'W600_H400',
}

/** Indicates the delivery timeframe if applicable. */
export enum ThreeDSecureAuthenticationDeliveryTimeframe {
  ELECTRONIC_DELIVERY = 'ELECTRONIC_DELIVERY',
  OVERNIGHT_SHIPPING = 'OVERNIGHT_SHIPPING',
  SAME_DAY_SHIPPING = 'SAME_DAY_SHIPPING',
  TWO_OR_MORE_DAY_SHIPPING = 'TWO_OR_MORE_DAY_SHIPPING',
}

/** Merchant product code. */
export enum ThreeDSecureAuthenticationMerchantProductCode {
  ACCOMMODATION_RETAIL = 'ACCOMMODATION_RETAIL',
  AIRLINE = 'AIRLINE',
  CAR_RENTAL = 'CAR_RENTAL',
  CASH_DISPENSING = 'CASH_DISPENSING',
  DIGITAL_GOODS = 'DIGITAL_GOODS',
  FUEL = 'FUEL',
  GENERAL_RETAIL = 'GENERAL_RETAIL',
  LUXURY_RETAIL = 'LUXURY_RETAIL',
  OTHER = 'OTHER',
  RESTAURANT = 'RESTAURANT',
  SERVICES = 'SERVICES',
  TRAVEL = 'TRAVEL',
}

/** Indicates the shipping type for the transaction. */
export enum ThreeDSecureAuthenticationShippingType {
  DIGITAL_GOODS = 'DIGITAL_GOODS',
  OTHER = 'OTHER',
  SHIP_TO_ADDRESS_ON_FILE = 'SHIP_TO_ADDRESS_ON_FILE',
  SHIP_TO_BILLING_ADDRESS = 'SHIP_TO_BILLING_ADDRESS',
  SHIP_TO_OTHER_ADDRESS = 'SHIP_TO_OTHER_ADDRESS',
  SHIP_TO_STORE = 'SHIP_TO_STORE',
  TICKETS_NOT_SHIPPED = 'TICKETS_NOT_SHIPPED',
}

/** The 3D Secure authentication status of the card. */
export enum ThreeDSecureAuthenticationStatus {
  AUTHENTICATE_ATTEMPT_SUCCESSFUL = 'AUTHENTICATE_ATTEMPT_SUCCESSFUL',
  AUTHENTICATE_ERROR = 'AUTHENTICATE_ERROR',
  AUTHENTICATE_FAILED = 'AUTHENTICATE_FAILED',
  AUTHENTICATE_REJECTED = 'AUTHENTICATE_REJECTED',
  AUTHENTICATE_SIGNATURE_VERIFICATION_FAILED = 'AUTHENTICATE_SIGNATURE_VERIFICATION_FAILED',
  AUTHENTICATE_SUCCESSFUL = 'AUTHENTICATE_SUCCESSFUL',
  AUTHENTICATE_SUCCESSFUL_ISSUER_NOT_PARTICIPATING = 'AUTHENTICATE_SUCCESSFUL_ISSUER_NOT_PARTICIPATING',
  AUTHENTICATE_UNABLE_TO_AUTHENTICATE = 'AUTHENTICATE_UNABLE_TO_AUTHENTICATE',
  AUTHENTICATION_BYPASSED = 'AUTHENTICATION_BYPASSED',
  AUTHENTICATION_UNAVAILABLE = 'AUTHENTICATION_UNAVAILABLE',
  CHALLENGE_REQUIRED = 'CHALLENGE_REQUIRED',
  LOOKUP_BYPASSED = 'LOOKUP_BYPASSED',
  LOOKUP_ENROLLED = 'LOOKUP_ENROLLED',
  LOOKUP_ERROR = 'LOOKUP_ERROR',
  LOOKUP_NOT_ENROLLED = 'LOOKUP_NOT_ENROLLED',
  UNSUPPORTED_CARD = 'UNSUPPORTED_CARD',
}

/** Indicates the current status of the 3D Secure authentication. */
export enum ThreeDSecureAuthenticationStatusIndicator {
  AUTHENTICATION_REJECTED = 'AUTHENTICATION_REJECTED',
  CHALLENGE_REQUIRED_DECOUPLED_AUTHENTICATION = 'CHALLENGE_REQUIRED_DECOUPLED_AUTHENTICATION',
  CHALLENGE_REQUIRED_FOR_AUTHENTICATION = 'CHALLENGE_REQUIRED_FOR_AUTHENTICATION',
  FAILED_AUTHENTICATION = 'FAILED_AUTHENTICATION',
  INFORMATIONAL_CHALLENGE_PREFERENCE_ACKNOWLEDGED = 'INFORMATIONAL_CHALLENGE_PREFERENCE_ACKNOWLEDGED',
  SUCCESSFUL_ATTEMPTS_TRANSACTION = 'SUCCESSFUL_ATTEMPTS_TRANSACTION',
  SUCCESSFUL_AUTHENTICATION = 'SUCCESSFUL_AUTHENTICATION',
  UNABLE_TO_COMPLETE_AUTHENTICATION = 'UNABLE_TO_COMPLETE_AUTHENTICATION',
}

/** Indicates the type of transaction for 3D Secure authentication. */
export enum ThreeDSecureAuthenticationTransactionType {
  ADD_CARD = 'ADD_CARD',
  CARDHOLDER_VERIFICATION = 'CARDHOLDER_VERIFICATION',
  INSTALLMENT = 'INSTALLMENT',
  MAINTAIN_CARD = 'MAINTAIN_CARD',
  PAYMENT = 'PAYMENT',
  RECURRING = 'RECURRING',
}

/** Indicates whether the card is enrolled in a 3D Secure program. */
export enum ThreeDSecureCardEnrolled {
  /**
   * Authentication has been bypassed. This status will be returned if you set up
   * bypass rules with CardinalCommerce, and they are triggered.
   */
  BYPASS = 'BYPASS',
  /** There was an error in determining whether the card is enrolled in a 3D Secure program. */
  ERROR = 'ERROR',
  /** The card is not enrolled. */
  NO = 'NO',
  /** The DS (directory server) or ACS (access control server) is not available for authentication at the time of the request. */
  UNAVAILABLE = 'UNAVAILABLE',
  /** The card is enrolled. */
  YES = 'YES',
}

/** Configuration for 3D Secure. */
export type ThreeDSecureConfiguration = {
  __typename?: 'ThreeDSecureConfiguration';
  /** Authentication information for initializing Cardinal's songbird.js library. */
  cardinalAuthenticationJWT?: Maybe<Scalars['String']>;
};

/**  The billing address of the cardholder sent with 3D Secure Lookup requests. */
export type ThreeDSecureLookupBillingAddressInput = {
  /** The given (first) name associated with the billing address used for verification. */
  givenName?: Maybe<Scalars['String']>;
  /** The surname (last name) associated with the billing address used for verification. */
  surname?: Maybe<Scalars['String']>;
  /** The billing phone number used for verification. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Line 1 of the billing address used for verification. */
  line1?: Maybe<Scalars['String']>;
  /** Line 2 of the billing address used for verification. */
  line2?: Maybe<Scalars['String']>;
  /** Line 3 of the billing address used for verification. */
  line3?: Maybe<Scalars['String']>;
  /** City or locality of billing address used for verification. */
  locality?: Maybe<Scalars['String']>;
  /** State or region of billing address used for verification. */
  region?: Maybe<Scalars['String']>;
  /** Country code of billing address used for verification. */
  countryCode?: Maybe<Scalars['String']>;
  /** Postal code of billing address used for verification. */
  postalCode?: Maybe<Scalars['String']>;
};

/** Additional information about the cardholder when authenticating through 3D Secure. */
export type ThreeDSecureLookupCardholderInformationInput = {
  /** The billing address of the cardholder. */
  billingAddress?: Maybe<ThreeDSecureLookupBillingAddressInput>;
};

/** Information about the client side lookup process. */
export type ThreeDSecureLookupClientInformationInput = {
  /** Version of the Braintree client-side SDK being used. */
  sdkVersion?: Maybe<Scalars['String']>;
  /** Version of 3D Secure requested when performing the lookup. */
  requestedThreeDSecureVersion?: Maybe<Scalars['String']>;
  /** Number of milliseconds taken for the issuer to collect device data. */
  issuerDeviceDataCollectionMillisecondsElapsed?: Maybe<Scalars['Int']>;
  /** Whether device data collection by the issuer succeeded. */
  issuerDeviceDataCollectionResult?: Maybe<Scalars['Boolean']>;
  /** Number of milliseconds taken for the 3D Secure server to collect device data. */
  threeDSecureServerDeviceDataCollectionMillisecondsElapsed?: Maybe<Scalars['Int']>;
};

/** Data fields containing information from the MPI provider about the 3D Secure Lookup result. */
export type ThreeDSecureLookupData = {
  __typename?: 'ThreeDSecureLookupData';
  /** The URL to use to issue a challenge to the cardholder for 3D Secure authentication. */
  acsUrl?: Maybe<Scalars['String']>;
  /**
   * A unique identifier used by the MPI provider to identify the 3D Secure
   * interaction. The MPI provider provides the framework for determining if a card
   * is enrolled in a 3D Secure program and for facilitating interactions with the issuer.
   */
  authenticationId?: Maybe<Scalars['String']>;
  /** The version of the 3D Secure protocol used in the authentication. */
  version?: Maybe<Scalars['String']>;
  /** The "PAReq" or "Payment Authentication Request" is the encoded request message used to initiate authentication. */
  pareq?: Maybe<Scalars['String']>;
  /** The unique 3D Secure identifier assigned by Braintree to track the 3D Secure call as it progresses. */
  md?: Maybe<Scalars['String']>;
  /** A fully qualified URL that the customer will be redirected to once the authentication completes. */
  termUrl?: Maybe<Scalars['String']>;
};

/**  The shipping address of the transaction to be sent with 3D Secure Lookup requests. */
export type ThreeDSecureLookupShippingAddressInput = {
  /** The given (first) name associated with the shipping address used for verification. */
  givenName?: Maybe<Scalars['String']>;
  /** The surname (last name) associated with the shipping address used for verification. */
  surname?: Maybe<Scalars['String']>;
  /** The shipping phone number used for verification. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Line 1 of the shipping address used for verification. */
  line1?: Maybe<Scalars['String']>;
  /** Line 2 of the shipping address used for verification. */
  line2?: Maybe<Scalars['String']>;
  /** Line 3 of the shipping address used for verification. */
  line3?: Maybe<Scalars['String']>;
  /** City or locality of shipping address used for verification. */
  locality?: Maybe<Scalars['String']>;
  /** State or region of shipping address used for verification. */
  region?: Maybe<Scalars['String']>;
  /** Country code of shipping address used for verification. */
  countryCode?: Maybe<Scalars['String']>;
  /** Postal code of shipping address used for verification. */
  postalCode?: Maybe<Scalars['String']>;
};

/** Indicates the shipping method chosen for the transaction in the 3D Secure lookup. */
export enum ThreeDSecureLookupShippingMethod {
  ELECTRONIC_DELIVERY = 'ELECTRONIC_DELIVERY',
  GROUND = 'GROUND',
  OVERNIGHT_EXPEDITED = 'OVERNIGHT_EXPEDITED',
  PRIORITY = 'PRIORITY',
  SAME_DAY = 'SAME_DAY',
  SHIP_TO_STORE = 'SHIP_TO_STORE',
}

/** Additional information about the transaction when authenticating through 3D Secure. */
export type ThreeDSecureLookupTransactionInformationInput = {
  /** The email associated with the transaction. */
  email?: Maybe<Scalars['String']>;
  /** Indicates the shipping method chosen for the transaction in the 3D Secure lookup. */
  shippingMethod?: Maybe<ThreeDSecureLookupShippingMethod>;
  /** The phone number associated with the transaction. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** The shipping address for the transaction. */
  shippingAddress?: Maybe<ThreeDSecureLookupShippingAddressInput>;
  /** The work phone number associated with the transaction. */
  workPhoneNumber?: Maybe<Scalars['String']>;
  /** Indicates the type of transaction. */
  transactionType?: Maybe<ThreeDSecureAuthenticationTransactionType>;
  /** Indicates the delivery timeframe if applicable. */
  deliveryTimeframe?: Maybe<ThreeDSecureAuthenticationDeliveryTimeframe>;
  /** For electronic delivery, email address to which the product was delivered. */
  deliveryEmail?: Maybe<Scalars['String']>;
  /** Indicates shipping type chosen for the transaction. */
  shippingType?: Maybe<ThreeDSecureAuthenticationShippingType>;
  /** Merchant product code. */
  productCode?: Maybe<ThreeDSecureAuthenticationMerchantProductCode>;
  /** Indicates whether the cardholder is reordering merchandise purchased in a previous order. */
  reorderIndicator?: Maybe<Scalars['Boolean']>;
  /** Indicates whether cardholder is placing an order with a future availability or release date. */
  preorderIndicator?: Maybe<Scalars['Boolean']>;
  /** Expected date that a pre-ordered purchase will be available. */
  preorderDate?: Maybe<Scalars['Date']>;
  /** The purchase amount total for prepaid gift cards. */
  giftCardAmount?: Maybe<Scalars['Amount']>;
  /** ISO 4217 currency code for the gift card purchased. */
  giftCardCurrencyCode?: Maybe<Scalars['CurrencyCodeAlpha']>;
  /** Total count of individual prepaid gift cards purchased. */
  giftCardCount?: Maybe<Scalars['Int']>;
  /** Indicates whether the cardholder created the account during this transaction. */
  accountCreatedDuringTransaction?: Maybe<Scalars['Boolean']>;
  /** Date the cardholder opened the account. */
  accountCreateDate?: Maybe<Scalars['Date']>;
  /**
   * Indicates whether the cardholder changed the account during this transaction.
   * This includes changes to the billing or shipping address, new payment accounts
   * or new users added.
   */
  accountChangedDuringTransaction?: Maybe<Scalars['Boolean']>;
  /**
   * Date the cardholder's account was last changed. This includes changes to the
   * billing or shipping address, new payment accounts or new users added.
   */
  accountChangeDate?: Maybe<Scalars['Date']>;
  /** Indicates whether the cardholder changed or reset the password on the account during this transaction. */
  accountPasswordChangedDuringTransaction?: Maybe<Scalars['Boolean']>;
  /** Date the cardholder changed or reset the password on the account. */
  accountPasswordChangeDate?: Maybe<Scalars['Date']>;
  /** Indicates whether this transaction represents the first use of this shipping address. */
  firstUseOfShippingAddress?: Maybe<Scalars['Boolean']>;
  /** Date when the shipping address used for this transaction was first used. */
  shippingAddressFirstUsageDate?: Maybe<Scalars['Date']>;
  /** Number of transactions (successful or incomplete) for this cardholder account within the last 24 hours. */
  transactionCountDay?: Maybe<Scalars['Int']>;
  /** Number of transactions (successful or incomplete) for this cardholder account within the last year. */
  transactionCountYear?: Maybe<Scalars['Int']>;
  /** Number of attempts that have been made to add a card to this account in the last 24 hours. */
  addCardAttempts?: Maybe<Scalars['Int']>;
  /** Number of purchases with this cardholder account during the previous six months. */
  accountPurchases?: Maybe<Scalars['Int']>;
  /** Indicates whether the merchant experienced suspicious activity (including previous fraud) on the account. */
  suspiciousActivityObserved?: Maybe<Scalars['Boolean']>;
  /** Indicates if the cardholder name on the account is identical to the shipping name used for the transaction. */
  accountNameMatchesShippingName?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the payment method was added to the cardholder account during this transaction. */
  paymentMethodAddedDuringTransaction?: Maybe<Scalars['Boolean']>;
  /** Date the payment method was added to the cardholder account. */
  paymentMethodAddedToAccountDate?: Maybe<Scalars['Date']>;
  /**
   * An override field that a merchant can pass in to set the challenge window size
   * to display to the end cardholder. The ACS will reply with content that is
   * formatted appropriately to this window size to allow for the best user
   * experience. The sizes are width x height in pixels of the window displayed in
   * the cardholder browser window.
   */
  acsWindowSize?: Maybe<ThreeDSecureAuthenticationAcsWindowSize>;
  /**
   * This field indicates the maximum amount of time for all 3DS 2.0 messages to be
   * communicated between all components (in minutes). Minimum is 05. Defaults to 15.
   */
  sdkMaxTimeout?: Maybe<Scalars['Int']>;
  /** Indicates whether cardholder billing and shipping addresses match. */
  billingAddressMatchesShippingAddress?: Maybe<Scalars['Boolean']>;
  /** Additional cardholder account information. */
  accountId?: Maybe<Scalars['String']>;
  /** The IP address of the cardholder. Both IPv4 and IPv6 formats are supported. */
  ipAddress?: Maybe<Scalars['String']>;
  /** Brief Description of items purchased. */
  orderDescription?: Maybe<Scalars['String']>;
  /** Tax amount. */
  taxAmount?: Maybe<Scalars['Amount']>;
  /** The exact content of the HTTP user agent header. */
  userAgent?: Maybe<Scalars['String']>;
  /**
   * Indicates the maximum number of authorizations for installment payments. An
   * integer value greater than 1 indicating the maximum number of permitted
   * authorizations for installment payments.
   */
  installment?: Maybe<Scalars['Int']>;
  /** Datetime of original purchase. */
  purchaseDate?: Maybe<Scalars['Timestamp']>;
  /** The date after which no further recurring authorizations should be performed. */
  recurringEnd?: Maybe<Scalars['Date']>;
  /**
   * Integer value indicating the minimum number of days between recurring
   * authorizations. A frequency of monthly is indicated by the value 28. Multiple
   * of 28 days will be used to indicate months. Example: 6 months = 168.
   */
  recurringFrequency?: Maybe<Scalars['Int']>;
};

/** Results of a merchant-performed 3D Secure authentication. */
export type ThreeDSecurePassThroughInput = {
  /** The value of the electronic commerce indicator (ECI) flag, which indicates the outcome of the 3D Secure authentication. */
  eciFlag: Scalars['ECommerceIndicator'];
  /**
   * Cardholder authentication verification value or CAVV. The main encrypted
   * message issuers and card networks use to verify authentication has occurred.
   * Mastercard uses an AVV (Authentication Verification Value) message and
   * American Express uses an AEVV (American Express Verification Value) message,
   * each of which should also be passed in the cavv parameter.
   */
  cavv?: Maybe<Scalars['String']>;
  /**
   * Transaction identifier resulting from 3D Secure authentication. Uniquely
   * identifies the transaction and sometimes required in the authorization
   * message. Must be base64-encoded. This field will no longer be used in 3D
   * Secure 2 authentications.
   */
  xId?: Maybe<Scalars['String']>;
  /**
   * Transaction identifier resulting from 3D Secure 2 authentication. This field
   * must be supplied for Mastercard Identity Check.
   */
  threeDSecureServerTransactionId?: Maybe<Scalars['String']>;
  /** The version of 3D Secure authentication used for the transaction. Required on Visa and Mastercard authentications. */
  version?: Maybe<Scalars['ThreeDSecureVersion']>;
  /** The 3D Secure authentication response status code. */
  authenticationResponse?: Maybe<Scalars['ThreeDSecureStatusCode']>;
  /** The 3D Secure directory server response. */
  directoryServerResponse?: Maybe<Scalars['ThreeDSecureStatusCode']>;
  /** The algorithm used to generate the CAVV value. This is only returned for Mastercard SecureCode transactions (3DS 1.0). */
  cavvAlgorithm?: Maybe<Scalars['ThreeDSecureCavvAlgorithm']>;
};

/** Top-level input fields for tokenizing a credit card. */
export type TokenizeCreditCardInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Input fields for a credit card. */
  creditCard: CreditCardInput;
  /** Credit card tokenization options. */
  options?: Maybe<TokenizeCreditCardOptionsInput>;
};

/** Credit card tokenization options. */
export type TokenizeCreditCardOptionsInput = {
  /** Whether to run validations on credit card fields. Validations are not run by default. */
  validate?: Maybe<Scalars['Boolean']>;
};

/** Top-level fields returned from a tokenized credit card. */
export type TokenizeCreditCardPayload = {
  __typename?: 'TokenizeCreditCardPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * A one-time-use reference to tokenized sensitive information.
   * @deprecated Use `paymentMethod.id` instead.
   */
  token?: Maybe<Scalars['String']>;
  /**
   * Details about the tokenized card.
   * @deprecated Use `paymentMethod.details` instead.
   */
  creditCard?: Maybe<CreditCardDetails>;
  /**
   * A single-use payment method.
   * @deprecated Use `paymentMethod` instead.
   */
  singleUseToken?: Maybe<PaymentMethod>;
  /** A single-use payment method. */
  paymentMethod?: Maybe<PaymentMethod>;
  /**
   * Information about the [customer authentication regulation environment](https://developers.braintreepayments.com/guides/3d-secure/migration/javascript/v3#authentication-insight)
   * that applies to the payment method when processed with the provided merchant
   * account. This can be used to determine whether to perform 3D Secure
   * authentication.
   */
  authenticationInsight?: Maybe<AuthenticationInsight>;
};

/** Top-level fields returned from a tokenized credit card. */
export type TokenizeCreditCardPayloadauthenticationInsightArgs = {
  input: AuthenticationInsightInput;
};

/** Top-level input fields for tokenizing Custom Actions. */
export type TokenizeCustomActionsPaymentMethodInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Input fields for a Custom Actions payment method. */
  customActionsPaymentMethod: CustomActionsPaymentMethodInput;
};

/** Top-level fields returned from tokenizing a CustomActionsPaymentMethod. */
export type TokenizeCustomActionsPaymentMethodPayload = {
  __typename?: 'TokenizeCustomActionsPaymentMethodPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A single-use payment method. */
  paymentMethod?: Maybe<PaymentMethod>;
};

/** Top-level input fields for tokenizing a CVV. */
export type TokenizeCvvInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * A 3 or 4 digit card verification value assigned to credit cards. The CVV will
   * never be stored, but it can be provided with one-time requests to verify the card.
   */
  cvv: Scalars['String'];
};

/** Top-level fields returned from a tokenized CVV. */
export type TokenizeCvvPayload = {
  __typename?: 'TokenizeCvvPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A single-use payment method. */
  singleUseToken?: Maybe<PaymentMethod>;
};

/** Top-level input field for tokenizing a network token. */
export type TokenizeNetworkTokenInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Input fields for a network token object. */
  networkToken: NetworkTokenInput;
};

/** Top-level fields returned from a tokenized Network Token. */
export type TokenizeNetworkTokenPayload = {
  __typename?: 'TokenizeNetworkTokenPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A single-use payment method. */
  paymentMethod?: Maybe<PaymentMethod>;
};

/** Top-level input field for tokenizing a Samsung Pay card. */
export type TokenizeSamsungPayCardInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Input fields for a Samsung Pay card. */
  samsungPayCard: SamsungPayCardInput;
};

/** Top-level fields returned from a tokenized Samsung Pay card. */
export type TokenizeSamsungPayCardPayload = {
  __typename?: 'TokenizeSamsungPayCardPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * A one-time-use reference to tokenized sensitive information.
   * @deprecated Use `paymentMethod` instead.
   */
  singleUseToken?: Maybe<PaymentMethod>;
  /** A single-use payment method. */
  paymentMethod?: Maybe<PaymentMethod>;
};

/** Top-level input fields for tokenizing a US bank account. */
export type TokenizeUsBankAccountInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Input fields for a US bank account object. */
  usBankAccount: UsBankAccountInput;
};

/** Top-level fields returned from a tokenized US bank account. */
export type TokenizeUsBankAccountPayload = {
  __typename?: 'TokenizeUsBankAccountPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A single-use payment method. */
  paymentMethod?: Maybe<PaymentMethod>;
};

/** Top-level input fields for tokenizing a US bank login. */
export type TokenizeUsBankLoginInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Input fields for a US bank login. */
  usBankLogin: UsBankLoginInput;
};

/** A charge on a payment method. */
export type Transaction = Node &
  Payment & {
    __typename?: 'Transaction';
    /** Unique identifier. */
    id: Scalars['ID'];
    /** Legacy unique identifier. */
    legacyId: Scalars['ID'];
    /** Date and time when the transaction was created. */
    createdAt?: Maybe<Scalars['Timestamp']>;
    /**
     * Snapshot of payment method details used to create the transaction, preserved
     * at the time the transaction was created. This will always be present.
     */
    paymentMethodSnapshot?: Maybe<PaymentMethodSnapshot>;
    /**
     * The multi-use payment method associated with the transaction. Only present if
     * a multi-use payment method was used to create the transaction and it has not
     * been deleted. The details of this PaymentMethod may have changed since the
     * transaction was created; details used for the transaction can be found in the
     * `paymentMethodSnapshot` field.
     */
    paymentMethod?: Maybe<PaymentMethod>;
    /**
     * The amount charged in this transaction. For transactions that are partially
     * captured, this amount will be the cummulative amount captured on this transaction.
     */
    amount?: Maybe<MonetaryAmount>;
    /** Collection of custom field/value pairs. Custom fields are [defined in the Control Panel](https://articles.braintreepayments.com/control-panel/custom-fields#store-and-pass-back-fields). */
    customFields?: Maybe<Array<CustomField>>;
    /** The ID of the merchant account that processed this transaction. */
    merchantAccountId?: Maybe<Scalars['ID']>;
    /** The order ID for this transaction. For PayPal transactions, the PayPal Invoice ID. */
    orderId?: Maybe<Scalars['String']>;
    /** A purchase order identification value you associate with this transaction. */
    purchaseOrderNumber?: Maybe<Scalars['String']>;
    /** The current status of this transaction. */
    status?: Maybe<PaymentStatus>;
    /**
     * Fields describing the payment processor response.
     * @deprecated Use relevant events in `statusEvents` instead.
     */
    processorResponse?: Maybe<TransactionAuthorizationProcessorResponse>;
    /** Risk data evaluated for this transaction. */
    riskData?: Maybe<RiskData>;
    /** Fields used to define what will appear on customers' credit card statements for a specific purchase. */
    descriptor?: Maybe<TransactionDescriptor>;
    /**
     * The records of all statuses this transaction has passed through, with
     * additional information on why each status occurred. Returned in reverse
     * chronological order, with the most recent event first in the list.
     */
    statusHistory?: Maybe<Array<PaymentStatusEvent>>;
    /**
     * If the transaction request was performed through a shopping cart provider or
     * Braintree partner, this field will have a string identifier for that shopping
     * cart provider or partner. For PayPal transactions, this maps to the PayPal
     * account's bn_code.
     */
    channel?: Maybe<Scalars['String']>;
    /** How the transaction was created. */
    source?: Maybe<PaymentSource>;
    /** Customer associated with the transaction, if applicable. */
    customer?: Maybe<Customer>;
    /** Shipping information. */
    shipping?: Maybe<TransactionShipping>;
    /** Tax information. */
    tax?: Maybe<TransactionTaxInformation>;
    /** Discount amount that was included in the total transaction amount. */
    discountAmount?: Maybe<Scalars['String']>;
    /** Line items for this transaction. */
    lineItems?: Maybe<Array<TransactionLineItem>>;
    /** The list of refunds issued against this transaction. */
    refunds?: Maybe<Array<Refund>>;
    /**
     * For transactions created or captured using the `partialCaptureTransaction`
     * mutation. This field links a given transaction to its original authorization
     * or all its partial captures.
     */
    partialCaptureDetails?: Maybe<PartialCaptureDetails>;
    /** A collection of disputes associated with the transaction. */
    disputes?: Maybe<Array<Dispute>>;
    /**
     * If the transaction request was performed using payment information from a
     * third party via the Grant API, Shared Vault or Google Pay, these fields will
     * capture information about the third party. These fields are primarily useful
     * for the merchant of record.
     */
    facilitatorDetails?: Maybe<FacilitatorDetails>;
    /**
     * The disbursement details associated with this transaction. This field is only
     * available after the transaction is SETTLED and if you have an eligible
     * merchant account.
     */
    disbursementDetails?: Maybe<DisbursementDetails>;
  };

/** Detailed response information from the processor when attempting to authorize a transaction. */
export type TransactionAuthorizationProcessorResponse = {
  __typename?: 'TransactionAuthorizationProcessorResponse';
  /**
   * A code based on the response from the processor, indicating the result of
   * attempting to authorize this transaction. See the [list of possible processor
   * response codes for authorization](https://developers.braintreepayments.com/reference/general/processor-responses/authorization-responses).
   */
  legacyCode?: Maybe<Scalars['String']>;
  /** The text explanation of the processor response legacyCode. */
  message?: Maybe<Scalars['String']>;
  /** The processing bank's response to the provided CVV. */
  cvvResponse?: Maybe<AvsCvvResponseCode>;
  /** The processing bank's response to the provided billing postal or zip code. */
  avsPostalCodeResponse?: Maybe<AvsCvvResponseCode>;
  /** The processing bank's response to the provided billing street address. */
  avsStreetAddressResponse?: Maybe<AvsCvvResponseCode>;
  /** The processor's unique ID or "code" for the authorization. */
  authorizationId?: Maybe<Scalars['String']>;
};

/** A paginated list of transactions. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** A list of transactions. */
  edges?: Maybe<Array<Maybe<TransactionConnectionEdge>>>;
  /** Information about the page of transactions contained in `edges`. */
  pageInfo: PageInfo;
};

/** A transaction within a TransactionConnection. */
export type TransactionConnectionEdge = {
  __typename?: 'TransactionConnectionEdge';
  /** This transaction's location within the TransactionConnection. Used for requesting additional pages. */
  cursor?: Maybe<Scalars['String']>;
  /** The transaction. */
  node?: Maybe<Transaction>;
};

/** Fields used to define what will appear on a customer's bank statement for a specific purchase. */
export type TransactionDescriptor = {
  __typename?: 'TransactionDescriptor';
  /** The value in the business name field of a customer's statement. */
  name?: Maybe<Scalars['String']>;
  /** The value in the phone number field of a customer's statement. */
  phone?: Maybe<Scalars['String']>;
  /** The value in the URL/web address field of a customer's statement. */
  url?: Maybe<Scalars['String']>;
};

/** Fields used to define what will appear on a customer's bank statement for a specific purchase. */
export type TransactionDescriptorInput = {
  /** The value in the business name field of a customer's statement. */
  name?: Maybe<Scalars['String']>;
  /** The value in the phone number field of a customer's statement. */
  phone?: Maybe<Scalars['String']>;
  /** The value in the URL/web address field of a customer's statement. */
  url?: Maybe<Scalars['String']>;
};

/** Input fields for creating a transaction. */
export type TransactionInput = {
  /**
   * Billing amount of the request. This value must be greater than 0, and must
   * match the currency format of the merchant account. This can only contain
   * numbers and one decimal point (e.g. x.xx). Can't be greater than the maximum
   * allowed by the processor.
   */
  amount: Scalars['Amount'];
  /**
   * Merchant account ID used to process the transaction. Currency is also
   * determined by merchant account ID. If no merchant account ID is specified, we
   * will use your default merchant account.
   */
  merchantAccountId?: Maybe<Scalars['ID']>;
  /**
   * Additional information about the transaction. On PayPal transactions, this
   * field maps to the PayPal invoice number. PayPal invoice numbers must be unique
   * in your PayPal business account. Maximum 255 characters or 127 for PayPal transactions.
   */
  orderId?: Maybe<Scalars['String']>;
  /**
   * A purchase order identification value you associate with this transaction.
   *
   * *Required for Level 2 processing*.
   */
  purchaseOrderNumber?: Maybe<Scalars['String']>;
  /** Customer device information, which is sent directly to supported processors for fraud analysis. */
  riskData?: Maybe<RiskDataInput>;
  /**
   * Collection of custom field/value pairs. You must [set up each custom field in the Control Panel](https://articles.braintreepayments.com/control-panel/custom-fields#creating-a-custom-field)
   * prior to passing it with a request.
   */
  customFields?: Maybe<Array<CustomFieldInput>>;
  /** Fields used to define what will appear on a customer's bank statement for a specific purchase. */
  descriptor?: Maybe<TransactionDescriptorInput>;
  /** The type of recurring payment the transaction represents. */
  recurring?: Maybe<RecurringType>;
  /**
   * For partners and shopping carts only. If you are a shopping cart provider or
   * other Braintree partner, pass a string identifier for your service. For PayPal
   * transactions, this maps to paypal.bn_code.
   */
  channel?: Maybe<Scalars['String']>;
  /** If charging a single-use payment method, optional ID of a customer to associate the transaction with. */
  customerId?: Maybe<Scalars['ID']>;
  /**
   * Shipping information.
   *
   * *Required for Level 3 processing*.
   */
  shipping?: Maybe<TransactionShippingInput>;
  /**
   * Tax information about the transaction.
   *
   * *Required for Level 2 processing*.
   */
  tax?: Maybe<TransactionTaxInput>;
  /**
   * Discount amount that was included in the total transaction amount. Does not
   * add to the total amount the payment method will be charged. This value can't be negative.
   *
   * *Required for Level 3 processing*.
   */
  discountAmount?: Maybe<Scalars['String']>;
  /**
   * Line items for this transaction. Up to 249 line items may be specified.
   *
   * *Required for Level 3 processing*.
   */
  lineItems?: Maybe<Array<TransactionLineItemInput>>;
  /**
   * Results of a merchant-performed 3D Secure authentication. You will only need
   * to use these fields if you've performed your own integration with a 3D Secure
   * MPI provider (e.g. Cardinal Centinel). Otherwise, Braintree's SDKs handle this
   * for you in our standard 3D Secure integration.
   */
  threeDSecurePassThrough?: Maybe<ThreeDSecurePassThroughInput>;
};

/**
 * The [transaction-level fee report](https://articles.braintreepayments.com/control-panel/reporting/transaction-level-fee-report)
 * provides a breakdown of fees per individual transactions and refunds. This type
 * is no longer in use; see `PaymentLevelFeeReport` instead.
 */
export type TransactionLevelFeeReport = {
  __typename?: 'TransactionLevelFeeReport';
  /** The URL where you can access the requested report. */
  url?: Maybe<Scalars['String']>;
};

/** Data for individual line items on a transaction. */
export type TransactionLineItem = {
  __typename?: 'TransactionLineItem';
  /** Item name. */
  name?: Maybe<Scalars['String']>;
  /** Indicates whether the line item is a sale or refund. */
  kind?: Maybe<TransactionLineItemType>;
  /** Number of units of the item purchased. */
  quantity?: Maybe<Scalars['String']>;
  /** Per-unit price of the item. */
  unitAmount?: Maybe<Scalars['String']>;
  /** Total price amount for the line item, i.e. quantity multiplied by unit amount. */
  totalAmount?: Maybe<Scalars['String']>;
  /** Per-unit tax price of the item. */
  unitTaxAmount?: Maybe<Scalars['String']>;
  /** Tax amount for the line item. */
  taxAmount?: Maybe<Scalars['String']>;
  /** The discount amount of the line item. */
  discountAmount?: Maybe<Scalars['String']>;
  /** The unit of measure or the unit of measure code. */
  unitOfMeasure?: Maybe<Scalars['String']>;
  /** Product or UPC code for the item. */
  productCode?: Maybe<Scalars['String']>;
  /**
   * Code used to classify items purchased and track the total amount spent across
   * various categories of products and services. Different corporate purchasing
   * organizations may use different standards, but the [United Nations Standard
   * Products and Services Code (UNSPSC)](https://www.unspsc.org/) is frequently used.
   */
  commodityCode?: Maybe<Scalars['String']>;
  /** Item description. */
  description?: Maybe<Scalars['String']>;
  /** The URL to product information. */
  url?: Maybe<Scalars['String']>;
};

/** Data for individual line items on a transaction. */
export type TransactionLineItemInput = {
  /**
   * Item name. Maximum 35 characters, or 127 characters for PayPal transactions.
   *
   * *Required for Level 3 processing*.
   */
  name: Scalars['String'];
  /**
   * Indicates whether the line item is a sale or refund.
   *
   * *Required for Level 3 processing*.
   */
  kind: TransactionLineItemType;
  /**
   * Number of units of the item purchased. Can include up to 4 decimal places. This value can't be negative or zero.
   *
   * *Required for Level 3 processing*.
   */
  quantity: Scalars['String'];
  /**
   * Per-unit price of the item. Maximum 4 decimal places, or 2 decimal places for
   * PayPal transactions. This value can't be negative or zero.
   *
   * *Required for Level 3 processing*.
   */
  unitAmount: Scalars['String'];
  /**
   * Total price amount for the line item: quantity multiplied by unitAmount. Can include up to 2 decimal places.
   *
   * *Required for Level 3 processing*.
   */
  totalAmount: Scalars['String'];
  /**
   * Per-unit tax price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
   *
   * *Required for Level 3 processing*.
   */
  unitTaxAmount?: Maybe<Scalars['String']>;
  /**
   * Tax amount for the line item. Can include up to 2 decimal places. This value can't be negative.
   *
   * *Required for Level 3 processing*.
   */
  taxAmount?: Maybe<Scalars['String']>;
  /**
   * Amount of discount for the line item. Can include up to 2 decimal places. This value can't be negative.
   *
   * *Required for Level 3 processing*.
   */
  discountAmount?: Maybe<Scalars['String']>;
  /**
   * The unit of measure or the unit of measure code. Maximum 12 characters.
   *
   * *Required for Level 3 processing*.
   */
  unitOfMeasure?: Maybe<Scalars['String']>;
  /**
   * Product or UPC code for the item. Maximum 12 characters, or 127 characters for PayPal transactions.
   *
   * *Required for Level 3 processing*.
   */
  productCode?: Maybe<Scalars['String']>;
  /**
   * Code used to classify items purchased and track the total amount spent across
   * various categories of products and services. Different corporate purchasing
   * organizations may use different standards, but the [United Nations Standard
   * Products and Services Code (UNSPSC)](https://www.unspsc.org/) is frequently
   * used. Maximum 12 characters.
   *
   * *Required for Level 3 processing*.
   */
  commodityCode?: Maybe<Scalars['String']>;
  /**
   * Item description. Maximum 127 characters.
   *
   * *Required for Level 3 processing*.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * A URL to information about the product.
   *
   * *Required for Level 3 processing*.
   */
  url?: Maybe<Scalars['String']>;
};

/** Indicates whether a transaction line item is a debit (sale) or credit (refund). */
export enum TransactionLineItemType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

/** Top-level output field from creating a transaction. */
export type TransactionPayload = {
  __typename?: 'TransactionPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The transaction representing the charge on the payment method. */
  transaction?: Maybe<Transaction>;
};

/**
 * A union of all possible results of a transaction reversal. If the transaction is
 * settled, a refund will be issued and a Refund object will be returned.
 * Otherwise, the transaction will be voided and a Transaction object will be returned.
 */
export type TransactionReversal = Refund | Transaction;

/** Input fields for searching for transactions. */
export type TransactionSearchInput = {
  /** Find transactions with an ID or IDs. */
  id?: Maybe<SearchValueInput>;
  /** Find transactions with a given transaction status. */
  status?: Maybe<SearchTransactionStatusInput>;
  /** Find transactions based on the given transaction status transition times. */
  statusTransition?: Maybe<SearchTransactionStatusTransitionInput>;
  /** Find transactions based on the time they were created. */
  createdAt?: Maybe<SearchTimestampInput>;
  /** Find transactions for a given amount or currency. */
  amount?: Maybe<MonetaryAmountSearchInput>;
  /** Find transactions with a given orderId. */
  orderId?: Maybe<SearchTextInput>;
  /** Find payments processed through a merchant account ID or IDs. */
  merchantAccountId?: Maybe<SearchValueInput>;
  /** Find transactions with a given customer. */
  customer?: Maybe<SearchCustomerInput>;
  /** Find transactions created by charging payment methods of the given type. */
  paymentMethodSnapshotType?: Maybe<SearchPaymentMethodSnapshotTypeInput>;
  /**
   * Find transactions by their disbursement date. Only use this search criteria if
   * you have an eligible merchant account. Note that transactions can only be
   * disbursed after they reach the SETTLED status.
   */
  disbursementDate?: Maybe<SearchDateInput>;
  /** Find transactions created with a given transaction source. */
  source?: Maybe<SearchTransactionSourceInput>;
  /** Find transactions created by a third party via the Grant API using a given OAuth application client ID. */
  facilitatorOAuthApplicationClientId?: Maybe<SearchValueInput>;
};

/** Detailed response information from the processor when attempting to settle a transaction. */
export type TransactionSettlementProcessorResponse = {
  __typename?: 'TransactionSettlementProcessorResponse';
  /**
   * A code based on the response from the processor, indicating the result of
   * attempting to settle this transaction. See the [list of possible processor
   * response codes for settlement](https://developers.braintreepayments.com/reference/general/processor-responses/settlement-responses).
   */
  legacyCode?: Maybe<Scalars['String']>;
  /** The text explanation of the processor response legacyCode. */
  message?: Maybe<Scalars['String']>;
  /**
   * The processing bank's response to the provided CVV.
   * @deprecated AVS and CVV checks do not take place when capturing a transaction, only when authorizing. Use the `processorResponse` on an authorization-related `PaymentStatusEvent` instead.
   */
  cvvResponse?: Maybe<AvsCvvResponseCode>;
  /**
   * The processing bank's response to the provided billing postal or zip code.
   * @deprecated AVS and CVV checks do not take place when capturing a transaction, only when authorizing. Use the `processorResponse` on an authorization-related `PaymentStatusEvent` instead.
   */
  avsPostalCodeResponse?: Maybe<AvsCvvResponseCode>;
  /**
   * The processing bank's response to the provided billing street address.
   * @deprecated AVS and CVV checks do not take place when capturing a transaction, only when authorizing. Use the `processorResponse` on an authorization-related `PaymentStatusEvent` instead.
   */
  avsStreetAddressResponse?: Maybe<AvsCvvResponseCode>;
};

/** Information related to shipping a physical product. */
export type TransactionShipping = {
  __typename?: 'TransactionShipping';
  /** Shipping address information. */
  shippingAddress?: Maybe<Address>;
  /** The shipping cost of the entire transaction. */
  shippingAmount?: Maybe<Scalars['Amount']>;
  /** The postal code of the source shipping location. */
  shipsFromPostalCode?: Maybe<Scalars['String']>;
};

/** Information related to shipping a physical product. */
export type TransactionShippingInput = {
  /**
   * Shipping destination address information.
   *
   * *Required for Level 3 processing*.
   */
  shippingAddress?: Maybe<AddressInput>;
  /**
   * Shipping cost on the entire transaction.
   *
   * *Required for Level 3 processing*.
   */
  shippingAmount?: Maybe<Scalars['String']>;
  /**
   * The postal code of the source shipping location, in any country's format.
   *
   * *Required for Level 3 processing*.
   */
  shipsFromPostalCode?: Maybe<Scalars['String']>;
};

/** Information related to taxes on the transaction. */
export type TransactionTaxInformation = {
  __typename?: 'TransactionTaxInformation';
  /** The amount of tax that was included in the total transaction amount. */
  taxAmount?: Maybe<Scalars['Amount']>;
  /** Whether the transaction should be considered eligible for tax exemption. */
  taxExempt?: Maybe<Scalars['Boolean']>;
};

/** Information related to taxes on the transaction. */
export type TransactionTaxInput = {
  /**
   * Amount of tax that was included in the total transaction amount. Does not add
   * to the total amount the payment method will be charged.
   *
   * *Required for Level 2 processing* unless `taxExempt` is `true`.
   */
  taxAmount?: Maybe<Scalars['Amount']>;
  /**
   * Whether the transaction should be considered eligible for tax exemption.
   *
   * *Required for Level 2 processing*.
   */
  taxExempt?: Maybe<Scalars['Boolean']>;
};

/** Configuration for UnionPay cards. */
export type UnionPayConfiguration = {
  __typename?: 'UnionPayConfiguration';
  /** The Braintree merchant account ID with UnionPay processing enabled. */
  merchantAccountId?: Maybe<Scalars['String']>;
};

/** Top-level field for updating a customer. */
export type UpdateCustomerInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of the customer to be updated. */
  customerId: Scalars['ID'];
  /** Input fields for the updates to be made on the customer. */
  customer?: Maybe<CustomerInput>;
};

/** Top-level fields returned when updating a customer. */
export type UpdateCustomerPayload = {
  __typename?: 'UpdateCustomerPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Information about the customer that was updated. */
  customer?: Maybe<Customer>;
};

/** Input for creating or updating custom fields on a transaction. */
export type UpdateTransactionCustomFieldsInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the transaction to update. */
  transactionId: Scalars['ID'];
  /**
   * The list of custom fields to update. You must [set up each custom field in the Control Panel](https://articles.braintreepayments.com/control-panel/custom-fields#creating-a-custom-field)
   * prior to passing it with a request.
   */
  customFields: Array<CustomFieldInput>;
};

/** Top-level output field from updating custom fields for a specific transaction. */
export type UpdateTransactionCustomFieldsPayload = {
  __typename?: 'UpdateTransactionCustomFieldsPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * A list of all custom fields on the updated transaction. Custom fields are
   * [defined in the Control Panel](https://articles.braintreepayments.com/control-panel/custom-fields#store-and-pass-back-fields).
   */
  customFields?: Maybe<Array<CustomField>>;
};

/** Details about the customer's acceptance of ACH terms. */
export type UsBankAccountAchMandate = {
  __typename?: 'UsBankAccountAchMandate';
  /** The text the customer agreed to when setting up ACH. */
  acceptanceText?: Maybe<Scalars['String']>;
  /** Date and time when the text terms were accepted. */
  acceptedAt?: Maybe<Scalars['Timestamp']>;
};

/** A billing address for a US bank account. This is a subset of the fields required on `AddressInput`. */
export type UsBankAccountBillingAddressInput = {
  /** The street address. */
  streetAddress: Scalars['String'];
  /** The extended address information—such as an apartment or suite number. */
  extendedAddress?: Maybe<Scalars['String']>;
  /** The city. */
  city: Scalars['String'];
  /** The state. */
  state: UsStateCode;
  /** The ZIP code. */
  zipCode: Scalars['UsZipCode'];
};

/** The name of the owner of a business US bank account. */
export type UsBankAccountBusinessOwnerInput = {
  /** The name of the business that owns the account. */
  businessName: Scalars['String'];
};

/** Configuration for US bank account processing. */
export type UsBankAccountConfiguration = {
  __typename?: 'UsBankAccountConfiguration';
  /** The route ID used to process a US bank account payment. */
  routeId?: Maybe<Scalars['String']>;
  /** The public key for Plaid to use to log in to a bank account. */
  plaidPublicKey?: Maybe<Scalars['String']>;
};

/** Details about a US bank account. */
export type UsBankAccountDetails = {
  __typename?: 'UsBankAccountDetails';
  /**
   * The name of the accountholder. This is either the business name for a business
   * account, or the owner's full name for an individual account.
   */
  accountholderName?: Maybe<Scalars['String']>;
  /** The bank account type. */
  accountType?: Maybe<UsBankAccountType>;
  /** The ownership type of the account, i.e. business or personal. */
  ownershipType?: Maybe<UsBankAccountOwnershipType>;
  /** The name of the bank at which the account exists. */
  bankName?: Maybe<Scalars['String']>;
  /** The last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** The routing number of the bank. */
  routingNumber?: Maybe<Scalars['String']>;
  /** Whether or not the bank account has been verified and can be transacted on. */
  verified?: Maybe<Scalars['Boolean']>;
  /** NACHA-mandated proof of acceptance of ACH terms. */
  achMandate?: Maybe<UsBankAccountAchMandate>;
};

/** The name of the owner of a personal US bank account. */
export type UsBankAccountIndividualOwnerInput = {
  /** The first name of the accountholder. */
  firstName: Scalars['String'];
  /** The last name of the accountholder. */
  lastName: Scalars['String'];
};

/** Input fields for a US bank account object. */
export type UsBankAccountInput = {
  /** The account number of the bank account. */
  accountNumber: Scalars['UsBankAccountNumber'];
  /** The routing number of the bank that holds the account. */
  routingNumber: Scalars['UsBankRoutingNumber'];
  /** The type of account. */
  accountType: UsBankAccountType;
  /** Information about the business that owns the account. This should only be specified for business accounts. */
  businessOwner?: Maybe<UsBankAccountBusinessOwnerInput>;
  /** Information about the individual that owns the account. This should only be specified for individual accounts. */
  individualOwner?: Maybe<UsBankAccountIndividualOwnerInput>;
  /** The billing address of the account. */
  billingAddress?: Maybe<UsBankAccountBillingAddressInput>;
  /** Language used to prove that you have the customer's explicit permission to debit their bank account. */
  achMandate: Scalars['String'];
};

/** The ownership type of US Bank Account. */
export enum UsBankAccountOwnershipType {
  BUSINESS = 'BUSINESS',
  PERSONAL = 'PERSONAL',
}

/** The type of US Bank Account. */
export enum UsBankAccountType {
  CHECKING = 'CHECKING',
  SAVINGS = 'SAVINGS',
}

/** Information specific to verifications of US bank account payment methods. */
export type UsBankAccountVerificationDetails = {
  __typename?: 'UsBankAccountVerificationDetails';
  /** Type of US bank account verification performed. */
  method?: Maybe<UsBankAccountVerificationMethod>;
  /**
   * Time at which the verification was determined to be successful or not. If
   * successful, at this time the payment method will be marked `verified` and you
   * will be able to charge it.
   */
  verificationDeterminedAt?: Maybe<Scalars['Timestamp']>;
};

/** The type of verification on a US bank account payment method. See our [ACH guide](https://articles.braintreepayments.com/guides/payment-methods/ach#verification-methods). */
export enum UsBankAccountVerificationMethod {
  /** Verification conducted independently by the merchant, not through Braintree. */
  INDEPENDENT_CHECK = 'INDEPENDENT_CHECK',
  /**
   * Verification by micro-deposits transferred to the bank account, which the
   * customer must then confirm. The most reliable method, but takes additional time.
   */
  MICRO_TRANSFERS = 'MICRO_TRANSFERS',
  /**
   * Verification via account information. Will complete the verification process
   * immediately, but is not supported by all banks.
   */
  NETWORK_CHECK = 'NETWORK_CHECK',
  /**
   * Verification at the point of tokenization. Requires integration with a
   * third-party provider. Because this requires a different tokenization flow,
   * this method of verification is only supported for vaulting tokenized US bank
   * account logins, and is not supported when re-verifying a US bank account
   * payment method.
   */
  TOKENIZED_CHECK = 'TOKENIZED_CHECK',
}

/** Input fields for a US bank login object. */
export type UsBankLoginInput = {
  /** The public token returned from the bank login. */
  publicToken: Scalars['String'];
  /** The login provider account ID used for the bank login. */
  accountId: Scalars['String'];
  /** The type of account. */
  accountType: UsBankAccountType;
  /** Information about the business that owns the account. This should only be specified for business accounts. */
  businessOwner?: Maybe<UsBankAccountBusinessOwnerInput>;
  /** Information about the individual that owns the account. This should only be specified for individual accounts. */
  individualOwner?: Maybe<UsBankAccountIndividualOwnerInput>;
  /** The billing address of the account. */
  billingAddress?: Maybe<UsBankAccountBillingAddressInput>;
  /** Language used to prove that you have the customer's explicit permission to debit their bank account. */
  achMandate: Scalars['String'];
};

/** Details about the user. */
export type User = {
  __typename?: 'User';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Email address. */
  email?: Maybe<Scalars['String']>;
  /** Current status. */
  status?: Maybe<UserStatus>;
  /** Full name. */
  name?: Maybe<Scalars['String']>;
  /** Associated roles. */
  roles?: Maybe<Array<Role>>;
};

/** The status of the user. */
export enum UserStatus {
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
  PASSIVE = 'PASSIVE',
  PENDING = 'PENDING',
  SUSPENDED = 'SUSPENDED',
}

/** A two-letter code representing a US state or territory. */
export enum UsStateCode {
  AK = 'AK',
  AL = 'AL',
  AR = 'AR',
  AS = 'AS',
  AZ = 'AZ',
  CA = 'CA',
  CO = 'CO',
  CT = 'CT',
  DC = 'DC',
  DE = 'DE',
  FL = 'FL',
  GA = 'GA',
  GU = 'GU',
  HI = 'HI',
  IA = 'IA',
  ID = 'ID',
  IL = 'IL',
  IN = 'IN',
  KS = 'KS',
  KY = 'KY',
  LA = 'LA',
  MA = 'MA',
  MD = 'MD',
  ME = 'ME',
  MI = 'MI',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MS = 'MS',
  MT = 'MT',
  NC = 'NC',
  ND = 'ND',
  NE = 'NE',
  NH = 'NH',
  NJ = 'NJ',
  NM = 'NM',
  NV = 'NV',
  NY = 'NY',
  OH = 'OH',
  OK = 'OK',
  OR = 'OR',
  PA = 'PA',
  PR = 'PR',
  RI = 'RI',
  SC = 'SC',
  SD = 'SD',
  TN = 'TN',
  TX = 'TX',
  UM = 'UM',
  UT = 'UT',
  VA = 'VA',
  VI = 'VI',
  VT = 'VT',
  WA = 'WA',
  WI = 'WI',
  WV = 'WV',
  WY = 'WY',
}

/** Top-level input field for vaulting a limited use PayPal account. */
export type VaultLimitedUsePayPalAccountInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of an existing single-use PayPal account generated using the order flow. */
  paymentMethodId: Scalars['ID'];
  /** ID of the customer to associate the resulting payment method with. */
  customerId?: Maybe<Scalars['ID']>;
  /** Input fields that provide information about the resulting PayPal account. */
  options?: Maybe<VaultLimitedUsePayPalAccountOptionsInput>;
};

/** Input fields that provide information about the resulting PayPal account. */
export type VaultLimitedUsePayPalAccountOptionsInput = {
  /** The total amount of the order. This will be the limit to how much may be captured on the resulting payment method. */
  amount?: Maybe<Scalars['Amount']>;
  /** Variable passed directly to PayPal for your own tracking purposes. Customers do not see this value. */
  customField?: Maybe<Scalars['String']>;
  /** Description of the transaction that is displayed to customers in PayPal email receipts. */
  description?: Maybe<Scalars['String']>;
  /**
   * The PayPal invoice number. It must be unique in your PayPal business account
   * and can contain a maximum of 127 characters. If specified, transactions
   * created from the resulting payment method will have this orderId.
   */
  orderId?: Maybe<Scalars['String']>;
  /** Shipping destination address information. */
  shippingAddress?: Maybe<AddressInput>;
};

/** Top-level input field for vaulting a payment method so it can be used multiple times. */
export type VaultPaymentMethodInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of an existing single-use payment method to be vaulted. */
  paymentMethodId: Scalars['ID'];
  /**
   * Deprecated: This field is included for supporting legacy clients. Please use `verification.merchantAccountId` instead.
   *
   * ID of the merchant account to use when verifying the payment method.
   */
  verificationMerchantAccountId?: Maybe<Scalars['ID']>;
  /** Input fields that specify options for verifying the vaulted payment method, if it is of a type that supports verification. */
  verification?: Maybe<VaultPaymentMethodVerificationOptionsInput>;
  /** ID of the customer to associate the resulting multi-use payment method with. */
  customerId?: Maybe<Scalars['ID']>;
  /**
   * Results of a merchant-performed 3D Secure authentication. You will only need
   * to use these fields if you've performed your own integration with a 3D Secure
   * MPI provider (e.g. Cardinal Centinel). Otherwise, Braintree's SDKs handle this
   * for you in our standard 3D Secure integration.
   */
  threeDSecurePassThrough?: Maybe<ThreeDSecurePassThroughInput>;
};

/** Top-level output field from vaulting a payment method. */
export type VaultPaymentMethodPayload = {
  __typename?: 'VaultPaymentMethodPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A payment method that has been stored in a merchant's vault and can be reused. */
  paymentMethod?: Maybe<PaymentMethod>;
  /** The verification that was run on the payment method prior to vaulting. */
  verification?: Maybe<Verification>;
};

/** Input fields that specify options for verifying the vaulted payment method. */
export type VaultPaymentMethodVerificationOptionsInput = {
  /**
   * ID of the merchant account to use when verifying the payment method. The
   * verification will use the default merchant account if this field is left blank.
   */
  merchantAccountId?: Maybe<Scalars['ID']>;
  /**
   * Whether to opt-out of payment method verification. Payment methods that
   * support verification are verified by default. Clients should only pass `true`
   * in the uncommon scenario that the payment method has been verified externally to Braintree.
   */
  skip?: Maybe<Scalars['Boolean']>;
};

/** Top-level input fields for importing and vaulting a PayPal Billing Agreement. */
export type VaultPayPalBillingAgreementInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of a PayPal Billing Agreement, that was not created through Braintree, to import and vault. */
  billingAgreementId: Scalars['String'];
  /** Optional ID of the customer to associate the resulting payment method with. */
  customerId?: Maybe<Scalars['ID']>;
  /**
   * Optional ID of the merchant account associated with the linked PayPal account
   * to be used to retrieve billing agreement details from PayPal. Only used for
   * merchants with the PayPal multi-account feature enabled in Braintree.
   */
  merchantAccountId?: Maybe<Scalars['ID']>;
  /**
   * The merchant (payee) PayPal account associated with the PayPal Billing
   * Agreement being vaulted. Only used when the specified merchant account is
   * specially configured to handle indirect PayPal accounts.
   */
  indirectPayee?: Maybe<PayPalAccountInput>;
};

/** Top-level fields returned when importing and vaulting a PayPal Billing Agreement. */
export type VaultPayPalBillingAgreementPayload = {
  __typename?: 'VaultPayPalBillingAgreementPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The vaulted payment method containing the imported PayPal Billing Agreement. */
  paymentMethod?: Maybe<PaymentMethod>;
};

/** Top-level input field for vaulting a bank account so it can be used multiple times. */
export type VaultUsBankAccountInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of an existing single-use payment method to be vaulted. */
  paymentMethodId: Scalars['ID'];
  /** ID of the merchant account to use when verifying the payment method. */
  verificationMerchantAccountId?: Maybe<Scalars['ID']>;
  /** ID of the customer to associate the resulting multi-use payment method with. */
  customerId?: Maybe<Scalars['ID']>;
  /** Type of US bank account verification to perform. */
  verificationMethod: UsBankAccountVerificationMethod;
};

/** Details about a Venmo Account. */
export type VenmoAccountDetails = {
  __typename?: 'VenmoAccountDetails';
  /** The Venmo username, as chosen by the user. */
  username?: Maybe<Scalars['String']>;
  /** The Venmo user ID. */
  venmoUserId?: Maybe<Scalars['String']>;
};

/** Configuration for Pay with Venmo. */
export type VenmoConfiguration = {
  __typename?: 'VenmoConfiguration';
  /** The Venmo merchant ID. */
  merchantId?: Maybe<Scalars['String']>;
  /** Authorization to use when tokenizing a Venmo payment method. */
  accessToken?: Maybe<Scalars['String']>;
  /** The Venmo environment. */
  environment?: Maybe<VenmoEnvironment>;
};

/** The environment being used for Pay with Venmo. */
export enum VenmoEnvironment {
  PRODUCTION = 'PRODUCTION',
  SANDBOX = 'SANDBOX',
  production = 'production',
  sandbox = 'sandbox',
}

/**
 * A verification reporting whether the payment method has passed your fraud rules
 * and the issuer has ensured it is associated with a valid account.
 */
export type Verification = Node & {
  __typename?: 'Verification';
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Legacy unique identifier. */
  legacyId: Scalars['ID'];
  /** Snapshot of payment method details that were verified. This will always be present. */
  paymentMethodSnapshot?: Maybe<PaymentMethodSnapshot>;
  /**
   * The multi-use payment method that was verified, if it was vaulted. The details
   * of this PaymentMethod may have changed since it was verified.
   */
  paymentMethod?: Maybe<PaymentMethod>;
  /**
   * For a credit card, the amount used when performing the verification.
   * @deprecated Depending on the type of payment method being verified, some verifications do not have an amount. On a credit card verification, use `paymentMethodVerificationDetails.amount` instead.
   */
  amount?: Maybe<MonetaryAmount>;
  /** The merchant account used for the verification. */
  merchantAccountId?: Maybe<Scalars['ID']>;
  /**
   * The current status of this verification, indicating whether the verification
   * was successful. Braintree recommends only vaulting payment methods that are
   * successfully verified.
   */
  status?: Maybe<VerificationStatus>;
  /**
   * Detailed response information from the processor. Will not be present if the
   * verification was rejected prior to contacting the processor.
   */
  processorResponse?: Maybe<VerificationProcessorResponse>;
  /** Date and time at which the verification was created. */
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** The reason the verification was rejected. This will only be set if status is GATEWAY_REJECTED. */
  gatewayRejectionReason?: Maybe<GatewayRejectionReason>;
  /** Risk data evaluated for this verification. */
  riskData?: Maybe<RiskData>;
  /** Details unique to the verification based on payment method type being verified. */
  paymentMethodVerificationDetails?: Maybe<VerificationDetails>;
};

/** A paginated list of verifications. */
export type VerificationConnection = {
  __typename?: 'VerificationConnection';
  /** A list of verifications. */
  edges?: Maybe<Array<Maybe<VerificationConnectionEdge>>>;
  /** Information about the page of verifications contained in `edges`. */
  pageInfo: PageInfo;
};

/** A verification within a VerificationConnection. */
export type VerificationConnectionEdge = {
  __typename?: 'VerificationConnectionEdge';
  /** The verification's location within the VerificationConnection. Used for requesting additional pages. */
  cursor?: Maybe<Scalars['String']>;
  /** The verification. */
  node?: Maybe<Verification>;
};

/** A union of all possible verification details specific to the type of payment method being verified. */
export type VerificationDetails = UsBankAccountVerificationDetails | CreditCardVerificationDetails;

/** Detailed response information from the processor. */
export type VerificationProcessorResponse = {
  __typename?: 'VerificationProcessorResponse';
  /**
   * The [processor response code](https://developers.braintreepayments.com/reference/general/processor-responses/authorization-responses)
   * indicating the result of attempting the verification.
   */
  legacyCode?: Maybe<Scalars['String']>;
  /** The text explanation of the processor response code. */
  message?: Maybe<Scalars['String']>;
  /** The processing bank's response to the provided CVV. */
  cvvResponse?: Maybe<AvsCvvResponseCode>;
  /** The processing bank's response to the provided billing postal or zip code. */
  avsPostalCodeResponse?: Maybe<AvsCvvResponseCode>;
  /** The processing bank's response to the provided billing street address. */
  avsStreetAddressResponse?: Maybe<AvsCvvResponseCode>;
};

/** Input fields for searching for verifications. */
export type VerificationSearchInput = {
  /** Find verifications with an ID or IDs. */
  id?: Maybe<SearchValueInput>;
  /** Find verifications with a given status. */
  status?: Maybe<SearchVerificationStatusInput>;
  /** Find verifications with a given created at time. */
  createdAt?: Maybe<SearchTimestampInput>;
};

/**
 * The status of the verification, indicating whether the payment method was
 * successfully verified. Braintree recommends only vaulting payment methods with
 * successful verifications.
 */
export enum VerificationStatus {
  /** Indicates the verification was unsuccessful because of an issue communicating with the processor. */
  FAILED = 'FAILED',
  /**
   * Indicates that the verification was unsuccessful because the payment method
   * failed one or more fraud checks. In this case, the `gatewayRejectionReason`
   * will indicate which fraud check failed.
   */
  GATEWAY_REJECTED = 'GATEWAY_REJECTED',
  /** Indicates that the verification is pending. */
  PENDING = 'PENDING',
  /** Indicates that the verification was unsuccessful based on the response from the processor. */
  PROCESSOR_DECLINED = 'PROCESSOR_DECLINED',
  /** Indicates that the verification was successful. */
  VERIFIED = 'VERIFIED',
  /** Indicates that the verification is in the process of verifying. */
  VERIFYING = 'VERIFYING',
}

/** Verifone specific in-store reader information. */
export type VerifoneVendor = {
  __typename?: 'VerifoneVendor';
  /** Model name or number of reader. */
  model?: Maybe<Scalars['String']>;
  /** Current OS version running on the reader. */
  osVersion?: Maybe<Scalars['String']>;
};

/** Top-level input field for verifying a multi-use payment method. */
export type VerifyPaymentMethodInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of an existing multi-use payment method to be verified. */
  paymentMethodId: Scalars['ID'];
  /** ID of the merchant account to use when verifying the payment method. */
  merchantAccountId?: Maybe<Scalars['ID']>;
};

/** Top-level output field from verifying a payment method. */
export type VerifyPaymentMethodPayload = {
  __typename?: 'VerifyPaymentMethodPayload';
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The verification that was run on the payment method. */
  verification?: Maybe<Verification>;
};

/** Top-level input field for retrying a verification on a bank account. */
export type VerifyUsBankAccountInput = {
  /** An identifier used to reconcile requests and responses. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** ID of an existing multi-use payment method to be vaulted. */
  paymentMethodId: Scalars['ID'];
  /** ID of the merchant account to use when verifying the payment method. */
  merchantAccountId?: Maybe<Scalars['ID']>;
  /** Type of US bank account verification to perform. */
  verificationMethod: UsBankAccountVerificationMethod;
};

/** Details about the user and merchant authenticated in this request. */
export type Viewer = {
  __typename?: 'Viewer';
  /**
   * Unique identifier.
   * @deprecated Use `user` for id instead.
   */
  id?: Maybe<Scalars['ID']>;
  /**
   * Email address.
   * @deprecated Use `user` for email instead.
   */
  email?: Maybe<Scalars['String']>;
  /**
   * Current status.
   * @deprecated Use `user` for status instead.
   */
  status?: Maybe<UserStatus>;
  /**
   * Full name.
   * @deprecated Use `user` for name instead.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Associated roles.
   * @deprecated Use `user` for roles instead.
   */
  roles?: Maybe<Array<Role>>;
  /** Details about the authenticated user. */
  user?: Maybe<User>;
  /** Details about the authenticated merchant. */
  merchant?: Maybe<Merchant>;
};

/** Configuration for Visa Checkout. */
export type VisaCheckoutConfiguration = {
  __typename?: 'VisaCheckoutConfiguration';
  /** The Visa Checkout API key. */
  apiKey?: Maybe<Scalars['String']>;
  /** The Visa Checkout external client ID. */
  externalClientId?: Maybe<Scalars['String']>;
  /** A list of card brands supported by the merchant for Visa Checkout. */
  supportedCardBrands?: Maybe<Array<CreditCardBrandCode>>;
};

/** Additional information about the payment method specific to Visa Checkout. */
export type VisaCheckoutOriginDetails = {
  __typename?: 'VisaCheckoutOriginDetails';
  /** The Visa assigned identifier for the transaction. */
  callId?: Maybe<Scalars['String']>;
  /**
   * The first 6 digits of the credit card, known as the Bank Identification
   * Number. This BIN may differ from the BIN of the customer's actual card.
   */
  bin?: Maybe<Scalars['String']>;
};

/** Accompanying information for a transaction that has been voided. */
export type VoidedEvent = PaymentStatusEvent & {
  __typename?: 'VoidedEvent';
  /** The new status of the transaction. */
  status?: Maybe<PaymentStatus>;
  /** Date and time when the transaction was voided. */
  timestamp?: Maybe<Scalars['Timestamp']>;
  /** The amount of the voided transaction. This should match the authorization amount. */
  amount?: Maybe<MonetaryAmount>;
  /** The source for the transaction change to the new status. */
  source?: Maybe<PaymentSource>;
  /** Whether or not this is the final state for the transaction. */
  terminal?: Maybe<Scalars['Boolean']>;
};

export type AuthorizePaymentMethodMutationVariables = {
  input: AuthorizePaymentMethodInput;
};

export type AuthorizePaymentMethodMutation = { __typename?: 'Mutation' } & {
  authorizePaymentMethod?: Maybe<
    { __typename?: 'TransactionPayload' } & {
      transaction?: Maybe<
        { __typename?: 'Transaction' } & Pick<Transaction, 'legacyId' | 'status'>
      >;
    }
  >;
};

export type ChargePaymentMethodMutationVariables = {
  input: ChargePaymentMethodInput;
};

export type ChargePaymentMethodMutation = { __typename?: 'Mutation' } & {
  chargePaymentMethod?: Maybe<
    { __typename?: 'TransactionPayload' } & {
      transaction?: Maybe<
        { __typename?: 'Transaction' } & Pick<Transaction, 'legacyId' | 'status'>
      >;
    }
  >;
};

export type CreateClientTokenMutationVariables = {};

export type CreateClientTokenMutation = { __typename?: 'Mutation' } & {
  createClientToken?: Maybe<
    { __typename?: 'CreateClientTokenPayload' } & Pick<CreateClientTokenPayload, 'clientToken'>
  >;
};

export const AuthorizePaymentMethodDocument = gql`
  mutation AuthorizePaymentMethod($input: AuthorizePaymentMethodInput!) {
    authorizePaymentMethod(input: $input) {
      transaction {
        legacyId
        status
      }
    }
  }
`;
export type AuthorizePaymentMethodMutationFn = ApolloReactCommon.MutationFunction<
  AuthorizePaymentMethodMutation,
  AuthorizePaymentMethodMutationVariables
>;
export type AuthorizePaymentMethodMutationResult = ApolloReactCommon.MutationResult<
  AuthorizePaymentMethodMutation
>;
export type AuthorizePaymentMethodMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AuthorizePaymentMethodMutation,
  AuthorizePaymentMethodMutationVariables
>;
export const ChargePaymentMethodDocument = gql`
  mutation ChargePaymentMethod($input: ChargePaymentMethodInput!) {
    chargePaymentMethod(input: $input) {
      transaction {
        legacyId
        status
      }
    }
  }
`;
export type ChargePaymentMethodMutationFn = ApolloReactCommon.MutationFunction<
  ChargePaymentMethodMutation,
  ChargePaymentMethodMutationVariables
>;
export type ChargePaymentMethodMutationResult = ApolloReactCommon.MutationResult<
  ChargePaymentMethodMutation
>;
export type ChargePaymentMethodMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ChargePaymentMethodMutation,
  ChargePaymentMethodMutationVariables
>;
export const CreateClientTokenDocument = gql`
  mutation CreateClientToken {
    createClientToken {
      clientToken
    }
  }
`;
export type CreateClientTokenMutationFn = ApolloReactCommon.MutationFunction<
  CreateClientTokenMutation,
  CreateClientTokenMutationVariables
>;
export type CreateClientTokenMutationResult = ApolloReactCommon.MutationResult<
  CreateClientTokenMutation
>;
export type CreateClientTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateClientTokenMutation,
  CreateClientTokenMutationVariables
>;
