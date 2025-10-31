# Copilot Instructions for PokemonLZADatabase

## Project Overview

This is a **Pokémon Legends Z-A Database** website built with modern web technologies. The project displays game data in an interactive and user-friendly interface.

## Tech Stack

- **Frontend Framework**: React 18 + TypeScript + Vite
- **UI Library**: Ant Design 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM 6
- **Maps**: Leaflet + React Leaflet
- **Build Tool**: Vite 7
- **Package Manager**: pnpm (required, not npm or yarn)
- **Node Version**: v20.19+ or v22.12+

## Development Setup

Always use **pnpm** for package management:

```bash
pnpm install       # Install dependencies
pnpm start         # Start development server
pnpm build         # Production build
pnpm serve         # Preview production build
pnpm lint          # Run ESLint with auto-fix
pnpm format        # Format code with Prettier
```

## Code Style and Conventions

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces in the `src/types` directory
- Avoid using `any` type unless absolutely necessary
- Use type inference where possible

### React

- Use functional components with hooks
- Use PascalCase for component names
- Keep components focused and single-purpose
- Use custom hooks from `ahooks` library where applicable

### Styling

- Prefer Tailwind CSS utility classes for styling
- Use Ant Design components for UI elements
- Keep inline styles minimal
- Use `classnames` library for conditional classes

### Code Quality

- Always run `pnpm lint` before committing
- Follow ESLint and Prettier configurations
- Write clean, readable code with meaningful names
- Add comments only when necessary to explain complex logic

## Project Structure

```
src/
├── App.tsx              # Main application component
├── Routes.tsx           # Route definitions
├── index.tsx            # Application entry point
├── assets/              # Static assets (images, fonts, etc.)
├── components/          # Reusable React components
├── data/                # Data files and constants
├── lib/                 # Library code and utilities
├── pages/               # Page components for routes
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## Guidelines for Code Changes

### Adding New Features

1. Check if similar functionality exists in `src/components` or `src/utils`
2. Create new components in `src/components` if reusable
3. Create new pages in `src/pages` for new routes
4. Add route definitions in `Routes.tsx`
5. Update types in `src/types` if needed

### Working with Data

- Data files are located in `src/data`
- Data source: https://github.com/projectpokemon/za-textport
- Keep data format consistent with existing patterns

### UI Components

- Use Ant Design components as primary UI building blocks
- Refer to Ant Design 5 documentation for component APIs
- Use icons from `@ant-design/icons` package
- Ensure responsive design with Tailwind utilities

### Maps

- Use Leaflet for map functionality
- React Leaflet provides React bindings
- Leaflet Fullscreen plugin is available

## Build and Testing

### Before Submitting Changes

1. Run `pnpm lint` to check for linting errors
2. Run `pnpm format` to format code
3. Run `pnpm build` to verify production build works
4. Test in development mode with `pnpm start`

### Common Issues

- **Build failures**: Check TypeScript errors first
- **Style issues**: Ensure Tailwind classes are valid
- **Import errors**: Use absolute imports from `src/`
- **pnpm issues**: Clear `node_modules` and reinstall if needed

## Deployment

- The site is deployed on Vercel
- Deployment happens automatically on push to main branch
- Preview deployments for pull requests

## Language Support

- The project uses Chinese (中文) for primary content
- Code comments should be in Chinese or English
- UI text should match the existing language convention
- English font: Nunito (from `@fontsource/nunito`)

## Additional Notes

- This is a community project for Pokémon Legends Z-A game
- Keep the user experience smooth and intuitive
- Maintain consistency with existing code patterns
- Respect the MIT License terms
