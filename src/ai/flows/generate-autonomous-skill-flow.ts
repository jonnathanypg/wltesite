'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating an autonomous 'Skill' definition in JSON Schema format
 * based on a natural language description of business problems and functional requirements.
 *
 * - generateAutonomousSkill - A function that orchestrates the generation of the Skill definition.
 * - GenerateAutonomousSkillInput - The input type for the generateAutonomousSkill function.
 * - GenerateAutonomousSkillOutput - The return type for the generateAutonomousSkill function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAutonomousSkillInputSchema = z.object({
  businessProblemDescription: z
    .string()
    .describe('A natural language description of the business problem and functional requirements.'),
});
export type GenerateAutonomousSkillInput = z.infer<typeof GenerateAutonomousSkillInputSchema>;

const GenerateAutonomousSkillOutputSchema = z.object({
  skillName: z.string().describe('The name of the autonomous skill.'),
  skillDescription: z.string().describe('A detailed description of what the skill does.'),
  inputJsonSchema: z
    .string()
    .describe(
      'A JSON Schema string defining the expected input structure for the skill. This should be a valid JSON string.'
    ),
  outputJsonSchema: z
    .string()
    .describe(
      'A JSON Schema string defining the expected output structure from the skill. This should be a valid JSON string.'
    ),
});
export type GenerateAutonomousSkillOutput = z.infer<typeof GenerateAutonomousSkillOutputSchema>;

export async function generateAutonomousSkill(
  input: GenerateAutonomousSkillInput
): Promise<GenerateAutonomousSkillOutput> {
  return generateAutonomousSkillFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAutonomousSkillPrompt',
  input: {schema: GenerateAutonomousSkillInputSchema},
  output: {schema: GenerateAutonomousSkillOutputSchema},
  prompt: `You are an expert Agentic Architect tasked with designing modular 'Skills' for autonomous agents.
Given the following business problem description and functional requirements, generate a definition for a new autonomous 'Skill' in JSON Schema format.

Your output must be a JSON object with the following properties:
- 'skillName': A concise name for the skill (string).
- 'skillDescription': A detailed description of the skill's purpose and functionality (string).
- 'inputJsonSchema': A JSON Schema string representing the required input parameters for this skill. Ensure it's a valid JSON string.
- 'outputJsonSchema': A JSON Schema string representing the expected output data from this skill. Ensure it's a valid JSON string.

The JSON Schema strings for 'inputJsonSchema' and 'outputJsonSchema' should define the structure, types, and descriptions of the data.

Business Problem Description and Functional Requirements: 
"""{{{businessProblemDescription}}}"""

Example JSON Schema for 'inputJsonSchema':
{
  "type": "object",
  "properties": {
    "param1": { "type": "string", "description": "Description for param1" },
    "param2": { "type": "number", "description": "Description for param2" }
  },
  "required": ["param1"]
}

Example JSON Schema for 'outputJsonSchema':
{
  "type": "object",
  "properties": {
    "resultField": { "type": "boolean", "description": "Description for resultField" }
  }
}

Your output MUST be a single JSON object matching the GenerateAutonomousSkillOutputSchema.
`,
});

const generateAutonomousSkillFlow = ai.defineFlow(
  {
    name: 'generateAutonomousSkillFlow',
    inputSchema: GenerateAutonomousSkillInputSchema,
    outputSchema: GenerateAutonomousSkillOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
