import React from "react";
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AnimatedHero from "./animatedHero";
// ⬇️ Default export metadata
const meta = {
  title: 'Heroes/AnimatedHero',
  component: AnimatedHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedHero>;

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

// 🧪 Alternate Story Variant
export const CustomBox: Story = {
  args: {
    title: 'Designed for the bold. Built to glow.',
    description: 'A design system that actually understands the assignment.',
    buttonText: 'Launch Debug Mode',
    height: 'lg',
  },
};

export const SmallHero: Story = {
  args: {
    title: 'Small Hero',
    description: 'Short and sweet.',
    buttonText: 'Go Small',
    height: 'sm',
  },
};
