const { Client } = require('undici')
const semver = require('semver')
const fastify = require('fastify')({
  logger: true
})

const client = new Client('https://nodejs.org')
const port = 3000

fastify.get('/', function (request, reply) {
  client.request({
    path: '/dist/index.json',
    method: 'GET'
  }, function (error, data) {
    if (error) {
      throw error
    }

    const { statusCode, body } = data

    console.log(`response recieved: ${statusCode}`)

    let remoteJSONAsString = ''
    body.setEncoding('utf8')
    body.on('data', function (body) {
      remoteJSONAsString = remoteJSONAsString.concat(body)
    })
    body.on('end', () => {
      let newestNodeVersion
      const remoteJSON = JSON.parse(remoteJSONAsString)
      remoteJSON.forEach(node => {
        const loopNodeVersion = semver.coerce(node.version).version

        if (newestNodeVersion === undefined) {
          newestNodeVersion = loopNodeVersion
        } else {
          if (semver.lt(newestNodeVersion, loopNodeVersion)) {
            newestNodeVersion = loopNodeVersion
          }
        }
      })
      reply.send(`The latest Node.js version is v${newestNodeVersion}`)
    })
  })
})

fastify.listen(port, async function (error, address) {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
