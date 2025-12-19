
export const generateSvgFromPrompt = async (prompt: string): Promise<string> => {
    const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Failed to generate SVG');
    }

    return data.svg;
};
