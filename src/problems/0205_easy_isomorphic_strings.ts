/// Given two strings "s" and "t", determine if they are isomorphic.
/// Two strings "s" and "t" are isomorphic if the characters in "s" can be
///     replaced to get "t".
/// All occurrences of a charter must be replaced with another character while
///     preserving the order of characters. No two characters may map to same
///     character, but a character may map to itself.

export default function isIsomorphic(s: string, t: string): boolean {
    if (s.length != t.length) {
        return false;
    };
    
    const mapST: Map<string, string> = new Map();
    const mapTS: Map<string, string> = new Map();
    
    for (let i: number = 0; i < s.length; i++) {
        const shouldCharInT: string = mapST.get(s[i]);
        const shouldCharInS: string = mapTS.get(t[i]);
        
        if (shouldCharInT && shouldCharInS) {
            if (shouldCharInT != t[i] || shouldCharInS != s[i]) {
                return false;
            };
        } else if (shouldCharInT || shouldCharInS) {
            return false;
        } else {
            mapST.set(s[i], t[i]);
            mapTS.set(t[i], s[i]);
        };
    };
    
    return true;
};

