// Dependency: Node.js crypto module
// https://nodejs.org/api/crypto.html#crypto_crypto
function base64URLEncode(str) {
	return str.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
export const codeVerifier = base64URLEncode(crypto.randomBytes(32));

// Dependency: Node.js crypto module
// https://nodejs.org/api/crypto.html#crypto_crypto
function sha256(buffer) {
	return crypto.createHash('sha256').update(buffer).digest();
}
export const codeChallenge = base64URLEncode(sha256(codeVerifier));
