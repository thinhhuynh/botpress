import { z } from '@botpress/sdk'

export const TargetsSchema = z.object({
  pullRequest: z.string().optional(),
  issue: z.string().optional(),
  discussion: z.string().optional(),
})

export type Targets = z.infer<typeof TargetsSchema>
