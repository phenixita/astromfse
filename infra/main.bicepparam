using './main.bicep'

param staticWebAppName = 'swa-mfse'
param location = 'westeurope'
param sku = 'Free'
param repositoryUrl = 'https://github.com/phenixita/astromfse'
param repositoryBranch = 'main'
