app.get('/services', (req, res) => {
    const tarifs = {
        particuliers: [
            {
                title: 'Cours particulier 1',
                options: [
                    { duree: '1 heure', prix: '30€', note: 'Très bon service' },
                    { duree: '2 heures', prix: '50€' }
                ]
            },
            {
                title: 'Cours particulier 2',
                options: [
                    { duree: '1 heure', prix: '25€' }
                ]
            }
        ],
        groupe: [
            {
                title: 'Cours en groupe 1',
                options: [
                    { duree: '1 heure', prix: '15€' }
                ]
            }
        ]
    };

    res.render('services', { title: 'Nos Services', tarifs });
});

