import React, { useState } from 'react'; import { ChevronDown, MapPin, Phone, Mail, Home, Ruler, Calendar, FileText } from 'lucide-react'; export default function PropertyWebsite() { const [expandedFloor, setExpandedFloor] = useState(null); const [selectedImage, setSelectedImage] = useState(0); const images = [ 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1582321473834-a87d82c8f939?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1448932335452-4a3f3e2d1f71?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1556821552-5f2b8f1aadb5?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1486421530267-8c0fee57f0c5?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop', ]; const contacts = [ { name: 'Shitanshu Badkur', phone: '9424303330', email: 'sanubadkur57@gmail.com' }, { name: 'Sachin Badkur', phone: '9425636649', email: '' }, { name: 'Abhishek Badkur', phone: '8989534303', email: '' }, { name: 'Badkur Paridhan', phone: '+91 6268553191', email: 'ishanbadkur21@gmail.com' }, ]; const floors = [ { name: 'Basement', area: '1,774 sq ft' }, { name: 'Ground Floor', area: '1,786 sq ft' }, { name: 'First Floor', area: '1,763 sq ft' }, { name: 'Front Open Area', area: '384 sq ft' }, ]; const advantages = [ { title: 'Prime Main Road Location', description: 'Located at Barman Chowrah, one of Kareli\'s busiest intersections with maximum brand visibility', icon: '📍' }, { title: 'High Road Width', description: '35 ft road width ensures easy vehicular access, drop-offs, and prominent signage placement', icon: '🛣️' }, { title: 'Excellent Frontage', description: '24 ft building frontage provides outstanding storefront display potential', icon: '🏪' }, { title: 'Massive Catchment Population', description: '5 lakh+ combined population within 20 km radius with town footfall of 2,500-3,000 daily', icon: '👥' }, { title: 'Railway Junction Advantage', description: 'Only high-footfall railway station in the region makes Kareli the undisputed commercial hub', icon: '🚂' }, { title: 'Proven Market Demand', description: 'Trends (Reliance Retail) operating nearby for years validates strong consumer demand', icon: '✅' }, { title: 'Convenient Parking', description: 'Two-wheeler parking available in vicinity, aligned with local commute preference', icon: '🅿️' }, { title: 'Modern Infrastructure', description: 'Newly constructed in 2021 with lift shaft space available for installation', icon: '🏢' }, ]; return (
{/* Navigation */}
Kareli Commercial Property
Premium Retail Location
{/* Hero Section */}
Premier Commercial Space in Kareli
5,323+ sq ft multi-floor retail opportunity on main arterial road. Ideal for organized retail, food & beverage, services, and diverse business formats.

5 Lakh+
Catchment Population
5,323 sq ft
Total Built-up Area
2,500–3,000
Daily Market Footfall
2021
Year of Construction
{/* Property Specifications */}
Property Specifications
Building Frontage
24 ft width

Excellent storefront display

Total Usable Area
5,707 sq ft

3 floors + front open area

Expansion Option
Available

Additional space within limits

Floor-wise Breakdown
{floors.map((floor, idx) => (
setExpandedFloor(expandedFloor === idx ? null : idx)} style={{ width: '100%', padding: '1.2rem', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px', fontWeight: 500, color: 'var(--color-text-primary)' }} > {floor.name}
{floor.area}
 {expandedFloor === idx && (
Spacious floor with modern construction (2021). Lift shaft space available for installation. Suitable for multi-brand retail, food courts, service centers, and diverse commercial formats.

)}
))}
{/* Location Advantages */}
Why Kareli?
Prime commercial location with exceptional market dynamics

{advantages.map((adv, idx) => (
{adv.icon}
{adv.title}
{adv.description}

))}
{/* Property Gallery */}
Property Gallery
📸 Property Photos
{images.map((_, idx) => ( setSelectedImage(idx)} style={{ width: '100%', height: '100px', background: 'var(--color-background-secondary)', border: selectedImage === idx ? '3px solid #0066cc' : '1px solid var(--color-border-tertiary)', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: 'var(--color-text-secondary)', transition: 'all 0.2s' }} > Photo {idx + 1} ))}
{/* Lease Terms */}
Lease Terms
Lease Duration
To be mutually agreed (Recommended: 5–9 years with lock-in period)

Rent & Escalation
Flexible based on floor selection & time period. Annual increment: 5–10% p.a. (negotiable)

Fit-out & Setup
To be done by tenant at their own cost as per brand standards

ℹ️ All terms are open for negotiation and will be formalized through a mutually agreed commercial lease agreement.

{/* Contact Section */}
Get in Touch
{contacts.map((contact, idx) => (
{ e.currentTarget.style.borderColor = '#0066cc'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-tertiary)'; e.currentTarget.style.boxShadow = 'none'; }}>
{contact.name}
{contact.phone && (
{contact.phone}
)} {contact.email && (
{contact.email}
)}
))}
{/* Footer CTA */}
Ready to Grow Your Business?
Schedule a site visit and explore how this premium commercial space can elevate your brand in Kareli's thriving market.

{ e.currentTarget.style.background = '#0052a3'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#0066cc'; e.currentTarget.style.transform = 'scale(1)'; }} onClick={() => { alert('Contact the property team to schedule your site visit!'); }}> Schedule Site Visit
); }
