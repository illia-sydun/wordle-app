import { WordDictionaryEntry } from '@shared/types/Word.ts';

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
] as const satisfies WordDictionaryEntry[];
