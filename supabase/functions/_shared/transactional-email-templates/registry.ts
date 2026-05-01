/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as pilotRequestNotification } from './pilot-request-notification.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'pilot-request-notification': pilotRequestNotification,
}
