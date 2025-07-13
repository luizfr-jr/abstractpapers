# Scientific Publication Tools Hub

## Overview

This is a modern web application designed to help researchers find suitable journals for their scientific publications and analyze journal metrics. The application combines AI-powered analysis using Google's Gemini with external journal suggestion tools and citation metrics platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with custom CSS variables for theming
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for server state management and API calls
- **Framer Motion** for animations (configured but not actively used)

### Backend Architecture
- **Express.js** server with TypeScript
- **Node.js** runtime with ES modules
- RESTful API design with `/api` prefix
- Custom middleware for logging and error handling
- In-memory storage implementation (development/demo purposes)

### Database Schema
- **Drizzle ORM** configured for PostgreSQL
- **Neon Database** serverless PostgreSQL provider
- Two main tables:
  - `users`: Basic user authentication schema
  - `analyses`: Stores AI analysis results and abstracts
- JSON storage for complex analysis results

## Key Components

### AI Analysis Service
- **Google Gemini 2.5 Pro** integration for abstract analysis
- Provides journal suggestions, keywords, title alternatives, and lay summaries
- Structured JSON responses with confidence scoring
- Portuguese language support for user-facing content

### Component Structure
- **Header**: Hero section with gradient background and floating animations
- **GeminiSection**: AI-powered abstract analysis interface
- **JournalSuggestions**: External journal finder tools integration
- **MetricsAnalysis**: Citation metrics and journal ranking tools
- **Footer**: Contact information and resource links

### UI Components
- Complete shadcn/ui component library implementation
- Consistent design system with CSS custom properties
- Responsive design with mobile-first approach
- Toast notifications for user feedback
- Form validation with proper error handling

## Data Flow

### Analysis Workflow
1. User inputs scientific abstract (minimum 50 characters)
2. Frontend validates input and sends POST request to `/api/analyze`
3. Backend processes request through Gemini API
4. Results stored in database with unique ID
5. Structured response returned to frontend
6. Analysis results displayed in organized sections

### External Tool Integration
- Links to journal suggestion services (JANE, Elsevier, Wiley, T&F)
- Metrics analysis platforms (JCR, Scopus, SCImago, Google Scholar)
- No direct API integration - uses external service redirects

## External Dependencies

### Core Dependencies
- **Google Generative AI**: Abstract analysis and journal suggestions
- **Drizzle ORM**: Database operations and schema management
- **Neon Database**: Serverless PostgreSQL hosting
- **React Query**: API state management
- **Zod**: Runtime type validation and schema parsing

### UI Dependencies
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and enhanced developer experience
- **ESLint**: Code linting and formatting

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Database**: Drizzle migrations in `/migrations` directory

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string
- `GEMINI_API_KEY`: Google AI API key for analysis
- `NODE_ENV`: Environment detection (development/production)

### Production Deployment
- Single-server deployment with Express serving both API and static files
- Database migrations run via `npm run db:push`
- Static assets served from `/dist/public`
- API routes handled by Express at `/api/*`

### Development Setup
- Hot module replacement via Vite dev server
- Concurrent frontend and backend development
- In-memory storage for rapid prototyping
- TypeScript compilation checking without emitting files

The application is designed as a comprehensive hub for scientific publication tools, combining modern web technologies with AI-powered analysis to streamline the journal selection process for researchers.