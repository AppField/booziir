/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCocktailRecipeInput = {
  id?: string | null,
  clientId?: string | null,
  name: string,
  description?: string | null,
  preparation?: Array< string | null > | null,
};

export type ModelCocktailRecipeConditionInput = {
  clientId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  preparation?: ModelStringInput | null,
  and?: Array< ModelCocktailRecipeConditionInput | null > | null,
  or?: Array< ModelCocktailRecipeConditionInput | null > | null,
  not?: ModelCocktailRecipeConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum IngredientType {
  alcoholic = "alcoholic",
  nonAlcoholic = "nonAlcoholic",
  nonLiquid = "nonLiquid",
}


export type UpdateCocktailRecipeInput = {
  id: string,
  clientId?: string | null,
  name?: string | null,
  description?: string | null,
  preparation?: Array< string | null > | null,
};

export type DeleteCocktailRecipeInput = {
  id?: string | null,
};

export type CreateCocktailIngredientInput = {
  id?: string | null,
  clientId?: string | null,
  cocktailRecipeID: string,
  ingredientID: string,
};

export type ModelCocktailIngredientConditionInput = {
  clientId?: ModelIDInput | null,
  cocktailRecipeID?: ModelIDInput | null,
  ingredientID?: ModelIDInput | null,
  and?: Array< ModelCocktailIngredientConditionInput | null > | null,
  or?: Array< ModelCocktailIngredientConditionInput | null > | null,
  not?: ModelCocktailIngredientConditionInput | null,
};

export type UpdateCocktailIngredientInput = {
  id: string,
  clientId?: string | null,
  cocktailRecipeID?: string | null,
  ingredientID?: string | null,
};

export type DeleteCocktailIngredientInput = {
  id?: string | null,
};

export type CreateIngredientInput = {
  id?: string | null,
  clientId?: string | null,
  name: string,
  inStock: boolean,
  type: IngredientType,
};

export type ModelIngredientConditionInput = {
  clientId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  inStock?: ModelBooleanInput | null,
  type?: ModelIngredientTypeInput | null,
  and?: Array< ModelIngredientConditionInput | null > | null,
  or?: Array< ModelIngredientConditionInput | null > | null,
  not?: ModelIngredientConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIngredientTypeInput = {
  eq?: IngredientType | null,
  ne?: IngredientType | null,
};

export type UpdateIngredientInput = {
  id: string,
  clientId?: string | null,
  name?: string | null,
  inStock?: boolean | null,
  type?: IngredientType | null,
};

export type DeleteIngredientInput = {
  id?: string | null,
};

export type ModelCocktailRecipeFilterInput = {
  id?: ModelIDInput | null,
  clientId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  preparation?: ModelStringInput | null,
  and?: Array< ModelCocktailRecipeFilterInput | null > | null,
  or?: Array< ModelCocktailRecipeFilterInput | null > | null,
  not?: ModelCocktailRecipeFilterInput | null,
};

export type ModelIngredientFilterInput = {
  id?: ModelIDInput | null,
  clientId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  inStock?: ModelBooleanInput | null,
  type?: ModelIngredientTypeInput | null,
  and?: Array< ModelIngredientFilterInput | null > | null,
  or?: Array< ModelIngredientFilterInput | null > | null,
  not?: ModelIngredientFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCocktailIngredientFilterInput = {
  id?: ModelIDInput | null,
  clientId?: ModelIDInput | null,
  cocktailRecipeID?: ModelIDInput | null,
  ingredientID?: ModelIDInput | null,
  and?: Array< ModelCocktailIngredientFilterInput | null > | null,
  or?: Array< ModelCocktailIngredientFilterInput | null > | null,
  not?: ModelCocktailIngredientFilterInput | null,
};

export type CreateCocktailRecipeMutationVariables = {
  input: CreateCocktailRecipeInput,
  condition?: ModelCocktailRecipeConditionInput | null,
};

export type CreateCocktailRecipeMutation = {
  createCocktailRecipe:  {
    __typename: "CocktailRecipe",
    id: string,
    clientId: string | null,
    name: string,
    description: string | null,
    preparation: Array< string | null > | null,
    ingredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCocktailRecipeMutationVariables = {
  input: UpdateCocktailRecipeInput,
  condition?: ModelCocktailRecipeConditionInput | null,
};

export type UpdateCocktailRecipeMutation = {
  updateCocktailRecipe:  {
    __typename: "CocktailRecipe",
    id: string,
    clientId: string | null,
    name: string,
    description: string | null,
    preparation: Array< string | null > | null,
    ingredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCocktailRecipeMutationVariables = {
  input: DeleteCocktailRecipeInput,
  condition?: ModelCocktailRecipeConditionInput | null,
};

export type DeleteCocktailRecipeMutation = {
  deleteCocktailRecipe:  {
    __typename: "CocktailRecipe",
    id: string,
    clientId: string | null,
    name: string,
    description: string | null,
    preparation: Array< string | null > | null,
    ingredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCocktailIngredientMutationVariables = {
  input: CreateCocktailIngredientInput,
  condition?: ModelCocktailIngredientConditionInput | null,
};

export type CreateCocktailIngredientMutation = {
  createCocktailIngredient:  {
    __typename: "CocktailIngredient",
    id: string,
    clientId: string | null,
    cocktailRecipeID: string,
    ingredientID: string,
    cocktailRecipe:  {
      __typename: "CocktailRecipe",
      id: string,
      clientId: string | null,
      name: string,
      description: string | null,
      preparation: Array< string | null > | null,
      ingredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      clientId: string | null,
      name: string,
      inStock: boolean,
      type: IngredientType,
      cocktailIngredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCocktailIngredientMutationVariables = {
  input: UpdateCocktailIngredientInput,
  condition?: ModelCocktailIngredientConditionInput | null,
};

export type UpdateCocktailIngredientMutation = {
  updateCocktailIngredient:  {
    __typename: "CocktailIngredient",
    id: string,
    clientId: string | null,
    cocktailRecipeID: string,
    ingredientID: string,
    cocktailRecipe:  {
      __typename: "CocktailRecipe",
      id: string,
      clientId: string | null,
      name: string,
      description: string | null,
      preparation: Array< string | null > | null,
      ingredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      clientId: string | null,
      name: string,
      inStock: boolean,
      type: IngredientType,
      cocktailIngredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCocktailIngredientMutationVariables = {
  input: DeleteCocktailIngredientInput,
  condition?: ModelCocktailIngredientConditionInput | null,
};

export type DeleteCocktailIngredientMutation = {
  deleteCocktailIngredient:  {
    __typename: "CocktailIngredient",
    id: string,
    clientId: string | null,
    cocktailRecipeID: string,
    ingredientID: string,
    cocktailRecipe:  {
      __typename: "CocktailRecipe",
      id: string,
      clientId: string | null,
      name: string,
      description: string | null,
      preparation: Array< string | null > | null,
      ingredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      clientId: string | null,
      name: string,
      inStock: boolean,
      type: IngredientType,
      cocktailIngredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIngredientMutationVariables = {
  input: CreateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type CreateIngredientMutation = {
  createIngredient:  {
    __typename: "Ingredient",
    id: string,
    clientId: string | null,
    name: string,
    inStock: boolean,
    type: IngredientType,
    cocktailIngredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIngredientMutationVariables = {
  input: UpdateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type UpdateIngredientMutation = {
  updateIngredient:  {
    __typename: "Ingredient",
    id: string,
    clientId: string | null,
    name: string,
    inStock: boolean,
    type: IngredientType,
    cocktailIngredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIngredientMutationVariables = {
  input: DeleteIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type DeleteIngredientMutation = {
  deleteIngredient:  {
    __typename: "Ingredient",
    id: string,
    clientId: string | null,
    name: string,
    inStock: boolean,
    type: IngredientType,
    cocktailIngredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCocktailRecipeQueryVariables = {
  id: string,
};

export type GetCocktailRecipeQuery = {
  getCocktailRecipe:  {
    __typename: "CocktailRecipe",
    id: string,
    clientId: string | null,
    name: string,
    description: string | null,
    preparation: Array< string | null > | null,
    ingredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCocktailRecipesQueryVariables = {
  filter?: ModelCocktailRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCocktailRecipesQuery = {
  listCocktailRecipes:  {
    __typename: "ModelCocktailRecipeConnection",
    items:  Array< {
      __typename: "CocktailRecipe",
      id: string,
      clientId: string | null,
      name: string,
      description: string | null,
      preparation: Array< string | null > | null,
      ingredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetIngredientQueryVariables = {
  id: string,
};

export type GetIngredientQuery = {
  getIngredient:  {
    __typename: "Ingredient",
    id: string,
    clientId: string | null,
    name: string,
    inStock: boolean,
    type: IngredientType,
    cocktailIngredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIngredientsQueryVariables = {
  filter?: ModelIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientsQuery = {
  listIngredients:  {
    __typename: "ModelIngredientConnection",
    items:  Array< {
      __typename: "Ingredient",
      id: string,
      clientId: string | null,
      name: string,
      inStock: boolean,
      type: IngredientType,
      cocktailIngredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QueryCocktailIngredientsByCocktailIngredientQueryVariables = {
  cocktailRecipeID: string,
  ingredientID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCocktailIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QueryCocktailIngredientsByCocktailIngredientQuery = {
  queryCocktailIngredientsByCocktailIngredient:  {
    __typename: "ModelCocktailIngredientConnection",
    items:  Array< {
      __typename: "CocktailIngredient",
      id: string,
      clientId: string | null,
      cocktailRecipeID: string,
      ingredientID: string,
      cocktailRecipe:  {
        __typename: "CocktailRecipe",
        id: string,
        clientId: string | null,
        name: string,
        description: string | null,
        preparation: Array< string | null > | null,
        ingredients:  {
          __typename: "ModelCocktailIngredientConnection",
          items:  Array< {
            __typename: "CocktailIngredient",
            id: string,
            clientId: string | null,
            cocktailRecipeID: string,
            ingredientID: string,
            createdAt: string,
            updatedAt: string,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      ingredient:  {
        __typename: "Ingredient",
        id: string,
        clientId: string | null,
        name: string,
        inStock: boolean,
        type: IngredientType,
        cocktailIngredients:  {
          __typename: "ModelCocktailIngredientConnection",
          items:  Array< {
            __typename: "CocktailIngredient",
            id: string,
            clientId: string | null,
            cocktailRecipeID: string,
            ingredientID: string,
            createdAt: string,
            updatedAt: string,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCocktailRecipeSubscription = {
  onCreateCocktailRecipe:  {
    __typename: "CocktailRecipe",
    id: string,
    clientId: string | null,
    name: string,
    description: string | null,
    preparation: Array< string | null > | null,
    ingredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCocktailRecipeSubscription = {
  onUpdateCocktailRecipe:  {
    __typename: "CocktailRecipe",
    id: string,
    clientId: string | null,
    name: string,
    description: string | null,
    preparation: Array< string | null > | null,
    ingredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCocktailRecipeSubscription = {
  onDeleteCocktailRecipe:  {
    __typename: "CocktailRecipe",
    id: string,
    clientId: string | null,
    name: string,
    description: string | null,
    preparation: Array< string | null > | null,
    ingredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCocktailIngredientSubscription = {
  onCreateCocktailIngredient:  {
    __typename: "CocktailIngredient",
    id: string,
    clientId: string | null,
    cocktailRecipeID: string,
    ingredientID: string,
    cocktailRecipe:  {
      __typename: "CocktailRecipe",
      id: string,
      clientId: string | null,
      name: string,
      description: string | null,
      preparation: Array< string | null > | null,
      ingredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      clientId: string | null,
      name: string,
      inStock: boolean,
      type: IngredientType,
      cocktailIngredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCocktailIngredientSubscription = {
  onUpdateCocktailIngredient:  {
    __typename: "CocktailIngredient",
    id: string,
    clientId: string | null,
    cocktailRecipeID: string,
    ingredientID: string,
    cocktailRecipe:  {
      __typename: "CocktailRecipe",
      id: string,
      clientId: string | null,
      name: string,
      description: string | null,
      preparation: Array< string | null > | null,
      ingredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      clientId: string | null,
      name: string,
      inStock: boolean,
      type: IngredientType,
      cocktailIngredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCocktailIngredientSubscription = {
  onDeleteCocktailIngredient:  {
    __typename: "CocktailIngredient",
    id: string,
    clientId: string | null,
    cocktailRecipeID: string,
    ingredientID: string,
    cocktailRecipe:  {
      __typename: "CocktailRecipe",
      id: string,
      clientId: string | null,
      name: string,
      description: string | null,
      preparation: Array< string | null > | null,
      ingredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      clientId: string | null,
      name: string,
      inStock: boolean,
      type: IngredientType,
      cocktailIngredients:  {
        __typename: "ModelCocktailIngredientConnection",
        items:  Array< {
          __typename: "CocktailIngredient",
          id: string,
          clientId: string | null,
          cocktailRecipeID: string,
          ingredientID: string,
          cocktailRecipe:  {
            __typename: "CocktailRecipe",
            id: string,
            clientId: string | null,
            name: string,
            description: string | null,
            preparation: Array< string | null > | null,
            createdAt: string,
            updatedAt: string,
          },
          ingredient:  {
            __typename: "Ingredient",
            id: string,
            clientId: string | null,
            name: string,
            inStock: boolean,
            type: IngredientType,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIngredientSubscription = {
  onCreateIngredient:  {
    __typename: "Ingredient",
    id: string,
    clientId: string | null,
    name: string,
    inStock: boolean,
    type: IngredientType,
    cocktailIngredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIngredientSubscription = {
  onUpdateIngredient:  {
    __typename: "Ingredient",
    id: string,
    clientId: string | null,
    name: string,
    inStock: boolean,
    type: IngredientType,
    cocktailIngredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIngredientSubscription = {
  onDeleteIngredient:  {
    __typename: "Ingredient",
    id: string,
    clientId: string | null,
    name: string,
    inStock: boolean,
    type: IngredientType,
    cocktailIngredients:  {
      __typename: "ModelCocktailIngredientConnection",
      items:  Array< {
        __typename: "CocktailIngredient",
        id: string,
        clientId: string | null,
        cocktailRecipeID: string,
        ingredientID: string,
        cocktailRecipe:  {
          __typename: "CocktailRecipe",
          id: string,
          clientId: string | null,
          name: string,
          description: string | null,
          preparation: Array< string | null > | null,
          ingredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          clientId: string | null,
          name: string,
          inStock: boolean,
          type: IngredientType,
          cocktailIngredients:  {
            __typename: "ModelCocktailIngredientConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
