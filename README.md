# Tailwind Color Register

A curated collection of pre-defined color palettes for Tailwind CSS, designed to streamline your design workflow and enhance the visual appeal of your projects.

With this you can use all your favourite tailwind colors in js/ts projects!

### Guide
1. Installation
2. How to use

## Installation

```bash
npm install tailwind-color-register
```

## How to use 
```typescript
import { Button, colors, styled } from "@mui/material";
import TailwindColors from "tailwind-color-register";

interface DesignButtonProps {
	loading?: boolean;
}

const DesignButton = styled(Button)<DesignButtonProps>(
	({ theme, loading }) => ({
		backgroundColor: TailwindColors.gray[900], //* hover over 900 to get a preview of gray 900, applies the same for other colors as well
		color: TailwindColors.white,
		fontWeight: 600,
		borderRadius: "8px",
	})
);

export default DesignButton;

```