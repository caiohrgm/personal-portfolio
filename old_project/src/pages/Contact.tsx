export default function Contact() {
    // Define the message to be sent
    const message: string = "Hi Caio. I am here to talk about your services.";
    // Encode the message to handle special characters
    const encodedMessage: string = encodeURIComponent(message);
    // Construct the WhatsApp link
    const whatsappLink: string = `https://wa.me/5583991230473?text=${encodedMessage}`;

    // Define the Google Maps Static API URL for a more zoomed-out view of Brazil
    const googleMapsApiKey = "AIzaSyAxX6uizoTQ3LvcAusliMwio1NC6QU-NNY"; // Substitua pela sua chave de API
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=-7.2300,-35.8880&zoom=4&size=600x300&markers=color:red%7Clabel:A%7C-7.2300,-35.8880&key=${googleMapsApiKey}`;

    return (
        <div className="text-white min-h-screen w-full bg-[#080808] px-8 py-12">
            <h1 className="text-5xl font-bold font-raleway text-[#9C9C9C]">Contact</h1>
            <p className="text-[#9C9C9C] mt-4 font-mono tracking-wide">
                Feel free to reach out through any of my contact options.
            </p>

            {/* Contact Info */}
            <div className="mt-8">
                <div className="bg-[#1B1B1B] p-6 rounded-lg">
                    <h2 className="text-2xl font-bold font-raleway text-[#9C9C9C]">Contact Information</h2>
                    <ul className="text-[#9C9C9C] mt-4">
                        <li>Email: <a href="mailto:caioh_m@outlook.com" className="hover:text-white">caioh_m@outlook.com</a></li>
                        <li>
                            Phone: <a href={whatsappLink} className="hover:text-white">+55 83 99123-0473</a>
                        </li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/caiohmedeiros/" className="hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                        <li>GitHub: <a href="https://github.com/caiohrgm" className="hover:text-white" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
                    </ul>
                </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8">
                <div className="bg-[#1B1B1B] p-6 rounded-lg">
                    <h2 className="text-2xl font-bold font-raleway text-[#9C9C9C]">Business Hours</h2>
                    <p className="text-[#9C9C9C] mt-4">I'm available to work from:</p>
                    <ul className="text-[#9C9C9C] mt-2">
                        <li>5:00 pm - 9:00 pm (GMT-3)</li>
                        <li>12:00 pm - 4:00 pm (EST)</li>
                        <li>10:00 pm - 02:00 am (CET)</li>
                    </ul>
                </div>
            </div>

            {/* Google Map Static */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold font-raleway text-[#9C9C9C]">My Location</h2>
                <div className="mt-4">
                    <img
                        src={mapUrl}
                        alt="Campina Grande Location"
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

