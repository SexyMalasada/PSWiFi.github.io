// Modified from http://play.pokemonshowdown.com/data/moves.js
// MIT License
// Retrieved September 23rd, 2020

var Moves = {
	"10000000voltthunderbolt": {
		num: 719,
		accuracy: true,
		basePower: 195,
		category: "Special",
		isNonstandard: "Past",
		name: "10,000,000 Volt Thunderbolt",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "pikashuniumz",
		critRatio: 3,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a very high chance for a critical hit.",
		shortDesc: "Very high critical hit ratio."
	},
	absorb: {
		num: 71,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Absorb",
		pp: 25,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			heal: 1
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt."
	},
	accelerock: {
		num: 709,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Accelerock",
		pp: 20,
		priority: 1,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	acid: {
		num: 51,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Acid",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Poison",
		contestType: "Clever",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the foe(s) Sp. Def by 1."
	},
	acidarmor: {
		num: 151,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Acid Armor",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: 2
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Tough",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2."
	},
	aciddownpour: {
		num: 628,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Acid Downpour",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "poisoniumz",
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	acidspray: {
		num: 491,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Acid Spray",
		pp: 20,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spd: -2
			}
		},
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
		desc: "Has a 100% chance to lower the target's Special Defense by 2 stages.",
		shortDesc: "100% chance to lower the target's Sp. Def by 2."
	},
	acrobatics: {
		num: 512,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Acrobatics",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			distance: 1
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "Power doubles if the user has no held item.",
		shortDesc: "Power doubles if the user has no held item."
	},
	acupressure: {
		num: 367,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Acupressure",
		pp: 30,
		priority: 0,
		flags: {},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
		zMove: {
			effect: "crit2"
		},
		contestType: "Tough",
		desc: "Raises a random stat by 2 stages as long as the stat is not already at stage 6. The user can choose to use this move on itself or an adjacent ally. Fails if no stat stage can be raised or if used on an ally with a substitute.",
		shortDesc: "Raises a random stat of the user or an ally by 2."
	},
	aerialace: {
		num: 332,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		name: "Aerial Ace",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			distance: 1
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy."
	},
	aeroblast: {
		num: 177,
		accuracy: 95,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Aeroblast",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			distance: 1
		},
		critRatio: 2,
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	afteryou: {
		num: 495,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "After You",
		pp: 15,
		priority: 0,
		flags: {
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Cute",
		desc: "The target makes its move immediately after the user this turn, no matter the priority of its selected move. Fails if the target would have moved next anyway, or if the target already moved this turn.",
		shortDesc: "The target makes its move right after the user."
	},
	agility: {
		num: 97,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Agility",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			spe: 2
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cool",
		desc: "Raises the user's Speed by 2 stages.",
		shortDesc: "Raises the user's Speed by 2."
	},
	aircutter: {
		num: 314,
		accuracy: 95,
		basePower: 60,
		category: "Special",
		name: "Air Cutter",
		pp: 25,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Flying",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. Hits adjacent foes."
	},
	airslash: {
		num: 403,
		accuracy: 95,
		basePower: 75,
		category: "Special",
		name: "Air Slash",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			distance: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	alloutpummeling: {
		num: 624,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "All-Out Pummeling",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fightiniumz",
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	allyswitch: {
		num: 502,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ally Switch",
		pp: 15,
		priority: 2,
		flags: {},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 2
			}
		},
		contestType: "Clever",
		desc: "The user swaps positions with its ally. Fails if the user is the only Pokemon on its side.",
		shortDesc: "The user swaps positions with its ally."
	},
	amnesia: {
		num: 133,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Amnesia",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			spd: 2
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "Raises the user's Special Defense by 2 stages.",
		shortDesc: "Raises the user's Sp. Def by 2."
	},
	anchorshot: {
		num: 677,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Anchor Shot",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out."
	},
	ancientpower: {
		num: 246,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Ancient Power",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1
				}
			}
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "10% chance to raise all stats by 1 (not acc/eva)."
	},
	appleacid: {
		num: 787,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Apple Acid",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Grass",
		desc: "Has a 100% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "100% chance to lower the target's Sp. Def by 1."
	},
	aquajet: {
		num: 453,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Aqua Jet",
		pp: 20,
		priority: 1,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	aquaring: {
		num: 392,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aqua Ring",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		volatileStatus: "aquaring",
		condition: {
			onResidualOrder: 6
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Beautiful",
		desc: "The user has 1/16 of its maximum HP, rounded down, restored at the end of each turn while it remains active. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. If the user uses Baton Pass, the replacement will receive the healing effect.",
		shortDesc: "User recovers 1/16 max HP per turn."
	},
	aquatail: {
		num: 401,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Aqua Tail",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	armthrust: {
		num: 292,
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		name: "Arm Thrust",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	aromatherapy: {
		num: 312,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aromatherapy",
		pp: 5,
		priority: 0,
		flags: {
			snatch: 1,
			distance: 1
		},
		target: "allyTeam",
		type: "Grass",
		zMove: {
			effect: "heal"
		},
		contestType: "Clever",
		desc: "Every Pokemon in the user's party is cured of its major status condition. Active Pokemon with the Sap Sipper Ability are not cured, unless they are the user.",
		shortDesc: "Cures the user's party of all status conditions."
	},
	aromaticmist: {
		num: 597,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aromatic Mist",
		pp: 20,
		priority: 0,
		flags: {
			authentic: 1
		},
		boosts: {
			spd: 1
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Fairy",
		zMove: {
			boost: {
				spd: 2
			}
		},
		contestType: "Beautiful",
		desc: "Raises the target's Special Defense by 1 stage. Fails if there is no ally adjacent to the user.",
		shortDesc: "Raises an ally's Sp. Def by 1."
	},
	assist: {
		num: 274,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Assist",
		pp: 20,
		priority: 0,
		flags: {},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cute",
		desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Bounce, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or any Z-Move.",
		shortDesc: "Uses a random move known by a team member."
	},
	assurance: {
		num: 372,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Assurance",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		desc: "Power doubles if the target has already taken damage this turn, other than direct damage from Belly Drum, confusion, Curse, or Pain Split.",
		shortDesc: "Power doubles if target was damaged this turn."
	},
	astonish: {
		num: 310,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Astonish",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cute",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	attackorder: {
		num: 454,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Attack Order",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	attract: {
		num: 213,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Attract",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		volatileStatus: "attract",
		condition: {
			noCopy: true,
			onBeforeMovePriority: 2
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "Causes the target to become infatuated, making it unable to attack 50% of the time. Fails if both the user and the target are the same gender, if either is genderless, or if the target is already infatuated. The effect ends when either the user or the target is no longer active. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
		shortDesc: "A target of the opposite gender gets infatuated."
	},
	aurasphere: {
		num: 396,
		accuracy: true,
		basePower: 80,
		category: "Special",
		name: "Aura Sphere",
		pp: 20,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			pulse: 1,
			mirror: 1,
			distance: 1
		},
		secondary: null,
		target: "any",
		type: "Fighting",
		contestType: "Beautiful",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy."
	},
	aurawheel: {
		num: 783,
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		name: "Aura Wheel",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1
				}
			}
		},
		target: "normal",
		type: "Electric",
		desc: "Has a 100% chance to raise the user's Speed by 1 stage. If the user is a Morpeko in Full Belly Mode, this move is Electric type. If the user is a Morpeko in Hangry Mode, this move is Dark type. This move cannot be used successfully unless the user's current form, while considering Transform, is Full Belly or Hangry Mode Morpeko.",
		shortDesc: "Morpeko: Electric; Hangry: Dark; 100% +1 Spe."
	},
	aurorabeam: {
		num: 62,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Aurora Beam",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1
			}
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
		shortDesc: "10% chance to lower the target's Attack by 1."
	},
	auroraveil: {
		num: 694,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aurora Veil",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		sideCondition: "auroraveil",
		condition: {
			duration: 5,
			onResidualOrder: 21,
			onResidualSubOrder: 1
		},
		secondary: null,
		target: "allySide",
		type: "Ice",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Beautiful",
		desc: "For 5 turns, the user and its party members take 0.5x damage from physical and special attacks, or 0.66x damage if in a Double Battle; does not reduce damage further with Reflect or Light Screen. Critical hits ignore this protection. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Brick Break and Psychic Fangs remove the effect before damage is calculated. Lasts for 8 turns if the user is holding Light Clay. Fails unless the weather is Hail.",
		shortDesc: "For 5 turns, damage to allies is halved. Hail only."
	},
	autotomize: {
		num: 475,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Autotomize",
		pp: 15,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			spe: 2
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "Raises the user's Speed by 2 stages. If the user's Speed was changed, the user's weight is reduced by 100 kg as long as it remains active. This effect is stackable but cannot reduce the user's weight to less than 0.1 kg.",
		shortDesc: "Raises the user's Speed by 2; user loses 100 kg."
	},
	avalanche: {
		num: 419,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Avalanche",
		pp: 10,
		priority: -4,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Power doubles if the user was hit by the target this turn.",
		shortDesc: "Power doubles if user is damaged by the target."
	},
	babydolleyes: {
		num: 608,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Baby-Doll Eyes",
		pp: 30,
		priority: 1,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		boosts: {
			atk: -1
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Attack by 1 stage.",
		shortDesc: "Lowers the target's Attack by 1."
	},
	baddybad: {
		num: 737,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Baddy Bad",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1
		},
		self: {
			sideCondition: "reflect"
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		desc: "This move summons Reflect for 5 turns upon use.",
		shortDesc: "Summons Reflect."
	},
	banefulbunker: {
		num: 661,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Baneful Bunker",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: "banefulbunker",
		condition: {
			duration: 1,
			onTryHitPriority: 3
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Tough",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user become poisoned. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from moves. Contact: poison."
	},
	barrage: {
		num: 140,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		isNonstandard: "Past",
		name: "Barrage",
		pp: 20,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	barrier: {
		num: 112,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Barrier",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: 2
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cool",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2."
	},
	batonpass: {
		num: 226,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Baton Pass",
		pp: 40,
		priority: 0,
		flags: {},
		selfSwitch: "copyvolatile",
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes, confusion, and certain move effects transferred to it.",
		shortDesc: "User switches, passing stat changes and more."
	},
	beakblast: {
		num: 690,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Beak Blast",
		pp: 15,
		priority: -3,
		flags: {
			bullet: 1,
			protect: 1
		},
		condition: {
			duration: 1
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Tough",
		desc: "If the user is hit by a contact move this turn before it can execute this move, the attacker is burned.",
		shortDesc: "Burns on contact with the user before it moves."
	},
	beatup: {
		num: 251,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Beat Up",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		desc: "Hits one time for the user and one time for each unfainted Pokemon without a major status condition in the user's party. The power of each hit is equal to 5+(X/10), where X is each participating Pokemon's base Attack; each hit is considered to come from the user.",
		shortDesc: "All healthy allies aid in damaging the target."
	},
	behemothbash: {
		num: 782,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Behemoth Bash",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		desc: "Damage doubles if the target is Dynamaxed.",
		shortDesc: "Damage doubles if the target is Dynamaxed."
	},
	behemothblade: {
		num: 781,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Behemoth Blade",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		desc: "Damage doubles if the target is Dynamaxed.",
		shortDesc: "Damage doubles if the target is Dynamaxed."
	},
	belch: {
		num: 562,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		name: "Belch",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		desc: "This move cannot be selected until the user eats a Berry, either by eating one that was held, stealing and eating one off another Pokemon with Bug Bite or Pluck, or eating one that was thrown at it with Fling. Once the condition is met, this move can be selected and used for the rest of the battle even if the user gains or uses another item or switches out. Consuming a Berry with Natural Gift does not count for the purposes of eating one.",
		shortDesc: "Cannot be selected until the user eats a Berry."
	},
	bellydrum: {
		num: 187,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Belly Drum",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "heal"
		},
		contestType: "Cute",
		desc: "Raises the user's Attack by 12 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Attack stat stage is 6.",
		shortDesc: "User loses 50% max HP. Maximizes Attack."
	},
	bestow: {
		num: 516,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Bestow",
		pp: 15,
		priority: 0,
		flags: {
			mirror: 1,
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spe: 2
			}
		},
		contestType: "Cute",
		desc: "The target receives the user's held item. Fails if the user has no item or is holding a Mail or Z-Crystal, if the target is already holding an item, if the user is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, a Pokemon that can Mega Evolve holding the Mega Stone for its species, or if the target is one of those Pokemon and the user is holding the respective item.",
		shortDesc: "User passes its held item to the target."
	},
	bide: {
		num: 117,
		accuracy: true,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bide",
		pp: 10,
		priority: 1,
		flags: {
			contact: 1,
			protect: 1
		},
		volatileStatus: "bide",
		ignoreImmunity: true,
		condition: {
			duration: 3,
			onLockMove: "bide",
			onDamagePriority: -101
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Tough",
		desc: "The user spends two turns locked into this move and then, on the second turn after using this move, the user attacks the last Pokemon that hit it, inflicting double the damage in HP it lost to attacks during the two turns. If the last Pokemon that hit it is no longer active, the user attacks a random opposing Pokemon instead. If the user is prevented from moving during this move's use, the effect ends. This move does not check accuracy and does not ignore type immunity.",
		shortDesc: "Waits 2 turns; deals double the damage taken."
	},
	bind: {
		num: 20,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		name: "Bind",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns."
	},
	bite: {
		num: 44,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bite",
		pp: 25,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	blackholeeclipse: {
		num: 654,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Black Hole Eclipse",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "darkiniumz",
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	blastburn: {
		num: 307,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Blast Burn",
		pp: 5,
		priority: 0,
		flags: {
			recharge: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	blazekick: {
		num: 299,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		name: "Blaze Kick",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
		desc: "Has a 10% chance to burn the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to burn."
	},
	blizzard: {
		num: 59,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Blizzard",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "frz"
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 10% chance to freeze the target. If the weather is Hail, this move does not check accuracy.",
		shortDesc: "10% chance to freeze foe(s). Can't miss in hail."
	},
	block: {
		num: 335,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Block",
		pp: 5,
		priority: 0,
		flags: {
			reflectable: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cute",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out."
	},
	bloomdoom: {
		num: 644,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bloom Doom",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "grassiumz",
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	blueflare: {
		num: 551,
		accuracy: 85,
		basePower: 130,
		category: "Special",
		name: "Blue Flare",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Has a 20% chance to burn the target.",
		shortDesc: "20% chance to burn the target."
	},
	bodypress: {
		num: 776,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Body Press",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		useSourceDefensiveAsOffensive: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		desc: "Damage is calculated using the user's Defense stat as its Attack, including stat stage changes. Other effects that modify the Attack stat are used as normal.",
		shortDesc: "Uses user's Def stat as Atk in damage calculation."
	},
	bodyslam: {
		num: 34,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Body Slam",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Has a 30% chance to paralyze the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "30% chance to paralyze the target."
	},
	boltbeak: {
		num: 754,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Bolt Beak",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		desc: "Power doubles if the user moves before the target.",
		shortDesc: "Power doubles if user moves before the target."
	},
	boltstrike: {
		num: 550,
		accuracy: 85,
		basePower: 130,
		category: "Physical",
		name: "Bolt Strike",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
		desc: "Has a 20% chance to paralyze the target.",
		shortDesc: "20% chance to paralyze the target."
	},
	boneclub: {
		num: 125,
		accuracy: 85,
		basePower: 65,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bone Club",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		desc: "Has a 10% chance to flinch the target.",
		shortDesc: "10% chance to flinch the target."
	},
	bonemerang: {
		num: 155,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		name: "Bonemerang",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		maxMove: {
			basePower: 130
		},
		contestType: "Tough",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn."
	},
	bonerush: {
		num: 198,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		name: "Bone Rush",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Tough",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	boomburst: {
		num: 586,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Boomburst",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon."
	},
	bounce: {
		num: 340,
		accuracy: 85,
		basePower: 85,
		category: "Physical",
		name: "Bounce",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			charge: 1,
			protect: 1,
			mirror: 1,
			gravity: 1,
			distance: 1
		},
		condition: {
			duration: 2
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
		desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Bounces turn 1. Hits turn 2. 30% paralyze."
	},
	bouncybubble: {
		num: 733,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Bouncy Bubble",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			heal: 1
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt."
	},
	branchpoke: {
		num: 785,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Branch Poke",
		pp: 40,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	bravebird: {
		num: 413,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Brave Bird",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			distance: 1
		},
		recoil: [33, 100],
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil."
	},
	breakingswipe: {
		num: 784,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Breaking Swipe",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Attack by 1."
	},
	breakneckblitz: {
		num: 622,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Breakneck Blitz",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "normaliumz",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	brickbreak: {
		num: 280,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Brick Break",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
		shortDesc: "Destroys screens, unless the target is immune."
	},
	brine: {
		num: 362,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Brine",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
		desc: "Power doubles if the target has less than or equal to half of its maximum HP remaining.",
		shortDesc: "Power doubles if the target's HP is 50% or less."
	},
	brutalswing: {
		num: 693,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Brutal Swing",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacent",
		type: "Dark",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon."
	},
	bubble: {
		num: 145,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		isNonstandard: "Past",
		name: "Bubble",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Cute",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the foe(s) Speed by 1."
	},
	bubblebeam: {
		num: 61,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Bubble Beam",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1
			}
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the target's Speed by 1."
	},
	bugbite: {
		num: 450,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bug Bite",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
		desc: "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately, gaining its effects even if the user's item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "User steals and eats the target's Berry."
	},
	bugbuzz: {
		num: 405,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Bug Buzz",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1."
	},
	bulkup: {
		num: 339,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Bulk Up",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			atk: 1,
			def: 1
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Cool",
		desc: "Raises the user's Attack and Defense by 1 stage.",
		shortDesc: "Raises the user's Attack and Defense by 1."
	},
	bulldoze: {
		num: 523,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bulldoze",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1
			}
		},
		target: "allAdjacent",
		type: "Ground",
		contestType: "Tough",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance lower adjacent Pkmn Speed by 1."
	},
	bulletpunch: {
		num: 418,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Bullet Punch",
		pp: 30,
		priority: 1,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	bulletseed: {
		num: 331,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Bullet Seed",
		pp: 30,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cool",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	burningjealousy: {
		num: 807,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Burning Jealousy",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
		desc: "Has a 100% chance to burn the target if it had a stat stage raised this turn.",
		shortDesc: "100% burns a target that had a stat rise this turn."
	},
	burnup: {
		num: 682,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Burn Up",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			defrost: 1
		},
		self: {},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
		desc: "Fails unless the user is a Fire type. If this move is successful, the user's Fire type becomes typeless as long as it remains active.",
		shortDesc: "User's Fire type becomes typeless; must be Fire."
	},
	buzzybuzz: {
		num: 734,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Buzzy Buzz",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1
		},
		secondary: {
			chance: 100,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Clever",
		desc: "Has a 100% chance to paralyze the foe.",
		shortDesc: "100% chance to paralyze the foe."
	},
	calmmind: {
		num: 347,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Calm Mind",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			spa: 1,
			spd: 1
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "Raises the user's Special Attack and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Sp. Atk and Sp. Def by 1."
	},
	camouflage: {
		num: 293,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Camouflage",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				evasion: 1
			}
		},
		contestType: "Clever",
		desc: "The user's type changes based on the battle terrain. Normal type on the regular Wi-Fi terrain, Electric type during Electric Terrain, Fairy type during Misty Terrain, Grass type during Grassy Terrain, and Psychic type during Psychic Terrain. Fails if the user's type cannot be changed or if the user is already purely that type.",
		shortDesc: "Changes user's type by terrain (default Normal)."
	},
	captivate: {
		num: 445,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Captivate",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			spa: -2
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {
			boost: {
				spd: 2
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Special Attack by 2 stages. The target is unaffected if both the user and the target are the same gender, or if either is genderless. Pokemon with the Oblivious Ability are immune.",
		shortDesc: "Lowers the foe(s) Sp. Atk by 2 if opposite gender."
	},
	catastropika: {
		num: 658,
		accuracy: true,
		basePower: 210,
		category: "Physical",
		isNonstandard: "Past",
		name: "Catastropika",
		pp: 1,
		priority: 0,
		flags: {
			contact: 1
		},
		isZ: "pikaniumz",
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	celebrate: {
		num: 606,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Celebrate",
		pp: 40,
		priority: 0,
		flags: {},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		contestType: "Cute",
		desc: "No competitive use.",
		shortDesc: "No competitive use."
	},
	charge: {
		num: 268,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Charge",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		volatileStatus: "charge",
		condition: {
			duration: 2,
			onBasePowerPriority: 9
		},
		boosts: {
			spd: 1
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "Raises the user's Special Defense by 1 stage. If the user uses an Electric-type attack on the next turn, its power will be doubled.",
		shortDesc: "+1 SpD, user's Electric move next turn 2x power."
	},
	chargebeam: {
		num: 451,
		accuracy: 90,
		basePower: 50,
		category: "Special",
		name: "Charge Beam",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 70,
			self: {
				boosts: {
					spa: 1
				}
			}
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
		desc: "Has a 70% chance to raise the user's Special Attack by 1 stage.",
		shortDesc: "70% chance to raise the user's Sp. Atk by 1."
	},
	charm: {
		num: 204,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Charm",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		boosts: {
			atk: -2
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Attack by 2 stages.",
		shortDesc: "Lowers the target's Attack by 2."
	},
	chatter: {
		num: 448,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Chatter",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			distance: 1,
			authentic: 1
		},
		noSketch: true,
		secondary: {
			chance: 100,
			volatileStatus: "confusion"
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
		desc: "Has a 100% chance to confuse the target.",
		shortDesc: "100% chance to confuse the target."
	},
	chipaway: {
		num: 498,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Chip Away",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		ignoreDefensive: true,
		ignoreEvasion: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Ignores the target's stat stage changes, including evasiveness.",
		shortDesc: "Ignores the target's stat stage changes."
	},
	circlethrow: {
		num: 509,
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		name: "Circle Throw",
		pp: 10,
		priority: -6,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		forceSwitch: true,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target is under the effect of Ingrain, has the Suction Cups Ability, or this move hit a substitute.",
		shortDesc: "Forces the target to switch to a random ally."
	},
	clamp: {
		num: 128,
		accuracy: 85,
		basePower: 35,
		category: "Physical",
		isNonstandard: "Past",
		name: "Clamp",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns."
	},
	clangingscales: {
		num: 691,
		accuracy: 100,
		basePower: 110,
		category: "Special",
		name: "Clanging Scales",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		selfBoost: {
			boosts: {
				def: -1
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Tough",
		desc: "Lowers the user's Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense by 1."
	},
	clangoroussoul: {
		num: 775,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Clangorous Soul",
		pp: 5,
		priority: 0,
		flags: {
			snatch: 1,
			sound: 1,
			dance: 1
		},
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
			spe: 1
		},
		secondary: null,
		target: "self",
		type: "Dragon",
		desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage in exchange for the user losing 33% of its maximum HP, rounded down. Fails if the user would faint or if its Attack, Defense, Special Attack, Special Defense, and Speed stat stages would not change.",
		shortDesc: "User loses 33% of its max HP. +1 to all stats."
	},
	clangoroussoulblaze: {
		num: 728,
		accuracy: true,
		basePower: 185,
		category: "Special",
		isNonstandard: "Past",
		name: "Clangorous Soulblaze",
		pp: 1,
		priority: 0,
		flags: {
			sound: 1,
			authentic: 1
		},
		selfBoost: {
			boosts: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		isZ: "kommoniumz",
		secondary: {},
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool",
		desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "Raises the user's Atk/Def/SpAtk/SpDef/Spe by 1."
	},
	clearsmog: {
		num: 499,
		accuracy: true,
		basePower: 50,
		category: "Special",
		name: "Clear Smog",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
		desc: "Resets all of the target's stat stages to 0.",
		shortDesc: "Resets all of the target's stat stages to 0."
	},
	closecombat: {
		num: 370,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Close Combat",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			boosts: {
				def: -1,
				spd: -1
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "Lowers the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1."
	},
	coaching: {
		num: 811,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Coaching",
		pp: 10,
		priority: 0,
		flags: {
			authentic: 1
		},
		secondary: null,
		boosts: {
			atk: 1,
			def: 1
		},
		target: "adjacentAlly",
		type: "Fighting",
		desc: "Raises the target's Attack and Defense by 1 stage. Fails if there is no ally adjacent to the user.",
		shortDesc: "Raises an ally's Attack and Defense by 1."
	},
	coil: {
		num: 489,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Coil",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			atk: 1,
			def: 1,
			accuracy: 1
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Tough",
		desc: "Raises the user's Attack, Defense, and accuracy by 1 stage.",
		shortDesc: "Raises user's Attack, Defense, accuracy by 1."
	},
	cometpunch: {
		num: 4,
		accuracy: 85,
		basePower: 18,
		category: "Physical",
		isNonstandard: "Past",
		name: "Comet Punch",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {
			basePower: 100
		},
		contestType: "Tough",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	confide: {
		num: 590,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Confide",
		pp: 20,
		priority: 0,
		flags: {
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		boosts: {
			spa: -1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Special Attack by 1 stage.",
		shortDesc: "Lowers the target's Sp. Atk by 1."
	},
	confuseray: {
		num: 109,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Confuse Ray",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		volatileStatus: "confusion",
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the target to become confused.",
		shortDesc: "Confuses the target."
	},
	confusion: {
		num: 93,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Confusion",
		pp: 25,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			volatileStatus: "confusion"
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "Has a 10% chance to confuse the target.",
		shortDesc: "10% chance to confuse the target."
	},
	constrict: {
		num: 132,
		accuracy: 100,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Constrict",
		pp: 35,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1
			}
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the target's Speed by 1."
	},
	continentalcrush: {
		num: 632,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Continental Crush",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "rockiumz",
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	conversion: {
		num: 160,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Conversion",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		contestType: "Beautiful",
		desc: "The user's type changes to match the original type of the move in its first move slot. Fails if the user cannot change its type, or if the type is one of the user's current types.",
		shortDesc: "Changes user's type to match its first move."
	},
	conversion2: {
		num: 176,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Conversion 2",
		pp: 30,
		priority: 0,
		flags: {
			authentic: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			effect: "heal"
		},
		contestType: "Beautiful",
		desc: "The user's type changes to match a type that resists or is immune to the type of the last move used by the target, but not either of its current types. The determined type of the move is used rather than the original type. Fails if the target has not made a move, if the user cannot change its type, or if this move would only be able to select one of the user's current types.",
		shortDesc: "Changes user's type to resist target's last move."
	},
	copycat: {
		num: 383,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Copycat",
		pp: 20,
		priority: 0,
		flags: {},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				accuracy: 1
			}
		},
		contestType: "Cute",
		desc: "The user uses the last move used by any Pokemon, including itself. The base move of Max and G-Max Moves is considered for this purpose. Fails if no move has been used, or if the last move used was Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Dragon Tail, Dynamax Cannon, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Obstruct, Protect, Rage Powder, Roar, Shell Trap, Sketch, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, or Whirlwind.",
		shortDesc: "Uses the last move used in the battle."
	},
	coreenforcer: {
		num: 687,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Core Enforcer",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		zMove: {
			basePower: 140
		},
		contestType: "Tough",
		desc: "If the user moves after the target, the target's Ability is rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this effect does not happen, and receiving the effect through Baton Pass ends the effect immediately.",
		shortDesc: "Nullifies the foe(s) Ability if the foe(s) move first."
	},
	corkscrewcrash: {
		num: 638,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Corkscrew Crash",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "steeliumz",
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	corrosivegas: {
		num: 810,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Corrosive Gas",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "allAdjacent",
		type: "Poison",
		desc: "The target loses its held item. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "Removes adjacent Pokemon's held items."
	},
	cosmicpower: {
		num: 322,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cosmic Power",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: 1,
			spd: 1
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Beautiful",
		desc: "Raises the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Defense and Sp. Def by 1."
	},
	cottonguard: {
		num: 538,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cotton Guard",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: 3
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "Raises the user's Defense by 3 stages.",
		shortDesc: "Raises the user's Defense by 3."
	},
	cottonspore: {
		num: 178,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Cotton Spore",
		pp: 40,
		priority: 0,
		flags: {
			powder: 1,
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			spe: -2
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the target's Speed by 2."
	},
	counter: {
		num: 68,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Counter",
		pp: 20,
		priority: -5,
		flags: {
			contact: 1,
			protect: 1
		},
		condition: {
			duration: 1,
			noCopy: true,
			onRedirectTargetPriority: -1
		},
		secondary: null,
		target: "scripted",
		type: "Fighting",
		maxMove: {
			basePower: 75
		},
		contestType: "Tough",
		desc: "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical attack this turn.",
		shortDesc: "If hit by physical attack, returns double damage."
	},
	courtchange: {
		num: 756,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Court Change",
		pp: 10,
		priority: 0,
		flags: {
			mirror: 1
		},
		secondary: null,
		target: "all",
		type: "Normal",
		desc: "Switches the Mist, Light Screen, Reflect, Spikes, Safeguard, Tailwind, Toxic Spikes, Stealth Rock, Water Pledge, Fire Pledge, Grass Pledge, Sticky Web, Aurora Veil, G-Max Steelsurge, G-Max Cannonade, G-Max Vine Lash, and G-Max Wildfire effects from the user's side to the opposing side and vice versa.",
		shortDesc: "Swaps user's field effects with the opposing side."
	},
	covet: {
		num: 343,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Covet",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. The target's item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "If the user has no item, it steals the target's."
	},
	crabhammer: {
		num: 152,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Crabhammer",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	craftyshield: {
		num: 578,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Crafty Shield",
		pp: 10,
		priority: 3,
		flags: {},
		sideCondition: "craftyshield",
		condition: {
			duration: 1,
			onTryHitPriority: 3
		},
		secondary: null,
		target: "allySide",
		type: "Fairy",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "The user and its party members are protected from non-damaging attacks made by other Pokemon, including allies, during this turn. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		shortDesc: "Protects allies from Status moves this turn."
	},
	crosschop: {
		num: 238,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		name: "Cross Chop",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	crosspoison: {
		num: 440,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Cross Poison",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "psn"
		},
		critRatio: 2,
		target: "normal",
		type: "Poison",
		contestType: "Cool",
		desc: "Has a 10% chance to poison the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to poison."
	},
	crunch: {
		num: 242,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Crunch",
		pp: 15,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1."
	},
	crushclaw: {
		num: 306,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		name: "Crush Claw",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Defense by 1."
	},
	crushgrip: {
		num: 462,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Crush Grip",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 190
		},
		maxMove: {
			basePower: 140
		},
		contestType: "Tough",
		desc: "Power is equal to 120 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
		shortDesc: "More power the more HP the target has left."
	},
	curse: {
		num: 174,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Curse",
		pp: 10,
		priority: 0,
		flags: {
			authentic: 1
		},
		volatileStatus: "curse",
		condition: {
			onResidualOrder: 10
		},
		secondary: null,
		target: "randomNormal",
		nonGhostTarget: "self",
		type: "Ghost",
		zMove: {
			effect: "curse"
		},
		contestType: "Tough",
		desc: "If the user is not a Ghost type, lowers the user's Speed by 1 stage and raises the user's Attack and Defense by 1 stage. If the user is a Ghost type, the user loses 1/2 of its maximum HP, rounded down and even if it would cause fainting, in exchange for the target losing 1/4 of its maximum HP, rounded down, at the end of each turn while it is active. If the target uses Baton Pass, the replacement will continue to be affected. Fails if there is no target or if the target is already affected.",
		shortDesc: "Curses if Ghost, else -1 Spe, +1 Atk, +1 Def."
	},
	cut: {
		num: 15,
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		name: "Cut",
		pp: 30,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	darkestlariat: {
		num: 663,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Darkest Lariat",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
		desc: "Ignores the target's stat stage changes, including evasiveness.",
		shortDesc: "Ignores the target's stat stage changes."
	},
	darkpulse: {
		num: 399,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Dark Pulse",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			pulse: 1,
			mirror: 1,
			distance: 1
		},
		secondary: {
			chance: 20,
			volatileStatus: "flinch"
		},
		target: "any",
		type: "Dark",
		contestType: "Cool",
		desc: "Has a 20% chance to flinch the target.",
		shortDesc: "20% chance to flinch the target."
	},
	darkvoid: {
		num: 464,
		accuracy: 50,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Dark Void",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "slp",
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "Causes the target to fall asleep. This move cannot be used successfully unless the user's current form, while considering Transform, is Darkrai.",
		shortDesc: "Darkrai: Causes the foe(s) to fall asleep."
	},
	dazzlinggleam: {
		num: 605,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Dazzling Gleam",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes."
	},
	decorate: {
		num: 777,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Decorate",
		pp: 15,
		priority: 0,
		flags: {
			mystery: 1
		},
		secondary: null,
		boosts: {
			atk: 2,
			spa: 2
		},
		target: "normal",
		type: "Fairy",
		desc: "Raises the target's Attack and Special Attack by 2 stages.",
		shortDesc: "Raises the target's Attack and Sp. Atk by 2."
	},
	defendorder: {
		num: 455,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defend Order",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: 1,
			spd: 1
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "Raises the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Defense and Sp. Def by 1."
	},
	defensecurl: {
		num: 111,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defense Curl",
		pp: 40,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: 1
		},
		volatileStatus: "defensecurl",
		condition: {
			noCopy: true
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				accuracy: 1
			}
		},
		contestType: "Cute",
		desc: "Raises the user's Defense by 1 stage. As long as the user remains active, the power of the user's Ice Ball and Rollout will be doubled (this effect is not stackable).",
		shortDesc: "Raises the user's Defense by 1."
	},
	defog: {
		num: 432,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defog",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {
			boost: {
				accuracy: 1
			}
		},
		contestType: "Cool",
		desc: "Lowers the target's evasiveness by 1 stage. If this move is successful and whether or not the target's evasiveness was affected, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side. Ignores a target's substitute, although a substitute will still block the lowering of evasiveness. If there is a terrain active and this move is successful, the terrain will be cleared.",
		shortDesc: "-1 evasion; clears terrain and hazards on both sides."
	},
	destinybond: {
		num: 194,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Destiny Bond",
		pp: 5,
		priority: 0,
		flags: {
			authentic: 1
		},
		volatileStatus: "destinybond",
		condition: {
			onBeforeMovePriority: -1
		},
		secondary: null,
		target: "self",
		type: "Ghost",
		zMove: {
			effect: "redirect"
		},
		contestType: "Clever",
		desc: "Until the user's next move, if an opposing Pokemon's attack knocks the user out, that Pokemon faints as well, unless the attack was Doom Desire or Future Sight. Fails if the user used this move successfully as its last move, disregarding moves used through the Dancer Ability.",
		shortDesc: "If an opponent knocks out the user, it also faints."
	},
	detect: {
		num: 197,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Detect",
		pp: 5,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: "protect",
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {
			boost: {
				evasion: 1
			}
		},
		contestType: "Cool",
		desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Prevents moves from affecting the user this turn."
	},
	devastatingdrake: {
		num: 652,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Devastating Drake",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "dragoniumz",
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	diamondstorm: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Diamond Storm",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			self: {
				boosts: {
					def: 2
				}
			}
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Beautiful",
		desc: "Has a 50% chance to raise the user's Defense by 2 stages.",
		shortDesc: "50% chance to raise user's Def by 2 for each hit."
	},
	dig: {
		num: 91,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dig",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			charge: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		condition: {
			duration: 2
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Earthquake and Magnitude but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Digs underground turn 1, strikes turn 2."
	},
	disable: {
		num: 50,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Disable",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		volatileStatus: "disable",
		condition: {
			duration: 5,
			noCopy: true,
			onResidualOrder: 14,
			onBeforeMovePriority: 7
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move was a Max or G-Max Move.",
		shortDesc: "For 4 turns, disables the target's last move used."
	},
	disarmingvoice: {
		num: 574,
		accuracy: true,
		basePower: 40,
		category: "Special",
		name: "Disarming Voice",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Cute",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy. Hits foes."
	},
	discharge: {
		num: 435,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Discharge",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "allAdjacent",
		type: "Electric",
		contestType: "Beautiful",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze adjacent Pokemon."
	},
	dive: {
		num: 291,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dive",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			charge: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		condition: {
			duration: 2
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Surf and Whirlpool but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Dives underwater turn 1, strikes turn 2."
	},
	dizzypunch: {
		num: 146,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Dizzy Punch",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: {
			chance: 20,
			volatileStatus: "confusion"
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target."
	},
	doomdesire: {
		num: 353,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Doom Desire",
		pp: 5,
		priority: 0,
		flags: {},
		isFutureMove: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
		desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Future Sight is already in effect for the target's position.",
		shortDesc: "Hits two turns after being used."
	},
	doubleedge: {
		num: 38,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Double-Edge",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil."
	},
	doublehit: {
		num: 458,
		accuracy: 90,
		basePower: 35,
		category: "Physical",
		name: "Double Hit",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 120
		},
		contestType: "Cool",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn."
	},
	doubleironbash: {
		num: 742,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Double Iron Bash",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		multihit: 2,
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Steel",
		zMove: {
			basePower: 180
		},
		maxMove: {
			basePower: 140
		},
		contestType: "Clever",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Has a 30% chance to flinch the target.",
		shortDesc: "Hits twice. 30% chance to flinch."
	},
	doublekick: {
		num: 24,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Double Kick",
		pp: 30,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		maxMove: {
			basePower: 80
		},
		contestType: "Cool",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn."
	},
	doubleslap: {
		num: 3,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		isNonstandard: "Past",
		name: "Double Slap",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	doubleteam: {
		num: 104,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Double Team",
		pp: 15,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			evasion: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cool",
		desc: "Raises the user's evasiveness by 1 stage.",
		shortDesc: "Raises the user's evasiveness by 1."
	},
	dracometeor: {
		num: 434,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Draco Meteor",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		self: {
			boosts: {
				spa: -2
			}
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2."
	},
	dragonascent: {
		num: 620,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		isNonstandard: "Past",
		name: "Dragon Ascent",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			distance: 1
		},
		self: {
			boosts: {
				def: -1,
				spd: -1
			}
		},
		target: "any",
		type: "Flying",
		contestType: "Beautiful",
		desc: "Lowers the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1."
	},
	dragonbreath: {
		num: 225,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Dragon Breath",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target."
	},
	dragonclaw: {
		num: 337,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dragon Claw",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	dragondance: {
		num: 349,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Dragon Dance",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1,
			dance: 1
		},
		boosts: {
			atk: 1,
			spe: 1
		},
		secondary: null,
		target: "self",
		type: "Dragon",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cool",
		desc: "Raises the user's Attack and Speed by 1 stage.",
		shortDesc: "Raises the user's Attack and Speed by 1."
	},
	dragondarts: {
		num: 751,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Dragon Darts",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		multihit: 2,
		smartTarget: true,
		secondary: null,
		target: "normal",
		type: "Dragon",
		maxMove: {
			basePower: 130
		},
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. In Double Battles, this move attempts to hit the targeted Pokemon and its ally once each. If hitting one of these Pokemon would be prevented by immunity, protection, semi-invulnerability, an Ability, or accuracy, it attempts to hit the other Pokemon twice instead. If this move is redirected, it hits that target twice.",
		shortDesc: "Hits twice. Doubles: Tries to hit each foe once."
	},
	dragonhammer: {
		num: 692,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Dragon Hammer",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	dragonpulse: {
		num: 406,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Dragon Pulse",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			pulse: 1,
			mirror: 1,
			distance: 1
		},
		secondary: null,
		target: "any",
		type: "Dragon",
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	dragonrage: {
		num: 82,
		accuracy: 100,
		basePower: 0,
		damage: 40,
		category: "Special",
		isNonstandard: "Past",
		name: "Dragon Rage",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
		desc: "Deals 40 HP of damage to the target.",
		shortDesc: "Deals 40 HP of damage to the target."
	},
	dragonrush: {
		num: 407,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		name: "Dragon Rush",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
		desc: "Has a 20% chance to flinch the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "20% chance to flinch the target."
	},
	dragontail: {
		num: 525,
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		name: "Dragon Tail",
		pp: 10,
		priority: -6,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		forceSwitch: true,
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
		desc: "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target used Ingrain previously, has the Suction Cups Ability, or this move hit a substitute.",
		shortDesc: "Forces the target to switch to a random ally."
	},
	drainingkiss: {
		num: 577,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Draining Kiss",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			heal: 1
		},
		drain: [3, 4],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
		desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 75% of the damage dealt."
	},
	drainpunch: {
		num: 409,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Drain Punch",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1,
			heal: 1
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt."
	},
	dreameater: {
		num: 138,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Dream Eater",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			heal: 1
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "The target is unaffected by this move unless it is asleep. The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User gains 1/2 HP inflicted. Sleeping target only."
	},
	drillpeck: {
		num: 65,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Drill Peck",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			distance: 1
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	drillrun: {
		num: 529,
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		name: "Drill Run",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	drumbeating: {
		num: 778,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Drum Beating",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1
			}
		},
		target: "normal",
		type: "Grass",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1."
	},
	dualchop: {
		num: 530,
		accuracy: 90,
		basePower: 40,
		category: "Physical",
		name: "Dual Chop",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		maxMove: {
			basePower: 130
		},
		contestType: "Tough",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn."
	},
	dualwingbeat: {
		num: 814,
		accuracy: 90,
		basePower: 40,
		category: "Physical",
		name: "Dual Wingbeat",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Flying",
		maxMove: {
			basePower: 130
		},
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn."
	},
	dynamaxcannon: {
		num: 744,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Dynamax Cannon",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		desc: "Damage doubles if the target is Dynamaxed.",
		shortDesc: "Damage doubles if the target is Dynamaxed."
	},
	dynamicpunch: {
		num: 223,
		accuracy: 50,
		basePower: 100,
		category: "Physical",
		name: "Dynamic Punch",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: {
			chance: 100,
			volatileStatus: "confusion"
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "Has a 100% chance to confuse the target.",
		shortDesc: "100% chance to confuse the target."
	},
	earthpower: {
		num: 414,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Earth Power",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Ground",
		contestType: "Beautiful",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1."
	},
	earthquake: {
		num: 89,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Earthquake",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
		contestType: "Tough",
		desc: "Damage doubles if the target is using Dig.",
		shortDesc: "Hits adjacent Pokemon. Double damage on Dig."
	},
	echoedvoice: {
		num: 497,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Echoed Voice",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		condition: {
			duration: 2
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		desc: "For every consecutive turn that this move is used by at least one Pokemon, this move's power is multiplied by the number of turns to pass, but not more than 5.",
		shortDesc: "Power increases when used on consecutive turns."
	},
	eerieimpulse: {
		num: 598,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Eerie Impulse",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			spa: -2
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "Lowers the target's Special Attack by 2 stages.",
		shortDesc: "Lowers the target's Sp. Atk by 2."
	},
	eggbomb: {
		num: 121,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Egg Bomb",
		pp: 10,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	electricterrain: {
		num: 604,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Electric Terrain",
		pp: 10,
		priority: 0,
		flags: {
			nonsky: 1
		},
		terrain: "electricterrain",
		condition: {
			duration: 5,
			onBasePowerPriority: 6,
			onResidualOrder: 21,
			onResidualSubOrder: 2
		},
		secondary: null,
		target: "all",
		type: "Electric",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, the terrain becomes Electric Terrain. During the effect, the power of Electric-type attacks made by grounded Pokemon is multiplied by 1.3 and grounded Pokemon cannot fall asleep; Pokemon already asleep do not wake up. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is Electric Terrain.",
		shortDesc: "5 turns. Grounded: +Electric power, can't sleep."
	},
	electrify: {
		num: 582,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Electrify",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			mystery: 1
		},
		volatileStatus: "electrify",
		condition: {
			duration: 1,
			onModifyTypePriority: -2
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the target's move to become Electric type this turn. Among effects that can change a move's type, this effect happens last. Fails if the target already moved this turn.",
		shortDesc: "Changes the target's move to Electric this turn."
	},
	electroball: {
		num: 486,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		name: "Electro Ball",
		pp: 10,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cool",
		desc: "The power of this move depends on (user's current Speed / target's current Speed), rounded down. Power is equal to 150 if the result is 4 or more, 120 if 3, 80 if 2, 60 if 1, 40 if less than 1. If the target's current Speed is 0, this move's power is 40.",
		shortDesc: "More power the faster the user is than the target."
	},
	electroweb: {
		num: 527,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Electroweb",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Electric",
		contestType: "Beautiful",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Speed by 1."
	},
	embargo: {
		num: 373,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Embargo",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		volatileStatus: "embargo",
		condition: {
			duration: 5,
			onResidualOrder: 18
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, the target's held item has no effect. An item's effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by the target. Items thrown at the target with Fling will still activate for it. If the target uses Baton Pass, the replacement will remain unable to use items.",
		shortDesc: "For 5 turns, the target's item has no effect."
	},
	ember: {
		num: 52,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Ember",
		pp: 25,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Cute",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target."
	},
	encore: {
		num: 227,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Encore",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		volatileStatus: "encore",
		condition: {
			duration: 3,
			noCopy: true,
			onResidualOrder: 13
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Cute",
		desc: "For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, if the move is Assist, Copycat, Encore, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, or Transform, or if the target is Dynamaxed.",
		shortDesc: "Target repeats its last move for its next 3 turns."
	},
	endeavor: {
		num: 283,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Endeavor",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Tough",
		desc: "Deals damage to the target equal to (target's current HP - user's current HP). The target is unaffected if its current HP is less than or equal to the user's current HP.",
		shortDesc: "Lowers the target's HP to the user's HP."
	},
	endure: {
		num: 203,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Endure",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: "endure",
		condition: {
			duration: 1,
			onDamagePriority: -10
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Tough",
		desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "User survives attacks this turn with at least 1 HP."
	},
	energyball: {
		num: 412,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Energy Ball",
		pp: 10,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1."
	},
	entrainment: {
		num: 494,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Entrainment",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Cute",
		desc: "Causes the target's Ability to become the same as the user's. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or the same Ability as the user, or if the user's Ability is Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, or Zen Mode.",
		shortDesc: "The target's Ability changes to match the user's."
	},
	eruption: {
		num: 284,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Eruption",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
		shortDesc: "Less power as user's HP decreases. Hits foe(s)."
	},
	eternabeam: {
		num: 795,
		accuracy: 90,
		basePower: 160,
		category: "Special",
		name: "Eternabeam",
		pp: 10,
		priority: 0,
		flags: {
			recharge: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	expandingforce: {
		num: 797,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Expanding Force",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		desc: "If the current terrain is Psychic Terrain and the user is grounded, this move hits all opposing Pokemon and has its power multiplied by 1.5.",
		shortDesc: "User on Psychic Terrain: 1.5x power, hits foes."
	},
	explosion: {
		num: 153,
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		name: "Explosion",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful",
		desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "Hits adjacent Pokemon. The user faints."
	},
	extrasensory: {
		num: 326,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Extrasensory",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		desc: "Has a 10% chance to flinch the target.",
		shortDesc: "10% chance to flinch the target."
	},
	extremeevoboost: {
		num: 702,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Extreme Evoboost",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "eeviumz",
		boosts: {
			atk: 2,
			def: 2,
			spa: 2,
			spd: 2,
			spe: 2
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Beautiful",
		desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 2 stages.",
		shortDesc: "Raises user's Atk, Def, SpA, SpD, and Spe by 2."
	},
	extremespeed: {
		num: 245,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Extreme Speed",
		pp: 5,
		priority: 2,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "Nearly always goes first."
	},
	facade: {
		num: 263,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Facade",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "Power doubles if the user is burned, paralyzed, or poisoned. The physical damage halving effect from the user's burn is ignored.",
		shortDesc: "Power doubles if user is burn/poison/paralyzed."
	},
	fairylock: {
		num: 587,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Fairy Lock",
		pp: 10,
		priority: 0,
		flags: {
			mirror: 1,
			authentic: 1
		},
		pseudoWeather: "fairylock",
		condition: {
			duration: 2
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "Prevents all active Pokemon from switching next turn. A Pokemon can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. Fails if the effect is already active.",
		shortDesc: "Prevents all Pokemon from switching next turn."
	},
	fairywind: {
		num: 584,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Fairy Wind",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	fakeout: {
		num: 252,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Fake Out",
		pp: 10,
		priority: 3,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "Has a 100% chance to flinch the target. Fails unless it is the user's first turn on the field.",
		shortDesc: "Hits first. First turn out only. 100% flinch chance."
	},
	faketears: {
		num: 313,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Fake Tears",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		boosts: {
			spd: -2
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Special Defense by 2 stages.",
		shortDesc: "Lowers the target's Sp. Def by 2."
	},
	falsesurrender: {
		num: 793,
		accuracy: true,
		basePower: 80,
		category: "Physical",
		name: "False Surrender",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy."
	},
	falseswipe: {
		num: 206,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "False Swipe",
		pp: 40,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		noFaint: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "Leaves the target with at least 1 HP.",
		shortDesc: "Always leaves the target with at least 1 HP."
	},
	featherdance: {
		num: 297,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Feather Dance",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1,
			dance: 1
		},
		boosts: {
			atk: -2
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Beautiful",
		desc: "Lowers the target's Attack by 2 stages.",
		shortDesc: "Lowers the target's Attack by 2."
	},
	feint: {
		num: 364,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Feint",
		pp: 10,
		priority: 2,
		flags: {
			mirror: 1
		},
		breaksProtect: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
		shortDesc: "Nullifies Detect, Protect, and Quick/Wide Guard."
	},
	feintattack: {
		num: 185,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Feint Attack",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy."
	},
	fellstinger: {
		num: 565,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Fell Stinger",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		desc: "Raises the user's Attack by 3 stages if this move knocks out the target.",
		shortDesc: "Raises user's Attack by 3 if this KOes the target."
	},
	fierydance: {
		num: 552,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Fiery Dance",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			dance: 1
		},
		secondary: {
			chance: 50,
			self: {
				boosts: {
					spa: 1
				}
			}
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Has a 50% chance to raise the user's Special Attack by 1 stage.",
		shortDesc: "50% chance to raise the user's Sp. Atk by 1."
	},
	finalgambit: {
		num: 515,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		name: "Final Gambit",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1
		},
		selfdestruct: "ifHit",
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {
			basePower: 180
		},
		contestType: "Tough",
		desc: "Deals damage to the target equal to the user's current HP. If this move is successful, the user faints.",
		shortDesc: "Does damage equal to the user's HP. User faints."
	},
	fireblast: {
		num: 126,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		name: "Fire Blast",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target."
	},
	firefang: {
		num: 424,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		name: "Fire Fang",
		pp: 15,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondaries: [{
			chance: 10,
			status: "brn"
		}, {
			chance: 10,
			volatileStatus: "flinch"
		}],
		target: "normal",
		type: "Fire",
		contestType: "Cool",
		desc: "Has a 10% chance to burn the target and a 10% chance to flinch it.",
		shortDesc: "10% chance to burn. 10% chance to flinch."
	},
	firelash: {
		num: 680,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Fire Lash",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Fire",
		contestType: "Cute",
		desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
		shortDesc: "100% chance to lower the target's Defense by 1."
	},
	firepledge: {
		num: 519,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Fire Pledge",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		condition: {
			duration: 4,
			onResidualOrder: 5,
			onResidualSubOrder: 1
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "If one of the user's allies chose to use Grass Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Grass Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances but does not stack with the Serene Grace Ability. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Fire Gem.",
		shortDesc: "Use with Grass or Water Pledge for added effect."
	},
	firepunch: {
		num: 7,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Fire Punch",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Tough",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target."
	},
	firespin: {
		num: 83,
		accuracy: 85,
		basePower: 35,
		category: "Special",
		name: "Fire Spin",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns."
	},
	firstimpression: {
		num: 660,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "First Impression",
		pp: 10,
		priority: 2,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
		desc: "Fails unless it is the user's first turn on the field.",
		shortDesc: "Hits first. First turn out only."
	},
	fishiousrend: {
		num: 755,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Fishious Rend",
		pp: 10,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Water",
		desc: "Power doubles if the user moves before the target.",
		shortDesc: "Power doubles if user moves before the target."
	},
	fissure: {
		num: 90,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Fissure",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {
			basePower: 180
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Tough",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level."
	},
	flail: {
		num: 175,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Flail",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cute",
		desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
		shortDesc: "More power the less HP the user has left."
	},
	flameburst: {
		num: 481,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		isNonstandard: "Past",
		name: "Flame Burst",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "If this move is successful, the target's ally loses 1/16 of its maximum HP, rounded down, unless it has the Magic Guard Ability.",
		shortDesc: "Damages Pokemon next to the target as well."
	},
	flamecharge: {
		num: 488,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Flame Charge",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1
				}
			}
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
		desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
		shortDesc: "100% chance to raise the user's Speed by 1."
	},
	flamewheel: {
		num: 172,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Flame Wheel",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			defrost: 1
		},
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target. Thaws user."
	},
	flamethrower: {
		num: 53,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Flamethrower",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target."
	},
	flareblitz: {
		num: 394,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Flare Blitz",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			defrost: 1
		},
		recoil: [33, 100],
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
		desc: "Has a 10% chance to burn the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil. 10% chance to burn. Thaws user."
	},
	flash: {
		num: 148,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Flash",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			accuracy: -1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				evasion: 1
			}
		},
		contestType: "Beautiful",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1."
	},
	flashcannon: {
		num: 430,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Flash Cannon",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1."
	},
	flatter: {
		num: 260,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Flatter",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		volatileStatus: "confusion",
		boosts: {
			spa: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "Raises the target's Special Attack by 1 stage and confuses it.",
		shortDesc: "Raises the target's Sp. Atk by 1 and confuses it."
	},
	fleurcannon: {
		num: 705,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Fleur Cannon",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		self: {
			boosts: {
				spa: -2
			}
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2."
	},
	fling: {
		num: 374,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Fling",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cute",
		desc: "The power of this move is based on the user's held item. The held item is lost and it activates for the target if applicable. If there is no target or the target avoids this move by protecting itself, the user's held item is still lost. The user can regain a thrown item with Recycle or the Harvest Ability. Fails if the user has no held item, if the held item cannot be thrown, if the user is under the effect of Embargo or Magic Room, or if the user has the Klutz Ability.",
		shortDesc: "Flings the user's item at the target. Power varies."
	},
	flipturn: {
		num: 812,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Flip Turn",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Water",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
		shortDesc: "User switches out after damaging the target."
	},
	floatyfall: {
		num: 731,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Floaty Fall",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			gravity: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Flying",
		contestType: "Cool",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	floralhealing: {
		num: 666,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Floral Healing",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			heal: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "The target restores 1/2 of its maximum HP, rounded half up. If the terrain is Grassy Terrain, the target instead restores 2/3 of its maximum HP, rounded half down.",
		shortDesc: "Heals the target by 50% of its max HP."
	},
	flowershield: {
		num: 579,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Flower Shield",
		pp: 10,
		priority: 0,
		flags: {
			distance: 1
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Beautiful",
		desc: "Raises the Defense of all active Grass-type Pokemon by 1 stage. Fails if there are no active Grass-type Pokemon.",
		shortDesc: "Raises Defense by 1 of all active Grass types."
	},
	fly: {
		num: 19,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Fly",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			charge: 1,
			protect: 1,
			mirror: 1,
			gravity: 1,
			distance: 1
		},
		condition: {
			duration: 2
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Clever",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Flies up on first turn, then strikes the next turn."
	},
	flyingpress: {
		num: 560,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Flying Press",
		pp: 10,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			gravity: 1,
			distance: 1,
			nonsky: 1
		},
		priority: 0,
		secondary: null,
		target: "any",
		type: "Fighting",
		zMove: {
			basePower: 170
		},
		contestType: "Tough",
		desc: "This move combines Flying in its type effectiveness against the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "Combines Flying in its type effectiveness."
	},
	focusblast: {
		num: 411,
		accuracy: 70,
		basePower: 120,
		category: "Special",
		name: "Focus Blast",
		pp: 5,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1."
	},
	focusenergy: {
		num: 116,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Focus Energy",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		volatileStatus: "focusenergy",
		condition: {},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				accuracy: 1
			}
		},
		contestType: "Cool",
		desc: "Raises the user's chance for a critical hit by 2 stages. Fails if the user already has the effect. Baton Pass can be used to transfer this effect to an ally.",
		shortDesc: "Raises the user's critical hit ratio by 2."
	},
	focuspunch: {
		num: 264,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Focus Punch",
		pp: 20,
		priority: -3,
		flags: {
			contact: 1,
			protect: 1,
			punch: 1
		},
		condition: {
			duration: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "The user loses its focus and does nothing if it is hit by a damaging attack this turn before it can execute the move.",
		shortDesc: "Fails if the user takes damage before it hits."
	},
	followme: {
		num: 266,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Follow Me",
		pp: 20,
		priority: 2,
		flags: {},
		volatileStatus: "followme",
		condition: {
			duration: 1,
			onFoeRedirectTargetPriority: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop.",
		shortDesc: "The foes' moves target the user on the turn used."
	},
	forcepalm: {
		num: 395,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Force Palm",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target."
	},
	foresight: {
		num: 193,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Foresight",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		volatileStatus: "foresight",
		condition: {
			noCopy: true
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			effect: "crit2"
		},
		contestType: "Clever",
		desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Miracle Eye or Odor Sleuth.",
		shortDesc: "Fighting, Normal hit Ghost. Evasiveness ignored."
	},
	forestscurse: {
		num: 571,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Forest's Curse",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			boost: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the Grass type to be added to the target, effectively making it have two or three types. Fails if the target is already a Grass type. If Trick-or-Treat adds a type to the target, it replaces the type added by this move and vice versa.",
		shortDesc: "Adds Grass to the target's type(s)."
	},
	foulplay: {
		num: 492,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Foul Play",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		useTargetOffensive: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		desc: "Damage is calculated using the target's Attack stat, including stat stage changes. The user's Ability, item, and burn are used as normal.",
		shortDesc: "Uses target's Attack stat in damage calculation."
	},
	freezedry: {
		num: 573,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Freeze-Dry",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "frz"
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 10% chance to freeze the target. This move's type effectiveness against Water is changed to be super effective no matter what this move's type is.",
		shortDesc: "10% chance to freeze. Super effective on Water."
	},
	freezeshock: {
		num: 553,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		name: "Freeze Shock",
		pp: 5,
		priority: 0,
		flags: {
			charge: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges turn 1. Hits turn 2. 30% paralyze."
	},
	freezyfrost: {
		num: 739,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Freezy Frost",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
		desc: "Resets the stat stages of all active Pokemon to 0.",
		shortDesc: "Eliminates all stat changes."
	},
	frenzyplant: {
		num: 338,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Frenzy Plant",
		pp: 5,
		priority: 0,
		flags: {
			recharge: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	frostbreath: {
		num: 524,
		accuracy: 90,
		basePower: 60,
		category: "Special",
		name: "Frost Breath",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
		shortDesc: "Always results in a critical hit."
	},
	frustration: {
		num: 218,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Frustration",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cute",
		desc: "Power is equal to the greater of ((255 - user's Happiness) * 2/5), rounded down, or 1.",
		shortDesc: "Max 102 power at minimum Happiness."
	},
	furyattack: {
		num: 31,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		name: "Fury Attack",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	furycutter: {
		num: 210,
		accuracy: 95,
		basePower: 40,
		category: "Physical",
		name: "Fury Cutter",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		condition: {
			duration: 2
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		desc: "Power doubles with each successful hit, up to a maximum of 160 power. The power is reset if this move misses or another move is used.",
		shortDesc: "Power doubles with each hit, up to 160."
	},
	furyswipes: {
		num: 154,
		accuracy: 80,
		basePower: 18,
		category: "Physical",
		name: "Fury Swipes",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {
			basePower: 100
		},
		contestType: "Tough",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	fusionbolt: {
		num: 559,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Fusion Bolt",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Power doubles if the last move used by any Pokemon this turn was Fusion Flare.",
		shortDesc: "Power doubles if used after Fusion Flare this turn."
	},
	fusionflare: {
		num: 558,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Fusion Flare",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			defrost: 1
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Power doubles if the last move used by any Pokemon this turn was Fusion Bolt.",
		shortDesc: "Power doubles if used after Fusion Bolt this turn."
	},
	futuresight: {
		num: 248,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Future Sight",
		pp: 10,
		priority: 0,
		flags: {},
		ignoreImmunity: true,
		isFutureMove: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Doom Desire is already in effect for the target's position.",
		shortDesc: "Hits two turns after being used."
	},
	gastroacid: {
		num: 380,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Gastro Acid",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		volatileStatus: "gastroacid",
		condition: {},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Tough",
		desc: "Causes the target's Ability to be rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this move fails, and receiving the effect through Baton Pass ends the effect immediately.",
		shortDesc: "Nullifies the target's Ability."
	},
	geargrind: {
		num: 544,
		accuracy: 85,
		basePower: 50,
		category: "Physical",
		name: "Gear Grind",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {
			basePower: 180
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Clever",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn."
	},
	gearup: {
		num: 674,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Gear Up",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1,
			authentic: 1
		},
		secondary: null,
		target: "allySide",
		type: "Steel",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "Raises the Attack and Special Attack of Pokemon on the user's side with the Plus or Minus Abilities by 1 stage.",
		shortDesc: "Raises Atk, Sp. Atk of allies with Plus/Minus by 1."
	},
	genesissupernova: {
		num: 703,
		accuracy: true,
		basePower: 185,
		category: "Special",
		isNonstandard: "Past",
		name: "Genesis Supernova",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "mewniumz",
		secondary: {
			chance: 100,
			self: {}
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		desc: "If this move is successful, the terrain becomes Psychic Terrain.",
		shortDesc: "Summons Psychic Terrain."
	},
	geomancy: {
		num: 601,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Geomancy",
		pp: 10,
		priority: 0,
		flags: {
			charge: 1,
			nonsky: 1
		},
		boosts: {
			spa: 2,
			spd: 2,
			spe: 2
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {
			boost: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		contestType: "Beautiful",
		desc: "Raises the user's Special Attack, Special Defense, and Speed by 2 stages. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then raises SpA, SpD, Spe by 2 turn 2."
	},
	gigadrain: {
		num: 202,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Giga Drain",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			heal: 1
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt."
	},
	gigaimpact: {
		num: 416,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		name: "Giga Impact",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			recharge: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	gigavolthavoc: {
		num: 646,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Gigavolt Havoc",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "electriumz",
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	glaciate: {
		num: 549,
		accuracy: 95,
		basePower: 65,
		category: "Special",
		name: "Glaciate",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Speed by 1."
	},
	glare: {
		num: 137,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Glare",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "par",
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Tough",
		desc: "Paralyzes the target.",
		shortDesc: "Paralyzes the target."
	},
	glitzyglow: {
		num: 736,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Glitzy Glow",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1
		},
		self: {
			sideCondition: "lightscreen"
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "This move summons Light Screen for 5 turns upon use.",
		shortDesc: "Summons Light Screen."
	},
	gmaxbefuddle: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Befuddle",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Butterfree",
		self: {},
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side either falls asleep, becomes poisoned, or becomes paralyzed, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: slp or psn or par."
	},
	gmaxcannonade: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Cannonade",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Blastoise",
		self: {},
		condition: {
			duration: 4,
			onResidualOrder: 5,
			onResidualSubOrder: 1.1
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Water-type Pokemon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
		shortDesc: "Base move affects power. Foes: -1/6 HP, 4 turns."
	},
	gmaxcentiferno: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Centiferno",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Centiskorch",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side is prevented from switching for four or five turns (seven turns if the user is holding Grip Claw), even if they have a substitute. Causes damage equal to 1/8 of their maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. They can still switch out if they are holding Shed Shell or use Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends for a target if it leaves the field, or if it uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Base move affects power. Foes: bound 4-5 turns."
	},
	gmaxchistrike: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Chi Strike",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Machamp",
		self: {},
		condition: {
			noCopy: true
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fighting",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the user's side has their critical hit ratio raised by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Allies: Crit Ratio +1."
	},
	gmaxcuddle: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Cuddle",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Eevee",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes infatuated, even if they have a substitute. This effect does not happen for a target if both it and the user are the same gender, if either is genderless, or if the target is already infatuated.",
		shortDesc: "Base move affects power. Foes: infatuated."
	},
	gmaxdepletion: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Depletion",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Duraludon",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Dragon",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side loses 2 PP from its last move used, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: last move -2 PP."
	},
	gmaxdrumsolo: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Drum Solo",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Rillaboom",
		ignoreAbility: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
		desc: "This move will always have 160 Base Power, and it ignores the abilities of opposing Pokemon.",
		shortDesc: "Stronger than other Max Moves. Ignores abilities."
	},
	gmaxfinale: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Finale",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Alcremie",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the user's side restores 1/6 of its current maximum HP, even if they have a substitute.",
		shortDesc: "Base move affects power. Allies: +1/6 max HP."
	},
	gmaxfireball: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Fireball",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Cinderace",
		ignoreAbility: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
		desc: "This move will always have 160 Base Power, and it ignores the abilities of opposing Pokemon.",
		shortDesc: "Stronger than other Max Moves. Ignores abilities."
	},
	gmaxfoamburst: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Foam Burst",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Kingler",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the opposing side is lowered by 2 stages, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: -2 Speed."
	},
	gmaxgoldrush: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Gold Rush",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Meowth",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes confused, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: confused."
	},
	gmaxgravitas: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Gravitas",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Orbeetle",
		self: {
			pseudoWeather: "gravity"
		},
		target: "adjacentFoe",
		type: "Psychic",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Gravity begins.",
		shortDesc: "Base move affects power. Starts Gravity."
	},
	gmaxhydrosnipe: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Hydrosnipe",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Inteleon",
		ignoreAbility: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
		desc: "This move will always have 160 Base Power, and it ignores the abilities of opposing Pokemon.",
		shortDesc: "Stronger than other Max Moves. Ignores abilities."
	},
	gmaxmalodor: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Malodor",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Garbodor",
		self: {},
		target: "adjacentFoe",
		type: "Poison",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes poisoned, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: poisoned."
	},
	gmaxmeltdown: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Meltdown",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Melmetal",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Torment begins for each Pokemon on the opposing side, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: Tormented."
	},
	gmaxoneblow: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max One Blow",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Urshifu",
		breaksProtect: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Dark",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful and any Pokemon on the opposing side is using Baneful Bunker, Detect, King's Shield, Mat Block, Max Guard, Obstruct, Protect, or Spiky Shield, this move will fully break the protection.",
		shortDesc: "Base move affects power. Breaks all protection."
	},
	gmaxrapidflow: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Rapid Flow",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Urshifu-Rapid-Strike",
		breaksProtect: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful and any Pokemon on the opposing side is using Baneful Bunker, Detect, King's Shield, Mat Block, Max Guard, Obstruct, Protect, or Spiky Shield, this move will fully break the protection.",
		shortDesc: "Base move affects power. Breaks all protection."
	},
	gmaxreplenish: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Replenish",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Snorlax",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, there is a 50% chance every Pokemon on the user's side has its Berry restored, even if they have a substitute.",
		shortDesc: "Base move affects power. 50% restores Berries."
	},
	gmaxresonance: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Resonance",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Lapras",
		self: {
			sideCondition: "auroraveil"
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Ice",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Aurora Veil begins on the user's side.",
		shortDesc: "Base move affects power. Allies: Aurora Veil."
	},
	gmaxsandblast: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Sandblast",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Sandaconda",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Ground",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side is prevented from switching for four or five turns (seven turns if the user is holding Grip Claw), even if they have a substitute. Causes damage equal to 1/8 of their maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. They can still switch out if they are holding Shed Shell or use Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends for a target if it leaves the field, or if it uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Base move affects power. Foes: bound 4-5 turns."
	},
	gmaxsmite: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Smite",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Hatterene",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes confused, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: confused."
	},
	gmaxsnooze: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Snooze",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Grimmsnarl",
		secondary: null,
		target: "adjacentFoe",
		type: "Dark",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, there is a 50% chance the effect of Yawn begins on the target, even if it has a substitute.",
		shortDesc: "Base move affects power. Target: 50% Yawn."
	},
	gmaxsteelsurge: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Steelsurge",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Copperajah",
		self: {},
		condition: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, it sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Steel type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
		shortDesc: "Base move affects power. Foes: Steel hazard."
	},
	gmaxstonesurge: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Stonesurge",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Drednaw",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, it sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
		shortDesc: "Base move affects power. Foes: Stealth Rock."
	},
	gmaxstunshock: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Stun Shock",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Toxtricity",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Electric",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side either becomes poisoned or paralyzed, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: psn or par."
	},
	gmaxsweetness: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Sweetness",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Appletun",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the user's side has its status condition cured, even if they have a substitute.",
		shortDesc: "Base move affects power. Allies: status cured."
	},
	gmaxtartness: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Tartness",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Flapple",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the evasiveness of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: -1 evasiveness."
	},
	gmaxterror: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Terror",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Gengar",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Ghost",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side is prevented from switching out, even if they have a substitute. They can still switch out if they are holding Shed Shell or use Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If a target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Base move affects power. Foes: trapped."
	},
	gmaxvinelash: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Vine Lash",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Venusaur",
		self: {},
		condition: {
			duration: 4,
			onResidualOrder: 5,
			onResidualSubOrder: 1.1
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Grass-type Pokemon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
		shortDesc: "Base move affects power. Foes: -1/6 HP, 4 turns."
	},
	gmaxvolcalith: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Volcalith",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Coalossal",
		self: {},
		condition: {
			duration: 4,
			onResidualOrder: 5,
			onResidualSubOrder: 1.1
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Rock",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Rock-type Pokemon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
		shortDesc: "Base move affects power. Foes: -1/6 HP, 4 turns."
	},
	gmaxvoltcrash: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Volt Crash",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Pikachu",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Electric",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes paralyzed, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: paralyzed."
	},
	gmaxwildfire: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Wildfire",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Charizard",
		self: {},
		condition: {
			duration: 4,
			onResidualOrder: 5,
			onResidualSubOrder: 1.1
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Fire-type Pokemon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
		shortDesc: "Base move affects power. Foes: -1/6 HP, 4 turns."
	},
	gmaxwindrage: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Wind Rage",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Corviknight",
		self: {},
		secondary: null,
		target: "adjacentFoe",
		type: "Flying",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain end, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, G-Max Steelsurge, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of G-Max Steelsurge, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side.",
		shortDesc: "Base move affects power. Ends Terrain, hazards."
	},
	grassknot: {
		num: 447,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		name: "Grass Knot",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cute",
		desc: "This move's power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg.",
		shortDesc: "More power the heavier the target."
	},
	grasspledge: {
		num: 520,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Grass Pledge",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		condition: {
			duration: 4
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
		desc: "If one of the user's allies chose to use Fire Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Grass Gem.",
		shortDesc: "Use with Fire or Water Pledge for added effect."
	},
	grasswhistle: {
		num: 320,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Grass Whistle",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		status: "slp",
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the target to fall asleep.",
		shortDesc: "Causes the target to fall asleep."
	},
	grassyglide: {
		num: 803,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Grassy Glide",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		desc: "If the current terrain is Grassy Terrain and the user is grounded, this move has its priority increased by 1.",
		shortDesc: "User on Grassy Terrain: +1 priority."
	},
	grassyterrain: {
		num: 580,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Grassy Terrain",
		pp: 10,
		priority: 0,
		flags: {
			nonsky: 1
		},
		terrain: "grassyterrain",
		condition: {
			duration: 5,
			onBasePowerPriority: 6,
			onResidualOrder: 5,
			onResidualSubOrder: 3
		},
		secondary: null,
		target: "all",
		type: "Grass",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Beautiful",
		desc: "For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type attacks used by grounded Pokemon is multiplied by 1.3, the power of Bulldoze, Earthquake, and Magnitude used against grounded Pokemon is multiplied by 0.5, and grounded Pokemon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain.",
		shortDesc: "5 turns. Grounded: +Grass power, +1/16 max HP."
	},
	gravapple: {
		num: 788,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Grav Apple",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Grass",
		desc: "Has a 100% chance to lower the target's Defense by 1 stage. Power is multiplied by 1.5 during Gravity's effect.",
		shortDesc: "Target: 100% -1 Def. During Gravity: 1.5x power."
	},
	gravity: {
		num: 356,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Gravity",
		pp: 5,
		priority: 0,
		flags: {
			nonsky: 1
		},
		pseudoWeather: "gravity",
		condition: {
			duration: 5,
			onBeforeMovePriority: 6,
			onResidualOrder: 22
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, the evasiveness of all active Pokemon is multiplied by 0.6. At the time of use, Bounce, Fly, Magnet Rise, Sky Drop, and Telekinesis end immediately for all active Pokemon. During the effect, Bounce, Fly, Flying Press, High Jump Kick, Jump Kick, Magnet Rise, Sky Drop, Splash, and Telekinesis are prevented from being used by all active Pokemon. Ground-type attacks, Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability can affect Flying types or Pokemon with the Levitate Ability. Fails if this move is already in effect.",
		shortDesc: "5 turns: no Ground immunities, 1.67x accuracy."
	},
	growl: {
		num: 45,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Growl",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		boosts: {
			atk: -1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Attack by 1 stage.",
		shortDesc: "Lowers the foe(s) Attack by 1."
	},
	growth: {
		num: 74,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Growth",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			atk: 1,
			spa: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Beautiful",
		desc: "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sunny Day or Desolate Land, this move raises the user's Attack and Special Attack by 2 stages. If the user is holding Utility Umbrella, this move will only raise the user's Attack and Special Attack by 1 stage, even if the weather is Sunny Day or Desolate Land.",
		shortDesc: "Raises user's Attack and Sp. Atk by 1; 2 in Sun."
	},
	grudge: {
		num: 288,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Grudge",
		pp: 5,
		priority: 0,
		flags: {
			authentic: 1
		},
		volatileStatus: "grudge",
		condition: {
			onBeforeMovePriority: 100
		},
		secondary: null,
		target: "self",
		type: "Ghost",
		zMove: {
			effect: "redirect"
		},
		contestType: "Tough",
		desc: "Until the user's next turn, if an opposing Pokemon's attack knocks the user out, that move loses all its remaining PP.",
		shortDesc: "If the user faints, the attack used loses all its PP."
	},
	guardianofalola: {
		num: 698,
		accuracy: true,
		basePower: 0,
		category: "Special",
		isNonstandard: "Past",
		name: "Guardian of Alola",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "tapuniumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Tough",
		desc: "Deals damage to the target equal to 3/4 of its current HP, rounded down, but not less than 1 HP.",
		shortDesc: "Does damage equal to 3/4 target's current HP."
	},
	guardsplit: {
		num: 470,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Guard Split",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "The user and the target have their Defense and Special Defense stats set to be equal to the average of the user and the target's Defense and Special Defense stats, respectively, rounded down. Stat stage changes are unaffected.",
		shortDesc: "Averages Defense and Sp. Def stats with target."
	},
	guardswap: {
		num: 385,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Guard Swap",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "The user swaps its Defense and Special Defense stat stage changes with the target.",
		shortDesc: "Swaps Defense and Sp. Def changes with target."
	},
	guillotine: {
		num: 12,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Guillotine",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 180
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cool",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level."
	},
	gunkshot: {
		num: 441,
		accuracy: 80,
		basePower: 120,
		category: "Physical",
		name: "Gunk Shot",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "psn"
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target."
	},
	gust: {
		num: 16,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Gust",
		pp: 35,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			distance: 1
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Clever",
		desc: "Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "Power doubles during Bounce, Fly, and Sky Drop."
	},
	gyroball: {
		num: 360,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Gyro Ball",
		pp: 5,
		priority: 0,
		flags: {
			bullet: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cool",
		desc: "Power is equal to (25 * target's current Speed / user's current Speed) + 1, rounded down, but not more than 150. If the user's current Speed is 0, this move's power is 1.",
		shortDesc: "More power the slower the user than the target."
	},
	hail: {
		num: 258,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hail",
		pp: 10,
		priority: 0,
		flags: {},
		weather: "hail",
		secondary: null,
		target: "all",
		type: "Ice",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Beautiful",
		desc: "For 5 turns, the weather becomes Hail. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are an Ice type or have the Ice Body, Magic Guard, Overcoat, or Snow Cloak Abilities. Lasts for 8 turns if the user is holding Icy Rock. Fails if the current weather is Hail.",
		shortDesc: "For 5 turns, hail crashes down."
	},
	hammerarm: {
		num: 359,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Hammer Arm",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		self: {
			boosts: {
				spe: -1
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "Lowers the user's Speed by 1 stage.",
		shortDesc: "Lowers the user's Speed by 1."
	},
	happyhour: {
		num: 603,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Happy Hour",
		pp: 30,
		priority: 0,
		flags: {},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		contestType: "Cute",
		desc: "No competitive use.",
		shortDesc: "No competitive use."
	},
	harden: {
		num: 106,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Harden",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Tough",
		desc: "Raises the user's Defense by 1 stage.",
		shortDesc: "Raises the user's Defense by 1."
	},
	haze: {
		num: 114,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Haze",
		pp: 30,
		priority: 0,
		flags: {
			authentic: 1
		},
		secondary: null,
		target: "all",
		type: "Ice",
		zMove: {
			effect: "heal"
		},
		contestType: "Beautiful",
		desc: "Resets the stat stages of all active Pokemon to 0.",
		shortDesc: "Eliminates all stat changes."
	},
	headbutt: {
		num: 29,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Headbutt",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	headcharge: {
		num: 543,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Head Charge",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil."
	},
	headsmash: {
		num: 457,
		accuracy: 80,
		basePower: 150,
		category: "Physical",
		name: "Head Smash",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/2 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/2 recoil."
	},
	healbell: {
		num: 215,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heal Bell",
		pp: 5,
		priority: 0,
		flags: {
			snatch: 1,
			sound: 1,
			distance: 1,
			authentic: 1
		},
		target: "allyTeam",
		type: "Normal",
		zMove: {
			effect: "heal"
		},
		contestType: "Beautiful",
		desc: "Every Pokemon in the user's party is cured of its major status condition. Active Pokemon with the Soundproof Ability are not cured, unless they are the user.",
		shortDesc: "Cures the user's party of all status conditions."
	},
	healblock: {
		num: 377,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Heal Block",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		volatileStatus: "healblock",
		condition: {
			duration: 5,
			onBeforeMovePriority: 6,
			onResidualOrder: 17
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Psychic",
		zMove: {
			boost: {
				spa: 2
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, the target is prevented from restoring any HP as long as it remains active. During the effect, healing and draining moves are unusable, and Abilities and items that grant healing will not heal the user. If an affected Pokemon uses Baton Pass, the replacement will remain unable to restore its HP. Pain Split and the Regenerator Ability are unaffected.",
		shortDesc: "For 5 turns, the foe(s) is prevented from healing."
	},
	healingwish: {
		num: 361,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Healing Wish",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		selfdestruct: "ifHit",
		slotCondition: "healingwish",
		condition: {},
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Beautiful",
		desc: "The user faints and the next injured or statused Pokemon brought in has its HP fully restored along with having any major status condition cured. The healing happens before hazards take effect. Is not consumed if the Pokemon sent out is not injured or statused. Fails if the user is the last unfainted Pokemon in its party.",
		shortDesc: "User faints. Next hurt Pokemon is fully healed."
	},
	healorder: {
		num: 456,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Heal Order",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP."
	},
	healpulse: {
		num: 505,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heal Pulse",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			pulse: 1,
			reflectable: 1,
			distance: 1,
			heal: 1,
			mystery: 1
		},
		secondary: null,
		target: "any",
		type: "Psychic",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "The target restores 1/2 of its maximum HP, rounded half up. If the user has the Mega Launcher Ability, the target instead restores 3/4 of its maximum HP, rounded half down.",
		shortDesc: "Heals the target by 50% of its max HP."
	},
	heartstamp: {
		num: 531,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Heart Stamp",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cute",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	heartswap: {
		num: 391,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Heart Swap",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			effect: "crit2"
		},
		contestType: "Clever",
		desc: "The user swaps all its stat stage changes with the target.",
		shortDesc: "Swaps all stat changes with target."
	},
	heatcrash: {
		num: 535,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Heat Crash",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Tough",
		desc: "The power of this move depends on (user's weight / target's weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "More power the heavier the user than the target."
	},
	heatwave: {
		num: 257,
		accuracy: 90,
		basePower: 95,
		category: "Special",
		name: "Heat Wave",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the foe(s)."
	},
	heavyslam: {
		num: 484,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Heavy Slam",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Tough",
		desc: "The power of this move depends on (user's weight / target's weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "More power the heavier the user than the target."
	},
	helpinghand: {
		num: 270,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Helping Hand",
		pp: 20,
		priority: 5,
		flags: {
			authentic: 1
		},
		volatileStatus: "helpinghand",
		condition: {
			duration: 1,
			onBasePowerPriority: 10
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "The power of the target's attack this turn is multiplied by 1.5 (this effect is stackable). Fails if there is no ally adjacent to the user or if the ally already moved this turn, but does not fail if the ally is using a two-turn move.",
		shortDesc: "One adjacent ally's move power is 1.5x this turn."
	},
	hex: {
		num: 506,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Hex",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {
			basePower: 160
		},
		contestType: "Clever",
		desc: "Power doubles if the target has a major status condition.",
		shortDesc: "Power doubles if the target has a status ailment."
	},
	hiddenpower: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Past",
		name: "Hidden Power",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
		shortDesc: "Varies in type based on the user's IVs."
	},
	hiddenpowerbug: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Bug",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever"
	},
	hiddenpowerdark: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Dark",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever"
	},
	hiddenpowerdragon: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Dragon",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Clever"
	},
	hiddenpowerelectric: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Electric",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Clever"
	},
	hiddenpowerfighting: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Fighting",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Clever"
	},
	hiddenpowerfire: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Fire",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever"
	},
	hiddenpowerflying: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Flying",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Clever"
	},
	hiddenpowerghost: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Ghost",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever"
	},
	hiddenpowergrass: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Grass",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever"
	},
	hiddenpowerground: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Ground",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever"
	},
	hiddenpowerice: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Ice",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever"
	},
	hiddenpowerpoison: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Poison",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Clever"
	},
	hiddenpowerpsychic: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Psychic",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever"
	},
	hiddenpowerrock: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Rock",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Clever"
	},
	hiddenpowersteel: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Steel",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Clever"
	},
	hiddenpowerwater: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Water",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever"
	},
	highhorsepower: {
		num: 667,
		accuracy: 95,
		basePower: 95,
		category: "Physical",
		name: "High Horsepower",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	highjumpkick: {
		num: 136,
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		name: "High Jump Kick",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			gravity: 1
		},
		hasCrashDamage: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
		shortDesc: "User is hurt by 50% of its max HP if it misses."
	},
	holdback: {
		num: 610,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Hold Back",
		pp: 40,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		noFaint: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "Leaves the target with at least 1 HP.",
		shortDesc: "Always leaves the target with at least 1 HP."
	},
	holdhands: {
		num: 615,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hold Hands",
		pp: 40,
		priority: 0,
		flags: {
			authentic: 1
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		contestType: "Cute",
		desc: "No competitive use. Fails if there is no ally adjacent to the user.",
		shortDesc: "No competitive use."
	},
	honeclaws: {
		num: 468,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hone Claws",
		pp: 15,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			atk: 1,
			accuracy: 1
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Cute",
		desc: "Raises the user's Attack and accuracy by 1 stage.",
		shortDesc: "Raises the user's Attack and accuracy by 1."
	},
	hornattack: {
		num: 30,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Horn Attack",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	horndrill: {
		num: 32,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Horn Drill",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 180
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cool",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level."
	},
	hornleech: {
		num: 532,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Horn Leech",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			heal: 1
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt."
	},
	howl: {
		num: 336,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Howl",
		pp: 40,
		priority: 0,
		flags: {
			snatch: 1,
			sound: 1
		},
		boosts: {
			atk: 1
		},
		secondary: null,
		target: "allies",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Cool",
		desc: "Raises the Attack of the user and all allies 1 stage.",
		shortDesc: "Raises the user's and ally's Attack by 1."
	},
	hurricane: {
		num: 542,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Hurricane",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			distance: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "confusion"
		},
		target: "any",
		type: "Flying",
		contestType: "Tough",
		desc: "Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
		shortDesc: "30% chance to confuse target. Can't miss in rain."
	},
	hydrocannon: {
		num: 308,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Hydro Cannon",
		pp: 5,
		priority: 0,
		flags: {
			recharge: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	hydropump: {
		num: 56,
		accuracy: 80,
		basePower: 110,
		category: "Special",
		name: "Hydro Pump",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	hydrovortex: {
		num: 642,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Hydro Vortex",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "wateriumz",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	hyperbeam: {
		num: 63,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Hyper Beam",
		pp: 5,
		priority: 0,
		flags: {
			recharge: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	hyperfang: {
		num: 158,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Past",
		name: "Hyper Fang",
		pp: 15,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "Has a 10% chance to flinch the target.",
		shortDesc: "10% chance to flinch the target."
	},
	hyperspacefury: {
		num: 621,
		accuracy: true,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Hyperspace Fury",
		pp: 5,
		priority: 0,
		flags: {
			mirror: 1,
			authentic: 1
		},
		breaksProtect: true,
		self: {
			boosts: {
				def: -1
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		desc: "Lowers the user's Defense by 1 stage. This move cannot be used successfully unless the user's current form, while considering Transform, is Hoopa Unbound. If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
		shortDesc: "Hoopa-U: Lowers user's Def by 1; breaks protect."
	},
	hyperspacehole: {
		num: 593,
		accuracy: true,
		basePower: 80,
		category: "Special",
		isNonstandard: "Past",
		name: "Hyperspace Hole",
		pp: 5,
		priority: 0,
		flags: {
			mirror: 1,
			authentic: 1
		},
		breaksProtect: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
		shortDesc: "Breaks the target's protection for this turn."
	},
	hypervoice: {
		num: 304,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Hyper Voice",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes."
	},
	hypnosis: {
		num: 95,
		accuracy: 60,
		basePower: 0,
		category: "Status",
		name: "Hypnosis",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "slp",
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the target to fall asleep.",
		shortDesc: "Causes the target to fall asleep."
	},
	iceball: {
		num: 301,
		accuracy: 90,
		basePower: 30,
		category: "Physical",
		isNonstandard: "Past",
		name: "Ice Ball",
		pp: 20,
		priority: 0,
		flags: {
			bullet: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		condition: {
			duration: 2,
			onLockMove: "iceball"
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn. If this move hits an active Disguise during the effect, the power multiplier is paused but the turn counter is not, potentially allowing the multiplier to be used on the user's next move after this effect ends.",
		shortDesc: "Power doubles with each hit. Repeats for 5 turns."
	},
	icebeam: {
		num: 58,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Ice Beam",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "frz"
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 10% chance to freeze the target.",
		shortDesc: "10% chance to freeze the target."
	},
	iceburn: {
		num: 554,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		name: "Ice Burn",
		pp: 5,
		priority: 0,
		flags: {
			charge: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "brn"
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 30% chance to burn the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges turn 1. Hits turn 2. 30% burn."
	},
	icefang: {
		num: 423,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		name: "Ice Fang",
		pp: 15,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondaries: [{
			chance: 10,
			status: "frz"
		}, {
			chance: 10,
			volatileStatus: "flinch"
		}],
		target: "normal",
		type: "Ice",
		contestType: "Cool",
		desc: "Has a 10% chance to freeze the target and a 10% chance to flinch it.",
		shortDesc: "10% chance to freeze. 10% chance to flinch."
	},
	icehammer: {
		num: 665,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Ice Hammer",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		self: {
			boosts: {
				spe: -1
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Tough",
		desc: "Lowers the user's Speed by 1 stage.",
		shortDesc: "Lowers the user's Speed by 1."
	},
	icepunch: {
		num: 8,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Ice Punch",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: {
			chance: 10,
			status: "frz"
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 10% chance to freeze the target.",
		shortDesc: "10% chance to freeze the target."
	},
	iceshard: {
		num: 420,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Ice Shard",
		pp: 30,
		priority: 1,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	iciclecrash: {
		num: 556,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		name: "Icicle Crash",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	iciclespear: {
		num: 333,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Icicle Spear",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Beautiful",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	icywind: {
		num: 196,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Icy Wind",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Speed by 1."
	},
	imprison: {
		num: 286,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Imprison",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			authentic: 1
		},
		volatileStatus: "imprison",
		condition: {
			noCopy: true,
			onFoeBeforeMovePriority: 4
		},
		secondary: null,
		pressureTarget: "foeSide",
		target: "self",
		type: "Psychic",
		zMove: {
			boost: {
				spd: 2
			}
		},
		contestType: "Clever",
		desc: "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active.",
		shortDesc: "No foe can use any move known by the user."
	},
	incinerate: {
		num: 510,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Incinerate",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
		desc: "The target loses its held item if it is a Berry or a Gem. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "Destroys the foe(s) Berry/Gem."
	},
	inferno: {
		num: 517,
		accuracy: 50,
		basePower: 100,
		category: "Special",
		name: "Inferno",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Has a 100% chance to burn the target.",
		shortDesc: "100% chance to burn the target."
	},
	infernooverdrive: {
		num: 640,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Inferno Overdrive",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "firiumz",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	infestation: {
		num: 611,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Infestation",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns."
	},
	ingrain: {
		num: 275,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ingrain",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1,
			nonsky: 1
		},
		volatileStatus: "ingrain",
		condition: {
			onResidualOrder: 7
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes, Toxic Spikes, and Sticky Web, even if the user is a Flying type or has the Levitate Ability.",
		shortDesc: "Traps/grounds user; heals 1/16 max HP per turn."
	},
	instruct: {
		num: 689,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Instruct",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "The target immediately uses its last used move. Fails if the target has not made a move, if the move has 0 PP, if the target is Dynamaxed, if the target is preparing to use Beak Blast, Focus Punch, or Shell Trap, or if the move is Assist, Beak Blast, Belch, Bide, Celebrate, Copycat, Dynamax Cannon, Focus Punch, Ice Ball, Instruct, King's Shield, Me First, Metronome, Mimic, Mirror Move, Nature Power, Outrage, Petal Dance, Rollout, Shell Trap, Sketch, Sleep Talk, Struggle, Thrash, Transform, Uproar, any two-turn move, any recharge move, any Z-Move, or any Max or G-Max Move.",
		shortDesc: "The target immediately uses its last used move."
	},
	iondeluge: {
		num: 569,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Ion Deluge",
		pp: 25,
		priority: 1,
		flags: {},
		pseudoWeather: "iondeluge",
		condition: {
			duration: 1,
			onModifyTypePriority: -2
		},
		secondary: null,
		target: "all",
		type: "Electric",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Beautiful",
		desc: "Causes Normal-type moves to become Electric type this turn. The effect happens after other effects that change a move's type.",
		shortDesc: "Normal moves become Electric type this turn."
	},
	irondefense: {
		num: 334,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Iron Defense",
		pp: 15,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: 2
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Tough",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2."
	},
	ironhead: {
		num: 442,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Iron Head",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	irontail: {
		num: 231,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		name: "Iron Tail",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		desc: "Has a 30% chance to lower the target's Defense by 1 stage.",
		shortDesc: "30% chance to lower the target's Defense by 1."
	},
	jawlock: {
		num: 746,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Jaw Lock",
		pp: 15,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		desc: "Prevents the user and the target from switching out. The user and the target can still switch out if either of them is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if either the user or the target leaves the field.",
		shortDesc: "Prevents both user and target from switching out."
	},
	judgment: {
		num: 449,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Judgment",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		desc: "This move's type depends on the user's held Plate.",
		shortDesc: "Type varies based on the held Plate."
	},
	jumpkick: {
		num: 26,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Jump Kick",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			gravity: 1
		},
		hasCrashDamage: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
		shortDesc: "User is hurt by 50% of its max HP if it misses."
	},
	junglehealing: {
		num: 816,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Jungle Healing",
		pp: 10,
		priority: 0,
		flags: {
			distance: 1,
			heal: 1,
			authentic: 1,
			mystery: 1
		},
		heal: [1, 4],
		secondary: null,
		target: "allies",
		type: "Grass",
		desc: "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up, and has its status condition cured.",
		shortDesc: "User and allies: healed 1/4 max HP, status cured."
	},
	karatechop: {
		num: 2,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Past",
		name: "Karate Chop",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	kinesis: {
		num: 134,
		accuracy: 80,
		basePower: 0,
		category: "Status",
		name: "Kinesis",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			accuracy: -1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				evasion: 1
			}
		},
		contestType: "Clever",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1."
	},
	kingsshield: {
		num: 588,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "King's Shield",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: "kingsshield",
		condition: {
			duration: 1,
			onTryHitPriority: 3
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cool",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Attack lowered by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from damaging attacks. Contact: -1 Atk."
	},
	knockoff: {
		num: 282,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Knock Off",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		desc: "If the target is holding an item that can be removed from it, ignoring the Sticky Hold Ability, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "1.5x damage if foe holds an item. Removes item."
	},
	landswrath: {
		num: 616,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Land's Wrath",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		zMove: {
			basePower: 185
		},
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes."
	},
	laserfocus: {
		num: 673,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Laser Focus",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		volatileStatus: "laserfocus",
		condition: {
			duration: 2
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Cool",
		desc: "Until the end of the next turn, the user's attacks will be critical hits.",
		shortDesc: "Until the end of the next turn, user's moves crit."
	},
	lashout: {
		num: 808,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Lash Out",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		desc: "Power doubles if the user had a stat stage lowered this turn.",
		shortDesc: "2x power if the user had a stat lowered this turn."
	},
	lastresort: {
		num: 387,
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		name: "Last Resort",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "This move fails unless the user knows this move and at least one other move, and has used all the other moves it knows at least once each since it became active or Transformed.",
		shortDesc: "Fails unless each known move has been used."
	},
	lavaplume: {
		num: 436,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Lava Plume",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "brn"
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Tough",
		desc: "Has a 30% chance to burn the target.",
		shortDesc: "30% chance to burn adjacent Pokemon."
	},
	leafage: {
		num: 670,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Leafage",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	leafblade: {
		num: 348,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Leaf Blade",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	leafstorm: {
		num: 437,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Leaf Storm",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		self: {
			boosts: {
				spa: -2
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2."
	},
	leaftornado: {
		num: 536,
		accuracy: 90,
		basePower: 65,
		category: "Special",
		name: "Leaf Tornado",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1
			}
		},
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "50% chance to lower the target's accuracy by 1."
	},
	leechlife: {
		num: 141,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Leech Life",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			heal: 1
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt."
	},
	leechseed: {
		num: 73,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Leech Seed",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		volatileStatus: "leechseed",
		condition: {
			onResidualOrder: 8
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn. If Big Root is held by the recipient, the HP recovered is 1.3x normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out or uses Rapid Spin successfully, the effect ends. Grass-type Pokemon are immune to this move on use, but not its effect.",
		shortDesc: "1/8 of target's HP is restored to user every turn."
	},
	leer: {
		num: 43,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Leer",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			def: -1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Cool",
		desc: "Lowers the target's Defense by 1 stage.",
		shortDesc: "Lowers the foe(s) Defense by 1."
	},
	letssnuggleforever: {
		num: 726,
		accuracy: true,
		basePower: 190,
		category: "Physical",
		isNonstandard: "Past",
		name: "Let's Snuggle Forever",
		pp: 1,
		priority: 0,
		flags: {
			contact: 1
		},
		isZ: "mimikiumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	lick: {
		num: 122,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Lick",
		pp: 30,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cute",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target."
	},
	lifedew: {
		num: 791,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Life Dew",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1,
			authentic: 1
		},
		heal: [1, 4],
		secondary: null,
		target: "allies",
		type: "Water",
		desc: "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user and its allies by 1/4 their max HP."
	},
	lightofruin: {
		num: 617,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		isNonstandard: "Past",
		name: "Light of Ruin",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/2 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/2 recoil."
	},
	lightscreen: {
		num: 113,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Light Screen",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		sideCondition: "lightscreen",
		condition: {
			duration: 5,
			onResidualOrder: 21,
			onResidualSubOrder: 1
		},
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Beautiful",
		desc: "For 5 turns, the user and its party members take 0.5x damage from special attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, special damage to allies is halved."
	},
	lightthatburnsthesky: {
		num: 723,
		accuracy: true,
		basePower: 200,
		category: "Special",
		isNonstandard: "Past",
		name: "Light That Burns the Sky",
		pp: 1,
		priority: 0,
		flags: {},
		ignoreAbility: true,
		isZ: "ultranecroziumz",
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		desc: "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes. This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities."
	},
	liquidation: {
		num: 710,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Liquidation",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1."
	},
	lockon: {
		num: 199,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Lock-On",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		condition: {
			noCopy: true,
			duration: 2,
			onSourceInvulnerabilityPriority: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
		shortDesc: "User's next move will not miss the target."
	},
	lovelykiss: {
		num: 142,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Lovely Kiss",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "slp",
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Beautiful",
		desc: "Causes the target to fall asleep.",
		shortDesc: "Causes the target to fall asleep."
	},
	lowkick: {
		num: 67,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Low Kick",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {
			basePower: 160
		},
		contestType: "Tough",
		desc: "This move's power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg.",
		shortDesc: "More power the heavier the target."
	},
	lowsweep: {
		num: 490,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Low Sweep",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1
			}
		},
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1."
	},
	luckychant: {
		num: 381,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Lucky Chant",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		sideCondition: "luckychant",
		condition: {
			duration: 5,
			onCriticalHit: false,
			onResidualOrder: 21,
			onResidualSubOrder: 5
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {
			boost: {
				evasion: 1
			}
		},
		contestType: "Cute",
		desc: "For 5 turns, the user and its party members cannot be struck by a critical hit. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, shields user's party from critical hits."
	},
	lunardance: {
		num: 461,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Lunar Dance",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1,
			dance: 1
		},
		selfdestruct: "ifHit",
		sideCondition: "lunardance",
		condition: {
			duration: 2,
			onSwitchInPriority: 1
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Beautiful",
		desc: "The user faints and the Pokemon brought out to replace it has its HP and PP fully restored along with having any major status condition cured. The new Pokemon is sent out at the end of the turn, and the healing happens before hazards take effect. Fails if the user is the last unfainted Pokemon in its party.",
		shortDesc: "User faints. Replacement is fully healed, with PP."
	},
	lunge: {
		num: 679,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Lunge",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1
			}
		},
		target: "normal",
		type: "Bug",
		contestType: "Cute",
		desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Attack by 1."
	},
	lusterpurge: {
		num: 295,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		isNonstandard: "Past",
		name: "Luster Purge",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "Has a 50% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Sp. Def by 1."
	},
	machpunch: {
		num: 183,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Mach Punch",
		pp: 30,
		priority: 1,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	magicalleaf: {
		num: 345,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Magical Leaf",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy."
	},
	magiccoat: {
		num: 277,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magic Coat",
		pp: 15,
		priority: 4,
		flags: {},
		volatileStatus: "magiccoat",
		condition: {
			duration: 1,
			onTryHitPriority: 2
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			boost: {
				spd: 2
			}
		},
		contestType: "Beautiful",
		desc: "Until the end of the turn, the user is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or the Magic Bounce Ability's effect. Spikes, Stealth Rock, Sticky Web, and Toxic Spikes can only be reflected once per side, by the leftmost Pokemon under this or the Magic Bounce Ability's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this move takes effect.",
		shortDesc: "Bounces back certain non-damaging moves."
	},
	magicpowder: {
		num: 750,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Magic Powder",
		pp: 20,
		priority: 0,
		flags: {
			powder: 1,
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		desc: "Causes the target to become a Psychic type. Fails if the target is an Arceus or a Silvally, or if the target is already purely Psychic type.",
		shortDesc: "Changes the target's type to Psychic."
	},
	magicroom: {
		num: 478,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magic Room",
		pp: 10,
		priority: 0,
		flags: {
			mirror: 1
		},
		pseudoWeather: "magicroom",
		condition: {
			duration: 5,
			onResidualOrder: 25
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, the held items of all active Pokemon have no effect. An item's effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by all active Pokemon. If this move is used during the effect, the effect ends.",
		shortDesc: "For 5 turns, all held items have no effect."
	},
	magmastorm: {
		num: 463,
		accuracy: 75,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Magma Storm",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Tough",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns."
	},
	magnetbomb: {
		num: 443,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Magnet Bomb",
		pp: 20,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy."
	},
	magneticflux: {
		num: 602,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magnetic Flux",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1,
			distance: 1,
			authentic: 1
		},
		secondary: null,
		target: "allySide",
		type: "Electric",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "Raises the Defense and Special Defense of Pokemon on the user's side with the Plus or Minus Abilities by 1 stage.",
		shortDesc: "Raises Def, Sp. Def of allies with Plus/Minus by 1."
	},
	magnetrise: {
		num: 393,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magnet Rise",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			gravity: 1
		},
		volatileStatus: "magnetrise",
		condition: {
			duration: 5,
			onResidualOrder: 15
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMove: {
			boost: {
				evasion: 1
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, the user is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the user uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the user is under any of their effects. Fails if the user is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows.",
		shortDesc: "For 5 turns, the user has immunity to Ground."
	},
	magnitude: {
		num: 222,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Magnitude",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 140
		},
		contestType: "Tough",
		desc: "The power of this move varies; 5% chances for 10 and 150 power, 10% chances for 30 and 110 power, 20% chances for 50 and 90 power, and 30% chance for 70 power. Damage doubles if the target is using Dig.",
		shortDesc: "Hits adjacent Pokemon. Power varies; 2x on Dig."
	},
	maliciousmoonsault: {
		num: 696,
		accuracy: true,
		basePower: 180,
		category: "Physical",
		isNonstandard: "Past",
		name: "Malicious Moonsault",
		pp: 1,
		priority: 0,
		flags: {
			contact: 1
		},
		isZ: "inciniumz",
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
		desc: "Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "Damage doubles if the target used Minimize."
	},
	matblock: {
		num: 561,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mat Block",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			nonsky: 1
		},
		stallingMove: true,
		sideCondition: "matblock",
		condition: {
			duration: 1,
			onTryHitPriority: 3
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cool",
		desc: "The user and its party members are protected from damaging attacks made by other Pokemon, including allies, during this turn. Fails unless it is the user's first turn on the field, if the user moves last this turn, or if this move is already in effect for the user's side.",
		shortDesc: "Protects allies from damaging attacks. Turn 1 only."
	},
	maxairstream: {
		num: 766,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Airstream",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Flying",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Allies: +1 Speed."
	},
	maxdarkness: {
		num: 772,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Darkness",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Dark",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: -1 Sp. Def."
	},
	maxflare: {
		num: 757,
		accuracy: true,
		basePower: 100,
		category: "Physical",
		name: "Max Flare",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sunny Day begins.",
		shortDesc: "Base move affects power. Starts Sunny Day."
	},
	maxflutterby: {
		num: 758,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Flutterby",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: -1 Sp. Atk."
	},
	maxgeyser: {
		num: 765,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Geyser",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Rain Dance begins.",
		shortDesc: "Base move affects power. Starts Rain Dance."
	},
	maxguard: {
		num: 743,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Max Guard",
		pp: 5,
		priority: 4,
		flags: {},
		isMax: true,
		stallingMove: true,
		volatileStatus: "maxguard",
		condition: {
			duration: 1,
			onTryHitPriority: 3
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cool",
		desc: "The user is protected from nearly all attacks made by other Pokemon during this turn, including Max and G-Max Moves. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects user from moves & Max Moves this turn."
	},
	maxhailstorm: {
		num: 763,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Hailstorm",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Ice",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Hail begins.",
		shortDesc: "Base move affects power. Starts Hail."
	},
	maxknuckle: {
		num: 761,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Knuckle",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Fighting",
		contestType: "Cool",
		desc: "Boosts the user and its allies' Attack by 1 stage. BP scales with the base move's BP.",
		shortDesc: "Base move affects power. Allies: +1 Attack."
	},
	maxlightning: {
		num: 759,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Lightning",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Electric",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Electric Terrain begins.",
		shortDesc: "Base move affects power. Starts Electric Terrain."
	},
	maxmindstorm: {
		num: 769,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Mindstorm",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Psychic",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Psychic Terrain begins.",
		shortDesc: "Base move affects power. Starts Psychic Terrain."
	},
	maxooze: {
		num: 764,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Ooze",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Poison",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Allies: +1 Sp. Atk."
	},
	maxovergrowth: {
		num: 773,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Overgrowth",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Grassy Terrain begins.",
		shortDesc: "Base move affects power. Starts Grassy Terrain."
	},
	maxphantasm: {
		num: 762,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Phantasm",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Ghost",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: -1 Defense."
	},
	maxquake: {
		num: 771,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Quake",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Ground",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Allies: +1 Sp. Def."
	},
	maxrockfall: {
		num: 770,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Rockfall",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Rock",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sandstorm begins.",
		shortDesc: "Base move affects power. Starts Sandstorm."
	},
	maxstarfall: {
		num: 767,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Starfall",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Misty Terrain begins.",
		shortDesc: "Base move affects power. Starts Misty Terrain."
	},
	maxsteelspike: {
		num: 774,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Steelspike",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Allies: +1 Defense."
	},
	maxstrike: {
		num: 760,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Strike",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: -1 Speed."
	},
	maxwyrmwind: {
		num: 768,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Wyrmwind",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: true,
		self: {},
		target: "adjacentFoe",
		type: "Dragon",
		contestType: "Cool",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, the Attack of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: -1 Attack."
	},
	meanlook: {
		num: 212,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mean Look",
		pp: 5,
		priority: 0,
		flags: {
			reflectable: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Beautiful",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out."
	},
	meditate: {
		num: 96,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Meditate",
		pp: 40,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			atk: 1
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Beautiful",
		desc: "Raises the user's Attack by 1 stage.",
		shortDesc: "Raises the user's Attack by 1."
	},
	mefirst: {
		num: 382,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Me First",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			authentic: 1
		},
		condition: {
			duration: 1,
			onBasePowerPriority: 12
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		zMove: {
			boost: {
				spe: 2
			}
		},
		contestType: "Clever",
		desc: "The user uses the move the target chose for use this turn against it, if possible, with its power multiplied by 1.5. The move must be a damaging move other than Beak Blast, Chatter, Counter, Covet, Focus Punch, Me First, Metal Burst, Mirror Coat, Shell Trap, Struggle, Thief, or any Z-Move. Fails if the target moves before the user. Ignores the target's substitute for the purpose of copying the move.",
		shortDesc: "Copies a foe at 1.5x power. User must be faster."
	},
	megadrain: {
		num: 72,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Mega Drain",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			heal: 1
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			basePower: 120
		},
		contestType: "Clever",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt."
	},
	megahorn: {
		num: 224,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Megahorn",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	megakick: {
		num: 25,
		accuracy: 75,
		basePower: 120,
		category: "Physical",
		name: "Mega Kick",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	megapunch: {
		num: 5,
		accuracy: 85,
		basePower: 80,
		category: "Physical",
		name: "Mega Punch",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	memento: {
		num: 262,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Memento",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		boosts: {
			atk: -2,
			spa: -2
		},
		selfdestruct: "ifHit",
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			effect: "healreplacement"
		},
		contestType: "Tough",
		desc: "Lowers the target's Attack and Special Attack by 2 stages. The user faints unless this move misses or there is no target. Fails entirely if this move hits a substitute, but does not fail if the target's stats cannot be changed.",
		shortDesc: "Lowers target's Attack, Sp. Atk by 2. User faints."
	},
	menacingmoonrazemaelstrom: {
		num: 725,
		accuracy: true,
		basePower: 200,
		category: "Special",
		isNonstandard: "Past",
		name: "Menacing Moonraze Maelstrom",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "lunaliumz",
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the Abilities of other Pokemon."
	},
	metalburst: {
		num: 368,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Metal Burst",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		condition: {
			duration: 1,
			noCopy: true,
			onRedirectTargetPriority: -1
		},
		secondary: null,
		target: "scripted",
		type: "Steel",
		contestType: "Cool",
		desc: "Deals damage to the last opposing Pokemon to hit the user with an attack this turn equal to 1.5 times the HP lost by the user from that attack, rounded down. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's attack this turn.",
		shortDesc: "If hit by an attack, returns 1.5x damage."
	},
	metalclaw: {
		num: 232,
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		name: "Metal Claw",
		pp: 35,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1
				}
			}
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		desc: "Has a 10% chance to raise the user's Attack by 1 stage.",
		shortDesc: "10% chance to raise the user's Attack by 1."
	},
	metalsound: {
		num: 319,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Metal Sound",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1,
			mystery: 1
		},
		boosts: {
			spd: -2
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "Lowers the target's Special Defense by 2 stages.",
		shortDesc: "Lowers the target's Sp. Def by 2."
	},
	meteorassault: {
		num: 794,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Meteor Assault",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			recharge: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	meteorbeam: {
		num: 800,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		name: "Meteor Beam",
		pp: 10,
		priority: 0,
		flags: {
			charge: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		desc: "This attack charges on the first turn and executes on the second. Raises the user's Special Attack by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Raises user's Sp. Atk by 1 on turn 1. Hits turn 2."
	},
	meteormash: {
		num: 309,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Meteor Mash",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					atk: 1
				}
			}
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		desc: "Has a 20% chance to raise the user's Attack by 1 stage.",
		shortDesc: "20% chance to raise the user's Attack by 1."
	},
	metronome: {
		num: 118,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Metronome",
		pp: 10,
		priority: 0,
		flags: {},
		noMetronome: ["After You", "Apple Acid", "Assist", "Aura Wheel", "Baneful Bunker", "Beak Blast", "Behemoth Bash", "Behemoth Blade", "Belch", "Bestow", "Body Press", "Branch Poke", "Breaking Swipe", "Celebrate", "Chatter", "Clangorous Soul", "Copycat", "Counter", "Covet", "Crafty Shield", "Decorate", "Destiny Bond", "Detect", "Diamond Storm", "Double Iron Bash", "Dragon Ascent", "Drum Beating", "Dynamax Cannon", "Endure", "Eternabeam", "False Surrender", "Feint", "Fleur Cannon", "Focus Punch", "Follow Me", "Freeze Shock", "Grav Apple", "Helping Hand", "Hold Hands", "Hyperspace Fury", "Hyperspace Hole", "Ice Burn", "Instruct", "Jungle Healing", "King's Shield", "Life Dew", "Light of Ruin", "Mat Block", "Me First", "Meteor Assault", "Metronome", "Mimic", "Mind Blown", "Mirror Coat", "Mirror Move", "Moongeist Beam", "Nature Power", "Nature's Madness", "Obstruct", "Origin Pulse", "Overdrive", "Photon Geyser", "Plasma Fists", "Precipice Blades", "Protect", "Pyro Ball", "Quash", "Quick Guard", "Rage Powder", "Relic Song", "Secret Sword", "Shell Trap", "Sketch", "Sleep Talk", "Snap Trap", "Snarl", "Snatch", "Snore", "Spectral Thief", "Spiky Shield", "Spirit Break", "Spotlight", "Steam Eruption", "Steel Beam", "Strange Steam", "Struggle", "Sunsteel Strike", "Surging Strikes", "Switcheroo", "Techno Blast", "Thief", "Thousand Arrows", "Thousand Waves", "Transform", "Trick", "V-create", "Wicked Blow", "Wide Guard"],
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cute",
		desc: "A random move is selected for use, other than After You, Apple Acid, Assist, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Clangorous Soul, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Double Iron Bash, Dragon Ascent, Drum Beating, Dynamax Cannon, Endure, Eternabeam, False Surrender, Feint, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Grav Apple, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, King's Shield, Life Dew, Light of Ruin, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Obstruct, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spirit Break, Spotlight, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Transform, Trick, V-create, or Wide Guard.",
		shortDesc: "Picks a random move."
	},
	milkdrink: {
		num: 208,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Milk Drink",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP."
	},
	mimic: {
		num: 102,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mimic",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				accuracy: 1
			}
		},
		contestType: "Cute",
		desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Chatter, Mimic, Sketch, Struggle, Transform, or any Z-Move.",
		shortDesc: "The last move the target used replaces this one."
	},
	mindblown: {
		num: 720,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		isNonstandard: "Past",
		name: "Mind Blown",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		mindBlownRecoil: true,
		secondary: null,
		target: "allAdjacent",
		type: "Fire",
		contestType: "Cool",
		desc: "Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability. This move is prevented from executing and the user does not lose HP if any active Pokemon has the Damp Ability, or if this move is Fire type and the user is affected by Powder or the weather is Primordial Sea.",
		shortDesc: "User loses 50% max HP. Hits adjacent Pokemon."
	},
	mindreader: {
		num: 170,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mind Reader",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
		shortDesc: "User's next move will not miss the target."
	},
	minimize: {
		num: 107,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Minimize",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1
		},
		volatileStatus: "minimize",
		condition: {
			noCopy: true
		},
		boosts: {
			evasion: 2
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "Raises the user's evasiveness by 2 stages. Whether or not the user's evasiveness was changed, Body Slam, Dragon Rush, Flying Press, Heat Crash, Heavy Slam, Malicious Moonsault, Steamroller, and Stomp will not check accuracy and have their damage doubled if used against the user while it is active.",
		shortDesc: "Raises the user's evasiveness by 2."
	},
	miracleeye: {
		num: 357,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Miracle Eye",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		volatileStatus: "miracleeye",
		condition: {
			noCopy: true
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Psychic-type attacks can hit the target if it is a Dark type. Fails if the target is already affected, or affected by Foresight or Odor Sleuth.",
		shortDesc: "Psychic hits Dark. Evasiveness ignored."
	},
	mirrorcoat: {
		num: 243,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		name: "Mirror Coat",
		pp: 20,
		priority: -5,
		flags: {
			protect: 1
		},
		condition: {
			duration: 1,
			noCopy: true,
			onRedirectTargetPriority: -1
		},
		secondary: null,
		target: "scripted",
		type: "Psychic",
		contestType: "Beautiful",
		desc: "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's special attack this turn.",
		shortDesc: "If hit by special attack, returns double damage."
	},
	mirrormove: {
		num: 119,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Mirror Move",
		pp: 20,
		priority: 0,
		flags: {},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {
			boost: {
				atk: 2
			}
		},
		contestType: "Clever",
		desc: "The user uses the last move used by the target. The copied move is used against that target, if possible. Fails if the target has not made a move, or if the last move used cannot be copied by this move.",
		shortDesc: "User uses the target's last used move against it."
	},
	mirrorshot: {
		num: 429,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Mirror Shot",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1
			}
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the target's accuracy by 1."
	},
	mist: {
		num: 54,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mist",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		sideCondition: "mist",
		condition: {
			duration: 5,
			onResidualOrder: 21,
			onResidualSubOrder: 3
		},
		secondary: null,
		target: "allySide",
		type: "Ice",
		zMove: {
			effect: "heal"
		},
		contestType: "Beautiful",
		desc: "For 5 turns, the user and its party members are protected from having their stat stages lowered by other Pokemon. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, protects user's party from stat drops."
	},
	mistball: {
		num: 296,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		isNonstandard: "Past",
		name: "Mist Ball",
		pp: 5,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			boosts: {
				spa: -1
			}
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "Has a 50% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "50% chance to lower the target's Sp. Atk by 1."
	},
	mistyexplosion: {
		num: 802,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Misty Explosion",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Fairy",
		desc: "If the current terrain is Misty Terrain and the user is grounded, this move's power is multiplied by 1.5. The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "User faints. User on Misty Terrain: 1.5x power."
	},
	mistyterrain: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Misty Terrain",
		pp: 10,
		priority: 0,
		flags: {
			nonsky: 1
		},
		terrain: "mistyterrain",
		condition: {
			duration: 5,
			onBasePowerPriority: 6,
			onResidualOrder: 21,
			onResidualSubOrder: 2
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Beautiful",
		desc: "For 5 turns, the terrain becomes Misty Terrain. During the effect, the power of Dragon-type attacks used against grounded Pokemon is multiplied by 0.5 and grounded Pokemon cannot be inflicted with a major status condition nor confusion. Camouflage transforms the user into a Fairy type, Nature Power becomes Moonblast, and Secret Power has a 30% chance to lower Special Attack by 1 stage. Fails if the current terrain is Misty Terrain.",
		shortDesc: "5 turns. Can't status,-Dragon power vs grounded."
	},
	moonblast: {
		num: 585,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Moonblast",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			boosts: {
				spa: -1
			}
		},
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
		desc: "Has a 30% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "30% chance to lower the target's Sp. Atk by 1."
	},
	moongeistbeam: {
		num: 714,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Moongeist Beam",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the Abilities of other Pokemon."
	},
	moonlight: {
		num: 236,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Moonlight",
		pp: 5,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount."
	},
	morningsun: {
		num: 234,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Morning Sun",
		pp: 5,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount."
	},
	mudbomb: {
		num: 426,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Mud Bomb",
		pp: 10,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1
			}
		},
		target: "normal",
		type: "Ground",
		contestType: "Cute",
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the target's accuracy by 1."
	},
	mudshot: {
		num: 341,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Mud Shot",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1
			}
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1."
	},
	mudslap: {
		num: 189,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Mud-Slap",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1
			}
		},
		target: "normal",
		type: "Ground",
		contestType: "Cute",
		desc: "Has a 100% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "100% chance to lower the target's accuracy by 1."
	},
	mudsport: {
		num: 300,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Mud Sport",
		pp: 15,
		priority: 0,
		flags: {
			nonsky: 1
		},
		pseudoWeather: "mudsport",
		condition: {
			duration: 5,
			onBasePowerPriority: 1,
			onResidualOrder: 21
		},
		secondary: null,
		target: "all",
		type: "Ground",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Cute",
		desc: "For 5 turns, all Electric-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
		shortDesc: "For 5 turns, Electric-type attacks have 1/3 power."
	},
	muddywater: {
		num: 330,
		accuracy: 85,
		basePower: 90,
		category: "Special",
		name: "Muddy Water",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Tough",
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the foe(s) accuracy by 1."
	},
	multiattack: {
		num: 718,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Multi-Attack",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 185
		},
		maxMove: {
			basePower: 95
		},
		contestType: "Tough",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory."
	},
	mysticalfire: {
		num: 595,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Mystical Fire",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1
			}
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Sp. Atk by 1."
	},
	nastyplot: {
		num: 417,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Nasty Plot",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			spa: 2
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "Raises the user's Special Attack by 2 stages.",
		shortDesc: "Raises the user's Sp. Atk by 2."
	},
	naturalgift: {
		num: 363,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Natural Gift",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Clever",
		desc: "The type and power of this move depend on the user's held Berry, and the Berry is lost. Fails if the user is not holding a Berry, if the user has the Klutz Ability, or if Embargo or Magic Room is in effect for the user.",
		shortDesc: "Power and type depends on the user's Berry."
	},
	naturepower: {
		num: 267,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Nature Power",
		pp: 20,
		priority: 0,
		flags: {},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		desc: "This move calls another move for use based on the battle terrain. Tri Attack on the regular Wi-Fi terrain, Thunderbolt during Electric Terrain, Moonblast during Misty Terrain, Energy Ball during Grassy Terrain, and Psychic during Psychic Terrain.",
		shortDesc: "Attack depends on terrain (default Tri Attack)."
	},
	naturesmadness: {
		num: 717,
		accuracy: 90,
		basePower: 0,
		category: "Special",
		isNonstandard: "Past",
		name: "Nature's Madness",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Tough",
		desc: "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
		shortDesc: "Does damage equal to 1/2 target's current HP."
	},
	needlearm: {
		num: 302,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Needle Arm",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Grass",
		contestType: "Clever",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	neverendingnightmare: {
		num: 636,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Never-Ending Nightmare",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "ghostiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	nightdaze: {
		num: 539,
		accuracy: 95,
		basePower: 85,
		category: "Special",
		name: "Night Daze",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 40,
			boosts: {
				accuracy: -1
			}
		},
		target: "normal",
		type: "Dark",
		contestType: "Cool",
		desc: "Has a 40% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "40% chance to lower the target's accuracy by 1."
	},
	nightmare: {
		num: 171,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Nightmare",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		volatileStatus: "nightmare",
		condition: {
			noCopy: true,
			onResidualOrder: 9
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the target to lose 1/4 of its maximum HP, rounded down, at the end of each turn as long as it is asleep. This move does not affect the target unless it is asleep. The effect ends when the target wakes up, even if it falls asleep again in the same turn.",
		shortDesc: "A sleeping target is hurt by 1/4 max HP per turn."
	},
	nightshade: {
		num: 101,
		accuracy: 100,
		basePower: 0,
		damage: "level",
		category: "Special",
		name: "Night Shade",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
		desc: "Deals damage to the target equal to the user's level.",
		shortDesc: "Does damage equal to the user's level."
	},
	nightslash: {
		num: 400,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Night Slash",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	nobleroar: {
		num: 568,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Noble Roar",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		boosts: {
			atk: -1,
			spa: -1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Tough",
		desc: "Lowers the target's Attack and Special Attack by 1 stage.",
		shortDesc: "Lowers the target's Attack and Sp. Atk by 1."
	},
	noretreat: {
		num: 748,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "No Retreat",
		pp: 5,
		priority: 0,
		flags: {
			snatch: 1
		},
		volatileStatus: "noretreat",
		condition: {},
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
			spe: 1
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage, but it becomes prevented from switching out. The user can still switch out if it uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped. Fails if the user has already been prevented from switching by this effect.",
		shortDesc: "Raises all stats by 1 (not acc/eva). Traps user."
	},
	nuzzle: {
		num: 609,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Nuzzle",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cute",
		desc: "Has a 100% chance to paralyze the target.",
		shortDesc: "100% chance to paralyze the target."
	},
	oblivionwing: {
		num: 613,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Past",
		name: "Oblivion Wing",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			distance: 1,
			heal: 1
		},
		drain: [3, 4],
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 75% of the damage dealt."
	},
	obstruct: {
		num: 792,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Obstruct",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: "obstruct",
		condition: {
			duration: 1,
			onTryHitPriority: 3
		},
		secondary: null,
		target: "self",
		type: "Dark",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Defense lowered by 2 stages. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from damaging attacks. Contact: -2 Def."
	},
	oceanicoperetta: {
		num: 697,
		accuracy: true,
		basePower: 195,
		category: "Special",
		isNonstandard: "Past",
		name: "Oceanic Operetta",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "primariumz",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	octazooka: {
		num: 190,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		name: "Octazooka",
		pp: 10,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1
			}
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
		desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "50% chance to lower the target's accuracy by 1."
	},
	octolock: {
		num: 753,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Octolock",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		volatileStatus: "octolock",
		condition: {
			onResidualOrder: 11
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		desc: "Prevents the target from switching out. At the end of each turn during effect, the target's Defense and Special Defense are lowered by 1 stage. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Traps target, lowers Def and SpD by 1 each turn."
	},
	odorsleuth: {
		num: 316,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Odor Sleuth",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1,
			mystery: 1
		},
		volatileStatus: "foresight",
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Clever",
		desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Foresight or Miracle Eye.",
		shortDesc: "Fighting, Normal hit Ghost. Evasiveness ignored."
	},
	ominouswind: {
		num: 466,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Past",
		name: "Ominous Wind",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1
				}
			}
		},
		target: "normal",
		type: "Ghost",
		contestType: "Beautiful",
		desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "10% chance to raise all stats by 1 (not acc/eva)."
	},
	originpulse: {
		num: 618,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		isNonstandard: "Past",
		name: "Origin Pulse",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			pulse: 1,
			mirror: 1
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes."
	},
	outrage: {
		num: 200,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Outrage",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "lockedmove"
		},
		secondary: null,
		target: "randomNormal",
		type: "Dragon",
		contestType: "Cool",
		desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards."
	},
	overdrive: {
		num: 786,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Overdrive",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Electric",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits foe(s)."
	},
	overheat: {
		num: 315,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Overheat",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		self: {
			boosts: {
				spa: -2
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2."
	},
	painsplit: {
		num: 220,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Pain Split",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "The user and the target's HP become the average of their current HP, rounded down, but not more than the maximum HP of either one.",
		shortDesc: "Shares HP of user and target equally."
	},
	paleowave: {
		num: 0,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		isNonstandard: "CAP",
		name: "Paleo Wave",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			boosts: {
				atk: -1
			}
		},
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
		desc: "Has a 20% chance to lower the target's Attack by 1 stage.",
		shortDesc: "20% chance to lower the target's Attack by 1."
	},
	paraboliccharge: {
		num: 570,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Parabolic Charge",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			heal: 1
		},
		drain: [1, 2],
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
		contestType: "Clever",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt."
	},
	partingshot: {
		num: 575,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Parting Shot",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			effect: "healreplacement"
		},
		contestType: "Cool",
		desc: "Lowers the target's Attack and Special Attack by 1 stage. If this move is successful, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if the target's Attack and Special Attack stat stages were both unchanged, or if there are no unfainted party members.",
		shortDesc: "Lowers target's Atk, Sp. Atk by 1. User switches."
	},
	payback: {
		num: 371,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Payback",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		desc: "Power doubles if the user moves after the target this turn, including actions taken through Instruct or the Dancer Ability. Switching in does not count as an action.",
		shortDesc: "Power doubles if the user moves after the target."
	},
	payday: {
		num: 6,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Pay Day",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		desc: "No additional effect.",
		shortDesc: "Scatters coins."
	},
	peck: {
		num: 64,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		name: "Peck",
		pp: 35,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			distance: 1
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	perishsong: {
		num: 195,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Perish Song",
		pp: 5,
		priority: 0,
		flags: {
			sound: 1,
			distance: 1,
			authentic: 1
		},
		condition: {
			duration: 4,
			onResidualOrder: 20
		},
		secondary: null,
		target: "all",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "Each active Pokemon receives a perish count of 4 if it doesn't already have a perish count. At the end of each turn including the turn used, the perish count of all active Pokemon lowers by 1 and Pokemon faint if the number reaches 0. The perish count is removed from Pokemon that switch out. If a Pokemon uses Baton Pass while it has a perish count, the replacement will gain the perish count and continue to count down.",
		shortDesc: "All active Pokemon will faint in 3 turns."
	},
	petalblizzard: {
		num: 572,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Petal Blizzard",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacent",
		type: "Grass",
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon."
	},
	petaldance: {
		num: 80,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Petal Dance",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			dance: 1
		},
		self: {
			volatileStatus: "lockedmove"
		},
		secondary: null,
		target: "randomNormal",
		type: "Grass",
		contestType: "Beautiful",
		desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards."
	},
	phantomforce: {
		num: 566,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Phantom Force",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			charge: 1,
			mirror: 1
		},
		breaksProtect: true,
		condition: {
			duration: 2,
			onInvulnerability: false
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Disappears turn 1. Hits turn 2. Breaks protection."
	},
	photongeyser: {
		num: 722,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Photon Geyser",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		desc: "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes. This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities."
	},
	pikapapow: {
		num: 732,
		accuracy: true,
		basePower: 0,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Pika Papow",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cute",
		desc: "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
		shortDesc: "Max happiness: 102 power. Can't miss."
	},
	pinmissile: {
		num: 42,
		accuracy: 95,
		basePower: 25,
		category: "Physical",
		name: "Pin Missile",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cool",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	plasmafists: {
		num: 721,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Plasma Fists",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		pseudoWeather: "iondeluge",
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "If this move is successful, causes Normal-type moves to become Electric type this turn.",
		shortDesc: "Normal moves become Electric type this turn."
	},
	playnice: {
		num: 589,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Play Nice",
		pp: 20,
		priority: 0,
		flags: {
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		boosts: {
			atk: -1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Attack by 1 stage.",
		shortDesc: "Lowers the target's Attack by 1."
	},
	playrough: {
		num: 583,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Play Rough",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1
			}
		},
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
		desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
		shortDesc: "10% chance to lower the target's Attack by 1."
	},
	pluck: {
		num: 365,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Pluck",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			distance: 1
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cute",
		desc: "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately, gaining its effects even if the user's item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "User steals and eats the target's Berry."
	},
	poisonfang: {
		num: 305,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Poison Fang",
		pp: 15,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			status: "tox"
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
		desc: "Has a 50% chance to badly poison the target.",
		shortDesc: "50% chance to badly poison the target."
	},
	poisongas: {
		num: 139,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Poison Gas",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "psn",
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "Poisons the target.",
		shortDesc: "Poisons the foe(s)."
	},
	poisonjab: {
		num: 398,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Poison Jab",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "psn"
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target."
	},
	poisonpowder: {
		num: 77,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Poison Powder",
		pp: 35,
		priority: 0,
		flags: {
			powder: 1,
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "psn",
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "Poisons the target.",
		shortDesc: "Poisons the target."
	},
	poisonsting: {
		num: 40,
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		name: "Poison Sting",
		pp: 35,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "psn"
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target."
	},
	poisontail: {
		num: 342,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Poison Tail",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: "psn"
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
		desc: "Has a 10% chance to poison the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to poison."
	},
	pollenpuff: {
		num: 676,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Pollen Puff",
		pp: 15,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
		desc: "If the target is an ally, this move restores 1/2 of its maximum HP, rounded down, instead of dealing damage.",
		shortDesc: "If the target is an ally, heals 50% of its max HP."
	},
	poltergeist: {
		num: 809,
		accuracy: 90,
		basePower: 110,
		category: "Physical",
		name: "Poltergeist",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		desc: "Fails if the target has no held item.",
		shortDesc: "Fails if the target has no held item."
	},
	pound: {
		num: 1,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Pound",
		pp: 35,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	powder: {
		num: 600,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Powder",
		pp: 20,
		priority: 1,
		flags: {
			powder: 1,
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		volatileStatus: "powder",
		condition: {
			duration: 1,
			onTryMovePriority: -1
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {
			boost: {
				spd: 2
			}
		},
		contestType: "Clever",
		desc: "If the target uses a Fire-type move this turn, it is prevented from executing and the target loses 1/4 of its maximum HP, rounded half up. This effect does not happen if the Fire-type move is prevented by Primordial Sea.",
		shortDesc: "If using a Fire move, target loses 1/4 max HP."
	},
	powdersnow: {
		num: 181,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Powder Snow",
		pp: 25,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "frz"
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
		desc: "Has a 10% chance to freeze the target.",
		shortDesc: "10% chance to freeze the foe(s)."
	},
	powergem: {
		num: 408,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Power Gem",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	powersplit: {
		num: 471,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Split",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "The user and the target have their Attack and Special Attack stats set to be equal to the average of the user and the target's Attack and Special Attack stats, respectively, rounded down. Stat stage changes are unaffected.",
		shortDesc: "Averages Attack and Sp. Atk stats with target."
	},
	powerswap: {
		num: 384,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Swap",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "The user swaps its Attack and Special Attack stat stage changes with the target.",
		shortDesc: "Swaps Attack and Sp. Atk stat stages with target."
	},
	powertrick: {
		num: 379,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Trick",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1
		},
		volatileStatus: "powertrick",
		condition: {},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Clever",
		desc: "The user swaps its Attack and Defense stats, and stat stage changes remain on their respective stats. This move can be used again to swap the stats back. If the user uses Baton Pass, the replacement will have its Attack and Defense stats swapped if the effect is active. If the user has its stats recalculated by changing forme while its stats are swapped, this effect is ignored but is still active for the purposes of Baton Pass.",
		shortDesc: "Switches user's Attack and Defense stats."
	},
	powertrip: {
		num: 681,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Power Trip",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Clever",
		desc: "Power is equal to 20+(X*20), where X is the user's total stat stage changes that are greater than 0.",
		shortDesc: " + 20 power for each of the user's stat boosts."
	},
	poweruppunch: {
		num: 612,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Power-Up Punch",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1
				}
			}
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "Has a 100% chance to raise the user's Attack by 1 stage.",
		shortDesc: "100% chance to raise the user's Attack by 1."
	},
	powerwhip: {
		num: 438,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Power Whip",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	precipiceblades: {
		num: 619,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		isNonstandard: "Past",
		name: "Precipice Blades",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		target: "allAdjacentFoes",
		type: "Ground",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes."
	},
	present: {
		num: 217,
		accuracy: 90,
		basePower: 0,
		category: "Physical",
		name: "Present",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "If this move is successful, it deals damage or heals the target. 40% chance for 40 power, 30% chance for 80 power, 10% chance for 120 power, and 20% chance to heal the target by 1/4 of its maximum HP, rounded down.",
		shortDesc: "40, 80, 120 power, or heals target 1/4 max HP."
	},
	prismaticlaser: {
		num: 711,
		accuracy: 100,
		basePower: 160,
		category: "Special",
		name: "Prismatic Laser",
		pp: 10,
		priority: 0,
		flags: {
			recharge: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	protect: {
		num: 182,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Protect",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: "protect",
		condition: {
			duration: 1,
			onTryHitPriority: 3
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Prevents moves from affecting the user this turn."
	},
	psybeam: {
		num: 60,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Psybeam",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			volatileStatus: "confusion"
		},
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
		desc: "Has a 10% chance to confuse the target.",
		shortDesc: "10% chance to confuse the target."
	},
	psychup: {
		num: 244,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Psych Up",
		pp: 10,
		priority: 0,
		flags: {
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			effect: "heal"
		},
		contestType: "Clever",
		desc: "The user copies all of the target's current stat stage changes.",
		shortDesc: "Copies the target's current stat stages."
	},
	psychic: {
		num: 94,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Psychic",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1."
	},
	psychicfangs: {
		num: 706,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Psychic Fangs",
		pp: 10,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
		shortDesc: "Destroys screens, unless the target is immune."
	},
	psychicterrain: {
		num: 678,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Psychic Terrain",
		pp: 10,
		priority: 0,
		flags: {
			nonsky: 1
		},
		terrain: "psychicterrain",
		condition: {
			duration: 5,
			onTryHitPriority: 4,
			onBasePowerPriority: 6,
			onResidualOrder: 21,
			onResidualSubOrder: 2
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, the terrain becomes Psychic Terrain. During the effect, the power of Psychic-type attacks made by grounded Pokemon is multiplied by 1.3 and grounded Pokemon cannot be hit by moves with priority greater than 0, unless the target is an ally. Camouflage transforms the user into a Psychic type, Nature Power becomes Psychic, and Secret Power has a 30% chance to lower the target's Speed by 1 stage. Fails if the current terrain is Psychic Terrain.",
		shortDesc: "5 turns. Grounded: +Psychic power, priority-safe."
	},
	psychoboost: {
		num: 354,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		isNonstandard: "Past",
		name: "Psycho Boost",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		self: {
			boosts: {
				spa: -2
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2."
	},
	psychocut: {
		num: 427,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Psycho Cut",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	psychoshift: {
		num: 375,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Psycho Shift",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		self: {},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spa: 2
			}
		},
		contestType: "Clever",
		desc: "The user's major status condition is transferred to the target, and the user is then cured. Fails if the user has no major status condition or if the target already has one.",
		shortDesc: "Transfers the user's status ailment to the target."
	},
	psyshock: {
		num: 473,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		defensiveCategory: "Physical",
		name: "Psyshock",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
		desc: "Deals damage to the target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def."
	},
	psystrike: {
		num: 540,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		defensiveCategory: "Physical",
		name: "Psystrike",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		desc: "Deals damage to the target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def."
	},
	psywave: {
		num: 149,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		isNonstandard: "Past",
		name: "Psywave",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "Deals damage to the target equal to (user's level) * (X + 50) / 100, where X is a random number from 0 to 100, rounded down, but not less than 1 HP.",
		shortDesc: "Random damage equal to 0.5x-1.5x user's level."
	},
	pulverizingpancake: {
		num: 701,
		accuracy: true,
		basePower: 210,
		category: "Physical",
		isNonstandard: "Past",
		name: "Pulverizing Pancake",
		pp: 1,
		priority: 0,
		flags: {
			contact: 1
		},
		isZ: "snorliumz",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	punishment: {
		num: 386,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Punishment",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cool",
		desc: "Power is equal to 60+(X*20), where X is the target's total stat stage changes that are greater than 0, but not more than 200 power.",
		shortDesc: "60 power +20 for each of the target's stat boosts."
	},
	purify: {
		num: 685,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Purify",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			heal: 1
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {
			boost: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		contestType: "Beautiful",
		desc: "The target is cured if it has a major status condition. If the target was cured, the user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Cures target's status; heals user 1/2 max HP if so."
	},
	pursuit: {
		num: 228,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Past",
		name: "Pursuit",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		condition: {
			duration: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		desc: "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Parting Shot, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
		shortDesc: "If a foe is switching out, hits it at 2x power."
	},
	pyroball: {
		num: 780,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "Pyro Ball",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			defrost: 1,
			bullet: 1
		},
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target. Thaws user."
	},
	quash: {
		num: 511,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Quash",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the target to take its turn after all other Pokemon this turn, no matter the priority of its selected move. Fails if the target already moved this turn.",
		shortDesc: "Forces the target to move last this turn."
	},
	quickattack: {
		num: 98,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Quick Attack",
		pp: 30,
		priority: 1,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	quickguard: {
		num: 501,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Quick Guard",
		pp: 15,
		priority: 3,
		flags: {
			snatch: 1
		},
		sideCondition: "quickguard",
		condition: {
			duration: 1,
			onTryHitPriority: 4
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cool",
		desc: "The user and its party members are protected from attacks with original or altered priority greater than 0 made by other Pokemon, including allies, during this turn. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		shortDesc: "Protects allies from priority attacks this turn."
	},
	quiverdance: {
		num: 483,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Quiver Dance",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1,
			dance: 1
		},
		boosts: {
			spa: 1,
			spd: 1,
			spe: 1
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "Raises the user's Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "Raises the user's Sp. Atk, Sp. Def, Speed by 1."
	},
	rage: {
		num: 99,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rage",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "rage"
		},
		condition: {
			onBeforeMovePriority: 100
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Once this move is successfully used, the user's Attack is raised by 1 stage every time it is hit by another Pokemon's attack as long as this move is chosen for use.",
		shortDesc: "Raises the user's Attack by 1 if hit during use."
	},
	ragepowder: {
		num: 476,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rage Powder",
		pp: 20,
		priority: 2,
		flags: {
			powder: 1
		},
		volatileStatus: "ragepowder",
		condition: {
			duration: 1,
			onFoeRedirectTargetPriority: 1
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop.",
		shortDesc: "The foes' moves target the user on the turn used."
	},
	raindance: {
		num: 240,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rain Dance",
		pp: 5,
		priority: 0,
		flags: {},
		weather: "RainDance",
		secondary: null,
		target: "all",
		type: "Water",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Beautiful",
		desc: "For 5 turns, the weather becomes Rain Dance. The damage of Water-type attacks is multiplied by 1.5 and the damage of Fire-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Damp Rock. Fails if the current weather is Rain Dance.",
		shortDesc: "For 5 turns, heavy rain powers Water moves."
	},
	rapidspin: {
		num: 229,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Rapid Spin",
		pp: 40,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1
				}
			}
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to raise the user's Speed by 1 stage.",
		shortDesc: "Free user from hazards/bind/Leech Seed; +1 Spe."
	},
	razorleaf: {
		num: 75,
		accuracy: 95,
		basePower: 55,
		category: "Physical",
		name: "Razor Leaf",
		pp: 25,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. Hits adjacent foes."
	},
	razorshell: {
		num: 534,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		name: "Razor Shell",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Defense by 1."
	},
	razorwind: {
		num: 13,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Past",
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		flags: {
			charge: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then hits foe(s) turn 2. High crit ratio."
	},
	recover: {
		num: 105,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Recover",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP."
	},
	recycle: {
		num: 278,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Recycle",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				spe: 2
			}
		},
		contestType: "Clever",
		desc: "The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokemon with the Pickup Ability, or if the item was lost to Bug Bite, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained.",
		shortDesc: "Restores the item the user last used."
	},
	reflect: {
		num: 115,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Reflect",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		sideCondition: "reflect",
		condition: {
			duration: 5,
			onResidualOrder: 21
		},
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, the user and its party members take 0.5x damage from physical attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, physical damage to allies is halved."
	},
	reflecttype: {
		num: 513,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Reflect Type",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the user's types to become the same as the current types of the target. If the target's current types include typeless and a non-added type, typeless is ignored. If the target's current types include typeless and an added type from Forest's Curse or Trick-or-Treat, typeless is copied as the Normal type instead. Fails if the user is an Arceus or a Silvally, or if the target's current type is typeless alone.",
		shortDesc: "User becomes the same type as the target."
	},
	refresh: {
		num: 287,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Refresh",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "heal"
		},
		contestType: "Cute",
		desc: "The user cures its burn, poison, or paralysis. Fails if the user is not burned, poisoned, or paralyzed.",
		shortDesc: "User cures its burn, poison, or paralysis."
	},
	relicsong: {
		num: 547,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		isNonstandard: "Past",
		name: "Relic Song",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		secondary: {
			chance: 10,
			status: "slp"
		},
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Beautiful",
		desc: "Has a 10% chance to cause the target to fall asleep. If this move is successful on at least one target and the user is a Meloetta, it changes to Pirouette Forme if it is currently in Aria Forme, or changes to Aria Forme if it is currently in Pirouette Forme. This forme change does not happen if the Meloetta has the Sheer Force Ability. The Pirouette Forme reverts to Aria Forme when Meloetta is not active.",
		shortDesc: "10% chance to sleep foe(s). Meloetta transforms."
	},
	rest: {
		num: 156,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rest",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "The user falls asleep for the next two turns and restores all of its HP, curing itself of any major status condition in the process. Fails if the user has full HP, is already asleep, or if another effect is preventing sleep.",
		shortDesc: "User sleeps 2 turns and restores HP and status."
	},
	retaliate: {
		num: 514,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Retaliate",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "Power doubles if one of the user's party members fainted last turn.",
		shortDesc: "Power doubles if an ally fainted last turn."
	},
	"return": {
		num: 216,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Return",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cute",
		desc: "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
		shortDesc: "Max 102 power at maximum Happiness."
	},
	revelationdance: {
		num: 686,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Past",
		name: "Revelation Dance",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			dance: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
		shortDesc: "Type varies based on the user's primary type."
	},
	revenge: {
		num: 279,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Revenge",
		pp: 10,
		priority: -4,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "Power doubles if the user was hit by the target this turn.",
		shortDesc: "Power doubles if user is damaged by the target."
	},
	reversal: {
		num: 179,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Reversal",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {
			basePower: 160
		},
		contestType: "Cool",
		desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
		shortDesc: "More power the less HP the user has left."
	},
	risingvoltage: {
		num: 804,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Rising Voltage",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		maxMove: {
			basePower: 140
		},
		desc: "If the current terrain is Electric Terrain and the target is grounded, this move's power is doubled.",
		shortDesc: "2x power if target is grounded in Electric Terrain."
	},
	roar: {
		num: 46,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Roar",
		pp: 20,
		priority: -6,
		flags: {
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1,
			mystery: 1
		},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cool",
		desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
		shortDesc: "Forces the target to switch to a random ally."
	},
	roaroftime: {
		num: 459,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		isNonstandard: "Past",
		name: "Roar of Time",
		pp: 5,
		priority: 0,
		flags: {
			recharge: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	rockblast: {
		num: 350,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		name: "Rock Blast",
		pp: 10,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Rock",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Tough",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	rockclimb: {
		num: 431,
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rock Climb",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			volatileStatus: "confusion"
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target."
	},
	rockpolish: {
		num: 397,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rock Polish",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			spe: 2
		},
		secondary: null,
		target: "self",
		type: "Rock",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Tough",
		desc: "Raises the user's Speed by 2 stages.",
		shortDesc: "Raises the user's Speed by 2."
	},
	rockslide: {
		num: 157,
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		name: "Rock Slide",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Tough",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the foe(s)."
	},
	rocksmash: {
		num: 249,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Rock Smash",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Defense by 1."
	},
	rockthrow: {
		num: 88,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		name: "Rock Throw",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	rocktomb: {
		num: 317,
		accuracy: 95,
		basePower: 60,
		category: "Physical",
		name: "Rock Tomb",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1
			}
		},
		target: "normal",
		type: "Rock",
		contestType: "Clever",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1."
	},
	rockwrecker: {
		num: 439,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		name: "Rock Wrecker",
		pp: 5,
		priority: 0,
		flags: {
			bullet: 1,
			recharge: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "mustrecharge"
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn."
	},
	roleplay: {
		num: 272,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Role Play",
		pp: 10,
		priority: 0,
		flags: {
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Cute",
		desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or already matches the target, or if the target's Ability is Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, or Zen Mode.",
		shortDesc: "User replaces its Ability with the target's."
	},
	rollingkick: {
		num: 27,
		accuracy: 85,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rolling Kick",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	rollout: {
		num: 205,
		accuracy: 90,
		basePower: 30,
		category: "Physical",
		name: "Rollout",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		condition: {
			duration: 2,
			onLockMove: "rollout"
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cute",
		desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn. If this move hits an active Disguise during the effect, the power multiplier is paused but the turn counter is not, potentially allowing the multiplier to be used on the user's next move after this effect ends.",
		shortDesc: "Power doubles with each hit. Repeats for 5 turns."
	},
	roost: {
		num: 355,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Roost",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		heal: [1, 2],
		self: {
			volatileStatus: "roost"
		},
		condition: {
			duration: 1,
			onResidualOrder: 20,
			onTypePriority: -1
		},
		secondary: null,
		target: "self",
		type: "Flying",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "The user restores 1/2 of its maximum HP, rounded half up. Until the end of the turn, Flying-type users lose their Flying type and pure Flying-type users become Normal type. Does nothing if the user's HP is full.",
		shortDesc: "Heals 50% HP. Flying-type removed 'til turn ends."
	},
	rototiller: {
		num: 563,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Rototiller",
		pp: 10,
		priority: 0,
		flags: {
			distance: 1,
			nonsky: 1
		},
		secondary: null,
		target: "all",
		type: "Ground",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Tough",
		desc: "Raises the Attack and Special Attack of all grounded Grass-type Pokemon on the field by 1 stage.",
		shortDesc: "Raises Atk/Sp. Atk of grounded Grass types by 1."
	},
	round: {
		num: 496,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Round",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		desc: "If there are other active Pokemon that chose this move for use this turn, those Pokemon take their turn immediately after the user, in Speed order, and this move's power is 120 for each other user.",
		shortDesc: "Power doubles if others used Round this turn."
	},
	sacredfire: {
		num: 221,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sacred Fire",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			defrost: 1
		},
		secondary: {
			chance: 50,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		desc: "Has a 50% chance to burn the target.",
		shortDesc: "50% chance to burn the target. Thaws user."
	},
	sacredsword: {
		num: 533,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Sacred Sword",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "Ignores the target's stat stage changes, including evasiveness.",
		shortDesc: "Ignores the target's stat stage changes."
	},
	safeguard: {
		num: 219,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Safeguard",
		pp: 25,
		priority: 0,
		flags: {
			snatch: 1
		},
		sideCondition: "safeguard",
		condition: {
			duration: 5,
			onResidualOrder: 21,
			onResidualSubOrder: 2
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Beautiful",
		desc: "For 5 turns, the user and its party members cannot have major status conditions or confusion inflicted on them by other Pokemon. It is removed from the user's side if the user or an ally is successfully hit by Defog. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, protects user's party from status."
	},
	sandattack: {
		num: 28,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sand Attack",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			accuracy: -1
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {
			boost: {
				evasion: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1."
	},
	sandstorm: {
		num: 201,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sandstorm",
		pp: 10,
		priority: 0,
		flags: {},
		weather: "Sandstorm",
		secondary: null,
		target: "all",
		type: "Rock",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Tough",
		desc: "For 5 turns, the weather becomes Sandstorm. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are a Ground, Rock, or Steel type, or have the Magic Guard, Overcoat, Sand Force, Sand Rush, or Sand Veil Abilities. During the effect, the Special Defense of Rock-type Pokemon is multiplied by 1.5 when taking damage from a special attack. Lasts for 8 turns if the user is holding Smooth Rock. Fails if the current weather is Sandstorm.",
		shortDesc: "For 5 turns, a sandstorm rages."
	},
	sandtomb: {
		num: 328,
		accuracy: 85,
		basePower: 35,
		category: "Physical",
		name: "Sand Tomb",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns."
	},
	sappyseed: {
		num: 738,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Sappy Seed",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
		desc: "This move summons Leech Seed on the foe.",
		shortDesc: "Summons Leech Seed."
	},
	savagespinout: {
		num: 634,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Savage Spin-Out",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "buginiumz",
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	scald: {
		num: 503,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Scald",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			defrost: 1
		},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: "brn"
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
		desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "30% chance to burn the target. Thaws target."
	},
	scaleshot: {
		num: 799,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		name: "Scale Shot",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		selfBoost: {
			boosts: {
				def: -1,
				spe: 1
			}
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 130
		},
		desc: "Hits two to five times. Lowers the user's Defense by 1 stage and raises the user's Speed by 1 stage after the last hit. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times. User: -1 Def, +1 Spe after last hit."
	},
	scaryface: {
		num: 184,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Scary Face",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		boosts: {
			spe: -2
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Tough",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the target's Speed by 2."
	},
	scorchingsands: {
		num: 815,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Scorching Sands",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			defrost: 1
		},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: "brn"
		},
		target: "normal",
		type: "Ground",
		desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "30% chance to burn the target. Thaws target."
	},
	scratch: {
		num: 10,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Scratch",
		pp: 35,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	screech: {
		num: 103,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Screech",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1,
			mystery: 1
		},
		boosts: {
			def: -2
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Clever",
		desc: "Lowers the target's Defense by 2 stages.",
		shortDesc: "Lowers the target's Defense by 2."
	},
	searingshot: {
		num: 545,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Searing Shot",
		pp: 5,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "brn"
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Cool",
		desc: "Has a 30% chance to burn the target.",
		shortDesc: "30% chance to burn adjacent Pokemon."
	},
	searingsunrazesmash: {
		num: 724,
		accuracy: true,
		basePower: 200,
		category: "Physical",
		isNonstandard: "Past",
		name: "Searing Sunraze Smash",
		pp: 1,
		priority: 0,
		flags: {
			contact: 1
		},
		isZ: "solganiumz",
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		desc: "This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the Abilities of other Pokemon."
	},
	secretpower: {
		num: 290,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Secret Power",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		desc: "Has a 30% chance to cause a secondary effect on the target based on the battle terrain. Causes paralysis on the regular Wi-Fi terrain, causes paralysis during Electric Terrain, lowers Special Attack by 1 stage during Misty Terrain, causes sleep during Grassy Terrain and lowers Speed by 1 stage during Psychic Terrain.",
		shortDesc: "Effect varies with terrain. (30% paralysis chance)"
	},
	secretsword: {
		num: 548,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		defensiveCategory: "Physical",
		name: "Secret Sword",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Beautiful",
		desc: "Deals damage to the target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def."
	},
	seedbomb: {
		num: 402,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Seed Bomb",
		pp: 15,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	seedflare: {
		num: 465,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		isNonstandard: "Past",
		name: "Seed Flare",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 40,
			boosts: {
				spd: -2
			}
		},
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
		desc: "Has a 40% chance to lower the target's Special Defense by 2 stages.",
		shortDesc: "40% chance to lower the target's Sp. Def by 2."
	},
	seismictoss: {
		num: 69,
		accuracy: 100,
		basePower: 0,
		damage: "level",
		category: "Physical",
		name: "Seismic Toss",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		maxMove: {
			basePower: 75
		},
		contestType: "Tough",
		desc: "Deals damage to the target equal to the user's level.",
		shortDesc: "Does damage equal to the user's level."
	},
	selfdestruct: {
		num: 120,
		accuracy: 100,
		basePower: 200,
		category: "Physical",
		name: "Self-Destruct",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful",
		desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "Hits adjacent Pokemon. The user faints."
	},
	shadowball: {
		num: 247,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Shadow Ball",
		pp: 15,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
		desc: "Has a 20% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1."
	},
	shadowbone: {
		num: 708,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Shadow Bone",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1."
	},
	shadowclaw: {
		num: 421,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Shadow Claw",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	shadowforce: {
		num: 467,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		isNonstandard: "Past",
		name: "Shadow Force",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			charge: 1,
			mirror: 1
		},
		breaksProtect: true,
		condition: {
			duration: 2,
			onInvulnerability: false
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Disappears turn 1. Hits turn 2. Breaks protection."
	},
	shadowpunch: {
		num: 325,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		name: "Shadow Punch",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy."
	},
	shadowsneak: {
		num: 425,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Shadow Sneak",
		pp: 30,
		priority: 1,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	shadowstrike: {
		num: 0,
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		isNonstandard: "CAP",
		name: "Shadow Strike",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 50,
			boosts: {
				def: -1
			}
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Defense by 1."
	},
	sharpen: {
		num: 159,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Sharpen",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			atk: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Cute",
		desc: "Raises the user's Attack by 1 stage.",
		shortDesc: "Raises the user's Attack by 1."
	},
	shatteredpsyche: {
		num: 648,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Shattered Psyche",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "psychiumz",
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	sheercold: {
		num: 329,
		accuracy: 30,
		basePower: 0,
		category: "Special",
		name: "Sheer Cold",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		ohko: "Ice",
		target: "normal",
		type: "Ice",
		zMove: {
			basePower: 180
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Beautiful",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + X)%, where X is 30 if the user is an Ice type and 20 otherwise, and fails if the target is at a higher level. Ice-type Pokemon and Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs non-Ice targets. Fails if user's lower level."
	},
	shellsidearm: {
		num: 801,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Shell Side Arm",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			status: "psn"
		},
		target: "normal",
		type: "Poison",
		desc: "Has a 20% chance to poison the target. This move becomes a physical attack that makes contact if the value of ((((2 * the user's level / 5 + 2) * 90 * X) / Y) / 50), where X is the user's Attack stat and Y is the target's Defense stat, is greater than the same value where X is the user's Special Attack stat and Y is the target's Special Defense stat. No stat modifiers other than stat stage changes are considered for this purpose. If the two values are equal, this move chooses a damage category at random.",
		shortDesc: "20% psn. Physical+contact if it would be stronger."
	},
	shellsmash: {
		num: 504,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shell Smash",
		pp: 15,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: -1,
			spd: -1,
			atk: 2,
			spa: 2,
			spe: 2
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Tough",
		desc: "Lowers the user's Defense and Special Defense by 1 stage. Raises the user's Attack, Special Attack, and Speed by 2 stages.",
		shortDesc: "Lowers Def, SpD by 1; raises Atk, SpA, Spe by 2."
	},
	shelltrap: {
		num: 704,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Shell Trap",
		pp: 5,
		priority: -3,
		flags: {
			protect: 1
		},
		condition: {
			duration: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
		desc: "Fails unless the user is hit by a physical attack from an opponent this turn before it can execute the move. If the user was hit and has not fainted, it attacks immediately after being hit, and the effect ends. If the opponent's physical attack had a secondary effect removed by the Sheer Force Ability, it does not count for the purposes of this effect.",
		shortDesc: "User must take physical damage before moving."
	},
	shiftgear: {
		num: 508,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shift Gear",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			spe: 2,
			atk: 1
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "Raises the user's Speed by 2 stages and its Attack by 1 stage.",
		shortDesc: "Raises the user's Speed by 2 and Attack by 1."
	},
	shockwave: {
		num: 351,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Shock Wave",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy."
	},
	shoreup: {
		num: 659,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shore Up",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		secondary: null,
		target: "self",
		type: "Ground",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "The user restores 1/2 of its maximum HP, rounded half down. If the weather is Sandstorm, the user instead restores 2/3 of its maximum HP, rounded half down.",
		shortDesc: "User restores 1/2 its max HP; 2/3 in Sandstorm."
	},
	signalbeam: {
		num: 324,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		isNonstandard: "Past",
		name: "Signal Beam",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			volatileStatus: "confusion"
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
		desc: "Has a 10% chance to confuse the target.",
		shortDesc: "10% chance to confuse the target."
	},
	silverwind: {
		num: 318,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Past",
		name: "Silver Wind",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1
				}
			}
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
		desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "10% chance to raise all stats by 1 (not acc/eva)."
	},
	simplebeam: {
		num: 493,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Simple Beam",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Cute",
		desc: "Causes the target's Ability to become Simple. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Simple, Stance Change, Truant, or Zen Mode.",
		shortDesc: "The target's Ability becomes Simple."
	},
	sing: {
		num: 47,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Sing",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		status: "slp",
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Cute",
		desc: "Causes the target to fall asleep.",
		shortDesc: "Causes the target to fall asleep."
	},
	sinisterarrowraid: {
		num: 695,
		accuracy: true,
		basePower: 180,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sinister Arrow Raid",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "decidiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	sizzlyslide: {
		num: 735,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Sizzly Slide",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			defrost: 1
		},
		secondary: {
			chance: 100,
			status: "brn"
		},
		target: "normal",
		type: "Fire",
		contestType: "Clever",
		desc: "Has a 100% chance to burn the foe.",
		shortDesc: "100% chance to burn the foe."
	},
	sketch: {
		num: 166,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Sketch",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "This move is permanently replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, or if the move is Chatter, Sketch, Struggle, or any move the user knows.",
		shortDesc: "Permanently copies the last move target used."
	},
	skillswap: {
		num: 285,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Skill Swap",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode.",
		shortDesc: "The user and the target trade Abilities."
	},
	skittersmack: {
		num: 806,
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		name: "Skitter Smack",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1
			}
		},
		target: "normal",
		type: "Bug",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower target's Sp. Atk by 1."
	},
	skullbash: {
		num: 130,
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		name: "Skull Bash",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			charge: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "This attack charges on the first turn and executes on the second. Raises the user's Defense by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Raises user's Defense by 1 on turn 1. Hits turn 2."
	},
	skyattack: {
		num: 143,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		name: "Sky Attack",
		pp: 5,
		priority: 0,
		flags: {
			charge: 1,
			protect: 1,
			mirror: 1,
			distance: 1
		},
		critRatio: 2,
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "Has a 30% chance to flinch the target and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then hits turn 2. 30% flinch. High crit."
	},
	skydrop: {
		num: 507,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sky Drop",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			charge: 1,
			protect: 1,
			mirror: 1,
			gravity: 1,
			distance: 1
		},
		condition: {
			duration: 2,
			onFoeTrapPokemonPriority: -15,
			onFoeBeforeMovePriority: 12,
			onRedirectTargetPriority: 99
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Tough",
		desc: "This attack takes the target into the air with the user on the first turn and executes on the second. Pokemon weighing 200 kg or more cannot be lifted. On the first turn, the user and the target avoid all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister. The user and the target cannot make a move between turns, but the target can select a move to use. This move cannot damage Flying-type Pokemon. Fails on the first turn if the target is an ally, if the target has a substitute, or if the target is using Bounce, Dig, Dive, Fly, Phantom Force, Shadow Force, or Sky Drop.",
		shortDesc: "User and foe fly up turn 1. Damages on turn 2."
	},
	skyuppercut: {
		num: 327,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sky Uppercut",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "Can hit Pokemon using Bounce, Fly, or Sky Drop."
	},
	slackoff: {
		num: 303,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Slack Off",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP."
	},
	slam: {
		num: 21,
		accuracy: 75,
		basePower: 80,
		category: "Physical",
		name: "Slam",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	slash: {
		num: 163,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Slash",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	sleeppowder: {
		num: 79,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sleep Powder",
		pp: 15,
		priority: 0,
		flags: {
			powder: 1,
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "slp",
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the target to fall asleep.",
		shortDesc: "Causes the target to fall asleep."
	},
	sleeptalk: {
		num: 214,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sleep Talk",
		pp: 10,
		priority: 0,
		flags: {},
		sleepUsable: true,
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "crit2"
		},
		contestType: "Cute",
		desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Celebrate, Chatter, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Me First, Metronome, Mimic, Mirror Move, Nature Power, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, any two-turn move, or any Max Move.",
		shortDesc: "User must be asleep. Uses another known move."
	},
	sludge: {
		num: 124,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Sludge",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "psn"
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target."
	},
	sludgebomb: {
		num: 188,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Sludge Bomb",
		pp: 10,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "psn"
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target."
	},
	sludgewave: {
		num: 482,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Sludge Wave",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "psn"
		},
		target: "allAdjacent",
		type: "Poison",
		contestType: "Tough",
		desc: "Has a 10% chance to poison the target.",
		shortDesc: "10% chance to poison adjacent Pokemon."
	},
	smackdown: {
		num: 479,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Smack Down",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		volatileStatus: "smackdown",
		condition: {
			noCopy: true
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		desc: "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target.",
		shortDesc: "Removes the target's Ground immunity."
	},
	smartstrike: {
		num: 684,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Smart Strike",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy."
	},
	smellingsalts: {
		num: 265,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Smelling Salts",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Power doubles if the target is paralyzed. If the user has not fainted, the target is cured of paralysis.",
		shortDesc: "Power doubles if target is paralyzed, and cures it."
	},
	smog: {
		num: 123,
		accuracy: 70,
		basePower: 30,
		category: "Special",
		name: "Smog",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 40,
			status: "psn"
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		desc: "Has a 40% chance to poison the target.",
		shortDesc: "40% chance to poison the target."
	},
	smokescreen: {
		num: 108,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Smokescreen",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			accuracy: -1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				evasion: 1
			}
		},
		contestType: "Clever",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1."
	},
	snaptrap: {
		num: 779,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		name: "Snap Trap",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "normal",
		type: "Grass",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns."
	},
	snarl: {
		num: 555,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Snarl",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Tough",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Sp. Atk by 1."
	},
	snatch: {
		num: 289,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Snatch",
		pp: 10,
		priority: 4,
		flags: {
			authentic: 1
		},
		volatileStatus: "snatch",
		condition: {
			duration: 1
		},
		secondary: null,
		pressureTarget: "foeSide",
		target: "self",
		type: "Dark",
		zMove: {
			boost: {
				spe: 2
			}
		},
		contestType: "Clever",
		desc: "If another Pokemon uses certain non-damaging moves this turn, the user steals that move to use itself. If multiple Pokemon use one of those moves this turn, the applicable moves are all stolen by the first Pokemon in turn order that used this move this turn. This effect is ignored while the user is under the effect of Sky Drop.",
		shortDesc: "User steals certain support moves to use itself."
	},
	snipeshot: {
		num: 745,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Snipe Shot",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		tracksTarget: true,
		secondary: null,
		target: "normal",
		type: "Water",
		desc: "Has a higher chance for a critical hit. This move cannot be redirected to a different target by any effect.",
		shortDesc: "High critical hit ratio. Cannot be redirected."
	},
	snore: {
		num: 173,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Snore",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		sleepUsable: true,
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "Has a 30% chance to flinch the target. Fails if the user is not asleep.",
		shortDesc: "User must be asleep. 30% chance to flinch target."
	},
	soak: {
		num: 487,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Soak",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Cute",
		desc: "Causes the target to become a Water type. Fails if the target is an Arceus or a Silvally, or if the target is already purely Water type.",
		shortDesc: "Changes the target's type to Water."
	},
	softboiled: {
		num: 135,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Soft-Boiled",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP."
	},
	solarbeam: {
		num: 76,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Solar Beam",
		pp: 10,
		priority: 0,
		flags: {
			charge: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.",
		shortDesc: "Charges turn 1. Hits turn 2. No charge in sunlight."
	},
	solarblade: {
		num: 669,
		accuracy: 100,
		basePower: 125,
		category: "Physical",
		name: "Solar Blade",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			charge: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.",
		shortDesc: "Charges turn 1. Hits turn 2. No charge in sunlight."
	},
	sonicboom: {
		num: 49,
		accuracy: 90,
		basePower: 0,
		damage: 20,
		category: "Special",
		isNonstandard: "Past",
		name: "Sonic Boom",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "Deals 20 HP of damage to the target.",
		shortDesc: "Always does 20 HP of damage."
	},
	soulstealing7starstrike: {
		num: 699,
		accuracy: true,
		basePower: 195,
		category: "Physical",
		isNonstandard: "Past",
		name: "Soul-Stealing 7-Star Strike",
		pp: 1,
		priority: 0,
		flags: {
			contact: 1
		},
		isZ: "marshadiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	spacialrend: {
		num: 460,
		accuracy: 95,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Spacial Rend",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	spark: {
		num: 209,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Spark",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target."
	},
	sparklingaria: {
		num: 664,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Sparkling Aria",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		secondary: {
			dustproof: true,
			chance: 100
		},
		target: "allAdjacent",
		type: "Water",
		contestType: "Tough",
		desc: "If the user has not fainted, the target is cured of its burn.",
		shortDesc: "The target is cured of its burn."
	},
	sparklyswirl: {
		num: 740,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Sparkly Swirl",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1
		},
		self: {},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Clever",
		desc: "Every Pokemon in the user's party is cured of its major status condition.",
		shortDesc: "Cures the user's party of all status conditions."
	},
	spectralthief: {
		num: 712,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Spectral Thief",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			authentic: 1
		},
		stealsBoosts: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		desc: "The target's stat stages greater than 0 are stolen from it and applied to the user before dealing damage.",
		shortDesc: "Steals target's boosts before dealing damage."
	},
	speedswap: {
		num: 683,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Speed Swap",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			authentic: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "The user swaps its Speed stat with the target. Stat stage changes are unaffected.",
		shortDesc: "Swaps Speed stat with target."
	},
	spiderweb: {
		num: 169,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Spider Web",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out."
	},
	spikecannon: {
		num: 131,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		isNonstandard: "Past",
		name: "Spike Cannon",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {
			basePower: 120
		},
		contestType: "Cool",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	spikes: {
		num: 191,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spikes",
		pp: 20,
		priority: 0,
		flags: {
			reflectable: 1,
			nonsky: 1
		},
		sideCondition: "spikes",
		condition: {},
		secondary: null,
		target: "foeSide",
		type: "Ground",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to three times before failing. Opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
		shortDesc: "Hurts grounded foes on switch-in. Max 3 layers."
	},
	spikyshield: {
		num: 596,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spiky Shield",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: "spikyshield",
		condition: {
			duration: 1,
			onTryHitPriority: 3
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Tough",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user lose 1/8 of their maximum HP, rounded down. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from moves. Contact: loses 1/8 max HP."
	},
	spiritbreak: {
		num: 789,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Spirit Break",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1
			}
		},
		target: "normal",
		type: "Fairy",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Sp. Atk by 1."
	},
	spiritshackle: {
		num: 662,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Spirit Shackle",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100
		},
		target: "normal",
		type: "Ghost",
		contestType: "Tough",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out."
	},
	spitup: {
		num: 255,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		name: "Spit Up",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Power is equal to 100 times the user's Stockpile count. Fails if the user's Stockpile count is 0. Whether or not this move is successful, the user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
		shortDesc: "More power with more uses of Stockpile."
	},
	spite: {
		num: 180,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spite",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {
			effect: "heal"
		},
		contestType: "Tough",
		desc: "Causes the target's last move used to lose 4 PP. Fails if the target has not made a move, if the move has 0 PP, or if it no longer knows the move.",
		shortDesc: "Lowers the PP of the target's last move by 4."
	},
	splash: {
		num: 150,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Splash",
		pp: 40,
		priority: 0,
		flags: {
			gravity: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				atk: 3
			}
		},
		contestType: "Cute",
		desc: "No competitive use.",
		shortDesc: "No competitive use."
	},
	splinteredstormshards: {
		num: 727,
		accuracy: true,
		basePower: 190,
		category: "Physical",
		isNonstandard: "Past",
		name: "Splintered Stormshards",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "lycaniumz",
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
		desc: "Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
		shortDesc: "Ends the effects of terrain."
	},
	splishysplash: {
		num: 730,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Splishy Splash",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Cool",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target."
	},
	spore: {
		num: 147,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spore",
		pp: 15,
		priority: 0,
		flags: {
			powder: 1,
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "slp",
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "Causes the target to fall asleep.",
		shortDesc: "Causes the target to fall asleep."
	},
	spotlight: {
		num: 671,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spotlight",
		pp: 15,
		priority: 3,
		flags: {
			protect: 1,
			reflectable: 1,
			mystery: 1
		},
		volatileStatus: "spotlight",
		condition: {
			duration: 1,
			onFoeRedirectTargetPriority: 2
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Cute",
		desc: "Until the end of the turn, all single-target attacks from opponents of the target are redirected to the target. Such attacks are redirected to the target before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal.",
		shortDesc: "Target's foes' moves are redirected to it this turn."
	},
	stealthrock: {
		num: 446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stealth Rock",
		pp: 20,
		priority: 0,
		flags: {
			reflectable: 1
		},
		sideCondition: "stealthrock",
		condition: {},
		secondary: null,
		target: "foeSide",
		type: "Rock",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cool",
		desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Fails if the effect is already active on the opposing side. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
		shortDesc: "Hurts foes on switch-in. Factors Rock weakness."
	},
	steameruption: {
		num: 592,
		accuracy: 95,
		basePower: 110,
		category: "Special",
		isNonstandard: "Past",
		name: "Steam Eruption",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			defrost: 1
		},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: "brn"
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "30% chance to burn the target. Thaws target."
	},
	steamroller: {
		num: 537,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		isNonstandard: "Past",
		name: "Steamroller",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Bug",
		contestType: "Tough",
		desc: "Has a 30% chance to flinch the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "30% chance to flinch the target."
	},
	steelbeam: {
		num: 796,
		accuracy: 95,
		basePower: 140,
		category: "Special",
		name: "Steel Beam",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		mindBlownRecoil: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		desc: "Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability.",
		shortDesc: "User loses 50% max HP."
	},
	steelroller: {
		num: 798,
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		name: "Steel Roller",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		desc: "Fails if there is no terrain active. Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
		shortDesc: "Fails if there is no terrain active. Ends the effects of terrain."
	},
	steelwing: {
		num: 211,
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		name: "Steel Wing",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1
				}
			}
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		desc: "Has a 10% chance to raise the user's Defense by 1 stage.",
		shortDesc: "10% chance to raise the user's Defense by 1."
	},
	stickyweb: {
		num: 564,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sticky Web",
		pp: 20,
		priority: 0,
		flags: {
			reflectable: 1
		},
		sideCondition: "stickyweb",
		condition: {},
		secondary: null,
		target: "foeSide",
		type: "Bug",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Tough",
		desc: "Sets up a hazard on the opposing side of the field, lowering the Speed by 1 stage of each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Fails if the effect is already active on the opposing side. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
		shortDesc: "Lowers Speed of grounded foes by 1 on switch-in."
	},
	stockpile: {
		num: 254,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stockpile",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		volatileStatus: "stockpile",
		condition: {
			noCopy: true
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "heal"
		},
		contestType: "Tough",
		desc: "Raises the user's Defense and Special Defense by 1 stage. The user's Stockpile count increases by 1. Fails if the user's Stockpile count is 3. The user's Stockpile count is reset to 0 when it is no longer active.",
		shortDesc: "Raises user's Defense, Sp. Def by 1. Max 3 uses."
	},
	stokedsparksurfer: {
		num: 700,
		accuracy: true,
		basePower: 175,
		category: "Special",
		isNonstandard: "Past",
		name: "Stoked Sparksurfer",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "aloraichiumz",
		secondary: {
			chance: 100,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 100% chance to paralyze the target.",
		shortDesc: "100% chance to paralyze the target."
	},
	stomp: {
		num: 23,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Stomp",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Has a 30% chance to flinch the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "30% chance to flinch the target."
	},
	stompingtantrum: {
		num: 707,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Stomping Tantrum",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		desc: "Power doubles if the user's last move on the previous turn, including moves called by other moves or those used through Instruct, Magic Coat, Snatch, or the Dancer or Magic Bounce Abilities, failed to do any of its normal effects, not including damage from an unsuccessful High Jump Kick, Jump Kick, or Mind Blown, or if the user was prevented from moving by any effect other than recharging or Sky Drop. A move that was blocked by Baneful Bunker, Detect, King's Shield, Protect, Spiky Shield, Crafty Shield, Mat Block, Quick Guard, or Wide Guard will not double this move's power, nor will Bounce or Fly ending early due to the effect of Gravity, Smack Down, or Thousand Arrows.",
		shortDesc: "Power doubles if the user's last move failed."
	},
	stoneedge: {
		num: 444,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		name: "Stone Edge",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio."
	},
	storedpower: {
		num: 500,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Stored Power",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Clever",
		desc: "Power is equal to 20+(X*20), where X is the user's total stat stage changes that are greater than 0.",
		shortDesc: " + 20 power for each of the user's stat boosts."
	},
	stormthrow: {
		num: 480,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Storm Throw",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
		shortDesc: "Always results in a critical hit."
	},
	strangesteam: {
		num: 790,
		accuracy: 95,
		basePower: 90,
		category: "Special",
		name: "Strange Steam",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			volatileStatus: "confusion"
		},
		target: "normal",
		type: "Fairy",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target."
	},
	strength: {
		num: 70,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Strength",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	strengthsap: {
		num: 668,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Strength Sap",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			heal: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Attack by 1 stage. The user restores its HP equal to the target's Attack stat calculated with its stat stage before this move was used. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. Fails if the target's Attack stat stage is -6.",
		shortDesc: "User heals HP=target's Atk stat. Lowers Atk by 1."
	},
	stringshot: {
		num: 81,
		accuracy: 95,
		basePower: 0,
		category: "Status",
		name: "String Shot",
		pp: 40,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			spe: -2
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Bug",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the foe(s) Speed by 2."
	},
	struggle: {
		num: 165,
		accuracy: true,
		basePower: 50,
		category: "Physical",
		name: "Struggle",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1
		},
		noSketch: true,
		struggleRecoil: true,
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Tough",
		desc: "Deals typeless damage to a random opposing Pokemon. If this move was successful, the user loses 1/4 of its maximum HP, rounded half up, and the Rock Head Ability does not prevent this. This move is automatically used if none of the user's known moves can be selected.",
		shortDesc: "User loses 1/4 of its max HP."
	},
	strugglebug: {
		num: 522,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Struggle Bug",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Bug",
		contestType: "Cute",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Sp. Atk by 1."
	},
	stuffcheeks: {
		num: 747,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stuff Cheeks",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		desc: "This move cannot be selected unless the user is holding a Berry. The user eats its Berry and raises its Defense by 2 stages. This effect is not prevented by the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if the user is not holding a Berry.",
		shortDesc: "Must hold Berry to use. User eats Berry, Def +2."
	},
	stunspore: {
		num: 78,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Stun Spore",
		pp: 30,
		priority: 0,
		flags: {
			powder: 1,
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "par",
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "Paralyzes the target.",
		shortDesc: "Paralyzes the target."
	},
	submission: {
		num: 66,
		accuracy: 80,
		basePower: 80,
		category: "Physical",
		name: "Submission",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil."
	},
	substitute: {
		num: 164,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Substitute",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			nonsky: 1
		},
		volatileStatus: "substitute",
		condition: {
			onTryPrimaryHitPriority: -1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "The user takes 1/4 of its maximum HP, rounded down, and puts it into a substitute to take its place in battle. The substitute is removed once enough damage is inflicted on it, or if the user switches out or faints. Baton Pass can be used to transfer the substitute to an ally, and the substitute will keep its remaining HP. Until the substitute is broken, it receives damage from all attacks made by other Pokemon and shields the user from status effects and stat stage changes caused by other Pokemon. Sound-based moves and Pokemon with the Infiltrator Ability ignore substitutes. The user still takes normal damage from weather and status effects while behind its substitute. If the substitute breaks during a multi-hit attack, the user will take damage from any remaining hits. If a substitute is created while the user is trapped by a binding move, the binding effect ends immediately. Fails if the user does not have enough HP remaining to create a substitute without fainting, or if it already has a substitute.",
		shortDesc: "User takes 1/4 its max HP to put in a substitute."
	},
	subzeroslammer: {
		num: 650,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Subzero Slammer",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "iciumz",
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	suckerpunch: {
		num: 389,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Sucker Punch",
		pp: 5,
		priority: 1,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		desc: "Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user.",
		shortDesc: "Usually goes first. Fails if target is not attacking."
	},
	sunnyday: {
		num: 241,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sunny Day",
		pp: 5,
		priority: 0,
		flags: {},
		weather: "sunnyday",
		secondary: null,
		target: "all",
		type: "Fire",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Beautiful",
		desc: "For 5 turns, the weather becomes Sunny Day. The damage of Fire-type attacks is multiplied by 1.5 and the damage of Water-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Heat Rock. Fails if the current weather is Sunny Day.",
		shortDesc: "For 5 turns, intense sunlight powers Fire moves."
	},
	sunsteelstrike: {
		num: 713,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Sunsteel Strike",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		desc: "This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the Abilities of other Pokemon."
	},
	superfang: {
		num: 162,
		accuracy: 90,
		basePower: 0,
		category: "Physical",
		name: "Super Fang",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
		shortDesc: "Does damage equal to 1/2 target's current HP."
	},
	superpower: {
		num: 276,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Superpower",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			boosts: {
				atk: -1,
				def: -1
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "Lowers the user's Attack and Defense by 1 stage.",
		shortDesc: "Lowers the user's Attack and Defense by 1."
	},
	supersonic: {
		num: 48,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Supersonic",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		volatileStatus: "confusion",
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the target to become confused.",
		shortDesc: "Causes the target to become confused."
	},
	supersonicskystrike: {
		num: 626,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Supersonic Skystrike",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "flyiniumz",
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	surf: {
		num: 57,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Surf",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "allAdjacent",
		type: "Water",
		contestType: "Beautiful",
		desc: "Damage doubles if the target is using Dive.",
		shortDesc: "Hits adjacent Pokemon. Double damage on Dive."
	},
	surgingstrikes: {
		num: 818,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Surging Strikes",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1
		},
		willCrit: true,
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Water",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 130
		},
		desc: "Hits three times. This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
		shortDesc: "Always results in a critical hit. Hits 3 times."
	},
	swagger: {
		num: 207,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Swagger",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		volatileStatus: "confusion",
		boosts: {
			atk: 2
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Cute",
		desc: "Raises the target's Attack by 2 stages and confuses it.",
		shortDesc: "Raises the target's Attack by 2 and confuses it."
	},
	swallow: {
		num: 256,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swallow",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Tough",
		desc: "The user restores its HP based on its Stockpile count. Restores 1/4 of its maximum HP if it's 1, 1/2 of its maximum HP if it's 2, both rounded half down, and all of its HP if it's 3. Fails if the user's Stockpile count is 0. The user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
		shortDesc: "Heals the user based on uses of Stockpile."
	},
	sweetkiss: {
		num: 186,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sweet Kiss",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		volatileStatus: "confusion",
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Cute",
		desc: "Causes the target to become confused.",
		shortDesc: "Causes the target to become confused."
	},
	sweetscent: {
		num: 230,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sweet Scent",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			evasion: -2
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {
			boost: {
				accuracy: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's evasiveness by 2 stages.",
		shortDesc: "Lowers the foe(s) evasiveness by 2."
	},
	swift: {
		num: 129,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Swift",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy. Hits foes."
	},
	switcheroo: {
		num: 415,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Switcheroo",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			boost: {
				spe: 2
			}
		},
		contestType: "Clever",
		desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
		shortDesc: "User switches its held item with the target's."
	},
	swordsdance: {
		num: 14,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swords Dance",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1,
			dance: 1
		},
		boosts: {
			atk: 2
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "Raises the user's Attack by 2 stages.",
		shortDesc: "Raises the user's Attack by 2."
	},
	synchronoise: {
		num: 485,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		isNonstandard: "Past",
		name: "Synchronoise",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacent",
		type: "Psychic",
		contestType: "Clever",
		desc: "The target is immune if it does not share a type with the user.",
		shortDesc: "Hits adjacent Pokemon sharing the user's type."
	},
	synthesis: {
		num: 235,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Synthesis",
		pp: 5,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Clever",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount."
	},
	tackle: {
		num: 33,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Tackle",
		pp: 35,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	tailglow: {
		num: 294,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Tail Glow",
		pp: 20,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			spa: 3
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {
			effect: "clearnegativeboost"
		},
		contestType: "Beautiful",
		desc: "Raises the user's Special Attack by 3 stages.",
		shortDesc: "Raises the user's Sp. Atk by 3."
	},
	tailslap: {
		num: 541,
		accuracy: 85,
		basePower: 25,
		category: "Physical",
		name: "Tail Slap",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 140
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cute",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn."
	},
	tailwhip: {
		num: 39,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tail Whip",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			def: -1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Defense by 1 stage.",
		shortDesc: "Lowers the foe(s) Defense by 1."
	},
	tailwind: {
		num: 366,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tailwind",
		pp: 15,
		priority: 0,
		flags: {
			snatch: 1
		},
		sideCondition: "tailwind",
		condition: {
			duration: 4,
			onResidualOrder: 21,
			onResidualSubOrder: 4
		},
		secondary: null,
		target: "allySide",
		type: "Flying",
		zMove: {
			effect: "crit2"
		},
		contestType: "Cool",
		desc: "For 4 turns, the user and its party members have their Speed doubled. Fails if this move is already in effect for the user's side.",
		shortDesc: "For 4 turns, allies' Speed is doubled."
	},
	takedown: {
		num: 36,
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		name: "Take Down",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil."
	},
	tarshot: {
		num: 749,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tar Shot",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		volatileStatus: "tarshot",
		condition: {
			onEffectivenessPriority: -2
		},
		boosts: {
			spe: -1
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		desc: "Lowers the target's Speed by 1 stage. Until the target switches out, the effectiveness of Fire-type moves is doubled against it.",
		shortDesc: "Target gets -1 Spe and becomes weaker to Fire."
	},
	taunt: {
		num: 269,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Taunt",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		volatileStatus: "taunt",
		condition: {
			duration: 3,
			onResidualOrder: 12,
			onBeforeMovePriority: 5
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Clever",
		desc: "Prevents the target from using non-damaging moves for its next three turns. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
		shortDesc: "Target can't use status moves its next 3 turns."
	},
	tearfullook: {
		num: 715,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tearful Look",
		pp: 20,
		priority: 0,
		flags: {
			reflectable: 1,
			mirror: 1
		},
		boosts: {
			atk: -1,
			spa: -1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Attack and Special Attack by 1 stage.",
		shortDesc: "Lowers the target's Attack and Sp. Atk by 1."
	},
	teatime: {
		num: 752,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Teatime",
		pp: 10,
		priority: 0,
		flags: {
			authentic: 1
		},
		secondary: null,
		target: "all",
		type: "Normal",
		desc: "All active Pokemon consume their held Berries. This effect is not prevented by substitutes, the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if no active Pokemon is holding a Berry.",
		shortDesc: "All active Pokemon consume held Berries."
	},
	technoblast: {
		num: 546,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		isNonstandard: "Past",
		name: "Techno Blast",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		desc: "This move's type depends on the user's held Drive.",
		shortDesc: "Type varies based on the held Drive."
	},
	tectonicrage: {
		num: 630,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Tectonic Rage",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "groundiumz",
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	teeterdance: {
		num: 298,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Teeter Dance",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			dance: 1
		},
		volatileStatus: "confusion",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Cute",
		desc: "Causes the target to become confused.",
		shortDesc: "Confuses adjacent Pokemon."
	},
	telekinesis: {
		num: 477,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Telekinesis",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			gravity: 1,
			mystery: 1
		},
		volatileStatus: "telekinesis",
		condition: {
			duration: 3,
			onAccuracyPriority: -1,
			onResidualOrder: 16
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spa: 1
			}
		},
		contestType: "Clever",
		desc: "For 3 turns, the target cannot avoid any attacks made against it, other than OHKO moves, as long as it remains active. During the effect, the target is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the target uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the target is under any of their effects. Fails if the target is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows. The target is immune to this move on use if its species is Diglett, Dugtrio, Alolan Diglett, Alolan Dugtrio, Sandygast, Palossand, or Gengar while Mega-Evolved. Mega Gengar cannot be under this effect by any means.",
		shortDesc: "For 3 turns, target floats but moves can't miss it."
	},
	teleport: {
		num: 100,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Teleport",
		pp: 20,
		priority: -6,
		flags: {},
		selfSwitch: true,
		onTryHit: true,
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {
			effect: "heal"
		},
		contestType: "Cool",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
		shortDesc: "User switches out."
	},
	terrainpulse: {
		num: 805,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Terrain Pulse",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			pulse: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		desc: "Power doubles if the user is grounded and a terrain is active, and this move's type changes to match. Electric type during Electric Terrain, Grass type during Grassy Terrain, Fairy type during Misty Terrain, and Psychic type during Psychic Terrain.",
		shortDesc: "User on terrain: power doubles, type varies."
	},
	thief: {
		num: 168,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Thief",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. The target's item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "If the user has no item, it steals the target's."
	},
	thousandarrows: {
		num: 614,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Thousand Arrows",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		volatileStatus: "smackdown",
		ignoreImmunity: {
			Ground: true
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		zMove: {
			basePower: 180
		},
		contestType: "Beautiful",
		desc: "This move can hit airborne Pokemon, which includes Flying-type Pokemon, Pokemon with the Levitate Ability, Pokemon holding an Air Balloon, and Pokemon under the effect of Magnet Rise or Telekinesis. If the target is a Flying type and is not already grounded, this move deals neutral damage regardless of its other type(s). This move can hit a target using Bounce, Fly, or Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target.",
		shortDesc: "Grounds adjacent foes. First hit neutral on Flying."
	},
	thousandwaves: {
		num: 615,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Thousand Waves",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		contestType: "Tough",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Hits adjacent foes. Prevents them from switching."
	},
	thrash: {
		num: 37,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Thrash",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			volatileStatus: "lockedmove"
		},
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Tough",
		desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards."
	},
	throatchop: {
		num: 675,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Throat Chop",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		condition: {
			duration: 2,
			onBeforeMovePriority: 6,
			onResidualOrder: 22
		},
		secondary: {
			chance: 100
		},
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		desc: "For 2 turns, the target cannot use sound-based moves.",
		shortDesc: "For 2 turns, the target cannot use sound moves."
	},
	thunder: {
		num: 87,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Thunder",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
		shortDesc: "30% chance to paralyze. Can't miss in rain."
	},
	thunderbolt: {
		num: 85,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Thunderbolt",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target."
	},
	thunderfang: {
		num: 422,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		name: "Thunder Fang",
		pp: 15,
		priority: 0,
		flags: {
			bite: 1,
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondaries: [{
			chance: 10,
			status: "par"
		}, {
			chance: 10,
			volatileStatus: "flinch"
		}],
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 10% chance to paralyze the target and a 10% chance to flinch it.",
		shortDesc: "10% chance to paralyze. 10% chance to flinch."
	},
	thunderpunch: {
		num: 9,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Thunder Punch",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1
		},
		secondary: {
			chance: 10,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target."
	},
	thundershock: {
		num: 84,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Thunder Shock",
		pp: 30,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 10,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target."
	},
	thunderwave: {
		num: 86,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Thunder Wave",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "par",
		ignoreImmunity: false,
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Cool",
		desc: "Paralyzes the target. This move does not ignore type immunity.",
		shortDesc: "Paralyzes the target."
	},
	tickle: {
		num: 321,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tickle",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		boosts: {
			atk: -1,
			def: -1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cute",
		desc: "Lowers the target's Attack and Defense by 1 stage.",
		shortDesc: "Lowers the target's Attack and Defense by 1."
	},
	topsyturvy: {
		num: 576,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Topsy-Turvy",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Clever",
		desc: "The target's positive stat stages become negative and vice versa. Fails if all of the target's stat stages are 0.",
		shortDesc: "Inverts the target's stat stages."
	},
	torment: {
		num: 259,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Torment",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			authentic: 1
		},
		volatileStatus: "torment",
		condition: {
			noCopy: true
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Tough",
		desc: "Prevents the target from selecting the same move for use two turns in a row. This effect ends when the target is no longer active.",
		shortDesc: "Target can't select the same move twice in a row."
	},
	toxic: {
		num: 92,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Toxic",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "tox",
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "Badly poisons the target. If a Poison-type Pokemon uses this move, the target cannot avoid the attack, even if the target is in the middle of a two-turn move.",
		shortDesc: "Badly poisons the target. Poison types can't miss."
	},
	toxicspikes: {
		num: 390,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Toxic Spikes",
		pp: 20,
		priority: 0,
		flags: {
			reflectable: 1,
			nonsky: 1
		},
		sideCondition: "toxicspikes",
		condition: {},
		secondary: null,
		target: "foeSide",
		type: "Poison",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "Sets up a hazard on the opposing side of the field, poisoning each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become poisoned with one layer and badly poisoned with two layers. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, is hit by Defog, or a grounded Poison-type Pokemon switches in. Safeguard prevents the opposing party from being poisoned on switch-in, but a substitute does not.",
		shortDesc: "Poisons grounded foes on switch-in. Max 2 layers."
	},
	toxicthread: {
		num: 672,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Toxic Thread",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "psn",
		boosts: {
			spe: -1
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Tough",
		desc: "Lowers the target's Speed by 1 stage and poisons it.",
		shortDesc: "Lowers the target's Speed by 1 and poisons it."
	},
	transform: {
		num: 144,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Transform",
		pp: 10,
		priority: 0,
		flags: {
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			effect: "heal"
		},
		contestType: "Clever",
		desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, Ability, weight, gender, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP, with a maximum of 5 PP each. The user can no longer change formes if it would have the ability to do so. This move fails if it hits a substitute, if either the user or the target is already transformed, or if either is behind an Illusion.",
		shortDesc: "Copies target's stats, moves, types, and Ability."
	},
	triattack: {
		num: 161,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Tri Attack",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20
		},
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		desc: "Has a 20% chance to either burn, freeze, or paralyze the target.",
		shortDesc: "20% chance to paralyze or burn or freeze target."
	},
	trick: {
		num: 271,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Trick",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {
			boost: {
				spe: 2
			}
		},
		contestType: "Clever",
		desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
		shortDesc: "User switches its held item with the target's."
	},
	trickortreat: {
		num: 567,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Trick-or-Treat",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {
			boost: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1
			}
		},
		contestType: "Cute",
		desc: "Causes the Ghost type to be added to the target, effectively making it have two or three types. Fails if the target is already a Ghost type. If Forest's Curse adds a type to the target, it replaces the type added by this move and vice versa.",
		shortDesc: "Adds Ghost to the target's type(s)."
	},
	trickroom: {
		num: 433,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Trick Room",
		pp: 5,
		priority: -7,
		flags: {
			mirror: 1
		},
		pseudoWeather: "trickroom",
		condition: {
			duration: 5,
			onResidualOrder: 23
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {
			boost: {
				accuracy: 1
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, the Speed of every Pokemon is recalculated for the purposes of determining turn order. During the effect, each Pokemon's Speed is considered to be (10000 - its normal Speed), and if this value is greater than 8191, 8192 is subtracted from it. If this move is used during the effect, the effect ends.",
		shortDesc: "Goes last. For 5 turns, turn order is reversed."
	},
	tripleaxel: {
		num: 813,
		accuracy: 90,
		basePower: 20,
		category: "Physical",
		name: "Triple Axel",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {
			basePower: 120
		},
		maxMove: {
			basePower: 140
		},
		desc: "Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
		shortDesc: "Hits 3 times. Each hit can miss, but power rises."
	},
	triplekick: {
		num: 167,
		accuracy: 90,
		basePower: 10,
		category: "Physical",
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {
			basePower: 120
		},
		maxMove: {
			basePower: 80
		},
		contestType: "Cool",
		desc: "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
		shortDesc: "Hits 3 times. Each hit can miss, but power rises."
	},
	tropkick: {
		num: 688,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Trop Kick",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1
			}
		},
		target: "normal",
		type: "Grass",
		contestType: "Cute",
		desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Attack by 1."
	},
	trumpcard: {
		num: 376,
		accuracy: true,
		basePower: 0,
		category: "Special",
		isNonstandard: "Past",
		name: "Trump Card",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Cool",
		desc: "The power of this move is based on the amount of PP remaining after normal PP reduction and the Pressure Ability resolve. 200 power for 0 PP, 80 power for 1 PP, 60 power for 2 PP, 50 power for 3 PP, and 40 power for 4 or more PP.",
		shortDesc: "More power the fewer PP this move has left."
	},
	twineedle: {
		num: 41,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		isNonstandard: "Past",
		name: "Twineedle",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		multihit: 2,
		secondary: {
			chance: 20,
			status: "psn"
		},
		target: "normal",
		type: "Bug",
		maxMove: {
			basePower: 100
		},
		contestType: "Cool",
		desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 20% chance to poison."
	},
	twinkletackle: {
		num: 656,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Twinkle Tackle",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fairiumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cool",
		desc: "Power is equal to the base move's Z-Power.",
		shortDesc: "Power is equal to the base move's Z-Power."
	},
	twister: {
		num: 239,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Twister",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			volatileStatus: "flinch"
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool",
		desc: "Has a 20% chance to flinch the target. Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "20% chance to flinch the foe(s)."
	},
	uturn: {
		num: 369,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "U-turn",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
		shortDesc: "User switches out after damaging the target."
	},
	uproar: {
		num: 253,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Uproar",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			sound: 1,
			authentic: 1
		},
		self: {
			volatileStatus: "uproar"
		},
		condition: {
			duration: 3,
			onLockMove: "uproar"
		},
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Cute",
		desc: "The user spends three turns locked into this move. This move targets an opponent at random on each turn. On the first of the three turns, all sleeping active Pokemon wake up. During the three turns, no active Pokemon can fall asleep by any means, and Pokemon switched in during the effect do not wake up. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
		shortDesc: "Lasts 3 turns. Active Pokemon cannot fall asleep."
	},
	vacuumwave: {
		num: 410,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Vacuum Wave",
		pp: 30,
		priority: 1,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "Usually goes first."
	},
	vcreate: {
		num: 557,
		accuracy: 95,
		basePower: 180,
		category: "Physical",
		name: "V-create",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		self: {
			boosts: {
				spe: -1,
				def: -1,
				spd: -1
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {
			basePower: 220
		},
		contestType: "Cool",
		desc: "Lowers the user's Speed, Defense, and Special Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense, Sp. Def, Speed by 1."
	},
	veeveevolley: {
		num: 741,
		accuracy: true,
		basePower: 0,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Veevee Volley",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
		shortDesc: "Max happiness: 102 power. Can't miss."
	},
	venomdrench: {
		num: 599,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Venom Drench",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Clever",
		desc: "Lowers the target's Attack, Special Attack, and Speed by 1 stage if the target is poisoned. Fails if the target is not poisoned.",
		shortDesc: "Lowers Atk/Sp. Atk/Speed of poisoned foes by 1."
	},
	venoshock: {
		num: 474,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Venoshock",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
		desc: "Power doubles if the target is poisoned.",
		shortDesc: "Power doubles if the target is poisoned."
	},
	vinewhip: {
		num: 22,
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		name: "Vine Whip",
		pp: 25,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	visegrip: {
		num: 11,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Vise Grip",
		pp: 30,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	vitalthrow: {
		num: 233,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Vital Throw",
		pp: 10,
		priority: -1,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy. Goes last."
	},
	voltswitch: {
		num: 521,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Volt Switch",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
		shortDesc: "User switches out after damaging the target."
	},
	volttackle: {
		num: 344,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Volt Tackle",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		recoil: [33, 100],
		secondary: {
			chance: 10,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 10% chance to paralyze the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil. 10% chance to paralyze target."
	},
	wakeupslap: {
		num: 358,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Wake-Up Slap",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		desc: "Power doubles if the target is asleep. If the user has not fainted, the target wakes up.",
		shortDesc: "Power doubles if target is asleep, and wakes it."
	},
	waterfall: {
		num: 127,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Waterfall",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
		desc: "Has a 20% chance to flinch the target.",
		shortDesc: "20% chance to flinch the target."
	},
	watergun: {
		num: 55,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Water Gun",
		pp: 25,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cute",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	waterpledge: {
		num: 518,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Water Pledge",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			nonsky: 1
		},
		condition: {
			duration: 4
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		desc: "If one of the user's allies chose to use Fire Pledge or Grass Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances but does not stack with the Serene Grace Ability. If combined with Grass Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Water Gem, and cannot be redirected by the Storm Drain Ability.",
		shortDesc: "Use with Grass or Fire Pledge for added effect."
	},
	waterpulse: {
		num: 352,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Water Pulse",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			pulse: 1,
			mirror: 1,
			distance: 1
		},
		secondary: {
			chance: 20,
			volatileStatus: "confusion"
		},
		target: "any",
		type: "Water",
		contestType: "Beautiful",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target."
	},
	watershuriken: {
		num: 594,
		accuracy: 100,
		basePower: 15,
		category: "Special",
		name: "Water Shuriken",
		pp: 20,
		priority: 1,
		flags: {
			protect: 1,
			mirror: 1
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is an Ash-Greninja with the Battle Bond Ability, this move has a power of 20 and always hits three times.",
		shortDesc: "Usually goes first. Hits 2-5 times in one turn."
	},
	watersport: {
		num: 346,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Water Sport",
		pp: 15,
		priority: 0,
		flags: {
			nonsky: 1
		},
		pseudoWeather: "watersport",
		condition: {
			duration: 5,
			onBasePowerPriority: 1,
			onResidualOrder: 21
		},
		secondary: null,
		target: "all",
		type: "Water",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Cute",
		desc: "For 5 turns, all Fire-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
		shortDesc: "For 5 turns, Fire-type attacks have 1/3 power."
	},
	waterspout: {
		num: 323,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Water Spout",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful",
		desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
		shortDesc: "Less power as user's HP decreases. Hits foe(s)."
	},
	weatherball: {
		num: 311,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Weather Ball",
		pp: 10,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 160
		},
		maxMove: {
			basePower: 130
		},
		contestType: "Beautiful",
		desc: "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Ice type during Hail, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day. If the user is holding Utility Umbrella and uses Weather Ball during Primordial Sea, Rain Dance, Desolate Land, or Sunny Day, the move is still Normal-type and does not have a base power boost.",
		shortDesc: "Power doubles and type varies in each weather."
	},
	whirlpool: {
		num: 250,
		accuracy: 85,
		basePower: 35,
		category: "Special",
		name: "Whirlpool",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1
		},
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns."
	},
	whirlwind: {
		num: 18,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Whirlwind",
		pp: 20,
		priority: -6,
		flags: {
			reflectable: 1,
			mirror: 1,
			authentic: 1,
			mystery: 1
		},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
		shortDesc: "Forces the target to switch to a random ally."
	},
	wickedblow: {
		num: 817,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Wicked Blow",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1
		},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
		shortDesc: "Always results in a critical hit."
	},
	wideguard: {
		num: 469,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wide Guard",
		pp: 10,
		priority: 3,
		flags: {
			snatch: 1
		},
		sideCondition: "wideguard",
		condition: {
			duration: 1,
			onTryHitPriority: 4
		},
		secondary: null,
		target: "allySide",
		type: "Rock",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Tough",
		desc: "The user and its party members are protected from moves made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		shortDesc: "Protects allies from multi-target moves this turn."
	},
	wildcharge: {
		num: 528,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Wild Charge",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Tough",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil."
	},
	willowisp: {
		num: 261,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Will-O-Wisp",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		status: "brn",
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Beautiful",
		desc: "Burns the target.",
		shortDesc: "Burns the target."
	},
	wingattack: {
		num: 17,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Wing Attack",
		pp: 35,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			distance: 1
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	wish: {
		num: 273,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wish",
		pp: 10,
		priority: 0,
		flags: {
			snatch: 1,
			heal: 1
		},
		slotCondition: "Wish",
		condition: {
			duration: 2,
			onResidualOrder: 4
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Cute",
		desc: "At the end of the next turn, the Pokemon at the user's position has 1/2 of the user's maximum HP restored to it, rounded half up. Fails if this move is already in effect for the user's position.",
		shortDesc: "Next turn, 50% of the user's max HP is restored."
	},
	withdraw: {
		num: 110,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Withdraw",
		pp: 40,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			def: 1
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {
			boost: {
				def: 1
			}
		},
		contestType: "Cute",
		desc: "Raises the user's Defense by 1 stage.",
		shortDesc: "Raises the user's Defense by 1."
	},
	wonderroom: {
		num: 472,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wonder Room",
		pp: 10,
		priority: 0,
		flags: {
			mirror: 1
		},
		pseudoWeather: "wonderroom",
		condition: {
			duration: 5,
			onResidualOrder: 24
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {
			boost: {
				spd: 1
			}
		},
		contestType: "Clever",
		desc: "For 5 turns, all active Pokemon have their Defense and Special Defense stats swapped. Stat stage changes are unaffected. If this move is used during the effect, the effect ends.",
		shortDesc: "For 5 turns, all Defense and Sp. Def stats switch."
	},
	woodhammer: {
		num: 452,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Wood Hammer",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil."
	},
	workup: {
		num: 526,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Work Up",
		pp: 30,
		priority: 0,
		flags: {
			snatch: 1
		},
		boosts: {
			atk: 1,
			spa: 1
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {
			boost: {
				atk: 1
			}
		},
		contestType: "Tough",
		desc: "Raises the user's Attack and Special Attack by 1 stage.",
		shortDesc: "Raises the user's Attack and Sp. Atk by 1."
	},
	worryseed: {
		num: 388,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Worry Seed",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1,
			mystery: 1
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Clever",
		desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode.",
		shortDesc: "The target's Ability becomes Insomnia."
	},
	wrap: {
		num: 35,
		accuracy: 90,
		basePower: 15,
		category: "Physical",
		name: "Wrap",
		pp: 20,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns."
	},
	wringout: {
		num: 378,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		isNonstandard: "Past",
		name: "Wring Out",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			basePower: 190
		},
		maxMove: {
			basePower: 140
		},
		contestType: "Tough",
		desc: "Power is equal to 120 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
		shortDesc: "More power the more HP the target has left."
	},
	xscissor: {
		num: 404,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "X-Scissor",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "No additional effect."
	},
	yawn: {
		num: 281,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Yawn",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			reflectable: 1,
			mirror: 1
		},
		volatileStatus: "yawn",
		condition: {
			noCopy: true,
			duration: 2,
			onResidualOrder: 19
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {
			boost: {
				spe: 1
			}
		},
		contestType: "Cute",
		desc: "Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a major status condition. At the end of the next turn, if the target is still active, does not have a major status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect.",
		shortDesc: "Puts the target to sleep after 1 turn."
	},
	zapcannon: {
		num: 192,
		accuracy: 50,
		basePower: 120,
		category: "Special",
		name: "Zap Cannon",
		pp: 5,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 100,
			status: "par"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 100% chance to paralyze the target.",
		shortDesc: "100% chance to paralyze the target."
	},
	zenheadbutt: {
		num: 428,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		name: "Zen Headbutt",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 20,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "Has a 20% chance to flinch the target.",
		shortDesc: "20% chance to flinch the target."
	},
	zingzap: {
		num: 716,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Zing Zap",
		pp: 10,
		priority: 0,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1
		},
		secondary: {
			chance: 30,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target."
	},
	zippyzap: {
		num: 729,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Zippy Zap",
		pp: 10,
		priority: 2,
		flags: {
			contact: 1,
			protect: 1
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					evasion: 1
				}
			}
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		desc: "Has a 100% chance to raise the user's evasion by 1 stage.",
		shortDesc: "Goes first. Raises user's evasion by 1."
	}
};
