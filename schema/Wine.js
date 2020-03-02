cube(`Wine`, {
    sql: `SELECT * FROM wine_v1.wine`,

    joins: {

    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [country]
        }
    },

    dimensions: {
        country: {
            sql: `country`,
            type: `string`
        },

        description: {
            sql: `description`,
            type: `string`
        },

        designation: {
            sql: `designation`,
            type: `string`
        },

        price: {
            sql: `price`,
            type: `string`
        },

        points: {
            sql: `points`,
            type: `string`
        },

        province: {
            sql: `province`,
            type: `string`
        },

        region1: {
            sql: `region_1`,
            type: `string`,
            title: `Region 1`
        },

        region2: {
            sql: `region_2`,
            type: `string`,
            title: `Region 2`
        },

        variety: {
            sql: `variety`,
            type: `string`
        },

        winery: {
            sql: `winery`,
            type: `string`
        }
    },
    preAggregations: {
        amountByCountry: {
            type: `rollup`,
            measureReferences: [Wine.count],
            dimensionReferences: country
        }
    }
});
