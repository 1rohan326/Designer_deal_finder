# Designer Deal Finder

## Project Description

Designer Deal Finder is a full stack web application that helps users find discounted designer and luxury fashion products. Users can search for products, filter by category and price, view product details, and browse the best deals available from external product APIs.

The application uses a Node.js and Express backend, a Supabase database, and Fetch API requests on the frontend. Product information is retrieved through the Dummy JSON API and displayed using JavaScript.

Features include:
- Product search functionality
- Product details pages
- Deals page with lowest-price sorting
- Favorites database integration
- Modern design
- Dynamic frontend rendering
- REST API backend architecture

# Target Browsers

The application is designed for modern desktop and mobile browsers.

## Desktop Browsers
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Mobile Browsers
- iOS Safari
- Android Chrome

The application uses CSS layouts keep compatibility across screen sizes and devices.

# Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript
- Fetch API

## Backend
- Node.js
- Express.js

## Database
- Supabase

## External APIs
- Dummy JSON API


# Link to Developer Manual

See the Developer Manual below or inside:



# Developer Manual

## Overview

Designer Deal Finder is a full-stack web application that allows users to search for discounted designer products and save favorite deals.

The system includes:
- Frontend pages
- Express backend server
- Supabase database
- External API integrations

# Installing the Application

## Step 1: Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY
```

## Step 2: Navigate Into Project

```bash
cd DesignerDealFinder
```

## Step 3: Install Dependencies

```bash
npm install
```

Dependencies include:
- express
- cors
- dotenv
- node-fetch
- axios
- @supabase/supabase-js


# Environment Variables

Create a `.env` file in the root directory.

Example:

```env
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_KEY=YOUR_SUPABASE_KEY
```

# Running the Application

## Development Mode

```bash
node server.js
```

## Production Mode

```bash
npm start
```

The application runs locally at:

```txt
http://localhost:3000
```

# Running Tests

The application uses manual testing through localhost routes and browser testing.

# API Endpoints

## GET /api/search

Retrieves product data from the Dummy JSON API.

### Returns
JSON array of products.


## GET /api/product/:id

Retrieves details for a specific product.

### Parameters
- id

### Returns
Single product object.

## GET /api/favorites

Retrieves favorite products stored in Supabase.

### Returns
JSON array of favorite products.

## POST /api/favorites

Stores a favorite product inside Supabase.


# Database Setup

Run the following SQL inside Supabase SQL Editor:

```sql
create table favorites (
  id bigint generated always as identity primary key,
  product_name text,
  price numeric,
  image text,
  link text
);
```

# Known Bugs

- Dummy JSON API has limited product selection.
- Product search relevance can be improved.
- No user authentication system implemented.
- Product filtering functionality could be expanded.

# Future Development Roadmap

Planned future improvements include:
- User authentication
- Wishlist functionality
- AI-powered recommendations
- Dark/light mode
- Pagination
- Better filtering options
- Real e-commerce API integrations
- Mobile app version

# Deployment

The application is deployed using Vercel.

Recommended services:
- Vercel for hosting
- Supabase for database hosting
