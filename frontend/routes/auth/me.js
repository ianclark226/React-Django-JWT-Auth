const express = require('express');
// mod.cjs
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const router = express.Router();

router.get('/api/users/me', async (req, res) => {
    const { access } = req.cookies;

    try {
        const apiRes = await fetch(`${process.env.API_URL}/api/users/me`, {
            method: 'GET',
            headers: {
                Accept: 'application/josn',
                Authorization: `Bearer ${access}`,
            }
        });

        const data = await apiRes.json();

        return res.status(api.Res.status).json(data);
    } catch(err) {
        return res.status(500).json({
            error: 'Something went wrong when trying to confirm'
        })
    }
})

module.exports = router;