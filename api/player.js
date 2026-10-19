const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const PLAYER_TAG = '%#POLCLJU8C'; 
    const API_KEY = process.env.BRAWL_STARS_TOKEN;

    try {
        const response = await fetch(`https://api.brawlstars.com/v1/players/${PLAYER_TAG}`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
