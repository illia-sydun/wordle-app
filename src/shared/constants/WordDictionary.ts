import { WordDictionaryEntry } from '@shared/types/WordDictionary.ts';

export const WORD_DICTIONARY = [
    {
        word: 'lemon',
        hints: [
            { id: 'lemon-hint-1', label: 'A common ingredient in drinks' },
            { id: 'lemon-hint-2', label: "It's yellow" },
            { id: 'lemon-hint-3', label: 'Sour in taste' },
            { id: 'lemon-hint-4', label: 'Often used in cooking and baking' },
        ],
    },
    {
        word: 'sugar',
        hints: [
            { id: 'sugar-hint-1', label: 'Sweetens your coffee' },
            { id: 'sugar-hint-2', label: 'Comes in grains' },
            { id: 'sugar-hint-3', label: 'Used in baking' },
            { id: 'sugar-hint-4', label: 'Can be made from cane' },
        ],
    },
    {
        word: 'youth',
        hints: [
            { id: 'youth-hint-1', label: 'Opposite of old age' },
            { id: 'youth-hint-2', label: 'Time of life before adulthood' },
            { id: 'youth-hint-3', label: 'Associated with vitality' },
            { id: 'youth-hint-4', label: 'Synonym for young people' },
        ],
    },
    {
        word: 'water',
        hints: [
            { id: 'water-hint-1', label: 'Covers most of the Earth' },
            { id: 'water-hint-2', label: 'Essential for life' },
            { id: 'water-hint-3', label: 'You drink it' },
            { id: 'water-hint-4', label: 'Can be solid, liquid, or gas' },
        ],
    },
    {
        word: 'chair',
        hints: [
            { id: 'chair-hint-1', label: 'You sit on it' },
            { id: 'chair-hint-2', label: 'Can have four legs' },
            { id: 'chair-hint-3', label: 'Common in homes and offices' },
            { id: 'chair-hint-4', label: 'Can be made of wood or plastic' },
        ],
    },
    {
        word: 'river',
        hints: [
            { id: 'river-hint-1', label: 'Flowing body of water' },
            { id: 'river-hint-2', label: 'Larger than a stream' },
            { id: 'river-hint-3', label: 'Can flow into a sea or ocean' },
            {
                id: 'river-hint-4',
                label: 'Used for travel and trade in ancient times',
            },
        ],
    },
    {
        word: 'input',
        hints: [
            { id: 'input-hint-1', label: 'Data entered into a computer' },
            { id: 'input-hint-2', label: 'Can be from a keyboard' },
            { id: 'input-hint-3', label: 'Opposite of output' },
            { id: 'input-hint-4', label: 'Essential for programming' },
        ],
    },
    {
        word: 'grape',
        hints: [
            { id: 'grape-hint-1', label: 'Used to make wine' },
            { id: 'grape-hint-2', label: 'Can be green or purple' },
            { id: 'grape-hint-3', label: 'Grows in clusters' },
            { id: 'grape-hint-4', label: 'Eaten fresh or dried' },
        ],
    },
    {
        word: 'table',
        hints: [
            { id: 'table-hint-1', label: 'You eat on it' },
            { id: 'table-hint-2', label: 'Typically has four legs' },
            { id: 'table-hint-3', label: 'Used for placing items' },
            {
                id: 'table-hint-4',
                label: 'Can be made of wood, metal, or glass',
            },
        ],
    },
    {
        word: 'fruit',
        hints: [
            { id: 'fruit-hint-1', label: 'Opposite of vegetables' },
            { id: 'fruit-hint-2', label: 'Sweet and fleshy product' },
            { id: 'fruit-hint-3', label: 'Contains seeds' },
            { id: 'fruit-hint-4', label: 'Eaten as snacks or desserts' },
        ],
    },
    {
        word: 'night',
        hints: [
            { id: 'night-hint-1', label: 'Opposite of day' },
            { id: 'night-hint-2', label: 'Time for sleep' },
            { id: 'night-hint-3', label: 'Stars are visible' },
            { id: 'night-hint-4', label: 'Cooler than daytime' },
        ],
    },
    {
        word: 'knife',
        hints: [
            { id: 'knife-hint-1', label: 'Used for cutting' },
            { id: 'knife-hint-2', label: 'Has a sharp edge' },
            { id: 'knife-hint-3', label: 'Found in kitchens' },
            { id: 'knife-hint-4', label: 'Can be a tool or weapon' },
        ],
    },
    {
        word: 'house',
        hints: [
            { id: 'house-hint-1', label: 'Place where people live' },
            { id: 'house-hint-2', label: 'Can have multiple rooms' },
            { id: 'house-hint-3', label: 'Provides shelter' },
            { id: 'house-hint-4', label: 'Owned or rented' },
        ],
    },
    {
        word: 'joker',
        hints: [
            { id: 'joker-hint-1', label: 'A card in a deck' },
            { id: 'joker-hint-2', label: 'Known for humor' },
            { id: 'joker-hint-3', label: 'Can be a wild card' },
            { id: 'joker-hint-4', label: 'Character in Batman' },
        ],
    },
    {
        word: 'olive',
        hints: [
            { id: 'olive-hint-1', label: 'Used to make oil' },
            { id: 'olive-hint-2', label: 'Can be green or black' },
            { id: 'olive-hint-3', label: 'Eaten as a snack or in salads' },
            { id: 'olive-hint-4', label: 'Associated with peace' },
        ],
    },
    {
        word: 'bread',
        hints: [
            { id: 'bread-hint-1', label: 'Baked food staple' },
            { id: 'bread-hint-2', label: 'Made from flour and water' },
            { id: 'bread-hint-3', label: 'Can be leavened or unleavened' },
            { id: 'bread-hint-4', label: 'Comes in many varieties' },
        ],
    },
    {
        word: 'apple',
        hints: [
            {
                id: 'apple-hint-1',
                label: 'Keeps the doctor away if eaten daily',
            },
            { id: 'apple-hint-2', label: 'Can be red, green, or yellow' },
            { id: 'apple-hint-3', label: 'Used in pies and ciders' },
            { id: 'apple-hint-4', label: 'Associated with New York City' },
        ],
    },
    {
        word: 'piano',
        hints: [
            { id: 'piano-hint-1', label: 'Musical instrument' },
            { id: 'piano-hint-2', label: 'Has black and white keys' },
            { id: 'piano-hint-3', label: 'Used in classical and jazz music' },
            { id: 'piano-hint-4', label: 'Can be grand or upright' },
        ],
    },
    {
        word: 'value',
        hints: [
            { id: 'value-hint-1', label: 'Worth or importance' },
            { id: 'value-hint-2', label: 'Can be numerical' },
            { id: 'value-hint-3', label: 'Associated with ethics or art' },
            { id: 'value-hint-4', label: 'Opposite of worthless' },
        ],
    },
    {
        word: 'drink',
        hints: [
            { id: 'drink-hint-1', label: 'Liquid for consumption' },
            { id: 'drink-hint-2', label: 'Can be water, juice, or soda' },
            { id: 'drink-hint-3', label: 'Opposite of eat' },
            { id: 'drink-hint-4', label: 'Often accompanies meals' },
        ],
    },
    {
        word: 'ocean',
        hints: [
            { id: 'ocean-hint-1', label: 'Vast body of salt water' },
            { id: 'ocean-hint-2', label: "Covers 71% of Earth's surface" },
            { id: 'ocean-hint-3', label: 'Home to countless species' },
            { id: 'ocean-hint-4', label: 'Explored less than space' },
        ],
    },
    {
        word: 'flame',
        hints: [
            { id: 'flame-hint-1', label: 'Produces light and heat' },
            { id: 'flame-hint-2', label: 'Result of combustion' },
            { id: 'flame-hint-3', label: 'Can be seen in a fireplace' },
            { id: 'flame-hint-4', label: 'Essential for cooking' },
        ],
    },
    {
        word: 'ghost',
        hints: [
            { id: 'ghost-hint-1', label: 'Spectral figure' },
            { id: 'ghost-hint-2', label: 'Said to haunt places' },
            { id: 'ghost-hint-3', label: 'Associated with Halloween' },
            { id: 'ghost-hint-4', label: "Can't be touched" },
        ],
    },
    {
        word: 'jewel',
        hints: [
            { id: 'jewel-hint-1', label: 'Precious stone' },
            { id: 'jewel-hint-2', label: 'Used in jewelry' },
            { id: 'jewel-hint-3', label: 'Symbol of wealth' },
            { id: 'jewel-hint-4', label: 'Varies in size and color' },
        ],
    },
    {
        word: 'knife',
        hints: [
            { id: 'knife-hint-1', label: 'Tool for cutting' },
            { id: 'knife-hint-2', label: 'Has a sharp blade' },
            { id: 'knife-hint-3', label: 'Used in kitchens' },
            { id: 'knife-hint-4', label: 'Can be a weapon' },
        ],
    },
    {
        word: 'zebra',
        hints: [
            { id: 'zebra-hint-1', label: 'African wild animal' },
            { id: 'zebra-hint-2', label: 'Striped black and white' },
            { id: 'zebra-hint-3', label: 'Related to horses' },
            { id: 'zebra-hint-4', label: 'Lives in herds' },
        ],
    },
    {
        word: 'witch',
        hints: [
            { id: 'witch-hint-1', label: 'Practices magic' },
            { id: 'witch-hint-2', label: 'Often portrayed in fairy tales' },
            { id: 'witch-hint-3', label: 'Associated with brooms' },
            { id: 'witch-hint-4', label: 'Celebrated on Halloween' },
        ],
    },
    {
        word: 'yacht',
        hints: [
            { id: 'yacht-hint-1', label: 'Luxury boat' },
            { id: 'yacht-hint-2', label: 'Used for leisure' },
            { id: 'yacht-hint-3', label: 'Can be sailed or motor-driven' },
            { id: 'yacht-hint-4', label: 'Symbol of wealth' },
        ],
    },
    {
        word: 'vocal',
        hints: [
            { id: 'vocal-hint-1', label: 'Related to the voice' },
            { id: 'vocal-hint-2', label: 'Used in singing' },
            { id: 'vocal-hint-3', label: 'Can be loud or soft' },
            { id: 'vocal-hint-4', label: 'Essential for communication' },
        ],
    },
    {
        word: 'ultra',
        hints: [
            { id: 'ultra-hint-1', label: 'Beyond in degree' },
            { id: 'ultra-hint-2', label: 'Used to denote extremes' },
            { id: 'ultra-hint-3', label: 'Can refer to ultraviolet' },
            {
                id: 'ultra-hint-4',
                label: 'Associated with advanced technology',
            },
        ],
    },
    {
        word: 'torch',
        hints: [
            { id: 'torch-hint-1', label: 'Portable light source' },
            { id: 'torch-hint-2', label: 'Used in the past for illumination' },
            { id: 'torch-hint-3', label: 'Now often battery operated' },
            { id: 'torch-hint-4', label: 'Carried in relay races' },
        ],
    },
    {
        word: 'sloth',
        hints: [
            { id: 'sloth-hint-1', label: 'Slow-moving mammal' },
            { id: 'sloth-hint-2', label: 'Lives in trees' },
            {
                id: 'sloth-hint-3',
                label: 'Native to Central and South America',
            },
            { id: 'sloth-hint-4', label: 'Known for being lazy' },
        ],
    },
    {
        word: 'raven',
        hints: [
            { id: 'raven-hint-1', label: 'Large black bird' },
            { id: 'raven-hint-2', label: 'Famous for its intelligence' },
            { id: 'raven-hint-3', label: 'Often features in myths' },
            { id: 'raven-hint-4', label: 'Can mimic human speech' },
        ],
    },
    {
        word: 'pulse',
        hints: [
            { id: 'pulse-hint-1', label: 'Beat of the heart' },
            { id: 'pulse-hint-2', label: 'Can be felt at wrist or neck' },
            { id: 'pulse-hint-3', label: 'Indicator of health' },
            {
                id: 'pulse-hint-4',
                label: 'Used in cooking as lentils and beans',
            },
        ],
    },
    {
        word: 'orbit',
        hints: [
            { id: 'orbit-hint-1', label: 'Path of one body around another' },
            { id: 'orbit-hint-2', label: 'Can refer to planets or satellites' },
            { id: 'orbit-hint-3', label: 'Essential concept in astronomy' },
            { id: 'orbit-hint-4', label: 'Describes a circular journey' },
        ],
    },
    {
        word: 'nylon',
        hints: [
            { id: 'nylon-hint-1', label: 'Synthetic polymer' },
            { id: 'nylon-hint-2', label: 'Used in clothing' },
            { id: 'nylon-hint-3', label: 'Invented in the 20th century' },
            { id: 'nylon-hint-4', label: 'Strong and elastic' },
        ],
    },
    {
        word: 'humor',
        hints: [
            { id: 'humor-hint-1', label: 'Quality of being amusing' },
            { id: 'humor-hint-2', label: 'Varies culturally' },
            {
                id: 'humor-hint-3',
                label: 'Can be verbal, visual, or situational',
            },
            { id: 'humor-hint-4', label: 'Important for social interactions' },
        ],
    },
    {
        word: 'gypsy',
        hints: [
            { id: 'gypsy-hint-1', label: 'Nomadic or free-spirited person' },
            {
                id: 'gypsy-hint-2',
                label: 'Historically referred to the Romani people',
            },
            { id: 'gypsy-hint-3', label: 'Associated with traveling' },
            { id: 'gypsy-hint-4', label: 'Often romanticized in literature' },
        ],
    },
    {
        word: 'fjord',
        hints: [
            {
                id: 'fjord-hint-1',
                label: 'Long, narrow inlet with steep sides',
            },
            { id: 'fjord-hint-2', label: 'Created by glacier erosion' },
            { id: 'fjord-hint-3', label: 'Common in Norway' },
            { id: 'fjord-hint-4', label: 'Scenic and deep' },
        ],
    },
    {
        word: 'elbow',
        hints: [
            { id: 'elbow-hint-1', label: 'Joint in the middle of the arm' },
            { id: 'elbow-hint-2', label: 'Allows for arm bending' },
            { id: 'elbow-hint-3', label: 'Common site for injury' },
            { id: 'elbow-hint-4', label: "Used in the phrase 'elbow grease'" },
        ],
    },
    {
        word: 'shard',
        hints: [
            {
                id: 'shard-hint-1',
                label: 'Piece of broken ceramic, metal, glass',
            },
            { id: 'shard-hint-2', label: 'Sharp and potentially dangerous' },
            { id: 'shard-hint-3', label: 'Found in archaeological sites' },
            {
                id: 'shard-hint-4',
                label: 'Can be used metaphorically to represent fragments',
            },
        ],
    },
    {
        word: 'cloak',
        hints: [
            { id: 'cloak-hint-1', label: 'A type of loose garment' },
            {
                id: 'cloak-hint-2',
                label: 'Worn over other clothes for warmth or fashion',
            },
            { id: 'cloak-hint-3', label: 'Associated with mystery or secrecy' },
            {
                id: 'cloak-hint-4',
                label: 'Historically used for protection against the elements',
            },
        ],
    },
    {
        word: 'moose',
        hints: [
            { id: 'moose-hint-1', label: 'Large deer found in North America' },
            { id: 'moose-hint-2', label: 'Known for its massive antlers' },
            {
                id: 'moose-hint-3',
                label: 'Can be found in forests and near water',
            },
            {
                id: 'moose-hint-4',
                label: 'Majestic wildlife often seen in national parks',
            },
        ],
    },
    {
        word: 'rotor',
        hints: [
            {
                id: 'rotor-hint-1',
                label: 'Part of a machine that rotates around an axis',
            },
            {
                id: 'rotor-hint-2',
                label: 'Commonly found in engines and turbines',
            },
            {
                id: 'rotor-hint-3',
                label: 'Used in helicopters and wind turbines',
            },
            { id: 'rotor-hint-4', label: 'Generates lift or mechanical power' },
        ],
    },
    {
        word: 'twist',
        hints: [
            { id: 'twist-hint-1', label: 'To turn or rotate forcefully' },
            { id: 'twist-hint-2', label: 'A spiral or coil shape' },
            {
                id: 'twist-hint-3',
                label: 'Common in dance moves and storytelling',
            },
            {
                id: 'twist-hint-4',
                label: 'Can refer to a surprising or unexpected development',
            },
        ],
    },
    {
        word: 'rider',
        hints: [
            {
                id: 'rider-hint-1',
                label: 'Person who travels on a vehicle or animal',
            },
            {
                id: 'rider-hint-2',
                label: 'Commonly seen on bicycles, motorcycles, and horses',
            },
            {
                id: 'rider-hint-3',
                label: 'Can also refer to an additional clause in a document',
            },
            {
                id: 'rider-hint-4',
                label: 'Often wears protective gear like helmets or saddles',
            },
        ],
    },
    {
        word: 'kebab',
        hints: [
            {
                id: 'kebab-hint-1',
                label: 'A dish consisting of pieces of meat and vegetables skewered and grilled',
            },
            {
                id: 'kebab-hint-2',
                label: 'Popular in Middle Eastern and Mediterranean cuisine',
            },
            {
                id: 'kebab-hint-3',
                label: 'Can be made with various meats such as lamb, chicken, or beef',
            },
            { id: 'kebab-hint-4', label: 'Served with rice, bread, or salad' },
        ],
    },
    {
        word: 'qatar',
        hints: [
            {
                id: 'qatar-hint-1',
                label: 'A sovereign country in the Middle East',
            },
            {
                id: 'qatar-hint-2',
                label: 'Located on the northeastern coast of the Arabian Peninsula',
            },
            { id: 'qatar-hint-3', label: 'Capital city is Doha' },
            {
                id: 'qatar-hint-4',
                label: 'Known for its oil and natural gas reserves',
            },
        ],
    },
    {
        word: 'choke',
        hints: [
            {
                id: 'choke-hint-1',
                label: 'To obstruct or block the flow of air or liquid',
            },
            {
                id: 'choke-hint-2',
                label: 'Common in engines when there is a lack of air or fuel',
            },
            {
                id: 'choke-hint-3',
                label: 'Can refer to the sensation of being unable to breathe',
            },
            {
                id: 'choke-hint-4',
                label: 'Used in cooking to prevent excessive moisture loss',
            },
        ],
    },
    {
        word: 'sober',
        hints: [
            {
                id: 'sober-hint-1',
                label: 'Not under the influence of alcohol or drugs',
            },
            { id: 'sober-hint-2', label: 'Clear-headed and rational' },
            { id: 'sober-hint-3', label: 'Opposite of intoxicated' },
            {
                id: 'sober-hint-4',
                label: 'Can also refer to serious or solemn behavior',
            },
        ],
    },
    {
        word: 'tower',
        hints: [
            { id: 'tower-hint-1', label: 'Tall structure that stands alone' },
            {
                id: 'tower-hint-2',
                label: 'Often used for observation or communication',
            },
            {
                id: 'tower-hint-3',
                label: 'Commonly found in cities and near airports',
            },
            {
                id: 'tower-hint-4',
                label: 'Can be made of various materials like steel, concrete, or stone',
            },
        ],
    },
    {
        word: 'towel',
        hints: [
            { id: 'towel-hint-1', label: 'Absorbent cloth used for drying' },
            {
                id: 'towel-hint-2',
                label: 'Commonly found in bathrooms and kitchens',
            },
            {
                id: 'towel-hint-3',
                label: 'Comes in various sizes and textures',
            },
            {
                id: 'towel-hint-4',
                label: 'Can also be used for cleaning or wiping surfaces',
            },
        ],
    },
    {
        word: 'globe',
        hints: [
            { id: 'globe-hint-1', label: 'Spherical model of the Earth' },
            {
                id: 'globe-hint-2',
                label: 'Used for geographical reference and education',
            },
            {
                id: 'globe-hint-3',
                label: 'Represents continents, countries, and oceans',
            },
            {
                id: 'globe-hint-4',
                label: 'Commonly found in classrooms and libraries',
            },
        ],
    },
    {
        word: 'cyber',
        hints: [
            {
                id: 'cyber-hint-1',
                label: 'Related to computers, the internet, and virtual reality',
            },
            {
                id: 'cyber-hint-2',
                label: 'Often used in the context of cybercrime and cybersecurity',
            },
            {
                id: 'cyber-hint-3',
                label: 'Can refer to digital technology and communication',
            },
            {
                id: 'cyber-hint-4',
                label: 'Involves the use of information technology',
            },
        ],
    },
    {
        word: 'smile',
        hints: [
            {
                id: 'smile-hint-1',
                label: 'Facial expression indicating happiness or amusement',
            },
            {
                id: 'smile-hint-2',
                label: 'Involves turning up the corners of the mouth',
            },
            { id: 'smile-hint-3', label: 'Can be genuine or forced' },
            {
                id: 'smile-hint-4',
                label: 'Often used as a gesture of friendliness or politeness',
            },
        ],
    },
    {
        word: 'blast',
        hints: [
            {
                id: 'blast-hint-1',
                label: 'Explosion or sudden burst of energy',
            },
            { id: 'blast-hint-2', label: 'Loud noise or shockwave' },
            {
                id: 'blast-hint-3',
                label: 'Can be caused by dynamite, bombs, or firearms',
            },
            {
                id: 'blast-hint-4',
                label: 'Can also refer to a fun or exciting experience',
            },
        ],
    },
    {
        word: 'melon',
        hints: [
            {
                id: 'melon-hint-1',
                label: 'Sweet and juicy fruit with a hard rind',
            },
            {
                id: 'melon-hint-2',
                label: 'Comes in various types such as watermelon, cantaloupe, and honeydew',
            },
            {
                id: 'melon-hint-3',
                label: 'High water content makes it refreshing',
            },
            {
                id: 'melon-hint-4',
                label: 'Often eaten fresh or used in fruit salads and smoothies',
            },
        ],
    },
    {
        word: 'strap',
        hints: [
            {
                id: 'strap-hint-1',
                label: 'Strip of material used for binding or securing objects',
            },
            {
                id: 'strap-hint-2',
                label: 'Commonly made of leather, nylon, or fabric',
            },
            {
                id: 'strap-hint-3',
                label: 'Used in belts, bags, watches, and other accessories',
            },
            {
                id: 'strap-hint-4',
                label: 'Can also refer to a shoulder strap for carrying bags',
            },
        ],
    },
    {
        word: 'stain',
        hints: [
            { id: 'stain-hint-1', label: 'Discoloration or mark on a surface' },
            {
                id: 'stain-hint-2',
                label: 'Often caused by spilled liquids or dirt',
            },
            {
                id: 'stain-hint-3',
                label: 'Difficult to remove without proper cleaning',
            },
            {
                id: 'stain-hint-4',
                label: 'Can occur on clothing, carpets, or furniture',
            },
        ],
    },
    {
        word: 'crash',
        hints: [
            { id: 'crash-hint-1', label: 'Sudden and violent collision' },
            {
                id: 'crash-hint-2',
                label: 'Involves two or more objects or vehicles',
            },
            { id: 'crash-hint-3', label: 'Can cause damage, injury, or death' },
            {
                id: 'crash-hint-4',
                label: 'Common in car accidents, plane crashes, and sporting events',
            },
        ],
    },
    {
        word: 'crave',
        hints: [
            {
                id: 'crave-hint-1',
                label: 'Intense desire or longing for something',
            },
            {
                id: 'crave-hint-2',
                label: 'Often used in the context of food or addictive substances',
            },
            {
                id: 'crave-hint-3',
                label: 'Can also refer to a strong emotional or psychological need',
            },
            {
                id: 'crave-hint-4',
                label: 'May lead to cravings or compulsive behavior',
            },
        ],
    },
    {
        word: 'crate',
        hints: [
            {
                id: 'crate-hint-1',
                label: 'Wooden or plastic container used for storage or transportation',
            },
            {
                id: 'crate-hint-2',
                label: 'Commonly used in shipping and logistics',
            },
            {
                id: 'crate-hint-3',
                label: 'Can also refer to a large box or cage for animals',
            },
            {
                id: 'crate-hint-4',
                label: 'Often stacked and secured with straps or ropes',
            },
        ],
    },
    {
        word: 'stick',
        hints: [
            {
                id: 'stick-hint-1',
                label: 'Thin piece of wood fallen from a tree',
            },
            {
                id: 'stick-hint-2',
                label: 'Can be used for support when walking',
            },
            { id: 'stick-hint-3', label: 'Essential for building a fire' },
            {
                id: 'stick-hint-4',
                label: 'Children use it for play and drawing in the dirt',
            },
        ],
    },
    {
        word: 'clamp',
        hints: [
            {
                id: 'clamp-hint-1',
                label: 'Tool used to hold objects tightly together',
            },
            {
                id: 'clamp-hint-2',
                label: 'Can be adjusted to fit various sizes',
            },
            {
                id: 'clamp-hint-3',
                label: 'Essential in woodworking and metalworking',
            },
            {
                id: 'clamp-hint-4',
                label: 'Operated by tightening a screw or lever',
            },
        ],
    },
    {
        word: 'point',
        hints: [
            { id: 'point-hint-1', label: 'Sharp end of an object' },
            {
                id: 'point-hint-2',
                label: 'To direct attention towards something',
            },
            { id: 'point-hint-3', label: 'A specific location or place' },
            {
                id: 'point-hint-4',
                label: 'Used in scoring in games and sports',
            },
        ],
    },
    {
        word: 'joint',
        hints: [
            {
                id: 'joint-hint-1',
                label: 'A point where two parts are connected',
            },
            {
                id: 'joint-hint-2',
                label: 'Can refer to a part of the body where two bones meet',
            },
            {
                id: 'joint-hint-3',
                label: 'A place where people gather to eat or drink',
            },
            {
                id: 'joint-hint-4',
                label: 'Used in woodworking to describe how pieces fit together',
            },
        ],
    },
    {
        word: 'paint',
        hints: [
            {
                id: 'paint-hint-1',
                label: 'Substance used to add color to surfaces',
            },
            {
                id: 'paint-hint-2',
                label: 'Can be applied with a brush or roller',
            },
            {
                id: 'paint-hint-3',
                label: 'Available in various colors and finishes',
            },
            { id: 'paint-hint-4', label: 'Artists use it to create pictures' },
        ],
    },
    {
        word: 'swing',
        hints: [
            {
                id: 'swing-hint-1',
                label: 'A type of seat hanging from above that moves back and forth',
            },
            { id: 'swing-hint-2', label: 'A sudden or swift movement' },
            { id: 'swing-hint-3', label: 'Can refer to a style of jazz music' },
            {
                id: 'swing-hint-4',
                label: 'Used in sports to describe the motion of hitting',
            },
        ],
    },
    {
        word: 'spoil',
        hints: [
            {
                id: 'spoil-hint-1',
                label: 'To become bad or unfit for consumption',
            },
            {
                id: 'spoil-hint-2',
                label: 'To ruin or diminish the value of something',
            },
            {
                id: 'spoil-hint-3',
                label: 'Giving too many treats or indulgences',
            },
            {
                id: 'spoil-hint-4',
                label: 'Common issue with perishable food items',
            },
        ],
    },
    {
        word: 'trunk',
        hints: [
            { id: 'trunk-hint-1', label: 'Main woody stem of a tree' },
            { id: 'trunk-hint-2', label: 'Large box for storage or transport' },
            { id: 'trunk-hint-3', label: 'Rear storage compartment of a car' },
            {
                id: 'trunk-hint-4',
                label: 'Elephants are known for their long, flexible one',
            },
        ],
    },
    {
        word: 'world',
        hints: [
            { id: 'world-hint-1', label: 'The earth and all life on it' },
            { id: 'world-hint-2', label: 'A realm or domain of activity' },
            {
                id: 'world-hint-3',
                label: 'Used to describe the entirety of something',
            },
            { id: 'world-hint-4', label: 'Global or international in scope' },
        ],
    },
    {
        word: 'depot',
        hints: [
            { id: 'depot-hint-1', label: 'A storage site or warehouse' },
            {
                id: 'depot-hint-2',
                label: 'Transit station for buses or trains',
            },
            {
                id: 'depot-hint-3',
                label: 'A place for the storage of large quantities of equipment',
            },
            {
                id: 'depot-hint-4',
                label: 'Often used in a military context for supplies',
            },
        ],
    },
    {
        word: 'brave',
        hints: [
            { id: 'brave-hint-1', label: 'Courageous, not afraid' },
            { id: 'brave-hint-2', label: 'Face danger boldly' },
            { id: 'brave-hint-3', label: 'A warrior or hero' },
            { id: 'brave-hint-4', label: 'To endure or withstand' },
        ],
    },
    {
        word: 'crisp',
        hints: [
            { id: 'crisp-hint-1', label: 'Fresh and crunchy' },
            { id: 'crisp-hint-2', label: 'Cool, dry air' },
            { id: 'crisp-hint-3', label: 'Type of potato chip' },
            { id: 'crisp-hint-4', label: 'Neatly pressed, as with clothing' },
        ],
    },
    {
        word: 'frost',
        hints: [
            { id: 'frost-hint-1', label: 'Thin ice layer on surfaces' },
            { id: 'frost-hint-2', label: 'Cold weather phenomenon' },
            { id: 'frost-hint-3', label: 'Decorate cakes with icing' },
            { id: 'frost-hint-4', label: 'Window glass in winter' },
        ],
    },
    {
        word: 'gloom',
        hints: [
            { id: 'gloom-hint-1', label: 'Partial or total darkness' },
            { id: 'gloom-hint-2', label: 'Feeling of sadness' },
            { id: 'gloom-hint-3', label: 'Not bright or shiny' },
            { id: 'gloom-hint-4', label: 'Dull or dreary atmosphere' },
        ],
    },
    {
        word: 'award',
        hints: [
            {
                id: 'award-hint-1',
                label: 'Recognition or honor given for achievement',
            },
            {
                id: 'award-hint-2',
                label: 'Can be a trophy, certificate, or monetary prize',
            },
            {
                id: 'award-hint-3',
                label: 'Given in various fields such as sports, academia, and entertainment',
            },
            {
                id: 'award-hint-4',
                label: 'Often presented at ceremonies or events',
            },
        ],
    },
    {
        word: 'fluid',
        hints: [
            {
                id: 'fluid-hint-1',
                label: 'Substance that flows and takes the shape of its container',
            },
            { id: 'fluid-hint-2', label: 'Includes liquids and gases' },
            {
                id: 'fluid-hint-3',
                label: 'Examples include water, oil, and air',
            },
            {
                id: 'fluid-hint-4',
                label: 'Important for hydraulic systems and biological processes',
            },
        ],
    },
    {
        word: 'toxic',
        hints: [
            {
                id: 'toxic-hint-1',
                label: 'Harmful or poisonous to living organisms',
            },
            {
                id: 'toxic-hint-2',
                label: 'Can cause illness, injury, or death',
            },
            {
                id: 'toxic-hint-3',
                label: 'Found in various chemicals, substances, and pollutants',
            },
            {
                id: 'toxic-hint-4',
                label: 'Requires careful handling and disposal',
            },
        ],
    },
    {
        word: 'guess',
        hints: [
            {
                id: 'guess-hint-1',
                label: 'Estimate or prediction made without certainty',
            },
            {
                id: 'guess-hint-2',
                label: 'Based on intuition, inference, or random chance',
            },
            {
                id: 'guess-hint-3',
                label: 'Common in games and decision-making',
            },
            { id: 'guess-hint-4', label: 'Can be educated or blind' },
        ],
    },
    {
        word: 'smell',
        hints: [
            { id: 'smell-hint-1', label: 'Sense used to detect odors' },
            { id: 'smell-hint-2', label: 'Involves receptors in the nose' },
            { id: 'smell-hint-3', label: 'Can be pleasant or unpleasant' },
            {
                id: 'smell-hint-4',
                label: 'Important for identifying food, danger, and other substances',
            },
        ],
    },
    {
        word: 'check',
        hints: [
            {
                id: 'check-hint-1',
                label: 'Verification or examination to confirm something',
            },
            {
                id: 'check-hint-2',
                label: 'Can refer to a physical inspection or review of documents',
            },
            {
                id: 'check-hint-3',
                label: 'Used in banking for financial transactions',
            },
            { id: 'check-hint-4', label: 'Also means to restrain or control' },
        ],
    },
    {
        word: 'smoke',
        hints: [
            { id: 'smoke-hint-1', label: 'Product of combustion' },
            { id: 'smoke-hint-2', label: 'Can obscure visibility' },
            { id: 'smoke-hint-3', label: 'Used for signaling or cooking' },
            { id: 'smoke-hint-4', label: 'Inhalation from burning substances' },
        ],
    },
    {
        word: 'steep',
        hints: [
            { id: 'steep-hint-1', label: 'Having a sharp incline' },
            {
                id: 'steep-hint-2',
                label: 'Immersing in liquid to extract flavor',
            },
            { id: 'steep-hint-3', label: 'Excessive or high, as in prices' },
            { id: 'steep-hint-4', label: 'A hill or mountain side' },
        ],
    },
    {
        word: 'trend',
        hints: [
            { id: 'trend-hint-1', label: 'Current style or preference' },
            { id: 'trend-hint-2', label: 'General direction of change' },
            { id: 'trend-hint-3', label: 'Popular topic on social media' },
            { id: 'trend-hint-4', label: 'Market movement' },
        ],
    },
    {
        word: 'witty',
        hints: [
            { id: 'witty-hint-1', label: 'Showing quick and inventive humor' },
            { id: 'witty-hint-2', label: 'Cleverly amusing' },
            { id: 'witty-hint-3', label: 'Sharp in response' },
            { id: 'witty-hint-4', label: 'Skillful with words' },
        ],
    },
    {
        word: 'brush',
        hints: [
            { id: 'brush-hint-1', label: 'Tool for painting or combing' },
            { id: 'brush-hint-2', label: 'Encounter or slight touch' },
            { id: 'brush-hint-3', label: 'Dense vegetation or undergrowth' },
            { id: 'brush-hint-4', label: 'Used for cleaning or grooming' },
        ],
    },
    {
        word: 'chord',
        hints: [
            { id: 'chord-hint-1', label: 'Combination of musical notes' },
            { id: 'chord-hint-2', label: 'Played simultaneously in harmony' },
            { id: 'chord-hint-3', label: 'Structural foundation in music' },
            { id: 'chord-hint-4', label: 'Can be major, minor, or diminished' },
        ],
    },
    {
        word: 'dwarf',
        hints: [
            { id: 'dwarf-hint-1', label: 'Small, mythical humanoid' },
            { id: 'dwarf-hint-2', label: 'Significantly smaller than average' },
            { id: 'dwarf-hint-3', label: 'Found in fairy tales and fantasy' },
            {
                id: 'dwarf-hint-4',
                label: 'Astronomy: a star of relatively small size',
            },
        ],
    },
    {
        word: 'ember',
        hints: [
            { id: 'ember-hint-1', label: 'Glowing piece of coal or wood' },
            { id: 'ember-hint-2', label: 'Found in dying fire' },
            { id: 'ember-hint-3', label: 'Can reignite into flame' },
            { id: 'ember-hint-4', label: 'Symbolizes lingering feelings' },
        ],
    },
    {
        word: 'flute',
        hints: [
            { id: 'flute-hint-1', label: 'Wind instrument with holes' },
            {
                id: 'flute-hint-2',
                label: 'Played by blowing across an opening',
            },
            { id: 'flute-hint-3', label: 'Produces melodious sounds' },
            { id: 'flute-hint-4', label: 'Has a slender, tube-like shape' },
        ],
    },
    {
        word: 'gloom',
        hints: [
            { id: 'gloom-hint-1', label: 'Partial or total darkness' },
            { id: 'gloom-hint-2', label: 'Feeling of sadness or depression' },
            { id: 'gloom-hint-3', label: 'Lack of brightness or light' },
            { id: 'gloom-hint-4', label: 'Dismal or dreary atmosphere' },
        ],
    },
    {
        word: 'ideal',
        hints: [
            { id: 'ideal-hint-1', label: 'Conception of perfection' },
            { id: 'ideal-hint-2', label: 'Standard of excellence' },
            {
                id: 'ideal-hint-3',
                label: 'Philosophically ultimate object of endeavor',
            },
            { id: 'ideal-hint-4', label: 'Representing an archetype' },
        ],
    },
    {
        word: 'latch',
        hints: [
            { id: 'latch-hint-1', label: 'Fastening for a door or gate' },
            { id: 'latch-hint-2', label: 'Type of locking mechanism' },
            {
                id: 'latch-hint-3',
                label: 'Can be opened or closed with a simple motion',
            },
            { id: 'latch-hint-4', label: 'Keeps doors securely shut' },
        ],
    },
    {
        word: 'opera',
        hints: [
            { id: 'opera-hint-1', label: 'A dramatic work set to music' },
            {
                id: 'opera-hint-2',
                label: 'Combines singing, acting, and orchestral music',
            },
            { id: 'opera-hint-3', label: 'Performed in an opera house' },
            {
                id: 'opera-hint-4',
                label: 'Includes famous works by Verdi and Puccini',
            },
        ],
    },
    {
        word: 'plume',
        hints: [
            { id: 'plume-hint-1', label: 'A feather or cluster of feathers' },
            { id: 'plume-hint-2', label: 'Smoke or vapor rising in a cloud' },
            {
                id: 'plume-hint-3',
                label: 'Something that resembles a feather in shape',
            },
            { id: 'plume-hint-4', label: 'A token of honor or achievement' },
        ],
    },
    {
        word: 'shrek',
        hints: [
            { id: 'shrek-hint-1', label: 'A green ogre from a popular movie' },
            { id: 'shrek-hint-2', label: 'Lives in a swamp' },
            {
                id: 'shrek-hint-3',
                label: 'Famous for saying, “Get out of my swamp!”',
            },
            { id: 'shrek-hint-4', label: 'Married to Fiona' },
        ],
    },
    {
        word: 'opium',
        hints: [
            {
                id: 'opium-hint-1',
                label: 'A narcotic obtained from a kind of poppy',
            },
            {
                id: 'opium-hint-2',
                label: 'Used historically for pain relief and recreation',
            },
            { id: 'opium-hint-3', label: 'Can be addictive' },
            {
                id: 'opium-hint-4',
                label: 'Associated with wars in China in the 19th century',
            },
        ],
    },
    {
        word: 'onion',
        hints: [
            { id: 'onion-hint-1', label: 'A vegetable with layers' },
            { id: 'onion-hint-2', label: 'Can make you cry when cutting it' },
            { id: 'onion-hint-3', label: 'Used in cooking for flavor' },
            {
                id: 'onion-hint-4',
                label: 'Comes in varieties like red, white, and yellow',
            },
        ],
    },
    {
        word: 'topic',
        hints: [
            { id: 'topic-hint-1', label: 'Subject of discussion' },
            {
                id: 'topic-hint-2',
                label: 'Can be chosen for essays or debates',
            },
            { id: 'topic-hint-3', label: 'A particular area of study' },
            {
                id: 'topic-hint-4',
                label: 'Often researched or explored in depth',
            },
        ],
    },
    {
        word: 'stock',
        hints: [
            { id: 'stock-hint-1', label: 'Shares in a company' },
            {
                id: 'stock-hint-2',
                label: 'Liquid made by boiling bones and vegetables',
            },
            {
                id: 'stock-hint-3',
                label: 'Supply of goods kept on hand for sale',
            },
            { id: 'stock-hint-4', label: 'Can also refer to a rifle’s handle' },
        ],
    },
    {
        word: 'vivid',
        hints: [
            { id: 'vivid-hint-1', label: 'Strikingly bright or intense' },
            {
                id: 'vivid-hint-2',
                label: 'Produces a strong or clear impression on the senses',
            },
            {
                id: 'vivid-hint-3',
                label: 'Often used to describe colors or memories',
            },
            { id: 'vivid-hint-4', label: 'Very clear, detailed, or lifelike' },
        ],
    },
    {
        word: 'glyph',
        hints: [
            { id: 'glyph-hint-1', label: 'A pictograph or other symbol' },
            { id: 'glyph-hint-2', label: 'Carved in relief or inscribed' },
            { id: 'glyph-hint-3', label: 'Used in writing or as decoration' },
            {
                id: 'glyph-hint-4',
                label: 'Found in ancient and modern scripts',
            },
        ],
    },
    {
        word: 'snack',
        hints: [
            { id: 'snack-hint-1', label: 'A small portion of food' },
            { id: 'snack-hint-2', label: 'Eaten between meals' },
            { id: 'snack-hint-3', label: 'Can be chips or fruit' },
            { id: 'snack-hint-4', label: 'Often quick and convenient' },
        ],
    },
    {
        word: 'board',
        hints: [
            { id: 'board-hint-1', label: 'Flat piece of wood' },
            { id: 'board-hint-2', label: 'Used for writing or games' },
            { id: 'board-hint-3', label: 'To get on a plane or ship' },
            { id: 'board-hint-4', label: 'Groups of directors' },
        ],
    },
    {
        word: 'shake',
        hints: [
            {
                id: 'shake-hint-1',
                label: 'To move with quick, short movements',
            },
            { id: 'shake-hint-2', label: 'A milk-based cold dessert' },
            { id: 'shake-hint-3', label: 'An act of greeting or agreement' },
            { id: 'shake-hint-4', label: 'To tremble or vibrate' },
        ],
    },
    {
        word: 'smurf',
        hints: [
            { id: 'smurf-hint-1', label: 'Small, blue fictional character' },
            { id: 'smurf-hint-2', label: 'Lives in a mushroom-shaped house' },
            { id: 'smurf-hint-3', label: 'Popular in cartoons and comics' },
            {
                id: 'smurf-hint-4',
                label: 'Village of these beings led by a wise elder',
            },
        ],
    },
    {
        word: 'black',
        hints: [
            { id: 'black-hint-1', label: 'Color of coal or night sky' },
            {
                id: 'black-hint-2',
                label: 'Associated with elegance or formality',
            },
            { id: 'black-hint-3', label: 'Absence of light' },
            { id: 'black-hint-4', label: 'A chess piece color' },
        ],
    },
    {
        word: 'stone',
        hints: [
            { id: 'stone-hint-1', label: 'Solid mineral matter' },
            { id: 'stone-hint-2', label: 'Used in construction' },
            { id: 'stone-hint-3', label: 'Hard seed in some fruits' },
            { id: 'stone-hint-4', label: 'Unit of weight in the UK' },
        ],
    },
    {
        word: 'store',
        hints: [
            { id: 'store-hint-1', label: 'A place to purchase goods' },
            { id: 'store-hint-2', label: 'To keep for future use' },
            { id: 'store-hint-3', label: 'A large amount of stock' },
            { id: 'store-hint-4', label: 'Digital app marketplace' },
        ],
    },
    {
        word: 'slick',
        hints: [
            { id: 'slick-hint-1', label: 'Smooth and glossy' },
            { id: 'slick-hint-2', label: 'Clever in deception' },
            { id: 'slick-hint-3', label: 'Type of oil spill' },
            {
                id: 'slick-hint-4',
                label: 'Efficient and effective in performance',
            },
        ],
    },
    {
        word: 'snail',
        hints: [
            { id: 'snail-hint-1', label: 'Slow-moving mollusk' },
            { id: 'snail-hint-2', label: 'Carries its home on its back' },
            { id: 'snail-hint-3', label: 'Eats plants or algae' },
            { id: 'snail-hint-4', label: 'Symbol of sluggishness' },
        ],
    },
    {
        word: 'spine',
        hints: [
            { id: 'spine-hint-1', label: 'Central support of the body' },
            { id: 'spine-hint-2', label: "Book's backbone" },
            { id: 'spine-hint-3', label: 'Row of sharp points on an animal' },
            {
                id: 'spine-hint-4',
                label: 'Associated with bravery metaphorically',
            },
        ],
    },
    {
        word: 'blood',
        hints: [
            { id: 'blood-hint-1', label: 'Vital red fluid in bodies' },
            { id: 'blood-hint-2', label: 'Type can be A, B, AB, or O' },
            { id: 'blood-hint-3', label: 'Symbol of life or kinship' },
            { id: 'blood-hint-4', label: 'Carries oxygen and nutrients' },
        ],
    },
    {
        word: 'brake',
        hints: [
            { id: 'brake-hint-1', label: 'Device for stopping a vehicle' },
            { id: 'brake-hint-2', label: 'Can be pressed or pulled' },
            { id: 'brake-hint-3', label: 'Found on bikes and cars' },
            { id: 'brake-hint-4', label: 'Important for safety' },
        ],
    },
    {
        word: 'mouse',
        hints: [
            { id: 'mouse-hint-1', label: 'Small rodent' },
            { id: 'mouse-hint-2', label: 'Computer input device' },
            { id: 'mouse-hint-3', label: 'Quiet and timid' },
            { id: 'mouse-hint-4', label: 'Cheese lover in cartoons' },
        ],
    },
    {
        word: 'block',
        hints: [
            { id: 'block-hint-1', label: 'A solid piece of material' },
            { id: 'block-hint-2', label: 'To obstruct or stop movement' },
            { id: 'block-hint-3', label: 'A section of a street or area' },
            { id: 'block-hint-4', label: 'Used in building or play' },
        ],
    },
    {
        word: 'radar',
        hints: [
            {
                id: 'radar-hint-1',
                label: 'A system for detecting objects by radio waves',
            },
            {
                id: 'radar-hint-2',
                label: 'Used in weather forecasting and aviation',
            },
            {
                id: 'radar-hint-3',
                label: 'Detects distance, speed, and direction',
            },
            {
                id: 'radar-hint-4',
                label: 'Acronym standing for Radio Detection And Ranging',
            },
        ],
    },
    {
        word: 'rally',
        hints: [
            {
                id: 'rally-hint-1',
                label: 'A large public gathering, often for a cause',
            },
            {
                id: 'rally-hint-2',
                label: 'To come together for common action or effort',
            },
            {
                id: 'rally-hint-3',
                label: 'In sports, a series of returns before a point',
            },
            {
                id: 'rally-hint-4',
                label: 'A recovery in price after a period of decline',
            },
        ],
    },
    {
        word: 'rehab',
        hints: [
            { id: 'rehab-hint-1', label: 'Short for rehabilitation' },
            {
                id: 'rehab-hint-2',
                label: 'Process of treatment for addictions',
            },
            { id: 'rehab-hint-3', label: 'Can also refer to physical therapy' },
            {
                id: 'rehab-hint-4',
                label: 'Restoring something to its original state',
            },
        ],
    },
    {
        word: 'bloom',
        hints: [
            { id: 'bloom-hint-1', label: 'To produce flowers' },
            { id: 'bloom-hint-2', label: 'A state of flowering' },
            {
                id: 'bloom-hint-3',
                label: 'A period of flourishing or thriving',
            },
            { id: 'bloom-hint-4', label: 'Can also refer to a youthful glow' },
        ],
    },
    {
        word: 'crane',
        hints: [
            { id: 'crane-hint-1', label: 'A type of large bird' },
            {
                id: 'crane-hint-2',
                label: 'A machine for lifting heavy objects',
            },
            {
                id: 'crane-hint-3',
                label: 'To stretch the neck to see something',
            },
            {
                id: 'crane-hint-4',
                label: 'Commonly used in construction sites',
            },
        ],
    },
    {
        word: 'glide',
        hints: [
            { id: 'glide-hint-1', label: 'To move smoothly and continuously' },
            {
                id: 'glide-hint-2',
                label: 'A form of flight with minimal wing flapping',
            },
            { id: 'glide-hint-3', label: 'Effortless movement' },
            { id: 'glide-hint-4', label: 'Can refer to using a glider' },
        ],
    },
    {
        word: 'pride',
        hints: [
            {
                id: 'pride-hint-1',
                label: 'A feeling of self-respect and personal worth',
            },
            {
                id: 'pride-hint-2',
                label: 'Satisfaction derived from achievements',
            },
            { id: 'pride-hint-3', label: 'A group of lions' },
            { id: 'pride-hint-4', label: 'The opposite of shame' },
        ],
    },
    {
        word: 'cliff',
        hints: [
            {
                id: 'cliff-hint-1',
                label: 'A high, steep face of rock or earth',
            },
            { id: 'cliff-hint-2', label: 'Edge of a mountain or sea' },
            { id: 'cliff-hint-3', label: 'Often offers scenic views' },
            {
                id: 'cliff-hint-4',
                label: 'Dangerous to climb without proper gear',
            },
        ],
    },
    {
        word: 'eagle',
        hints: [
            {
                id: 'eagle-hint-1',
                label: 'A large bird of prey with a massive wingspan',
            },
            {
                id: 'eagle-hint-2',
                label: 'Symbol of freedom in the United States',
            },
            { id: 'eagle-hint-3', label: 'Known for keen eyesight' },
            { id: 'eagle-hint-4', label: 'Two under par in golf' },
        ],
    },
    {
        word: 'grape',
        hints: [
            { id: 'grape-hint-1', label: 'A fruit used in wine making' },
            { id: 'grape-hint-2', label: 'Can be green or purple' },
            { id: 'grape-hint-3', label: 'Grows in clusters on vines' },
            {
                id: 'grape-hint-4',
                label: 'Eaten fresh, dried as raisins, or juiced',
            },
        ],
    },
    {
        word: 'hover',
        hints: [
            { id: 'hover-hint-1', label: 'To remain in one place in the air' },
            { id: 'hover-hint-2', label: 'Drones and helicopters can do this' },
            { id: 'hover-hint-3', label: 'To linger close at hand' },
            { id: 'hover-hint-4', label: 'Floating without direct support' },
        ],
    },
    {
        word: 'beach',
        hints: [
            { id: 'beach-hint-1', label: 'Sandy shore by the ocean' },
            {
                id: 'beach-hint-2',
                label: 'Location for sunbathing and swimming',
            },
            { id: 'beach-hint-3', label: 'Often visited during summer' },
        ],
    },
    {
        word: 'cloud',
        hints: [
            {
                id: 'cloud-hint-1',
                label: 'Visible mass of condensed water vapor',
            },
            { id: 'cloud-hint-2', label: 'Can be found in the sky' },
            { id: 'cloud-hint-3', label: 'Type can be cumulus, stratus, etc.' },
        ],
    },
    {
        word: 'grass',
        hints: [
            { id: 'grass-hint-1', label: 'Green and commonly found on lawns' },
            { id: 'grass-hint-2', label: 'Needs sunlight and water to grow' },
            { id: 'grass-hint-3', label: 'Often cut to maintain appearance' },
        ],
    },
    {
        word: 'shell',
        hints: [
            {
                id: 'shell-hint-1',
                label: 'Hard outer covering of some animals',
            },
            { id: 'shell-hint-2', label: 'Can be found on beaches' },
            {
                id: 'shell-hint-3',
                label: 'Used by sea creatures for protection',
            },
        ],
    },
    {
        word: 'glare',
        hints: [
            { id: 'glare-hint-1', label: 'Strong, dazzling light' },
            { id: 'glare-hint-2', label: 'To stare in an angry or fierce way' },
            { id: 'glare-hint-3', label: 'Problem for drivers facing the sun' },
        ],
    },
    {
        word: 'light',
        hints: [
            { id: 'light-hint-1', label: 'Opposite of heavy' },
            {
                id: 'light-hint-2',
                label: 'Natural agent that stimulates sight',
            },
            { id: 'light-hint-3', label: 'Can be artificial or natural' },
        ],
    },
    {
        word: 'peach',
        hints: [
            {
                id: 'peach-hint-1',
                label: 'A soft, sweet fruit with fuzzy skin',
            },
            { id: 'peach-hint-2', label: 'Color named after this fruit' },
            { id: 'peach-hint-3', label: 'Commonly used in pies and jams' },
        ],
    },
    {
        word: 'quake',
        hints: [
            { id: 'quake-hint-1', label: 'Another term for earthquake' },
            { id: 'quake-hint-2', label: 'Sudden shaking of the ground' },
            {
                id: 'quake-hint-3',
                label: "Caused by movements within the earth's crust",
            },
        ],
    },
    {
        word: 'river',
        hints: [
            { id: 'river-hint-1', label: 'Large natural stream of water' },
            {
                id: 'river-hint-2',
                label: 'Flows towards an ocean, sea, or lake',
            },
            {
                id: 'river-hint-3',
                label: 'Important for ecosystems and human settlements',
            },
        ],
    },
    {
        word: 'shine',
        hints: [
            { id: 'shine-hint-1', label: 'To emit light or glow brightly' },
            { id: 'shine-hint-2', label: 'Polished surfaces do this' },
            {
                id: 'shine-hint-3',
                label: 'Clear weather is often described as this',
            },
        ],
    },
    {
        word: 'storm',
        hints: [
            {
                id: 'storm-hint-1',
                label: 'Severe weather condition with wind, rain, or snow',
            },
            { id: 'storm-hint-2', label: 'Can include thunder and lightning' },
            { id: 'storm-hint-3', label: 'A disturbance of the atmosphere' },
        ],
    },
    {
        word: 'trace',
        hints: [
            { id: 'trace-hint-1', label: 'A very small amount' },
            {
                id: 'trace-hint-2',
                label: 'To outline or follow the path of something',
            },
            {
                id: 'trace-hint-3',
                label: 'Evidence or indication of a former presence',
            },
        ],
    },
    {
        word: 'voice',
        hints: [
            {
                id: 'voice-hint-1',
                label: "Sound produced in a person's larynx",
            },
            {
                id: 'voice-hint-2',
                label: 'Means of expressing opinion or feeling',
            },
            { id: 'voice-hint-3', label: 'Can be unique to individuals' },
        ],
    },
    {
        word: 'wheat',
        hints: [
            {
                id: 'wheat-hint-1',
                label: 'Cereal plant that is a worldwide staple food',
            },
            {
                id: 'wheat-hint-2',
                label: 'Grains ground to make flour for bread',
            },
            { id: 'wheat-hint-3', label: 'Golden in color when ripe' },
        ],
    },
    {
        word: 'brick',
        hints: [
            {
                id: 'brick-hint-1',
                label: 'Building material made of fired clay',
            },
            {
                id: 'brick-hint-2',
                label: 'Commonly red or brown and used for walls',
            },
            { id: 'brick-hint-3', label: 'Symbol of sturdy construction' },
        ],
    },
    {
        word: 'charm',
        hints: [
            {
                id: 'charm-hint-1',
                label: 'Quality of being pleasant or attractive',
            },
            { id: 'charm-hint-2', label: 'Small ornament worn on a bracelet' },
            { id: 'charm-hint-3', label: 'A spell or incantation' },
        ],
    },
    {
        word: 'dream',
        hints: [
            { id: 'dream-hint-1', label: 'A series of thoughts during sleep' },
            { id: 'dream-hint-2', label: 'To imagine or hope for something' },
            { id: 'dream-hint-3', label: 'An aspiration or goal' },
        ],
    },
    {
        word: 'heart',
        hints: [
            { id: 'heart-hint-1', label: 'Organ that pumps blood' },
            { id: 'heart-hint-2', label: 'Symbol of love and affection' },
            { id: 'heart-hint-3', label: 'Central or most important part' },
        ],
    },
    {
        word: 'kneel',
        hints: [
            { id: 'kneel-hint-1', label: "To go down on one's knees" },
            {
                id: 'kneel-hint-2',
                label: 'Act of showing respect or submission',
            },
            { id: 'kneel-hint-3', label: 'Common posture in prayer' },
        ],
    },
    {
        word: 'laugh',
        hints: [
            {
                id: 'laugh-hint-1',
                label: 'To express mirth or joy with vocal sound',
            },
            { id: 'laugh-hint-2', label: 'A response to humor or happiness' },
            { id: 'laugh-hint-3', label: 'Can be infectious in groups' },
        ],
    },
    {
        word: 'maple',
        hints: [
            { id: 'maple-hint-1', label: 'Type of tree with sap for syrup' },
            { id: 'maple-hint-2', label: 'Leaves turn vibrant colors in fall' },
            { id: 'maple-hint-3', label: 'Symbol of Canada' },
        ],
    },
    {
        word: 'nurse',
        hints: [
            {
                id: 'nurse-hint-1',
                label: 'Healthcare professional assisting doctors',
            },
            { id: 'nurse-hint-2', label: 'To care for the sick or injured' },
            { id: 'nurse-hint-3', label: 'Can also mean to feed a baby' },
        ],
    },
    {
        word: 'queen',
        hints: [
            { id: 'queen-hint-1', label: 'Female monarch or ruler' },
            { id: 'queen-hint-2', label: 'Highest-ranking piece in chess' },
            {
                id: 'queen-hint-3',
                label: 'Term of respect in various cultures',
            },
        ],
    },
    {
        word: 'roast',
        hints: [
            { id: 'roast-hint-1', label: 'To cook food with dry heat' },
            { id: 'roast-hint-2', label: 'A large piece of cooked meat' },
            { id: 'roast-hint-3', label: 'Humorous criticism of someone' },
        ],
    },
    {
        word: 'scarf',
        hints: [
            {
                id: 'scarf-hint-1',
                label: 'Long piece of cloth worn around the neck',
            },
            { id: 'scarf-hint-2', label: 'Can be used for warmth or fashion' },
            {
                id: 'scarf-hint-3',
                label: 'Varies in material from wool to silk',
            },
        ],
    },
    {
        word: 'tiger',
        hints: [
            { id: 'tiger-hint-1', label: 'Large striped feline predator' },
            { id: 'tiger-hint-2', label: 'Native to Asia' },
            { id: 'tiger-hint-3', label: 'Symbol of strength and bravery' },
        ],
    },
    {
        word: 'urban',
        hints: [
            { id: 'urban-hint-1', label: 'Related to cities or towns' },
            { id: 'urban-hint-2', label: 'Densely populated area' },
            { id: 'urban-hint-3', label: 'Opposite of rural' },
        ],
    },
    {
        word: 'vowel',
        hints: [
            { id: 'vowel-hint-1', label: 'A, E, I, O, U, and sometimes Y' },
            { id: 'vowel-hint-2', label: 'Type of letter in the alphabet' },
            { id: 'vowel-hint-3', label: 'Essential for syllable formation' },
        ],
    },
    {
        word: 'watch',
        hints: [
            { id: 'watch-hint-1', label: 'A portable timepiece' },
            { id: 'watch-hint-2', label: 'To observe attentively' },
            { id: 'watch-hint-3', label: 'Guard duty or vigil' },
        ],
    },
    {
        word: 'yield',
        hints: [
            {
                id: 'yield-hint-1',
                label: 'To produce or provide (e.g., crops)',
            },
            { id: 'yield-hint-2', label: 'To give way to another vehicle' },
            { id: 'yield-hint-3', label: 'Rate of return on investment' },
        ],
    },
    {
        word: 'zebra',
        hints: [
            {
                id: 'zebra-hint-1',
                label: 'African animal with black and white stripes',
            },
            { id: 'zebra-hint-2', label: 'Belongs to the horse family' },
            { id: 'zebra-hint-3', label: 'Uses stripes as camouflage' },
        ],
    },
    {
        word: 'angle',
        hints: [
            {
                id: 'angle-hint-1',
                label: 'Space between two intersecting lines',
            },
            { id: 'angle-hint-2', label: 'Measured in degrees' },
            { id: 'angle-hint-3', label: 'Right, acute, and obtuse are types' },
        ],
    },
    {
        word: 'badge',
        hints: [
            {
                id: 'badge-hint-1',
                label: 'A symbol or indicator of an achievement',
            },
            {
                id: 'badge-hint-2',
                label: 'Worn to show authority or membership',
            },
            { id: 'badge-hint-3', label: 'Often seen on uniforms' },
        ],
    },
    {
        word: 'craft',
        hints: [
            {
                id: 'craft-hint-1',
                label: 'Activity involving skill in making things by hand',
            },
            { id: 'craft-hint-2', label: 'A boat, ship, or aircraft' },
            { id: 'craft-hint-3', label: 'To skillfully create or construct' },
        ],
    },
    {
        word: 'fancy',
        hints: [
            { id: 'fancy-hint-1', label: 'To imagine or desire something' },
            {
                id: 'fancy-hint-2',
                label: 'Elaborate in structure or decoration',
            },
            {
                id: 'fancy-hint-3',
                label: 'A term expressing liking or preference',
            },
        ],
    },
    {
        word: 'clone',
        hints: [
            {
                id: 'clone-hint-1',
                label: 'An exact copy of a biological entity',
            },
            {
                id: 'clone-hint-2',
                label: 'Produced through genetic replication',
            },
            { id: 'clone-hint-3', label: 'Common theme in science fiction' },
        ],
    },
    {
        word: 'truck',
        hints: [
            {
                id: 'truck-hint-1',
                label: 'Large vehicle for transporting goods',
            },
            {
                id: 'truck-hint-2',
                label: 'Can be seen on highways and construction sites',
            },
            { id: 'truck-hint-3', label: 'Variants include pickup and semi' },
        ],
    },
    {
        word: 'train',
        hints: [
            { id: 'train-hint-1', label: 'Connected series of rail vehicles' },
            {
                id: 'train-hint-2',
                label: 'Travels on tracks to transport people or goods',
            },
            {
                id: 'train-hint-3',
                label: 'Can be powered by steam, diesel, or electricity',
            },
        ],
    },
    {
        word: 'super',
        hints: [
            {
                id: 'super-hint-1',
                label: 'Above, beyond, or exceeding in quality',
            },
            { id: 'super-hint-2', label: "Prefix meaning 'higher in degree'" },
            {
                id: 'super-hint-3',
                label: 'Informal term for excellent or very good',
            },
        ],
    },

    {
        word: 'shore',
        hints: [
            {
                id: 'shore-hint-1',
                label: 'Land edge bordering a sea, lake, or river',
            },
            { id: 'shore-hint-2', label: 'Place where water meets land' },
            { id: 'shore-hint-3', label: 'Can be sandy, rocky, or pebbly' },
        ],
    },
    {
        word: 'shame',
        hints: [
            {
                id: 'shame-hint-1',
                label: 'A feeling of guilt, regret, or sadness',
            },
            {
                id: 'shame-hint-2',
                label: 'Result of doing something wrong or foolish',
            },
            {
                id: 'shame-hint-3',
                label: 'Can be used to express disappointment',
            },
        ],
    },
    {
        word: 'hippo',
        hints: [
            { id: 'hippo-hint-1', label: 'Large, mostly herbivorous mammal' },
            { id: 'hippo-hint-2', label: 'Short for hippopotamus' },
            { id: 'hippo-hint-3', label: 'Native to sub-Saharan Africa' },
        ],
    },
    {
        word: 'staff',
        hints: [
            {
                id: 'staff-hint-1',
                label: 'Group of people working for an organization',
            },
            {
                id: 'staff-hint-2',
                label: 'Long stick used as support when walking',
            },
            {
                id: 'staff-hint-3',
                label: 'Can refer to the personnel of a business',
            },
        ],
    },

    {
        word: 'shark',
        hints: [
            { id: 'shark-hint-1', label: 'Predator of the sea' },
            { id: 'shark-hint-2', label: 'Sharp teeth' },
            { id: 'shark-hint-3', label: 'Fins' },
        ],
    },

    {
        word: 'rebel',
        hints: [
            { id: 'rebel-hint-1', label: 'Opposes authority' },
            { id: 'rebel-hint-2', label: 'Revolutionary' },
            { id: 'rebel-hint-3', label: 'Nonconformist' },
        ],
    },
    {
        word: 'brain',
        hints: [
            { id: 'brain-hint-1', label: 'Organ of thought' },
            { id: 'brain-hint-2', label: 'Intellectual center' },
            { id: 'brain-hint-3', label: 'Grey matter' },
        ],
    },
    {
        word: 'clock',
        hints: [
            { id: 'clock-hint-1', label: 'Tells time' },
            { id: 'clock-hint-2', label: 'Tick-tock' },
            { id: 'clock-hint-3', label: 'Cuckoo' },
        ],
    },
    {
        word: 'spoon',
        hints: [
            { id: 'spoon-hint-1', label: 'Utensil for eating soup' },
            { id: 'spoon-hint-2', label: 'Scooping tool' },
            { id: 'spoon-hint-3', label: 'Silverware' },
        ],
    },
    {
        word: 'spark',
        hints: [
            { id: 'spark-hint-1', label: 'Tiny fire' },
            { id: 'spark-hint-2', label: 'Ignition' },
            { id: 'spark-hint-3', label: 'Electric discharge' },
        ],
    },
    {
        word: 'tuple',
        hints: [
            { id: 'tuple-hint-1', label: 'Ordered list' },
            { id: 'tuple-hint-2', label: 'Data structure' },
            { id: 'tuple-hint-3', label: 'Ordered pair' },
        ],
    },
    {
        word: 'drain',
        hints: [
            { id: 'drain-hint-1', label: 'Remove liquid' },
            { id: 'drain-hint-2', label: 'Pipe exit' },
            { id: 'drain-hint-3', label: 'Sewer' },
        ],
    },
    {
        word: 'husky',
        hints: [
            { id: 'husky-hint-1', label: 'Dog breed' },
            { id: 'husky-hint-2', label: 'Strong and burly' },
            { id: 'husky-hint-3', label: 'Sled puller' },
        ],
    },
    {
        word: 'trick',
        hints: [
            { id: 'trick-hint-1', label: 'Deception' },
            { id: 'trick-hint-2', label: 'Illusion' },
            { id: 'trick-hint-3', label: 'Prank' },
        ],
    },
    {
        word: 'turbo',
        hints: [
            { id: 'turbo-hint-1', label: 'Engine booster' },
            { id: 'turbo-hint-2', label: 'Speed enhancement' },
            { id: 'turbo-hint-3', label: 'Forced induction' },
        ],
    },
    {
        word: 'goose',
        hints: [
            { id: 'goose-hint-1', label: 'Waterfowl' },
            { id: 'goose-hint-2', label: 'Honks' },
            { id: 'goose-hint-3', label: 'Feathers' },
        ],
    },
    {
        word: 'loose',
        hints: [
            { id: 'loose-hint-1', label: 'Not tight' },
            { id: 'loose-hint-2', label: 'Opposite of tight' },
            { id: 'loose-hint-3', label: 'Not fastened' },
        ],
    },
    {
        word: 'prank',
        hints: [
            { id: 'prank-hint-1', label: 'Mischievous joke' },
            { id: 'prank-hint-2', label: 'Practical joke' },
            { id: 'prank-hint-3', label: 'Hoax' },
        ],
    },
    {
        word: 'break',
        hints: [
            { id: 'break-hint-1', label: 'Pause' },
            { id: 'break-hint-2', label: 'Crack' },
            { id: 'break-hint-3', label: 'Fracture' },
        ],
    },
    {
        word: 'stuck',
        hints: [
            { id: 'stuck-hint-1', label: 'Unable to move' },
            { id: 'stuck-hint-2', label: 'Jam' },
            { id: 'stuck-hint-3', label: 'Trapped' },
        ],
    },
    {
        word: 'faith',
        hints: [
            { id: 'faith-hint-1', label: 'Belief' },
            { id: 'faith-hint-2', label: 'Religion' },
            { id: 'faith-hint-3', label: 'Trust' },
        ],
    },
    {
        word: 'snake',
        hints: [
            { id: 'snake-hint-1', label: 'Reptile without legs' },
            { id: 'snake-hint-2', label: 'Slithers' },
            { id: 'snake-hint-3', label: 'Venomous' },
        ],
    },
    {
        word: 'jumbo',
        hints: [
            { id: 'jumbo-hint-1', label: 'Large in size' },
            { id: 'jumbo-hint-2', label: 'Often used to describe elephants' },
            { id: 'jumbo-hint-3', label: "Synonym for 'big'" },
            {
                id: 'jumbo-hint-4',
                label: 'Commonly used in the context of airplanes',
            },
        ],
    },
    {
        word: 'toast',
        hints: [
            {
                id: 'toast-hint-1',
                label: 'Bread that has been browned by exposure to heat',
            },
            { id: 'toast-hint-2', label: 'Often eaten for breakfast' },
            { id: 'toast-hint-3', label: 'Can be topped with butter or jam' },
            { id: 'toast-hint-4', label: 'A common accompaniment to eggs' },
        ],
    },
    {
        word: 'mocha',
        hints: [
            { id: 'mocha-hint-1', label: 'A type of coffee' },
            { id: 'mocha-hint-2', label: 'Often contains chocolate flavor' },
            { id: 'mocha-hint-3', label: 'Named after a city in Yemen' },
            { id: 'mocha-hint-4', label: 'Can be served hot or cold' },
        ],
    },
    {
        word: 'greet',
        hints: [
            { id: 'greet-hint-1', label: 'To say hello to someone' },
            { id: 'greet-hint-2', label: 'A form of welcoming' },
            { id: 'greet-hint-3', label: "To acknowledge someone's presence" },
            {
                id: 'greet-hint-4',
                label: 'Often involves a verbal or physical gesture',
            },
        ],
    },
    {
        word: 'rhino',
        hints: [
            {
                id: 'rhino-hint-1',
                label: 'A large, herbivorous mammal with a horn on its nose',
            },
            { id: 'rhino-hint-2', label: 'Found in Africa and Asia' },
            { id: 'rhino-hint-3', label: 'Known for its thick skin' },
            { id: 'rhino-hint-4', label: 'An endangered species' },
        ],
    },
    {
        word: 'comet',
        hints: [
            { id: 'comet-hint-1', label: 'A celestial object with a tail' },
            { id: 'comet-hint-2', label: 'Made of ice, dust, and rock' },
            { id: 'comet-hint-3', label: 'Orbits the sun' },
            {
                id: 'comet-hint-4',
                label: 'Visible as a bright streak against the night sky',
            },
        ],
    },
    {
        word: 'oasis',
        hints: [
            { id: 'oasis-hint-1', label: 'A fertile spot in a desert' },
            { id: 'oasis-hint-2', label: 'Usually has water and vegetation' },
            {
                id: 'oasis-hint-3',
                label: 'Provides relief from the surrounding arid environment',
            },
            { id: 'oasis-hint-4', label: 'A place of refuge or relief' },
        ],
    },
    {
        word: 'spicy',
        hints: [
            {
                id: 'spicy-hint-1',
                label: 'Containing strong flavors or heat from spices',
            },
            {
                id: 'spicy-hint-2',
                label: 'Can cause a burning sensation in the mouth',
            },
            {
                id: 'spicy-hint-3',
                label: 'Common in certain cuisines like Mexican, Indian, and Thai',
            },
            {
                id: 'spicy-hint-4',
                label: 'May include ingredients like chili peppers, ginger, or garlic',
            },
        ],
    },
    {
        word: 'chirp',
        hints: [
            {
                id: 'chirp-hint-1',
                label: 'A short, high-pitched sound made by birds',
            },
            {
                id: 'chirp-hint-2',
                label: 'Often associated with smaller bird species',
            },
            { id: 'chirp-hint-3', label: 'Used by birds for communication' },
            {
                id: 'chirp-hint-4',
                label: 'Can be heard in the early morning or during mating season',
            },
        ],
    },
    {
        word: 'stout',
        hints: [
            { id: 'stout-hint-1', label: 'Dark and strong beer' },
            {
                id: 'stout-hint-2',
                label: 'Often characterized by its roasted malt flavor',
            },
            {
                id: 'stout-hint-3',
                label: 'Popular in Ireland and the United Kingdom',
            },
            {
                id: 'stout-hint-4',
                label: 'Can have hints of chocolate or coffee',
            },
        ],
    },
    {
        word: 'quack',
        hints: [
            { id: 'quack-hint-1', label: 'The sound a duck makes' },
            {
                id: 'quack-hint-2',
                label: 'Often associated with fraudulent medical practices',
            },
            {
                id: 'quack-hint-3',
                label: "Used to describe someone pretending to be something they're not",
            },
            {
                id: 'quack-hint-4',
                label: 'Commonly heard near ponds and lakes',
            },
        ],
    },
    {
        word: 'novel',
        hints: [
            { id: 'novel-hint-1', label: 'A fictional story' },
            { id: 'novel-hint-2', label: 'Often longer than a short story' },
            {
                id: 'novel-hint-3',
                label: 'Can be based on real events or completely imagined',
            },
            { id: 'novel-hint-4', label: 'Usually divided into chapters' },
        ],
    },
    {
        word: 'cider',
        hints: [
            { id: 'cider-hint-1', label: 'A beverage made from apples' },
            {
                id: 'cider-hint-2',
                label: 'Often associated with autumn and fall festivals',
            },
            { id: 'cider-hint-3', label: 'Can be served hot or cold' },
            { id: 'cider-hint-4', label: 'Comes in sweet and dry varieties' },
        ],
    },
    {
        word: 'flash',
        hints: [
            { id: 'flash-hint-1', label: 'A sudden burst of light' },
            { id: 'flash-hint-2', label: 'Commonly associated with lightning' },
            {
                id: 'flash-hint-3',
                label: 'Can also refer to a quick moment or instance',
            },
            { id: 'flash-hint-4', label: 'Often used in photography' },
        ],
    },
    {
        word: 'sushi',
        hints: [
            {
                id: 'sushi-hint-1',
                label: 'A Japanese dish made with vinegared rice and various fillings',
            },
            {
                id: 'sushi-hint-2',
                label: 'Often includes raw fish, seafood, or vegetables',
            },
            {
                id: 'sushi-hint-3',
                label: 'Served with soy sauce, wasabi, and pickled ginger',
            },
            {
                id: 'sushi-hint-4',
                label: 'Popular worldwide as a healthy and flavorful meal',
            },
        ],
    },
    {
        word: 'pixel',
        hints: [
            {
                id: 'pixel-hint-1',
                label: 'The smallest unit of a digital image',
            },
            {
                id: 'pixel-hint-2',
                label: 'Arranged in a grid to form images on screens',
            },
            {
                id: 'pixel-hint-3',
                label: 'The more pixels, the higher the resolution',
            },
            {
                id: 'pixel-hint-4',
                label: 'Can be square or rectangular in shape',
            },
        ],
    },
    {
        word: 'candy',
        hints: [
            { id: 'candy-hint-1', label: 'Sweet treats often made from sugar' },
            {
                id: 'candy-hint-2',
                label: 'Comes in various shapes, sizes, and flavors',
            },
            {
                id: 'candy-hint-3',
                label: 'Commonly associated with holidays like Halloween and Christmas',
            },
            { id: 'candy-hint-4', label: 'Can be hard, chewy, or soft' },
        ],
    },
    {
        word: 'fairy',
        hints: [
            {
                id: 'fairy-hint-1',
                label: 'A mythical creature often depicted as small and magical',
            },
            {
                id: 'fairy-hint-2',
                label: 'Often associated with folklore and fairy tales',
            },
            {
                id: 'fairy-hint-3',
                label: 'Known for granting wishes or causing mischief',
            },
            { id: 'fairy-hint-4', label: 'Has wings and can fly' },
        ],
    },
    {
        word: 'chess',
        hints: [
            {
                id: 'chess-hint-1',
                label: 'A strategic board game played by two players',
            },
            {
                id: 'chess-hint-2',
                label: 'Involves moving pieces with different abilities across the board',
            },
            {
                id: 'chess-hint-3',
                label: 'Requires critical thinking and planning ahead',
            },
            {
                id: 'chess-hint-4',
                label: 'One of the oldest and most popular games in the world',
            },
        ],
    },
    {
        word: 'mango',
        hints: [
            {
                id: 'mango-hint-1',
                label: 'A tropical fruit with a sweet and tangy flavor',
            },
            {
                id: 'mango-hint-2',
                label: 'Native to South Asia but grown in many tropical regions',
            },
            {
                id: 'mango-hint-3',
                label: 'Comes in different varieties, shapes, and sizes',
            },
            {
                id: 'mango-hint-4',
                label: 'Often used in salads, smoothies, and desserts',
            },
        ],
    },
    {
        word: 'oasis',
        hints: [
            { id: 'oasis-hint-1', label: 'A fertile area in a desert' },
            { id: 'oasis-hint-2', label: 'Contains water and vegetation' },
            { id: 'oasis-hint-3', label: 'A welcome sight for travelers' },
            {
                id: 'oasis-hint-4',
                label: 'Provides relief from the harsh desert environment',
            },
        ],
    },
    {
        word: 'salsa',
        hints: [
            { id: 'salsa-hint-1', label: 'A spicy tomato-based sauce' },
            {
                id: 'salsa-hint-2',
                label: 'Often used as a dip for tortilla chips',
            },
            { id: 'salsa-hint-3', label: 'Common in Mexican cuisine' },
            {
                id: 'salsa-hint-4',
                label: 'Can be mild, medium, or hot in terms of spiciness',
            },
        ],
    },
    {
        word: 'pesto',
        hints: [
            {
                id: 'pesto-hint-1',
                label: 'A green sauce made from basil, pine nuts, and garlic',
            },
            { id: 'pesto-hint-2', label: 'Originated in Italy' },
            { id: 'pesto-hint-3', label: 'Often used as a pasta sauce' },
            { id: 'pesto-hint-4', label: 'Has a fresh and aromatic flavor' },
        ],
    },
    {
        word: 'paste',
        hints: [
            { id: 'paste-hint-1', label: 'A thick, viscous substance' },
            { id: 'paste-hint-2', label: 'Used for adhering objects together' },
            { id: 'paste-hint-3', label: 'Commonly found in tubes or jars' },
            {
                id: 'paste-hint-4',
                label: 'Examples include toothpaste and glue',
            },
        ],
    },
    {
        word: 'toast',
        hints: [
            { id: 'toast-hint-1', label: 'Bread heated until crisp and brown' },
            { id: 'toast-hint-2', label: 'Often eaten for breakfast' },
            { id: 'toast-hint-3', label: 'Can be topped with butter or jam' },
            {
                id: 'toast-hint-4',
                label: 'Made by exposing bread to radiant heat',
            },
        ],
    },
    {
        word: 'broth',
        hints: [
            {
                id: 'broth-hint-1',
                label: 'A savory liquid made by simmering meat or vegetables',
            },
            {
                id: 'broth-hint-2',
                label: 'Commonly used as a base for soups and stews',
            },
            {
                id: 'broth-hint-3',
                label: 'Can be seasoned with herbs and spices',
            },
            {
                id: 'broth-hint-4',
                label: 'May contain nutrients extracted from the ingredients',
            },
        ],
    },
    {
        word: 'coast',
        hints: [
            {
                id: 'coast-hint-1',
                label: 'The land along the edge of a sea or ocean',
            },
            {
                id: 'coast-hint-2',
                label: 'Characterized by beaches, cliffs, or marshes',
            },
            {
                id: 'coast-hint-3',
                label: 'Popular for recreational activities like swimming and surfing',
            },
            {
                id: 'coast-hint-4',
                label: 'Subject to erosion and influenced by tides',
            },
        ],
    },
    {
        word: 'loose',
        hints: [
            { id: 'loose-hint-1', label: 'Not firmly fixed in place' },
            { id: 'loose-hint-2', label: 'Opposite of tight or secure' },
            {
                id: 'loose-hint-3',
                label: 'Can refer to clothing that is too large',
            },
            {
                id: 'loose-hint-4',
                label: 'May also describe freedom from constraint',
            },
        ],
    },
    {
        word: 'boost',
        hints: [
            { id: 'boost-hint-1', label: 'To increase or raise something' },
            {
                id: 'boost-hint-2',
                label: 'Commonly used in the context of energy or morale',
            },
            {
                id: 'boost-hint-3',
                label: 'Can refer to enhancing performance or effectiveness',
            },
            {
                id: 'boost-hint-4',
                label: 'Often sought after for productivity or motivation',
            },
        ],
    },
    {
        word: 'burst',
        hints: [
            { id: 'burst-hint-1', label: 'A sudden release of something' },
            { id: 'burst-hint-2', label: 'To break open or apart suddenly' },
            { id: 'burst-hint-3', label: 'A quick and sudden movement' },
            { id: 'burst-hint-4', label: 'Often associated with explosions' },
        ],
    },
    {
        word: 'spike',
        hints: [
            { id: 'spike-hint-1', label: 'A pointed piece of metal or wood' },
            { id: 'spike-hint-2', label: 'A sharp increase or rise' },
            { id: 'spike-hint-3', label: 'To impale or pierce with a spike' },
            {
                id: 'spike-hint-4',
                label: 'Commonly used in sports and construction',
            },
        ],
    },
    {
        word: 'gloss',
        hints: [
            { id: 'gloss-hint-1', label: 'A shiny or reflective surface' },
            { id: 'gloss-hint-2', label: 'To give a shiny appearance to' },
            {
                id: 'gloss-hint-3',
                label: 'A superficially attractive appearance',
            },
            { id: 'gloss-hint-4', label: 'A type of finish or sheen' },
        ],
    },
    {
        word: 'mount',
        hints: [
            { id: 'mount-hint-1', label: 'To climb or ascend' },
            {
                id: 'mount-hint-2',
                label: 'A landform that rises above its surroundings',
            },
            { id: 'mount-hint-3', label: 'To set up or organize' },
            {
                id: 'mount-hint-4',
                label: 'To attach or fix something in place',
            },
        ],
    },
    {
        word: 'grain',
        hints: [
            { id: 'grain-hint-1', label: 'Small, hard seed or fruit' },
            { id: 'grain-hint-2', label: 'A texture or pattern of fibers' },
            {
                id: 'grain-hint-3',
                label: 'Used to make flour or feed livestock',
            },
            {
                id: 'grain-hint-4',
                label: 'A unit of weight equal to 1/7000th of a pound',
            },
        ],
    },
    {
        word: 'clerk',
        hints: [
            {
                id: 'clerk-hint-1',
                label: 'An employee who performs administrative duties',
            },
            { id: 'clerk-hint-2', label: 'Works in a store or office' },
            {
                id: 'clerk-hint-3',
                label: 'Handles paperwork and record-keeping',
            },
            {
                id: 'clerk-hint-4',
                label: 'Assists customers with inquiries or purchases',
            },
        ],
    },
    {
        word: 'broom',
        hints: [
            { id: 'broom-hint-1', label: 'Used for sweeping floors' },
            { id: 'broom-hint-2', label: 'Has a long handle' },
            { id: 'broom-hint-3', label: 'Often made with bristles' },
            { id: 'broom-hint-4', label: 'Common household cleaning tool' },
        ],
    },
    {
        word: 'motor',
        hints: [
            { id: 'motor-hint-1', label: 'Provides mechanical power' },
            {
                id: 'motor-hint-2',
                label: 'Converts electrical energy into mechanical energy',
            },
            { id: 'motor-hint-3', label: 'Found in vehicles and machines' },
            { id: 'motor-hint-4', label: 'Has moving parts' },
        ],
    },
    {
        word: 'pilot',
        hints: [
            { id: 'pilot-hint-1', label: 'Controls an aircraft' },
            { id: 'pilot-hint-2', label: 'Trained to fly an aircraft' },
            {
                id: 'pilot-hint-3',
                label: 'Responsible for navigation and safety',
            },
            { id: 'pilot-hint-4', label: 'Wears a uniform' },
        ],
    },
    {
        word: 'treat',
        hints: [
            { id: 'treat-hint-1', label: 'Something enjoyable or indulgent' },
            { id: 'treat-hint-2', label: 'Often given as a reward' },
            { id: 'treat-hint-3', label: 'Can be sweet or savory' },
            { id: 'treat-hint-4', label: 'Brings pleasure or satisfaction' },
        ],
    },
    {
        word: 'chips',
        hints: [
            { id: 'chips-hint-1', label: 'Thin slices of food' },
            { id: 'chips-hint-2', label: 'Common snack food' },
            {
                id: 'chips-hint-3',
                label: 'Can be made from potatoes or other vegetables',
            },
            { id: 'chips-hint-4', label: 'Often served with dips' },
        ],
    },
    {
        word: 'cheer',
        hints: [
            { id: 'cheer-hint-1', label: 'Expression of joy or support' },
            { id: 'cheer-hint-2', label: 'Can involve shouting or clapping' },
            { id: 'cheer-hint-3', label: 'Boosts morale' },
            { id: 'cheer-hint-4', label: 'Often seen at sports events' },
        ],
    },
    {
        word: 'buyer',
        hints: [
            {
                id: 'buyer-hint-1',
                label: 'One who purchases goods or services',
            },
            { id: 'buyer-hint-2', label: 'Engages in transactions' },
            {
                id: 'buyer-hint-3',
                label: 'Can be an individual or organization',
            },
            { id: 'buyer-hint-4', label: 'Exchanges money for products' },
        ],
    },
    {
        word: 'stunt',
        hints: [
            { id: 'stunt-hint-1', label: 'A daring or impressive feat' },
            {
                id: 'stunt-hint-2',
                label: 'Performed for entertainment or publicity',
            },
            { id: 'stunt-hint-3', label: 'Often seen in action movies' },
            {
                id: 'stunt-hint-4',
                label: 'Requires skill and sometimes special equipment',
            },
        ],
    },
    {
        word: 'anime',
        hints: [
            { id: 'anime-hint-1', label: 'Japanese animated productions' },
            { id: 'anime-hint-2', label: 'Includes a wide range of genres' },
            { id: 'anime-hint-3', label: 'Popular worldwide' },
            {
                id: 'anime-hint-4',
                label: 'Often features colorful artwork and fantastical themes',
            },
        ],
    },
    {
        word: 'naive',
        hints: [
            {
                id: 'naive-hint-1',
                label: 'Lack of experience or sophistication',
            },
            { id: 'naive-hint-2', label: 'Inexperienced or innocent' },
            { id: 'naive-hint-3', label: 'Easily deceived or misled' },
            { id: 'naive-hint-4', label: 'Trusts others too easily' },
        ],
    },
    {
        word: 'groom',
        hints: [
            {
                id: 'groom-hint-1',
                label: 'Prepare someone for a specific role or task',
            },
            { id: 'groom-hint-2', label: 'Clean and tidy oneself' },
            { id: 'groom-hint-3', label: 'Often associated with weddings' },
            { id: 'groom-hint-4', label: "To care for one's appearance" },
        ],
    },
    {
        word: 'green',
        hints: [
            {
                id: 'green-hint-1',
                label: 'Color associated with nature and growth',
            },
            {
                id: 'green-hint-2',
                label: 'Can represent environmental awareness',
            },
            { id: 'green-hint-3', label: 'Fresh or unripe' },
            {
                id: 'green-hint-4',
                label: 'Used to describe eco-friendly practices',
            },
        ],
    },
    {
        word: 'scull',
        hints: [
            { id: 'scull-hint-1', label: 'Rowing technique' },
            { id: 'scull-hint-2', label: 'Uses oars or paddles' },
            {
                id: 'scull-hint-3',
                label: 'Can be done individually or in teams',
            },
            {
                id: 'scull-hint-4',
                label: 'Seen in competitive and recreational rowing',
            },
        ],
    },
    {
        word: 'scalp',
        hints: [
            { id: 'scalp-hint-1', label: 'Skin on top of the head' },
            { id: 'scalp-hint-2', label: 'Can be hairy' },
            { id: 'scalp-hint-3', label: 'Often subject to itching' },
            { id: 'scalp-hint-4', label: 'Where hair grows from' },
        ],
    },
    {
        word: 'blade',
        hints: [
            { id: 'blade-hint-1', label: 'Sharp-edged cutting tool or weapon' },
            { id: 'blade-hint-2', label: 'Part of a knife or sword' },
            {
                id: 'blade-hint-3',
                label: 'Used in various industrial and domestic applications',
            },
            {
                id: 'blade-hint-4',
                label: 'Can be made of metal, plastic, or other materials',
            },
        ],
    },
    {
        word: 'blame',
        hints: [
            {
                id: 'blame-hint-1',
                label: 'Assign responsibility for a fault or wrong',
            },
            { id: 'blame-hint-2', label: 'Hold accountable for a mistake' },
            { id: 'blame-hint-3', label: 'Accuse of wrongdoing' },
            {
                id: 'blame-hint-4',
                label: 'Often leads to feelings of guilt or resentment',
            },
        ],
    },
    {
        word: 'juice',
        hints: [
            {
                id: 'juice-hint-1',
                label: 'Liquid extracted from fruits or vegetables',
            },
            { id: 'juice-hint-2', label: 'Often consumed as a beverage' },
            { id: 'juice-hint-3', label: 'Contains vitamins and minerals' },
            {
                id: 'juice-hint-4',
                label: 'Can be freshly squeezed or processed',
            },
        ],
    },
    {
        word: 'guide',
        hints: [
            { id: 'guide-hint-1', label: 'Provides direction or instruction' },
            { id: 'guide-hint-2', label: 'Leads or directs someone' },
            { id: 'guide-hint-3', label: 'Offers assistance or information' },
            { id: 'guide-hint-4', label: 'Can be a person, book, or device' },
        ],
    },
    {
        word: 'guilt',
        hints: [
            {
                id: 'guilt-hint-1',
                label: 'Feeling of responsibility or remorse for a wrongdoing',
            },
            {
                id: 'guilt-hint-2',
                label: 'Emotional response to having done something wrong',
            },
            {
                id: 'guilt-hint-3',
                label: 'Often leads to a desire to make amends',
            },
            {
                id: 'guilt-hint-4',
                label: 'Can result from actions or inactions',
            },
        ],
    },
    {
        word: 'slime',
        hints: [
            { id: 'slime-hint-1', label: 'Viscous, gooey substance' },
            {
                id: 'slime-hint-2',
                label: 'Often found in nature, such as on snails or in ponds',
            },
            {
                id: 'slime-hint-3',
                label: "Commonly used in children's play activities",
            },
            { id: 'slime-hint-4', label: 'Has a slippery texture' },
        ],
    },
    {
        word: 'robot',
        hints: [
            {
                id: 'robot-hint-1',
                label: 'Mechanical or virtual artificial agent',
            },
            {
                id: 'robot-hint-2',
                label: 'Programmed to perform tasks automatically',
            },
            {
                id: 'robot-hint-3',
                label: 'Can be controlled remotely or act autonomously',
            },
            {
                id: 'robot-hint-4',
                label: 'Used in various fields including manufacturing, healthcare, and entertainment',
            },
        ],
    },
    {
        word: 'proud',
        hints: [
            {
                id: 'proud-hint-1',
                label: 'Feeling of deep pleasure or satisfaction',
            },
            {
                id: 'proud-hint-2',
                label: 'Sense of achievement or fulfillment',
            },
            {
                id: 'proud-hint-3',
                label: 'Often accompanies success or accomplishment',
            },
            {
                id: 'proud-hint-4',
                label: 'Can be related to oneself or someone else',
            },
        ],
    },
    {
        word: 'sport',
        hints: [
            { id: 'sport-hint-1', label: 'Physical activity or game' },
            { id: 'sport-hint-2', label: 'Competitive and organized' },
            { id: 'sport-hint-3', label: 'Promotes health and fitness' },
            {
                id: 'sport-hint-4',
                label: 'Includes a wide range of activities such as football, basketball, and swimming',
            },
        ],
    },
    {
        word: 'spear',
        hints: [
            {
                id: 'spear-hint-1',
                label: 'Projectile weapon with a pointed tip',
            },
            {
                id: 'spear-hint-2',
                label: 'Historically used for hunting and combat',
            },
            { id: 'spear-hint-3', label: 'Can be thrown or thrust' },
            {
                id: 'spear-hint-4',
                label: 'Associated with ancient warriors and tribes',
            },
        ],
    },
    {
        word: 'taser',
        hints: [
            { id: 'taser-hint-1', label: 'Electroshock weapon' },
            { id: 'taser-hint-2', label: 'Non-lethal incapacitation device' },
            {
                id: 'taser-hint-3',
                label: 'Delivers an electric shock to disrupt voluntary control of muscles',
            },
            {
                id: 'taser-hint-4',
                label: 'Used by law enforcement for self-defense or to subdue suspects',
            },
        ],
    },
    {
        word: 'smart',
        hints: [
            { id: 'smart-hint-1', label: 'Intelligent or clever' },
            { id: 'smart-hint-2', label: 'Quick-witted or sharp-minded' },
            {
                id: 'smart-hint-3',
                label: 'Capable of learning and understanding quickly',
            },
            {
                id: 'smart-hint-4',
                label: 'Associated with problem-solving and innovation',
            },
        ],
    },
    {
        word: 'plant',
        hints: [
            {
                id: 'plant-hint-1',
                label: 'Living organism that produces its own food through photosynthesis',
            },
            {
                id: 'plant-hint-2',
                label: 'Has roots, stems, leaves, and often flowers or seeds',
            },
            {
                id: 'plant-hint-3',
                label: 'Key component of ecosystems and the food chain',
            },
            {
                id: 'plant-hint-4',
                label: 'Provides oxygen and serves as a food source for many organisms',
            },
        ],
    },
    {
        word: 'grant',
        hints: [
            { id: 'grant-hint-1', label: 'Financial aid or assistance' },
            {
                id: 'grant-hint-2',
                label: 'Awarded for a specific purpose, often by an organization or government',
            },
            {
                id: 'grant-hint-3',
                label: 'Can support research, education, or community projects',
            },
            {
                id: 'grant-hint-4',
                label: 'Requires an application process and may have specific eligibility criteria',
            },
        ],
    },
    {
        word: 'money',
        hints: [
            {
                id: 'money-hint-1',
                label: 'Medium of exchange for goods and services',
            },
            { id: 'money-hint-2', label: 'Unit of account and store of value' },
            {
                id: 'money-hint-3',
                label: 'Comes in various forms such as coins, banknotes, and digital currency',
            },
            {
                id: 'money-hint-4',
                label: 'Central to economic systems and personal finances',
            },
        ],
    },
    {
        word: 'score',
        hints: [
            { id: 'score-hint-1', label: 'Result of a game or competition' },
            { id: 'score-hint-2', label: 'Number of points earned' },
            {
                id: 'score-hint-3',
                label: 'Can also refer to a musical composition or arrangement',
            },
            {
                id: 'score-hint-4',
                label: 'Achievement or success in a particular endeavor',
            },
        ],
    },
    {
        word: 'sauce',
        hints: [
            {
                id: 'sauce-hint-1',
                label: 'Liquid or semi-solid condiment used to add flavor to food',
            },
            { id: 'sauce-hint-2', label: 'Can be savory or sweet' },
            {
                id: 'sauce-hint-3',
                label: 'Common types include tomato sauce, soy sauce, and barbecue sauce',
            },
            {
                id: 'sauce-hint-4',
                label: 'Often served with pasta, meat, or vegetables',
            },
        ],
    },
    {
        word: 'brand',
        hints: [
            {
                id: 'brand-hint-1',
                label: 'Distinctive name, symbol, design, or feature identifying a product or company',
            },
            {
                id: 'brand-hint-2',
                label: 'Represents the reputation and image of a business',
            },
            {
                id: 'brand-hint-3',
                label: 'Used for marketing and to differentiate from competitors',
            },
            {
                id: 'brand-hint-4',
                label: 'Can evoke emotions and influence consumer perceptions',
            },
        ],
    },
    {
        word: 'model',
        hints: [
            {
                id: 'model-hint-1',
                label: 'Representation or example of something',
            },
            {
                id: 'model-hint-2',
                label: 'Used to demonstrate or simulate a system or concept',
            },
            {
                id: 'model-hint-3',
                label: 'Can refer to a physical object, computer program, or mathematical equation',
            },
            {
                id: 'model-hint-4',
                label: 'Often used in science, engineering, and design',
            },
        ],
    },
    {
        word: 'vodka',
        hints: [
            { id: 'vodka-hint-1', label: 'Clear distilled alcoholic beverage' },
            {
                id: 'vodka-hint-2',
                label: 'Typically made from fermented grains or potatoes',
            },
            { id: 'vodka-hint-3', label: 'Often used as a base for cocktails' },
            {
                id: 'vodka-hint-4',
                label: 'Known for its neutral flavor profile',
            },
        ],
    },
    {
        word: 'crack',
        hints: [
            {
                id: 'crack-hint-1',
                label: 'A small break or fissure in something',
            },
            { id: 'crack-hint-2', label: 'The sound of something breaking' },
            {
                id: 'crack-hint-3',
                label: 'To solve a puzzle or a problem, often used informally',
            },
            {
                id: 'crack-hint-4',
                label: 'A slang term for someone with exceptional skill or ability',
            },
        ],
    },
    {
        word: 'quick',
        hints: [
            { id: 'quick-hint-1', label: 'Fast' },
            { id: 'quick-hint-2', label: 'Speedy' },
            { id: 'quick-hint-3', label: 'Swift' },
            { id: 'quick-hint-4', label: 'Rapid' },
        ],
    },
    {
        word: 'bluff',
        hints: [
            { id: 'bluff-hint-1', label: 'Deceptive act' },
            { id: 'bluff-hint-2', label: 'Poker strategy' },
            { id: 'bluff-hint-3', label: 'Misleading behavior' },
            { id: 'bluff-hint-4', label: 'Feigning strength' },
        ],
    },
    {
        word: 'motel',
        hints: [
            { id: 'motel-hint-1', label: 'Budget accommodation' },
            { id: 'motel-hint-2', label: 'Lodging for travelers' },
            { id: 'motel-hint-3', label: 'Motorist hotel' },
            {
                id: 'motel-hint-4',
                label: 'Rooms with direct access to parking',
            },
        ],
    },
    {
        word: 'hotel',
        hints: [
            { id: 'hotel-hint-1', label: 'Luxury accommodation' },
            { id: 'hotel-hint-2', label: 'Hospitality establishment' },
            { id: 'hotel-hint-3', label: 'Offers various amenities' },
            {
                id: 'hotel-hint-4',
                label: 'Often located in city centers or near tourist attractions',
            },
        ],
    },
    {
        word: 'crook',
        hints: [
            { id: 'crook-hint-1', label: 'Criminal' },
            { id: 'crook-hint-2', label: 'Thief' },
            { id: 'crook-hint-3', label: 'Dishonest person' },
            { id: 'crook-hint-4', label: 'Engages in illegal activities' },
        ],
    },
    {
        word: 'frame',
        hints: [
            { id: 'frame-hint-1', label: 'Structure' },
            { id: 'frame-hint-2', label: 'Supporting framework' },
            { id: 'frame-hint-3', label: 'Outline' },
            { id: 'frame-hint-4', label: 'Border' },
        ],
    },
    {
        word: 'breed',
        hints: [
            { id: 'breed-hint-1', label: 'Type of animal' },
            { id: 'breed-hint-2', label: 'Species' },
            { id: 'breed-hint-3', label: 'Race' },
            { id: 'breed-hint-4', label: 'Kind' },
        ],
    },
    {
        word: 'quote',
        hints: [
            { id: 'quote-hint-1', label: 'Saying' },
            { id: 'quote-hint-2', label: 'Extract from a text' },
            { id: 'quote-hint-3', label: 'Citation' },
            { id: 'quote-hint-4', label: 'Passage' },
        ],
    },
    {
        word: 'laser',
        hints: [
            { id: 'laser-hint-1', label: 'Focused beam of light' },
            { id: 'laser-hint-2', label: 'Highly concentrated light source' },
            {
                id: 'laser-hint-3',
                label: 'Used in various applications including surgery and cutting',
            },
            { id: 'laser-hint-4', label: 'Emits coherent light' },
        ],
    },
    {
        word: 'slope',
        hints: [
            { id: 'slope-hint-1', label: 'Incline' },
            { id: 'slope-hint-2', label: 'Gradient' },
            { id: 'slope-hint-3', label: 'Tilt' },
            { id: 'slope-hint-4', label: 'Slant' },
        ],
    },
    {
        word: 'sewer',
        hints: [
            { id: 'sewer-hint-1', label: 'Underground drainage system' },
            { id: 'sewer-hint-2', label: 'Carries wastewater' },
            { id: 'sewer-hint-3', label: 'Network of pipes' },
            { id: 'sewer-hint-4', label: 'Disposal system for liquid waste' },
        ],
    },
    {
        word: 'otter',
        hints: [
            { id: 'otter-hint-1', label: 'Aquatic mammal' },
            { id: 'otter-hint-2', label: 'Fur-covered creature' },
            { id: 'otter-hint-3', label: 'Excellent swimmer' },
            {
                id: 'otter-hint-4',
                label: 'Often found near rivers and streams',
            },
        ],
    },
    {
        word: 'pupil',
        hints: [
            { id: 'pupil-hint-1', label: 'Student' },
            { id: 'pupil-hint-2', label: 'Learner' },
            { id: 'pupil-hint-3', label: 'One attending school' },
            { id: 'pupil-hint-4', label: 'Inhabitant of an eye' },
        ],
    },
    {
        word: 'thick',
        hints: [
            { id: 'thick-hint-1', label: 'Not thin' },
            { id: 'thick-hint-2', label: 'Opposite of thin' },
            { id: 'thick-hint-3', label: 'Wide in dimensions' },
            {
                id: 'thick-hint-4',
                label: 'Having considerable depth or extent from one surface to its opposite',
            },
        ],
    },
    {
        word: 'taste',
        hints: [
            { id: 'taste-hint-1', label: 'Flavor' },
            { id: 'taste-hint-2', label: 'Palate sensation' },
            { id: 'taste-hint-3', label: 'Gustatory perception' },
            { id: 'taste-hint-4', label: 'Sense of flavor' },
        ],
    },
    {
        word: 'trash',
        hints: [
            { id: 'trash-hint-1', label: 'Garbage' },
            { id: 'trash-hint-2', label: 'Refuse' },
            { id: 'trash-hint-3', label: 'Waste material' },
            { id: 'trash-hint-4', label: 'Discarded items' },
        ],
    },
    {
        word: 'trust',
        hints: [
            {
                id: 'trust-hint-1',
                label: 'Reliance on the integrity, strength, ability, surety, etc., of a person or thing',
            },
            { id: 'trust-hint-2', label: 'Confidence' },
            { id: 'trust-hint-3', label: 'Faith' },
            {
                id: 'trust-hint-4',
                label: 'Belief in the honesty, integrity, reliability, etc., of another',
            },
        ],
    },
    {
        word: 'wreck',
        hints: [
            { id: 'wreck-hint-1', label: 'Destroyed or badly damaged' },
            { id: 'wreck-hint-2', label: 'Shipwreck' },
            { id: 'wreck-hint-3', label: 'Disaster' },
            { id: 'wreck-hint-4', label: 'Ruined state' },
        ],
    },
    {
        word: 'press',
        hints: [
            { id: 'press-hint-1', label: 'To apply pressure' },
            { id: 'press-hint-2', label: 'Journalism industry' },
            { id: 'press-hint-3', label: 'Publishing' },
            { id: 'press-hint-4', label: 'Squeeze or compress' },
        ],
    },
    {
        word: 'click',
        hints: [
            { id: 'click-hint-1', label: 'Sound made by pressing a button' },
            { id: 'click-hint-2', label: 'Mouse action' },
            {
                id: 'click-hint-3',
                label: 'To select or activate with a mouse button',
            },
            { id: 'click-hint-4', label: 'Digital interaction' },
        ],
    },
    {
        word: 'stamp',
        hints: [
            { id: 'stamp-hint-1', label: 'Mark made by pressing' },
            { id: 'stamp-hint-2', label: 'Imprint' },
            { id: 'stamp-hint-3', label: 'Official seal' },
            { id: 'stamp-hint-4', label: 'Postal symbol' },
        ],
    },
    {
        word: 'snore',
        hints: [
            { id: 'snore-hint-1', label: 'Sound made while sleeping' },
            { id: 'snore-hint-2', label: 'Noisy breathing during sleep' },
            { id: 'snore-hint-3', label: 'Sawing logs' },
            { id: 'snore-hint-4', label: 'Often annoys bed partners' },
        ],
    },
    {
        word: 'crank',
        hints: [
            { id: 'crank-hint-1', label: 'Rotating handle' },
            {
                id: 'crank-hint-2',
                label: 'Mechanical device for transmitting motion',
            },
            { id: 'crank-hint-3', label: 'Eccentric person' },
            { id: 'crank-hint-4', label: 'Turn the handle' },
        ],
    },
    {
        word: 'broke',
        hints: [
            { id: 'broke-hint-1', label: 'Out of money' },
            { id: 'broke-hint-2', label: 'Financially depleted' },
            { id: 'broke-hint-3', label: 'Penniless' },
            { id: 'broke-hint-4', label: 'Lacking funds' },
        ],
    },
    {
        word: 'grade',
        hints: [
            { id: 'grade-hint-1', label: 'Level or degree of something' },
            { id: 'grade-hint-2', label: 'Rating' },
            { id: 'grade-hint-3', label: 'Mark given in assessment' },
            { id: 'grade-hint-4', label: 'Classify according to quality' },
        ],
    },
    {
        word: 'start',
        hints: [
            { id: 'start-hint-1', label: 'Commence' },
            { id: 'start-hint-2', label: 'Begin' },
            { id: 'start-hint-3', label: 'Initiate' },
            { id: 'start-hint-4', label: 'Kick off' },
        ],
    },
    {
        word: 'grasp',
        hints: [
            { id: 'grasp-hint-1', label: 'To hold firmly' },
            { id: 'grasp-hint-2', label: 'Understand or comprehend' },
            { id: 'grasp-hint-3', label: 'To seize or grab' },
            {
                id: 'grasp-hint-4',
                label: 'To have a firm understanding of something',
            },
        ],
    },
    {
        word: 'space',
        hints: [
            { id: 'space-hint-1', label: 'The vast expanse beyond Earth' },
            {
                id: 'space-hint-2',
                label: "The physical universe beyond Earth's atmosphere",
            },
            { id: 'space-hint-3', label: 'The void between celestial bodies' },
            { id: 'space-hint-4', label: 'An area without obstruction' },
        ],
    },
    {
        word: 'satin',
        hints: [
            { id: 'satin-hint-1', label: 'Smooth and glossy fabric' },
            { id: 'satin-hint-2', label: 'Often used in evening gowns' },
            { id: 'satin-hint-3', label: 'Has a luxurious feel' },
            {
                id: 'satin-hint-4',
                label: 'Commonly used in bedding and linens',
            },
        ],
    },
    {
        word: 'north',
        hints: [
            { id: 'north-hint-1', label: 'Direction towards the Arctic' },
            { id: 'north-hint-2', label: 'Opposite of south' },
            { id: 'north-hint-3', label: 'Where the North Pole is located' },
            {
                id: 'north-hint-4',
                label: 'Often represented by a compass point',
            },
        ],
    },
    {
        word: 'south',
        hints: [
            { id: 'south-hint-1', label: 'Direction towards Antarctica' },
            { id: 'south-hint-2', label: 'Opposite of north' },
            { id: 'south-hint-3', label: 'Where the South Pole is located' },
            {
                id: 'south-hint-4',
                label: 'Often represented by a compass point',
            },
        ],
    },
    {
        word: 'moist',
        hints: [
            { id: 'moist-hint-1', label: 'Slightly wet or damp' },
            { id: 'moist-hint-2', label: 'Not completely dry' },
            { id: 'moist-hint-3', label: 'A texture between wet and dry' },
            {
                id: 'moist-hint-4',
                label: 'Often used to describe cakes or soil',
            },
        ],
    },
    {
        word: 'sleep',
        hints: [
            { id: 'sleep-hint-1', label: 'Natural state of rest for the body' },
            {
                id: 'sleep-hint-2',
                label: 'Essential for health and well-being',
            },
            {
                id: 'sleep-hint-3',
                label: 'Occurs during the night for most people',
            },
            {
                id: 'sleep-hint-4',
                label: 'Involves cycles of REM and non-REM phases',
            },
        ],
    },
    {
        word: 'sonar',
        hints: [
            {
                id: 'sonar-hint-1',
                label: 'Technique for detecting objects underwater',
            },
            {
                id: 'sonar-hint-2',
                label: 'Uses sound waves to determine distance and direction',
            },
            {
                id: 'sonar-hint-3',
                label: 'Commonly used in navigation and fishing',
            },
            {
                id: 'sonar-hint-4',
                label: 'Stands for "Sound Navigation And Ranging"',
            },
        ],
    },
    {
        word: 'meter',
        hints: [
            {
                id: 'meter-hint-1',
                label: 'Unit of length in the metric system',
            },
            { id: 'meter-hint-2', label: 'Equivalent to 100 centimeters' },
            {
                id: 'meter-hint-3',
                label: 'Commonly used for measuring distances',
            },
            { id: 'meter-hint-4', label: 'Abbreviated as "m"' },
        ],
    },
    {
        word: 'liter',
        hints: [
            {
                id: 'liter-hint-1',
                label: 'Unit of volume in the metric system',
            },
            { id: 'liter-hint-2', label: 'Equivalent to 1000 milliliters' },
            {
                id: 'liter-hint-3',
                label: 'Commonly used for measuring liquids',
            },
            { id: 'liter-hint-4', label: 'Abbreviated as "L"' },
        ],
    },
    {
        word: 'level',
        hints: [
            { id: 'level-hint-1', label: 'Horizontal plane or position' },
            { id: 'level-hint-2', label: 'Equal or even surface' },
            {
                id: 'level-hint-3',
                label: 'Often used in construction and carpentry',
            },
            {
                id: 'level-hint-4',
                label: 'Can be described as flat or parallel to the ground',
            },
        ],
    },
    {
        word: 'punch',
        hints: [
            { id: 'punch-hint-1', label: 'A forceful blow with the fist' },
            { id: 'punch-hint-2', label: 'Used in boxing and martial arts' },
            {
                id: 'punch-hint-3',
                label: 'Can also refer to a fruity beverage',
            },
            {
                id: 'punch-hint-4',
                label: 'Often served at parties or gatherings',
            },
        ],
    },
    {
        word: 'pager',
        hints: [
            {
                id: 'pager-hint-1',
                label: 'Electronic device for receiving messages',
            },
            {
                id: 'pager-hint-2',
                label: 'Popular before the widespread use of mobile phones',
            },
            {
                id: 'pager-hint-3',
                label: 'Used by professionals such as doctors and emergency responders',
            },
            {
                id: 'pager-hint-4',
                label: 'Known for their beeping or buzzing alerts',
            },
        ],
    },
    {
        word: 'tulip',
        hints: [
            { id: 'tulip-hint-1', label: 'A colorful spring flower' },
            {
                id: 'tulip-hint-2',
                label: 'Characterized by its cup-shaped petals',
            },
            { id: 'tulip-hint-3', label: 'Symbol of love and perfect beauty' },
            {
                id: 'tulip-hint-4',
                label: 'Comes in various colors including red, yellow, and pink',
            },
        ],
    },
    {
        word: 'crust',
        hints: [
            { id: 'crust-hint-1', label: 'Outer layer of bread or pastry' },
            {
                id: 'crust-hint-2',
                label: 'Can be crispy or soft depending on the recipe',
            },
            { id: 'crust-hint-3', label: 'Forms during baking' },
            {
                id: 'crust-hint-4',
                label: 'Often used in pies, pizzas, and quiches',
            },
        ],
    },
    {
        word: 'agape',
        hints: [
            { id: 'agape-hint-1', label: 'Wide open' },
            { id: 'agape-hint-2', label: 'Expressing surprise or wonder' },
            { id: 'agape-hint-3', label: 'In a state of wonder or amazement' },
            { id: 'agape-hint-4', label: 'Jaw-dropping' },
        ],
    },
    {
        word: 'armor',
        hints: [
            { id: 'armor-hint-1', label: 'Protective covering' },
            { id: 'armor-hint-2', label: 'Defensive attire' },
            { id: 'armor-hint-3', label: 'Metal plates worn for protection' },
            { id: 'armor-hint-4', label: "Knight's attire" },
        ],
    },
    {
        word: 'alien',
        hints: [
            { id: 'alien-hint-1', label: 'Extraterrestrial being' },
            { id: 'alien-hint-2', label: 'Not from Earth' },
            { id: 'alien-hint-3', label: 'Unfamiliar or strange' },
            { id: 'alien-hint-4', label: 'Foreigner' },
        ],
    },
    {
        word: 'arise',
        hints: [
            { id: 'arise-hint-1', label: 'Get up' },
            { id: 'arise-hint-2', label: 'Come into existence' },
            { id: 'arise-hint-3', label: 'Emerge' },
            { id: 'arise-hint-4', label: 'Stand up' },
        ],
    },
    {
        word: 'audit',
        hints: [
            { id: 'audit-hint-1', label: 'Examination of financial records' },
            { id: 'audit-hint-2', label: 'Official inspection' },
            { id: 'audit-hint-3', label: 'Financial checkup' },
            { id: 'audit-hint-4', label: 'Accounting review' },
        ],
    },
    {
        word: 'affix',
        hints: [
            { id: 'affix-hint-1', label: 'Attach' },
            { id: 'affix-hint-2', label: 'Fasten' },
            { id: 'affix-hint-3', label: 'Stick on' },
            { id: 'affix-hint-4', label: 'Join together' },
        ],
    },
    {
        word: 'attic',
        hints: [
            { id: 'attic-hint-1', label: 'Top floor of a house' },
            { id: 'attic-hint-2', label: 'Storage space under the roof' },
            { id: 'attic-hint-3', label: 'Under-roof space' },
            { id: 'attic-hint-4', label: 'Space for storage or habitation' },
        ],
    },
    {
        word: 'ambit',
        hints: [
            { id: 'ambit-hint-1', label: 'Scope or range' },
            { id: 'ambit-hint-2', label: 'Extent of authority or control' },
            { id: 'ambit-hint-3', label: 'Sphere of influence' },
            { id: 'ambit-hint-4', label: 'Domain' },
        ],
    },
    {
        word: 'axiom',
        hints: [
            { id: 'axiom-hint-1', label: 'Self-evident truth' },
            { id: 'axiom-hint-2', label: 'Basic principle' },
            { id: 'axiom-hint-3', label: 'Accepted statement or proposition' },
            { id: 'axiom-hint-4', label: 'Fundamental assumption' },
        ],
    },
    {
        word: 'agate',
        hints: [
            { id: 'agate-hint-1', label: 'Mineral with banded colors' },
            { id: 'agate-hint-2', label: 'Semi-precious gemstone' },
            { id: 'agate-hint-3', label: 'Hard stone used for jewelry' },
            { id: 'agate-hint-4', label: 'Variety of chalcedony' },
        ],
    },
    {
        word: 'aging',
        hints: [
            { id: 'aging-hint-1', label: 'Getting older' },
            { id: 'aging-hint-2', label: 'Maturing' },
            { id: 'aging-hint-3', label: 'Process of becoming old' },
            { id: 'aging-hint-4', label: 'Growth in age' },
        ],
    },
    {
        word: 'aback',
        hints: [
            { id: 'aback-hint-1', label: 'Taken by surprise' },
            { id: 'aback-hint-2', label: 'Unexpectedly' },
            { id: 'aback-hint-3', label: 'Caught off guard' },
            { id: 'aback-hint-4', label: 'Astonished' },
        ],
    },
    {
        word: 'acute',
        hints: [
            { id: 'acute-hint-1', label: 'Sharp' },
            { id: 'acute-hint-2', label: 'Intense' },
            { id: 'acute-hint-3', label: 'Severe' },
            { id: 'acute-hint-4', label: 'Keenly felt' },
        ],
    },

    {
        word: 'aerie',
        hints: [
            { id: 'aerie-hint-1', label: "Eagle's nest" },
            { id: 'aerie-hint-2', label: 'High nest' },
            { id: 'aerie-hint-3', label: 'Nesting place' },
            { id: 'aerie-hint-4', label: "Bird's eyrie" },
        ],
    },
    {
        word: 'angle',
        hints: [
            { id: 'angle-hint-1', label: 'Geometric figure with two rays' },
            { id: 'angle-hint-2', label: 'Corner' },
            { id: 'angle-hint-3', label: 'Perspective' },
            { id: 'angle-hint-4', label: 'Point of view' },
        ],
    },
    {
        word: 'amble',
        hints: [
            { id: 'amble-hint-1', label: 'Leisurely walk' },
            { id: 'amble-hint-2', label: 'Stroll' },
            { id: 'amble-hint-3', label: 'Casual walk' },
            { id: 'amble-hint-4', label: 'Easygoing pace' },
        ],
    },
    {
        word: 'azure',
        hints: [
            { id: 'azure-hint-1', label: 'Sky blue' },
            { id: 'azure-hint-2', label: 'Color of the sky on a clear day' },
            { id: 'azure-hint-3', label: 'Cerulean' },
            { id: 'azure-hint-4', label: 'Sapphire' },
        ],
    },
    {
        word: 'alder',
        hints: [
            { id: 'alder-hint-1', label: 'Type of tree' },
            {
                id: 'alder-hint-2',
                label: 'Deciduous tree with serrated leaves',
            },
            { id: 'alder-hint-3', label: 'Wood used in making furniture' },
            { id: 'alder-hint-4', label: 'Tree often found near water' },
        ],
    },
    {
        word: 'assay',
        hints: [
            { id: 'assay-hint-1', label: 'Analysis' },
            { id: 'assay-hint-2', label: 'Examination' },
            { id: 'assay-hint-3', label: 'Test' },
            { id: 'assay-hint-4', label: 'Assessment' },
        ],
    },

    {
        word: 'agave',
        hints: [
            { id: 'agave-hint-1', label: 'Plant used to make tequila' },
            { id: 'agave-hint-2', label: 'Succulent plant' },
            { id: 'agave-hint-3', label: 'Source of agave nectar' },
            { id: 'agave-hint-4', label: 'Spiky plant native to Mexico' },
        ],
    },
    {
        word: 'adage',
        hints: [
            { id: 'adage-hint-1', label: 'Proverb' },
            { id: 'adage-hint-2', label: 'Saying' },
            { id: 'adage-hint-3', label: 'Maxim' },
            { id: 'adage-hint-4', label: 'Traditional wisdom' },
        ],
    },

    {
        word: 'allay',
        hints: [
            { id: 'allay-hint-1', label: 'Relieve' },
            { id: 'allay-hint-2', label: 'Alleviate' },
            { id: 'allay-hint-3', label: 'Calm' },
            { id: 'allay-hint-4', label: 'Soothe' },
        ],
    },
    {
        word: 'album',
        hints: [
            { id: 'album-hint-1', label: 'Collection of songs' },
            { id: 'album-hint-2', label: 'Recorded music compilation' },
            { id: 'album-hint-3', label: 'Set of photographs' },
            { id: 'album-hint-4', label: 'Book for storing stamps or coins' },
        ],
    },
    {
        word: 'ardor',
        hints: [
            { id: 'ardor-hint-1', label: 'Passion' },
            { id: 'ardor-hint-2', label: 'Enthusiasm' },
            { id: 'ardor-hint-3', label: 'Intensity' },
            { id: 'ardor-hint-4', label: 'Zeal' },
        ],
    },
    {
        word: 'amine',
        hints: [
            { id: 'amine-hint-1', label: 'Organic compound' },
            { id: 'amine-hint-2', label: 'Derivative of ammonia' },
            { id: 'amine-hint-3', label: 'Nitrogen-containing compound' },
            { id: 'amine-hint-4', label: 'Basic compound' },
        ],
    },

    {
        word: 'arrow',
        hints: [
            { id: 'arrow-hint-1', label: 'Projectile shot from a bow' },
            { id: 'arrow-hint-2', label: 'Pointed weapon' },
            { id: 'arrow-hint-3', label: 'Directional indicator' },
            { id: 'arrow-hint-4', label: 'Symbol of speed or direction' },
        ],
    },
    {
        word: 'await',
        hints: [
            { id: 'await-hint-1', label: 'Wait for' },
            { id: 'await-hint-2', label: 'Expect' },
            { id: 'await-hint-3', label: 'Anticipate' },
            { id: 'await-hint-4', label: 'Look forward to' },
        ],
    },
    {
        word: 'alpha',
        hints: [
            { id: 'alpha-hint-1', label: 'First letter of the Greek alphabet' },
            { id: 'alpha-hint-2', label: 'Beginning' },
            { id: 'alpha-hint-3', label: 'First in a series' },
            { id: 'alpha-hint-4', label: 'Primary' },
        ],
    },
    {
        word: 'argon',
        hints: [
            { id: 'argon-hint-1', label: 'Chemical element' },
            { id: 'argon-hint-2', label: 'Noble gas' },
            { id: 'argon-hint-3', label: 'Colorless and odorless' },
            { id: 'argon-hint-4', label: 'Used in light bulbs' },
        ],
    },
    {
        word: 'aroma',
        hints: [
            { id: 'aroma-hint-1', label: 'Fragrance' },
            { id: 'aroma-hint-2', label: 'Scent' },
            { id: 'aroma-hint-3', label: 'Smell' },
            { id: 'aroma-hint-4', label: 'Odor' },
        ],
    },
    {
        word: 'apple',
        hints: [
            { id: 'apple-hint-1', label: 'Fruit' },
            { id: 'apple-hint-2', label: 'Commonly red or green' },
            { id: 'apple-hint-3', label: 'Grows on trees' },
            { id: 'apple-hint-4', label: 'Associated with computers' },
        ],
    },
    {
        word: 'bison',
        hints: [
            { id: 'bison-hint-1', label: 'Large mammal' },
            { id: 'bison-hint-2', label: 'Related to buffalo' },
            { id: 'bison-hint-3', label: 'Hunted by Native Americans' },
            { id: 'bison-hint-4', label: 'Symbol of strength and resilience' },
        ],
    },
    {
        word: 'brief',
        hints: [
            { id: 'brief-hint-1', label: 'Short' },
            { id: 'brief-hint-2', label: 'Concise' },
            { id: 'brief-hint-3', label: 'Summary' },
            { id: 'brief-hint-4', label: 'Quick' },
        ],
    },

    {
        word: 'brood',
        hints: [
            { id: 'brood-hint-1', label: 'Offspring' },
            { id: 'brood-hint-2', label: 'Group of young animals' },
            { id: 'brood-hint-3', label: 'Family of birds' },
            { id: 'brood-hint-4', label: 'To dwell on thoughts' },
        ],
    },
    {
        word: 'basis',
        hints: [
            { id: 'basis-hint-1', label: 'Foundation' },
            { id: 'basis-hint-2', label: 'Fundamental principle' },
            { id: 'basis-hint-3', label: 'Basis for comparison' },
            { id: 'basis-hint-4', label: 'Starting point' },
        ],
    },
    {
        word: 'bezel',
        hints: [
            { id: 'bezel-hint-1', label: 'Watch part' },
            { id: 'bezel-hint-2', label: 'Jewelry setting' },
            { id: 'bezel-hint-3', label: 'Frame around a screen' },
            { id: 'bezel-hint-4', label: 'Edge of a gemstone' },
        ],
    },

    {
        word: 'blade',
        hints: [
            { id: 'blade-hint-1', label: 'Sharp edge' },
            { id: 'blade-hint-2', label: 'Cutting tool' },
            { id: 'blade-hint-3', label: 'Part of a knife' },
            { id: 'blade-hint-4', label: 'Leaf of grass or plant' },
        ],
    },
    {
        word: 'blown',
        hints: [
            { id: 'blown-hint-1', label: 'Past participle of blow' },
            { id: 'blown-hint-2', label: 'Moved by wind' },
            { id: 'blown-hint-3', label: 'Inflated' },
            { id: 'blown-hint-4', label: 'Exhausted' },
        ],
    },

    {
        word: 'baron',
        hints: [
            { id: 'baron-hint-1', label: 'Nobleman' },
            { id: 'baron-hint-2', label: 'Title of nobility' },
            { id: 'baron-hint-3', label: 'Large landowner' },
            { id: 'baron-hint-4', label: 'Magnate' },
        ],
    },

    {
        word: 'blush',
        hints: [
            { id: 'blush-hint-1', label: 'Turn red in the face' },
            { id: 'blush-hint-2', label: 'Flush' },
            { id: 'blush-hint-3', label: 'Show embarrassment' },
            { id: 'blush-hint-4', label: 'Rosy cheeks' },
        ],
    },
    {
        word: 'brier',
        hints: [
            { id: 'brier-hint-1', label: 'Thorny shrub' },
            { id: 'brier-hint-2', label: 'Bramble' },
            { id: 'brier-hint-3', label: 'Prickly plant' },
            { id: 'brier-hint-4', label: 'Common in hedgerows' },
        ],
    },
    {
        word: 'byway',
        hints: [
            { id: 'byway-hint-1', label: 'Side road' },
            { id: 'byway-hint-2', label: 'Alternative route' },
            { id: 'byway-hint-3', label: 'Less-traveled path' },
            { id: 'byway-hint-4', label: 'Secondary route' },
        ],
    },
    {
        word: 'breve',
        hints: [
            { id: 'breve-hint-1', label: 'Musical note' },
            {
                id: 'breve-hint-2',
                label: 'Short mark indicating a short vowel sound',
            },
            { id: 'breve-hint-3', label: 'Diacritical mark' },
            { id: 'breve-hint-4', label: 'Symbol used in notation' },
        ],
    },
    {
        word: 'botch',
        hints: [
            { id: 'botch-hint-1', label: 'Mess up' },
            { id: 'botch-hint-2', label: 'Bungle' },
            { id: 'botch-hint-3', label: 'Screw up' },
            { id: 'botch-hint-4', label: 'Ruin' },
        ],
    },
    {
        word: 'brook',
        hints: [
            { id: 'brook-hint-1', label: 'Small stream' },
            { id: 'brook-hint-2', label: 'Creek' },
            { id: 'brook-hint-3', label: 'Watercourse' },
            { id: 'brook-hint-4', label: 'Rivulet' },
        ],
    },

    {
        word: 'bolus',
        hints: [
            { id: 'bolus-hint-1', label: 'Mass of chewed food' },
            { id: 'bolus-hint-2', label: 'Ball of material' },
            { id: 'bolus-hint-3', label: 'Wad' },
            { id: 'bolus-hint-4', label: 'Bulky mass' },
        ],
    },
    {
        word: 'bunch',
        hints: [
            { id: 'bunch-hint-1', label: 'Cluster' },
            { id: 'bunch-hint-2', label: 'Group' },
            { id: 'bunch-hint-3', label: 'Bundle' },
            { id: 'bunch-hint-4', label: 'Collection' },
        ],
    },

    {
        word: 'bursa',
        hints: [
            { id: 'bursa-hint-1', label: 'Fluid-filled sac in the body' },
            { id: 'bursa-hint-2', label: 'Anatomical structure' },
            { id: 'bursa-hint-3', label: 'Found near joints' },
            { id: 'bursa-hint-4', label: 'Reduces friction' },
        ],
    },
    {
        word: 'brash',
        hints: [
            { id: 'brash-hint-1', label: 'Bold' },
            { id: 'brash-hint-2', label: 'Impetuous' },
            { id: 'brash-hint-3', label: 'Audacious' },
            { id: 'brash-hint-4', label: 'Impulsive' },
        ],
    },

    {
        word: 'barge',
        hints: [
            { id: 'barge-hint-1', label: 'Large boat' },
            { id: 'barge-hint-2', label: 'Flat-bottomed vessel' },
            { id: 'barge-hint-3', label: 'Used for transporting goods' },
            { id: 'barge-hint-4', label: 'River vessel' },
        ],
    },
    {
        word: 'bound',
        hints: [
            { id: 'bound-hint-1', label: 'Limit' },
            { id: 'bound-hint-2', label: 'Restriction' },
            { id: 'bound-hint-3', label: 'Boundary' },
            { id: 'bound-hint-4', label: 'Confined' },
        ],
    },
    {
        word: 'blond',
        hints: [
            { id: 'blond-hint-1', label: 'Fair-haired' },
            { id: 'blond-hint-2', label: 'Light-colored hair' },
            { id: 'blond-hint-3', label: 'Golden' },
            { id: 'blond-hint-4', label: 'Yellowish hair' },
        ],
    },
    {
        word: 'bodge',
        hints: [
            { id: 'bodge-hint-1', label: 'Patch up clumsily' },
            { id: 'bodge-hint-2', label: 'Botch' },
            { id: 'bodge-hint-3', label: 'Make a mess of' },
            { id: 'bodge-hint-4', label: 'Muddle' },
        ],
    },

    {
        word: 'bonny',
        hints: [
            { id: 'bonny-hint-1', label: 'Attractive' },
            { id: 'bonny-hint-2', label: 'Beautiful' },
            { id: 'bonny-hint-3', label: 'Pretty' },
            { id: 'bonny-hint-4', label: 'Lovely' },
        ],
    },

    {
        word: 'blood',
        hints: [
            { id: 'blood-hint-1', label: 'Life fluid' },
            { id: 'blood-hint-2', label: 'Circulatory system fluid' },
            { id: 'blood-hint-3', label: 'Red liquid in veins' },
            { id: 'blood-hint-4', label: 'Essential bodily fluid' },
        ],
    },
    {
        word: 'brunt',
        hints: [
            { id: 'brunt-hint-1', label: 'Main impact' },
            { id: 'brunt-hint-2', label: 'Force of a blow' },
            { id: 'brunt-hint-3', label: 'Shock' },
            { id: 'brunt-hint-4', label: 'Primary force' },
        ],
    },
    {
        word: 'cycle',
        hints: [
            { id: 'cycle-hint-1', label: 'Repeats regularly' },
            { id: 'cycle-hint-2', label: 'Two-wheeled transport' },
            { id: 'cycle-hint-3', label: 'Pedal-powered' },
            { id: 'cycle-hint-4', label: 'Has spokes and tires' },
        ],
    },
    {
        word: 'chain',
        hints: [
            { id: 'chain-hint-1', label: 'Links connected together' },
            { id: 'chain-hint-2', label: 'Used to secure or fasten' },
            { id: 'chain-hint-3', label: 'Found on bicycles' },
            { id: 'chain-hint-4', label: 'Can be made of metal or plastic' },
        ],
    },
    {
        word: 'crowd',
        hints: [
            { id: 'crowd-hint-1', label: 'Large gathering of people' },
            { id: 'crowd-hint-2', label: 'Can be noisy' },
            { id: 'crowd-hint-3', label: 'Often found at events or concerts' },
            {
                id: 'crowd-hint-4',
                label: 'May lead to feelings of claustrophobia',
            },
        ],
    },
    {
        word: 'cheap',
        hints: [
            { id: 'cheap-hint-1', label: 'Inexpensive' },
            { id: 'cheap-hint-2', label: 'Costs little money' },
            { id: 'cheap-hint-3', label: 'Affordable' },
            { id: 'cheap-hint-4', label: 'Not expensive' },
        ],
    },
    {
        word: 'crash',
        hints: [
            { id: 'crash-hint-1', label: 'Sudden loud noise' },
            { id: 'crash-hint-2', label: 'Accident involving vehicles' },
            { id: 'crash-hint-3', label: 'Computer system failure' },
            { id: 'crash-hint-4', label: 'Collision' },
        ],
    },
    {
        word: 'clump',
        hints: [
            { id: 'clump-hint-1', label: 'Cluster or group' },
            { id: 'clump-hint-2', label: 'Thick grouping of something' },
            { id: 'clump-hint-3', label: 'May refer to soil or dirt' },
            {
                id: 'clump-hint-4',
                label: 'Can describe the sound of footsteps',
            },
        ],
    },
    {
        word: 'child',
        hints: [
            { id: 'child-hint-1', label: 'Young person' },
            { id: 'child-hint-2', label: 'Offspring' },
            { id: 'child-hint-3', label: 'Underage individual' },
            { id: 'child-hint-4', label: 'Not yet an adult' },
        ],
    },
    {
        word: 'comer',
        hints: [
            { id: 'comer-hint-1', label: 'Arrival or newcomer' },
            {
                id: 'comer-hint-2',
                label: 'Someone new to a place or situation',
            },
            { id: 'comer-hint-3', label: 'Beginning to show promise' },
            { id: 'comer-hint-4', label: 'Entering a competition or market' },
        ],
    },
    {
        word: 'close',
        hints: [
            { id: 'close-hint-1', label: 'Nearby' },
            { id: 'close-hint-2', label: 'Shut or shut tight' },
            { id: 'close-hint-3', label: 'To end or conclude' },
            { id: 'close-hint-4', label: 'To seal or fasten' },
        ],
    },
    {
        word: 'cacao',
        hints: [
            { id: 'cacao-hint-1', label: 'Bean used to make chocolate' },
            { id: 'cacao-hint-2', label: 'Main ingredient in cocoa powder' },
            { id: 'cacao-hint-3', label: 'Grown in tropical regions' },
            {
                id: 'cacao-hint-4',
                label: 'Processed to make various chocolate products',
            },
        ],
    },
    {
        word: 'carat',
        hints: [
            { id: 'carat-hint-1', label: 'Unit of weight for gemstones' },
            { id: 'carat-hint-2', label: 'Used to measure the purity of gold' },
            { id: 'carat-hint-3', label: 'Divided into 100 points' },
            { id: 'carat-hint-4', label: 'Determines the value of diamonds' },
        ],
    },
    {
        word: 'civet',
        hints: [
            { id: 'civet-hint-1', label: 'Small mammal with a pointed snout' },
            {
                id: 'civet-hint-2',
                label: 'Known for producing a musk-like substance',
            },
            { id: 'civet-hint-3', label: 'Used in the perfume industry' },
            { id: 'civet-hint-4', label: 'Found in Asia and Africa' },
        ],
    },

    {
        word: 'chase',
        hints: [
            { id: 'chase-hint-1', label: 'To pursue' },
            { id: 'chase-hint-2', label: 'Hunting after' },
            { id: 'chase-hint-3', label: 'To run after' },
            { id: 'chase-hint-4', label: 'Seeking to catch' },
        ],
    },
    {
        word: 'comet',
        hints: [
            { id: 'comet-hint-1', label: 'Celestial object with a tail' },
            { id: 'comet-hint-2', label: 'Orbits the sun' },
            { id: 'comet-hint-3', label: 'Made of ice, dust, and rock' },
            { id: 'comet-hint-4', label: 'Visible in the night sky' },
        ],
    },
    {
        word: 'colic',
        hints: [
            {
                id: 'colic-hint-1',
                label: 'Abdominal pain, especially in infants',
            },
            {
                id: 'colic-hint-2',
                label: 'May be caused by gas or indigestion',
            },
            { id: 'colic-hint-3', label: 'Can lead to excessive crying' },
            { id: 'colic-hint-4', label: 'Common in newborns' },
        ],
    },
    {
        word: 'cruse',
        hints: [
            { id: 'cruse-hint-1', label: 'Small container for liquids' },
            { id: 'cruse-hint-2', label: 'Usually made of clay or metal' },
            { id: 'cruse-hint-3', label: 'Historically used for oil or wine' },
            { id: 'cruse-hint-4', label: 'Found in ancient households' },
        ],
    },

    {
        word: 'catch',
        hints: [
            { id: 'catch-hint-1', label: 'To grab or seize' },
            { id: 'catch-hint-2', label: 'To capture' },
            { id: 'catch-hint-3', label: 'To intercept' },
            { id: 'catch-hint-4', label: 'To ensnare' },
        ],
    },

    {
        word: 'copra',
        hints: [
            { id: 'copra-hint-1', label: 'Dried coconut meat' },
            { id: 'copra-hint-2', label: 'Used to extract coconut oil' },
            {
                id: 'copra-hint-3',
                label: 'Important commodity in tropical regions',
            },
            {
                id: 'copra-hint-4',
                label: 'Processed for various industrial uses',
            },
        ],
    },
    {
        word: 'covey',
        hints: [
            { id: 'covey-hint-1', label: 'Small group or flock' },
            { id: 'covey-hint-2', label: 'Often refers to birds' },
            { id: 'covey-hint-3', label: 'Can be found in nature reserves' },
            { id: 'covey-hint-4', label: 'Characteristic of certain species' },
        ],
    },
    {
        word: 'cross',
        hints: [
            { id: 'cross-hint-1', label: 'To go from one side to the other' },
            { id: 'cross-hint-2', label: 'To intersect' },
            { id: 'cross-hint-3', label: 'To pass over' },
            { id: 'cross-hint-4', label: 'Symbol of Christianity' },
        ],
    },
    {
        word: 'chasm',
        hints: [
            { id: 'chasm-hint-1', label: 'Deep fissure or canyon' },
            { id: 'chasm-hint-2', label: 'Large gap or rift' },
            { id: 'chasm-hint-3', label: 'Often found in mountainous areas' },
            { id: 'chasm-hint-4', label: 'Difficult to cross' },
        ],
    },
    {
        word: 'crown',
        hints: [
            { id: 'crown-hint-1', label: 'Headwear of royalty' },
            { id: 'crown-hint-2', label: 'To declare someone a monarch' },
            { id: 'crown-hint-3', label: 'Top or highest point' },
            { id: 'crown-hint-4', label: 'Part of a tooth' },
        ],
    },
    {
        word: 'cleat',
        hints: [
            { id: 'cleat-hint-1', label: 'Shoe attachment for traction' },
            {
                id: 'cleat-hint-2',
                label: 'Used in sports like soccer or baseball',
            },
            { id: 'cleat-hint-3', label: 'Attaches to the sole of a shoe' },
            { id: 'cleat-hint-4', label: 'Helps prevent slipping' },
        ],
    },
    {
        word: 'coven',
        hints: [
            { id: 'coven-hint-1', label: 'Group of witches' },
            {
                id: 'coven-hint-2',
                label: 'Gathering of practitioners of magic',
            },
            {
                id: 'coven-hint-3',
                label: 'Associated with rituals and ceremonies',
            },
            {
                id: 'coven-hint-4',
                label: 'Believed to have supernatural powers',
            },
        ],
    },
    {
        word: 'chair',
        hints: [
            { id: 'chair-hint-1', label: 'Piece of furniture for sitting' },
            {
                id: 'chair-hint-2',
                label: 'Typically has a backrest and four legs',
            },
            { id: 'chair-hint-3', label: 'Used at a table or desk' },
            {
                id: 'chair-hint-4',
                label: 'Can be made of wood, metal, or plastic',
            },
        ],
    },

    {
        word: 'dowel',
        hints: [
            { id: 'dowel-hint-1', label: 'Cylindrical pin or rod' },
            {
                id: 'dowel-hint-2',
                label: 'Used to strengthen joints in woodworking',
            },
            {
                id: 'dowel-hint-3',
                label: 'Inserted into holes to hold parts together',
            },
            { id: 'dowel-hint-4', label: 'Common in furniture construction' },
        ],
    },

    {
        word: 'diary',
        hints: [
            { id: 'diary-hint-1', label: 'Daily record of events or thoughts' },
            { id: 'diary-hint-2', label: 'Personal journal' },
            {
                id: 'diary-hint-3',
                label: 'Kept to document experiences or emotions',
            },
            { id: 'diary-hint-4', label: 'May include dates and timestamps' },
        ],
    },
    {
        word: 'dower',
        hints: [
            {
                id: 'dower-hint-1',
                label: 'Dowry or property a woman brings to a marriage',
            },
            {
                id: 'dower-hint-2',
                label: "Portion of a deceased husband's estate assigned to his widow",
            },
            { id: 'dower-hint-3', label: 'Legal term related to inheritance' },
            {
                id: 'dower-hint-4',
                label: 'Historically significant in property law',
            },
        ],
    },

    {
        word: 'daily',
        hints: [
            { id: 'daily-hint-1', label: 'Occurs every day' },
            { id: 'daily-hint-2', label: 'Regular routine or habit' },
            {
                id: 'daily-hint-3',
                label: 'Can refer to a newspaper publication',
            },
            {
                id: 'daily-hint-4',
                label: 'Often includes news, features, and opinion pieces',
            },
        ],
    },
    {
        word: 'dolly',
        hints: [
            { id: 'dolly-hint-1', label: 'Small wheeled platform' },
            { id: 'dolly-hint-2', label: 'Used for moving heavy objects' },
            { id: 'dolly-hint-3', label: 'Commonly used in film production' },
            {
                id: 'dolly-hint-4',
                label: 'Also known as a hand truck or moving dolly',
            },
        ],
    },
    {
        word: 'dirge',
        hints: [
            { id: 'dirge-hint-1', label: 'Funeral lament or mournful song' },
            { id: 'dirge-hint-2', label: 'Slow, sad music' },
            { id: 'dirge-hint-3', label: 'Often played at memorial services' },
            { id: 'dirge-hint-4', label: 'Expresses grief or sorrow' },
        ],
    },
    {
        word: 'drape',
        hints: [
            { id: 'drape-hint-1', label: 'To cover or adorn with fabric' },
            { id: 'drape-hint-2', label: 'Hang loosely or flowingly' },
            {
                id: 'drape-hint-3',
                label: 'Commonly used for curtains or clothing',
            },
            { id: 'drape-hint-4', label: 'Can add elegance or privacy' },
        ],
    },
    {
        word: 'dinar',
        hints: [
            {
                id: 'dinar-hint-1',
                label: 'Unit of currency in several countries',
            },
            {
                id: 'dinar-hint-2',
                label: 'Used in the Middle East and North Africa',
            },
            { id: 'dinar-hint-3', label: 'Named after a historical coin' },
            { id: 'dinar-hint-4', label: 'Made of paper or metal' },
        ],
    },

    {
        word: 'ditty',
        hints: [
            { id: 'ditty-hint-1', label: 'Short, simple song' },
            { id: 'ditty-hint-2', label: 'Often with a catchy tune' },
            { id: 'ditty-hint-3', label: 'Can be humorous or sentimental' },
            {
                id: 'ditty-hint-4',
                label: 'May tell a brief story or convey a message',
            },
        ],
    },
    {
        word: 'deary',
        hints: [
            {
                id: 'deary-hint-1',
                label: 'Affectionate term for someone dear or beloved',
            },
            { id: 'deary-hint-2', label: 'Endearing nickname' },
            { id: 'deary-hint-3', label: 'Expresses fondness or affection' },
            {
                id: 'deary-hint-4',
                label: 'Often used between close friends or family',
            },
        ],
    },
    {
        word: 'ditto',
        hints: [
            { id: 'ditto-hint-1', label: 'Copy or duplicate' },
            {
                id: 'ditto-hint-2',
                label: 'Used to indicate agreement or repetition',
            },
            { id: 'ditto-hint-3', label: 'Derived from Italian for "said"' },
            { id: 'ditto-hint-4', label: 'Commonly used in lists or forms' },
        ],
    },

    {
        word: 'delay',
        hints: [
            { id: 'delay-hint-1', label: 'Postpone or put off' },
            { id: 'delay-hint-2', label: 'Wait before taking action' },
            { id: 'delay-hint-3', label: 'Causes a time lag or interruption' },
            {
                id: 'delay-hint-4',
                label: 'May result in a later start or arrival',
            },
        ],
    },
    {
        word: 'divot',
        hints: [
            { id: 'divot-hint-1', label: 'Small piece of turf or grass' },
            { id: 'divot-hint-2', label: 'Often displaced by golf clubs' },
            {
                id: 'divot-hint-3',
                label: 'Left behind after hitting a golf ball',
            },
            {
                id: 'divot-hint-4',
                label: 'Can be replaced to repair the ground',
            },
        ],
    },
    {
        word: 'dress',
        hints: [
            {
                id: 'dress-hint-1',
                label: 'Article of clothing worn on the body',
            },
            { id: 'dress-hint-2', label: 'Can be formal or casual' },
            {
                id: 'dress-hint-3',
                label: 'Comes in various styles and lengths',
            },
            {
                id: 'dress-hint-4',
                label: 'May include skirts, shirts, or pants',
            },
        ],
    },
    {
        word: 'debut',
        hints: [
            { id: 'debut-hint-1', label: 'First appearance or performance' },
            { id: 'debut-hint-2', label: 'Introduction to the public' },
            { id: 'debut-hint-3', label: 'Debutante ball for young women' },
            { id: 'debut-hint-4', label: 'Launch of a new product or artist' },
        ],
    },

    {
        word: 'dogma',
        hints: [
            { id: 'dogma-hint-1', label: 'Set of beliefs or principles' },
            { id: 'dogma-hint-2', label: 'Doctrine or teachings' },
            { id: 'dogma-hint-3', label: 'Accepted as authoritative' },
            {
                id: 'dogma-hint-4',
                label: 'Often associated with religion or ideology',
            },
        ],
    },
    {
        word: 'daddy',
        hints: [
            { id: 'daddy-hint-1', label: 'Informal term for father' },
            {
                id: 'daddy-hint-2',
                label: 'Endearing nickname for a male parent',
            },
            { id: 'daddy-hint-3', label: 'Used affectionately by children' },
            {
                id: 'daddy-hint-4',
                label: 'May be spelled "daddie" in some contexts',
            },
        ],
    },
    {
        word: 'diner',
        hints: [
            {
                id: 'diner-hint-1',
                label: 'Restaurant that serves casual meals',
            },
            {
                id: 'diner-hint-2',
                label: 'Often characterized by a retro or vintage theme',
            },
            { id: 'diner-hint-3', label: 'Frequently open 24 hours' },
            {
                id: 'diner-hint-4',
                label: 'Serves classic American dishes like burgers and milkshakes',
            },
        ],
    },
    {
        word: 'droll',
        hints: [
            { id: 'droll-hint-1', label: 'Amusing in an odd or whimsical way' },
            { id: 'droll-hint-2', label: 'Funny or comical' },
            { id: 'droll-hint-3', label: 'Often characterized by dry humor' },
            { id: 'droll-hint-4', label: 'Can elicit smiles or chuckles' },
        ],
    },
    {
        word: 'death',
        hints: [
            { id: 'death-hint-1', label: 'End of life' },
            { id: 'death-hint-2', label: 'Cessation of existence' },
            { id: 'death-hint-3', label: 'Inevitable part of the life cycle' },
            {
                id: 'death-hint-4',
                label: 'Can be caused by various factors such as illness or injury',
            },
        ],
    },
    {
        word: 'donor',
        hints: [
            {
                id: 'donor-hint-1',
                label: 'Person who gives or donates something',
            },
            {
                id: 'donor-hint-2',
                label: 'Can refer to blood, organs, or money',
            },
            {
                id: 'donor-hint-3',
                label: 'Provides assistance or support to others',
            },
            {
                id: 'donor-hint-4',
                label: 'May be recognized for their generosity',
            },
        ],
    },
    {
        word: 'draft',
        hints: [
            { id: 'draft-hint-1', label: 'Preliminary version or plan' },
            {
                id: 'draft-hint-2',
                label: 'First attempt at writing or creating',
            },
            { id: 'draft-hint-3', label: 'May require revisions or editing' },
            {
                id: 'draft-hint-4',
                label: 'Often used in the context of documents or designs',
            },
        ],
    },
    {
        word: 'dairy',
        hints: [
            {
                id: 'dairy-hint-1',
                label: 'Farm or facility where milk is produced',
            },
            {
                id: 'dairy-hint-2',
                label: 'Also refers to products made from milk',
            },
            {
                id: 'dairy-hint-3',
                label: 'Includes items like cheese, yogurt, and butter',
            },
            { id: 'dairy-hint-4', label: 'Important industry in agriculture' },
        ],
    },
    {
        word: 'dryad',
        hints: [
            { id: 'dryad-hint-1', label: 'Woodland nymph or spirit' },
            { id: 'dryad-hint-2', label: 'Associated with trees and forests' },
            {
                id: 'dryad-hint-3',
                label: 'In Greek mythology, a type of nature spirit',
            },
            {
                id: 'dryad-hint-4',
                label: 'Protector of the forest and its inhabitants',
            },
        ],
    },
    {
        word: 'decor',
        hints: [
            { id: 'decor-hint-1', label: 'Decoration or ornamentation' },
            { id: 'decor-hint-2', label: 'Enhances the appearance of a space' },
            {
                id: 'decor-hint-3',
                label: 'Can include furniture, artwork, and accessories',
            },
            { id: 'decor-hint-4', label: 'Reflects personal style and taste' },
        ],
    },
    {
        word: 'devil',
        hints: [
            {
                id: 'devil-hint-1',
                label: 'Evil or malevolent supernatural being',
            },
            { id: 'devil-hint-2', label: 'Opposite of an angel' },
            {
                id: 'devil-hint-3',
                label: 'Associated with temptation and mischief',
            },
            {
                id: 'devil-hint-4',
                label: 'Portrayed in various mythologies and religions',
            },
        ],
    },
    {
        word: 'doubt',
        hints: [
            { id: 'doubt-hint-1', label: 'Uncertainty or lack of conviction' },
            { id: 'doubt-hint-2', label: 'Questioning or skepticism' },
            {
                id: 'doubt-hint-3',
                label: 'May arise from conflicting evidence or beliefs',
            },
            {
                id: 'doubt-hint-4',
                label: 'Can lead to hesitation or indecision',
            },
        ],
    },

    {
        word: 'dying',
        hints: [
            { id: 'dying-hint-1', label: 'Ceasing to live' },
            { id: 'dying-hint-2', label: 'Approaching death' },
            { id: 'dying-hint-3', label: 'Terminal illness or condition' },
            { id: 'dying-hint-4', label: 'Transition from life to death' },
        ],
    },
    {
        word: 'ember',
        hints: [
            { id: 'ember-hint-1', label: 'Glowing coal or piece of wood' },
            { id: 'ember-hint-2', label: 'Fading or dying fire' },
            { id: 'ember-hint-3', label: 'Emits warmth and light' },
            {
                id: 'ember-hint-4',
                label: 'Can be used for kindling or starting a fire',
            },
        ],
    },
    {
        word: 'enema',
        hints: [
            {
                id: 'enema-hint-1',
                label: 'Medical procedure to flush out the colon',
            },
            {
                id: 'enema-hint-2',
                label: 'Involves injecting fluid into the rectum',
            },
            {
                id: 'enema-hint-3',
                label: 'Used for constipation relief or medical treatment',
            },
            {
                id: 'enema-hint-4',
                label: 'Can be administered at home or in a medical facility',
            },
        ],
    },
    {
        word: 'ethyl',
        hints: [
            {
                id: 'ethyl-hint-1',
                label: 'Chemical compound with two carbon atoms',
            },
            { id: 'ethyl-hint-2', label: 'Found in many organic solvents' },
            {
                id: 'ethyl-hint-3',
                label: 'Used in the production of ethanol and other chemicals',
            },
            {
                id: 'ethyl-hint-4',
                label: 'Can be toxic if ingested or inhaled in large quantities',
            },
        ],
    },
    {
        word: 'enemy',
        hints: [
            { id: 'enemy-hint-1', label: 'Opponent or adversary' },
            {
                id: 'enemy-hint-2',
                label: 'Hostile or unfriendly individual or group',
            },
            { id: 'enemy-hint-3', label: 'Engaged in conflict or opposition' },
            {
                id: 'enemy-hint-4',
                label: 'Often used in war or competitive contexts',
            },
        ],
    },
    {
        word: 'etude',
        hints: [
            {
                id: 'etude-hint-1',
                label: 'Musical composition designed for practice or study',
            },
            {
                id: 'etude-hint-2',
                label: 'Often showcases a particular technical skill',
            },
            {
                id: 'etude-hint-3',
                label: 'Can be found in various genres of music',
            },
            {
                id: 'etude-hint-4',
                label: 'Performed by musicians to improve their abilities',
            },
        ],
    },
    {
        word: 'essay',
        hints: [
            {
                id: 'essay-hint-1',
                label: 'Formal piece of writing on a particular subject',
            },
            {
                id: 'essay-hint-2',
                label: 'Includes an introduction, body, and conclusion',
            },
            {
                id: 'essay-hint-3',
                label: 'May present an argument or analyze a topic',
            },
            {
                id: 'essay-hint-4',
                label: 'Commonly assigned as academic coursework',
            },
        ],
    },

    {
        word: 'elbow',
        hints: [
            {
                id: 'elbow-hint-1',
                label: 'Joint between the upper and lower arm',
            },
            {
                id: 'elbow-hint-2',
                label: 'Allows for bending and straightening of the arm',
            },
            {
                id: 'elbow-hint-3',
                label: 'Used in activities such as lifting and pushing',
            },
            {
                id: 'elbow-hint-4',
                label: 'May be injured through overuse or trauma',
            },
        ],
    },
    {
        word: 'elder',
        hints: [
            { id: 'elder-hint-1', label: 'Older or more senior individual' },
            {
                id: 'elder-hint-2',
                label: 'Respected member of a community or family',
            },
            {
                id: 'elder-hint-3',
                label: 'Often possesses wisdom or experience',
            },
            {
                id: 'elder-hint-4',
                label: 'May hold positions of leadership or authority',
            },
        ],
    },
    {
        word: 'error',
        hints: [
            { id: 'error-hint-1', label: 'Mistake or incorrect action' },
            {
                id: 'error-hint-2',
                label: 'Failure to achieve a desired outcome',
            },
            {
                id: 'error-hint-3',
                label: 'Can occur in various contexts such as computing, sports, or communication',
            },
            {
                id: 'error-hint-4',
                label: 'May be caused by human error, equipment malfunction, or other factors',
            },
        ],
    },
    {
        word: 'entry',
        hints: [
            { id: 'entry-hint-1', label: 'Act of entering or gaining access' },
            { id: 'entry-hint-2', label: 'Point of access or passage' },
            {
                id: 'entry-hint-3',
                label: 'Can refer to a doorway, gate, or opening',
            },
            {
                id: 'entry-hint-4',
                label: 'Also refers to information recorded in a log or database',
            },
        ],
    },
    {
        word: 'elite',
        hints: [
            {
                id: 'elite-hint-1',
                label: 'Group of individuals or organizations with superior status or abilities',
            },
            {
                id: 'elite-hint-2',
                label: 'Considered the best or most skilled in a particular field',
            },
            {
                id: 'elite-hint-3',
                label: 'Often associated with privilege or exclusivity',
            },
            {
                id: 'elite-hint-4',
                label: 'May receive special treatment or opportunities',
            },
        ],
    },
    {
        word: 'elegy',
        hints: [
            {
                id: 'elegy-hint-1',
                label: 'Poem or song expressing sorrow or lamentation',
            },
            { id: 'elegy-hint-2', label: 'Mournful or melancholic in tone' },
            {
                id: 'elegy-hint-3',
                label: 'Often written in memory of someone who has died',
            },
            {
                id: 'elegy-hint-4',
                label: 'Reflects on themes of loss, grief, and mortality',
            },
        ],
    },
    {
        word: 'empty',
        hints: [
            {
                id: 'empty-hint-1',
                label: 'Containing nothing; not filled or occupied',
            },
            { id: 'empty-hint-2', label: 'Lacking contents or substance' },
            {
                id: 'empty-hint-3',
                label: 'May refer to an empty container, room, or space',
            },
            {
                id: 'empty-hint-4',
                label: 'Can also describe a feeling of loneliness or absence',
            },
        ],
    },
    {
        word: 'earth',
        hints: [
            {
                id: 'earth-hint-1',
                label: 'Third planet from the sun in our solar system',
            },
            {
                id: 'earth-hint-2',
                label: 'Home to a diverse range of ecosystems and life forms',
            },
            {
                id: 'earth-hint-3',
                label: 'Composed of land, water, and atmosphere',
            },
            {
                id: 'earth-hint-4',
                label: 'Also used to refer to the soil or ground',
            },
        ],
    },
    {
        word: 'elect',
        hints: [
            {
                id: 'elect-hint-1',
                label: 'Choose or select for a position or honor',
            },
            {
                id: 'elect-hint-2',
                label: 'Typically through voting or decision-making process',
            },
            {
                id: 'elect-hint-3',
                label: 'Can refer to choosing a leader, representative, or candidate',
            },
            {
                id: 'elect-hint-4',
                label: 'May involve a formal election or informal selection',
            },
        ],
    },
    {
        word: 'event',
        hints: [
            {
                id: 'event-hint-1',
                label: 'Occurrence or happening, especially one of significance',
            },
            { id: 'event-hint-2', label: 'Often planned or organized' },
            {
                id: 'event-hint-3',
                label: 'Can be social, cultural, sporting, or political in nature',
            },
            {
                id: 'event-hint-4',
                label: 'May attract attendees, participants, or spectators',
            },
        ],
    },
    {
        word: 'extra',
        hints: [
            { id: 'extra-hint-1', label: 'Additional or supplemental' },
            {
                id: 'extra-hint-2',
                label: 'Beyond what is expected or required',
            },
            {
                id: 'extra-hint-3',
                label: 'May refer to extra time, effort, or resources',
            },
            {
                id: 'extra-hint-4',
                label: 'Can also describe a minor actor or performer in a film or play',
            },
        ],
    },

    {
        word: 'epoch',
        hints: [
            {
                id: 'epoch-hint-1',
                label: 'Period of time marked by distinctive features or events',
            },
            { id: 'epoch-hint-2', label: 'Significant era or age in history' },
            {
                id: 'epoch-hint-3',
                label: 'Often associated with major cultural, social, or technological developments',
            },
            {
                id: 'epoch-hint-4',
                label: 'May be used in scientific contexts to denote a specific time interval',
            },
        ],
    },
    {
        word: 'ester',
        hints: [
            {
                id: 'ester-hint-1',
                label: 'Chemical compound derived from an acid and an alcohol',
            },
            { id: 'ester-hint-2', label: 'Has a fruity or pleasant odor' },
            {
                id: 'ester-hint-3',
                label: 'Commonly used in fragrances, flavors, and industrial applications',
            },
            {
                id: 'ester-hint-4',
                label: 'Forms the basis of many natural and synthetic compounds',
            },
        ],
    },
    {
        word: 'easel',
        hints: [
            {
                id: 'easel-hint-1',
                label: "Frame or stand used to support an artist's canvas or board",
            },
            {
                id: 'easel-hint-2',
                label: 'Adjustable to different heights and angles',
            },
            {
                id: 'easel-hint-3',
                label: 'Allows for comfortable painting or drawing',
            },
            {
                id: 'easel-hint-4',
                label: 'Commonly used by artists in studios or outdoor settings',
            },
        ],
    },

    {
        word: 'ether',
        hints: [
            {
                id: 'ether-hint-1',
                label: 'Chemical compound with an oxygen atom bonded to two alkyl or aryl groups',
            },
            {
                id: 'ether-hint-2',
                label: 'Used as a solvent, anesthetic, or starting material in organic synthesis',
            },
            {
                id: 'ether-hint-3',
                label: 'Historically used as an anesthetic agent',
            },
            {
                id: 'ether-hint-4',
                label: 'Highly flammable and volatile liquid',
            },
        ],
    },
    {
        word: 'exile',
        hints: [
            {
                id: 'exile-hint-1',
                label: "Forced removal or banishment from one's home or country",
            },
            {
                id: 'exile-hint-2',
                label: 'Can be due to political, social, or religious reasons',
            },
            {
                id: 'exile-hint-3',
                label: 'Often involves loss of citizenship or rights',
            },
            {
                id: 'exile-hint-4',
                label: 'May result in isolation, hardship, or persecution',
            },
        ],
    },
    {
        word: 'eager',
        hints: [
            {
                id: 'eager-hint-1',
                label: 'Keen or enthusiastic about something',
            },
            {
                id: 'eager-hint-2',
                label: 'Looking forward to or impatient for something to happen',
            },
            {
                id: 'eager-hint-3',
                label: 'Often accompanied by a desire or willingness to participate or learn',
            },
            {
                id: 'eager-hint-4',
                label: "Can describe a person's attitude, demeanor, or behavior",
            },
        ],
    },
    {
        word: 'envoy',
        hints: [
            {
                id: 'envoy-hint-1',
                label: 'Diplomatic representative or messenger',
            },
            {
                id: 'envoy-hint-2',
                label: 'Sent by a government or organization to negotiate or convey messages',
            },
            {
                id: 'envoy-hint-3',
                label: 'Works to maintain or establish diplomatic relations between countries or groups',
            },
            {
                id: 'envoy-hint-4',
                label: 'May participate in peace talks, treaty negotiations, or international conferences',
            },
        ],
    },
    {
        word: 'eagle',
        hints: [
            {
                id: 'eagle-hint-1',
                label: 'Large bird of prey with a hooked beak and strong talons',
            },
            {
                id: 'eagle-hint-2',
                label: 'Symbol of strength, power, and freedom in various cultures',
            },
            {
                id: 'eagle-hint-3',
                label: 'Found on every continent except Antarctica',
            },
            {
                id: 'eagle-hint-4',
                label: 'Known for its keen eyesight and soaring flight',
            },
        ],
    },
] as const satisfies WordDictionaryEntry[];
