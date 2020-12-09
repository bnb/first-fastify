# First Fastify

A tiny app that'll tell you the most recent version of [nodejs/node](https://github.com/nodejs).

## Usage

Run `node index.js` or `npm start`.

## Dependencies

- [Fastify](https://www.npmjs.com/package/fastify) - Web server.
- [Undici](https://www.npmjs.com/package/undici) - HTTP client.
- [semver](https://www.npmjs.com/package/semver) - Semantic Versioning tool.

## Deploy

I've [deployed this site](https://fastfastify.azurewebsites.net/) to Azure App Service from VS Code, and have set up Continuous Deployment so any PR merged will be shipped to prod quickly. You should be able to deploy this anyhwere, though.

Links:

- Azure App Service: [non-tracking](https://docs.microsoft.com/en-us/azure/app-service/), [tracking](https://docs.microsoft.com/en-us/azure/app-service/?WT.mc_id=opensource-11460-ticyren)
- Azure App Service extension in VS Code: [non-tracking](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice/), [tracking](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice&WT.mc_id=opensource-11460-ticyren)
- Azure App Service Continuous Deployment Docs: [non-tracking](https://docs.microsoft.com/en-us/azure/app-service/deploy-continuous-deployment/), [tracking](https://docs.microsoft.com/en-us/azure/app-service/deploy-continuous-deployment/?WT.mc_id=opensource-11460-ticyren)

Tracking links are used in my org and are attributed to me as the source as a primary measure of performance. Feel free to use them if you want to, or don't if you don't - either is fine with me ❤️