export async function getChartData(selectedCoin: string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            "x-cg-demo-api-key": process.env.COINGEKO_API_KEY || "",
        },
    } as const;

    const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=cad&days=30&interval=daily&precision=2`,
        options
    );

    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
}