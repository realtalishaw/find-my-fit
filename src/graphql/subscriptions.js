/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecommendation = /* GraphQL */ `
  subscription OnCreateRecommendation(
    $filter: ModelSubscriptionRecommendationFilterInput
  ) {
    onCreateRecommendation(filter: $filter) {
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
export const onUpdateRecommendation = /* GraphQL */ `
  subscription OnUpdateRecommendation(
    $filter: ModelSubscriptionRecommendationFilterInput
  ) {
    onUpdateRecommendation(filter: $filter) {
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
export const onDeleteRecommendation = /* GraphQL */ `
  subscription OnDeleteRecommendation(
    $filter: ModelSubscriptionRecommendationFilterInput
  ) {
    onDeleteRecommendation(filter: $filter) {
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
export const onCreateRecommendationRequest = /* GraphQL */ `
  subscription OnCreateRecommendationRequest(
    $filter: ModelSubscriptionRecommendationRequestFilterInput
  ) {
    onCreateRecommendationRequest(filter: $filter) {
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
export const onUpdateRecommendationRequest = /* GraphQL */ `
  subscription OnUpdateRecommendationRequest(
    $filter: ModelSubscriptionRecommendationRequestFilterInput
  ) {
    onUpdateRecommendationRequest(filter: $filter) {
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
export const onDeleteRecommendationRequest = /* GraphQL */ `
  subscription OnDeleteRecommendationRequest(
    $filter: ModelSubscriptionRecommendationRequestFilterInput
  ) {
    onDeleteRecommendationRequest(filter: $filter) {
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
export const onCreateSizeEntry = /* GraphQL */ `
  subscription OnCreateSizeEntry(
    $filter: ModelSubscriptionSizeEntryFilterInput
  ) {
    onCreateSizeEntry(filter: $filter) {
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
export const onUpdateSizeEntry = /* GraphQL */ `
  subscription OnUpdateSizeEntry(
    $filter: ModelSubscriptionSizeEntryFilterInput
  ) {
    onUpdateSizeEntry(filter: $filter) {
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
export const onDeleteSizeEntry = /* GraphQL */ `
  subscription OnDeleteSizeEntry(
    $filter: ModelSubscriptionSizeEntryFilterInput
  ) {
    onDeleteSizeEntry(filter: $filter) {
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
export const onCreateSizeChart = /* GraphQL */ `
  subscription OnCreateSizeChart(
    $filter: ModelSubscriptionSizeChartFilterInput
  ) {
    onCreateSizeChart(filter: $filter) {
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
export const onUpdateSizeChart = /* GraphQL */ `
  subscription OnUpdateSizeChart(
    $filter: ModelSubscriptionSizeChartFilterInput
  ) {
    onUpdateSizeChart(filter: $filter) {
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
export const onDeleteSizeChart = /* GraphQL */ `
  subscription OnDeleteSizeChart(
    $filter: ModelSubscriptionSizeChartFilterInput
  ) {
    onDeleteSizeChart(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateMeasurements = /* GraphQL */ `
  subscription OnCreateMeasurements(
    $filter: ModelSubscriptionMeasurementsFilterInput
  ) {
    onCreateMeasurements(filter: $filter) {
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
export const onUpdateMeasurements = /* GraphQL */ `
  subscription OnUpdateMeasurements(
    $filter: ModelSubscriptionMeasurementsFilterInput
  ) {
    onUpdateMeasurements(filter: $filter) {
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
export const onDeleteMeasurements = /* GraphQL */ `
  subscription OnDeleteMeasurements(
    $filter: ModelSubscriptionMeasurementsFilterInput
  ) {
    onDeleteMeasurements(filter: $filter) {
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
