// shortcodes.ts
import ShortcodeManager from './ShortcodeManager';

// Handler for [currentYear]
function handleCurrentYear(): string {
	return new Date().getFullYear().toString();
}

// Handler for [eenshortcode]
function handleEenShortcode(params: Record<string, string>): string {
	const title = params.title || '';
	const subtitle = params.subtitle || '';
	const kut = params.kut || '';
	return `Title: ${title}, Subtitle: ${subtitle}, Kut: ${kut}`;
}

// Register [eenshortcode] shortcode
ShortcodeManager.registerShortcode('eenshortcode', handleEenShortcode);

// Register [currentYear] shortcode
ShortcodeManager.registerShortcode('currentYear', handleCurrentYear);

// Voeg hier andere shortcode-handlers en registraties toe
