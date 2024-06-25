import {iconUrl} from 'data/icon'
import {ensureStatuses} from '../type'
import {SHARED} from './SHARED'

export const SGE = ensureStatuses({
	EUKRASIA: {
		id: 2606,
		name: 'Eukrasia',
		icon: iconUrl(12953),
	},
	EUKRASIAN_DIAGNOSIS: {
		id: 2607,
		name: 'Eukrasian Diagnosis',
		icon: iconUrl(12954),
		duration: 30000,
	},
	DIFFERENTIAL_DIAGNOSIS: {
		id: 2608,
		name: 'Differential Diagnosis',
		icon: iconUrl(12955),
		duration: 30000,
	},
	HAIMA: {
		id: 2612,
		name: 'Haima',
		icon: iconUrl(12958),
		duration: 15000,
	},
	HAIMATINON: {
		id: 2642,
		name: 'Haimatinon',
		icon: iconUrl(17585),
		duration: 15000,
	},
	EUKRASIAN_PROGNOSIS: {
		id: 2609,
		name: 'Eukrasian Prognosis',
		icon: iconUrl(12954),
		duration: 30000,
	},
	PANHAIMA: {
		id: 2613,
		name: 'Panhaima',
		icon: iconUrl(12959),
		duration: 15000,
	},
	PANHAIMATINON: {
		id: 2643,
		name: 'Panhaimatinon',
		icon: iconUrl(17355),
		duration: 15000,
	},
	PHYSIS: {
		id: 2617,
		name: 'Physis',
		icon: iconUrl(12963),
		duration: 15000,
	},
	PHYSIS_II: {
		id: 2620,
		name: 'Physis II',
		icon: iconUrl(12966),
		duration: 15000,
	},
	AUTOPHYSIS: {
		id: 2621,
		name: 'Autophysis',
		icon: iconUrl(12967),
		duration: 10000,
	},
	KARDIA: {
		id: 2604,
		name: 'Kardia',
		icon: iconUrl(12951),
	},
	KARDION: {
		id: 2605,
		name: 'Kardion',
		icon: iconUrl(12952),
	},
	SOTERIA: {
		id: 2610,
		name: 'Soteria',
		icon: iconUrl(12956),
		duration: 15000,
	},
	ZOE: {
		id: 2611,
		name: 'Zoe',
		icon: iconUrl(12957),
		duration: 30000,
	},
	KRASIS: {
		id: 2622,
		name: 'Krasis',
		icon: iconUrl(12968),
		duration: 10000,
	},
	KERACHOLE: {
		id: 2618,
		name: 'Kerachole',
		icon: iconUrl(12964),
		duration: 15000,
	},
	KERAKEIA: { // The regen component of Kerachole
		id: 2938,
		name: 'Kerakeia',
		icon: iconUrl(12970),
		duration: 15000,
	},
	TAUROCHOLE: {
		id: 2619,
		name: 'Taurochole',
		icon: iconUrl(12965),
		duration: 15000,
	},
	EUKRASIAN_DOSIS: {
		id: 2614,
		name: 'Eukrasian Dosis',
		icon: iconUrl(12960),
		duration: 30000,
	},
	EUKRASIAN_DOSIS_II: {
		id: 2615,
		name: 'Eukrasian Dosis II',
		icon: iconUrl(12961),
		duration: 30000,
	},
	EUKRASIAN_DOSIS_III: {
		id: 2616,
		name: 'Eukrasian Dosis III',
		icon: iconUrl(12962),
		duration: 30000,
	},
	PNEUMA: {
		id: 2623,
		name: 'Pneuma',
		icon: iconUrl(12969),
		duration: 20000,
	},
	HOLOS: {
		id: 3003,
		name: 'Holos',
		icon: iconUrl(12971),
		duration: 20000,
	},
	HOLOSAKOS: SHARED.UNKNOWN, // Added in 6.2, see the 6.2 layer for definition
})
