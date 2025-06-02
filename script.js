const stories = [
    {
        title: "The Clock’s Perjury Plot",
        summary: "A clock is tried for lying about time, disrupting a village festival.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/clock_perjury.pdf",
        timestamp: "2025-05-06"
    },
    {
        title: "The Sandal’s Sticky Theft",
        summary: "A sandal is accused of stealing a villager’s prized slipper.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/sandal_theft.pdf",
        timestamp: "2025-05-08"
    },
    {
        title: "The Fan’s Defiant Dissent",
        summary: "A ceiling fan is charged with stirring rebellion in a courtroom.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/fan_dissent.pdf",
        timestamp: "2025-05-10"
    },
    {
        title: "The Cart’s Extortion Escapade",
        summary: "A cart wheel is tried for extorting a farmer’s crops.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/cart_extortion.pdf",
        timestamp: "2025-05-12"
    },
    {
        title: "The Lamp’s Libelous Glow",
        summary: "A lamp is accused of casting scandalous shadows.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/lamp_libel.pdf",
        timestamp: "2025-05-14"
    },
    {
        title: "The Pen’s Espionage Ploy",
        summary: "A pen is charged with leaking corporate secrets.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/pen_espionage.pdf",
        timestamp: "2025-05-16"
    },
    {
        title: "The Laptop’s Corporate Coup",
        summary: "A laptop is tried for plotting a startup takeover.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/laptop_coup.pdf",
        timestamp: "2025-05-18"
    },
    {
        title: "The Coffee Machine’s Sabotage Scheme",
        summary: "A coffee machine is accused of brewing office chaos.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/coffee_sabotage.pdf",
        timestamp: "2025-05-20"
    },
    {
        title: "The Projector’s Framing Fiasco",
        summary: "A projector is charged with framing an innocent intern.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/projector_framing.pdf",
        timestamp: "2025-05-22"
    },
    {
        title: "The App Icon’s Identity Theft",
        summary: "An app icon is tried for stealing a startup’s brand.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/app_identity.pdf",
        timestamp: "2025-05-24"
    },
    {
        title: "The Well’s Watery Trespass",
        summary: "A well is tried for stealing water from a rival well.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/well_trespass.pdf",
        timestamp: "2025-05-26"
    },
    {
        title: "The Mango Tree’s Slanderous Shade",
        summary: "A mango tree is accused of spreading lies about a farmer’s honor.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/mango_slander.pdf",
        timestamp: "2025-05-27"
    },
    {
        title: "The Tractor’s Rebellious Roar",
        summary: "A tractor is tried for refusing to plow a farmer’s fields.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/tractor_mutiny.pdf",
        timestamp: "2025-05-28"
    },
    {
        title: "The Banyan Branch’s Vandalous Bend",
        summary: "A banyan branch is accused of tripping festival dancers.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/branch_vandalism.pdf",
        timestamp: "2025-05-29"
    },
    {
        title: "The Great Guffaw Gambit",
        summary: "All objects and characters clash over a law banning laughter.",
        fileUrl: "https://raw.githubusercontent.com/VihaanToTheRescue/The-Lawkward-Files/main/stories/guffaw_gambit.pdf",
        timestamp: "2025-05-30"
    }
];

function loadStories() {
    const storyList = document.getElementById('story-list');
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.summary}</p>
            <p class="date">Published on ${new Date(story.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            <div>
                <a href="${story.fileUrl}" target="_blank">Read Story</a>
            </div>
        `;
        storyList.appendChild(storyCard);
    });
}

window.onload = loadStories;