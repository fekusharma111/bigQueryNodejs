const { BigQuery } = require('@google-cloud/bigquery');

const bigquery = new BigQuery();

async function runQuery(query) {
  try {
    const options = {
      query: query,
      useLegacySql: false, // Use standard SQL syntax
    };

    const [rows] = await bigquery.query(options);
    return rows;
  } catch (error) {
    console.error('Error running query:', error);
    throw error;
  }
}

module.exports = runQuery;
