/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecommendation = /* GraphQL */ `
  query GetRecommendation($id: ID!) {
    getRecommendation(id: $id) {
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
export const listRecommendations = /* GraphQL */ `
  query ListRecommendations(
    $filter: ModelRecommendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecommendations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const recommendationsByUserID = /* GraphQL */ `
  query RecommendationsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecommendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recommendationsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getRecommendationRequest = /* GraphQL */ `
  query GetRecommendationRequest($id: ID!) {
    getRecommendationRequest(id: $id) {
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
export const listRecommendationRequests = /* GraphQL */ `
  query ListRecommendationRequests(
    $filter: ModelRecommendationRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecommendationRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const recommendationRequestsByUserID = /* GraphQL */ `
  query RecommendationRequestsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecommendationRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recommendationRequestsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSizeEntry = /* GraphQL */ `
  query GetSizeEntry($id: ID!) {
    getSizeEntry(id: $id) {
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
export const listSizeEntries = /* GraphQL */ `
  query ListSizeEntries(
    $filter: ModelSizeEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSizeEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const sizeEntriesBySizechartID = /* GraphQL */ `
  query SizeEntriesBySizechartID(
    $sizechartID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSizeEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sizeEntriesBySizechartID(
      sizechartID: $sizechartID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getSizeChart = /* GraphQL */ `
  query GetSizeChart($id: ID!) {
    getSizeChart(id: $id) {
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
export const listSizeCharts = /* GraphQL */ `
  query ListSizeCharts(
    $filter: ModelSizeChartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSizeCharts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        category
        sub_category
        SizeEntries {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        Measurements {
          nextToken
          __typename
        }
        RecommendationRequests {
          nextToken
          __typename
        }
        Recommendations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMeasurements = /* GraphQL */ `
  query GetMeasurements($id: ID!) {
    getMeasurements(id: $id) {
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
export const listMeasurements = /* GraphQL */ `
  query ListMeasurements(
    $filter: ModelMeasurementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeasurements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const measurementsByUserID = /* GraphQL */ `
  query MeasurementsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMeasurementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    measurementsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
