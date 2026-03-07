targetScope = 'resourceGroup'

@description('Azure region for the Static Web App')
param location string = 'westeurope'

@description('Name of the Static Web App')
param staticWebAppName string = 'swa-mfse'

@description('SKU for the Static Web App')
@allowed(['Free', 'Standard'])
param sku string = 'Free'

@description('GitHub repository URL (e.g. https://github.com/owner/repo)')
param repositoryUrl string

@description('Branch to deploy from')
param repositoryBranch string = 'main'

resource staticWebApp 'Microsoft.Web/staticSites@2023-12-01' = {
  name: staticWebAppName
  location: location
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: repositoryBranch
    buildProperties: {
      appLocation: '/'
      outputLocation: 'dist'
      skipGithubActionWorkflowGeneration: true
    }
  }
}

@description('Deployment token for GitHub Actions')
#disable-next-line outputs-should-not-contain-secrets
output deploymentToken string = staticWebApp.listSecrets().properties.apiKey

@description('Default hostname of the Static Web App')
output defaultHostname string = staticWebApp.properties.defaultHostname
