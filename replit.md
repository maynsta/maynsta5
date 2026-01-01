# Maynsta

## Overview

Maynsta is a music streaming and publishing platform built with Next.js. The application allows users to listen to music, create playlists, and manage their music library. It features a Spotify-like interface with a sidebar navigation, music player bar, and content areas for browsing albums, songs, and playlists. The platform supports both regular users and artists who can publish their music.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14+ with App Router and React Server Components
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: React Context API for global state (player, sidebar, theme)
- **Data Fetching**: SWR for client-side data fetching with caching and revalidation

### Layout Structure
- **App Router Layout**: Uses Next.js App Router with nested layouts
- **Main Layout** (`app/(main)/layout.tsx`): Protected layout wrapping authenticated pages with sidebar, player bar, and main content area
- **Auth Layout**: Separate route group for authentication pages

### Key Components
- **PlayerBar**: Fixed bottom music player with playback controls, progress bar, and song info
- **Sidebar**: Collapsible navigation sidebar with links to Home, Search, Library, and Account
- **MainContent**: Responsive content wrapper that adjusts based on sidebar state

### Context Providers
- **PlayerProvider**: Manages audio playback state, queue, progress tracking, and playback controls
- **SidebarProvider**: Controls sidebar collapse/expand state
- **ThemeProvider**: Handles light/dark/system theme preferences with localStorage persistence

### Authentication & Authorization
- **Supabase Auth**: Server-side and client-side authentication using Supabase SSR
- **Middleware**: Proxy-based session management for protected routes
- **Route Protection**: Automatic redirects for unauthenticated users to login, and authenticated users away from auth pages

### Database
- **Supabase (PostgreSQL)**: Backend-as-a-service providing database, authentication, and storage
- **Data Models**: Profiles, Albums, Songs, Playlists with relationships between entities
- **Features**: Parental controls, explicit content filtering, artist profiles, music video support

## External Dependencies

### Backend Services
- **Supabase**: Authentication, PostgreSQL database, and file storage for audio/images
- **Vercel Analytics**: Usage analytics and performance monitoring

### Key NPM Packages
- `@supabase/ssr` and `@supabase/supabase-js`: Supabase client libraries for SSR and client-side
- `react-hook-form` with `@hookform/resolvers`: Form handling and validation
- `swr`: Data fetching with caching
- `date-fns`: Date manipulation
- `embla-carousel-react`: Carousel/slider functionality
- `lodash`: Utility functions (debounce used for auto-save)
- `vaul`: Drawer component for mobile interfaces

### UI Dependencies
- Full shadcn/ui component suite built on Radix UI primitives
- `class-variance-authority` and `clsx`: Utility-first CSS class management
- `lucide-react`: Icon library
- `tailwindcss` with `tw-animate-css`: Styling and animations