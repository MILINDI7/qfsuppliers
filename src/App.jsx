import { useState } from 'react';

import './App.css';
import Logo from './components/Logo';

const products = [
  {
    id: 101,
    name: 'Logos',
    category: 'Creative',
    price: '100,000 RWF',
    description: 'We deliver professional, high-quality logos quickly, combining creativity and detail to capture your brand\'s identity.',
    status: 'Fast & Local',
    image: 'public/images/logos1.png' // Add image URL here
  },
  {
    id: 102,
    name: 'Company Profiles',
    category: 'Creative',
    price: '20,000 RWF/page',
    description: 'We create professional, high-impact company profiles fast blending strategy, creativity, and detail to showcase your brand at its best.',
    status: 'Fast & Local',
    image: 'public/images/company-profile.jpg' // Add image URL here
  },
  {
    id: 103,
    name: 'Brochures',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'We design professional, eye‑catching brochures fast blending creativity, clarity, and detail to showcase your products and services at a glance.',
    status: 'Fast & Local',
    image: 'public/images/brochures.jpg' // Add image URL here
  },
  {
    id: 104,
    name: 'Banners',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'We produce bold, attention-grabbing banners fast built for maximum visibility and impact, so your message stands out instantly in any space.',
    status: 'Fast & Local',
    image: 'public/images/banners.jpg' // Add image URL here
  },
  {
    id: 105,
    name: 'Stickers',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'We print vibrant, memorable stickers fast perfect for adding personality to your brand, turning every surface into a mini billboard that sticks in people\’s minds.',
    status: 'Fast & Local',
    image: 'public/images/stickers.jpeg' // Add image URL here
  },
  {
    id: 107,
    name: 'Pull Up',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'We create sleek, stand-out pull-up banners fast perfect for portable, professional displays that command attention at every event.',
    status: 'Fast & Local',
    image: 'public/images/pull-up.jpg' // Add image URL here
  },
  {
    id: 109,
    name: 'Badge',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'We design custom, professional badges fast perfect for events, staff, and VIP access, giving every name and role a polished, branded look.',
    status: 'Fast & Local',
    image: 'public/images/badge.jpg' // Add image URL here
  },
  {
    id: 110,
    name: 'Business Cards',
    category: 'Creative',
    price: '10,000 RWF',
    description: 'We craft sharp, memorable business cards fast designed to leave a lasting impression every time you make a connection.',
    status: 'Fast & Local',
    image: 'public/images/business-cards.jpeg' // Add image URL here
  },
  {
    id: 111,
    name: 'Flyers',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'We design bold, persuasive flyers fast perfect for promotions, launches, and events, getting your message into hands and minds in seconds',
    status: 'Fast & Local',
    image: 'public/images/flyers.jpg' // Add image URL here
  },
  {
    id: 112,
    name: 'Posters',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'We create striking posters fast designed to stop people in their tracks, amplify your message, and make every wall work for your brand.',
    status: 'Fast & Local',
    image: 'public/images/posters.jpg' // Add image URL here
  },
  {
    id: 113,
    name: 'Invitation Cards',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'We design elegant, unforgettable invitation cards fast setting the perfect tone for your event before guests even arrive.',
    status: 'Fast & Local',
    image: 'public/images/invitation-cards.jpg' // Add image URL here
  },
  {
    id: 114,
    name: 'Certificates',
    category: 'Creative',
    price: '20,000 RWF',
    description: 'We design dignified, professional certificates fast crafted to honor achievement with a polished, prestigious look that’s worthy of every milestone.',
    status: 'Fast & Local',
    image: 'public/images/certificates.jpg' // Add image URL here
  },
  {
    id: 201,
    name: 'Flyers A6',
    category: 'Digital Printing',
    price: '100 RWF',
    description: 'We design compact, high-impact A6 flyers fast perfect for handouts and pocket‑sized promos that keep your brand on the move.',
    status: 'Fast & Local',
    image: 'public/images/flyers-a6.png' // Add image URL here
  },
  {
    id: 202,
    name: 'Flyers A5',
    category: 'Digital Printing',
    price: '250 RWF',
    description: 'BWe design versatile, high-impact A5 flyers fast ideal for detailed promos, menus, and event highlights that stand out in every hand.',
    status: 'Fast & Local',
    image: 'public/images/flyers-a5.jpg' // Add image URL here
  },
  {
    id: 203,
    name: 'Company Profile A4',
    category: 'Digital Printing',
    price: '20,000 RWF',
    description: 'We create polished A4 company profiles fast—print‑ready, professional documents that present your business with clarity, credibility, and style.',
    status: 'Fast & Local',
    image: 'public/images/company-profile-a4.jpg' // Add image URL here
  },
  {
    id: 204,
    name: 'Company Profile A5',
    category: 'Digital Printing',
    price: '15,000 RWF',
    description: 'We create compact A5 company profiles fast professionally designed, easy to carry, and perfect for powerful brand presentations on the go.',
    status: 'Fast & Local',
    image: 'public/images/company-profile-a5.jpg' // Add image URL here
  },
  {
    id: 205,
    name: 'Brochures A4',
    category: 'Digital Printing',
    price: '1,000 RWF',
    description: 'We design spacious, polished A4 brochures fast giving your story, products, and visuals room to truly shine.',
    status: 'Fast & Local',
    image: 'public/images/brochures-a4.jpg' // Add image URL here
  },
  {
    id: 206,
    name: 'Brochures A3',
    category: 'Digital Printing',
    price: '1,500 RWF',
    description: 'We design expansive A3 brochures fast perfect for big visuals, bold storytelling, and layouts that demand attention at first glance.',
    status: 'Fast & Local',
    image: 'public/images/brochures-a3.jpg' // Add image URL here
  },
  {
    id: 207,
    name: 'Business Cards not Laminated one side',
    category: 'Digital Printing',
    price: '118 RWF',
    description: 'We print clean, professional single-sided, non‑laminated business cards fast perfect for simple, budget‑friendly branding that still makes a strong impression.',
    status: 'Fast & Local',
    image: 'public/images/One-side-laminated-business-card.png' // Add image URL here
  },
  {
    id: 208,
    name: 'Business Cards not Laminated double side',
    category: 'Digital Printing',
    price: '177 RWF',
    description: 'We print smart, double-sided non‑laminated business cards fast giving you extra space to tell your story while keeping your branding sleek and cost‑effective.',
    status: 'Fast & Local',
    image: 'public/images/Business-Cards-not-Laminated-double-side.jpg' // Add image URL here
  },
  {
    id: 209,
    name: 'Business Cards Laminated one side',
    category: 'Digital Printing',
    price: '200 RWF',
    description: 'We print sleek, one‑side laminated business cards fast adding a glossy, durable finish to your key details for a polished, premium first impression.',
    status: 'Fast & Local',
    image: 'public/images/Business-Cards-Laminated-one-side.jpg' // Add image URL here
  },
  {
    id: 210,
    name: 'Business Cards Laminated double side',
    category: 'Digital Printing',
    price: '250 RWF',
    description: 'We print premium, double‑sided laminated business cards fast durable, glossy, and refined on both sides, so your brand looks sharp from every angle.',
    status: 'Fast & Local',
    image: 'public/images/Business-Cards-Laminated-double-side.jpg' // Add image URL here
  },
  {
    id: 211,
    name: 'Forders',
    category: 'Digital Printing',
    price: '5000 RWF',
    description: 'We design professional, branded folders fast perfect for keeping your documents organized while presenting your company with a sharp, polished look.',
    status: 'Fast & Local',
    image: 'public/images/Forders.jpg' // Add image URL here
  },
  {
    id: 212,
    name: 'Booklets A4',
    category: 'Digital Printing',
    price: '8000 RWF',
    description: 'We produce detailed A4 booklets fast perfect for catalogs, manuals, and presentations that need extra pages to inform and impress.',
    status: 'Fast & Local',
    image: 'public/images/Booklets-A4.jpg' // Add image URL here
  },
  {
    id: 213,
    name: 'Booklets A5',
    category: 'Digital Printing',
    price: '7500 RWF',
    description: 'We produce compact A5 booklets fast ideal for handy catalogs, guides, and event programs that pack plenty of information into a portable format.',
    status: 'Fast & Local',
    image: 'public/images/Booklets-A5.jpg' // Add image URL here
  },
  {
    id: 214,
    name: 'Booklets A6',
    category: 'Digital Printing',
    price: '5,000 RWF',
    description: 'We produce pocket-sized A6 booklets fast perfect for mini guides, price lists, and info packs that travel effortlessly with your audience.',
    status: 'Fast & Local',
    image: 'public/images/Booklets-A6.jpg' // Add image URL here
  },
  {
    id: 215,
    name: 'Paper Stickers A4',
    category: 'Digital Printing',
    price: '500 RWF',
    description: 'We print full‑sheet A4 paper stickers fast ideal for labels, packaging, and branding sheets that you can peel, stick, and organize with ease.',
    status: 'Fast & Local',
    image: 'public/images/Paper-Stickers-A4.jpg' // Add image URL here
  },
  {
    id: 216,
    name: 'Invitation Cards A5',
    category: 'Digital Printing',
    price: '400 RWF',
    description: 'We design stylish A5 invitation cards fast perfectly sized to showcase your event details with elegance, clarity, and a personal touch.',
    status: 'Fast & Local',
    image: 'public/images/Invitation-Cards-A5.jpg' // Add image URL here
  },
  {
    id: 217,
    name: 'Invitation Cards DL',
    category: 'Digital Printing',
    price: '150 RWF',
    description: 'We design sleek DL invitation cards fast ideal for mailing, with a refined layout that delivers your event details in style.',
    status: 'Fast & Local',
    image: 'public/images/Invitation-Cards-DL.jpg' // Add image URL here
  },
  {
    id: 218,
    name: 'A4 Envelopes',
    category: 'Digital Printing',
    price: '450 RWF',
    description: 'We supply branded A4 envelopes fast professional, ready-to-mail/send packaging that carries your documents with a polished, credible first impression.',
    status: 'Fast & Local',
    image: 'public/images/A4-Envelopes.jpg' // Add image URL here
  },
  {
    id: 219,
    name: 'A5 Envelopes',
    category: 'Digital Printing',
    price: '400 RWF',
    description: 'We supply branded A5 envelopes fast compact, professional mailers ideal for invitations, letters, and documents that deserve a polished arrival.',
    status: 'Fast & Local',
    image: 'public/images/A5-Envelopes.jpg' // Add image URL here
  },
  {
    id: 220,
    name: 'DL Envelopes',
    category: 'Digital Printing',
    price: '350 RWF',
    description: 'We supply branded DL envelopes fast—slim, professional mailers perfect for letters and invitations that arrive with a refined, branded touch.',
    status: 'Fast & Local',
    image: 'public/images/DL-Envelopes.jpg' // Add image URL here
  },
  {
    id: 221,
    name: 'Tents Cards',
    category: 'Digital Printing',
    price: '500 RWF',
    description: 'We design eye‑catching tent cards fast perfect for tables, counters, and reception areas that need clear, branded messages at a glance.',
    status: 'Fast & Local',
    image: 'public/images/Tents-Cards.jpg' // Add image URL here
  },
  {
    id: 222,
    name: 'Flags',
    category: 'Digital Printing',
    price: '600 RWF',
    description: 'We produce bold, high‑visibility flags fast built to wave your brand proudly at events, storefronts, and outdoor spaces that demand attention.',
    status: 'Fast & Local',
    image: 'public/images/Flags.jpg' // Add image URL here
  },
  {
    id: 223,
    name: 'Labels',
    category: 'Digital Printing',
    price: '3,500 RWF',
    description: 'We print custom labels fast—sharp, durable branding for products, packaging, and parcels that keeps your name front and center on every item.',
    status: 'Fast & Local',
    image: 'public/images/Labels.jpg' // Add image URL here
  },
  {
    id: 224,
    name: 'Note Books A4',
    category: 'Digital Printing',
    price: '12,000 RWF',
    description: 'We make custom A4 notebooks fast perfect for branded stationery and everyday ideas, giving your notes a clean, professional home.',
    status: 'Fast & Local',
    image: 'public/images/Note-Books-A4.jpg' // Add image URL here
  },
  {
    id: 225,
    name: 'Note Books A5',
    category: 'Digital Printing',
    price: '7,000 RWF',
    description: 'We make handy A5 notebooks fast compact, branded companions for meetings and on‑the‑go ideas that keep your logo in use every day.',
    status: 'Fast & Local',
    image: 'public/images/Note-Books-A5.jpg' // Add image URL here
  },
  {
    id: 226,
    name: 'Poster A4',
    category: 'Digital Printing',
    price: '500 RWF',
    description: 'We create compact A4 posters fast perfect for indoor walls, doors, and notice boards where you need a clear message to stand out in a small space.',
    status: 'Fast & Local',
    image: 'public/images/Poster-A4.jpg' // Add image URL here
  },
  {
    id: 227,
    name: 'Poster A3',
    category: 'Digital Printing',
    price: '1,000 RWF',
    description: 'We design impactful A3 posters fast ideal for corridors, windows, and display boards where bold visuals and clear messaging need a bit more space to shine.',
    status: 'Fast & Local',
    image: 'public/images/Poster-A3.jpg' // Add image URL here
  },
  {
    id: 228,
    name: 'Poster A2',
    category: 'Digital Printing',
    price: '5,000 RWF',
    description: 'We design large‑format A2 posters fast—perfect for big campaigns, storefronts, and venues where your message needs to dominate the room.',
    status: 'Fast & Local',
    image: 'public/images/Poster-A2.jpg' // Add image URL here
  },
  {
    id: 229,
    name: 'Poster A1',
    category: 'Digital Printing',
    price: '10,000 RWF',
    description: 'We design towering A1 posters fast made to dominate big spaces, grab attention from afar, and turn every wall into a bold brand statement.',
    status: 'Fast & Local',
    image: 'public/images/Poster-A1.png' // Add image URL here
  },
  {
    id: 230,
    name: 'Poster A0',
    category: 'Digital Printing',
    price: '15,000 RWF',
    description: 'We design massive A0 posters fast built for maximum impact at events, exhibitions, and storefronts where your message needs to be impossible to ignore.',
    status: 'Fast & Local',
    image: 'public/images/Poster-A0.jpg' // Add image URL here
  },
  {
    id: 231,
    name: 'Certificates (Print)',
    category: 'Digital Printing',
    price: '600 RWF',
    description: 'Professional certificate printing with high-quality paper and premium finishes for official documents and achievements.',
    status: 'Fast & Local',
    image: 'public/images/Certificates.jpg' // Add image URL here
  },
  {
    id: 301,
    name: 'Diaries A4',
    category: 'Offset Printing',
    price: '15,000 RWF',
    description: 'We create custom A4 diaries fast professional, branded planners that keep your year organized while keeping your logo in sight every day.',
    status: 'Fast & Local',
    image: 'public/images/Diaries-A4.jpg' // Add image URL here
  },
  {
    id: 302,
    name: 'Diaries A5',
    category: 'Offset Printing',
    price: '12,000 RWF',
    description: 'We create compact A5 diaries fast smart, branded planners that fit in your bag and keep your schedule (and your logo) close at hand all year.',
    status: 'Fast & Local',
    image: 'public/images/Diaries-A5.jpg' // Add image URL here
  },
  {
    id: 303,
    name: 'Calendars A2',
    category: 'Offset Printing',
    price: '8,500 RWF',
    description: 'We design bold A2 calendars fast eye‑catching wall planners that showcase your brand every day of the year, in any office or workspace.',
    status: 'Fast & Local',
    image: 'public/images/Calendars-A2.jpg' // Add image URL here
  },
  {
    id: 304,
    name: 'Desk Calendars',
    category: 'Offset Printing',
    price: '6,500 RWF',
    description: 'We create smart, branded desk calendars fast practical, always-visible planners that keep your schedule and your logo in front of clients all year long.',
    status: 'Fast & Local',
    image: 'public/images/Desk-Calendars.jpg' // Add image URL here
  },
  {
    id: 305,
    name: 'Magazines',
    category: 'Offset Printing',
    price: '15,000 RWF',
    description: 'We produce polished, publication‑ready magazines fast perfect for storytelling, features, and visuals that keep readers turning every page with your brand in hand.',
    status: 'Fast & Local',
    image: 'public/images/Magazines.png' // Add image URL here
  },
  {
    id: 306,
    name: 'Flyers A5',
    category: 'Offset Printing',
    price: '150 RWF',
    description: 'We design powerful A5 flyers fast compact layouts with room for detail, perfect for promotions, menus, and event spotlights that your audience won’t miss.',
    status: 'Fast & Local',
    image: 'public/images/Flyers-A5.jpg' // Add image URL here
  },
  {
    id: 307,
    name: 'Flyers A6',
    category: 'Offset Printing',
    price: '120 RWF',
    description: 'We design pocket‑size A6 flyers fast small but striking handouts that make your message easy to share and hard to forget.',
    status: 'Fast & Local',
    image: 'public/images/Flyers-A6.jpg' // Add image URL here
  },
  {
    id: 308,
    name: 'Company Profiles A4',
    category: 'Offset Printing',
    price: '20,000 RWF',
    description: 'We craft professional A4 company profiles fast clear, print‑ready documents that showcase your business story with structure, detail, and confidence.',
    status: 'Fast & Local',
    image: 'public/images/Company-Profiles-A4.jpg' // Add image URL here
  },
  {
    id: 309,
    name: 'Company Profiles A5',
    category: 'Offset Printing',
    price: '15,000 RWF',
    description: '100% recycled cotton canvas with soft hand-feel, made for sustainable brand activations.',
    status: 'Fast & Local',
    image: 'public/images/Company-Profiles-A5.jpg' // Add image URL here
  },
  {
    id: 310,
    name: 'Brochures A4',
    category: 'Offset Printing',
    price: '700 RWF',
    description: 'We create professional A4 brochures fast crisp layouts with plenty of space to showcase your brand, products, and visuals in style.',
    status: 'Fast & Local',
    image: 'public/images/Brochure-A4.jpg' // Add image URL here
  },
  {
    id: 311,
    name: 'Brochures A5',
    category: 'Offset Printing',
    price: '1,200 RWF',
    description: 'We design compact A5 brochures fast engaging, easy‑to‑carry layouts that tell your story clearly and keep your brand in every hand.',
    status: 'Fast & Local',
    image: 'public/images/Brochures-A5.jpg' // Add image URL here
  },
  {
    id: 312,
    name: 'Booklet A4',
    category: 'Offset Printing',
    price: '6,000 RWF',
    description: 'We produce professional A4 booklets fast ideal for catalogs, profiles, and presentations that need space for detail without losing visual impact.',
    status: 'Fast & Local',
    image: 'public/images/Booklet-A4.jpg' // Add image URL here
  },
  {
    id: 313,
    name: 'Booklet A5',
    category: 'Offset Printing',
    price: '5,000 RWF',
    description: 'We create compact A5 booklets fast perfect for clear, concise storytelling that fits comfortably in every hand.',
    status: 'Fast & Local',
    image: 'public/images/Booklet-A5.jpg' // Add image URL here
  },
  {
    id: 314,
    name: 'Booklet A6',
    category: 'Offset Printing',
    price: '3,000 RWF',
    description: 'We produce handy, pocket‑size A6 booklets fast—ideal for mini catalogs, guides, and info packs that keep your message close at hand.',
    status: 'Fast & Local',
    image: 'public/images/Booklet-A6.jpg' // Add image URL here
  },
  {
    id: 315,
    name: 'Poster A4',
    category: 'Offset Printing',
    price: '450 RWF',
    description: 'We design sharp A4 posters fast ideal for doors, walls, and notice boards where you need your message to stand out in limited space.',
    status: 'Fast & Local',
    image: 'public/images/Posters-A4.jpg' // Add image URL here
  },
  {
    id: 316,
    name: 'Poster A3',
    category: 'Offset Printing',
    price: '800 RWF',
    description: 'We create bold A3 posters fast perfect for hallways, windows, and displays where strong visuals and clear messages need extra room to shine.',
    status: 'Fast & Local',
    image: 'public/images/Posters-A3.jpg' // Add image URL here
  },
  {
    id: 317,
    name: 'Poster A2',
    category: 'Offset Printing',
    price: '4,000 RWF',
    description: 'We produce impactful A2 posters fast big, vibrant visuals that command attention in shops, events, and public spaces where your message needs to stand tall.',
    status: 'Fast & Local',
    image: 'public/images/Posters-A2.png' // Add image URL here
  },
  {
    id: 318,
    name: 'Poster A1',
    category: 'Offset Printing',
    price: '7,000 RWF',
    description: 'We design large-scale A1 posters fast high-impact visuals built to stand out at a distance and turn any big wall into powerful brand space.',
    status: 'Fast & Local',
    image: 'public/images/Posters-A1.jpg' // Add image URL here
  },
  {
    id: 319,
    name: 'Poster A0',
    category: 'Offset Printing',
    price: '10,000 RWF',
    description: 'We create giant A0 posters fast huge, high-impact displays that dominate any venue and make your message impossible to miss.',
    status: 'Fast & Local',
    image: 'public/images/Posters-A0.jpg' // Add image URL here
  },
  {
    id: 320,
    name: 'Note Books A4',
    category: 'Offset Printing',
    price: '12,000 RWF',
    description: 'We produce custom A4 notebooks fast professional, branded pages that turn everyday notes into a subtle showcase for your business.',
    status: 'Fast & Local',
    image: 'public/images/Notes-Books-A4.jpg' // Add image URL here
  },
  {
    id: 321,
    name: 'Note Books A5',
    category: 'Offset Printing',
    price: '7,000 RWF',
    description: 'We produce handy A5 notebooks fast compact, branded jotters that keep your ideas organized and your logo in sight wherever you go.',
    status: 'Fast & Local',
    image: 'public/images/Notes-Books-A5.jpg' // Add image URL here
  },
  {
    id: 322,
    name: 'Receipt Books A4',
    category: 'Offset Printing',
    price: '7,000 RWF',
    description: 'We produce clear, professional A4 receipt books fast branded, easy‑to-use pads that keep every transaction neatly recorded and organized.',
    status: 'Fast & Local',
    image: 'public/images/Receipt-Books-A4.jpg' // Add image URL here
  },
  {
    id: 323,
    name: 'Receipt Books A5',
    category: 'Offset Printing',
    price: '5,000 RWF',
    description: 'We produce compact A5 receipt books fast branded, easy‑to‑handle pads that keep your daily transactions clear, tidy, and professional.',
    status: 'Fast & Local',
    image: 'public/images/Receipt-Books-A5.jpg' // Add image URL here
  },
  {
    id: 324,
    name: 'Receipt Books A6',
    category: 'Offset Printing',
    price: '3,500 RWF',
    description: 'We produce pocket-size A6 receipt books fast branded, on-the-go pads that make recording transactions quick, clear, and professional anywhere.',
    status: 'Fast & Local',
    image: 'public/images/Receipt-Books-A6.png' // Add image URL here
  },
  {
    id: 325,
    name: 'Folders',
    category: 'Offset Printing',
    price: '7,000 RWF',
    description: 'We create branded folders fast sturdy, stylish covers that keep your documents organized while presenting your company with a sharp, professional edge.',
    status: 'Fast & Local',
    image: 'public/images/Folders.jpg' // Add image URL here
  },
  {
    id: 326,
    name: 'Label',
    category: 'Offset Printing',
    price: '250 RWF',
    description: 'We print custom labels fast crisp, durable tags that brand your products, packages, and parcels with a clear, professional finish.',
    status: 'Fast & Local',
    image: 'public/images/Label.png' // Add image URL here
  },
  {
    id: 327,
    name: 'Flags',
    category: 'Offset Printing',
    price: '800 RWF',
    description: 'We produce bold, high‑visibility flags fast built to wave your brand proudly at events, storefronts, and outdoor spaces that demand attention.',
    status: 'Fast & Local',
    image: 'public/images/Flags.jpg' // Add image URL here
  },
  {
    id: 401,
    name: 'Pull up material/ sqm Print material',
    category: 'Large Format',
    price: '10,000 RWF',
    description: 'We print premium pull-up material by the square meter fast vibrant, durable graphics tailored to your exact size, ready for flawless displays every time.',
    status: 'Fast & Local',
    image: 'public/images/Pull-up-material-sqm-Print-material.jpg' // Add image URL here
  },
  {
    id: 402,
    name: 'Narrow Base Pull up',
    category: 'Large Format',
    price: '90,000 RWF',
    description: 'Show off your brand with our Narrow Base Pull Up banners – printed in high-definition color on premium material, cut exactly to your required size. Lightweight, durable, and easy to set up, they deliver sharp, professional displays event after event.',
    status: 'Fast & Local',
    image: 'public/images/Narrow-Base-Pull-up.jpg' // Add image URL here
  },
  {
    id: 403,
    name: 'Wide Base Pull up',
    category: 'Large Format',
    price: '130,000 RWF',
    description: 'Command attention with our Wide Base Pull Up banners – printed in rich, high-impact color on top-grade material and customized to your exact dimensions. With a stable, wide base and crisp, long-lasting graphics, they’re built for standout, professional displays at any event or venue.',
    status: 'Fast & Local',
    image: 'public/images/Wide-Base-Pull-up.jpg' // Add image URL here
  },
  {
    id: 404,
    name: 'Beach flags',
    category: 'Large Format',
    price: '450,000 RWF',
    description: 'Turn heads outdoors with our Beach Flags – printed in bold, UV-resistant color on durable fabric and tailored to your preferred size and shape. Lightweight, weather-ready, and easy to assemble, they deliver striking, high-visibility branding at beaches, events, forecourts, and storefronts.',
    status: 'Fast & Local',
    image: 'public/images/Beach-flags.jpeg' // Add image URL here
  },
  {
    id: 405,
    name: 'Tear Drop',
    category: 'Large Format',
    price: '250,000 RWF',
    description: 'Stand out with our Tear Drop flags – bold, UV-resistant prints on durable fabric, shaped to grab attention and built for effortless, all‑weather displays.',
    status: 'Fast & Local',
    image: 'public/images/Tear-Drop.jpg' // Add image URL here
  },
  {
    id: 406,
    name: 'Banner',
    category: 'Large Format',
    price: '5,000 RWF',
    description: 'Get noticed with our custom Banners – sharp, full-color prints on tough, weather-resistant material, sized to fit any space for bold, professional branding indoors or out.',
    status: 'Fast & Local',
    image: 'public/images/Banner.jpg' // Add image URL here
  },
  {
    id: 407,
    name: 'Mesh Banner',
    category: 'Large Format',
    price: '10,000 RWF',
    description: 'Go big outdoors with our Mesh Banners – high-impact, full-color prints on wind‑permeable, tear-resistant material, perfect for fences, scaffolding, and large outdoor displays.',
    status: 'Fast & Local',
    image: 'public/images/Mesh-Banner.jpg' // Add image URL here
  },
  {
    id: 408,
    name: 'Backlit',
    category: 'Large Format',
    price: '7,000 RWF',
    description: 'Light up your message with our Backlitr prints – ultra-vivid, high-resolution graphics on premium backlit film, made to glow brilliantly in lightboxes and illuminated displays.',
    status: 'Fast & Local',
    image: 'public/images/Backlit.jpg' // Add image URL here
  },
  {
    id: 409,
    name: 'Clear Sticker',
    category: 'Large Format',
    price: '18,000 RWF',
    description: 'Keep it sleek with our Clear Stickers – crisp, full-color prints on transparent, durable vinyl, perfect for subtle, high-end branding on glass, packaging, and products.',
    status: 'Fast & Local',
    image: 'public/images/Clear-Sticker.jpg' // Add image URL here
  },
  {
    id: 410,
    name: 'Matte Sticker',
    category: 'Large Format',
    price: '8,000 RWF',
    description: 'Choose our Matte Stickers for a smooth, non-glare finish – rich, full-color prints on premium, writeable vinyl, ideal for labels, packaging, and sophisticated branding.',
    status: 'Fast & Local',
    image: 'public/images/Matte-Sticker.jpg' // Add image URL here
  },
  {
    id: 411,
    name: 'Vinyl Sticker',
    category: 'Large Format',
    price: '8,000 RWF',
    description: 'Make it stick with our Vinyl Stickers – vibrant, full-color prints on tough, waterproof vinyl, perfect for long‑lasting labels, promos, and brand decals indoors or out.',
    status: 'Fast & Local',
    image: 'public/images/Vinyl-Sticker.jpg' // Add image URL here
  },
  {
    id: 412,
    name: 'One Way Vision',
    category: 'Large Format',
    price: '9,000 RWF',
    description: 'Transform your windows with One Way Vision – vivid, full-color graphics on perforated film that brand the outside while maintaining clear visibility from inside. Perfect for storefronts, vehicles, and glass facades.',
    status: 'Fast & Local',
    image: 'public/images/One-Way-Vision.jpg' // Add image URL here
  },
  {
    id: 413,
    name: 'Sticker on foam Board',
    category: 'Large Format',
    price: '15,000 RWF',
    description: 'Add depth to your message with Sticker on Foam Board – sharp, full-color prints mounted on lightweight, rigid foam, ideal for presentations, displays, and indoor signage.',
    status: 'Fast & Local',
    image: 'public/images/Sticker-on-foam-Board.jpg' // Add image URL here
  },
  {
    id: 414,
    name: 'ABS Board',
    category: 'Large Format',
    price: '40,000 RWF',
    description: 'Choose ABS Board for tough, professional signage – crisp, full-color prints on rigid, impact-resistant panels, perfect for long-lasting indoor and outdoor displays.',
    status: 'Fast & Local',
    image: 'public/images/ABS-Board.jpg' // Add image URL here
  },
  {
    id: 415,
    name: '3D Letters',
    category: 'Large Format',
    price: '500,000 RWF',
    description: 'Give your brand extra impact with 3D Letters – precision-cut, durable, and finished in your choice of colors and effects for bold, premium signage indoors or out.',
    status: 'Fast & Local',
    image: 'public/images/3D-Letters.jpg' // Add image URL here
  },
  {
    id: 501,
    name: 'T-Shirt',
    category: 'Promotional Materials',
    price: '15,000 RWF',
    description: 'Put your brand on our custom T‑Shirts – vivid, long-lasting prints on soft, comfortable fabric, perfect for uniforms, events, promotions, and merch that people actually want to wear.',
    status: 'Fast & Local',
    image: 'public/images/T-Shirt.png' // Add image URL here
  },
  {
    id: 502,
    name: 'Polo T-Shirt',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: 'Elevate your look with our custom Polo T‑Shirts – sharp, long-lasting prints or embroidery on premium, breathable fabric, ideal for smart uniforms, corporate events, and upscale branded merch.',
    status: 'Fast & Local',
    image: 'public/images/Polo-T-Shirt.jpg' // Add image URL here
  },
  {
    id: 503,
    name: 'Cup Branding',
    category: 'Promotional Materials',
    price: '15,000 RWF',
    description: 'Brand every sip with our custom Cup Branding – sharp, full-color designs on quality cups, ideal for cafés, events, offices, and promotions that keep your logo in hand all day.',
    status: 'Fast & Local',
    image: 'public/images/Cup-Branding.jpg' // Add image URL here
  },
  {
    id: 504,
    name: 'Caps',
    category: 'Promotional Materials',
    price: '6,500 RWF',
    description: 'Top off your brand with custom Caps – premium hats with crisp print or embroidery, perfect for uniforms, giveaways, events, and everyday merch that keeps your logo on display.',
    status: 'Fast & Local',
    image: 'public/images/Caps.png' // Add image URL here
  },
  {
    id: 505,
    name: 'Standard Pens',
    category: 'Promotional Materials',
    price: '3,500 RWF',
    description: 'Write your brand into every day with our Standard Pens – smooth-writing, reliable, and customized with your logo for cost-effective giveaways, office use, and events.',
    status: 'Fast & Local',
    image: 'public/images/Standard-Pens.jpg' // Add image URL here
  },
  {
    id: 506,
    name: 'VIP Pens',
    category: 'Promotional Materials',
    price: '30,000 RWF',
    description: 'Sign in style with our VIP Pens – elegant, smooth-writing pens with premium finishes and custom branding, perfect for executives, gifts, and high-end corporate events.',
    status: 'Fast & Local',
    image: 'public/images/VIP-Pens.jpg' // Add image URL here
  },
  {
    id: 507,
    name: 'Ceramics',
    category: 'Promotional Materials',
    price: '80,000 RWF',
    description: 'Upgrade your branding with custom Ceramics – high-quality mugs, plates, and more printed in vivid, lasting color, perfect for corporate gifts, retail, cafés, and everyday brand exposure.',
    status: 'Fast & Local',
    image: 'public/images/Ceramics.jpg' // Add image URL here
  },
  {
    id: 508,
    name: 'Flash Disks',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: 'Store and share with style using our branded Flash Disks – reliable, high-capacity drives customized with your logo, ideal for corporate gifts, events, and everyday business use.',
    status: 'Fast & Local',
    image: 'public/images/Flash-Disks.jpg' // Add image URL here
  },
  {
    id: 509,
    name: 'Umbrellas',
    category: 'Promotional Materials',
    price: '30,000 RWF',
    description: 'Stay visible in any weather with our branded Umbrellas – sturdy, wind-resistant canopies with sharp logo printing, perfect for corporate gifts, events, and everyday on-the-go branding.',
    status: 'Fast & Local',
    image: 'public/images/Umbrellas.jpg' // Add image URL here
  },
  {
    id: 510,
    name: 'Staff Uniforms',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: 'Unify your team with custom Staff Uniforms – professionally branded, comfortable, and durable apparel that reinforces your image, boosts team pride, and keeps your brand looking sharp every day',
    status: 'Fast & Local',
    image: 'public/images/Staff-Uniforms.jpg' // Add image URL here
  },
  {
    id: 511,
    name: 'Wrist Band',
    category: 'Promotional Materials',
    price: '4,000 RWF',
    description: 'Wear your brand with our custom Wrist Bands – comfortable, durable, and boldly printed or embossed, perfect for events, access control, campaigns, and giveaways that keep your message on hand.',
    status: 'Fast & Local',
    image: 'public/images/Wrist-Band.jpg' // Add image URL here
  },
  {
    id: 512,
    name: 'Mugs',
    category: 'Promotional Materials',
    price: '15,000 RWF',
    description: 'Warm up your branding with custom Mugs – vivid, long-lasting prints on quality ceramic, perfect for offices, gifts, cafés, and daily use that keeps your logo in sight.',
    status: 'Fast & Local',
    image: 'public/images/Mugs.jpg' // Add image URL here
  },
  {
    id: 513,
    name: 'Labels',
    category: 'Promotional Materials',
    price: '50,000 RWF',
    description: 'Brand it right with our custom Labels – sharp, full-color prints on quality adhesive materials, perfect for products, packaging, and organizing with a professional finish.',
    status: 'Fast & Local',
    image: 'public/images/Labelss.png' // Add image URL here
  },
  {
    id: 514,
    name: 'Awards(Trophies)',
    category: 'Promotional Materials',
    price: '180,000 RWF',
    description: 'Honor achievement with custom Awards & Trophies – premium materials, elegant designs, and precise branding that turn recognition into a lasting, display-worthy statement.',
    status: 'Fast & Local',
    image: 'public/images/Awards(Trophies).jpg' // Add image URL here
  },
  {
    id: 515,
    name: 'Button Badges',
    category: 'Promotional Materials',
    price: '10,000 RWF',
    description: 'Pin on your message with custom Button Badges – vibrant, durable designs perfect for events, campaigns, promotions, and fun everyday branding.',
    status: 'Fast & Local',
    image: 'public/images/Button-Badges.jpg' // Add image URL here
  },
  {
    id: 516,
    name: 'IDs',
    category: 'Promotional Materials',
    price: '3,500 RWF',
    description: 'Secure your brand identity with custom IDs – durable, full-color cards with photos, logos, and variable data, perfect for staff, students, events, and controlled access.',
    status: 'Fast & Local',
    image: 'public/images/IDs.jpg' // Add image URL here
  },
  {
    id: 517,
    name: 'Key Holders',
    category: 'Promotional Materials',
    price: '7,000 RWF',
    description: 'Carry your brand everywhere with custom Key Holders – durable, stylish, and logo-branded, ideal for gifts, giveaways, and everyday visibility on the go.',
    status: 'Fast & Local',
    image: 'public/images/Key-Holders.jpg' // Add image URL here
  },
  {
    id: 518,
    name: 'Business Cards Holders',
    category: 'Promotional Materials',
    price: '15,000 RWF',
    description: 'Keep your first impression sharp with custom Business Card Holders – sleek, durable cases branded with your logo, perfect for professionals, client gifts, and corporate branding.',
    status: 'Fast & Local',
    image: 'public/images/Business-Cards-Holders.jpg' // Add image URL here
  },
  {
    id: 519,
    name: 'Bags( Back Pack and Tote Bags)',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: 'Carry your brand further with custom Bags – from sturdy Back Packs to stylish Tote Bags, printed or embroidered with your logo for everyday use, events, gifts, and on-the-move visibility.',
    status: 'Fast & Local',
    image: 'public/images/Bags( Back Pack and Tote Bags).jpg' // Add image URL here
  },
  {
    id: 520,
    name: 'Watches',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: 'Keep your brand on time with custom Watches – quality timepieces branded with your logo, perfect for executive gifts, awards, promotions, and everyday premium visibility.',
    status: 'Fast & Local',
    image: 'public/images/Watches.jpg' // Add image URL here
  },
  {
    id: 521,
    name: 'Clocks',
    category: 'Promotional Materials',
    price: '80,000 RWF',
    description: 'Keep your brand in sight all day with custom Clocks – accurate, durable wall or desk designs printed with your logo, ideal for offices, receptions, and premium corporate gifts.',
    status: 'Fast & Local',
    image: 'public/images/Clocks.jpg' // Add image URL here
  },
  {
    id: 522,
    name: 'Lanyards',
    category: 'Promotional Materials',
    price: '4,500 RWF',
    description: 'Keep your brand front and center with custom Lanyards – durable, comfortable, and vividly printed, ideal for IDs, events, staff, and giveaways that stay visible all day.',
    status: 'Fast & Local',
    image: 'public/images/Lanyards.jpg' // Add image URL here
  },
  {
    id: 523,
    name: 'Mouse pads',
    category: 'Promotional Materials',
    price: '25,000 RWF',
    description: 'Stay in sight all day with custom Mouse Pads – smooth, non-slip surfaces printed in full color with your logo, perfect for offices, gaming, promotions, and everyday brand exposure.',
    status: 'Fast & Local',
    image: 'public/images/Mouse-pads.jpg' // Add image URL here
  },
  {
    id: 524,
    name: 'Stamp',
    category: 'Promotional Materials',
    price: '30,000 RWF',
    description: 'Make your mark with custom Stamps – crisp, clean impressions, self-inking or manual, branded with your details for documents, packaging, and everyday office use.',
    status: 'Fast & Local',
    image: 'public/images/Stamp.jpg' // Add image URL here
  },
  {
    id: 525,
    name: 'Name tag',
    category: 'Promotional Materials',
    price: '10,000 RWF',
    description: 'Introduce your team professionally with custom Name Tags – durable, full-color badges featuring names, roles, and your logo, perfect for staff, events, retail, and hospitality.',
    status: 'Fast & Local',
    image: 'public/images/Name-tag.jpg' // Add image URL here
  },
  {
    id: 526,
    name: 'A3 Wood Frame',
    category: 'Promotional Materials',
    price: '30,000 RWF',
    description: 'Frame your message in style with our A3 Wood Frames – premium, smooth-finished timber with crisp, edge-to-edge display, perfect for posters, certificates, photos, and signage.',
    status: 'Fast & Local',
    image: 'public/images/A3-Wood-Frame.jpg' // Add image URL here
  },
  {
    id: 527,
    name: 'A4 Wood Frame',
    category: 'Promotional Materials',
    price: '7,000 RWF',
    description: 'Showcase your content with our A4 Wood Frames – quality, smooth-finished timber that gives posters, certificates, photos, and signs a warm, professional look on any wall or desk.',
    status: 'Fast & Local',
    image: 'public/images/A4-Wood-Frame.jpg' // Add image URL here
  },
  {
    id: 528,
    name: 'A0 Snap Frame',
    category: 'Promotional Materials',
    price: '150,000 RWF',
    description: 'Go big with our A0 Snap Frames – sleek, front‑loading aluminum frames that let you change posters in seconds, perfect for high-impact, professional displays in malls, offices, and public spaces.',
    status: 'Fast & Local',
    image: 'public/images/A0-Snap-Frame.jpg' // Add image URL here
  },
  {
    id: 529,
    name: 'A1 Snap Frame',
    category: 'Promotional Materials',
    price: '135,000 RWF',
    description: 'Stand out with our A1 Snap Frames – slim, front-loading aluminum frames that let you swap posters in seconds, ideal for eye-catching, professional displays in shops, offices, and venues.',
    status: 'Fast & Local',
    image: 'public/images/A1-Snap-Frame.jpg' // Add image URL here
  },
  {
    id: 530,
    name: 'A2 Snap Frame',
    category: 'Promotional Materials',
    price: '120,000 RWF',
    description: 'Display with ease using our A2 Snap Frames – slim, front-loading aluminum frames that make poster changes quick and simple, perfect for tidy, professional signage in offices, corridors, and retail spaces.',
    status: 'Fast & Local',
    image: 'public/images/A2-Snap-Frame.jpg' // Add image URL here
  },
  {
    id: 531,
    name: 'A3 Snap Frame',
    category: 'Promotional Materials',
    price: '100,000 RWF',
    description: 'Present your message neatly with our A3 Snap Frames – slim, front‑loading aluminum frames for quick poster changes and clean, professional displays in offices, receptions, and retail.',
    status: 'Fast & Local',
    image: 'public/images/A3-Snap-Frame.jpg' // Add image URL here
  },
  {
    id: 532,
    name: 'A4 Snap Frame',
    category: 'Promotional Materials',
    price: '80,000 RWF',
    description: 'Keep it sharp with our A4 Snap Frames – slim, front-loading aluminum frames that make swapping inserts fast and easy, perfect for notices, promos, and smart office or reception displays',
    status: 'Fast & Local',
    image: 'public/images/A4-Snap-Frame.jpg' // Add image URL here
  },
  {
    id: 601,
    name: 'Round neck',
    category: 'Garments',
    price: '4,800 RWF',
    description: 'Keep it casual and cohesive with our Round Neck T‑Shirts – soft, comfortable fabric with sharp, long-lasting prints, perfect for everyday wear, events, promotions, and staff uniforms.',
    status: 'Fast & Local',
    image: 'public/images/Round-neck.jpg' // Add image URL here
  },
  {
    id: 602,
    name: 'V-neck',
    category: 'Garments',
    price: '6,000 RWF',
    description: 'Sharpen your style with our V‑Neck T‑Shirts – soft, breathable fabric with crisp, durable prints, ideal for smart-casual uniforms, events, promotions, and everyday branded wear.',
    status: 'Fast & Local',
    image: 'public/images/V-neck.jpg' // Add image URL here
  },
  {
    id: 603,
    name: 'Polo shirt(Lacoste)',
    category: 'Garments',
    price: '10,000 RWF',
    description: 'Step up your branding with our Polo Shirts – premium, breathable fabric with crisp print or embroidery, perfect for smart uniforms, corporate wear, and polished promo outfits',
    status: 'Fast & Local',
    image: 'public/images/Polo-shirt.jpg' // Add image URL here
  },
  {
    id: 604,
    name: 'Jersey',
    category: 'Garments',
    price: '15,000 RWF',
    description: 'Hydrophobic technical textile delivering excellent water resistance for premium outerwear.',
    status: 'Fast & Local',
    image: 'public/images/Jersey.jpg' // Add image URL here
  },
  {
    id: 605,
    name: 'Uniforms for students',
    category: 'Garments',
    price: '15,000 RWF',
    description: 'Dress success with our Student Uniforms – comfortable, durable, and neatly branded with your school identity, designed to keep learners looking smart, confident, and ready for every school day.',
    status: 'Fast & Local',
    image: 'public/images/Uniforms-for-students.jpg' // Add image URL here
  },
  {
    id: 606,
    name: 'Gowns',
    category: 'Garments',
    price: '75,000 RWF',
    description: 'Celebrate every milestone with our Gowns – well-tailored, comfortable, and elegantly finished, perfect for graduations, ceremonies, choirs, and formal academic events.',
    status: 'Fast & Local',
    image: 'public/images/Gowns.jpg' // Add image URL here
  },
  {
    id: 607,
    name: 'Trousers',
    category: 'Garments',
    price: '25,000 RWF',
    description: 'Keep it smart and comfortable with our custom Trousers – durable, well-fitted, and professionally tailored, ideal for staff uniforms, school wear, and polished everyday corporate style.',
    status: 'Fast & Local',
    image: 'public/images/Trousers.jpg' // Add image URL here
  },
  {
    id: 608,
    name: 'Shirts',
    category: 'Garments',
    price: '25,000 RWF',
    description: 'Stay sharp with our custom Shirts – well-tailored, comfortable, and branded with print or embroidery, perfect for corporate wear, staff uniforms, schools, and formal events.',
    status: 'Fast & Local',
    image: 'public/images/Shirts.jpg' // Add image URL here
  },
  {
    id: 609,
    name: 'Ties',
    category: 'Garments',
    price: '15,000 RWF',
    description: 'Finish the look with our custom Ties – quality fabrics in your colors, patterns, and logo, perfect for corporate wear, school uniforms, hospitality, and formal events.',
    status: 'Fast & Local',
    image: 'public/images/Ties.jpg' // Add image URL here
  },
  {
    id: 610,
    name: 'Scarf',
    category: 'Garments',
    price: '7,000 RWF',
    description: 'Wrap your brand in style with our custom Scarves – soft, high-quality fabrics in your colors, patterns, and logo, perfect for corporate wear, schools, promotions, and elegant gifts.',
    status: 'Fast & Local',
    image: 'public/images/Scarf.jpg' // Add image URL here
  },
  {
    id: 611,
    name: 'Security uniforms',
    category: 'Garments',
    price: '50,000 RWF',
    description: 'Equip your team with professional Security Uniforms – durable, comfortable, and clearly branded, with practical features and high-visibility options that keep your guards looking authoritative and ready for duty.',
    status: 'Fast & Local',
    image: 'public/images/Security-uniforms.jpeg' // Add image URL here
  },
  {
    id: 612,
    name: 'Jackets',
    category: 'Garments',
    price: '35,000 RWF',
    description: 'Stay protected and on-brand with our custom Jackets – warm, durable outerwear with sharp print or embroidery, perfect for staff, events, and premium branded gifts in any weather.',
    status: 'Fast & Local',
    image: 'public/images/Jackets.jpg' // Add image URL here
  },
  {
    id: 613,
    name: 'Kitenge jackets',
    category: 'Garments',
    price: '30,000 RWF',
    description: 'Stand out in style with our Kitenge Jackets – bold African prints, expertly tailored for comfort and flair, perfect for cultural events, corporate branding, and everyday statement wear.',
    status: 'Fast & Local',
    image: 'public/images/Kitenge-jackets.jpg' // Add image URL here
  },
  {
    id: 614,
    name: 'Over coat',
    category: 'Garments',
    price: '30,000 RWF',
    description: 'Stay warm and polished with our custom Over Coats – tailored for comfort and durability, branded with your logo for a smart, professional look in any weather.',
    status: 'Fast & Local',
    image: 'public/images/Over-coat.jpg' // Add image URL here
  },
  {
    id: 616,
    name: 'Overall',
    category: 'Garments',
    price: '30,000 RWF',
    description: 'Protect your team with our custom Overalls – tough, comfortable, and practical workwear, branded with your logo and built for demanding jobs in workshops, factories, and field sites.',
    status: 'Fast & Local',
    image: 'public/images/Overall.jpg' // Add image URL here
  },
  {
    id: 617,
    name: 'Apron',
    category: 'Garments',
    price: '15,000 RWF',
    description: 'Keep work clean and on-brand with our custom Aprons – durable, easy-care fabric with sharp print or embroidery, perfect for kitchens, cafés, salons, workshops, and events.',
    status: 'Fast & Local',
    image: 'public/images/Apron.jpg' // Add image URL here
  }


];

const categories = ['All', 'Creative', 'Digital Printing', 'Offset Printing', 'Large Format', 'Promotional Materials', 'Garments'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const filteredProducts = products.filter(product => {
    // Category filter
    const matchesCategory = selectedCategory === 'All' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    // Search filter
    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate specifications based on product
  const getProductSpecs = (product) => {
    const baseSpecs = {
      'Product Name': product.name,
      'Category': product.category,
      'Price': product.price,
      'Status': product.status,
      'Description': product.description,
    };

    // Add category-specific specifications
    const categorySpecs = {};

    if (product.category === 'Creative') {
      categorySpecs['Service Type'] = 'Design & Creative Services';
      categorySpecs['Turnaround Time'] = '3-7 business days';
      categorySpecs['File Formats Accepted'] = 'AI, PSD, PDF, PNG, JPG';
      categorySpecs['Color Mode'] = 'CMYK / RGB';
      categorySpecs['Resolution'] = '300 DPI minimum';
    } else if (product.category === 'Digital Printing') {
      const sizeMatch = product.name.match(/A(\d+)/);
      const size = sizeMatch ? `A${sizeMatch[1]}` : 'Standard';
      categorySpecs['Paper Size'] = size;
      categorySpecs['Print Quality'] = 'High Resolution (1200 DPI)';
      categorySpecs['Paper Type'] = 'Premium Coated/Uncoated';
      categorySpecs['Color Mode'] = 'Full Color CMYK';
      categorySpecs['Finishing Options'] = 'Lamination, UV Coating, Die-cutting';
      categorySpecs['Minimum Order'] = '50 units';
    } else if (product.category === 'Offset Printing') {
      const sizeMatch = product.name.match(/A(\d+)/);
      const size = sizeMatch ? `A${sizeMatch[1]}` : 'Standard';
      categorySpecs['Paper Size'] = size;
      categorySpecs['Print Quality'] = 'Professional Offset Quality';
      categorySpecs['Paper Type'] = 'Offset Paper (80-300 GSM)';
      categorySpecs['Color Mode'] = 'Full Color CMYK + Pantone';
      categorySpecs['Minimum Order'] = '500 units';
      categorySpecs['Turnaround Time'] = '5-10 business days';
    } else if (product.category === 'Large Format') {
      categorySpecs['Material Type'] = 'Vinyl, Mesh, Canvas, Backlit';
      categorySpecs['Print Width'] = 'Up to 3 meters';
      categorySpecs['Resolution'] = '720 DPI';
      categorySpecs['Weather Resistance'] = 'UV Protected, Water Resistant';
      categorySpecs['Installation'] = 'Professional installation available';
      categorySpecs['Durability'] = '3-5 years outdoor';
    } else if (product.category === 'Promotional Materials') {
      categorySpecs['Material'] = 'Various (Cotton, Polyester, Ceramic, etc.)';
      categorySpecs['Customization'] = 'Logo/Branding Available';
      categorySpecs['Minimum Order'] = '25-100 units (varies by item)';
      categorySpecs['Production Time'] = '7-14 business days';
      categorySpecs['Packaging'] = 'Individual or bulk packaging';
    } else if (product.category === 'Garments') {
      categorySpecs['Fabric'] = 'Cotton, Polyester, Blend';
      categorySpecs['Sizes Available'] = 'XS, S, M, L, XL, XXL, XXXL';
      categorySpecs['Customization'] = 'Embroidery, Screen Printing, Heat Transfer';
      categorySpecs['Color Options'] = 'Multiple color options available';
      categorySpecs['Minimum Order'] = '12 units';
      categorySpecs['Production Time'] = '7-10 business days';
    }

    return { ...baseSpecs, ...categorySpecs };
  };

  const handleSpecSheetClick = (e, product) => {
    e.preventDefault();
    setSelectedProduct(product);
  };

  const closeSpecSheet = () => {
    setSelectedProduct(null);
  };

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
            <h2 className="page-title">Raw Materials Wellspring</h2>
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
        {/* Search Section */}
        <section className="search-section">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search products by name or description..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => handleSearchChange('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </section>

        {/* Material Categories */}
        <section className="categories-section">
          <h3 className="categories-title">MATERIAL CATEGORIES</h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="products-section">
          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <p>No products found matching your search criteria.</p>
            </div>
          ) : (
            <>
              <div className="products-info">
                <p className="products-count">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
                </p>
              </div>
              <div className="products-grid">
                {currentProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      {product.image && product.image.trim() !== '' ? (
                        <>
                          <div
                            className="product-image-blur"
                            style={{
                              backgroundImage: `url(${product.image})`
                            }}
                          ></div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="product-image-img"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              e.target.style.display = 'none';
                              const blurBg = e.target.parentElement.querySelector('.product-image-blur');
                              if (blurBg) blurBg.style.display = 'none';
                              const placeholder = e.target.parentElement.querySelector('.image-placeholder');
                              if (placeholder) placeholder.style.display = 'flex';
                            }}
                          />
                        </>
                      ) : null}
                      <div
                        className="image-placeholder"
                        style={{ display: (product.image && product.image.trim() !== '') ? 'none' : 'flex' }}
                      >
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
                        <button
                          onClick={(e) => handleSpecSheetClick(e, product)}
                          className="spec-sheet-link"
                        >
                          SPEC SHEET &gt;
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    ← Previous
                  </button>

                  <div className="pagination-pages">
                    {(() => {
                      const pages = [];
                      const showEllipsis = totalPages > 7;

                      if (!showEllipsis) {
                        // Show all pages if 7 or fewer
                        for (let i = 1; i <= totalPages; i++) {
                          pages.push(
                            <button
                              key={i}
                              className={`pagination-page ${currentPage === i ? 'active' : ''}`}
                              onClick={() => handlePageChange(i)}
                              aria-label={`Page ${i}`}
                            >
                              {i}
                            </button>
                          );
                        }
                      } else {
                        // Always show first page
                        pages.push(
                          <button
                            key={1}
                            className={`pagination-page ${currentPage === 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(1)}
                            aria-label="Page 1"
                          >
                            1
                          </button>
                        );

                        // Show ellipsis if current page is far from start
                        if (currentPage > 3) {
                          pages.push(
                            <span key="ellipsis-start" className="pagination-ellipsis">
                              ...
                            </span>
                          );
                        }

                        // Show pages around current
                        const start = Math.max(2, currentPage - 1);
                        const end = Math.min(totalPages - 1, currentPage + 1);

                        for (let i = start; i <= end; i++) {
                          if (i !== 1 && i !== totalPages) {
                            pages.push(
                              <button
                                key={i}
                                className={`pagination-page ${currentPage === i ? 'active' : ''}`}
                                onClick={() => handlePageChange(i)}
                                aria-label={`Page ${i}`}
                              >
                                {i}
                              </button>
                            );
                          }
                        }

                        // Show ellipsis if current page is far from end
                        if (currentPage < totalPages - 2) {
                          pages.push(
                            <span key="ellipsis-end" className="pagination-ellipsis">
                              ...
                            </span>
                          );
                        }

                        // Always show last page
                        pages.push(
                          <button
                            key={totalPages}
                            className={`pagination-page ${currentPage === totalPages ? 'active' : ''}`}
                            onClick={() => handlePageChange(totalPages)}
                            aria-label={`Page ${totalPages}`}
                          >
                            {totalPages}
                          </button>
                        );
                      }

                      return pages;
                    })()}
                  </div>

                  <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      {/* Specifications Sheet Modal */}
      {selectedProduct && (
        <div className="spec-modal-overlay" onClick={closeSpecSheet}>
          <div className="spec-modal" onClick={(e) => e.stopPropagation()}>
            <div className="spec-modal-header">
              <h2 className="spec-modal-title">Product Specifications</h2>
              <button className="spec-modal-close" onClick={closeSpecSheet} aria-label="Close">
                ×
              </button>
            </div>
            <div className="spec-modal-content">
              <div className="spec-product-header">
                <h3 className="spec-product-name">{selectedProduct.name}</h3>
                <span className="spec-product-category">{selectedProduct.category}</span>
              </div>
              <div className="spec-table">
                {Object.entries(getProductSpecs(selectedProduct)).map(([key, value]) => (
                  <div key={key} className="spec-row">
                    <div className="spec-label">{key}</div>
                    <div className="spec-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="spec-modal-footer">
              <button className="spec-modal-button" onClick={closeSpecSheet}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Support */}
      <section id="contact-support" className="contact-section">
        <div className="contact-header">
          <p className="contact-kicker">Need help fast?</p>
          <h2 className="contact-title">Contact Support</h2>
          <p className="contact-subtitle">
            Reach us directly by email, WhatsApp, or phone. We respond quickly using the same color-rich experience you see across Quick Fit Supplier.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon email-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.217l8 5.066 8-5.066V7H4zm16 10V9.383l-7.34 4.646a1 1 0 0 1-1.32 0L4 9.383V17h16z" />
              </svg>
            </div>
            <div className="contact-content">
              <h3 className="contact-card-title">Email Support</h3>
              <p className="contact-card-text">
                Send us project details, artwork, or questions and we&rsquo;ll reply with clear next steps.
              </p>
              <div className="contact-actions">
                <a className="contact-button" href="mailto:muhizimurekatetequeen@gmail.com">
                  Email muhizimurekatetequeen@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon whatsapp-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2a10 10 0 0 0-8.6 15.05L2 22l5.08-1.42A10 10 0 1 0 12.04 2zm0 2a8 8 0 0 1 6.83 12.21l-.27.42a1 1 0 0 0-.11.22l-.5 1.06-1.15-.38a1 1 0 0 0-.74.04l-.66.31a6.9 6.9 0 0 1-2.85.64 6.93 6.93 0 0 1-6.92-6.93A6.93 6.93 0 0 1 12.04 4z" />
              </svg>
            </div>
            <div className="contact-content">
              <h3 className="contact-card-title">WhatsApp or Call</h3>
              <p className="contact-card-text">
                Message us artwork, specs, or quick questions. Prefer a voice chat? Call either line and we&rsquo;ll help immediately.
              </p>
              <div className="contact-actions">
                <a
                  className="contact-button"
                  href="https://wa.me/250788737390"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp +250 788 737 390
                </a>
                <a
                  className="contact-button secondary"
                  href="https://wa.me/250787562222"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp +250 787 562 222
                </a>
                <div className="contact-inline">
                  <a className="contact-link" href="tel:+250788737390">
                    Call +250 788 737 390
                  </a>
                  <span className="contact-divider">•</span>
                  <a className="contact-link" href="tel:+250787562222">
                    Call +250 787 562 222
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <p className="copyright">© 2025 Quick Fit Supplier Ltd. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#contact-support" className="footer-link">Contact Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
