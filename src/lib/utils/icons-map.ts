import * as SvgIconsComponent from '@/lib/components/icons';

/**
 * Icons Component map.
 */
export const getIconComponentByName = (
	name: string
): (typeof SvgIconsComponent)[keyof typeof SvgIconsComponent] | null => {
	const contentOptions: {
		[key: string]: (typeof SvgIconsComponent)[keyof typeof SvgIconsComponent];
	} = {
		facebook: SvgIconsComponent.Facebook,
		twitter: SvgIconsComponent.Twitter,
		instagram: SvgIconsComponent.Instagram,
		youtube: SvgIconsComponent.Youtube,
		pinterest: SvgIconsComponent.Pinterest,
		linkedin: SvgIconsComponent.Linkedin,
		whatsapp: SvgIconsComponent.Whatsapp,
		bag: SvgIconsComponent.Bag,
		wishlist: SvgIconsComponent.Wishlist,
		burgericon: SvgIconsComponent.BurgerIcon,
		user: SvgIconsComponent.User,
		tailwindicon: SvgIconsComponent.TailwindIcon,
		arrowdown: SvgIconsComponent.ArrowDown,
		loading: SvgIconsComponent.Loading,
		search: SvgIconsComponent.SearchIcon
	};

	return contentOptions[name] || null;
};

// <svelte:component this={getIconComponentByName(facebook)} />
