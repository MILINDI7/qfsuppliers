import { useState } from 'react';

import './App.css';
import Logo from './components/Logo';

const products = [
  {
    id: 101,
    name: 'Logos',
    category: 'Creative',
    price: '100,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 102,
    name: 'Company Profiles',
    category: 'Creative',
    price: '20,000 RWF/page',
    description: 'Heavy-duty PVC banner stock with UV-resistant coating designed for vibrant exterior signage.',
    status: 'Ready to ship'
  },
  {
    id: 103,
    name: 'Brochures',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 104,
    name: 'Banners',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 105,
    name: 'Stickers',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 107,
    name: 'Pull Up',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 109,
    name: 'Badge',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 110,
    name: 'Business Cards',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 111,
    name: 'Flyers',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 112,
    name: 'Posters',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 113,
    name: 'Invitation Cards',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 114,
    name: 'Certificates',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'Breathable polyester blend ideal for sportswear and uniforms with moisture wicking finish.',
    status: 'Ready to ship'
  },
  {
    id: 201,
    name: 'Flyers A6',
    category: 'Digital Printing',
    price: '100 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 202,
    name: 'Flyers A5',
    category: 'Digital Printing',
    price: '250 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 203,
    name: 'Company Profile A4',
    category: 'Digital Printing',
    price: '20,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 204,
    name: 'Company Profile A5',
    category: 'Digital Printing',
    price: '15,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 205,
    name: 'Brochures A4',
    category: 'Digital Printing',
    price: '1,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 206,
    name: 'Brochures A3',
    category: 'Digital Printing',
    price: '1,500 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 207,
    name: 'Business Cards not Laminated one side',
    category: 'Digital Printing',
    price: '118 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 208,
    name: 'Business Cards not Laminated double side',
    category: 'Digital Printing',
    price: '177 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 209,
    name: 'Business Cards Laminated one side',
    category: 'Digital Printing',
    price: '200 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 210,
    name: 'Business Cards Laminated double side',
    category: 'Digital Printing',
    price: '250 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 211,
    name: 'Forders',
    category: 'Digital Printing',
    price: '5000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 212,
    name: 'Booklets A4',
    category: 'Digital Printing',
    price: '8000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 213,
    name: 'Booklets A5',
    category: 'Digital Printing',
    price: '7500 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 214,
    name: 'Booklets A6',
    category: 'Digital Printing',
    price: '5,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 215,
    name: 'Paper Stickers A4',
    category: 'Digital Printing',
    price: '500 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 216,
    name: 'Invitation Cards A5',
    category: 'Digital Printing',
    price: '400 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 217,
    name: 'Invitation Cards DL',
    category: 'Digital Printing',
    price: '150 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 218,
    name: 'A4 Envelopes',
    category: 'Digital Printing',
    price: '450 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 219,
    name: 'A5 Envelopes',
    category: 'Digital Printing',
    price: '400 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 220,
    name: 'DL Envelopes',
    category: 'Digital Printing',
    price: '350 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 221,
    name: 'Tents Cards',
    category: 'Digital Printing',
    price: '500 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 222,
    name: 'Flags',
    category: 'Digital Printing',
    price: '600 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 223,
    name: 'Labels',
    category: 'Digital Printing',
    price: '3,500 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 224,
    name: 'Note Books A4',
    category: 'Digital Printing',
    price: '12,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 225,
    name: 'Note Books A5',
    category: 'Digital Printing',
    price: '7,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 226,
    name: 'Poster A4',
    category: 'Digital Printing',
    price: '500 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 227,
    name: 'Poster A3',
    category: 'Digital Printing',
    price: '1,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 228,
    name: 'Poster A2',
    category: 'Digital Printing',
    price: '5,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 229,
    name: 'Poster A1',
    category: 'Digital Printing',
    price: '10,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 230,
    name: 'Poster A0',
    category: 'Digital Printing',
    price: '15,000 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 231,
    name: 'Certificates',
    category: 'Digital Printing',
    price: '600 RWF',
    description: 'Backlit-ready vinyl with even light diffusion, perfect for illuminated displays and exhibitions.',
    status: 'Ready to ship'
  },
  {
    id: 301,
    name: 'Diaries A4',
    category: 'Offset Printing',
    price: '15,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 302,
    name: 'Diaries A5',
    category: 'Offset Printing',
    price: '12,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 303,
    name: 'Calendars A2',
    category: 'Offset Printing',
    price: '8,500 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 304,
    name: 'Desk Calendars',
    category: 'Offset Printing',
    price: '6,500 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 305,
    name: 'Magazines',
    category: 'Offset Printing',
    price: '15,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 306,
    name: 'Flyers A5',
    category: 'Offset Printing',
    price: '150 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 307,
    name: 'Flyers A6',
    category: 'Offset Printing',
    price: '120 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 308,
    name: 'Company Profiles A4',
    category: 'Offset Printing',
    price: '20,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 309,
    name: 'Company Profiles A5',
    category: 'Offset Printing',
    price: '15,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 310,
    name: 'Brochures A4',
    category: 'Offset Printing',
    price: '700 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 311,
    name: 'Brochures A5',
    category: 'Offset Printing',
    price: '1,200 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 312,
    name: 'Booklet A4',
    category: 'Offset Printing',
    price: '6,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 313,
    name: 'Booklet A5',
    category: 'Offset Printing',
    price: '5,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 314,
    name: 'Booklet A6',
    category: 'Offset Printing',
    price: '3,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 315,
    name: 'Poster A4',
    category: 'Offset Printing',
    price: '450 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 316,
    name: 'Poster A3',
    category: 'Offset Printing',
    price: '800 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 317,
    name: 'Poster A2',
    category: 'Offset Printing',
    price: '4,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 318,
    name: 'Poster A1',
    category: 'Offset Printing',
    price: '7,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 319,
    name: 'Poster A0',
    category: 'Offset Printing',
    price: '10,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 320,
    name: 'Note Books A4',
    category: 'Offset Printing',
    price: '12,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 321,
    name: 'Note Books A5',
    category: 'Offset Printing',
    price: '7,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 322,
    name: 'Receipt Books A4',
    category: 'Offset Printing',
    price: '7,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 323,
    name: 'Receipt Books A5',
    category: 'Offset Printing',
    price: '5,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 324,
    name: 'Receipt Books A6',
    category: 'Offset Printing',
    price: '3,500 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 325,
    name: 'Folders',
    category: 'Offset Printing',
    price: '7,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 326,
    name: 'Label',
    category: 'Offset Printing',
    price: '250 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 327,
    name: 'Flags',
    category: 'Offset Printing',
    price: '800 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 401,
    name: 'Pull up material/ sqm Print material',
    category: 'Large Format',
    price: '10,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 402,
    name: 'Narrow Base Pull up',
    category: 'Large Format',
    price: '90,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 403,
    name: 'Wide Base Pull up',
    category: 'Large Format',
    price: '130,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 404,
    name: 'Beach flags',
    category: 'Large Format',
    price: '450,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 405,
    name: 'Tear Drop',
    category: 'Large Format',
    price: '250,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 406,
    name: 'Banner',
    category: 'Large Format',
    price: '5,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 407,
    name: 'Mesh Banner',
    category: 'Large Format',
    price: '10,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 408,
    name: 'Backlitr',
    category: 'Large Format',
    price: '7,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 409,
    name: 'Clear Sticker',
    category: 'Large Format',
    price: '18,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 410,
    name: 'Matt Sticker',
    category: 'Large Format',
    price: '8,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 411,
    name: 'Viny Sticker',
    category: 'Large Format',
    price: '8,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 412,
    name: 'One Way Vision',
    category: 'Large Format',
    price: '9,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 413,
    name: 'Sticker on foam Board',
    category: 'Large Format',
    price: '15,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 414,
    name: 'ABS Board',
    category: 'Large Format',
    price: '40,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 415,
    name: '3D Letters',
    category: 'Large Format',
    price: '500,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 501,
    name: 'T-Shirt',
    category: 'Promotional Materials',
    price: '15,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 502,
    name: 'Polo T-Shirt',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 503,
    name: 'Cup Branding',
    category: 'Promotional Materials',
    price: '15,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 504,
    name: 'Caps',
    category: 'Promotional Materials',
    price: '6,500 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 505,
    name: 'Standard Pens',
    category: 'Promotional Materials',
    price: '3,500 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 506,
    name: 'VIP Pens',
    category: 'Promotional Materials',
    price: '30,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 507,
    name: 'Ceramics',
    category: 'Promotional Materials',
    price: '80,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 508,
    name: 'Flash Disks',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 509,
    name: 'Umbrellas',
    category: 'Promotional Materials',
    price: '30,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 510,
    name: 'Staff Uniforms',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 511,
    name: 'Wrist Band',
    category: 'Promotional Materials',
    price: '4,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 512,
    name: 'Mugs',
    category: 'Promotional Materials',
    price: '15,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 513,
    name: 'Labels',
    category: 'Promotional Materials',
    price: '50,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 514,
    name: 'Awards(Trophies)',
    category: 'Promotional Materials',
    price: '180,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 515,
    name: 'Button Badges',
    category: 'Promotional Materials',
    price: '10,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 516,
    name: 'IDs',
    category: 'Promotional Materials',
    price: '3,500 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 517,
    name: 'Key Holders',
    category: 'Promotional Materials',
    price: '7,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 518,
    name: 'Business Cards Holders',
    category: 'Promotional Materials',
    price: '15,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 519,
    name: 'Bags( Back Pack and Tote Bags)',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 520,
    name: 'Watches',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 521,
    name: 'Clocks',
    category: 'Promotional Materials',
    price: '80,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 522,
    name: 'Lanyards',
    category: 'Promotional Materials',
    price: '4,500 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 523,
    name: 'Mouse pads',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 524,
    name: 'Stamp',
    category: 'Promotional Materials',
    price: '30,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 525,
    name: 'Name tag',
    category: 'Promotional Materials',
    price: '10,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 526,
    name: 'A3 Wood Frame',
    category: 'Promotional Materials',
    price: '30,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 527,
    name: 'A4 Wood Frame',
    category: 'Promotional Materials',
    price: '7,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 528,
    name: 'A0 Snap Frame',
    category: 'Promotional Materials',
    price: '150,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 529,
    name: 'A1 Snap Frame',
    category: 'Promotional Materials',
    price: '135,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 530,
    name: 'A2 Snap Frame',
    category: 'Promotional Materials',
    price: '120,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 531,
    name: 'A3 Snap Frame',
    category: 'Promotional Materials',
    price: '100,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 532,
    name: 'A4 Snap Frame',
    category: 'Promotional Materials',
    price: '80,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Ready to ship'
  },
  {
    id: 601,
    name: 'Round neck',
    category: 'Garments',
    price: '4,800 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 602,
    name: 'V-neck',
    category: 'Garments',
    price: '6,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 603,
    name: 'Polo shirt(Lacoste)',
    category: 'Garments',
    price: '10,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 604,
    name: 'Jersey',
    category: 'Garments',
    price: '15,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 605,
    name: 'Uniforms for students',
    category: 'Garments',
    price: '15,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 606,
    name: 'Gowns',
    category: 'Garments',
    price: '75,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 607,
    name: 'Trousers',
    category: 'Garments',
    price: '25,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 608,
    name: 'Shirts',
    category: 'Garments',
    price: '25,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 609,
    name: 'Ties',
    category: 'Garments',
    price: '15,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 610,
    name: 'Scarf',
    category: 'Garments',
    price: '7,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 611,
    name: 'Security uniforms',
    category: 'Garments',
    price: '50,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 612,
    name: 'Jackets',
    category: 'Garments',
    price: '35,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 613,
    name: 'Kitenge jackets',
    category: 'Garments',
    price: '30,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 614,
    name: 'Over coat',
    category: 'Garments',
    price: '30,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 615,
    name: 'Over coat',
    category: 'Garments',
    price: '30,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 616,
    name: 'Overall',
    category: 'Garments',
    price: '30,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  },
  {
    id: 617,
    name: 'Apron',
    category: 'Garments',
    price: '15,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Ready to ship'
  }


];

const categories = ['All', 'Creative', 'Digital Printing', 'Offset Printing', 'Large Format', 'Promotional Materials', 'Garments'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo-container">
            <Logo size={60} />
          </div>
          <div className="header-text">
            <h1 className="company-name">QUICK FIT SUPPLIER LTD</h1>
            <h2 className="page-title">Raw Materials Portfolio</h2>
          </div>
        </div>
        <div className="header-right">
          <p className="tagline">
            Discover premium textiles, banners, and specialty substrates curated for agile production teams, retail activations, and brand storytellers.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Material Categories */}
        <section className="categories-section">
          <h3 className="categories-title">MATERIAL CATEGORIES</h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="products-section">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="image-placeholder">
                    <Logo size={80} />
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-category">{product.category}</div>
                  <div className="product-header">
                    <h4 className="product-name">{product.name}</h4>
                    <span className="product-price">{product.price}</span>
                  </div>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <div className="product-status">
                      <span className="status-dot"></span>
                      <span>{product.status}</span>
                    </div>
                    <a href="#" className="spec-sheet-link">SPEC SHEET &gt;</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <p className="copyright">© 2025 Quick Fit Supplier Ltd. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#" className="footer-link">Material Catalog</a>
            <a href="#" className="footer-link">Compliance</a>
            <a href="#" className="footer-link">Contact Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
