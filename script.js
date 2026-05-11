// --- Ayan's 3D Portfolio Magic ---

// ১. পেজ লোড হওয়ার পর একটি স্বাগতম বার্তা
window.addEventListener('load', () => {
    console.log("%c 🚀 Welcome to Ayan's 3D Portfolio!", "color: #58a6ff; font-size: 20px; font-weight: bold;");
    console.log("৩ডি মডেলটি লোড হচ্ছে... একটু অপেক্ষা করো বন্ধু!");
});

// ২. মডেল ভিউয়ার এলিমেন্টটি খুঁজে বের করা
const modelViewer = document.querySelector('model-viewer');

// ৩. গাড়িটির ওপর ক্লিক করলে একটি ছোট অ্যানিমেশন বা রিঅ্যাকশন
modelViewer.addEventListener('click', () => {
    console.log("🚗 ঝিঁঝিঁ... গাড়িটি স্টার্ট দেওয়ার চেষ্টা করছ নাকি?");
    // তুমি চাইলে এখানে আরও শব্দ বা আলো যোগ করতে পারো ভবিষ্যতে
});

// ৪. মাউস বা হাতের আঙুল নড়ালে একটি ইফেক্ট (ঐচ্ছিক)
modelViewer.addEventListener('progress', (event) => {
    const progress = event.detail.totalProgress;
    if (progress === 1) {
        console.log("✅ ৩ডি মডেল পুরোপুরি লোড হয়ে গেছে! এখন তুমি এটা ঘুরাতে পারো।");
    }
});

// ৫. একটি মজার ম্যাজিক ফাংশন যা কনসোলে তোমার নাম দেখাবে
function showMagic() {
    const messages = [
        "ম্যাজিক শুরু হচ্ছে...",
        "৩ডি মডেলটি দারুণ লাগছে না?",
        "এটি তৈরি করেছেন ভবিষ্যৎ ইঞ্জিনিয়ার আয়ান!",
        "গাড়িটি তুমি ৩৬০ ডিগ্রি ঘুরাতে পারবে।"
    ];
    
    messages.forEach((msg, index) => {
        setTimeout(() => {
            console.log(`✨ ${msg}`);
        }, index * 1000);
    });
}

// ম্যাজিকটি রান করা
showMagic();
