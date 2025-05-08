// TelescopeQA flow
'use server';

/**
 * @fileOverview Answers questions about space telescopes.
 *
 * - telescopeQA - A function that answers questions about space telescopes.
 * - TelescopeQAInput - The input type for the telescopeQA function.
 * - TelescopeQAOutput - The return type for the telescopeQA function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const TelescopeQAInputSchema = z.object({
  question: z.string().describe('The question about space telescopes.'),
});
export type TelescopeQAInput = z.infer<typeof TelescopeQAInputSchema>;

const TelescopeQAOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about space telescopes.'),
});
export type TelescopeQAOutput = z.infer<typeof TelescopeQAOutputSchema>;

export async function telescopeQA(input: TelescopeQAInput): Promise<TelescopeQAOutput> {
  return telescopeQAFlow(input);
}

const prompt = ai.definePrompt({
  name: 'telescopeQAPrompt',
  input: {
    schema: z.object({
      question: z.string().describe('The question about space telescopes.'),
    }),
  },
  output: {
    schema: z.object({
      answer: z.string().describe('The answer to the question about space telescopes.'),
    }),
  },
  prompt: `You are a helpful AI assistant with expert knowledge about space telescopes.
  Answer the following question clearly and concisely, using your knowledge about telescopes:

  Question: {{{question}}}`,
});

const telescopeQAFlow = ai.defineFlow<
  typeof TelescopeQAInputSchema,
  typeof TelescopeQAOutputSchema
>({
  name: 'telescopeQAFlow',
  inputSchema: TelescopeQAInputSchema,
  outputSchema: TelescopeQAOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
