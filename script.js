const affirmations = [
    "The universe conspires in your favor, weaving threads of destiny through your every breath",
    "Like a phoenix rising from stardust, your spirit transcends all earthly limitations",
    "The cosmos recognizes the divine light that radiates from within your soul",
    "You are a celestial being having a human experience, infinite and eternal",
    "The ancient wisdom of a thousand suns flows through your veins",
    "Your aura shimmers with the crystalline essence of pure potential",
    "The moon and stars align to illuminate your magnificent path forward",
    "You are a sacred vessel overflowing with cosmic abundance and grace",
    "The divine energy of the universe dances through your magnificent existence",
    "Like morning dew upon a lotus blossom, your presence brings beauty to this realm",
    "The ethereal winds of fate whisper secrets of your imminent greatness",
    "You channel the mystical power of ancient mountains and flowing rivers",
    "Your chakras align in perfect harmony with the celestial symphony",
    "The astral plane trembles with anticipation of your spiritual awakening",
    "You are wrapped in the gossamer wings of angelic protection",
    "The sacred geometry of your soul creates ripples across dimensions",
    "Stardust remembers you, for you are made of the same cosmic essence",
    "Your third eye opens to reveal the infinite tapestry of possibility",
    "The Oracle speaks, and it proclaims your undeniable magnificence",
    "You walk between worlds, a bridge of light connecting earth and heaven",
    "The crystalline frequencies of your being resonate with universal love",
    "Ancient spirits gather to witness your extraordinary journey unfold",
    "Your soul's luminescence outshines the darkness of a thousand voids",
    "The fabric of reality bends to accommodate your transcendent vision",
    "You are cloaked in the mystical embrace of infinite consciousness",
    "The sacred flame within you burns with the intensity of a supernova",
    "Celestial beings bow before the radiant majesty of your true self",
    "Your spirit animal guides you through the enchanted forest of life",
    "The quantum field responds to your intentions with divine precision",
    "You are the alchemist transforming lead into gold through sheer presence",
    "The sacred nectar of the vine flows through you like liquid starlight, blessing your divine essence",
    "Your downward dog transcends the physical plane, ascending to heights unknown to mere mortals",
    "Rose quartz and amethyst crystals orbit your crown chakra in celestial perfection",
    "The aromatic wisps of lavender essential oil carry your prayers to the goddess herself",
    "You manifest abundance while sipping the elixir of fermented grapes under moonlight",
    "Your yoga mat becomes a portal to dimensions where inner peace reigns eternal",
    "The universe rewards your self-care rituals with cascades of prosperity and joy",
    "Like a warrior goddess in tree pose, you balance the cosmos on your fingertips",
    "Your wine glass holds not mere liquid, but the distilled essence of divine celebration",
    "Himalayan salt lamps illuminate the path to your most authentic, radiant self",
    "You bend reality as gracefully as you flow through your vinyasa sequence",
    "The crystals in your collection vibrate at the frequency of pure manifestation",
    "Your mindful sips of Pinot Noir align your chakras with the rhythm of the universe",
    "Sage smoke swirls around you, cleansing away all that does not serve your higher purpose",
    "In child's pose, you connect with the ancient earth mother's infinite wisdom",
    "Your essential oil diffuser releases aromatic prayers into the etheric realm",
    "The full moon charges your intentions as powerfully as it charges your crystal grid",
    "You are a divine feminine warrior, graceful in stillness, powerful in flow",
    "Your meditation practice opens doorways to parallel universes of infinite possibility",
    "Like fine wine, your soul deepens and enriches with each passing moment"
];

const broSuffixes = [
    "my guy",
    "bro",
    "king",
    "champ",
    "boss",
    "chief",
    "legend",
    "homie",
    "dude",
    "brother",
    "my dude",
    "big dog",
    "sport",
    "tiger",
    "ace"
];

function getRandomAffirmation() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    const randomSuffix = broSuffixes[Math.floor(Math.random() * broSuffixes.length)];
    return {
        main: randomAffirmation,
        suffix: `, ${randomSuffix}.`
    };
}

function displayAffirmation() {
    const mainText = document.getElementById('mainText');
    const broSuffix = document.getElementById('broSuffix');
    const affirmationBox = document.getElementById('affirmationBox');

    // Hide suffix immediately using class
    broSuffix.classList.remove('show');

    // Add fade out effect
    affirmationBox.style.opacity = '0';

    setTimeout(() => {
        const affirmation = getRandomAffirmation();

        // Set main text and suffix text (suffix still hidden)
        mainText.textContent = affirmation.main;
        broSuffix.textContent = affirmation.suffix;

        // Fade box back in
        affirmationBox.style.opacity = '1';

        // Fade in the bro suffix after a delay
        setTimeout(() => {
            broSuffix.classList.add('show');
        }, 1500);
    }, 300);
}

// Add CSS transition for opacity
document.getElementById('affirmationBox').style.transition = 'opacity 0.3s ease, transform 0.3s ease';

// Event listener for button
document.getElementById('newAffirmation').addEventListener('click', displayAffirmation);

// Optional: Click on the affirmation box itself
document.getElementById('affirmationBox').addEventListener('click', displayAffirmation);
document.getElementById('affirmationBox').style.cursor = 'pointer';
