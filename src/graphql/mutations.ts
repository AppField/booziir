/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCocktailRecipe = /* GraphQL */ `
  mutation CreateCocktailRecipe(
    $input: CreateCocktailRecipeInput!
    $condition: ModelCocktailRecipeConditionInput
  ) {
    createCocktailRecipe(input: $input, condition: $condition) {
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
export const updateCocktailRecipe = /* GraphQL */ `
  mutation UpdateCocktailRecipe(
    $input: UpdateCocktailRecipeInput!
    $condition: ModelCocktailRecipeConditionInput
  ) {
    updateCocktailRecipe(input: $input, condition: $condition) {
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
export const deleteCocktailRecipe = /* GraphQL */ `
  mutation DeleteCocktailRecipe(
    $input: DeleteCocktailRecipeInput!
    $condition: ModelCocktailRecipeConditionInput
  ) {
    deleteCocktailRecipe(input: $input, condition: $condition) {
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
export const createCocktailIngredient = /* GraphQL */ `
  mutation CreateCocktailIngredient(
    $input: CreateCocktailIngredientInput!
    $condition: ModelCocktailIngredientConditionInput
  ) {
    createCocktailIngredient(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateCocktailIngredient = /* GraphQL */ `
  mutation UpdateCocktailIngredient(
    $input: UpdateCocktailIngredientInput!
    $condition: ModelCocktailIngredientConditionInput
  ) {
    updateCocktailIngredient(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteCocktailIngredient = /* GraphQL */ `
  mutation DeleteCocktailIngredient(
    $input: DeleteCocktailIngredientInput!
    $condition: ModelCocktailIngredientConditionInput
  ) {
    deleteCocktailIngredient(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
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
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
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
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
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
