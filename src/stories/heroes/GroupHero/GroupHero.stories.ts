import React from "react";
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import GroupHero from "./GroupHero";
// ⬇️ Default export metadata
const meta = {
  title: 'Heroes/GroupHero',
  component: GroupHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GroupHero>;

export default meta;
type Story = StoryObj<typeof meta>;

// ✨ Primary Story
export const Primary: Story = {
  args: {
    title: 'Designed for the bold. Built to glow.',
    description: 'A design system that actually understands the assignment.',
    buttonText: 'Launch Debug Mode',
    height: 'md',
  },
};
