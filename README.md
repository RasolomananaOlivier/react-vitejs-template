# Structuration du code en React.

Créé par: Rasolomanana herimanitra Olivier
Dernière modification: 7 mars 2023 10:52
Dernière modification par: Rasolomanana herimanitra Olivier
Heure de création: 6 mars 2023 22:04
Étiquettes: documentation

# Structuration du code en React

La structuration basée sur les fonctionnalités est une approche de structuration du code qui organise les fichiers en fonction des fonctionnalités de l'application plutôt que des types de fichiers (tels que les composants, les services, les tests, etc.). Cette approche permet de regrouper le code lié à une fonctionnalité spécifique en un seul endroit, ce qui facilite la lecture, la compréhension et la maintenance du code.

## Pourquoi utiliser TypeScript pour un project React ?

Il y a plusieurs avantages à utiliser TypeScript au lieu de JavaScript dans un projet React :

1. TypeScript est un langage typé, ce qui signifie que l'on peut spécifier le type de chaque variable et de chaque fonction. Cela permet de détecter plus facilement les erreurs de typage à la compilation plutôt qu'à l'exécution, ce qui rend le code plus robuste et moins sujet aux bugs.
2. TypeScript offre une meilleure autocomplétion et une meilleure documentation du code grâce aux types. Les IDE peuvent ainsi fournir des suggestions de code plus précises et les développeurs peuvent facilement comprendre le type des données manipulées dans le code.
3. TypeScript est compatible avec les bibliothèques et les outils existants de JavaScript, y compris React. Cela signifie que l'on peut utiliser les mêmes outils et bibliothèques que pour un projet JavaScript, tout en bénéficiant des avantages de TypeScript.
4. TypeScript offre également une meilleure maintenabilité du code. En effet, la typage permet de mieux comprendre la structure du code et de faciliter la refacturation. De plus, le compilateur TypeScript offre de nombreuses vérifications de code qui permettent de détecter rapidement les erreurs potentielles et de maintenir un code de qualité.

## Vue d’ensemble de la structure du code

Le groupement par fonctionnalité est bénéfique dans les projets de grande taille où le nombre de fichiers peut devenir rapidement ingérable et où la coordination entre les équipes de développement devient un défi.

```csharp
src/
├── assets/
├── constants/
├── hooks/
├── components/
├── layouts/
├── lib/
├── utils/
├── redux/
├── utils/
├── features/
├── App.ts
├── main.ts
└── ...
```

## Assets

Le dossier **assets** contient tous les fichiers statiques tels que les images, les polices de caractères, les vidéos et autres fichiers multimédias nécessaires à l'interface utilisateur de l'application. Ces fichiers sont généralement référencés dans les fichiers JavaScript ou CSS. Il est important de séparer ces fichiers des fichiers de code pour faciliter la maintenance et la gestion des ressources de l'application.

```csharp
assets/
├── images/
│   ├── logo.png
│   ├── background.jpg
│   └── ...
├── fonts/
│   ├── font.ttf
│   ├── font.woff
│   └── ...
└── ...
```

## Constants

Le dossier **constants** contient des fichiers qui définissent des constantes utilisées dans l'application. Ces constantes peuvent être des valeurs telles que des noms de couleurs, du thème, ou des messages d'erreur. En regroupant ces constantes dans un dossier dédié, il est plus facile de les gérer et de les modifier si nécessaire. De plus, cela évite de répéter les mêmes valeurs dans plusieurs fichiers différents, ce qui peut rendre le code plus difficile à maintenir.

```csharp
constants/
├── endpoints.ts
├── routes.ts
├── sizes.ts
└── ...
```

## Hooks

Dans le dossier "hooks", vous pouvez stocker tous les hooks personnalisés de l’application. Vous pouvez organiser ces hooks en fonction de leur rôle dans l'application. Par exemple, vous pouvez avoir un hook pour gérer l'authentification des utilisateurs, un hook pour gérer la pagination des données, un hook pour gérer les formulaires, etc. Seuls les hooks qui seront utilisés globalement doivent être stockés dans ce dossier.

```csharp
hooks/
├── useLocalStorage.ts
├── useAuth.ts
├── useScroll.ts
└── ...
```

> Seuls les hooks qui sont susceptibles d'être utilisés dans toute l'application doivent être stockés dans ce dossier. Les hooks spécifiques à une fonctionnalité doivent être placés dans le dossier correspondant.
> 

## Components

```csharp
components/
├── Button/
│   ├── index.ts
│   ├── Button.tsx
│   ├── Button.module.css
│   └── types.ts
├── Input/
│   ├── index.ts
│   ├── Input.tsx
│   ├── Input.module.css
│   └── types.ts
└── ...
```

Le dossier **`components`** contient les composants React réutilisables qui peuvent être utilisés dans plusieurs parties de l'application. Dans l'exemple ci-dessus, nous avons les composants **`Button`** et **`Input`**.

Chaque composant est stocké dans son propre dossier avec son propre fichier **`.tsx`**, ainsi qu'un fichier **`.module.css`** pour les styles spécifiques au composant, un fichier **`types.ts`** pour les types spécifiques au composant, et un fichier **`index.ts`** qui exporte le composant et tout autre élément utile du composant, tels que des types ou des utilitaires.

> Seuls les composants qui sont susceptibles d'être utilisés dans toute l'application doivent être stockés dans ce dossier. Les composants spécifiques à une fonctionnalité doivent être placés dans le dossier correspondant.
> 

> On utilise le fichier **`index.tsx`** comme point d'entrée pour chaque composant. Cela permet d'importer facilement un composant en utilisant simplement le nom du dossier, par exemple **`import Button from './components/Button'`**.
> 

### Exemple pour le composant Button

- Typage du composant dans `./components/Button/types.ts` :

```tsx
export interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
	className?: string;
};
```

Dans ce fichier, on définit simplement le type **`ButtonProps`** qui est utilisé pour typer le composant Button dans d'autres fichiers. Le type contient les mêmes propriétés que dans les exemples précédents. On peut ensuite importer ce type dans les fichiers qui utilisent le composant Button.

- Creation du composant dans**`./components/Button/Button.tsx`**:

```tsx
import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, className = " }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
```

- Exportation et utilisation du composant dans d’autres fichiers:

```tsx
export { default } from './Button';
export * from './types';
```

Dans cet exemple, nous exportons par défaut le composant **`Button`**
 à partir du fichier **`Button.tsx`**. Nous exportons également tous les types du composant à partir du fichier **`types.ts`**. Cette structure permet aux autres fichiers d'importer facilement le composant et ses types associés en utilisant une syntaxe de raccourci, comme ceci :

```tsx
import Button from 'components/Button';
import { ButtonProps } from 'components/Button';

// Utilisation du composant
<Button onClick={() => console.log('Button clicked!')}>Cliquez-moi</Button>
```

## Layouts

Dans ce dossier, on stocke généralement les mises en page de l'application, c'est-à-dire les éléments qui sont affichés de manière cohérente sur toutes les pages ou sur un ensemble de pages. Par exemple, une barre de navigation ou un pied de page. Les layouts peuvent être personnalisés en fonction du contexte dans lequel ils sont utilisés, par exemple un layout différent pour les pages d'authentification ou les pages publiques. Chaque layout est généralement organisé dans un dossier qui contient tous les fichiers liés à ce layout, tels que les fichiers de code, les styles, les tests, etc. Cela permet de maintenir une bonne organisation et de faciliter la réutilisation des layouts dans toute l'application.

```csharp
layouts/
├── MainLayout/
│   ├── index.tsx
│   ├── MainLayout.module.css
│   └── MainLayout.test.tsx
├── AuthLayout/
│   ├── index.tsx
│   ├── AuthLayout.module.css
│   └── AuthLayout.test.tsx
├── ...
└── ...
```

### Exemple du `layouts/MainLayout`

- Creation du composant :

```tsx
import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout : React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
```

- Exportation et utilisation

Dans cet exemple, le composant `MainLayout` est un layout commun qui sera utilisé sur plusieurs pages de l'application. Il contient un en-tête (Header), un pied de page (Footer) et une section principale (main) qui peut contenir le contenu spécifique à chaque page.

La props children est utilisée pour passer les éléments enfants du composant, qui seront affichés dans la section principale. On utilise ici le typage `ReactNode` pour définir que ces éléments peuvent être n'importe quel type d'élément React (un composant, du texte, etc.).

Ce fichier est ensuite exporté pour être utilisé dans d'autres fichiers, par exemple dans le fichier d'une page qui aura besoin de ce layout :

```tsx
import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Page d'accueil</h1>
      <p>Bienvenue sur mon site !</p>
    </MainLayout>
  );
};

export default HomePage;
```

## Lib

Le dossier **`lib`**est utilisé pour stocker des fonctions qui encapsulent les fonctionnalités de librairies tierces utilisées par l'application.

```csharp
lib/
├── client.ts
├── firebase
└── ...
```

## Utils

Le dossier **`utils`** est utilisé pour stocker des fonctions utilitaires qui peuvent être utilisées dans toute l'application. Ces fonctions peuvent effectuer des tâches telles que la validation de données, la gestion des erreurs, la manipulation de dates, etc. En regroupant ces fonctions dans un dossier **`utils`**, il est plus facile de les réutiliser dans différents composants, pages ou fonctionnalités.

```csharp
utils/
├── dateUtils.ts
├── errorHandler.ts
├── validation.ts
└── ...
```

## Features

Le dossier **`features`** est utilisé pour stocker les fonctionnalités de l'application. Chaque fonctionnalité devrait être regroupée dans un dossier séparé, comme **`auth`** ou **`cart`**  par exemple.

Dans chaque dossier de fonctionnalité, on peut trouver des sous-dossiers tels que **`components`**
, **`pages`** et **`hooks`** pour stocker les composants, contextes et hooks spécifiques à cette fonctionnalité.

```csharp
features/
├── auth/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── types.ts
│   └── index.ts
├── cart/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── types.ts
│   └── index.ts
└── ...
```

Voici un exemple de code pour le fichier **`auth/index.ts`**:

```tsx
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import useAuth from './hooks/useAuth';

export { LoginPage, RegisterPage, useAuth };
```

Dans cet exemple, nous exportons les composants **`LoginPage`** et **`RegisterPage`**, ainsi que le hook **`useAuth`**, qui sont spécifiques à la fonctionnalité d'authentification. Ces éléments peuvent ensuite être importés depuis d'autres parties de l'application en utilisant :

```tsx
import { LoginPage, RegisterPage, useAuth } from '../features/auth';
```

## Pages

Dans ce dossier, on stocke généralement les pages de l'application, c'est-à-dire les composants qui sont associés à une URL spécifique et qui sont chargés lorsque l'utilisateur accède à cette URL. Chaque page est généralement organisée dans un dossier qui contient tous les fichiers liés à cette page, tels que les fichiers de code, les styles, les tests, etc.

```csharp
features/
└── auth/
    ├── hooks/
    ├── index.ts
    └── pages/
					├── LoginPage/
					│   ├── index.tsx
					│   ├── Home.module.css
					│   └── Home.test.tsx
					├── RegisterPage/
					│   ├── index.tsx
					│   ├── About.module.css
					│   └── About.test.tsx
					└── ...
```

> On utilise le fichier **`index.tsx`** comme point d'entrée pour chaque page. Cela permet d'importer facilement une page en utilisant simplement le nom du dossier, par exemple **`import About from './pages/About'`**.
> 

## Redux

```tsx
src/
  ├── redux/
  |   ├── reducers/
  |   |   ├── userSlice.ts
  |   |   └── ...
  |   ├── selectors/
  |   |   ├── userSelector.js
  |   |   └── ...
  |   └── store.ts
  └── ...
```

Le dossier **`redux`** contient les fichiers liés à la gestion d'état de l'application avec Redux. Le fichier **`store.ts`** permet de créer et de configurer le store **Redux**, qui centralise l'état global de l'application. Le dossier **`reducers`** contient les fichiers slices qui décrivent comment l'état de l'application est mis à jour en réponse à des actions. Le dossier **`selectors`** contient les fichiers qui permettent de sélectionner des données spécifiques de l'état global de l'application.

### Exemple de configuration

- Configuration du `store.ts`

```tsx
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import cartReducer from './reducers/cartSlice';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
```

Ici, nous importons **`configureStore`** et **`combineReducers`** depuis `Redux Toolkit`. Nous avons également importé les réducteurs de tranche **`userSlice`** et **`cartSlice`** que nous avons combinés en un seul réducteur racine à l'aide de **`combineReducers`**.

Nous avons également créé un type **`RootState`** qui est le type renvoyé par **`combineReducers`** lorsque nous passons notre réducteur racine. Enfin, nous avons utilisé **`configureStore`** pour créer notre store et exporté ce store.

- Configuration du `reducer`

```tsx
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState: IUser = {
	id: null,
  name: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      return {
        ...action.payload,
      };
		clearUser: (state) => {
	     return { 
				id: null,
				name: null,
				email: null
			}
    },
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
```

Dans cet exemple, nous avons créé un **`userSlice`**
 avec un état initial qui contient l'id, le nom et l'e-mail de l'utilisateur. Ensuite, nous avons créé deux actions **`setUser`** et **`clearUser`** qui mettent à jour l'état en fonction de la nouvelle valeur passée en tant que **`payload`**. Nous avons également créé un sélecteur **`selectUser`**
 qui permet de sélectionner l'état de l'utilisateur à partir du **`RootState`**. Enfin, nous avons exporté les actions et le réducteur par défaut (**`userSlice.reducer`**).

- Configuration du `selector`

```tsx
import { RootState } from '../store';

export const selectUser = (state: RootState) => state.user;

export const selectUserName = (state: RootState) => state.user.name;

export const selectUserEmail = (state: RootState) => state.user.email;
```

Dans cet exemple, nous importons le type **`RootState`** qui est le type global de l'état de l'application, qui est défini dans le fichier **`store.ts`**. Nous exportons ensuite différentes fonctions sélectrices qui permettent d'accéder aux données stockées dans le **`userSlice`**.

La première fonction **`selectUser`** retourne l'ensemble des données stockées dans le **`userSlice`**, tandis que les deux autres fonctions **`selectUserName`** et **`selectUserEmail`** retournent respectivement le nom et l'email de l'utilisateur.

Ces fonctions peuvent ensuite être utilisées dans les composants React pour accéder aux données du **`userSlice`**.