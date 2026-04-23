// Imports
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiKofi, SiGumroad, SiDeviantart, SiGithub } from "react-icons/si";

// Colours
export const C = {
    lavender: "#c4a0d8",
    rose: "#e0a0c0",
    sage: "#90c0a8",
    peach: "#e0b890",
    deep: "#b87ab0",
    text: "#f0e8f4",
    mid: "#c4a0c8",
    light: "#7a5888",
    accent: "#9860b8",
};

// Navigations
export const NAV = [
    { id: "home", label: "Home", path: "/home" },
    { id: "portfolio", label: "Portfolio", path: "/portfolio" },
    { id: "commissions", label: "Commissions", path: "/commissions" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "links", label: "Links", path: "/links" },
];

// The star field bavkgroundyippii
const PHI = 137.508;
export const STARS = Array.from({ length: 72 }, (_, i) => ({
    id: i,
    x: (i * PHI * 1.618) % 100,
    y: (i * PHI * 2.414) % 100,
    r: 0.8 + (i % 4) * 0.55,
    tw: `tw${(i % 4) + 1}`,
    dur: 2.2 + (i % 7) * 0.55,
    del: (i % 11) * 0.7,
    col: ["rgba(255,248,255,.9)", "rgba(230,210,255,.9)", "rgba(255,230,248,.9)", "rgba(255,252,230,.9)"][i % 4],
}));

export const SPARKLES = [
    { x: 8, y: 12, s: 16, c: "#d4a0e8", d: 0 },
    { x: 92, y: 8, s: 12, c: "#e8c0a0", d: 1.2 },
    { x: 25, y: 88, s: 14, c: "#a0c8e8", d: 0.6 },
    { x: 75, y: 82, s: 18, c: "#d4a0e8", d: 2.1 },
    { x: 50, y: 5, s: 10, c: "#e8a0c0", d: 1.7 },
    { x: 15, y: 55, s: 13, c: "#c8e0a0", d: 0.4 },
    { x: 85, y: 45, s: 11, c: "#d4a0e8", d: 2.8 },
    { x: 62, y: 70, s: 15, c: "#e8c0a0", d: 1.0 },
    { x: 38, y: 40, s: 9, c: "#a0c8e8", d: 3.2 },
];

export const METEORS = [
    { id: 0, x: 10, y: 6, len: 140, totalDur: 14, delay: 0 },
    { id: 1, x: 55, y: 3, len: 110, totalDur: 17, delay: 4.8 },
    { id: 2, x: 25, y: 12, len: 160, totalDur: 20, delay: 9.5 },
    { id: 3, x: 75, y: 7, len: 100, totalDur: 13, delay: 2.2 },
    { id: 4, x: 42, y: 16, len: 130, totalDur: 22, delay: 15 },
    { id: 5, x: 4, y: 22, len: 120, totalDur: 18, delay: 7.1 },
    { id: 6, x: 85, y: 18, len: 90, totalDur: 16, delay: 11 },
];

// homepage avatar orofile picture thingy
export const AVATAR = "/art/jinx.png";

// homepage previews
export const HOME_PREVIEWS = [
    { src: "/art/fr.png", title: "Rhysand and Feyre" },
    { src: "/art/frPregnancy.png", title: "Feyre & Rhysand — Pregnancy" },
    { src: "/art/judeDress.png", title: "Jude Duarte's Dress" },
    { src: "/art/frWedding.png", title: "Wedding" },
];

// portfolio pieces
export const ART = [
    { id: 1, src: "/art/fMoon.png", title: "Feyre on the Moon", tags: ["Fanart", "ACOTAR", "Semi"], aspect: "4/5", col: ["#2a1840", "#4a2060"], icon: "Portrait" },
    { id: 2, src: "/art/ocSchool.png", title: "Soraia, James, and Skyler", tags: ["OC", "Full Illustration"], aspect: "1/1", col: ["#1a2840", "#203060"], icon: "Portrait" },
    { id: 3, src: "/art/sketches.png", title: "Sketches", tags: ["Sketch"], aspect: "16/10", col: ["#1a2838", "#184060"], icon: "Portrait" },
    { id: 4, src: "/art/a.png", title: "Queen Aelin Ashryver Galathynius", tags: ["Fanart", "Semi"], aspect: "4/5", col: ["#2a1830", "#601840"], icon: "Portrait" },
    { id: 5, src: "/art/xv.png", title: "Xaden and Violet", tags: ["Fanart", "Full Illustration"], aspect: "4/5", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 6, src: "/art/oc.png", title: "Self Portrait", tags: ["Full Illustration"], aspect: "4/5", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 7, src: "/art/jinx.png", title: "Jinx", tags: ["Fanart", "Simple"], aspect: "5/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 8, src: "/art/cLaraSchade.png", title: "Commission for author Lara Schade", tags: ["Commission", "Semi"], aspect: "3/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 9, src: "/art/cRebeccaKenney.png", title: "Commission for author Rebecca Kenney", tags: ["Commission", "Semi"], aspect: "3/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 10, src: "/art/frModern.png", title: "Feyre and Rhysand - Modern", tags: ["Fanart", "ACOTAR", "Full Illustration"], aspect: "3/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 11, src: "/art/frNC.png", title: "Feyre and Rhysand - Night Court", tags: ["Fanart", "ACOTAR", "Simple"], aspect: "3/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 12, src: "/art/frStarfall.png", title: "Feyre and Rhysand - Starfall", tags: ["Fanart", "ACOTAR", "Full Illustration"], aspect: "3/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 13, src: "/art/judeDress.png", title: "Jude Dress", tags: ["Fanart", "Simple"], aspect: "3/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 14, src: "/art/ocEyes.png", title: "Soraia and Jacob - Eyes", tags: ["Eyes", "OC"], aspect: "5/3", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 15, src: "/art/ocJS.png", title: "Jacob and Shad", tags: ["OC", "Simple"], aspect: "3/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 16, src: "/art/rnf.png", title: "Rhysand, Nyx, and Feyre", tags: ["Fanart", "Eyes", "ACOTAR"], aspect: "5/2", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 17, src: "/art/xvEyes.png", title: "Xaden and Violet - Eyes", tags: ["Fanart", "Eyes"], aspect: "5/3", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 18, src: "/art/frWedding.png", title: "Feyre and Rhysand - Wedding", tags: ["Fanart", "ACOTAR", "Full Illustration"], aspect: "3/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 19, src: "/art/frPregnancy.png", title: "Feyre and Rhysand - Pregnancy", tags: ["Fanart", "ACOTAR", "Simple"], aspect: "3/4", col: ["#201828", "#402858"], icon: "Portrait" },
    { id: 20, src: "/art/fr.png", title: "Feyre and Rhysand", tags: ["Fanart", "ACOTAR", "Semi"], aspect: "5/4", col: ["#201828", "#402858"], icon: "Portrait" },
];

// commission availability
export const COMMISSIONS_OPEN = true;

export const COMMISSION_SCHEDULE = {
    year: 2026,
    months: [
        { month: "January", spots: null },
        { month: "February", spots: null },
        { month: "March", spots: null },
        { month: "April", spots: null },
        { month: "May", spots: 0 },
        { month: "June", spots: 0 },
        { month: "July", spots: 4 },
        { month: "August", spots: 4 },
        { month: "September", spots: 3 },
        { month: "October", spots: 2 },
        { month: "November", spots: 0 },
        { month: "December", spots: 2 },
    ],
};

// conmission infos
export const COMMISSION_WHAT_YOU_SHOULD_KNOW = [
    "You can send a request for commissions to my email (aiphos.s.art@gmail.com). I do not take commissions via DMs.",
    "Specify whether your commission is for personal use, partial commercial, or full commercial.",
    "If I don't respond to your email within one week, it might have gone to my spam folder. You may DM me if you're awaiting a response.",
    "All payment is done via PayPal. Payment is due in full upfront, in USD, EUR, or NOK.",
    "I will start working on the commission once payment is received and confirmed.",
    "The estimated time to finish a commission is usually 1–6 weeks from the day the work begins, depending on the commission. I will notify and update you on the progress. A rushed commission will add a 25% fee.",
    "No AI is used, or will be used to create the artwork. The commissioner is strictly prohibited from using the commissioned artwork with AI to either enhance it or use it as training data.",
];

export const COMMISSION_COMMERCIAL_TYPES = [
    {
        title: "Personal Use",
        text: "If you are commissioning an artwork and only wish for personal enjoyment, a profile picture, or a gift for a friend, the price will be as listed.",
        mult: "× 1.0",
        accent: "rgba(100,200,140,.8)",
    },
    {
        title: "Partial Commercial Use",
        text: "If you are commissioning an artwork and intend to use it for social media promotions or advertisement, the price will be multiplied by 1,6 from the listed price.",
        mult: "× 1,6",
        accent: "#e0b890",
    },
    {
        title: "Full Commercial Use",
        text: "If you are commissioning an artwork and intend to use it for printing, merchandise, book covers, endpapers, etc., the price will be multiplied by 2,5 from the listed price.",
        mult: "× 2,5",
        accent: "#e0a0c0",
    },
];

export const COMMISSION_EXCLUSIVITY = [
    {
        title: "General",
        text: "The artist retains the copyright to all commissioned artwork unless otherwise agreed upon in writing.",
    },
    {
        title: "Personal Use Commissions",
        text: "Grants the commissioner the right to use the artwork for non-commercial purposes only.",
    },
    {
        title: "Partial Commercial Commissions",
        text: "Grants the commissioner the right to use the artwork for limited commercial purposes such as social media marketing. These rights are non-exclusive, meaning the artist retains the right to display the artwork on social media or in their portfolio.",
    },
    {
        title: "Full Commercial Commissions",
        text: "Grants the commissioner exclusive commercial usage rights to the artwork. This allows the commissioner to use the artwork for products, merchandise, publishing, and other commercial applications. The artist still retains authorship and the right to display the artwork in portfolios or on social media, unless confidentiality has been agreed upon.",
    },
    {
        title: "Additional Exclusivity",
        text: "If a commissioner requires any additional exclusivity restrictions, this must be discussed prior to the start of the commission and may include an additional licensing fee.",
    },
];

export const COMMISSION_TOS = {
    general: [
        "AI is completely excluded from the work process. The artwork is not in any way generated or referenced from AI.",
        "The commissioner may not use the commission for commercial use unless they have paid the commercial pricing.",
        "I reserve the right to post the commission to my social media with the commissioner's credit, unless discussed otherwise.",
        "Canvas sizes are a standard 4096×3026px or 3026×4096px at 300 DPI, delivered via email as a PNG file, unless agreed upon otherwise. Larger artwork sizes may include a fee.",
        "I reserve the right to keep discarded sketches for other use.",
        "I reserve the right to refuse any commission for any reason.",
    ],
    process: [
        "If the commissioner fails to pay or give notice within 48 hours of agreed pricing, the commission will be annulled and the slot will open again.",
        "When payment has been received and confirmed, I will begin the work.",
        "As soon as the sketch is ready, I will send it to the commissioner for approval or adjustments.",
        "The commissioner have the right to ask for and receive progress updates throughout the work.",
        "The commissioner will be notified if there is any delay during the process.",
        "Additional fees will be added for drastic changes after or close to the completion of the artwork.",
    ],
    cancellation: [
        "If you wish to cancel a commission, there will be no refund.",
        "If, for any unjustifiable reason, the commission cannot be completed, the commissioner will receive a full refund.",
    ],
    use: [
        "The commissioner is welcome to post the artwork to social media, with credit.",
        "The commissioner may do as they wish with the artwork in a non-commercial way, with the exception of altering the artwork itself or using it with AI in any way.",
    ],
};

// commissiion tiers
export const TIERS = [
    { id: 1, type: "Eyes", from: "$80", desc: "Eyes", col: "rgba(144,192,168,.15)", border: "rgba(144,192,168,.35)", icon: "Visibility" },
    { id: 2, type: "Simple", from: "$100", desc: "No background", col: "rgba(224,184,144,.15)", border: "rgba(224,184,144,.35)", icon: "Edit" },
    { id: 3, type: "Semi", from: "$160", desc: "Semi-background", col: "rgba(180,120,220,.15)", border: "rgba(180,120,220,.35)", icon: "AutoAwesome" },
    { id: 4, type: "Full Illustration", from: "$250", desc: "Full background", col: "rgba(224,160,192,.15)", border: "rgba(224,160,192,.35)", icon: "Palette" },
];

// commission tier prices and details
export const TIER_DETAILS = [
    {
        id: 1, name: "Eyes", col: "rgba(144,192,168,.15)", border: "rgba(144,192,168,.35)",
        desc: "Detailed eye illustrations. Can have up to three characters.",
        examples: ["/art/ocEyes.png", "/art/rnf.png", "/art/xvEyes.png"],
        variants: [
            { name: "Eyes (2 characters)", base: 80 },
            { name: "Eyes (3 characters)", base: 100 },
        ],
    },
    {
        id: 2, name: "Simple", col: "rgba(224,184,144,.15)", border: "rgba(224,184,144,.35)",
        desc: "Only character art, no background or just a flat coloured background. + $60 per extra character.",
        examples: ["/art/jinx.png", "/art/ocJS.png", "/art/frNC.png"],
        variants: [
            { name: "Bust", base: 100 },
            { name: "Half Body", base: 130 },
            { name: "Full Body", base: 170 },
        ],
    },
    {
        id: 3, name: "Semi", col: "rgba(180,120,220,.15)", border: "rgba(180,120,220,.35)",
        desc: "Character art with a semi background, not too complicated stuff. + $70 per extra character.",
        examples: ["/art/a.png", "/art/fr.png", "/art/fMoon.png"],
        variants: [
            { name: "Bust", base: 160 },
            { name: "Half Body", base: 190 },
            { name: "Full Body", base: 230 },
        ],
    },
    {
        id: 4, name: "Full Illustration", col: "rgba(224,160,192,.15)", border: "rgba(224,160,192,.35)",
        desc: "Character art with a full background. + $80 per extra character.",
        examples: ["/art/oc.png", "/art/frModern.png", "/art/xv.png"],
        variants: [
            { name: "Bust", base: 250 },
            { name: "Half Body", base: 310 },
            { name: "Full Body", base: 360 },
        ],
    },
];

// ─── Links ────────────────────────────────────────────────────────────────────
export const LINKS = [
    { label: "Instagram", handle: "@aiphos.s", Icon: FaInstagram, url: "https://www.instagram.com/aiphos.s", bg: "rgba(180,80,140,.18)", border: "rgba(220,120,170,.3)" },
    { label: "Twitter / X", handle: "@AiphosSophia", Icon: FaXTwitter, url: "https://x.com/AiphosSophia", bg: "rgba(80,140,200,.15)", border: "rgba(100,170,230,.28)" },
    { label: "DeviantArt", handle: "@aiphoss", Icon: SiDeviantart, url: "https://www.deviantart.com/aiphoss", bg: "rgba(80,200,96,.15)", border: "rgba(100,230,115,.28)" },
    { label: "Ko-fi", handle: "Support my work", Icon: SiKofi, url: "https://ko-fi.com/aiphos", bg: "rgba(200,160,60,.15)", border: "rgba(230,190,80,.28)" },
    { label: "Gumroad", handle: "Procreate brushes", Icon: SiGumroad, url: "https://aiphos.gumroad.com", bg: "rgba(200,80,186,.15)", border: "rgba(221,100,230,.28)" },
    { label: "Github", handle: "My github page where the website is hosted", Icon: SiGithub, url: "https://github.com/Sofilaxus", bg: "rgba(200,80,186,.15)", border: "rgba(221,100,230,.28)" },
];
