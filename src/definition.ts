export interface GraphcoolDefinition {
  types: string
  permissions?: Array<Permission>
  functions?: {[name: string]: FunctionDefinition}
  rootTokens?: string[]
  modules?: {[name: string]: string}
  custom?: any
}

export interface Permission {
  description?: string
  isEnabled?: boolean
  // (modelName.(create|read|list|update|delete) | relationName.(connect|disconnect))
  operation: string
  authenticated?: boolean
  query?: string
  fields?: string[]
}

export interface FunctionDefinition {
  handler: FunctionHandler
  type: FunctionType
  // (modelName.(create|read|list|update|delete) | relationName.(connect|disconnect))
  // TODO remove operation, as it is only there to temporarily support the backend
  operation?: string
  query?: string
  schema?: string
}

export interface FunctionHandler {
  webhook?: FunctionHandlerWebhookSource
  code?: FunctionCode | string
}

interface FunctionCode {
  src: string
  environment?: {[envVar: string]: string}
}

export interface FunctionHandlerWebhook {
  webhook: FunctionHandlerWebhookSource
}

export type FunctionHandlerWebhookSource = string | FunctionHandlerWebhookWithHeaders

export interface FunctionHandlerWebhookWithHeaders {
  url: string
  headers?: Header[]
}

export interface Header {
  name: string
  value: string
}

export type FunctionType = 'operationBefore' | 'operationAfter' | 'subscription' | 'httpRequest' | 'httpResponse' | 'resolver'
