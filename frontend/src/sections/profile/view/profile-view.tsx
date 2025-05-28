import React, { useState } from 'react';

const COVER_IMAGE =
    'https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?q=80&w=3216&auto=format&fit=crop';

const GalleryGrid = () => (
    <div className="grid grid-cols-3 gap-2 mt-2">
        {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-full aspect-square">
                <img
                    src={COVER_IMAGE}
                    alt={`gallery-${i}`}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
        ))}
    </div>
);

const SubAccordion = ({ title }: { title: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="mt-2 border border-gray-200 rounded-md">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left px-4 py-2 flex justify-between items-center font-medium bg-gray-100 rounded-md"
            >
                <span>{title}</span>
                <span>{open ? '−' : '+'}</span>
            </button>
            {open && <GalleryGrid />}
        </div>
    );
};

export const ProfileView = () => (
    <div className="w-full max-w-xl mx-auto bg-white shadow-md rounded-xl p-4">
        {/* Cover and Avatar */}
        <div className="relative flex h-28 w-full justify-center bg-cover">
            <img
                className="absolute h-28 w-full rounded-lg object-cover"
                src={COVER_IMAGE}
                alt="cover"
            />
            <div className="absolute -bottom-12 h-20 w-20 rounded-full border-[4px] border-white bg-pink-400">
                <img
                    className="h-full w-full rounded-full object-cover"
                    //avatar 
                />
            </div>
        </div>

        {/* Bio */}
        <div className="mt-14 text-center">
            <p className="text-2xl font-bold">Vorakit Nontiboot</p>
            <p className="text-sm font-light text-gray-600">
                Art Director | Creative & Art Direction
            </p>
        </div>

        {/* Always-open Sections with Sub-Accordions */}
        <div className="mt-6 px-4">
            <div className="mb-6">
                <p className="text-base font-bold uppercase mb-2">Social Media</p>
                <SubAccordion title="Facebook Gallery" />
                <SubAccordion title="Instagram Gallery" />
                <SubAccordion title="TikTok Gallery" />
            </div>

            <div className="mb-6">
                <p className="text-base font-bold uppercase mb-2">Portfolio</p>
                <SubAccordion title="Behance Gallery" />
                <SubAccordion title="Dribbble Gallery" />
                <SubAccordion title="Personal Site" />
            </div>

            <div className="mb-6">
                <p className="text-base font-bold uppercase mb-2">Contact Us</p>
                <SubAccordion title="WhatsApp" />
                <SubAccordion title="Email Gallery" />
                <SubAccordion title="Contact Form" />
            </div>
        </div>
    </div>
);
