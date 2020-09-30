module.exports = {
    home: (app) => {
        app.get('/', (req, res) => {
            res.sendFile(process.cwd() + '/index.html')
        })
    },

    notFound: (app) => {
        app.use((req, res, next) => {
            res.status(401).send('not found')
        })
    },

    convertAPI: (app) => {
        app.route('/convert').get(
            (req, res, next) => {
                const { kg } = req.query
                req.pound = parseInt(kg) * 2.22
                req.str = `${kg} kg converts to ${req.pound} lbs`
                next()
            },

            (req, res) => {
                res.json({ result: req.str })
            }
        )
    },

    nowAPI: (app) => {
        app.route('/now').get(
            (req, res, next) => {
                req.time = new Date().toUTCString()
                req.user = req.ip
                next()
            },
            (req, res) => {
                res.json({ time: req.time, user: req.user })
            }
        )
    },
}
