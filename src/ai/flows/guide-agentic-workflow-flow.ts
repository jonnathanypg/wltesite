'use server';
/**
 * @fileOverview Guides enterprise users through the 4-Phase Agentic Workflow, interpreting objectives
 * and suggesting optimal configurations and next steps to reduce friction and optimize the experience.
 * This directly contributes to the optimization of the Total Value Integral (Ω_Total) by streamlining
 * the problem-solving and solution-design process.
 *
 * - guideAgenticWorkflow - A function that orchestrates the guiding process.
 * - GuideAgenticWorkflowInput - The input type for the guideAgenticWorkflow function.
 * - GuideAgenticWorkflowOutput - The return type for the guideAgenticWorkflow function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GuideAgenticWorkflowInputSchema = z.object({
  currentPhase: z
    .enum(['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Introduction'])
    .describe(
      'The current phase of the agentic workflow the user is in, or "Introduction" if starting.'
    ),
  userObjective: z
    .string()
    .describe('The user\'s current goal or what they are trying to achieve with the agentic workflow.'),
  businessContext: z
    .string()
    .describe(
      'A detailed description of the user\'s business, operational bottlenecks, or specific problem they want to solve.'
    ),
});
export type GuideAgenticWorkflowInput = z.infer<
  typeof GuideAgenticWorkflowInputSchema
>;

const GuideAgenticWorkflowOutputSchema = z.object({
  nextPhaseSuggestion: z
    .enum(['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Completion'])
    .describe(
      'The suggested next phase for the user to move to, or "Completion" if the workflow is done.'
    ),
  optimalConfigurationSuggestions: z
    .array(z.string())
    .describe(
      'A list of optimal configurations or approaches suggested for the current and next steps, based on the user\'s input.'
    ),
  guidanceText: z
    .string()
    .describe(
      'Comprehensive guidance text for the user, explaining the current step, what actions to take, and the rationale behind the suggestions.'
    ),
  frictionReductionTips: z
    .array(z.string())
    .describe(
      'Specific tips and strategies to reduce friction and optimize the user experience in the current phase.'
    ),
});
export type GuideAgenticWorkflowOutput = z.infer<
  typeof GuideAgenticWorkflowOutputSchema
>;

export async function guideAgenticWorkflow(
  input: GuideAgenticWorkflowInput
): Promise<GuideAgenticWorkflowOutput> {
  return guideAgenticWorkflowFlow(input);
}

const prompt = ai.definePrompt({
  name: 'guideAgenticWorkflowPrompt',
  input: {schema: GuideAgenticWorkflowInputSchema},
  output: {schema: GuideAgenticWorkflowOutputSchema},
  prompt: `You are an expert "Agentic Architect" guiding a business user through the 4-Phase Agentic Workflow for an elite AI Research & Deployment firm. Your goal is to interpret the user's objectives and business context, then provide optimal configurations, next steps, and comprehensive guidance to reduce friction. This guidance must maximize the "Total Integral of Value" (Ω_Total) by ensuring seamless progression and optimized decision-making.

Here are the 4 phases and their descriptions:

Phase 1: Pain Mapping & Friction Analysis
Description: A dynamic process where enterprise users input operational bottlenecks. The system computes and outputs a clear breakdown visualizing the generated Delta of Efficiency (Δ_Efficiency). This phase focuses on identifying and quantifying problems to be solved by agentic infrastructure. Aims to minimize system entropy by precisely locating sources of inefficiency.

Phase 2: Value Architecture & Symbiosis Design
Description: A visual configuration board mapping human-agent interaction topologies. Users toggle between "Autonomous" vs. "Assisted" tasks while demonstrating a decentralization-ready technology stack. This phase focuses on designing solutions that maximize value creation and impact scaling through symbiosis and decentralized readiness.

Phase 3: Zero-Friction MVP Execution
Description: An "invisible" UI playground where complexity is entirely hidden from view. The agent handles predictive execution, and the human merely supervises the output. No intrusive alerts or confirmation prompts unless absolutely critical. This phase embodies hyper-efficient, thermodynamic computation, ensuring zero bloat and optimized API pooling.

Phase 4: Integral Validation
Description: A real-time testing suite dashboard that stress-tests the application for data sovereignty (proving the user fully owns their data) and thermal/energy efficiency. This phase ensures the solution's performance aligns with thermodynamic constraints and decentralization-ready architecture mandates, validating the integral value delivered.

---

Based on the user's current situation, provide guidance that specifically addresses their needs within the context of these phases:

Current Phase: {{{currentPhase}}}
User Objective: {{{userObjective}}}
Business Context: {{{businessContext}}}

Provide the output in a JSON format matching the schema { "nextPhaseSuggestion": "<phase>", "optimalConfigurationSuggestions": ["<suggestion1>", "<suggestion2>"], "guidanceText": "<detailed guidance>", "frictionReductionTips": ["<tip1>", "<tip2>"] }.
`,
});

const guideAgenticWorkflowFlow = ai.defineFlow(
  {
    name: 'guideAgenticWorkflowFlow',
    inputSchema: GuideAgenticWorkflowInputSchema,
    outputSchema: GuideAgenticWorkflowOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
