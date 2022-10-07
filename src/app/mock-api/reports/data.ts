/* tslint:disable:max-line-length */
enum statuses {
    'NOT_CONFIRMED' = 'NOT CONFIRMED',
    'WARNING' = 'WARNING',
    'MISLEADING' = 'MISLEADING',
    'PARTLY_FALSE' = 'PARTLY FALSE',
    'FALSE' = 'FALSE',
    'MISSING CONTEXT' = 'MISSING CONTEXT',
    'PHOTOMONTAGE' = 'PHOTOMONTAGE',
    'ALTERED PHOTO' = 'ALTERED PHOTO',
}

export const reports = {
    recentTransactions: [
        {
            id: '1b6fd296-bc6a-4d45-bf4f-e45519a58cf5',
            date: '2022-07-07T22:22:37.274Z',
            title: 'Graf dňa: Európskemu priemyslu už nechýbajú súčiastky, ale zákazky',
            url: 'https://e.dennikn.sk/3045312/graf-dna-europskemu-priemyslu-uz-nechybaju-suciastky-ale-zakazky/?ref=tit',
            count: 10,
            statuses: [statuses.NOT_CONFIRMED],
            reviewed_by: [
                {
                    id: '0e6987a5-c8c7-450e-a64b-1bc5cebc859f',
                    name: 'Vitalii Liubimov',
                    email: 'vitalii@liubimov.org'
                }
            ]
        },
        {
            id: '2dec6074-98bd-4623-9526-6480e4776569',
            date: '2021-06-18T14:51:24.461Z',
            title: 'Neviem, koľko tento mesiac zarobím, a je mi to jedno, hovorí youtuber Moon. Sústredím sa na tvorbu, nie na čísla, tvrdí (Rozhovor)',
            url: 'https://refresher.sk/122187-Neviem-kolko-tento-mesiac-zarobim-a-je-mi-to-jedno-hovori-youtuber-Moon-Sustredim-sa-na-tvorbu-nie-na-cisla-tvrdi-Rozhovor',
            count: 30,
            statuses: [statuses.NOT_CONFIRMED],
            reviewed_by: [
                {
                    id: '0e6987a5-c8c7-450e-a64b-1bc5cebc859f',
                    name: 'Vitalii Liubimov',
                    email: 'vitalii@liubimov.org'
                }
            ]
        },
        {
            id: 'ae7c065f-4197-4021-a799-7a221822ad1d',
            date: '2019-12-25T17:52:14.304Z',
            title: 'Čo bolo s p. Čekanom po vakcíne?',
            url: 'https://akw.sk/co-bolo-s-p-cekanom-po-vakcine/',
            count: 120,
            statuses: [statuses.WARNING],
            reviewed_by: []
        },
        {
            id: '0c43dd40-74f6-49d5-848a-57a4a45772ab',
            date: '2021-09-06T06:32:16.111Z',
            title: 'Štefan Tesař',
            url: 'https://www.facebook.com/photo/?fbid=408626857488724&set=a.102709698080443',
            count: 120,
            statuses: [statuses.MISLEADING, statuses.PARTLY_FALSE],
            reviewed_by: [
                {
                    id: 'cfaad35d-07a3-4447-a6c3-d8c3d54fd5df',
                    name: 'Volodymyr Prykhodko',
                    email: 'info@ovva.sk',
                }
            ]
        },
        {
            id: 'e5c9f0ed-a64c-4bfe-a113-29f80b4e162c',
            date: '2019-11-24T12:13:23.064Z',
            title: 'Portál La Quinta Columna: Výskum Dr. Ricarda Delgada a Dr. José Luis Sevillana potvrdil prítomnosť nanočastíc oxidu grafénu v covid „vakcínach',
            url: 'https://cz24.news/portal-la-quinta-columna-vyskum-dr-ricarda-delgada-a-dr-jose-luis-sevillana-potvrdil-pritomnost-nanocastic-oxidu-grafenu-v-covid-vakcinach/',
            count: 450,
            statuses: [statuses.FALSE],
            reviewed_by: [
                {
                    id: 'cfaad35d-07a3-4447-a6c3-d8c3d54fd5df',
                    name: 'Volodymyr Prykhodko',
                    email: 'info@ovva.sk',
                }
            ]
        }
    ]
}
