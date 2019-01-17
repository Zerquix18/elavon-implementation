const fetch = require('isomorphic-unfetch')

module.exports = async (req, res) => {
  const { amount } = req.params
  const url = 'https://demo.convergepay.com/hosted-payments/transaction_token'
  const params = {
    ssl_merchant_id: process.env.SSL_MERCHANT_ID,
    ssl_user_id: process.env.SSL_USER_ID,
    ssl_pin: process.env.SSL_PIN,
    ssl_transaction_type: 'CCSALE',
    ssl_amount: amount,
  }
  let token = ''
  try {
    const result = await fetch (url,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      token = await result.text()
  } catch (e) {
    console.log(e)
  }

  res.send(JSON.stringify({ token }))
}
