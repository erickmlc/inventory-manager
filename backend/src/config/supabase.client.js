const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
export { SUPABASE_KEY, SUPABASE_URL };

export const DEFAULT_HEADERS = {
	"Content-Type": "application/json",
	"Accept": "application/json",
	"apikey": SUPABASE_KEY,
	"Authorization": `Bearer ${SUPABASE_KEY}`,
	"Prefer": "return=representation",
};
