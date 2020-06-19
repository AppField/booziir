/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCocktailRecipe = /* GraphQL */ `
  query GetCocktailRecipe($id: ID!) {
    getCocktailRecipe(id: $id) {
      id
      clientId
      name
      description
      preparation
      ingredients {
        items {
          id
          clientId
          cocktailRecipeID
          ingredientID
          cocktailRecipe {
            id
            clientId
            name
            description
            preparation
            ingredients {
              nextToken
            }
            createdAt
            updatedAt
          }
          ingredient {
            id
            clientId
            name
            inStock
            type
            cocktailIngredients {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCocktailRecipes = /* GraphQL */ `
  query ListCocktailRecipes(
    $filter: ModelCocktailRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCocktailRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        name
        description
        preparation
        ingredients {
          items {
            id
            clientId
            cocktailRecipeID
            ingredientID
            cocktailRecipe {
              id
              clientId
              name
              description
              preparation
              createdAt
              updatedAt
            }
            ingredient {
              id
              clientId
              name
              inStock
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      clientId
      name
      inStock
      type
      cocktailIngredients {
        items {
          id
          clientId
          cocktailRecipeID
          ingredientID
          cocktailRecipe {
            id
            clientId
            name
            description
            preparation
            ingredients {
              nextToken
            }
            createdAt
            updatedAt
          }
          ingredient {
            id
            clientId
            name
            inStock
            type
            cocktailIngredients {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        name
        inStock
        type
        cocktailIngredients {
          items {
            id
            clientId
            cocktailRecipeID
            ingredientID
            cocktailRecipe {
              id
              clientId
              name
              description
              preparation
              createdAt
              updatedAt
            }
            ingredient {
              id
              clientId
              name
              inStock
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const queryCocktailIngredientsByCocktailIngredient = /* GraphQL */ `
  query QueryCocktailIngredientsByCocktailIngredient(
    $cocktailRecipeID: ID!
    $ingredientID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    queryCocktailIngredientsByCocktailIngredient(
      cocktailRecipeID: $cocktailRecipeID
      ingredientID: $ingredientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clientId
        cocktailRecipeID
        ingredientID
        cocktailRecipe {
          id
          clientId
          name
          description
          preparation
          ingredients {
            items {
              id
              clientId
              cocktailRecipeID
              ingredientID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        ingredient {
          id
          clientId
          name
          inStock
          type
          cocktailIngredients {
            items {
              id
              clientId
              cocktailRecipeID
              ingredientID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
