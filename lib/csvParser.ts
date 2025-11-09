import { Provider, Hotel, Restaurant, ScubaOperator, BoatingOperator, Amenity } from '@/types';

interface CSVRow {
  place_id: string;
  name: string;
  description: string;
  reviews: string;
  rating: string;
  phone: string;
  featured_image: string;
  main_category: string;
  address: string;
  link: string;
  website?: string;
}

export function parseCSV(csvText: string): CSVRow[] {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',');

  const rows: CSVRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;

    const values = lines[i].split(',');
    const row: any = {};

    headers.forEach((header, index) => {
      row[header.trim()] = values[index]?.trim() || '';
    });

    rows.push(row as CSVRow);
  }

  return rows;
}

export function generateWhatsAppLink(
  phone: string,
  providerName: string,
  googleMapsLink: string
): string {
  // Clean phone number (remove spaces, hyphens, etc.)
  const cleanPhone = phone.replace(/[^0-9+]/g, '');

  // Create the WhatsApp message
  const message = `Hi, I would like to book ${providerName} in Murudeshwar. Here's the Google Maps link: ${googleMapsLink}`;

  // URL encode the message
  const encodedMessage = encodeURIComponent(message);

  // Generate WhatsApp URL
  return `https://api.whatsapp.com/send/?phone=${cleanPhone}&text=${encodedMessage}&type=phone_number&app_absent=0`;
}
