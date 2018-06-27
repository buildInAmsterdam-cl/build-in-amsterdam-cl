
module.exports = {
    allCases: (req, res) => {
        const db = req.app.get('db')

        db.getCases().then(cases => {
            res.status(200).send(cases)
        })

    }
}