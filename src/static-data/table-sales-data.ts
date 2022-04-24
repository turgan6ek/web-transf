import { DateTime } from 'luxon';

export interface Order {
  name: string;
  price: string;
  status: boolean;
  eds: boolean;
  prg: string;
  level: string;
  disconnect_reason: string;
  note: boolean;
  btn: '';
  timestamp: string;
}

export const tableSalesData: Order[] = [
  {
    name: 'Apple iPhone 8',
    price: '$899.99',
    status: true,
    eds: true,
    prg: '',
    level: 'АРБП',
    disconnect_reason: '',
    note: true,
    btn: '',
    timestamp: DateTime.local().minus({ day: 2 }).toString()
  },
  {
    name: 'USB-C Cable',
    price: '$8.99',
    status: false,
    eds: true,
    prg: 'На согласовании',
    level: 'МУО ГП',
    disconnect_reason: '',
    note: false,
    btn: '',
    timestamp: DateTime.local().minus({ minutes: 6 }).toString()
  },
  {
    name: 'Apple MacBook Pro',
    price: '$1299.99',
    status: true,
    eds: false,
    prg: '',
    level: 'АМБП',
    disconnect_reason: '',
    note: true,
    btn: '',
    timestamp: DateTime.local().minus({ minutes: 14 }).toString()
  },
  {
    name: 'Samsung Galaxy S9',
    price: '$799.99',
    status: true,
    eds: true,
    prg: 'В работе',
    level: '',
    disconnect_reason: '',
    note: true,
    btn: '',
    timestamp: DateTime.local().minus({ minutes: 17 }).toString()
  },
  {
    name: 'Lightning to USB-C Adapter',
    price: '$16.99',
    status: false,
    eds: false,
    prg: 'На согласовании',
    level: 'МУО ГП',
    disconnect_reason: '',
    note: true,
    btn: '',
    timestamp: DateTime.local().toString()
  },
  {
    name: 'Samsung Galaxy S8 256GB',
    price: '$599.99',
    status: true,
    eds: false,
    prg: '',
    level: 'АМБП',
    disconnect_reason: '',
    note: false,
    btn: '',
    timestamp: DateTime.local().toString()
  },
  {
    name: 'Apple iPhone X',
    price: '$1099.99',
    status: false,
    eds: true,
    prg: 'В работе',
    level: 'АМБП',
    disconnect_reason: '',
    note: true,
    btn: '',
    timestamp: DateTime.local().toString()
  },
  {
    name: 'Apple iPhone 7 128GB',
    price: '$699.99',
    status: true,
    btn: '',
    eds: true,
    prg: 'В работе',
    level: 'МУО ГП',
    disconnect_reason: '',
    note: false,
    timestamp: DateTime.local().toString()
  },
  {
    name: 'Apple Mac Pro',
    price: '$999.99',
    status: false,
    eds: true,
    prg: '',
    level: 'АРБП',
    disconnect_reason: '',
    note: false,
    btn: '',
    timestamp: DateTime.local().toString()
  },
  {
    name: 'Samsung DEX',
    price: '$54.99',
    status: true,
    eds: false,
    prg: 'На согласовании',
    level: '',
    disconnect_reason: '',
    note: false,
    btn: '',
    timestamp: DateTime.local().toString()
  },
  {
    name: 'Apple iPhone X 256GB',
    price: '$1199.99',
    status: false,
    eds: true,
    prg: '',
    level: '',
    disconnect_reason: '',
    note: true,
    btn: '',
    timestamp: DateTime.local().toString()
  },
  {
    name: 'Apple MacBook 2019',
    price: '$2499.99',
    status: false,
    eds: false,
    prg: '',
    level: 'АМБП',
    disconnect_reason: '',
    note: true,
    btn: '',
    timestamp: DateTime.local().toString()
  }
];
