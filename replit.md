# Overview

This is a React-based portfolio and company website for Infosense Technology, a software development company led by Gowtham. The site showcases services, projects, skills, and SaaS products in a modern, responsive design. Built as a full-stack application with Express backend for handling contact forms and potential future API endpoints.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with shadcn/ui component library for consistent, modern UI components
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Single-page application with section-based navigation using smooth scrolling

## Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript for type safety across the stack
- **API Structure**: RESTful endpoints with validation using Zod schemas
- **Development Mode**: Hot module replacement with Vite middleware integration
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Definition**: Centralized schema in shared directory for type consistency
- **Development Storage**: In-memory storage implementation for development/testing
- **Migration Management**: Drizzle Kit for database schema migrations

## Authentication and Authorization
- **Current State**: Basic user schema defined but not actively implemented
- **Session Management**: PostgreSQL session store configured (connect-pg-simple)
- **Future Implementation**: Ready for cookie-based session authentication

## Form Handling
- **Validation**: React Hook Form with Zod resolver for type-safe form validation
- **Contact Forms**: Backend endpoint for contact form submissions with proper validation
- **User Feedback**: Toast notifications for form submission status

## Performance Optimizations
- **Code Splitting**: Component-based architecture enabling efficient code splitting
- **Asset Optimization**: Vite's built-in optimization for production builds
- **Image Loading**: External image sources with proper lazy loading considerations
- **Caching**: React Query for intelligent data caching and invalidation

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Connection**: Environment variable-based database URL configuration

## UI Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality for showcasing content

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **TypeScript**: Full-stack type safety with shared types between client and server
- **ESLint/Prettier**: Code quality and formatting (configured via package.json)

## Styling Dependencies
- **TailwindCSS**: Utility-first CSS framework
- **Class Variance Authority**: Type-safe variant API for component styling
- **PostCSS**: CSS processing with Autoprefixer

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API endpoints

## Deployment Considerations
- **Build Process**: Separate client (Vite) and server (esbuild) build processes
- **Static Assets**: Client build outputs to dist/public for static serving
- **Environment Variables**: Database URL and other config via environment variables