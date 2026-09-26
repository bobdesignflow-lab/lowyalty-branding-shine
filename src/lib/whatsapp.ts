import type { CartItem } from "./cart";
import type { Product } from "./catalog";

export const WHATSAPP_NUMBER = "254708502332";

function buildUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildEnquiryMessage(): string {
  return "Hello Lowyalty Brandingline, I'd like to make an enquiry about your printing and branding services.";
}

export function buildGeneralQuoteMessage(items?: CartItem[]): string {
  if (!items || items.length === 0) {
    return "Hello Lowyalty Brandingline, I'd like to request a quote for your printing and branding services.";
  }
  const lines = items.map(
    (it, i) => {
      const base = `${i + 1}. ${it.product.name}`;
      const qty = `   Quantity: ${it.quantity}`;
      return `${base}\n${qty}`;
    },
  ).join("\n");
  return `Hello Lowyalty Brandingline,

I'd like to request a quote for the following:

${lines}

Please send me a quotation and let me know if you need any additional details.

Thank you.`;
}

export function buildProductQuoteMessage(product: Product, items?: CartItem[]): string {
  const productLine = `Product: ${product.name}`;
  if (!items || items.length === 0) {
    return `Hello Lowyalty Brandingline, I'd like to request a quote for:
${productLine}`;
  }
  const hasSpecificProduct = items.some((it) => it.product.slug === product.slug);
  if (hasSpecificProduct) {
    return buildGeneralQuoteMessage(items);
  }
  const lines = items.map(
    (it, i) => {
      const base = `${i + 1}. ${it.product.name}`;
      const qty = `   Quantity: ${it.quantity}`;
      return `${base}\n${qty}`;
    },
  ).join("\n");
  return `Hello Lowyalty Brandingline,

I'm interested in ${product.name} and would like to request a quote for the following:

${lines}

Please send me a quotation.

Thank you.`;
}

export function buildCartQuoteMessage(items: CartItem[]): string {
  if (!items || items.length === 0) {
    return "Hello Lowyalty Brandingline, I'd like to request a quote. I'd like to discuss some printing and branding requirements.";
  }
  const lines = items.map(
    (it, i) => {
      const base = `${i + 1}. ${it.product.name}`;
      const qty = `   Quantity: ${it.quantity}`;
      return `${base}\n${qty}`;
    },
  ).join("\n");
  return `Hello Lowyalty Brandingline,

I'd like to request a quote for the following:

${lines}

Please send me a quotation and let me know if you need any additional details.

Thank you.`;
}

export function buildCorporateQuoteMessage(items?: CartItem[]): string {
  if (!items || items.length === 0) {
    return "Hello Lowyalty Brandingline, I'd like to request a corporate quote for printing and branding services for my organisation.";
  }
  const lines = items.map(
    (it, i) => {
      const base = `${i + 1}. ${it.product.name}`;
      const qty = `   Quantity: ${it.quantity}`;
      return `${base}\n${qty}`;
    },
  ).join("\n");
  return `Hello Lowyalty Brandingline,

I'd like to request a corporate quote for the following:

${lines}

Please send me a quotation and let me know if you need any additional details about our organisation's requirements.

Thank you.`;
}

export function enquiryUrl(): string {
  return buildUrl(buildEnquiryMessage());
}

export function generalQuoteUrl(items?: CartItem[]): string {
  return buildUrl(buildGeneralQuoteMessage(items));
}

export function productQuoteUrl(product: Product, items?: CartItem[]): string {
  return buildUrl(buildProductQuoteMessage(product, items));
}

export function cartQuoteUrl(items: CartItem[]): string {
  return buildUrl(buildCartQuoteMessage(items));
}

export function corporateQuoteUrl(items?: CartItem[]): string {
  return buildUrl(buildCorporateQuoteMessage(items));
}
