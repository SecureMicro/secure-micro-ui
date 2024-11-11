import metadata from './metadata.json'

const configData = metadata['prod']

let APP_VERSION = `${configData.buildMajor}.${configData.buildMinor}.${configData.buildRevision}`
let DEPLOY_TIME = configData.deployTime

export { APP_VERSION, DEPLOY_TIME }
