function hexToRgb(hex: string) {
    const parsed = hex.replace('#', '');
    return {
        r: parseInt(parsed.substring(0, 2), 16),
        g: parseInt(parsed.substring(2, 4), 16),
        b: parseInt(parsed.substring(4, 6), 16),
    };
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
    const toHex = (c: number) => c.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function interpolateColor(minColor: {[key: string]: number}, maxColor:{[key: string]: number}, factor: number) {
    return {
        r: Math.round(minColor.r + (maxColor.r - minColor.r) * factor),
        g: Math.round(minColor.g + (maxColor.g - minColor.g) * factor),
        b: Math.round(minColor.b + (maxColor.b - minColor.b) * factor),
    };
}

export function splitGradient(range = 10, minHex = '#FFAB39', maxHex = '#2CBA8B') {
    const minColor = hexToRgb(minHex);
    const maxColor = hexToRgb(maxHex);
    const colors = [];

    for (let i = 0; i < range; i++) {
        const factor = i / (range - 1);
        const interpolated = interpolateColor(minColor, maxColor, factor);
        colors.push(rgbToHex(interpolated));
    }

    return colors;
}

export function addDotZeroValue(value: string | number) {
    return parseFloat(value.toString()).toFixed(1)
}



