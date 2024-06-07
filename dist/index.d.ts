/**
 * Color scale from 50 to 950
 */
export interface ColorScale {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
}
/**
 * Tailwind CSS Colors
 */
declare const TailwindColors: {
    /**
     * @description Black color
     * @preview ![black](https://placehold.co/24x24/000000/000000)
     */
    black: string;
    /**
     * @description White color
     * @preview ![white](https://placehold.co/24x24/ffffff/ffffff)
     */
    white: string;
    /**
       * Gray colors
       * @Preview ![gray-50](https://placehold.co/24x24/f9fafb/f9fafb) ![gray-100](https://placehold.co/24x24/f3f4f6/f3f4f6) ![gray-200](https://placehold.co/24x24/e5e7eb/e5e7eb) ![gray-300](https://placehold.co/24x24/d1d5db/d1d5db) ![gray-400](https://placehold.co/24x24/9ca3af/9ca3af) ![gray-500](https://placehold.co/24x24/6b7280/6b7280) ![gray-600](https://placehold.co/24x24/4b5563/4b5563) ![gray-700](https://placehold.co/24x24/374151/374151) ![gray-800](https://placehold.co/24x24/1f2937/1f2937) ![gray-900](https://placehold.co/24x24/111827/111827) ![gray-950](https://placehold.co/24x24/030712/030712)
       */
    gray: {
        /**
         * @Preview ![gray-50](https://placehold.co/24x24/f9fafb/f9fafb)
         */
        50: string;
        /**
         * @Preview ![gray-100](https://placehold.co/24x24/f3f4f6/f3f4f6)
         */
        100: string;
        /**
         * @Preview ![gray-200](https://placehold.co/24x24/e5e7eb/e5e7eb)
         */
        200: string;
        /**
         * @Preview ![gray-300](https://placehold.co/24x24/d1d5db/d1d5db)
         */
        300: string;
        /**
         * @Preview ![gray-400](https://placehold.co/24x24/9ca3af/9ca3af)
         */
        400: string;
        /**
         * @Preview ![gray-500](https://placehold.co/24x24/6b7280/6b7280)
         */
        500: string;
        /**
         * @Preview ![gray-600](https://placehold.co/24x24/4b5563/4b5563)
         */
        600: string;
        /**
         * @Preview ![gray-700](https://placehold.co/24x24/374151/374151)
         */
        700: string;
        /**
         * @Preview ![gray-800](https://placehold.co/24x24/1f2937/1f2937)
         */
        800: string;
        /**
         * @Preview ![gray-900](https://placehold.co/24x24/111827/111827)
         */
        900: string;
        /**
         * @Preview ![gray-950](https://placehold.co/24x24/030712/030712)
         */
        '950': string;
    };
    /**
      * Red colors
      * @Preview ![red-50](https://placehold.co/24x24/fef2f2/fef2f2) ![red-100](https://placehold.co/24x24/fee2e2/fee2e2) ![red-200](https://placehold.co/24x24/fecaca/fecaca) ![red-300](https://placehold.co/24x24/fca5a5/fca5a5) ![red-400](https://placehold.co/24x24/f87171/f87171) ![red-500](https://placehold.co/24x24/ef4444/ef4444) ![red-600](https://placehold.co/24x24/dc2626/dc2626) ![red-700](https://placehold.co/24x24/b91c1c/b91c1c) ![red-800](https://placehold.co/24x24/991b1b/991b1b) ![red-900](https://placehold.co/24x24/7f1d1d/7f1d1d) ![red-950](https://placehold.co/24x24/450a0a/450a0a)
      */
    red: ColorScale;
    /**
     * Yellow colors
     * @Preview ![yellow-50](https://placehold.co/24x24/fefce8/fefce8) ![yellow-100](https://placehold.co/24x24/fef9c3/fef9c3) ![yellow-200](https://placehold.co/24x24/fef08a/fef08a) ![yellow-300](https://placehold.co/24x24/fde047/fde047) ![yellow-400](https://placehold.co/24x24/facc15/facc15) ![yellow-500](https://placehold.co/24x24/eab308/eab308) ![yellow-600](https://placehold.co/24x24/ca8a04/ca8a04) ![yellow-700](https://placehold.co/24x24/a16207/a16207) ![yellow-800](https://placehold.co/24x24/92400e/92400e) ![yellow-900](https://placehold.co/24x24/78350f/78350f) ![yellow-950](https://placehold.co/24x24/422006/422006)
     */
    yellow: ColorScale;
    /**
     * Green colors
     * @Preview ![green-50](https://placehold.co/24x24/f0fdf4/f0fdf4) ![green-100](https://placehold.co/24x24/dcfce7/dcfce7) ![green-200](https://placehold.co/24x24/bbf7d0/bbf7d0) ![green-300](https://placehold.co/24x24/86efac/86efac) ![green-400](https://placehold.co/24x24/4ade80/4ade80) ![green-500](https://placehold.co/24x24/22c55e/22c55e) ![green-600](https://placehold.co/24x24/16a34a/16a34a) ![green-700](https://placehold.co/24x24/15803d/15803d) ![green-800](https://placehold.co/24x24/166534/166534) ![green-900](https://placehold.co/24x24/14532d/14532d) ![green-950](https://placehold.co/24x24/052e16/052e16)
     */
    green: ColorScale;
    /**
     * Blue colors
     * @Preview ![blue-50](https://placehold.co/24x24/eff6ff/eff6ff) ![blue-100](https://placehold.co/24x24/dbeafe/dbeafe) ![blue-200](https://placehold.co/24x24/bfdbfe/bfdbfe) ![blue-300](https://placehold.co/24x24/93c5fd/93c5fd) ![blue-400](https://placehold.co/24x24/60a5fa/60a5fa) ![blue-500](https://placehold.co/24x24/3b82f6/3b82f6) ![blue-600](https://placehold.co/24x24/2563eb/2563eb) ![blue-700](https://placehold.co/24x24/1d4ed8/1d4ed8) ![blue-800](https://placehold.co/24x24/1e40af/1e40af) ![blue-900](https://placehold.co/24x24/1e3a8a/1e3a8a) ![blue-950](https://placehold.co/24x24/172554/172554)
     */
    blue: ColorScale;
    /**
    * Indigo colors
    * @Preview ![indigo-50](https://placehold.co/24x24/eef2ff/eef2ff) ![indigo-100](https://placehold.co/24x24/e0e7ff/e0e7ff) ![indigo-200](https://placehold.co/24x24/c7d2fe/c7d2fe) ![indigo-300](https://placehold.co/24x24/a5b4fc/a5b4fc) ![indigo-400](https://placehold.co/24x24/818cf8/818cf8) ![indigo-500](https://placehold.co/24x24/6366f1/6366f1) ![indigo-600](https://placehold.co/24x24/4f46e5/4f46e5) ![indigo-700](https://placehold.co/24x24/4338ca/4338ca) ![indigo-800](https://placehold.co/24x24/3730a3/3730a3) ![indigo-900](https://placehold.co/24x24/312e81/312e81) ![indigo-950](https://placehold.co/24x24/1e1b4b/1e1b4b)
    */
    indigo: ColorScale;
    /**
     * Purple colors
     * @Preview ![purple-50](https://placehold.co/24x24/faf5ff/faf5ff) ![purple-100](https://placehold.co/24x24/f3e8ff/f3e8ff) ![purple-200](https://placehold.co/24x24/e9d5ff/e9d5ff) ![purple-300](https://placehold.co/24x24/d8b4fe/d8b4fe) ![purple-400](https://placehold.co/24x24/a78bfa/a78bfa) ![purple-500](https://placehold.co/24x24/8b5cf6/8b5cf6) ![purple-600](https://placehold.co/24x24/7c3aed/7c3aed) ![purple-700](https://placehold.co/24x24/6d28d9/6d28d9) ![purple-800](https://placehold.co/24x24/5b21b6/5b21b6) ![purple-900](https://placehold.co/24x24/4c1d95/4c1d95) ![purple-950](https://placehold.co/24x24/2e1065/2e1065)
     */
    purple: ColorScale;
    /**
     * Pink colors
     * @Preview ![pink-50](https://placehold.co/24x24/fdf2f8/fdf2f8) ![pink-100](https://placehold.co/24x24/fce7f3/fce7f3) ![pink-200](https://placehold.co/24x24/fbcfe8/fbcfe8) ![pink-300](https://placehold.co/24x24/f9a8d4/f9a8d4) ![pink-400](https://placehold.co/24x24/f472b6/f472b6) ![pink-500](https://placehold.co/24x24/ec4899/ec4899) ![pink-600](https://placehold.co/24x24/db2777/db2777) ![pink-700](https://placehold.co/24x24/be185d/be185d) ![pink-800](https://placehold.co/24x24/9d174d/9d174d) ![pink-900](https://placehold.co/24x24/831843/831843) ![pink-950](https://placehold.co/24x24/500724/500724)
     */
    pink: ColorScale;
    /**
     * Stone colors
     * @Preview ![stone-50](https://placehold.co/24x24/fafaf9/fafaf9) ![stone-100](https://placehold.co/24x24/f5f5f4/f5f5f4) ![stone-200](https://placehold.co/24x24/e7e5e4/e7e5e4) ![stone-300](https://placehold.co/24x24/d6d3d1/d6d3d1) ![stone-400](https://placehold.co/24x24/a8a29e/a8a29e) ![stone-500](https://placehold.co/24x24/78716c/78716c) ![stone-600](https://placehold.co/24x24/57534e/57534e) ![stone-700](https://placehold.co/24x24/44403c/44403c) ![stone-800](https://placehold.co/24x24/292524/292524) ![stone-900](https://placehold.co/24x24/1c1917/1c1917) ![stone-950](https://placehold.co/24x24/0c0a09/0c0a09)
     */
    stone: ColorScale;
    /**
     * Zinc colors
     * @Preview ![zinc-50](https://placehold.co/24x24/fafafa/fafafa) ![zinc-100](https://placehold.co/24x24/f4f4f5/f4f4f5) ![zinc-200](https://placehold.co/24x24/e4e4e7/e4e4e7) ![zinc-300](https://placehold.co/24x24/d4d4d8/d4d4d8) ![zinc-400](https://placehold.co/24x24/a1a1aa/a1a1aa) ![zinc-500](https://placehold.co/24x24/71717a/71717a) ![zinc-600](https://placehold.co/24x24/52525b/52525b) ![zinc-700](https://placehold.co/24x24/3f3f46/3f3f46) ![zinc-800](https://placehold.co/24x24/27272a/27272a) ![zinc-900](https://placehold.co/24x24/18181b/18181b) ![zinc-950](https://placehold.co/24x24/09090b/09090b)
     */
    zinc: ColorScale;
    /**
     * Neutral colors
     * @Preview ![neutral-50](https://placehold.co/24x24/fafafa/fafafa) ![neutral-100](https://placehold.co/24x24/f5f5f5/f5f5f5) ![neutral-200](https://placehold.co/24x24/e5e5e5/e5e5e5) ![neutral-300](https://placehold.co/24x24/d4d4d4/d4d4d4) ![neutral-400](https://placehold.co/24x24/a3a3a3/a3a3a3) ![neutral-500](https://placehold.co/24x24/737373/737373) ![neutral-600](https://placehold.co/24x24/525252/525252) ![neutral-700](https://placehold.co/24x24/404040/404040) ![neutral-800](https://placehold.co/24x24/262626/262626) ![neutral-900](https://placehold.co/24x24/171717/171717) ![neutral-950](https://placehold.co/24x24/0a0a0a/0a0a0a)
     */
    neutral: ColorScale;
    /**
    * Orange colors
    * @Preview ![orange-50](https://placehold.co/24x24/fff7ed/fff7ed) ![orange-100](https://placehold.co/24x24/ffedd5/ffedd5) ![orange-200](https://placehold.co/24x24/fed7aa/fed7aa) ![orange-300](https://placehold.co/24x24/fdba74/fdba74) ![orange-400](https://placehold.co/24x24/fb923c/fb923c) ![orange-500](https://placehold.co/24x24/f97316/f97316) ![orange-600](https://placehold.co/24x24/ea580c/ea580c) ![orange-700](https://placehold.co/24x24/c2410c/c2410c) ![orange-800](https://placehold.co/24x24/9a3412/9a3412) ![orange-900](https://placehold.co/24x24/7c2d12/7c2d12)
    */
    orange: ColorScale;
    /**
     * Amber colors
     * @Preview ![amber-50](https://placehold.co/24x24/fffbeb/fffbeb) ![amber-100](https://placehold.co/24x24/fef3c7/fef3c7) ![amber-200](https://placehold.co/24x24/fde68a/fde68a) ![amber-300](https://placehold.co/24x24/fcd34d/fcd34d) ![amber-400](https://placehold.co/24x24/fbbf24/fbbf24) ![amber-500](https://placehold.co/24x24/f59e0b/f59e0b) ![amber-600](https://placehold.co/24x24/d97706/d97706) ![amber-700](https://placehold.co/24x24/b45309/b45309) ![amber-800](https://placehold.co/24x24/92400e/92400e) ![amber-900](https://placehold.co/24x24/78350f/78350f) ![amber-950](https://placehold.co/24x24/451a03/451a03)
     */
    amber: ColorScale;
    /**
     * Lime colors
     * @Preview ![lime-50](https://placehold.co/24x24/f7fee7/f7fee7) ![lime-100](https://placehold.co/24x24/ecfccb/ecfccb) ![lime-200](https://placehold.co/24x24/d9f99d/d9f99d) ![lime-300](https://placehold.co/24x24/bef264/bef264) ![lime-400](https://placehold.co/24x24/a3e635/a3e635) ![lime-500](https://placehold.co/24x24/84cc16/84cc16) ![lime-600](https://placehold.co/24x24/65a30d/65a30d) ![lime-700](https://placehold.co/24x24/4d7c0f/4d7c0f) ![lime-800](https://placehold.co/24x24/3f6212/3f6212) ![lime-900](https://placehold.co/24x24/365314/365314)
     */
    lime: ColorScale;
    /**
     * Emerald colors
     * @Preview ![emerald-50](https://placehold.co/24x24/ecfdf5/ecfdf5) ![emerald-100](https://placehold.co/24x24/d1fae5/d1fae5) ![emerald-200](https://placehold.co/24x24/a7f3d0/a7f3d0) ![emerald-300](https://placehold.co/24x24/6ee7b7/6ee7b7) ![emerald-400](https://placehold.co/24x24/34d399/34d399) ![emerald-500](https://placehold.co/24x24/10b981/10b981) ![emerald-600](https://placehold.co/24x24/059669/059669) ![emerald-700](https://placehold.co/24x24/047857/047857) ![emerald-800](https://placehold.co/24x24/065f46/065f46) ![emerald-900](https://placehold.co/24x24/064e3b/064e3b)
     */
    emerald: ColorScale;
    /**
     * Teal colors
     * @Preview ![teal-50](https://placehold.co/24x24/f0fdfa/f0fdfa) ![teal-100](https://placehold.co/24x24/ccfbf1/ccfbf1) ![teal-200](https://placehold.co/24x24/99f6e4/99f6e4) ![teal-300](https://placehold.co/24x24/5eead4/5eead4) ![teal-400](https://placehold.co/24x24/2dd4bf/2dd4bf) ![teal-500](https://placehold.co/24x24/14b8a6/14b8a6) ![teal-600](https://placehold.co/24x24/0d9488/0d9488) ![teal-700](https://placehold.co/24x24/0f766e/0f766e) ![teal-800](https://placehold.co/24x24/115e59/115e59) ![teal-900](https://placehold.co/24x24/134e4a/134e4a)
     */
    teal: ColorScale;
    /**
     * Cyan colors
     * @Preview ![cyan-50](https://placehold.co/24x24/ecfeff/ecfeff) ![cyan-100](https://placehold.co/24x24/cffafe/cffafe) ![cyan-200](https://placehold.co/24x24/a5f3fc/a5f3fc) ![cyan-300](https://placehold.co/24x24/67e8f9/67e8f9) ![cyan-400](https://placehold.co/24x24/22d3ee/22d3ee) ![cyan-500](https://placehold.co/24x24/06b6d4/06b6d4) ![cyan-600](https://placehold.co/24x24/0891b2/0891b2) ![cyan-700](https://placehold.co/24x24/0e7490/0e7490) ![cyan-800](https://placehold.co/24x24/155e75/155e75) ![cyan-900](https://placehold.co/24x24/164e63/164e63)
     */
    cyan: ColorScale;
    /**
     * Sky colors
     * @Preview ![sky-50](https://placehold.co/24x24/f0f9ff/f0f9ff) ![sky-100](https://placehold.co/24x24/e0f2fe/e0f2fe) ![sky-200](https://placehold.co/24x24/bae6fd/bae6fd) ![sky-300](https://placehold.co/24x24/7dd3fc/7dd3fc) ![sky-400](https://placehold.co/24x24/38bdf8/38bdf8) ![sky-500](https://placehold.co/24x24/0ea5e9/0ea5e9) ![sky-600](https://placehold.co/24x24/0284c7/0284c7) ![sky-700](https://placehold.co/24x24/0369a1/0369a1) ![sky-800](https://placehold.co/24x24/075985/075985) ![sky-900](https://placehold.co/24x24/0c4a6e/0c4a6e)
     */
    sky: ColorScale;
    /**
     * Violet colors
     * @Preview ![violet-50](https://placehold.co/24x24/f5f3ff/f5f3ff) ![violet-100](https://placehold.co/24x24/ede9fe/ede9fe) ![violet-200](https://placehold.co/24x24/ddd6fe/ddd6fe) ![violet-300](https://placehold.co/24x24/c4b5fd/c4b5fd) ![violet-400](https://placehold.co/24x24/a78bfa/a78bfa) ![violet-500](https://placehold.co/24x24/8b5cf6/8b5cf6) ![violet-600](https://placehold.co/24x24/7c3aed/7c3aed) ![violet-700](https://placehold.co/24x24/6d28d9/6d28d9) ![violet-800](https://placehold.co/24x24/5b21b6/5b21b6) ![violet-900](https://placehold.co/24x24/4c1d95/4c1d95)
     */
    violet: ColorScale;
    /**
     * Fuchsia colors
     * @Preview ![fuchsia-50](https://placehold.co/24x24/fdf4ff/fdf4ff) ![fuchsia-100](https://placehold.co/24x24/fae8ff/fae8ff) ![fuchsia-200](https://placehold.co/24x24/f5d0fe/f5d0fe) ![fuchsia-300](https://placehold.co/24x24/f0abfc/f0abfc) ![fuchsia-400](https://placehold.co/24x24/e879f9/e879f9) ![fuchsia-500](https://placehold.co/24x24/d946ef/d946ef) ![fuchsia-600](https://placehold.co/24x24/c026d3/c026d3) ![fuchsia-700](https://placehold.co/24x24/a21caf/a21caf) ![fuchsia-800](https://placehold.co/24x24/86198f/86198f) ![fuchsia-900](https://placehold.co/24x24/701a75/701a75) ![fuchsia-950](https://placehold.co/24x24/4a044e/4a044e)
     */
    fuchsia: ColorScale;
    /**
     * Rose colors
     * @Preview ![rose-50](https://placehold.co/24x24/fff1f2/fff1f2) ![rose-100](https://placehold.co/24x24/ffe4e6/ffe4e6) ![rose-200](https://placehold.co/24x24/fecdd3/fecdd3) ![rose-300](https://placehold.co/24x24/fda4af/fda4af) ![rose-400](https://placehold.co/24x24/fb7185/fb7185) ![rose-500](https://placehold.co/24x24/f43f5e/f43f5e) ![rose-600](https://placehold.co/24x24/e11d48/e11d48) ![rose-700](https://placehold.co/24x24/be123c/be123c) ![rose-800](https://placehold.co/24x24/9f1239/9f1239) ![rose-900](https://placehold.co/24x24/881337/881337) ![rose-950](https://placehold.co/24x24/4c0519/4c0519)
     */
    rose: ColorScale;
    /**
     * Slate colors
     * @Preview ![slate-50](https://placehold.co/24x24/f8fafc/f8fafc) ![slate-100](https://placehold.co/24x24/f1f5f9/f1f5f9) ![slate-200](https://placehold.co/24x24/e2e8f0/e2e8f0) ![slate-300](https://placehold.co/24x24/cbd5e1/cbd5e1) ![slate-400](https://placehold.co/24x24/94a3b8/94a3b8) ![slate-500](https://placehold.co/24x24/64748b/64748b) ![slate-600](https://placehold.co/24x24/475569/475569) ![slate-700](https://placehold.co/24x24/334155/334155) ![slate-800](https://placehold.co/24x24/1e293b/1e293b) ![slate-900](https://placehold.co/24x24/0f172a/0f172a) ![slate-950](https://placehold.co/24x24/020617/020617)
     */
    slate: ColorScale;
};
export default TailwindColors;
