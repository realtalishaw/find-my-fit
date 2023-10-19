/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecommendation = /* GraphQL */ `
  mutation CreateRecommendation(
    $input: CreateRecommendationInput!
    $condition: ModelRecommendationConditionInput
  ) {
    createRecommendation(input: $input, condition: $condition) {
      id
      userID
      fit_confidence
      recommended_size
      brand
      category
      sub_category
      garment_type
      product_url
      fabric_type
      body_type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRecommendation = /* GraphQL */ `
  mutation UpdateRecommendation(
    $input: UpdateRecommendationInput!
    $condition: ModelRecommendationConditionInput
  ) {
    updateRecommendation(input: $input, condition: $condition) {
      id
      userID
      fit_confidence
      recommended_size
      brand
      category
      sub_category
      garment_type
      product_url
      fabric_type
      body_type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRecommendation = /* GraphQL */ `
  mutation DeleteRecommendation(
    $input: DeleteRecommendationInput!
    $condition: ModelRecommendationConditionInput
  ) {
    deleteRecommendation(input: $input, condition: $condition) {
      id
      userID
      fit_confidence
      recommended_size
      brand
      category
      sub_category
      garment_type
      product_url
      fabric_type
      body_type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRecommendationRequest = /* GraphQL */ `
  mutation CreateRecommendationRequest(
    $input: CreateRecommendationRequestInput!
    $condition: ModelRecommendationRequestConditionInput
  ) {
    createRecommendationRequest(input: $input, condition: $condition) {
      id
      userID
      Measurements {
        id
        userID
        bust
        waist
        hips
        shoulder_width
        left_thigh
        left_arm
        right_arm
        height
        weight
        createdAt
        updatedAt
        __typename
      }
      fit_preference
      product_url
      createdAt
      updatedAt
      recommendationRequestMeasurementsId
      __typename
    }
  }
`;
export const updateRecommendationRequest = /* GraphQL */ `
  mutation UpdateRecommendationRequest(
    $input: UpdateRecommendationRequestInput!
    $condition: ModelRecommendationRequestConditionInput
  ) {
    updateRecommendationRequest(input: $input, condition: $condition) {
      id
      userID
      Measurements {
        id
        userID
        bust
        waist
        hips
        shoulder_width
        left_thigh
        left_arm
        right_arm
        height
        weight
        createdAt
        updatedAt
        __typename
      }
      fit_preference
      product_url
      createdAt
      updatedAt
      recommendationRequestMeasurementsId
      __typename
    }
  }
`;
export const deleteRecommendationRequest = /* GraphQL */ `
  mutation DeleteRecommendationRequest(
    $input: DeleteRecommendationRequestInput!
    $condition: ModelRecommendationRequestConditionInput
  ) {
    deleteRecommendationRequest(input: $input, condition: $condition) {
      id
      userID
      Measurements {
        id
        userID
        bust
        waist
        hips
        shoulder_width
        left_thigh
        left_arm
        right_arm
        height
        weight
        createdAt
        updatedAt
        __typename
      }
      fit_preference
      product_url
      createdAt
      updatedAt
      recommendationRequestMeasurementsId
      __typename
    }
  }
`;
export const createSizeEntry = /* GraphQL */ `
  mutation CreateSizeEntry(
    $input: CreateSizeEntryInput!
    $condition: ModelSizeEntryConditionInput
  ) {
    createSizeEntry(input: $input, condition: $condition) {
      id
      sizechartID
      size
      measurements
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSizeEntry = /* GraphQL */ `
  mutation UpdateSizeEntry(
    $input: UpdateSizeEntryInput!
    $condition: ModelSizeEntryConditionInput
  ) {
    updateSizeEntry(input: $input, condition: $condition) {
      id
      sizechartID
      size
      measurements
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSizeEntry = /* GraphQL */ `
  mutation DeleteSizeEntry(
    $input: DeleteSizeEntryInput!
    $condition: ModelSizeEntryConditionInput
  ) {
    deleteSizeEntry(input: $input, condition: $condition) {
      id
      sizechartID
      size
      measurements
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSizeChart = /* GraphQL */ `
  mutation CreateSizeChart(
    $input: CreateSizeChartInput!
    $condition: ModelSizeChartConditionInput
  ) {
    createSizeChart(input: $input, condition: $condition) {
      id
      brand
      category
      sub_category
      SizeEntries {
        items {
          id
          sizechartID
          size
          measurements
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSizeChart = /* GraphQL */ `
  mutation UpdateSizeChart(
    $input: UpdateSizeChartInput!
    $condition: ModelSizeChartConditionInput
  ) {
    updateSizeChart(input: $input, condition: $condition) {
      id
      brand
      category
      sub_category
      SizeEntries {
        items {
          id
          sizechartID
          size
          measurements
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSizeChart = /* GraphQL */ `
  mutation DeleteSizeChart(
    $input: DeleteSizeChartInput!
    $condition: ModelSizeChartConditionInput
  ) {
    deleteSizeChart(input: $input, condition: $condition) {
      id
      brand
      category
      sub_category
      SizeEntries {
        items {
          id
          sizechartID
          size
          measurements
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      Measurements {
        items {
          id
          userID
          fit_confidence
          recommended_size
          brand
          category
          sub_category
          garment_type
          product_url
          fabric_type
          body_type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      RecommendationRequests {
        items {
          id
          userID
          fit_confidence
          recommended_size
          brand
          category
          sub_category
          garment_type
          product_url
          fabric_type
          body_type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Recommendations {
        items {
          id
          userID
          fit_confidence
          recommended_size
          brand
          category
          sub_category
          garment_type
          product_url
          fabric_type
          body_type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      Measurements {
        items {
          id
          userID
          fit_confidence
          recommended_size
          brand
          category
          sub_category
          garment_type
          product_url
          fabric_type
          body_type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      RecommendationRequests {
        items {
          id
          userID
          fit_confidence
          recommended_size
          brand
          category
          sub_category
          garment_type
          product_url
          fabric_type
          body_type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Recommendations {
        items {
          id
          userID
          fit_confidence
          recommended_size
          brand
          category
          sub_category
          garment_type
          product_url
          fabric_type
          body_type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      Measurements {
        items {
          id
          userID
          fit_confidence
          recommended_size
          brand
          category
          sub_category
          garment_type
          product_url
          fabric_type
          body_type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      RecommendationRequests {
        items {
          id
          userID
          fit_confidence
          recommended_size
          brand
          category
          sub_category
          garment_type
          product_url
          fabric_type
          body_type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Recommendations {
        items {
          id
          userID
          fit_confidence
          recommended_size
          brand
          category
          sub_category
          garment_type
          product_url
          fabric_type
          body_type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMeasurements = /* GraphQL */ `
  mutation CreateMeasurements(
    $input: CreateMeasurementsInput!
    $condition: ModelMeasurementsConditionInput
  ) {
    createMeasurements(input: $input, condition: $condition) {
      id
      userID
      bust
      waist
      hips
      shoulder_width
      left_thigh
      left_arm
      right_arm
      height
      weight
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMeasurements = /* GraphQL */ `
  mutation UpdateMeasurements(
    $input: UpdateMeasurementsInput!
    $condition: ModelMeasurementsConditionInput
  ) {
    updateMeasurements(input: $input, condition: $condition) {
      id
      userID
      bust
      waist
      hips
      shoulder_width
      left_thigh
      left_arm
      right_arm
      height
      weight
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMeasurements = /* GraphQL */ `
  mutation DeleteMeasurements(
    $input: DeleteMeasurementsInput!
    $condition: ModelMeasurementsConditionInput
  ) {
    deleteMeasurements(input: $input, condition: $condition) {
      id
      userID
      bust
      waist
      hips
      shoulder_width
      left_thigh
      left_arm
      right_arm
      height
      weight
      createdAt
      updatedAt
      __typename
    }
  }
`;
