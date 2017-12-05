export interface GraphcoolDefinition {
  service: string
  datamodel: string | string[]
  apikey?: string
  stages: StageMap
  schema?: string
  custom?: any
  subscriptions?: SubscriptionMap
}

export interface StageMap {
  [stageName: string]: string
}

export interface SubscriptionMap {
  [subscriptionName: string]: SubscriptionDefinition
}

export interface SubscriptionDefinition {
  query: string
  webhook: FunctionHandlerWebhookSource
}

export type FunctionHandlerWebhookSource =
  | string
  | FunctionHandlerWebhookWithHeaders

export interface FunctionHandlerWebhookWithHeaders {
  url: string
  headers?: Header[]
}

export interface Header {
  name: string
  value: string
}
