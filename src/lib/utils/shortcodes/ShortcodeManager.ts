// ShortcodeManager.ts
type ShortcodeHandler = (params: Record<string, string>) => string;

class ShortcodeManager {
	private static shortcodes: Record<string, ShortcodeHandler> = {};

	static registerShortcode(name: string, handler: ShortcodeHandler) {
		this.shortcodes[name] = handler;
	}

	static parseShortcodes(content: string): string {
		return content.replace(
			/\[(\w+)(.*?)\]/g,
			(match: string, shortcode: string, paramsStr: string) => {
				if (shortcode in this.shortcodes) {
					const params = this.parseParams(paramsStr);
					return this.shortcodes[shortcode](params);
				}
				return match; // If the shortcode is not registered, return it as-is.
			}
		);
	}

	private static parseParams(paramsStr: string): Record<string, string> {
		const params: Record<string, string> = {};
		paramsStr.replace(/(\w+)="([^"]*)"/g, (_match: string, key: string, value: string) => {
			params[key] = value;
			return '';
		});
		return params;
	}
}

export default ShortcodeManager;
