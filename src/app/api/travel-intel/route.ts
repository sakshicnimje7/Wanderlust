import { NextResponse } from 'next/server';

export async function GET() {
  const timestamp = new Date().toISOString();

  return NextResponse.json({
    source: 'Mock Live Feed',
    items: [
      {
        city: 'Bali',
        country: 'Indonesia',
        weather: 'Partly Cloudy',
        tempC: 28,
        currencyPair: 'USD/IDR',
        rate: '15,820',
        updatedAt: timestamp,
      },
      {
        city: 'Santorini',
        country: 'Greece',
        weather: 'Sunny',
        tempC: 23,
        currencyPair: 'USD/EUR',
        rate: '0.93',
        updatedAt: timestamp,
      },
      {
        city: 'Tokyo',
        country: 'Japan',
        weather: 'Clear',
        tempC: 19,
        currencyPair: 'USD/JPY',
        rate: '154.2',
        updatedAt: timestamp,
      },
    ],
  });
}
