# Imagine

## Getting Started
To get started with the Imagine platform, make sure you have the following prerequisites:

Node.js: Version 21 or higher  
PNPM: Version 9 or higher

### Installation and Build

1. Clone the repository:
   ```bash
    git clone https://github.com/chrismpettyjohn/ImagineCMS.git
   ```
      
2. Navigate to the project directory: `cd ImagineCMS`
3. Install dependencies `pnpm install`
3. Build locally `pnpm run build`

## Apps

### Cerberus
Cerberus is the customizable admin panel for managing the content, pages, media, and locales. It provides an intuitive interface for content creators and administrators to control their digital experience.

Manage content types by defining and updating custom content types through a schema-based system.
Pages Management allows you to create and edit pages and link them to content types.
The Media Library enables you to upload, manage, and organize media files.
Locales can be configured and managed for multilingual content.

### Web
The Web app provides a native client experience by rendering components based on the provided schema. It consumes content types and components defined in Cerberus to build user-facing pages.

Native Rendering: Renders pages and components using the schema generated in the admin panel.
Dynamic Content: Fetches and updates content in real-time as defined in the CMS.

## Libs

### lib-composer
The lib-composer library is the engine responsible for converting custom schema definitions (written in YAML) into native React components. It acts as a bridge between the content model and the rendered UI, ensuring the flexibility to build complex, reusable components based on the schema.

Schema-Based Rendering: Uses YAML-defined schemas to generate components dynamically.
Custom Components: Supports the creation of custom component types and templates for unique layouts.

## Services

###svc-user
The svc-user service manages user-related operations including authentication, user profiles, and access control. It integrates seamlessly with other services and apps to ensure secure and role-based access to the system.

### svc-role
The svc-role service provides role-based access control (RBAC) for managing permissions within the system. It defines roles and assigns specific permissions to each role, allowing for fine-grained control over access to content and features.

### svc-graphql
The svc-graphql service is responsible for providing a GraphQL API that allows clients to query and mutate data from the CMS. It powers the dynamic content consumption by web clients and integrates well with the schema-driven approach of the platform.
