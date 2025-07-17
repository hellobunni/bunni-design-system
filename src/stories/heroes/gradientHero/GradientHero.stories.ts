import React from "react";
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import GradientHero from './GradientHero';

// ⬇️ Default export metadata
const meta = {
  title: 'Heroes/GradientHero',
  component: GradientHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GradientHero>;

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

export const FullScreenHero: Story = {
  args: {
    title: 'Full Screen Hero',
    description: 'Takes up the whole viewport.',
    buttonText: 'Go Big',
    height: 'full-screen',
  },
};

// // 📦 Manual Render Example
// export const OneItem: Story = {
//   render: () => (
//     <div className="p-8 bg-gray-100 rounded-lg text-center">
//       TESTING
//     </div>
//   ),
// };