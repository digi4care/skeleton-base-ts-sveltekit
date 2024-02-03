import { error } from '@sveltejs/kit';
import { GetLayoutStore } from '$houdini';
import type { ServerLoadEvent } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event: ServerLoadEvent) => {
	const GetLayout = new GetLayoutStore();
	const { data, errors } = await GetLayout.fetch({ event });

	// Controleer of er errors zijn
	if (errors) {
		// Je kunt kiezen welke statuscode en bericht je wilt geven, afhankelijk van je toepassing
		// Hier gebruiken we 500 als een algemene serverfoutcode, pas dit aan op basis van jouw behoeften
		error(500, 'Er is een fout opgetreden bij het ophalen van de data');
	}

	// Als er geen errors zijn, ga door met de data
	// Je kunt hier besluiten om meer logica toe te voegen, bijvoorbeeld om te controleren of data niet null is
	if (!data) {
		// Je kunt een andere foutmelding werpen als de data null is
		error(404, 'Geen data gevonden');
	}

	// Geef de data terug als er geen fouten zijn
	return { data };
};
