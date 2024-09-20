const { BigQuery } = require('@google-cloud/bigquery');
const credentials ={
  "type": "service_account",
  "project_id": "forumweb-eb712",
  "private_key_id": "f42786d4b0336d411d507738f500e1d367d01c2b",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCq0jK6qa2HRL9l\n5cV1tGmuDwLq9B58DhkJm8v9YlvIhbW2DYkmXYrK+JLole9NsHB0MYEC36velQu6\nYMIzPOhu/O0CqY6Kfo8rfu42PF8TbFuhJZmNRI54Ytt+/nExhiZnwwD0JO1fpyGk\n/HEm6LrNvyBWhUYsWRhKhs8I+Y3sg87f6wK1VRYIFxFD8SROET7qteKuZJV/rXKV\nf35E+zAC4ybQZt1BLDi+uj/qa/XAHm3uBcTgfdK6vU9SXvwVh7No2Is0X113NG07\n/RheDYVQyFVVSBFz/NogBhx5breSBAR5UL0wWaVce86lIcN9p4E0bPXCxobXrv/j\neIl+5+PLAgMBAAECggEABvKUqJ3lFmbX6AOP4+kqES/AHSE/qikCoK7q/YvGEuJJ\nUTW8ucg9MGMqynXqrTy7XiZzSlQhj+R8/SAZVe8ovvbfhuexifV6yjiX5LHQ5h/W\nnDfExoeeycuvhLtBjFOZ9UdrnwJvex/3kNfJnF0D2AFphctW3s/i2okgG4vW12M1\n2Om/N+Ch2Y2JDXTEmPJX+MvYzo2mM36J5+zh7oaua0oKcwarax8dywU6k1fydPbi\nhZm0qmpoOS/p8rT23KfbCJ4FKinIBF0/zFp3+yJmSDo05rXuFPqjVOhHcFSyNbt2\nmpHp9A8m+X+RqPeXhfE/itwrBc1sEGit5qXzwVfeyQKBgQDvT9hiQmFKspZ2xZqt\nHRXub4OlXYV2HJ+0CWxpxJxYAtjwBtdbaRgyAqxP0M151gGQ1mSQxpc5vo00JDOG\ntvBh+ukIv5rLaRqN1qydRkkiSo8tcdEVqeFK//ZcMs+RVnUdD82e0KU/3025h1QF\npaSV676AsCNGkBH+ff/ythEWgwKBgQC2u6qyWVLOV28pZ6QcRFb+i0CvFlaTDkYI\n1tDG3DlL7Pq6dFwhSzqxAQKxFu1/bbScgWXrh58tUB2OnHuAvSvsx66ClSOigyaV\nJTqNF0AY0dVbFj079EwHzDTKQPE2nVxB7bZa1brsjsBjJaepbnuxgRYAewppvPQJ\nrCwNgxm7GQKBgQCC4BbFfen5UPuqjtzNacexszi6ug+gDX1ll3W7zjN2inAbrJIg\nQrRhvUaBC/8jb19B143+Ay12/ff5GQc42FlULEU/bJH6RkuoYEvcYzDh2Qa+Yq1m\n/JXiT2Nq/rq3kCHSN+9KuG53JOc73H+d6v28o8V2WV2hXG8Kz9um390ugwKBgA8a\nmfRd77tAfN62Q1lWyL4HcpRGS2eiUWWfo+gcAdxlvR+2SHs0BajlxXwvwfe7cKdT\nBsKeFikfqyHDi23LtRrAMot2mlhvcLv5NMq+tjyW84Sw5OTUv4gRd/eTwJxcC2kj\npeQCMI4nCn3neeFGUZENc20cvnKY/K7j/Uwsnu7ZAoGBAJZxQeBe6hyZMg/BkMlD\n1COFFZTl+/bF5qPQsiecTm9rvMqJpws7OR1SliG+rhHbXEoK1YU+PvWH2GKY1lbp\nHrZL5CBKftyQhjiAGwX1bdJnoiLcLzuxnx8llrBAkOWn3raSjGjs2Pn5ZL5w1vqH\nHAPgbR8ci8MbfigQTH/gwtpS\n-----END PRIVATE KEY-----\n",
  "client_email": "bigqueryforum@forumweb-eb712.iam.gserviceaccount.com",
  "client_id": "109199220752338947945",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bigqueryforum%40forumweb-eb712.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
const bigquery = new BigQuery({credentials});

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
