class S3 {
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (const str of strs) {
            const sorted = str.split("").sort().join("");

            if (!map.has(sorted)) {
                map.set(sorted, []);
            }
            map.get(sorted)!.push(str);
        }

        return Array.from(map.values());
    }
}