const { generateContent } = require('../services/ai.services');

module.exports = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send('code is required');
    }

    try {
        const response = await generateContent(code);
        res.send(response);
    } catch (err) {
        res.status(500).send({ error: err.message || 'Internal error' });
    }
};