/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCocktailRecipe = /* GraphQL */ `
  subscription OnCreateCocktailRecipe {
    onCreateCocktailRecipe {
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
export const onUpdateCocktailRecipe = /* GraphQL */ `
  subscription OnUpdateCocktailRecipe {
    onUpdateCocktailRecipe {
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
export const onDeleteCocktailRecipe = /* GraphQL */ `
  subscription OnDeleteCocktailRecipe {
    onDeleteCocktailRecipe {
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
export const onCreateCocktailIngredient = /* GraphQL */ `
  subscription OnCreateCocktailIngredient {
    onCreateCocktailIngredient {
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
export const onUpdateCocktailIngredient = /* GraphQL */ `
  subscription OnUpdateCocktailIngredient {
    onUpdateCocktailIngredient {
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
export const onDeleteCocktailIngredient = /* GraphQL */ `
  subscription OnDeleteCocktailIngredient {
    onDeleteCocktailIngredient {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
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
