const fetch = require('node-fetch');

async function query({query, variables = {}}) {
  console.log('HASURA_API_URL', process.env.HASURA_API_URL);
  console.log('HASURA_ADMIN_SECRET', process.env.HASURA_ADMIN_SECRET);
  const result = await fetch(process.env.HASURA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET
    },
    body: JSON.stringify({query, variables}),
  })
  .then(response => response.json());

  //TODO show helpful info if there's an error
  //result.error

  console.log('result', result);
  return result.data;
}

exports.query = query;