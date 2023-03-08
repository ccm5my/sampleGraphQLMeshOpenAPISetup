// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { WikiTypes } from './sources/Wiki/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: string;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: bigint;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  ObjMap: any;
};

export type Query = {
  /**
   * Gets availability of featured feed content for the apps by wiki domain.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  feed_availability?: Maybe<feed_availability_response>;
  /**
   * Returns the previously-stored formula via `/media/math/check/{type}` for
   * the given hash.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  media_math_formula_by_hash?: Maybe<problem>;
  /**
   * Given a request hash, renders a TeX formula into its mathematic
   * representation in the given format. When a request is issued to the
   * `/media/math/check/{format}` POST endpoint, the response contains the
   * `x-resource-location` header denoting the hash ID of the POST data. Once
   * obtained, this endpoint has to be used to obtain the actual render.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  media_math_render_by_format_by_hash?: Maybe<problem>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of absolute bytes
   * difference sums. You can filter by editors-type (all-editor-types, anonymous, group-bot,
   * name-bot, user) and page-type (all-page-types, content, non-content). You can choose
   * between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Maybe<metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project, a page-title prefixed with canonical namespace (for
   * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
   * difference absolute sums. You can filter by editors-type (all-editor-types, anonymous,
   * group-bot, name-bot, user). You can choose between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end?: Maybe<metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of bytes difference net
   * sums. You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot,
   * user) and page-type (all-page-types, content or non-content). You can choose between
   * daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Maybe<metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project, a page-title prefixed with canonical namespace (for
   * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
   * difference net sums. You can filter by editors-type (all-editor-types, anonymous,
   * group-bot, name-bot, user). You can choose between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end?: Maybe<metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its edited-pages counts.
   * You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user),
   * page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
   * 5..24-edits, 25..99-edits, 100..-edits). You can choose between daily and monthly
   * granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end?: Maybe<metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its new pages counts.
   * You can filter by editor type (all-editor-types, anonymous, group-bot, name-bot, user)
   * or page-type (all-page-types, content or non-content). You can choose between daily and
   * monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Maybe<metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * edited-pages by absolute bytes-difference. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top
   * 100 edited-pages by edits count. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
   * non-content).
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * edited-pages by net bytes-difference. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its editors counts.
   * You can filter by editory-type (all-editor-types, anonymous, group-bot, name-bot, user),
   * page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
   * 5..24-edits, 25..99-edits or 100..-edits). You can choose between daily and monthly
   * granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end?: Maybe<metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * editors by absolute bytes-difference. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
   * The user_text returned is either the mediawiki user_text if the user is registered, or
   * null if user is anonymous.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top
   * 100 editors by edits count. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
   * non-content). The user_text returned is either the mediawiki user_text if the user is
   * registered, or null if user is anonymous.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * editors by net bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
   * group-bot, name-bot, user) or page-type (all-page-types, content or non-content). The
   * user_text returned is either the mediawiki user_text if the user is registered, or
   * "Anonymous Editor" if user is anonymous.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of edits counts.
   * You can filter by editors-type (all-editor-types, anonymous, bot, registered) and
   * page-type (all-page-types, content or non-content). You can choose between daily and
   * monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Maybe<metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project, a page-title prefixed with its canonical namespace (for
   * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of edit counts.
   * You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot, user).
   * You can choose between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end?: Maybe<metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a project and a date range, returns a timeseries of pagecounts.
   * You can filter by access site (mobile or desktop) and you can choose between monthly,
   * daily and hourly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end?: Maybe<metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response>;
  /**
   * Given a date range, returns a timeseries of pageview counts. You can filter by project,
   * access method and/or agent type. You can choose between daily and hourly granularity
   * as well.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end?: Maybe<metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki article and a date range, returns a daily timeseries of its pageview
   * counts. You can also filter by access method and/or agent type.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end?: Maybe<metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response>;
  /**
   * Lists the pageviews to this project, split by country of origin for a given month.
   * Because of privacy reasons, pageviews are given in a bucketed format, and countries
   * with less than 100 views do not get reported.
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month?: Maybe<metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response>;
  /**
   * Lists the 1000 most viewed articles for a given project and timespan (month or day).
   * You can filter by access method.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day?: Maybe<metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its newly registered
   * users counts. You can choose between daily and monthly granularity. The newly registered
   * users value is computed with self-created users only, not auto-login created ones.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_registered_users_new_by_project_by_granularity_by_start_by_end?: Maybe<metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response>;
  /**
   * Given a project and a date range, returns a timeseries of unique devices counts.
   * You need to specify a project, and can filter by accessed site (mobile or desktop).
   * You can choose between daily and hourly granularity as well.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end?: Maybe<metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response>;
  /**
   * Fetches the list of language pairs the back-end service can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_languagepairs?: Maybe<cx_languagepairs>;
  /**
   * Fetches the list of tools that are available for the given pair of languages.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_pair_by_from_by_to?: Maybe<transform_list_pair_by_from_by_to_response>;
  /**
   * Fetches the list of tools and all of the language pairs it can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_tool_by_tool?: Maybe<transform_list_tool_by_tool_response>;
  /**
   * Fetches the list of tools and all of the language pairs it can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_tool_by_tool_by_from?: Maybe<transform_list_tool_by_tool_by_from_response>;
  /**
   * Fetches the list of tools and all of the language pairs it can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_tool_by_tool_by_from_by_to?: Maybe<transform_list_tool_by_tool_by_from_by_to_response>;
  /**
   * Fetches the dictionary meaning of a word from a language and displays
   * it in the target language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_word_from_by_from_lang_to_by_to_lang_by_word?: Maybe<transform_word_from_by_from_lang_to_by_to_lang_by_word_response>;
  /**
   * Fetches the dictionary meaning of a word from a language and displays
   * it in the target language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider?: Maybe<transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response>;
  viewsInPastMonth: Scalars['BigInt'];
};


export type Querymedia_math_formula_by_hashArgs = {
  hash: Scalars['NonEmptyString'];
};


export type Querymedia_math_render_by_format_by_hashArgs = {
  format: queryInput_media_math_render_by_format_by_hash_format;
  hash: Scalars['NonEmptyString'];
};


export type Querymetrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  granularity: queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  page_title: Scalars['String'];
  editor_type: queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type;
  granularity: queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  granularity: queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  page_title: Scalars['String'];
  editor_type: queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type;
  granularity: queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type;
  activity_level: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level;
  granularity: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  granularity: queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type;
  activity_level: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level;
  granularity: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  granularity: queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  page_title: Scalars['String'];
  editor_type: queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type;
  granularity: queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  access_site: queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_access_site;
  granularity: queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  access: queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_access;
  agent: queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_agent;
  granularity: queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  access: queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_access;
  agent: queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_agent;
  article: Scalars['String'];
  granularity: queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_pageviews_top_by_country_by_project_by_access_by_year_by_monthArgs = {
  project: Scalars['String'];
  access: queryInput_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_access;
  year: Scalars['String'];
  month: Scalars['String'];
};


export type Querymetrics_pageviews_top_by_project_by_access_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  access: queryInput_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_access;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_registered_users_new_by_project_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  granularity: queryInput_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  access_site: queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_access_site;
  granularity: queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querytransform_list_pair_by_from_by_toArgs = {
  from: Scalars['String'];
  to: Scalars['String'];
};


export type Querytransform_list_tool_by_toolArgs = {
  tool: queryInput_transform_list_tool_by_tool_tool;
};


export type Querytransform_list_tool_by_tool_by_fromArgs = {
  tool: queryInput_transform_list_tool_by_tool_by_from_tool;
  from: Scalars['String'];
};


export type Querytransform_list_tool_by_tool_by_from_by_toArgs = {
  tool: queryInput_transform_list_tool_by_tool_by_from_by_to_tool;
  from: Scalars['String'];
  to: Scalars['String'];
};


export type Querytransform_word_from_by_from_lang_to_by_to_lang_by_wordArgs = {
  from_lang: Scalars['String'];
  to_lang: Scalars['String'];
  word: Scalars['String'];
};


export type Querytransform_word_from_by_from_lang_to_by_to_lang_by_word_by_providerArgs = {
  from_lang: Scalars['String'];
  to_lang: Scalars['String'];
  word: Scalars['String'];
  provider: queryInput_transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_provider;
};


export type QueryviewsInPastMonthArgs = {
  project: Scalars['String'];
};

export type Mutation = {
  /**
   * Checks the supplied TeX formula for correctness and returns the
   * normalised formula representation as well as information about
   * identifiers. Available types are tex and inline-tex. The response
   * contains the `x-resource-location` header which can be used to retrieve
   * the render of the checked formula in one of the supported rendering
   * formats. Just append the value of the header to `/media/math/{format}/`
   * and perform a GET request against that URL.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  post_media_math_check_by_type?: Maybe<problem>;
  /**
   * Fetches the machine translation for the posted content from the source
   * to the destination language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  post_transform_html_from_by_from_lang_to_by_to_lang?: Maybe<post_transform_html_from_by_from_lang_to_by_to_lang_response>;
  /**
   * Fetches the machine translation for the posted content from the source
   * to the destination language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  post_transform_html_from_by_from_lang_to_by_to_lang_by_provider?: Maybe<post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response>;
};


export type Mutationpost_media_math_check_by_typeArgs = {
  type: mutationInput_post_media_math_check_by_type_type;
};


export type Mutationpost_transform_html_from_by_from_lang_to_by_to_langArgs = {
  from_lang: Scalars['String'];
  to_lang: Scalars['String'];
};


export type Mutationpost_transform_html_from_by_from_lang_to_by_to_lang_by_providerArgs = {
  from_lang: Scalars['String'];
  to_lang: Scalars['String'];
  provider: mutationInput_post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_provider;
};

export type feed_availability_response = availability | problem;

export type availability = {
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  in_the_news: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  most_read: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  on_this_day: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  picture_of_the_day: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  todays_featured_article: Array<Maybe<Scalars['String']>>;
};

export type problem = {
  detail?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
};

/** The output format; can be svg or mml */
export type queryInput_media_math_render_by_format_by_hash_format =
  | 'svg'
  | 'mml'
  | 'png';

export type metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response = absolute_bytes_difference | problem;

export type absolute_bytes_difference = {
  items?: Maybe<Array<Maybe<query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  abs_bytes_diff?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response = absolute_bytes_difference_per_page | problem;

export type absolute_bytes_difference_per_page = {
  items?: Maybe<Array<Maybe<query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_title?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  abs_bytes_diff?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response = net_bytes_difference | problem;

export type net_bytes_difference = {
  items?: Maybe<Array<Maybe<query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  net_bytes_diff?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response = net_bytes_difference_per_page | problem;

export type net_bytes_difference_per_page = {
  items?: Maybe<Array<Maybe<query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_title?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  net_bytes_diff?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response = edited_pages | problem;

export type edited_pages = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items = {
  activity_level?: Maybe<Scalars['String']>;
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  edited_pages?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edited-pages in content
 * namespaces) or non-content (edited-pages in non-content namespaces). If you are
 * interested in edited-pages regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/**
 * If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
 * 25..99-edits or 100..-edits. If you are interested in edited-pages regardless
 * of their activity level, use all-activity-levels.
 */
export type queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level =
  | 'all_activity_levels'
  | '_1__4_edits'
  | '_5__24_edits'
  | '_25__99_edits'
  | '_100___edits';

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response = new_pages | problem;

export type new_pages = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  new_pages?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging
 * to the bot group but having bot-like names) or user (registered account not in bot
 * group nor having bot-like name). If you are interested in edits regardless of
 * their editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (new pages in content
 * namespaces) or non-content (new pages in non-content namespaces). If you are
 * interested in new-articles regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_edited_pages_by_abs_bytes_diff | problem;

export type top_edited_pages_by_abs_bytes_diff = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  abs_bytes_diff?: Maybe<Scalars['BigInt']>;
  page_title?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_edited_pages_by_edits | problem;

export type top_edited_pages_by_edits = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  edits?: Maybe<Scalars['BigInt']>;
  page_title?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_edited_pages_by_net_bytes_diff | problem;

export type top_edited_pages_by_net_bytes_diff = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  net_bytes_diff?: Maybe<Scalars['BigInt']>;
  page_title?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response = editors | problem;

export type editors = {
  items?: Maybe<Array<Maybe<query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items = {
  activity_level?: Maybe<Scalars['String']>;
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  editors?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging
 * to the bot group but having bot-like names) or user (registered account not in bot
 * group nor having bot-like name). If you are interested in edits regardless
 * of their editor-type, use all-editor-types.
 */
export type queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits made in content
 * namespaces) or non-content (edits made in non-content namespaces). If you are
 * interested in editors regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/**
 * If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
 * 25..99-edits or 100..-edits. If you are interested in editors regardless
 * of their activity-level, use all-activity-levels.
 */
export type queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level =
  | 'all_activity_levels'
  | '_1__4_edits'
  | '_5__24_edits'
  | '_25__99_edits'
  | '_100___edits';

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_editors_by_abs_bytes_diff | problem;

export type top_editors_by_abs_bytes_diff = {
  items?: Maybe<Array<Maybe<query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  abs_bytes_diff?: Maybe<Scalars['BigInt']>;
  rank?: Maybe<Scalars['Int']>;
  user_text?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_editors_by_edits | problem;

export type top_editors_by_edits = {
  items?: Maybe<Array<Maybe<query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  edits?: Maybe<Scalars['BigInt']>;
  rank?: Maybe<Scalars['Int']>;
  user_text?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_editors_by_net_bytes_diff | problem;

export type top_editors_by_net_bytes_diff = {
  items?: Maybe<Array<Maybe<query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  net_bytes_diff?: Maybe<Scalars['BigInt']>;
  rank?: Maybe<Scalars['Int']>;
  user_text?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response = edits | problem;

export type edits = {
  items?: Maybe<Array<Maybe<query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  edits?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging
 * to the bot group but having bot-like names) or user (registered account not in bot
 * group nor having bot-like name). If you are interested in edits regardless
 * of their editor-type, use all-editor-types.
 */
export type queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response = edits_per_page | problem;

export type edits_per_page = {
  items?: Maybe<Array<Maybe<query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_title?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  edits?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response = pagecounts_project | problem;

export type pagecounts_project = {
  items?: Maybe<Array<Maybe<query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items = {
  access_site?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['BigInt']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

/** If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites. */
export type queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_access_site =
  | 'all_sites'
  | 'desktop_site'
  | 'mobile_site';

/**
 * The time unit for the response data. As of today, the supported granularities for
 * this endpoint are hourly, daily and monthly.
 */
export type queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_granularity =
  | 'hourly'
  | 'daily'
  | 'monthly';

export type metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response = pageview_project | problem;

export type pageview_project = {
  items?: Maybe<Array<Maybe<query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items = {
  access?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['BigInt']>;
};

/**
 * If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
 * If you are interested in pageviews regardless of access method, use all-access.
 */
export type queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_access =
  | 'all_access'
  | 'desktop'
  | 'mobile_app'
  | 'mobile_web';

/**
 * If you want to filter by agent type, use one of user or spider. If you are interested
 * in pageviews regardless of agent type, use all-agents.
 */
export type queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_agent =
  | 'all_agents'
  | 'user'
  | 'spider';

/**
 * The time unit for the response data. As of today, the supported granularities for this
 * endpoint are hourly, daily, and monthly.
 */
export type queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_granularity =
  | 'hourly'
  | 'daily'
  | 'monthly';

export type metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response = pageview_article | problem;

export type pageview_article = {
  items?: Maybe<Array<Maybe<query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items = {
  access?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['String']>;
  article?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['BigInt']>;
};

/**
 * If you want to filter by access method, use one of desktop, mobile-app
 * or mobile-web. If you are interested in pageviews regardless of access method,
 * use all-access.
 */
export type queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_access =
  | 'all_access'
  | 'desktop'
  | 'mobile_app'
  | 'mobile_web';

/**
 * If you want to filter by agent type, use one of user, bot or spider. If you are
 * interested in pageviews regardless of agent type, use all-agents.
 */
export type queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_agent =
  | 'all_agents'
  | 'user'
  | 'spider'
  | 'bot';

/**
 * The time unit for the response data. As of today, the only supported granularity for
 * this endpoint is daily and monthly.
 */
export type queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response = by_country | problem;

export type by_country = {
  items?: Maybe<Array<Maybe<query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items>>>;
};

export type query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items = {
  access?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Maybe<query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items>>>;
  month?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items = {
  country?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['BigInt']>;
};

/**
 * If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
 * If you are interested in pageviews regardless of access method, use all-access.
 */
export type queryInput_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_access =
  | 'all_access'
  | 'desktop'
  | 'mobile_app'
  | 'mobile_web';

export type metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response = pageview_tops | problem;

export type pageview_tops = {
  items?: Maybe<Array<Maybe<query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items = {
  access?: Maybe<Scalars['String']>;
  articles?: Maybe<Array<Maybe<query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items>>>;
  day?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items = {
  article?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['BigInt']>;
};

/**
 * If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
 * If you are interested in pageviews regardless of access method, use all-access.
 */
export type queryInput_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_access =
  | 'all_access'
  | 'desktop'
  | 'mobile_app'
  | 'mobile_web';

export type metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response = new_registered_users | problem;

export type new_registered_users = {
  items?: Maybe<Array<Maybe<query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items = {
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  new_registered_users?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response = unique_devices | problem;

export type unique_devices = {
  items?: Maybe<Array<Maybe<query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items = {
  access_site?: Maybe<Scalars['String']>;
  devices?: Maybe<Scalars['BigInt']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by accessed site, use one of desktop-site or mobile-site.
 * If you are interested in unique devices regardless of accessed site, use or all-sites.
 */
export type queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_access_site =
  | 'all_sites'
  | 'desktop_site'
  | 'mobile_site';

/**
 * The time unit for the response data. As of today, the supported granularities
 * for this endpoint are daily and monthly.
 */
export type queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type cx_languagepairs = {
  /** the list of available source languages */
  source?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** the list of available destination languages */
  target?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type transform_list_pair_by_from_by_to_response = cx_list_tools | problem;

export type cx_list_tools = {
  /** the list of tools available for the given language pair */
  tools?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type transform_list_tool_by_tool_response = JSON_container | problem;

export type JSON_container = {
  JSON?: Maybe<Scalars['JSON']>;
};

/** The tool category to list tools and language pairs for */
export type queryInput_transform_list_tool_by_tool_tool =
  | 'mt'
  | 'dictionary';

export type transform_list_tool_by_tool_by_from_response = JSON_container | problem;

/** The tool category to list tools and language pairs for */
export type queryInput_transform_list_tool_by_tool_by_from_tool =
  | 'mt'
  | 'dictionary';

export type transform_list_tool_by_tool_by_from_by_to_response = JSON_container | problem;

/** The tool category to list tools and language pairs for */
export type queryInput_transform_list_tool_by_tool_by_from_by_to_tool =
  | 'mt'
  | 'dictionary';

export type transform_word_from_by_from_lang_to_by_to_lang_by_word_response = cx_dict | problem;

export type cx_dict = {
  /** the original word to look up */
  source?: Maybe<Scalars['String']>;
  /** the translations found */
  translations?: Maybe<Array<Maybe<query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items>>>;
};

export type query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items = {
  /** extra information about the phrase */
  info?: Maybe<Scalars['String']>;
  /** the translated phrase */
  phrase?: Maybe<Scalars['String']>;
  /** the source dictionary used for the translation */
  sources?: Maybe<Scalars['String']>;
};

export type transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response = cx_dict | problem;

/** The dictionary provider id */
export type queryInput_transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_provider =
  | 'JsonDict'
  | 'Dictd';

/** The input type of the given formula; can be tex or inline-tex */
export type mutationInput_post_media_math_check_by_type_type =
  | 'tex'
  | 'inline_tex'
  | 'chem';

export type post_transform_html_from_by_from_lang_to_by_to_lang_response = cx_mt | problem;

export type cx_mt = {
  /** the translated content */
  contents?: Maybe<Scalars['String']>;
};

export type post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response = cx_mt | problem;

/** The machine translation provider id */
export type mutationInput_post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_provider =
  | 'Apertium'
  | 'Yandex'
  | 'Youdao';

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  feed_availability_response: ResolversTypes['availability'] | ResolversTypes['problem'];
  availability: ResolverTypeWrapper<availability>;
  String: ResolverTypeWrapper<Scalars['String']>;
  problem: ResolverTypeWrapper<problem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
  queryInput_media_math_render_by_format_by_hash_format: queryInput_media_math_render_by_format_by_hash_format;
  metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response: ResolversTypes['absolute_bytes_difference'] | ResolversTypes['problem'];
  absolute_bytes_difference: ResolverTypeWrapper<absolute_bytes_difference>;
  query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type: queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type: queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity: queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response: ResolversTypes['absolute_bytes_difference_per_page'] | ResolversTypes['problem'];
  absolute_bytes_difference_per_page: ResolverTypeWrapper<absolute_bytes_difference_per_page>;
  query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type: queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type;
  queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity: queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity;
  metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response: ResolversTypes['net_bytes_difference'] | ResolversTypes['problem'];
  net_bytes_difference: ResolverTypeWrapper<net_bytes_difference>;
  query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type: queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type: queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity: queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response: ResolversTypes['net_bytes_difference_per_page'] | ResolversTypes['problem'];
  net_bytes_difference_per_page: ResolverTypeWrapper<net_bytes_difference_per_page>;
  query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type: queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type;
  queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity: queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity;
  metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response: ResolversTypes['edited_pages'] | ResolversTypes['problem'];
  edited_pages: ResolverTypeWrapper<edited_pages>;
  query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type;
  queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type;
  queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level;
  queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity;
  metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response: ResolversTypes['new_pages'] | ResolversTypes['problem'];
  new_pages: ResolverTypeWrapper<new_pages>;
  query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type: queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type: queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity: queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversTypes['top_edited_pages_by_abs_bytes_diff'] | ResolversTypes['problem'];
  top_edited_pages_by_abs_bytes_diff: ResolverTypeWrapper<top_edited_pages_by_abs_bytes_diff>;
  query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>;
  query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>;
  query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: ResolverTypeWrapper<query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>;
  queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type: queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type: queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversTypes['top_edited_pages_by_edits'] | ResolversTypes['problem'];
  top_edited_pages_by_edits: ResolverTypeWrapper<top_edited_pages_by_edits>;
  query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>;
  query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>;
  query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: ResolverTypeWrapper<query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>;
  queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type: queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type: queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversTypes['top_edited_pages_by_net_bytes_diff'] | ResolversTypes['problem'];
  top_edited_pages_by_net_bytes_diff: ResolverTypeWrapper<top_edited_pages_by_net_bytes_diff>;
  query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>;
  query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>;
  query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: ResolverTypeWrapper<query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>;
  queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type: queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type: queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response: ResolversTypes['editors'] | ResolversTypes['problem'];
  editors: ResolverTypeWrapper<editors>;
  query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type;
  queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type;
  queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level;
  queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity;
  metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversTypes['top_editors_by_abs_bytes_diff'] | ResolversTypes['problem'];
  top_editors_by_abs_bytes_diff: ResolverTypeWrapper<top_editors_by_abs_bytes_diff>;
  query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>;
  query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>;
  query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: ResolverTypeWrapper<query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>;
  queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type: queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type: queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversTypes['top_editors_by_edits'] | ResolversTypes['problem'];
  top_editors_by_edits: ResolverTypeWrapper<top_editors_by_edits>;
  query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>;
  query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>;
  query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: ResolverTypeWrapper<query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>;
  queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type: queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type: queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversTypes['top_editors_by_net_bytes_diff'] | ResolversTypes['problem'];
  top_editors_by_net_bytes_diff: ResolverTypeWrapper<top_editors_by_net_bytes_diff>;
  query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>;
  query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>;
  query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: ResolverTypeWrapper<query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>;
  queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type: queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type: queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response: ResolversTypes['edits'] | ResolversTypes['problem'];
  edits: ResolverTypeWrapper<edits>;
  query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type: queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type: queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity: queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response: ResolversTypes['edits_per_page'] | ResolversTypes['problem'];
  edits_per_page: ResolverTypeWrapper<edits_per_page>;
  query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type: queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type;
  queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity: queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity;
  metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response: ResolversTypes['pagecounts_project'] | ResolversTypes['problem'];
  pagecounts_project: ResolverTypeWrapper<pagecounts_project>;
  query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items>;
  queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_access_site: queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_access_site;
  queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_granularity: queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_granularity;
  metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response: ResolversTypes['pageview_project'] | ResolversTypes['problem'];
  pageview_project: ResolverTypeWrapper<pageview_project>;
  query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items>;
  queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_access: queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_access;
  queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_agent: queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_agent;
  queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_granularity: queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_granularity;
  metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response: ResolversTypes['pageview_article'] | ResolversTypes['problem'];
  pageview_article: ResolverTypeWrapper<pageview_article>;
  query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items>;
  queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_access: queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_access;
  queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_agent: queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_agent;
  queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_granularity: queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_granularity;
  metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response: ResolversTypes['by_country'] | ResolversTypes['problem'];
  by_country: ResolverTypeWrapper<by_country>;
  query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items>;
  query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items: ResolverTypeWrapper<query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items>;
  queryInput_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_access: queryInput_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_access;
  metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response: ResolversTypes['pageview_tops'] | ResolversTypes['problem'];
  pageview_tops: ResolverTypeWrapper<pageview_tops>;
  query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items>;
  query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items: ResolverTypeWrapper<query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items>;
  queryInput_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_access: queryInput_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_access;
  metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response: ResolversTypes['new_registered_users'] | ResolversTypes['problem'];
  new_registered_users: ResolverTypeWrapper<new_registered_users>;
  query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items>;
  query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: ResolverTypeWrapper<query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>;
  queryInput_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_granularity: queryInput_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_granularity;
  metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response: ResolversTypes['unique_devices'] | ResolversTypes['problem'];
  unique_devices: ResolverTypeWrapper<unique_devices>;
  query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items: ResolverTypeWrapper<query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items>;
  queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_access_site: queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_access_site;
  queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_granularity: queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_granularity;
  cx_languagepairs: ResolverTypeWrapper<cx_languagepairs>;
  transform_list_pair_by_from_by_to_response: ResolversTypes['cx_list_tools'] | ResolversTypes['problem'];
  cx_list_tools: ResolverTypeWrapper<cx_list_tools>;
  transform_list_tool_by_tool_response: ResolversTypes['JSON_container'] | ResolversTypes['problem'];
  JSON_container: ResolverTypeWrapper<JSON_container>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  queryInput_transform_list_tool_by_tool_tool: queryInput_transform_list_tool_by_tool_tool;
  transform_list_tool_by_tool_by_from_response: ResolversTypes['JSON_container'] | ResolversTypes['problem'];
  queryInput_transform_list_tool_by_tool_by_from_tool: queryInput_transform_list_tool_by_tool_by_from_tool;
  transform_list_tool_by_tool_by_from_by_to_response: ResolversTypes['JSON_container'] | ResolversTypes['problem'];
  queryInput_transform_list_tool_by_tool_by_from_by_to_tool: queryInput_transform_list_tool_by_tool_by_from_by_to_tool;
  transform_word_from_by_from_lang_to_by_to_lang_by_word_response: ResolversTypes['cx_dict'] | ResolversTypes['problem'];
  cx_dict: ResolverTypeWrapper<cx_dict>;
  query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items: ResolverTypeWrapper<query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items>;
  transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response: ResolversTypes['cx_dict'] | ResolversTypes['problem'];
  queryInput_transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_provider: queryInput_transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_provider;
  mutationInput_post_media_math_check_by_type_type: mutationInput_post_media_math_check_by_type_type;
  post_transform_html_from_by_from_lang_to_by_to_lang_response: ResolversTypes['cx_mt'] | ResolversTypes['problem'];
  cx_mt: ResolverTypeWrapper<cx_mt>;
  post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response: ResolversTypes['cx_mt'] | ResolversTypes['problem'];
  mutationInput_post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_provider: mutationInput_post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_provider;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']>;
  HTTPMethod: HTTPMethod;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  feed_availability_response: ResolversParentTypes['availability'] | ResolversParentTypes['problem'];
  availability: availability;
  String: Scalars['String'];
  problem: problem;
  Int: Scalars['Int'];
  NonEmptyString: Scalars['NonEmptyString'];
  metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response: ResolversParentTypes['absolute_bytes_difference'] | ResolversParentTypes['problem'];
  absolute_bytes_difference: absolute_bytes_difference;
  query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  BigInt: Scalars['BigInt'];
  metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response: ResolversParentTypes['absolute_bytes_difference_per_page'] | ResolversParentTypes['problem'];
  absolute_bytes_difference_per_page: absolute_bytes_difference_per_page;
  query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response: ResolversParentTypes['net_bytes_difference'] | ResolversParentTypes['problem'];
  net_bytes_difference: net_bytes_difference;
  query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response: ResolversParentTypes['net_bytes_difference_per_page'] | ResolversParentTypes['problem'];
  net_bytes_difference_per_page: net_bytes_difference_per_page;
  query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response: ResolversParentTypes['edited_pages'] | ResolversParentTypes['problem'];
  edited_pages: edited_pages;
  query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response: ResolversParentTypes['new_pages'] | ResolversParentTypes['problem'];
  new_pages: new_pages;
  query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversParentTypes['top_edited_pages_by_abs_bytes_diff'] | ResolversParentTypes['problem'];
  top_edited_pages_by_abs_bytes_diff: top_edited_pages_by_abs_bytes_diff;
  query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items;
  query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items;
  query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items;
  metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversParentTypes['top_edited_pages_by_edits'] | ResolversParentTypes['problem'];
  top_edited_pages_by_edits: top_edited_pages_by_edits;
  query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items;
  query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items;
  query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items;
  metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversParentTypes['top_edited_pages_by_net_bytes_diff'] | ResolversParentTypes['problem'];
  top_edited_pages_by_net_bytes_diff: top_edited_pages_by_net_bytes_diff;
  query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items;
  query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items;
  query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items;
  metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response: ResolversParentTypes['editors'] | ResolversParentTypes['problem'];
  editors: editors;
  query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversParentTypes['top_editors_by_abs_bytes_diff'] | ResolversParentTypes['problem'];
  top_editors_by_abs_bytes_diff: top_editors_by_abs_bytes_diff;
  query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items;
  query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items;
  query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items;
  metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversParentTypes['top_editors_by_edits'] | ResolversParentTypes['problem'];
  top_editors_by_edits: top_editors_by_edits;
  query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items;
  query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items;
  query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items;
  metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response: ResolversParentTypes['top_editors_by_net_bytes_diff'] | ResolversParentTypes['problem'];
  top_editors_by_net_bytes_diff: top_editors_by_net_bytes_diff;
  query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items: query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items;
  query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items: query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items;
  query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items: query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items;
  metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response: ResolversParentTypes['edits'] | ResolversParentTypes['problem'];
  edits: edits;
  query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response: ResolversParentTypes['edits_per_page'] | ResolversParentTypes['problem'];
  edits_per_page: edits_per_page;
  query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response: ResolversParentTypes['pagecounts_project'] | ResolversParentTypes['problem'];
  pagecounts_project: pagecounts_project;
  query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items;
  metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response: ResolversParentTypes['pageview_project'] | ResolversParentTypes['problem'];
  pageview_project: pageview_project;
  query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items;
  metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response: ResolversParentTypes['pageview_article'] | ResolversParentTypes['problem'];
  pageview_article: pageview_article;
  query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items;
  metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response: ResolversParentTypes['by_country'] | ResolversParentTypes['problem'];
  by_country: by_country;
  query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items: query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items;
  query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items: query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items;
  metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response: ResolversParentTypes['pageview_tops'] | ResolversParentTypes['problem'];
  pageview_tops: pageview_tops;
  query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items: query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items;
  query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items: query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items;
  metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response: ResolversParentTypes['new_registered_users'] | ResolversParentTypes['problem'];
  new_registered_users: new_registered_users;
  query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items;
  query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items: query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items;
  metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response: ResolversParentTypes['unique_devices'] | ResolversParentTypes['problem'];
  unique_devices: unique_devices;
  query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items: query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items;
  cx_languagepairs: cx_languagepairs;
  transform_list_pair_by_from_by_to_response: ResolversParentTypes['cx_list_tools'] | ResolversParentTypes['problem'];
  cx_list_tools: cx_list_tools;
  transform_list_tool_by_tool_response: ResolversParentTypes['JSON_container'] | ResolversParentTypes['problem'];
  JSON_container: JSON_container;
  JSON: Scalars['JSON'];
  transform_list_tool_by_tool_by_from_response: ResolversParentTypes['JSON_container'] | ResolversParentTypes['problem'];
  transform_list_tool_by_tool_by_from_by_to_response: ResolversParentTypes['JSON_container'] | ResolversParentTypes['problem'];
  transform_word_from_by_from_lang_to_by_to_lang_by_word_response: ResolversParentTypes['cx_dict'] | ResolversParentTypes['problem'];
  cx_dict: cx_dict;
  query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items: query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items;
  transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response: ResolversParentTypes['cx_dict'] | ResolversParentTypes['problem'];
  post_transform_html_from_by_from_lang_to_by_to_lang_response: ResolversParentTypes['cx_mt'] | ResolversParentTypes['problem'];
  cx_mt: cx_mt;
  post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response: ResolversParentTypes['cx_mt'] | ResolversParentTypes['problem'];
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  ObjMap: Scalars['ObjMap'];
}>;

export type oneOfDirectiveArgs = { };

export type oneOfDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = oneOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type statusCodeTypeNameDirectiveArgs = {
  typeName?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['ID']>;
};

export type statusCodeTypeNameDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = statusCodeTypeNameDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type resolveRootFieldDirectiveArgs = {
  field?: Maybe<Scalars['String']>;
};

export type resolveRootFieldDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = resolveRootFieldDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type enumDirectiveArgs = {
  value?: Maybe<Scalars['String']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type globalOptionsDirectiveArgs = {
  sourceName?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  operationHeaders?: Maybe<Scalars['ObjMap']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']>;
  queryParams?: Maybe<Scalars['ObjMap']>;
};

export type globalOptionsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = globalOptionsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  path?: Maybe<Scalars['String']>;
  operationSpecificHeaders?: Maybe<Scalars['ObjMap']>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  feed_availability?: Resolver<Maybe<ResolversTypes['feed_availability_response']>, ParentType, ContextType>;
  media_math_formula_by_hash?: Resolver<Maybe<ResolversTypes['problem']>, ParentType, ContextType, RequireFields<Querymedia_math_formula_by_hashArgs, 'hash'>>;
  media_math_render_by_format_by_hash?: Resolver<Maybe<ResolversTypes['problem']>, ParentType, ContextType, RequireFields<Querymedia_math_render_by_format_by_hashArgs, 'format' | 'hash'>>;
  metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs, 'project' | 'editor_type' | 'page_type' | 'granularity' | 'start' | 'end'>>;
  metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs, 'project' | 'page_title' | 'editor_type' | 'granularity' | 'start' | 'end'>>;
  metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs, 'project' | 'editor_type' | 'page_type' | 'granularity' | 'start' | 'end'>>;
  metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs, 'project' | 'page_title' | 'editor_type' | 'granularity' | 'start' | 'end'>>;
  metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_endArgs, 'project' | 'editor_type' | 'page_type' | 'activity_level' | 'granularity' | 'start' | 'end'>>;
  metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs, 'project' | 'editor_type' | 'page_type' | 'granularity' | 'start' | 'end'>>;
  metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Resolver<Maybe<ResolversTypes['metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']>, ParentType, ContextType, RequireFields<Querymetrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, 'project' | 'editor_type' | 'page_type' | 'year' | 'month' | 'day'>>;
  metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Resolver<Maybe<ResolversTypes['metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']>, ParentType, ContextType, RequireFields<Querymetrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, 'project' | 'editor_type' | 'page_type' | 'year' | 'month' | 'day'>>;
  metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Resolver<Maybe<ResolversTypes['metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']>, ParentType, ContextType, RequireFields<Querymetrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, 'project' | 'editor_type' | 'page_type' | 'year' | 'month' | 'day'>>;
  metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_endArgs, 'project' | 'editor_type' | 'page_type' | 'activity_level' | 'granularity' | 'start' | 'end'>>;
  metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Resolver<Maybe<ResolversTypes['metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']>, ParentType, ContextType, RequireFields<Querymetrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, 'project' | 'editor_type' | 'page_type' | 'year' | 'month' | 'day'>>;
  metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Resolver<Maybe<ResolversTypes['metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']>, ParentType, ContextType, RequireFields<Querymetrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, 'project' | 'editor_type' | 'page_type' | 'year' | 'month' | 'day'>>;
  metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Resolver<Maybe<ResolversTypes['metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']>, ParentType, ContextType, RequireFields<Querymetrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, 'project' | 'editor_type' | 'page_type' | 'year' | 'month' | 'day'>>;
  metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs, 'project' | 'editor_type' | 'page_type' | 'granularity' | 'start' | 'end'>>;
  metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs, 'project' | 'page_title' | 'editor_type' | 'granularity' | 'start' | 'end'>>;
  metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_endArgs, 'project' | 'access_site' | 'granularity' | 'start' | 'end'>>;
  metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_endArgs, 'project' | 'access' | 'agent' | 'granularity' | 'start' | 'end'>>;
  metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_endArgs, 'project' | 'access' | 'agent' | 'article' | 'granularity' | 'start' | 'end'>>;
  metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month?: Resolver<Maybe<ResolversTypes['metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response']>, ParentType, ContextType, RequireFields<Querymetrics_pageviews_top_by_country_by_project_by_access_by_year_by_monthArgs, 'project' | 'access' | 'year' | 'month'>>;
  metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day?: Resolver<Maybe<ResolversTypes['metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response']>, ParentType, ContextType, RequireFields<Querymetrics_pageviews_top_by_project_by_access_by_year_by_month_by_dayArgs, 'project' | 'access' | 'year' | 'month' | 'day'>>;
  metrics_registered_users_new_by_project_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_registered_users_new_by_project_by_granularity_by_start_by_endArgs, 'project' | 'granularity' | 'start' | 'end'>>;
  metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end?: Resolver<Maybe<ResolversTypes['metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response']>, ParentType, ContextType, RequireFields<Querymetrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_endArgs, 'project' | 'access_site' | 'granularity' | 'start' | 'end'>>;
  transform_list_languagepairs?: Resolver<Maybe<ResolversTypes['cx_languagepairs']>, ParentType, ContextType>;
  transform_list_pair_by_from_by_to?: Resolver<Maybe<ResolversTypes['transform_list_pair_by_from_by_to_response']>, ParentType, ContextType, RequireFields<Querytransform_list_pair_by_from_by_toArgs, 'from' | 'to'>>;
  transform_list_tool_by_tool?: Resolver<Maybe<ResolversTypes['transform_list_tool_by_tool_response']>, ParentType, ContextType, RequireFields<Querytransform_list_tool_by_toolArgs, 'tool'>>;
  transform_list_tool_by_tool_by_from?: Resolver<Maybe<ResolversTypes['transform_list_tool_by_tool_by_from_response']>, ParentType, ContextType, RequireFields<Querytransform_list_tool_by_tool_by_fromArgs, 'tool' | 'from'>>;
  transform_list_tool_by_tool_by_from_by_to?: Resolver<Maybe<ResolversTypes['transform_list_tool_by_tool_by_from_by_to_response']>, ParentType, ContextType, RequireFields<Querytransform_list_tool_by_tool_by_from_by_toArgs, 'tool' | 'from' | 'to'>>;
  transform_word_from_by_from_lang_to_by_to_lang_by_word?: Resolver<Maybe<ResolversTypes['transform_word_from_by_from_lang_to_by_to_lang_by_word_response']>, ParentType, ContextType, RequireFields<Querytransform_word_from_by_from_lang_to_by_to_lang_by_wordArgs, 'from_lang' | 'to_lang' | 'word'>>;
  transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider?: Resolver<Maybe<ResolversTypes['transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response']>, ParentType, ContextType, RequireFields<Querytransform_word_from_by_from_lang_to_by_to_lang_by_word_by_providerArgs, 'from_lang' | 'to_lang' | 'word' | 'provider'>>;
  viewsInPastMonth?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType, RequireFields<QueryviewsInPastMonthArgs, 'project'>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  post_media_math_check_by_type?: Resolver<Maybe<ResolversTypes['problem']>, ParentType, ContextType, RequireFields<Mutationpost_media_math_check_by_typeArgs, 'type'>>;
  post_transform_html_from_by_from_lang_to_by_to_lang?: Resolver<Maybe<ResolversTypes['post_transform_html_from_by_from_lang_to_by_to_lang_response']>, ParentType, ContextType, RequireFields<Mutationpost_transform_html_from_by_from_lang_to_by_to_langArgs, 'from_lang' | 'to_lang'>>;
  post_transform_html_from_by_from_lang_to_by_to_lang_by_provider?: Resolver<Maybe<ResolversTypes['post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response']>, ParentType, ContextType, RequireFields<Mutationpost_transform_html_from_by_from_lang_to_by_to_lang_by_providerArgs, 'from_lang' | 'to_lang' | 'provider'>>;
}>;

export type feed_availability_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['feed_availability_response'] = ResolversParentTypes['feed_availability_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'availability' | 'problem', ParentType, ContextType>;
}>;

export type availabilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['availability'] = ResolversParentTypes['availability']> = ResolversObject<{
  in_the_news?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  most_read?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  on_this_day?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  picture_of_the_day?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  todays_featured_article?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type problemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['problem'] = ResolversParentTypes['problem']> = ResolversObject<{
  detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export type metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'absolute_bytes_difference' | 'problem', ParentType, ContextType>;
}>;

export type absolute_bytes_differenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['absolute_bytes_difference'] = ResolversParentTypes['absolute_bytes_difference']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  abs_bytes_diff?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'absolute_bytes_difference_per_page' | 'problem', ParentType, ContextType>;
}>;

export type absolute_bytes_difference_per_pageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['absolute_bytes_difference_per_page'] = ResolversParentTypes['absolute_bytes_difference_per_page']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  abs_bytes_diff?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'net_bytes_difference' | 'problem', ParentType, ContextType>;
}>;

export type net_bytes_differenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['net_bytes_difference'] = ResolversParentTypes['net_bytes_difference']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  net_bytes_diff?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'net_bytes_difference_per_page' | 'problem', ParentType, ContextType>;
}>;

export type net_bytes_difference_per_pageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['net_bytes_difference_per_page'] = ResolversParentTypes['net_bytes_difference_per_page']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  net_bytes_diff?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'edited_pages' | 'problem', ParentType, ContextType>;
}>;

export type edited_pagesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['edited_pages'] = ResolversParentTypes['edited_pages']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  activity_level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  edited_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'new_pages' | 'problem', ParentType, ContextType>;
}>;

export type new_pagesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['new_pages'] = ResolversParentTypes['new_pages']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  new_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response'] = ResolversParentTypes['metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'top_edited_pages_by_abs_bytes_diff' | 'problem', ParentType, ContextType>;
}>;

export type top_edited_pages_by_abs_bytes_diffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['top_edited_pages_by_abs_bytes_diff'] = ResolversParentTypes['top_edited_pages_by_abs_bytes_diff']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items'] = ResolversParentTypes['query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']> = ResolversObject<{
  abs_bytes_diff?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  page_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response'] = ResolversParentTypes['metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'top_edited_pages_by_edits' | 'problem', ParentType, ContextType>;
}>;

export type top_edited_pages_by_editsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['top_edited_pages_by_edits'] = ResolversParentTypes['top_edited_pages_by_edits']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items'] = ResolversParentTypes['query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']> = ResolversObject<{
  edits?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  page_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response'] = ResolversParentTypes['metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'top_edited_pages_by_net_bytes_diff' | 'problem', ParentType, ContextType>;
}>;

export type top_edited_pages_by_net_bytes_diffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['top_edited_pages_by_net_bytes_diff'] = ResolversParentTypes['top_edited_pages_by_net_bytes_diff']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items'] = ResolversParentTypes['query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']> = ResolversObject<{
  net_bytes_diff?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  page_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'editors' | 'problem', ParentType, ContextType>;
}>;

export type editorsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['editors'] = ResolversParentTypes['editors']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  activity_level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  editors?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response'] = ResolversParentTypes['metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'top_editors_by_abs_bytes_diff' | 'problem', ParentType, ContextType>;
}>;

export type top_editors_by_abs_bytes_diffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['top_editors_by_abs_bytes_diff'] = ResolversParentTypes['top_editors_by_abs_bytes_diff']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items'] = ResolversParentTypes['query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']> = ResolversObject<{
  abs_bytes_diff?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response'] = ResolversParentTypes['metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'top_editors_by_edits' | 'problem', ParentType, ContextType>;
}>;

export type top_editors_by_editsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['top_editors_by_edits'] = ResolversParentTypes['top_editors_by_edits']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items'] = ResolversParentTypes['query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']> = ResolversObject<{
  edits?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response'] = ResolversParentTypes['metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'top_editors_by_net_bytes_diff' | 'problem', ParentType, ContextType>;
}>;

export type top_editors_by_net_bytes_diffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['top_editors_by_net_bytes_diff'] = ResolversParentTypes['top_editors_by_net_bytes_diff']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items'] = ResolversParentTypes['query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items']> = ResolversObject<{
  net_bytes_diff?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'edits' | 'problem', ParentType, ContextType>;
}>;

export type editsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['edits'] = ResolversParentTypes['edits']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  edits?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'edits_per_page' | 'problem', ParentType, ContextType>;
}>;

export type edits_per_pageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['edits_per_page'] = ResolversParentTypes['edits_per_page']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  editor_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  edits?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'pagecounts_project' | 'problem', ParentType, ContextType>;
}>;

export type pagecounts_projectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['pagecounts_project'] = ResolversParentTypes['pagecounts_project']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  access_site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'pageview_project' | 'problem', ParentType, ContextType>;
}>;

export type pageview_projectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['pageview_project'] = ResolversParentTypes['pageview_project']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'pageview_article' | 'problem', ParentType, ContextType>;
}>;

export type pageview_articleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['pageview_article'] = ResolversParentTypes['pageview_article']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  article?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response'] = ResolversParentTypes['metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'by_country' | 'problem', ParentType, ContextType>;
}>;

export type by_countryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['by_country'] = ResolversParentTypes['by_country']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items']>>>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items'] = ResolversParentTypes['query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response'] = ResolversParentTypes['metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'pageview_tops' | 'problem', ParentType, ContextType>;
}>;

export type pageview_topsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['pageview_tops'] = ResolversParentTypes['pageview_tops']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  articles?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items']>>>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items'] = ResolversParentTypes['query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items']> = ResolversObject<{
  article?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_registered_users_new_by_project_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'new_registered_users' | 'problem', ParentType, ContextType>;
}>;

export type new_registered_usersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['new_registered_users'] = ResolversParentTypes['new_registered_users']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items'] = ResolversParentTypes['query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items']> = ResolversObject<{
  new_registered_users?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response'] = ResolversParentTypes['metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'unique_devices' | 'problem', ParentType, ContextType>;
}>;

export type unique_devicesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['unique_devices'] = ResolversParentTypes['unique_devices']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items'] = ResolversParentTypes['query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items']> = ResolversObject<{
  access_site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  devices?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type cx_languagepairsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['cx_languagepairs'] = ResolversParentTypes['cx_languagepairs']> = ResolversObject<{
  source?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  target?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type transform_list_pair_by_from_by_to_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['transform_list_pair_by_from_by_to_response'] = ResolversParentTypes['transform_list_pair_by_from_by_to_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'cx_list_tools' | 'problem', ParentType, ContextType>;
}>;

export type cx_list_toolsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['cx_list_tools'] = ResolversParentTypes['cx_list_tools']> = ResolversObject<{
  tools?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type transform_list_tool_by_tool_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['transform_list_tool_by_tool_response'] = ResolversParentTypes['transform_list_tool_by_tool_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'JSON_container' | 'problem', ParentType, ContextType>;
}>;

export type JSON_containerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['JSON_container'] = ResolversParentTypes['JSON_container']> = ResolversObject<{
  JSON?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type transform_list_tool_by_tool_by_from_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['transform_list_tool_by_tool_by_from_response'] = ResolversParentTypes['transform_list_tool_by_tool_by_from_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'JSON_container' | 'problem', ParentType, ContextType>;
}>;

export type transform_list_tool_by_tool_by_from_by_to_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['transform_list_tool_by_tool_by_from_by_to_response'] = ResolversParentTypes['transform_list_tool_by_tool_by_from_by_to_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'JSON_container' | 'problem', ParentType, ContextType>;
}>;

export type transform_word_from_by_from_lang_to_by_to_lang_by_word_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['transform_word_from_by_from_lang_to_by_to_lang_by_word_response'] = ResolversParentTypes['transform_word_from_by_from_lang_to_by_to_lang_by_word_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'cx_dict' | 'problem', ParentType, ContextType>;
}>;

export type cx_dictResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['cx_dict'] = ResolversParentTypes['cx_dict']> = ResolversObject<{
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items'] = ResolversParentTypes['query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items']> = ResolversObject<{
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response'] = ResolversParentTypes['transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'cx_dict' | 'problem', ParentType, ContextType>;
}>;

export type post_transform_html_from_by_from_lang_to_by_to_lang_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_transform_html_from_by_from_lang_to_by_to_lang_response'] = ResolversParentTypes['post_transform_html_from_by_from_lang_to_by_to_lang_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'cx_mt' | 'problem', ParentType, ContextType>;
}>;

export type cx_mtResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['cx_mt'] = ResolversParentTypes['cx_mt']> = ResolversObject<{
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response'] = ResolversParentTypes['post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'cx_mt' | 'problem', ParentType, ContextType>;
}>;

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  feed_availability_response?: feed_availability_responseResolvers<ContextType>;
  availability?: availabilityResolvers<ContextType>;
  problem?: problemResolvers<ContextType>;
  NonEmptyString?: GraphQLScalarType;
  metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response?: metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  absolute_bytes_difference?: absolute_bytes_differenceResolvers<ContextType>;
  query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response?: metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  absolute_bytes_difference_per_page?: absolute_bytes_difference_per_pageResolvers<ContextType>;
  query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response?: metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  net_bytes_difference?: net_bytes_differenceResolvers<ContextType>;
  query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response?: metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  net_bytes_difference_per_page?: net_bytes_difference_per_pageResolvers<ContextType>;
  query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response?: metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  edited_pages?: edited_pagesResolvers<ContextType>;
  query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response?: metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  new_pages?: new_pagesResolvers<ContextType>;
  query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response?: metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType>;
  top_edited_pages_by_abs_bytes_diff?: top_edited_pages_by_abs_bytes_diffResolvers<ContextType>;
  query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items?: query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items?: query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items?: query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType>;
  metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response?: metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType>;
  top_edited_pages_by_edits?: top_edited_pages_by_editsResolvers<ContextType>;
  query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items?: query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items?: query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items?: query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType>;
  metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response?: metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType>;
  top_edited_pages_by_net_bytes_diff?: top_edited_pages_by_net_bytes_diffResolvers<ContextType>;
  query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items?: query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items?: query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items?: query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType>;
  metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response?: metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  editors?: editorsResolvers<ContextType>;
  query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response?: metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType>;
  top_editors_by_abs_bytes_diff?: top_editors_by_abs_bytes_diffResolvers<ContextType>;
  query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items?: query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items?: query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items?: query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType>;
  metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response?: metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType>;
  top_editors_by_edits?: top_editors_by_editsResolvers<ContextType>;
  query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items?: query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items?: query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items?: query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType>;
  metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response?: metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_responseResolvers<ContextType>;
  top_editors_by_net_bytes_diff?: top_editors_by_net_bytes_diffResolvers<ContextType>;
  query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items?: query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items?: query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items?: query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_itemsResolvers<ContextType>;
  metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response?: metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  edits?: editsResolvers<ContextType>;
  query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response?: metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  edits_per_page?: edits_per_pageResolvers<ContextType>;
  query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response?: metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  pagecounts_project?: pagecounts_projectResolvers<ContextType>;
  query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response?: metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  pageview_project?: pageview_projectResolvers<ContextType>;
  query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response?: metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  pageview_article?: pageview_articleResolvers<ContextType>;
  query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response?: metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_responseResolvers<ContextType>;
  by_country?: by_countryResolvers<ContextType>;
  query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items?: query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items?: query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_itemsResolvers<ContextType>;
  metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response?: metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_responseResolvers<ContextType>;
  pageview_tops?: pageview_topsResolvers<ContextType>;
  query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items?: query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items?: query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_itemsResolvers<ContextType>;
  metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response?: metrics_registered_users_new_by_project_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  new_registered_users?: new_registered_usersResolvers<ContextType>;
  query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items?: query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_itemsResolvers<ContextType>;
  metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response?: metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_responseResolvers<ContextType>;
  unique_devices?: unique_devicesResolvers<ContextType>;
  query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items?: query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_itemsResolvers<ContextType>;
  cx_languagepairs?: cx_languagepairsResolvers<ContextType>;
  transform_list_pair_by_from_by_to_response?: transform_list_pair_by_from_by_to_responseResolvers<ContextType>;
  cx_list_tools?: cx_list_toolsResolvers<ContextType>;
  transform_list_tool_by_tool_response?: transform_list_tool_by_tool_responseResolvers<ContextType>;
  JSON_container?: JSON_containerResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  transform_list_tool_by_tool_by_from_response?: transform_list_tool_by_tool_by_from_responseResolvers<ContextType>;
  transform_list_tool_by_tool_by_from_by_to_response?: transform_list_tool_by_tool_by_from_by_to_responseResolvers<ContextType>;
  transform_word_from_by_from_lang_to_by_to_lang_by_word_response?: transform_word_from_by_from_lang_to_by_to_lang_by_word_responseResolvers<ContextType>;
  cx_dict?: cx_dictResolvers<ContextType>;
  query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items?: query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_itemsResolvers<ContextType>;
  transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response?: transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_responseResolvers<ContextType>;
  post_transform_html_from_by_from_lang_to_by_to_lang_response?: post_transform_html_from_by_from_lang_to_by_to_lang_responseResolvers<ContextType>;
  cx_mt?: cx_mtResolvers<ContextType>;
  post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response?: post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_responseResolvers<ContextType>;
  ObjMap?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  oneOf?: oneOfDirectiveResolver<any, any, ContextType>;
  statusCodeTypeName?: statusCodeTypeNameDirectiveResolver<any, any, ContextType>;
  resolveRootField?: resolveRootFieldDirectiveResolver<any, any, ContextType>;
  enum?: enumDirectiveResolver<any, any, ContextType>;
  globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = WikiTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
export function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltMesh().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type viewsInPastMonthQueryVariables = Exact<{ [key: string]: never; }>;


export type viewsInPastMonthQuery = Pick<Query, 'viewsInPastMonth'>;

export type wikipediaMetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type wikipediaMetricsQuery = { metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end?: Maybe<{ items?: Maybe<Array<Maybe<Pick<query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items, 'views'>>>> } | {}> };


export const viewsInPastMonthDocument = gql`
    query viewsInPastMonth {
  viewsInPastMonth(project: "en.wikipedia.org")
}
    ` as unknown as DocumentNode<viewsInPastMonthQuery, viewsInPastMonthQueryVariables>;
export const wikipediaMetricsDocument = gql`
    query wikipediaMetrics {
  metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end(
    access: all_access
    agent: user
    start: "20200101"
    end: "20200226"
    project: "en.wikipedia.org"
    granularity: daily
  ) {
    ... on pageview_project {
      items {
        views
      }
    }
  }
}
    ` as unknown as DocumentNode<wikipediaMetricsQuery, wikipediaMetricsQueryVariables>;



export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    viewsInPastMonth(variables?: viewsInPastMonthQueryVariables, options?: C): Promise<viewsInPastMonthQuery> {
      return requester<viewsInPastMonthQuery, viewsInPastMonthQueryVariables>(viewsInPastMonthDocument, variables, options) as Promise<viewsInPastMonthQuery>;
    },
    wikipediaMetrics(variables?: wikipediaMetricsQueryVariables, options?: C): Promise<wikipediaMetricsQuery> {
      return requester<wikipediaMetricsQuery, wikipediaMetricsQueryVariables>(wikipediaMetricsDocument, variables, options) as Promise<wikipediaMetricsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;