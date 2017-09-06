export interface GraphcoolDefinition {
  types: string
  permissions: Array<Permission>
  functions: FunctionDefinition[]
  rootTokens: string[]
}

export interface Permission {
  description: string
  isEnabled?: boolean
  // (modelName.(create|read|list|update|delete) | relationName.(connect|disconnect))
  operation: string
  authenticated: boolean
  query?: string
  fields: string[]
}

export interface FunctionDefinition {
  name: string
  isEnabled: boolean
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
  code?: {
    src: string
  }
}

export interface FunctionHandlerWebhook {
  webhook: FunctionHandlerWebhookSource
}

export type FunctionHandlerWebhookSource = string | FunctionHandlerWebhookWithHeaders

export interface FunctionHandlerWebhookWithHeaders {
  url: string
  headers: Header[]
}

export interface Header {
  name: string
  value: string
}

export type FunctionType = 'operationBefore' | 'operationAfter' | 'subscription' | 'httpRequest' | 'httpResponse'
